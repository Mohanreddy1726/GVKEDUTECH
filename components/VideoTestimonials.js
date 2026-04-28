"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, ArrowRight, VideoOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const VideoTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/video-testimonials/");
      if (res.ok) {
        const data = await res.json();
        // Get latest 6 videos sorted by createdAt (already sorted from API)
        setTestimonials(data.slice(0, 6));
      }
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 380;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Student Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Watch Our <span className="text-accent">Success Stories</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from students who achieved their dreams with GVK EduTech guidance
          </p>
        </div>

        {/* Carousel */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        ) : testimonials.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <VideoOff className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No testimonials uploaded yet</p>
          </div>
        ) : (
          <div className="relative group">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/90 border border-border rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-x-1/2"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((video, idx) => (
                <div
                  key={video._id}
                  className="flex-shrink-0 w-[340px] snap-start"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg group/card">
                    {activeVideo === `${video.youtubeId}-${idx}` ? (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <div
                        className="aspect-video relative cursor-pointer"
                        onClick={() => setActiveVideo(`${video.youtubeId}-${idx}`)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover/card:bg-black/40 transition-colors">
                          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-xl transform group-hover/card:scale-110 transition-transform">
                            <Play className="w-7 h-7 text-white fill-white ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-sm mb-1">{video.title}</h3>
                      <p className="text-xs text-muted-foreground">{video.university} • {video.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View More */}
        <div className="text-center mt-10">
          <Button variant="accent" size="lg" asChild>
            <Link href="/gallery">
              View All Success Stories
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};