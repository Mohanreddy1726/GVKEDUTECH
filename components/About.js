"use client";

import { Shield, Award, Eye, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GlobeDecoration, BookDecoration } from "@/components/ThematicDecorations";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    variant: "red",
    description:
      "We maintain the highest ethical standards across all our services. Your academic future remains our foremost priority, managed with exceptional care and professionalism.",
  },
  {
    icon: Award,
    title: "Quality",
    variant: "blue",
    description:
      "Recognised as a benchmark of excellence in overseas education consultancy. We collaborate exclusively with top-ranked universities, ensuring authentic guidance and verified admissions.",
  },
  {
    icon: Eye,
    title: "Transparency",
    variant: "blue",
    description:
      "Complete transparency from university selection through post-arrival support. No hidden fees, no misleading promises — clear and honest communication at every step.",
  },
  {
    icon: TrendingUp,
    title: "Consistency",
    variant: "red",
    description:
      "Delivering consistently superior services through continuous improvement. Seamless admissions and exceptional visa success rates across all destinations.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience", variant: "red" },
  { value: "5000+", label: "Success Stories", variant: "blue" },
  { value: "98%", label: "Visa Success Rate", variant: "blue" },
];

const variantStyles = {
  red: {
    bar: "bg-[#E24B4A]",
    iconWrap: "bg-[#FCEBEB] text-[#A32D2D]",
    chip: "bg-[#FCEBEB] border-[#F09595]",
    number: "text-[#A32D2D]",
  },
  blue: {
    bar: "bg-[#185FA5]",
    iconWrap: "bg-[#E6F1FB] text-[#185FA5]",
    chip: "bg-[#E6F1FB] border-[#85B7EB]",
    number: "text-[#185FA5]",
  },
};

export const About = () => {
  return (
    <section
      id="about"
      className="py-24 section-light relative overflow-hidden"
    >
      {/* Thematic Decorations */}
      <GlobeDecoration className="top-10 right-[5%] w-32 h-32 opacity-40" />
      <BookDecoration className="-bottom-4 left-[3%] w-24 h-24 opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Story + Stats */}
          <ScrollReveal animation="fade-left">
            <div className="space-y-6">

              {/* Eyebrow + divider */}
              <div className="space-y-3">
                <span className="text-[#E24B4A] text-xs font-semibold tracking-[0.12em] uppercase">
                  About Us
                </span>
                <div className="w-12 h-[3px] bg-[#E24B4A] rounded-full" />
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Discover{" "}
                  <span className="text-[#185FA5]">GVK Edutech</span>
                </h2>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                We are qualified medical professionals with extensive experience
                in the healthcare sector. In 2012, we transitioned from our
                established medical careers, driven by a profound commitment to
                serve aspiring students facing challenges in securing admission
                to India&apos;s highly competitive medical institutions.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                At GVK Edutech, we have established ourselves as a premier study
                abroad consultancy, dedicated to empowering students in achieving
                their aspirations of pursuing MBBS, Masters, and other
                international education programs — built upon the foundational
                pillars of integrity, quality, transparency, and consistency.
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap gap-3 pt-2">
                {stats.map((stat) => {
                  const s = variantStyles[stat.variant];
                  return (
                    <div
                      key={stat.label}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${s.chip}`}
                    >
                      <span className={`text-3xl font-bold ${s.number}`}>
                        {stat.value}
                      </span>
                      <span className="text-xs leading-snug text-muted-foreground">
                        {stat.label.split(" ").slice(0, 2).join(" ")}
                        <br />
                        {stat.label.split(" ").slice(2).join(" ")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Values Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, index) => {
              const s = variantStyles[value.variant];
              return (
                <ScrollReveal
                  key={value.title}
                  animation="scale"
                  delay={index * 100}
                >
                  <div className="relative bg-card rounded-2xl p-6 card-hover border border-border h-full overflow-hidden group transition-shadow duration-200 hover:shadow-sm">
                    {/* Accent bar */}
                    <div
                      className={`absolute top-0 left-0 w-[3px] h-full ${s.bar} transition-all duration-200 group-hover:w-[4px]`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${s.iconWrap}`}
                    >
                      <value.icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};