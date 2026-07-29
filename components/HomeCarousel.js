"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Camera } from "lucide-react";

const slides = [
  {
    url: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Gallery%20Photos/gvk-sir-crowd.png",
    alt: "Medical students in a lecture hall",
    location: "Kazakhstan",
    event: "White coat ceremony 2025",
  },
  {
    url: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Gallery%20Photos/gvk-sir-with-doctors-enhanced.png?updatedAt=1785309862542",
    alt: "Modern medical university campus",
    location: "Kazakhstan",
    event: "Indian students by GVK EDUTECH",
  },
  {
    url: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Gallery%20Photos/DSC00185.JPG?updatedAt=1785319070337",
    alt: "Students celebrating at an award ceremony",
    location: "India",
    event: "GVK EDUTECH Staff",
  },
  {
    url: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Gallery%20Photos/DSC02840.JPG",
    alt: "Group of international students",
    location: "India",
    event: "GVK EDUTECH Staff",
  },
  {
    url: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Gallery%20Photos/MSR09606.JPG",
    alt: "Students in a medical laboratory",
    location: "Annual Meet 2025",
    event: "Chief Guests",
  },
  {
    url: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Gallery%20Photos/Mohan_reddy_edit.png",
    alt: "Pre-departure seminar audience",
    location: "Hyderabad, India",
    event: "Spot Admissions",
  },
];

const RED = "#FF0008";
const BLUE = "#253775";
const RED_GLOW = "rgba(255,0,8,0.5)";

export const HomeCarousel = () => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index];
    if (!card) return;
    const left = card.offsetLeft - track.offsetLeft;
    track.scrollTo({ left, behavior: "smooth" });
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => {
      const next = Math.max(0, i - 1);
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => {
      const next = (i + 1) % slides.length;
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  // Auto-advance every 5s, pause on hover/focus or when reduced-motion is preferred.
  useEffect(() => {
    if (isPaused) return;
    const reduced = typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = setInterval(() => {
      setActiveIndex((i) => {
        const next = (i + 1) % slides.length;
        scrollToIndex(next);
        return next;
      });
    }, 3000);

    return () => clearInterval(id);
  }, [isPaused, scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const childCenter = child.offsetLeft - track.offsetLeft + child.clientWidth / 2;
          const dist = Math.abs(childCenter - trackCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, rgba(37,55,117,0.04) 60%, hsl(var(--background)) 100%)",
      }}
    >
      <style>{`
        .hc-track { scrollbar-width: none; -ms-overflow-style: none; }
        .hc-track::-webkit-scrollbar { display: none; }
        .hc-card { scroll-snap-align: start; }
        .hc-eyebrow::before {
          content: ""; display: inline-block; width: 28px; height: 2px;
          background: ${RED}; margin-right: 12px; vertical-align: middle;
        }
        @keyframes hc-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hc-in { animation: hc-fade-up 0.7s cubic-bezier(.22,1,.36,1) both; }
        @keyframes hc-progress {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="hc-eyebrow text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Moments
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-foreground">
              Where our students <span style={{ color: RED }}>stand today.</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-80 transition-opacity self-start md:self-auto"
          >
            <Camera className="w-4 h-4" style={{ color: BLUE }} />
            View full gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev/Next — overlay on the photo, semi-transparent */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === slides.length - 1}
            aria-label="Next photo"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-0 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Track — single-card view, snap to each card */}
          <div
            ref={trackRef}
            className="hc-track flex overflow-x-auto snap-x snap-mandatory py-2"
            role="region"
            aria-label="Photo highlights"
          >
            {slides.map((slide, i) => (
              <article
                key={i}
                className="hc-card hc-in group relative flex-shrink-0 overflow-hidden rounded-2xl bg-muted w-full"
                style={{
                  width: "100%",
                  aspectRatio: "2 / 1",
                  maxHeight: "560px",
                  boxShadow: "0 12px 32px -12px rgba(0,0,0,0.25)",
                  animationDelay: `${i * 0.07}s`,
                }}
              >
                {/* Single-photo carousel: one card visible at a time, full container width.
                    Image spans the entire component width; aspect 2:1 (length twice height),
                    capped at 560px tall so very wide viewports don't get a giant banner. */}

                <img
                  src={slide.url}
                  alt={slide.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Permanent bottom gradient for caption legibility */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 25%, transparent 55%)",
                  }}
                />

                {/* Hover glow ring (red→blue) */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 0 2px ${RED}80, 0 0 30px -4px ${RED_GLOW}`,
                  }}
                />

                {/* Top-right index badge */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-white">
                  <p
                    className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1.5"
                    style={{ color: "#FF8088" }}
                  >
                    {slide.location}
                  </p>
                  <p className="text-base md:text-lg font-extrabold leading-tight">
                    {slide.event}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots + mobile CTA */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="transition-all duration-300 rounded-full overflow-hidden relative"
                style={{
                  width: i === activeIndex ? "32px" : "8px",
                  height: "8px",
                  background:
                    i === activeIndex
                      ? `linear-gradient(90deg, ${RED}, ${BLUE})`
                      : "rgba(0,0,0,0.18)",
                }}
              >
                {i === activeIndex && !isPaused && (
                  <span
                    aria-hidden
                    className="absolute inset-0 origin-left"
                    style={{
                      background: "rgba(255,255,255,0.35)",
                      animation: "hc-progress 3s linear forwards",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            aria-pressed={isPaused}
            className="w-9 h-9 rounded-full flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
          >
            {isPaused ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
            )}
          </button>
        </div>

        <div className="flex justify-center mt-6 sm:hidden">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{
              background: `linear-gradient(135deg, ${RED}, ${BLUE})`,
              boxShadow: "0 8px 20px -6px rgba(255,0,8,0.4)",
            }}
          >
            <Camera className="w-4 h-4" />
            View full gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;
