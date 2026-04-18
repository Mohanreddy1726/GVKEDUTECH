"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const allVideos = [
  { id: "N-wi2Y1QVCw", title: "Dr. Priya's Journey to Georgia", university: "Tbilisi State Medical University", country: "Georgia" },
  { id: "N-wi2Y1QVCw", title: "Rahul's MBBS Experience in Russia", university: "Kazan Federal University", country: "Russia" },
  { id: "N-wi2Y1QVCw", title: "Sneha's Success in Kazakhstan", university: "Kazakh National Medical University", country: "Kazakhstan" },
  { id: "N-wi2Y1QVCw", title: "Arun's Masters in UK", university: "University of Birmingham", country: "UK" },
  { id: "N-wi2Y1QVCw", title: "Kavya's MBBS in Kyrgyzstan", university: "Osh State University", country: "Kyrgyzstan" },
  { id: "N-wi2Y1QVCw", title: "Vikram's Journey to Australia", university: "University of Melbourne", country: "Australia" },
  { id: "N-wi2Y1QVCw", title: "Meera's MBBS in Uzbekistan", university: "Tashkent Medical Academy", country: "Uzbekistan" },
  { id: "N-wi2Y1QVCw", title: "Ravi's Masters in USA", university: "Boston University", country: "USA" },
  { id: "N-wi2Y1QVCw", title: "Anitha's Journey to Germany", university: "Heidelberg University", country: "Germany" },
  { id: "N-wi2Y1QVCw", title: "Suresh's MBBS in Vietnam", university: "Hanoi Medical University", country: "Vietnam" },
  { id: "N-wi2Y1QVCw", title: "Divya's Masters in Europe", university: "Charles University Prague", country: "Europe" },
  { id: "N-wi2Y1QVCw", title: "Kiran's Success Story", university: "Georgian National University", country: "Georgia" },
];

const GalleryPage = () => {
  const [modalVideo, setModalVideo] = useState(null);

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
                src={`https://www.youtube.com/embed/${modalVideo.id}?autoplay=1&rel=0`}
                title={modalVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-xl font-bold">{modalVideo.title}</h3>
              <p className="text-white/70">{modalVideo.university} • {modalVideo.country}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allVideos.map((video, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-card border border-border shadow-lg group cursor-pointer"
                onClick={() => setModalVideo(video)}
              >
                <div className="aspect-video relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
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
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;