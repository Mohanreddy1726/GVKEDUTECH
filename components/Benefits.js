"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StethoscopeDecoration, GraduationCapDecoration, AirplaneDecoration } from "@/components/ThematicDecorations";

const mbbsBenefits = [
  "NMC/MCI approved universities with international recognition",
  "Significantly lower tuition fees compared to private Indian colleges",
  "Zero donation or capitation fees required",
  "Complete curriculum delivered in English medium",
  "International exposure with advanced pedagogical methods",
];

const mastersBenefits = [
  "Access to world-class universities with prestigious global rankings",
  "Specialized programs featuring industry-aligned curriculum",
  "Post-study work visa opportunities in most destination countries",
  "Scholarship opportunities available for exceptional candidates",
  "Extensive global networking and career advancement prospects",
];

const gvkAdvantages = [
  "15+ years of specialized expertise in overseas education",
  "5000+ success stories documented across India",
  "98% visa approval rate with comprehensive documentation support",
  "End-to-end assistance from application through settlement",
  "Strategic partnerships with leading global universities",
];

export const Benefits = () => {
  return (
    <section className="py-24 section-muted relative overflow-hidden">
      {/* Thematic Decorations */}
      <StethoscopeDecoration className="top-16 left-[5%] w-28 h-28" />
      <GraduationCapDecoration className="top-20 right-[6%] w-24 h-24" />
      <AirplaneDecoration className="bottom-16 right-[10%] w-16 h-16" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              Why Study Abroad
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Advantages of Studying with{" "}
              <span className="text-accent">GVK Edutech</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Access world-class education and unlock global career opportunities through our expert guidance and support.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* MBBS Benefits */}
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="bg-card rounded-3xl p-8 card-hover border border-border h-full">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-6">
                MBBS Abroad
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                MBBS Abroad Advantages
              </h3>
              <ul className="space-y-4">
                {mbbsBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Masters Benefits */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="bg-card rounded-3xl p-8 card-hover border border-border h-full">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
                Masters Abroad
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Masters Abroad Advantages
              </h3>
              <ul className="space-y-4">
                {mastersBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* GVK Advantages */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-primary-foreground card-hover h-full">
              <div className="inline-block px-4 py-2 bg-white/20 font-semibold rounded-full text-sm mb-6">
                GVK Advantage
              </div>
              <h3 className="text-2xl font-bold mb-6">GVK Edutech Distinction</h3>
              <ul className="space-y-4">
                {gvkAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-white/90">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="text-center mt-12">
            <Button asChild variant="accent" size="xl">
              <Link href="/apply">
                Begin Your Journey Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};