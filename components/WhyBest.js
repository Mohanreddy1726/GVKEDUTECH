"use client";

import { Clock, Users, FileCheck, Eye, Home, UserCheck, GraduationCap, Briefcase } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const reasons = [
  { icon: Clock, text: "15+ years of specialized expertise in international education" },
  { icon: Users, text: "5000+ success stories with placements in prestigious universities" },
  { icon: FileCheck, text: "98% visa approval rate through meticulous documentation" },
  { icon: Eye, text: "Complete transparency with no hidden charges or fees" },
  { icon: Home, text: "Comprehensive post-arrival support including accommodation assistance" },
  { icon: UserCheck, text: "Personalized university selection tailored to your profile" },
  { icon: GraduationCap, text: "Strategic scholarship guidance to minimize educational costs" },
  { icon: Briefcase, text: "Thorough pre-departure orientation for seamless transition" },
];

export const WhyBest = () => {
  return (
    <section className="py-24 section-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16 space-y-4">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                Our Excellence
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Why We Rank Among the{" "}
                <span className="text-accent">Premier Education Consultants</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border card-hover group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <p className="text-foreground font-medium">{reason.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};