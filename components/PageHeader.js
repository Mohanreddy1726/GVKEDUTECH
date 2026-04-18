"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const PageHeader = ({ title, breadcrumbs, breadcrumb, subtitle, backgroundImage }) => {
  // Build breadcrumbs array from either prop
  const breadcrumbItems = breadcrumbs || (breadcrumb ? [
    { label: "Home", href: "/" },
    { label: breadcrumb }
  ] : [{ label: "Home", href: "/" }, { label: title }]);

  return (
    <section
      className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(to bottom right, hsla(var(--primary) / 0.9), hsla(var(--secondary) / 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : undefined}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70 mb-6">
            {breadcrumbItems.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-accent transition-smooth"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary-foreground">{crumb.label}</span>
                )}
                {index < breadcrumbItems.length - 1 && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            ))}
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground animate-fade-in">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
