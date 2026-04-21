"use client";

import { Quote } from "lucide-react";
import Image from "next/image";

export const Founder = () => {
  return (
    <section className="py-24 section-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-lg border border-border">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="lg:col-span-2 bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white/20 mb-6 flex items-center justify-center text-6xl lg:text-7xl">
                  {/* 👨‍⚕️ */}
                  <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/founder.png" alt="founderImage" width={180} height={180} priority />
                </div>
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Dr. Gundala Vijay Kumar
                </h3>
                <p className="text-primary-foreground/80 font-medium">
                  (GVK) - FOUNDER
                </p>
                <p className="text-primary-foreground/60 text-sm mt-1">
                  MBBS (Russia), MPH (India)
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  Director & Vice-Dean
                </p>
              </div>

              {/* Quote Section */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-accent/30 mb-6" />
                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8">
                  &ldquo;I remind my fellow physicians, residents, and medical students that
                  the work we undertake as doctors and healthcare professionals represents
                  a profound{" "}
                  <span className="text-accent font-semibold">privilege </span> and a sacred
                  responsibility to serve humanity.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-muted-foreground text-sm">
                    GVK Brother&apos;s Foundation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};