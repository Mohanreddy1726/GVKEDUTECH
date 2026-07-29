"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Play, X, RefreshCw, VideoOff, Image as ImageIcon, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

const videoCategories = [
  { value: "all", label: "All Videos", icon: "🎬" },
  { value: "student-testimonial", label: "Student Testimonials", icon: "👨‍🎓" },
  { value: "parent-testimonial", label: "Parent Testimonials", icon: "👨‍👩‍👧" },
  { value: "chief-guest-speech", label: "Chief Guest Speeches", icon: "🎤" },
  { value: "government-official-speech", label: "Government Official Speeches", icon: "🏛️" },
  { value: "regional-director-speech", label: "Regional Directors Speeches", icon: "📍" },
  { value: "director-speech", label: "Directors Speeches", icon: "🎯" },
  { value: "others", label: "Others", icon: "📌" },
];

const photoCategories = [
  { value: "all", label: "All Photos", icon: "🖼️" },
  { value: "directors", label: "Directors", icon: "🎯" },
  { value: "staff", label: "Staff", icon: "👥" },
  { value: "students", label: "Students", icon: "👨‍🎓" },
  { value: "events", label: "Events", icon: "🎉" },
  { value: "awards", label: "Awards", icon: "🏆" },
  { value: "foundation", label: "Foundation", icon: "🏛️" },
  { value: "airport", label: "Airport", icon: "✈️" },
  { value: "others", label: "Others", icon: "📌" },
];

const GalleryPage = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(true);
  const [modalVideo, setModalVideo] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [selectedVideoCategory, setSelectedVideoCategory] = useState("all");
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("videos");

  useEffect(() => {
    fetchVideos();
    fetchPhotos();
  }, []);

  const fetchVideos = async () => {
    setIsLoadingVideos(true);
    try {
      const res = await fetch("/api/video-testimonials/");
      if (res.ok) {
        const data = await res.json();
        setAllVideos(data);
      }
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    } finally {
      setIsLoadingVideos(false);
    }
  };

  const fetchPhotos = async () => {
    setIsLoadingPhotos(true);
    try {
      const res = await fetch("/api/photo-gallery/");
      if (res.ok) {
        const data = await res.json();
        setAllPhotos(data);
      }
    } catch (err) {
      console.error("Failed to fetch photos:", err);
    } finally {
      setIsLoadingPhotos(false);
    }
  };

  const filteredVideos = selectedVideoCategory === "all"
    ? allVideos
    : allVideos.filter((video) => video.category === selectedVideoCategory);

  const filteredPhotos = selectedPhotoCategory === "all"
    ? allPhotos
    : allPhotos.filter((photo) => photo.category === selectedPhotoCategory);

  const getVideoCategoryLabel = (category) => {
    const cat = videoCategories.find((c) => c.value === category);
    return cat ? cat.label : category;
  };

  const getPhotoCategoryLabel = (category) => {
    const cat = photoCategories.find((c) => c.value === category);
    return cat ? cat.label : category;
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const lightboxNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filteredPhotos.length));
  }, [filteredPhotos.length]);

  const lightboxPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [filteredPhotos.length]);

  const touchStartXRef = useRef(null);
  const handleTouchStart = useCallback((e) => {
    touchStartXRef.current = e.touches[0].clientX;
  }, []);
  const handleTouchEnd = useCallback((e) => {
    if (touchStartXRef.current === null || filteredPhotos.length <= 1) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX > 60) lightboxPrev();
    else if (deltaX < -60) lightboxNext();
    touchStartXRef.current = null;
  }, [filteredPhotos.length, lightboxNext, lightboxPrev]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") lightboxNext();
      else if (e.key === "ArrowLeft") lightboxPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, lightboxNext, lightboxPrev, closeLightbox]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success Stories Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore video testimonials and photo highlights from students who achieved
            their dreams with GVK Edutech.
          </p>
        </div>
      </section>

      {/* Media Type Tabs + Sticky Filters */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="container mx-auto px-4">
          {/* Media Type Toggle */}
          <div className="flex justify-center mb-5 overflow-x-auto px-2">
            <div
              role="tablist"
              aria-label="Gallery media type"
              className="inline-flex p-1 rounded-full bg-muted border border-border flex-shrink-0"
            >
              <button
                role="tab"
                aria-selected={activeTab === "videos"}
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "videos"
                    ? "bg-accent text-white shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Play className="w-4 h-4" />
                Videos
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === "videos" ? "bg-white/20" : "bg-background"
                }`}>
                  {allVideos.length}
                </span>
              </button>
              <button
                role="tab"
                aria-selected={activeTab === "photos"}
                onClick={() => setActiveTab("photos")}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "photos"
                    ? "bg-accent text-white shadow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                Photos
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === "photos" ? "bg-white/20" : "bg-background"
                }`}>
                  {allPhotos.length}
                </span>
              </button>
            </div>
          </div>

          {/* Sub-category filters */}
          {activeTab === "videos" ? (
            <div className="flex flex-wrap justify-center gap-3">
              <span className="hidden sm:inline text-sm font-medium text-muted-foreground whitespace-nowrap text-center">
                Filter by:
              </span>
              {videoCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedVideoCategory(cat.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedVideoCategory === cat.value
                      ? "bg-accent text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              <span className="hidden sm:inline text-sm font-medium text-muted-foreground whitespace-nowrap text-center">
                Filter by:
              </span>
              {photoCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedPhotoCategory(cat.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedPhotoCategory === cat.value
                      ? "bg-accent text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setModalVideo(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setModalVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close video"
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
              <p className="text-white/70">
                {modalVideo.university} • {modalVideo.country}
              </p>
              {modalVideo.category && modalVideo.category !== "student-testimonial" && (
                <p className="text-white/50 text-sm mt-1">
                  Category: {getVideoCategoryLabel(modalVideo.category)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Photo Lightbox */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-3 sm:p-4"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 sm:top-4 sm:right-4 text-white hover:text-accent transition-colors z-20 p-2 rounded-full bg-black/50 hover:bg-black/70"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          {filteredPhotos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxPrev();
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-20 p-3 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  lightboxNext();
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-20 p-3 sm:p-2 rounded-full bg-black/50 hover:bg-black/70 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next photo"
              >
                <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredPhotos[lightboxIndex].url}
              alt={filteredPhotos[lightboxIndex].caption || "Gallery photo"}
              className="w-full h-full object-contain max-h-[85vh] rounded-lg"
            />
            {(filteredPhotos[lightboxIndex].caption ||
              filteredPhotos[lightboxIndex].category) && (
              <div className="mt-3 text-white text-center">
                {filteredPhotos[lightboxIndex].caption && (
                  <p className="text-base font-medium">
                    {filteredPhotos[lightboxIndex].caption}
                  </p>
                )}
                {filteredPhotos[lightboxIndex].category &&
                  filteredPhotos[lightboxIndex].category !== "others" && (
                    <p className="text-white/60 text-sm mt-1">
                      {getPhotoCategoryLabel(filteredPhotos[lightboxIndex].category)}
                      {filteredPhotos[lightboxIndex].university &&
                        ` • ${filteredPhotos[lightboxIndex].university}`}
                      {filteredPhotos[lightboxIndex].country &&
                        ` • ${filteredPhotos[lightboxIndex].country}`}
                    </p>
                  )}
                {filteredPhotos.length > 1 && (
                  <p className="text-white/50 text-xs mt-2">
                    {lightboxIndex + 1} / {filteredPhotos.length}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === "videos" ? (
            <>
              {isLoadingVideos ? (
                <div className="flex items-center justify-center py-20">
                  <RefreshCw className="w-8 h-8 animate-spin text-accent" />
                </div>
              ) : filteredVideos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <VideoOff className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Testimonials in This Category
                  </h3>
                  <p className="text-muted-foreground">
                    Video testimonials for this category will appear here once uploaded.
                  </p>
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
                        <h3 className="font-semibold text-foreground mb-1">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {video.university} • {video.country}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              {isLoadingPhotos ? (
                <div className="flex items-center justify-center py-20">
                  <RefreshCw className="w-8 h-8 animate-spin text-accent" />
                </div>
              ) : filteredPhotos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <Camera className="w-16 h-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Photos in This Category
                  </h3>
                  <p className="text-muted-foreground">
                    Photos for this category will appear here once uploaded.
                  </p>
                </div>
              ) : (
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
                  {filteredPhotos.map((photo, index) => (
                    <button
                      key={photo._id}
                      onClick={() => setLightboxIndex(index)}
                      className="mb-4 w-full break-inside-avoid group relative overflow-hidden rounded-xl bg-muted block"
                    >
                      <img
                        src={photo.thumbnailUrl || photo.url}
                        alt={photo.caption || "Gallery photo"}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        {photo.caption && (
                          <p className="text-white text-sm font-medium line-clamp-2 text-left">
                            {photo.caption}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default GalleryPage;
