"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-left": "-translate-x-8 opacity-0",
    "fade-right": "translate-x-8 opacity-0",
    scale: "scale-95 opacity-0",
    fade: "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "translate-y-0 translate-x-0 scale-100 opacity-100"
          : animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}