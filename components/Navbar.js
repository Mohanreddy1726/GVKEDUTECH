"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "MBBS",
    href: "/mbbs",
    submenu: [
      { label: "All MBBS Countries", href: "/mbbs" },
      { label: "Nepal", href: "/mbbs/nepal" },
      { label: "Georgia", href: "/mbbs/georgia" },
      { label: "Kyrgyzstan", href: "/mbbs/kyrgyzstan" },
      { label: "Russia", href: "/mbbs/russia" },
      { label: "Kazakhstan", href: "/mbbs/kazakhstan" },
      { label: "Uzbekistan", href: "/mbbs/uzbekistan" },
      { label: "Vietnam", href: "/mbbs/vietnam" },
    ],
  },
  {
    label: "Masters",
    href: "/masters",
    submenu: [
      { label: "All Masters Countries", href: "/masters" },
      { label: "Australia", href: "/masters/australia" },
      { label: "UK", href: "/masters/uk" },
      { label: "USA", href: "/masters/usa" },
      { label: "Europe", href: "/masters/europe" },
      { label: "Germany", href: "/masters/germany" },
    ],
  },
  { label: "Partner Universities", href: "/partner-universities" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  const pathname = usePathname();

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        // eslint-disable-next-line react-hooks/immutability
        window.location.href = href;
      } else {
        const element = document.querySelector(href.replace("/", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const isHashLink = (href) => href.startsWith("#") || href.startsWith("/#");

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/logo.jpg?updatedAt=1776492281519" width={40} height={40} alt="GVK EduTech" className="w-auto rounded-lg" priority />
            <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK-LOGO.png?updatedAt=1776492281541" width={240} height={240} alt="GVK" className="lg:block" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {isHashLink(item.href) ? (
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-smooth rounded-lg hover:bg-muted ${isActiveLink(item.href) ? "text-accent bg-accent/10" : "text-foreground/80 hover:text-accent"}`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-smooth rounded-lg hover:bg-muted ${isActiveLink(item.href) ? "text-accent bg-accent/10" : "text-foreground/80 hover:text-accent"}`}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                )}
                {item.submenu && openSubmenu === item.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-xl shadow-lg border border-border p-2 min-w-45">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-accent hover:bg-muted rounded-lg transition-smooth"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="accent" size="lg" asChild>
              <a
                href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me."
                target="_blank"
                rel="noOpener noreferrer"
              >
                Book Free Counseling
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-smooth focus:ring-2 focus:ring-accent focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div
              className="lg:hidden fixed inset-0 top-20 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div id="mobile-menu" className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto relative z-50 bg-background">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileOpenSubmenu(
                          mobileOpenSubmenu === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-foreground/80 hover:text-accent hover:bg-muted rounded-lg transition-smooth"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileOpenSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileOpenSubmenu === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm rounded-lg transition-smooth ${isActiveLink(subItem.href) ? "text-accent bg-accent/10" : "text-foreground/60 hover:text-accent hover:bg-muted"}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : isHashLink(item.href) ? (
                  <a
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-smooth ${isActiveLink(item.href) ? "text-accent bg-accent/10" : "text-foreground/80 hover:text-accent hover:bg-muted"}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg transition-smooth ${isActiveLink(item.href) ? "text-accent bg-accent/10" : "text-foreground/80 hover:text-accent hover:bg-muted"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Button variant="accent" className="w-full" asChild>
                <a
                  href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Counseling
                </a>
              </Button>
            </div>
          </div>
          </>
        )}
      </div>
    </nav>
  );
};