"use client";

import { ArrowRight, Play, GraduationCap, Globe, Award, Stethoscope, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { AirplaneDecoration, GlobeDecoration, StethoscopeDecoration, FlightPathDecoration } from "@/components/ThematicDecorations";

const stats = [
  { number: "5000+", label: "Successful Doctors", icon: GraduationCap },
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "98%", label: "Visa Success Rate", icon: Globe },
];

export const Hero = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const admissionYear = `${currentYear}-${nextYear}`;

  const scrollToPredictor = (tab) => {
    const el = document.getElementById("college-predictor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("switch-predictor-tab", { detail: tab }));
      }, 500);
    }
  };

  return (
    <section id="home" className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight rounded-full blur-3xl" />
      </div>

      {/* Thematic Floating Decorations */}
      <AirplaneDecoration className="top-32 right-[15%] w-20 h-20" />
      <AirplaneDecoration className="bottom-40 left-[10%] w-14 h-14 rotate-12" />
      <GlobeDecoration className="top-48 left-[5%] w-24 h-24" />
      <StethoscopeDecoration className="bottom-32 right-[8%] w-28 h-28" />
      <FlightPathDecoration className="top-20 right-[20%] w-[300px] h-[100px]" />

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Admissions Open for {admissionYear}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              <span className="block">Your Gateway to</span>
              <span className="block text-accent mt-2">Medical Education</span>
              <span className="block">Abroad</span>
            </h1>

            <p className="text-lg text-white/80 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              GVK Edutech is your trusted partner for MBBS and Masters programs at leading global universities.
              With over 15 years of excellence in international education consultancy, we transform aspirations into achievements.
            </p>

            {/* Feature Highlight Cards */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
              <button
                onClick={() => scrollToPredictor("predictor")}
                className="relative flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-bold text-base group overflow-hidden hero-feature-card cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/70 opacity-90" />
                <div className="absolute inset-0 hero-shimmer" />
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-accent via-white/50 to-accent opacity-60 blur-sm animate-pulse" style={{ zIndex: -1 }} />
                <div className="relative flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Stethoscope className="w-6 h-6 text-white animate-bounce" style={{ animationDuration: "2s" }} />
                </div>
                <div className="relative text-left">
                  <span className="block text-xs text-white/70 font-medium">AI Powered</span>
                  <span className="block">College Predictor</span>
                </div>
                <ArrowRight className="relative w-5 h-5 ml-1" />
              </button>
              <button
                onClick={() => scrollToPredictor("budget")}
                className="relative flex items-center gap-3 px-6 py-4 rounded-2xl text-white font-bold text-base group overflow-hidden hero-feature-card cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-highlight to-highlight/70 opacity-90" />
                <div className="absolute inset-0 hero-shimmer" />
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-highlight via-white/50 to-highlight opacity-60 blur-sm animate-pulse" style={{ zIndex: -1, animationDelay: "1s" }} />
                <div className="relative flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Calculator className="w-6 h-6 text-white animate-bounce" style={{ animationDuration: "2.5s" }} />
                </div>
                <div className="relative text-left">
                  <span className="block text-xs text-white/70 font-medium">Smart Tool</span>
                  <span className="block">Budget Calculator</span>
                </div>
                <ArrowRight className="relative w-5 h-5 ml-1" />
              </button>
            </div>

            {/* Location Banner */}
            <div className="flex flex-wrap gap-2 text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <span className="px-3 py-1 bg-white/10 rounded-full"><span className="fi fi-in mr-1"></span>Hyderabad</span>
              <span className="px-3 py-1 bg-white/10 rounded-full"><span className="fi fi-in mr-1"></span>Warangal</span>
              <span className="px-3 py-1 bg-white/10 rounded-full"><span className="fi fi-in mr-1"></span>Vijayawada</span>
              <span className="px-3 py-1 bg-white/10 rounded-full"><span className="fi fi-in mr-1"></span>Visakhapatnam</span>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild variant="accent" size="xl">
                <Link href="/apply">
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero" size="xl" className="group">
              <Link href="/gallery">
                <Play className="w-5 h-5 mr-2" />
                Watch Success Stories
              </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative hidden lg:block">
            <div className="space-y-6 stagger-children">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass rounded-2xl p-6 max-w-sm ${
                    index === 1 ? "ml-auto mr-12" : index === 2 ? "ml-12" : ""
                  } card-hover`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{stat.number}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 right-0 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-float" />
            <div className="absolute bottom-10 left-0 w-32 h-32 bg-highlight/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-[-0.1] left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};