"use client";

import { useState, useEffect } from "react";
import { Play, X, RefreshCw, VideoOff } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const categories = [
  { value: "all", label: "All Videos" },
  { value: "student-testimonial", label: "Student Testimonials" },
  { value: "parent-testimonial", label: "Parent Testimonials" },
  { value: "chief-guest-speech", label: "Chief Guest Speeches" },
  { value: "government-official-speech", label: "Government Official Speeches" },
  { value: "regional-director-speech", label: "Regional Directors Speeches" },
  { value: "director-speech", label: "Directors Speeches" },
  { value: "others", label: "Others" },
];

const GalleryPage = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVideo, setModalVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/video-testimonials/");
      if (res.ok) {
        const data = await res.json();
        setAllVideos(data);
      }
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredVideos = selectedCategory === "all"
    ? allVideos
    : allVideos.filter(video => video.category === selectedCategory);

  const getCategoryLabel = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.label : category;
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Success Stories Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch video testimonials from students who achieved their dreams with GVK Edutech
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Filter by:</span>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.value
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setModalVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{modalVideo.title}</h3>
              <p className="text-white/70">{modalVideo.university} • {modalVideo.country}</p>
              {modalVideo.category && modalVideo.category !== "student-testimonial" && (
                <p className="text-white/50 text-sm mt-1">Category: {getCategoryLabel(modalVideo.category)}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <RefreshCw className="w-8 h-8 animate-spin text-accent" />
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <VideoOff className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Testimonials in This Category</h3>
              <p className="text-muted-foreground">Video testimonials for this category will appear here once uploaded.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video._id}
                  className="rounded-2xl overflow-hidden bg-card border border-border shadow-lg group cursor-pointer"
                  onClick={() => setModalVideo(video)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.university} • {video.country}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;