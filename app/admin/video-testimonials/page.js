"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, X, RefreshCw, Play, Save, ArrowLeft, FileSpreadsheet, Video } from "lucide-react";
import * as XLSX from "xlsx";

export default function AdminVideoTestimonialsPage() {
  const router = useRouter();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [formData, setFormData] = useState({
    youtubeId: "",
    title: "",
    university: "",
    country: "",
    featured: false,
    order: 0,
  });

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
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/video-testimonials/");
      if (res.ok) {
        const data = await res.json();
        setVideos(data);
      }
    } catch (err) {
      toast({ title: "Error", description: "Failed to load videos", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this video testimonial?")) return;

    try {
      const res = await fetch(`/api/video-testimonials/${id}/`, { method: "DELETE" });
      if (res.ok) {
        toast({ title: "Deleted", description: "Video testimonial deleted successfully" });
        fetchVideos();
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to delete video", variant: "destructive" });
    }
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
    setFormData({
      youtubeId: video.youtubeId,
      title: video.title,
      university: video.university || "",
      country: video.country || "",
      featured: video.featured || false,
      order: video.order || 0,
    });
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingVideo(null);
    setFormData({
      youtubeId: "",
      title: "",
      university: "",
      country: "",
      featured: false,
      order: 0,
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.youtubeId.trim()) {
      toast({ title: "Error", description: "YouTube ID is required", variant: "destructive" });
      return;
    }

    try {
      const url = editingVideo ? `/api/video-testimonials/${editingVideo._id}/` : "/api/video-testimonials/";
      const method = editingVideo ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: editingVideo ? "Updated" : "Created",
          description: `Video testimonial ${editingVideo ? "updated" : "created"} successfully`,
          variant: "success",
        });
        setShowModal(false);
        fetchVideos();
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to save video", variant: "destructive" });
    }
  };

  const exportToExcel = (dataArray, filename) => {
    const ws = XLSX.utils.json_to_sheet(
      dataArray.map((item) => ({
        Title: item.title || "N/A",
        University: item.university || "N/A",
        Country: item.country || "N/A",
        "YouTube ID": item.youtubeId || "N/A",
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
              <h1 className="text-3xl font-bold text-foreground">Video Testimonials Management</h1>
              <p className="text-muted-foreground">Manage success story video testimonials</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={fetchVideos} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              {videos.length > 0 && (
                <Button variant="outline" onClick={() => exportToExcel(videos, "Video_Testimonials")}>
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Export Excel
                </Button>
              )}
              <Button variant="accent" onClick={handleAdd}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Video
              </Button>
            </div>
          </div>

          {/* Videos Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : videos.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-xl text-muted-foreground mb-4">No video testimonials yet</p>
                <Button variant="accent" onClick={handleAdd}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Video
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card key={video._id} className="overflow-hidden border-border hover:border-accent transition-all">
                  <div className="relative aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/640x360?text=No+Thumbnail";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-xl">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                    {video.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="accent">Featured</Badge>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => handleEdit(video)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                      >
                        <Edit2 className="w-4 h-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => handleDelete(video._id)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-foreground line-clamp-1 mb-1">{video.title}</h3>
                    {video.university && <p className="text-sm text-muted-foreground line-clamp-1">{video.university}</p>}
                    {video.country && <p className="text-xs text-muted-foreground mt-1">{video.country}</p>}
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
                <CardTitle>{editingVideo ? "Edit Video Testimonial" : "Add New Video Testimonial"}</CardTitle>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-muted rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">YouTube Video ID *</label>
                    <div className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-red-600" />
                      <Input
                        value={formData.youtubeId}
                        onChange={(e) => setFormData({ ...formData, youtubeId: e.target.value })}
                        placeholder="e.g., N-wi2Y1QVCw"
                        required
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Find the video ID in the YouTube URL: youtube.com/watch?v=<strong>VIDEO_ID</strong>
                    </p>
                    {formData.youtubeId && (
                      <div className="mt-2">
                        <img
                          src={`https://img.youtube.com/vi/${formData.youtubeId}/hqdefault.jpg`}
                          alt="Preview"
                          className="w-full max-w-md rounded-lg"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title *</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Dr. Priya's Journey to Georgia"
                      required
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

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="w-4 h-4"
                      />
                      <label htmlFor="featured" className="text-sm font-medium">Featured Video</label>
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
                      {editingVideo ? "Update Video" : "Add Video"}
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
