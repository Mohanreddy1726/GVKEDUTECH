"use client";

import { Shield, Award, Eye, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlobeDecoration, BookDecoration } from "@/components/ThematicDecorations";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We maintain the highest ethical standards across all our services. Your academic future remains our foremost priority, managed with exceptional care and professionalism.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Recognized as a benchmark of excellence in overseas education consultancy. We collaborate exclusively with top-ranked universities, ensuring authentic guidance and verified admissions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Complete transparency from university selection through post-arrival support. No hidden fees, no misleading promises—clear and honest communication at every step.",
  },
  {
    icon: TrendingUp,
    title: "Consistency",
    description:
      "Delivering consistently superior services through continuous improvement. Seamless admissions and exceptional visa success rates across all destinations.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 section-light relative overflow-hidden">
      {/* Thematic Decorations */}
      <GlobeDecoration className="top-10 right-[5%] w-32 h-32" />
      <BookDecoration className="-bottom-4 left-[3%] w-24 h-24" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                  About Us
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Discover{" "}
                  <span className="text-accent">GVK Edutech</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We are qualified medical professionals with extensive experience in the healthcare sector.
                In 2012, we transitioned from our established medical careers, driven by a profound commitment
                to serve aspiring students facing challenges in securing admission to India&apos;s highly
                competitive medical institutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At GVK Edutech, we have established ourselves as a premier study abroad consultancy,
                dedicated to empowering students in achieving their aspirations of pursuing MBBS,
                Masters, and other international education programs. Built upon the foundational
                pillars of integrity, quality, transparency, and consistency, we guide you toward success.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 px-5 py-3 bg-accent/10 rounded-xl">
                  <span className="text-3xl font-bold text-accent">15+</span>
                  <span className="text-sm text-muted-foreground">Years of<br />Experience</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-primary/10 rounded-xl">
                  <span className="text-3xl font-bold text-primary">5000+</span>
                  <span className="text-sm text-muted-foreground">Success<br />Stories</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 bg-highlight/10 rounded-xl">
                  <span className="text-3xl font-bold text-highlight">98%</span>
                  <span className="text-sm text-muted-foreground">Visa<br />Success</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} animation="scale" delay={index * 100}>
                <div className="bg-card rounded-2xl p-6 card-hover border border-border h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};