"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    id: "N-wi2Y1QVCw",
    title: "Dr. Priya's Journey to Georgia",
    university: "Tbilisi State Medical University",
    country: "Georgia",
  },
  {
    id: "72cA_Aq9Jsc",
    title: "Rahul's MBBS Experience in Russia",
    university: "Kazan Federal University",
    country: "Russia",
  },
  {
    id: "N-wi2Y1QVCw",
    title: "Sneha's Success in Kazakhstan",
    university: "Kazakh National Medical University",
    country: "Kazakhstan",
  },
  {
    id: "N-wi2Y1QVCw",
    title: "Arun's Masters in UK",
    university: "University of Birmingham",
    country: "UK",
  },
  {
    id: "N-wi2Y1QVCw",
    title: "Kavya's MBBS in Kyrgyzstan",
    university: "Osh State University",
    country: "Kyrgyzstan",
  },
  {
    id: "N-wi2Y1QVCw",
    title: "Vikram's Journey to Australia",
    university: "University of Melbourne",
    country: "Australia",
  },
];

export const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 380;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  const visibleTestimonials = testimonials;

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
            {visibleTestimonials.map((video, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[340px] snap-start"
              >
                <div className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg group/card">
                  {activeVideo === `${video.id}-${idx}` ? (
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <div
                      className="aspect-video relative cursor-pointer"
                      onClick={() => setActiveVideo(`${video.id}-${idx}`)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
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