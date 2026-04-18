"use client";

import { ArrowRight, Award, BookOpen, Trophy, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GraduationCapDecoration, AirplaneDecoration } from "@/components/ThematicDecorations";

export const Scholarship = () => {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-highlight rounded-full blur-3xl" />
      </div>

      {/* Thematic Decorations */}
      <GraduationCapDecoration className="top-16 right-[6%] w-28 h-28 text-white!" />
      <AirplaneDecoration className="bottom-16 left-[5%] w-20 h-20 text-white!" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal animation="fade-left">
            <div className="text-primary-foreground space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm">
                <Award className="w-4 h-4 text-accent" />
                Merit-Based Scholarships Available
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Scholarship Guidance &{" "}
                <span className="text-accent">Financial Support</span>
              </h2>

              <p className="text-lg text-white/80 leading-relaxed">
                Applications for scholarship guidance and financial assistance are now open.
                We are committed to helping students realize their academic potential and pursue
                their passions with reduced financial constraints, making quality education
                accessible to deserving candidates.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, text: "10+ Years of Excellence" },
                  { icon: Trophy, text: "Merit-Based Scholarships" },
                  { icon: BadgeCheck, text: "Verified Partner Universities" },
                  { icon: Award, text: "Financial Aid Guidance" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button asChild variant="accent" size="xl">
                <Link href="/apply">
                  Apply for Scholarship
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "₹0", label: "Donation Required" },
              { number: "Low", label: "Tuition Fees" },
              { number: "100%", label: "Visa Guidance" },
              { number: "Global", label: "Career Opportunities" },
            ].map((stat, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 120}>
                <div className="glass rounded-2xl p-8 text-center card-hover">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};