"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, X, RefreshCw, Save, ArrowLeft, FileSpreadsheet, Image as ImageIcon } from "lucide-react";
import * as XLSX from "xlsx";

export default function AdminPhotoGalleryPage() {
  const router = useRouter();
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [formData, setFormData] = useState({
    url: "",
    thumbnailUrl: "",
    caption: "",
    category: "others",
    university: "",
    country: "",
    featured: false,
    order: 0,
  });

  const categories = [
    { value: "directors", label: "Directors" },
    { value: "staff", label: "Staff" },
    { value: "students", label: "Students" },
    { value: "events", label: "Events" },
    { value: "awards", label: "Awards" },
    { value: "foundation", label: "Foundation" },
    { value: "airport", label: "Airport" },
    { value: "others", label: "Others" },
  ];

  const countries = [
    { value: "Georgia", label: "Georgia" },
    { value: "Russia", label: "Russia" },
    { value: "Kazakhstan", label: "Kazakhstan" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Uzbekistan", label: "Uzbekistan" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Nepal", label: "Nepal" },
    { value: "UK", label: "UK" },
    { value: "USA", label: "USA" },
    { value: "Australia", label: "Australia" },
    { value: "Germany", label: "Germany" },
    { value: "Europe", label: "Europe" },
  ];

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/photo-gallery/");
      if (res.ok) {
        const data = await res.json();
        setPhotos(data);
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to load photos", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this photo?")) return;

    try {
      const res = await fetch(`/api/photo-gallery/${id}/`, { method: "DELETE" });
      if (res.ok) {
        toast({ title: "Deleted", description: "Photo deleted successfully" });
        fetchPhotos();
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to delete photo", variant: "destructive" });
    }
  };

  const handleEdit = (photo) => {
    setEditingPhoto(photo);
    setFormData({
      url: photo.url || "",
      thumbnailUrl: photo.thumbnailUrl || "",
      caption: photo.caption || "",
      category: photo.category || "others",
      university: photo.university || "",
      country: photo.country || "",
      featured: photo.featured || false,
      order: photo.order || 0,
    });
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingPhoto(null);
    setFormData({
      url: "",
      thumbnailUrl: "",
      caption: "",
      category: "others",
      university: "",
      country: "",
      featured: false,
      order: 0,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.url.trim()) {
      toast({ title: "Error", description: "Image URL is required", variant: "destructive" });
      return;
    }

    const payload = {
      ...formData,
      thumbnailUrl: formData.thumbnailUrl.trim() || formData.url.trim(),
    };

    try {
      const url = editingPhoto
        ? `/api/photo-gallery/${editingPhoto._id}/`
        : "/api/photo-gallery/";
      const method = editingPhoto ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast({
          title: editingPhoto ? "Updated" : "Created",
          description: `Photo ${editingPhoto ? "updated" : "created"} successfully`,
          variant: "success",
        });
        setShowModal(false);
        fetchPhotos();
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to save photo", variant: "destructive" });
    }
  };

  const exportToExcel = (dataArray, filename) => {
    const ws = XLSX.utils.json_to_sheet(
      dataArray.map((item) => ({
        Caption: item.caption || "N/A",
        Category: item.category || "N/A",
        University: item.university || "N/A",
        Country: item.country || "N/A",
        "Image URL": item.url || "N/A",
        "Thumbnail URL": item.thumbnailUrl || "N/A",
        Featured: item.featured ? "Yes" : "No",
        Order: item.order || 0,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, filename);
    XLSX.writeFile(wb, `${filename}_${new Date().toISOString().split("T")[0]}.xlsx`);
    toast({ title: "Exported", description: `${filename}.xlsx downloaded`, variant: "success" });
  };

  return (
    <PageLayout>
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button variant="ghost" onClick={() => router.push("/admin/dashboard")} className="mb-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-3xl font-bold text-foreground">Photo Gallery Management</h1>
              <p className="text-muted-foreground">Manage gallery photos across campus, events, convocation and more</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={fetchPhotos} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              {photos.length > 0 && (
                <Button variant="outline" onClick={() => exportToExcel(photos, "Photo_Gallery")}>
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export Excel
                </Button>
              )}
              <Button variant="accent" onClick={handleAdd}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Photo
              </Button>
            </div>
          </div>

          {/* Photo Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : photos.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground mb-4">No photos yet</p>
                <Button variant="accent" onClick={handleAdd}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Photo
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <Card key={photo._id} className="overflow-hidden border-border hover:border-accent transition-all">
                  <div className="relative aspect-[4/3] bg-muted">
                    <img
                      src={photo.thumbnailUrl || photo.url}
                      alt={photo.caption || "Gallery photo"}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/640x480?text=Image+Error";
                      }}
                    />
                    {photo.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="accent">Featured</Badge>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => handleEdit(photo)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                        aria-label="Edit photo"
                      >
                        <Edit2 className="w-4 h-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => handleDelete(photo._id)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                        aria-label="Delete photo"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-foreground line-clamp-1 mb-1">
                      {photo.caption || "Untitled photo"}
                    </h3>
                    {photo.university && (
                      <p className="text-sm text-muted-foreground line-clamp-1">{photo.university}</p>
                    )}
                    {photo.country && (
                      <p className="text-xs text-muted-foreground mt-1">{photo.country}</p>
                    )}
                    {photo.category && (
                      <p className="text-xs text-accent mt-1 font-medium">
                        {categories.find((c) => c.value === photo.category)?.label || photo.category}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{editingPhoto ? "Edit Photo" : "Add New Photo"}</CardTitle>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-muted rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Image URL *</label>
                    <Input
                      value={formData.url}
                      onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                      placeholder="https://cdn.example.com/photo.jpg"
                      required
                    />
                    {formData.url && (
                      <div className="mt-2 rounded-lg overflow-hidden border border-border bg-muted">
                        <img
                          src={formData.thumbnailUrl || formData.url}
                          alt="Preview"
                          className="w-full max-h-64 object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Thumbnail URL (optional)</label>
                    <Input
                      value={formData.thumbnailUrl}
                      onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                      placeholder="Leave blank to use the image URL"
                    />
                    <p className="text-xs text-muted-foreground">
                      Use a smaller, optimized version for faster loading. Falls back to the image URL.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Caption</label>
                    <Input
                      value={formData.caption}
                      onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                      placeholder="e.g., Convocation 2025 - Tbilisi"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">University</label>
                    <Input
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      placeholder="e.g., Tbilisi State Medical University"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Country</label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-white"
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-white"
                    >
                      {categories.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <label htmlFor="featured" className="text-sm font-medium">Featured</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium">Order:</label>
                      <Input
                        type="number"
                        value={formData.order}
                        onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                        className="w-20 h-8"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" variant="accent" className="flex-1">
                      <Save className="w-4 h-4 mr-2" />
                      {editingPhoto ? "Update Photo" : "Add Photo"}
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setShowModal(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
