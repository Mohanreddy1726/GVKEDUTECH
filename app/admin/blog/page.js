"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, X, RefreshCw, Save, ArrowLeft, Bold, Italic, Underline, List, Link as LinkIcon, FileSpreadsheet } from "lucide-react";
import * as XLSX from "xlsx";

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    image: "",
    author: "GVK Edutech",
    category: "MBBS Abroad",
    tags: "",
  });
  const contentRef = useRef(null);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!isLoggedIn) {
      router.push("/admin/login");
      return;
    }
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/blog/");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } catch (err) {
      toast({ title: "Error", description: "Failed to load posts", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (slug) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(`/api/blog/${slug}`, { method: "DELETE" });
      if (res.ok) {
        toast({ title: "Deleted", description: "Post deleted successfully" });
        fetchPosts();
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to delete post", variant: "destructive" });
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image: post.image,
      author: post.author,
      category: post.category,
      tags: post.tags?.join(", ") || "",
    });
    setShowModal(true);
  };

  const handleAdd = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      image: "",
      author: "GVK Edutech",
      category: "MBBS Abroad",
      tags: "",
    });
    setShowModal(true);
  };

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
    };

    if (!editingPost) {
      payload.slug = formData.slug || generateSlug(formData.title);
    }

    try {
      const url = editingPost ? `/api/blog/${editingPost.slug}` : "/api/blog/";
      const method = editingPost ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast({
          title: editingPost ? "Updated" : "Created",
          description: `Post ${editingPost ? "updated" : "created"} successfully`,
          variant: "success",
        });
        setShowModal(false);
        fetchPosts();
      } else {
        throw new Error();
      }
    } catch {
      toast({ title: "Error", description: "Failed to save post", variant: "destructive" });
    }
  };

  const insertFormatting = (tag, endTag = tag) => {
    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.content;
    const selectedText = text.substring(start, end) || "Text here";

    const newContent =
      text.substring(0, start) +
      `<${tag}>${selectedText}</${endTag}>` +
      text.substring(end);

    setFormData({ ...formData, content: newContent });

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + tag.length + 2, start + tag.length + 2 + selectedText.length);
    }, 0);
  };

  const insertLink = () => {
    const url = prompt("Enter URL:");
    if (!url) return;

    const textarea = contentRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = formData.content;
    const selectedText = text.substring(start, end) || "Link text";

    const newContent =
      text.substring(0, start) +
      `<a href="${url}">${selectedText}</a>` +
      text.substring(end);

    setFormData({ ...formData, content: newContent });
  };

  const exportToExcel = (dataArray, filename) => {
    const headers = ["Title", "Author", "Category", "Tags", "Created At"];
    const ws = XLSX.utils.json_to_sheet(
      dataArray.map((item) => ({
        Title: item.title || "N/A",
        Author: item.author || "N/A",
        Category: item.category || "N/A",
        Tags: item.tags?.join(", ") || "N/A",
        "Created At": item.createdAt ? new Date(item.createdAt).toLocaleDateString() : "N/A",
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
              <h1 className="text-3xl font-bold text-foreground">Blog Management</h1>
              <p className="text-muted-foreground">Create and manage blog posts</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={fetchPosts} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              {posts.length > 0 && (
                <>
                  <Button variant="outline" onClick={() => exportToExcel(posts, "Blog_Posts")}>
                    <FileSpreadsheet className="w-4 h-4 mr-2" />
                    Export Excel
                  </Button>
                </>
              )}
              <Button variant="accent" onClick={handleAdd}>
                <Plus className="w-4 h-4 mr-2" />
                Add New Post
              </Button>
            </div>
          </div>

          {/* Posts Grid */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : posts.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-xl text-muted-foreground mb-4">No blog posts yet</p>
                <Button variant="accent" onClick={handleAdd}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post._id} className="overflow-hidden border-border hover:border-accent transition-all">
                  <div className="relative h-40">
                    <img
                      src={post.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                      >
                        <Edit2 className="w-4 h-4 text-foreground" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.slug)}
                        className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </button>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <Badge variant="outline" className="mb-3">{post.category || "Article"}</Badge>
                    <h3 className="font-bold text-lg text-foreground line-clamp-2 mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{editingPost ? "Edit Post" : "Create New Post"}</CardTitle>
                <button onClick={() => setShowModal(false)} className="p-2 hover:bg-muted rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title *</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => {
                        setFormData({ ...formData, title: e.target.value });
                        if (!editingPost) {
                          setFormData((prev) => ({ ...prev, slug: generateSlug(e.target.value) }));
                        }
                      }}
                      placeholder="Enter post title"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Slug</label>
                    <Input
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="auto-generated-if-empty"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Excerpt *</label>
                    <Input
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Brief summary of the post..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Content *</label>
                    {/* Formatting Toolbar */}
                    <div className="flex flex-wrap gap-1 mb-2 p-2 border border-border rounded-lg bg-muted/50">
                      <button
                        type="button"
                        onClick={() => insertFormatting("strong")}
                        className="p-2 hover:bg-background rounded transition-colors"
                        title="Bold"
                      >
                        <Bold className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("em")}
                        className="p-2 hover:bg-background rounded transition-colors"
                        title="Italic"
                      >
                        <Italic className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("u")}
                        className="p-2 hover:bg-background rounded transition-colors"
                        title="Underline"
                      >
                        <Underline className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("h2")}
                        className="p-2 hover:bg-background rounded transition-colors font-bold text-sm"
                        title="Heading 2"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("h3")}
                        className="p-2 hover:bg-background rounded transition-colors font-bold text-sm"
                        title="Heading 3"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("p")}
                        className="p-2 hover:bg-background rounded transition-colors text-sm"
                        title="Paragraph"
                      >
                        P
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("ul")}
                        className="p-2 hover:bg-background rounded transition-colors"
                        title="Bullet List"
                      >
                        <List className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("ol")}
                        className="p-2 hover:bg-background rounded transition-colors text-sm font-bold"
                        title="Numbered List"
                      >
                        1.
                      </button>
                      <button
                        type="button"
                        onClick={insertLink}
                        className="p-2 hover:bg-background rounded transition-colors"
                        title="Insert Link"
                      >
                        <LinkIcon className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("br")}
                        className="p-2 hover:bg-background rounded transition-colors text-sm"
                        title="Line Break"
                      >
                        BR
                      </button>
                    </div>
                    {/* Textarea */}
                    <textarea
                      ref={contentRef}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your post content... Use toolbar buttons to format text"
                      rows={12}
                      required
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:border-accent focus:outline-none text-foreground resize-y font-mono text-sm"
                    />
                    <p className="text-xs text-muted-foreground">
                      Tip: Select text and click a format button to apply formatting. Content is saved as HTML.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Image URL</label>
                      <Input
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full h-10 px-3 rounded-lg border border-border bg-white"
                      >
                        <option value="MBBS Abroad">MBBS Abroad</option>
                        <option value="Masters">Masters</option>
                        <option value="Scholarships">Scholarships</option>
                        <option value="Visa Guide">Visa Guide</option>
                        <option value="Student Life">Student Life</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Author</label>
                      <Input
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        placeholder="Author name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tags (comma separated)</label>
                      <Input
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        placeholder="mbbs, abroad, medicine"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" variant="accent" className="flex-1">
                      <Save className="w-4 h-4 mr-2" />
                      {editingPost ? "Update Post" : "Create Post"}
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
