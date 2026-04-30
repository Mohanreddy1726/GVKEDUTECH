"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StethoscopeDecoration, GraduationCapDecoration, HeartbeatDecoration, FlightPathDecoration } from "@/components/ThematicDecorations";

import "flag-icons/css/flag-icons.min.css";

const mbbsCountries = [
  { name: "Georgia", flag: "ge", link: "/mbbs/georgia", monument: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop" },
  { name: "Kyrgyzstan", flag: "kg", link: "/mbbs/kyrgyzstan", monument: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&auto=format&fit=crop" },
  { name: "Russia", flag: "ru", link: "/mbbs/russia", monument: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&auto=format&fit=crop" },
  { name: "Nepal", flag: "np", link: "/mbbs/nepal", monument: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop" },
  { name: "Kazakhstan", flag: "kz", link: "/mbbs/kazakhstan", monument: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&auto=format&fit=crop" },
  { name: "Vietnam", flag: "vn", link: "/mbbs/vietnam", monument: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&auto=format&fit=crop" },
  { name: "Uzbekistan", flag: "uz", link: "/mbbs/uzbekistan", monument: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&auto=format&fit=crop" },
];

const mastersCountries = [
  { name: "Australia", flag: "au", link: "/masters/australia", monument: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&auto=format&fit=crop" },
  { name: "United Kingdom", flag: "gb", link: "/masters/uk", monument: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop" },
  { name: "USA", flag: "us", link: "/masters/usa", monument: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&auto=format&fit=crop" },
  { name: "Europe", flag: "eu", link: "/masters/europe", monument: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&auto=format&fit=crop" },
  { name: "Ireland", flag: "ie", link: "/masters/ireland", monument: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=400&auto=format&fit=crop" },
  { name: "Germany", flag: "de", link: "/masters/germany", monument: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&auto=format&fit=crop" },
  { name: "Canada", flag: "ca", link: "/masters/canada", monument: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&auto=format&fit=crop" },
];

export const Countries = () => {
  return (
    <section id="mbbs" className="py-24 section-light relative overflow-hidden">
      {/* Thematic Decorations */}
      <StethoscopeDecoration className="top-20 right-[4%] w-32 h-32" />
      <HeartbeatDecoration className="top-40 left-[2%] w-[200px] h-[60px]" />
      <GraduationCapDecoration className="bottom-32 left-[5%] w-28 h-28" />
      <FlightPathDecoration className="bottom-20 right-[5%] w-[250px] h-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* MBBS Countries */}
        <div className="mb-20">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                MBBS Destinations
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Countries Offering <span className="text-accent">MBBS</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {mbbsCountries.map((country, index) => (
              <ScrollReveal key={country.name} animation="scale" delay={index * 60}>
                <Link
                  href={country.link}
                  className="group relative bg-card rounded-2xl overflow-hidden text-center card-hover border border-border hover:border-accent block"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${country.monument})` }}
                  />
                  <div className="relative p-6">
                    <div className="mb-3 group-hover:scale-110 transition-transform flag-fly-wrapper">
                      <span className={`fi fi-${country.flag}`} style={{ fontSize: "3rem", display: "inline-block" }}></span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm lg:text-base">
                      {country.name}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Masters Countries */}
        <div id="masters">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Masters Destinations
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Countries Offering <span className="text-primary">Masters</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {mastersCountries.map((country, index) => (
              <ScrollReveal key={country.name} animation="scale" delay={index * 60}>
                <Link
                  href={country.link}
                  className="group relative bg-card rounded-2xl overflow-hidden text-center card-hover border border-border hover:border-primary block"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${country.monument})` }}
                  />
                  <div className="relative p-6">
                    <div className="mb-3 group-hover:scale-110 transition-transform flag-fly-wrapper">
                      <span className={`fi fi-${country.flag}`} style={{ fontSize: "3rem", display: "inline-block" }}></span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm lg:text-base">
                      {country.name}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mt-16">
            <Button asChild variant="accent" size="xl">
              <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me.">
                Book Free Counseling
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};