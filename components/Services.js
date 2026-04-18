"use client";

import {
  Users,
  GraduationCap,
  FileText,
  Stamp,
  MessageSquare,
  Banknote,
  Plane,
  HeartHandshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AirplaneDecoration, BookDecoration } from "@/components/ThematicDecorations";

const services = [
  { icon: Users, title: "Career Counselling", description: "Our panel of experienced advisors presents a comprehensive range of options from globally renowned universities, helping you make informed decisions about your future." },
  { icon: GraduationCap, title: "University Selection", description: "Our trained counselors meticulously evaluate your academic profile and aspirations to recommend the most suitable universities aligned with your goals." },
  { icon: FileText, title: "Application Process", description: "From initial registration to admission confirmation, our specialists manage every aspect of your application journey with precision and efficiency." },
  { icon: Stamp, title: "Visa Assistance", description: "Our qualified visa specialists personally handle your application with meticulous attention to detail, ensuring a smooth transition to your study destination." },
  { icon: MessageSquare, title: "Pre-Departure Briefings", description: "Comprehensive orientation sessions covering destination culture, climate, local customs, language basics, and academic protocols for confident preparation." },
  { icon: Banknote, title: "Foreign Exchange", description: "Through our established partnerships with reputable Forex dealers, we secure competitive exchange rates exclusively for our students' benefit." },
  { icon: Plane, title: "Travel Assistance", description: "Strategic travel planning including optimal departure dates and flight arrangements in your preferred class for a seamless journey abroad." },
  { icon: HeartHandshake, title: "Post Departure Assistance", description: "Our overseas representatives welcome you at your destination airport and provide comprehensive support to help you settle comfortably in your new environment." },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 section-muted relative overflow-hidden">
      <AirplaneDecoration className="top-16 right-[5%] w-20 h-20" />
      <BookDecoration className="bottom-12 left-[4%] w-20 h-20" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive end-to-end support throughout your complete study abroad journey
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={index * 70}>
              <div className="bg-card rounded-2xl p-6 card-hover border border-border group h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up">
          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};