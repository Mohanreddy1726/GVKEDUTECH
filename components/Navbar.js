"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown, Phone, MessageCircle,
  GraduationCap, BookOpen, Building2, ArrowRight
} from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────
   Design tokens
───────────────────────────────────────────*/
const T = {
  navy:      "#0F1B2D",
  navyMid:   "#1A2B42",
  red:       "#C8243A",
  redDark:   "#A01828",
  redLight:  "#F2A0AB",
  surface:   "#F8F9FB",
  surfaceAlt:"#E8EDF5",
  muted:     "#5A7190",
  white:     "#FFFFFF",
};

/* ── Nav data ── */
const mbbsCountries = [
  { label: "Kazakhstan",  href: "/mbbs/kazakhstan",  flag: "kz", tag: "MCI Recognized" },
  { label: "Kyrgyzstan",  href: "/mbbs/kyrgyzstan",  flag: "kg", tag: "NMC Approved" },
  { label: "Russia",      href: "/mbbs/russia",       flag: "ru", tag: "Top Ranked" },
  { label: "Georgia",     href: "/mbbs/georgia",      flag: "ge", tag: "WHO Listed" },
  { label: "Uzbekistan",  href: "/mbbs/uzbekistan",   flag: "uz", tag: "Affordable" },
  { label: "Nepal",       href: "/mbbs/nepal",        flag: "np", tag: "NMC Approved" },
  { label: "Vietnam",     href: "/mbbs/vietnam",      flag: "vn", tag: "WHO Listed" },
];

const mastersCountries = [
  { label: "United Kingdom", href: "/masters/uk",         flag: "gb", tag: "1-Year MBA" },
  { label: "Australia",       href: "/masters/australia",  flag: "au", tag: "Post-Study Visa" },
  { label: "USA",             href: "/masters/usa",        flag: "us", tag: "OPT/CPT" },
  { label: "Canada",          href: "/masters/canada",     flag: "ca", tag: "PR Pathway" },
  { label: "New Zealand",     href: "/masters/newzealand", flag: "nz", tag: "Work Permit" },
  { label: "Europe",          href: "/masters/europe",     flag: "eu", tag: "Low Tuition" },
  { label: "Germany",         href: "/masters/germany",    flag: "de", tag: "Free Education" },
  { label: "Ireland",         href: "/masters/ireland",    flag: "ie", tag: "Tech Hub" },
];

const navItems = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "MBBS",         href: "/mbbs",                 mega: "mbbs" },
  { label: "Masters",      href: "/masters",               mega: "masters" },
  { label: "Universities", href: "/partner-universities" },
  { label: "Services",     href: "/services" },
  { label: "Gallery",      href: "/gallery" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

/* ── Flag card used in mega dropdown ── */
const FlagCard = ({ item, onClick }) => {
  const pathname = usePathname();
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150"
      style={{
        background: active ? T.red + "10" : hovered ? T.surfaceAlt : "transparent",
        border: `1px solid ${active ? T.red + "30" : hovered ? T.surfaceAlt : "transparent"}`,
      }}
    >
      {/* Flag */}
      <span
        className={`fi fi-${item.flag} flex-shrink-0 rounded`}
        style={{
          fontSize: "1.6rem",
          lineHeight: 1,
          filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))",
        }}
      />
      {/* Text */}
      <div className="min-w-0">
        <p
          className="text-sm font-semibold leading-tight truncate"
          style={{ color: active ? T.red : T.navyMid }}
        >
          {item.label}
        </p>
        <p className="text-xs mt-0.5 truncate" style={{ color: T.muted }}>
          {item.tag}
        </p>
      </div>
      {/* Arrow on hover */}
      {(hovered || active) && (
        <ArrowRight
          className="w-3.5 h-3.5 ml-auto flex-shrink-0"
          style={{ color: T.red, opacity: 0.7 }}
        />
      )}
    </Link>
  );
};

/* ── Mega menu panel ── */
const MegaMenu = ({ type, onClose }) => {
  const countries = type === "mbbs" ? mbbsCountries : mastersCountries;
  const allHref   = type === "mbbs" ? "/mbbs" : "/masters";
  const allLabel  = type === "mbbs" ? "All MBBS Countries" : "All Masters Countries";
  const Icon      = type === "mbbs" ? GraduationCap : BookOpen;
  const color     = T.red;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px]"
      style={{ zIndex: 200 }}
    >
      {/* arrow pointer */}
      <div
        className="absolute top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
        style={{ background: T.white, border: `1px solid rgba(15,27,45,0.08)`, borderBottom: "none", borderRight: "none" }}
      />

      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: T.white,
          boxShadow: "0 16px 48px rgba(15,27,45,0.14), 0 4px 12px rgba(15,27,45,0.06)",
          border: `1px solid rgba(15,27,45,0.08)`,
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: `1px solid ${T.surfaceAlt}`, background: T.surface }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: color + "15" }}
            >
              <Icon className="w-4 h-4" style={{ color }} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color }}>
                {type === "mbbs" ? "MBBS Abroad" : "Masters Abroad"}
              </p>
              <p className="text-xs" style={{ color: T.muted }}>
                {countries.length} destinations available
              </p>
            </div>
          </div>
          <Link
            href={allHref}
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
            style={{ color: T.red, background: T.red + "10" }}
          >
            View All <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-1 p-3">
          {countries.map((item) => (
            <FlagCard key={item.href} item={item} onClick={onClose} />
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ borderTop: `1px solid ${T.surfaceAlt}`, background: T.surface }}
        >
          <p className="text-xs" style={{ color: T.muted }}>
            Not sure which country suits you?
          </p>
          <a
            href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+need+help+choosing+a+country+for+my+studies."
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
              color: T.white,
            }}
          >
            <MessageCircle className="w-3 h-3" /> Get Free Advice
          </a>
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [scrolled,      setScrolled]      = useState(false);
  const [isMobileOpen,  setIsMobileOpen]  = useState(false);
  const [openMega,      setOpenMega]      = useState(null);
  const [mobileOpenSub, setMobileOpenSub] = useState(null);
  const [isDesktop,     setIsDesktop]     = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMobileOpenSub(null);
    setOpenMega(null);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <style>{`@import url('https://cdn.jsdelivr.net/npm/flag-icons@7.2.3/css/flag-icons.min.css');`}</style>

      {/* ── Top utility bar ── */}
      <div
        className="hidden lg:block fixed top-0 left-0 right-0 z-50"
        style={{
          background: T.navy,
          height: "34px",
          transition: "height 0.3s ease, opacity 0.3s ease",
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "auto",
        }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            🎓 15+ Years · 5,000+ Students Placed · 7 MBBS + 8 Masters Destinations
          </p>
          <div className="flex items-center gap-5 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
            <a href="mailto:info@gvkedutech.com" className="hover:text-white transition-colors">
              info@gvkedutech.com
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <a href="tel:+919010060000" className="hover:text-white transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" style={{ color: T.red }} />
              +91 9010060000
            </a>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <a href="tel:+918886661877" className="hover:text-white transition-colors">
              +91 8886661877
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav
        className="fixed left-0 right-0 z-50 transition-all duration-300"
        style={{
          top: (!scrolled && isDesktop) ? "34px" : "0",
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(15,27,45,0.1)" : "none",
          borderBottom: scrolled ? `1px solid rgba(15,27,45,0.07)` : "1px solid transparent",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/logo.jpg?updatedAt=1776492281519"
                width={52} height={52} alt="GVK EduTech"
                className="rounded-xl flex-shrink-0 shadow-md ring-1 ring-black/5"
                priority
              />
              <Image
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK-LOGO.png?updatedAt=1776492281541"
                width={200} height={40} alt="GVK EduTech"
                className="sm:block"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <div
              className="hidden lg:flex items-center gap-0.5"
              onMouseLeave={() => setOpenMega(null)}
            >
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.mega ? setOpenMega(item.mega) : setOpenMega(null)}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-150 select-none"
                    style={{
                      color: isActive(item.href) ? T.navyMid : T.muted,
                      background: openMega === item.mega && item.mega ? T.surfaceAlt : "transparent",
                    }}
                    onMouseEnter={e => {
                      if (!item.mega) {
                        e.currentTarget.style.color = T.navyMid;
                        e.currentTarget.style.background = T.surfaceAlt;
                      }
                    }}
                    onMouseLeave={e => {
                      if (!item.mega) {
                        e.currentTarget.style.color = isActive(item.href) ? T.navyMid : T.muted;
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {item.label}
                    {item.mega && (
                      <ChevronDown
                        className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{
                          transform: openMega === item.mega ? "rotate(180deg)" : "rotate(0)",
                          color: openMega === item.mega ? T.red : T.muted,
                        }}
                      />
                    )}
                    {/* Red underline for active */}
                    {isActive(item.href) && (
                      <span
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 rounded-full"
                        style={{ background: T.red }}
                      />
                    )}
                  </Link>

                  {/* Mega menu */}
                  {item.mega && openMega === item.mega && (
                    <MegaMenu type={item.mega} onClose={() => setOpenMega(null)} />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop right CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/partner-universities"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all"
                style={{ color: T.muted, background: T.surfaceAlt }}
                onMouseEnter={e => Object.assign(e.currentTarget.style, { color: T.navyMid, background: T.surfaceAlt })}
                onMouseLeave={e => Object.assign(e.currentTarget.style, { color: T.muted, background: T.surfaceAlt })}
              >
                <Building2 className="w-3.5 h-3.5" />
                300+ Universities
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                style={{
                  background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                  color: T.white,
                  boxShadow: `0 3px 14px ${T.red}50`,
                }}
                onMouseEnter={e => Object.assign(e.currentTarget.style, { transform: "translateY(-1px)", boxShadow: `0 5px 18px ${T.red}60` })}
                onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "translateY(0)", boxShadow: `0 3px 14px ${T.red}50` })}
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Free Counseling
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all"
              style={{
                background: isMobileOpen ? T.surfaceAlt : T.surfaceAlt,
                color: T.navyMid,
                border: `1px solid rgba(15,27,45,0.08)`,
              }}
              onClick={() => setIsMobileOpen(o => !o)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className="lg:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: isMobileOpen ? "88vh" : "0",
            opacity: isMobileOpen ? 1 : 0,
            background: T.white,
            borderTop: `1px solid ${T.surfaceAlt}`,
          }}
        >
          <div className="overflow-y-auto max-h-[82vh]">

            {/* Mobile utility strip */}
            <div
              className="flex items-center justify-center gap-4 px-4 py-3"
              style={{ background: T.navy }}
            >
              <a href="tel:+919010060000"
                className="flex items-center gap-1.5 text-xs font-semibold text-white">
                <Phone className="w-3.5 h-3.5" style={{ color: T.red }} />
                +91 9010060000
              </a>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
              <a href="tel:+918886661877"
                className="flex items-center gap-1.5 text-xs font-semibold text-white">
                +91 8886661877
              </a>
            </div>

            <div className="px-4 py-3">
              {navItems.map((item) => (
                <div key={item.label} className="mb-0.5">
                  {item.mega ? (
                    <>
                      <button
                        onClick={() => setMobileOpenSub(mobileOpenSub === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                        style={{
                          color: isActive(item.href) ? T.navyMid : T.muted,
                          background: mobileOpenSub === item.label ? T.surfaceAlt : "transparent",
                        }}
                      >
                        <span className="flex items-center gap-2">
                          {isActive(item.href) && (
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: T.red }} />
                          )}
                          {item.label}
                        </span>
                        <ChevronDown
                          className="w-4 h-4 transition-transform duration-200"
                          style={{
                            color: T.muted,
                            transform: mobileOpenSub === item.label ? "rotate(180deg)" : "rotate(0)",
                          }}
                        />
                      </button>

                      {mobileOpenSub === item.label && (
                        <div
                          className="mx-1 mb-2 rounded-xl overflow-hidden"
                          style={{ border: `1px solid ${T.surfaceAlt}` }}
                        >
                          {/* View all row */}
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex items-center justify-between px-4 py-3 text-sm font-bold"
                            style={{
                              color: T.navyMid,
                              background: T.surfaceAlt,
                              borderBottom: `1px solid ${T.surfaceAlt}`,
                            }}
                          >
                            <span>All {item.label} Countries</span>
                            <ArrowRight className="w-4 h-4" style={{ color: T.red }} />
                          </Link>

                          {/* Country rows with flags */}
                          <div className="grid grid-cols-2">
                            {(item.mega === "mbbs" ? mbbsCountries : mastersCountries).map((sub, i, arr) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="flex items-center gap-2.5 px-3.5 py-3 transition-all"
                                style={{
                                  color: isActive(sub.href) ? T.red : T.navyMid,
                                  background: isActive(sub.href) ? T.red + "08" : "transparent",
                                  borderBottom: i < arr.length - 2 ? `1px solid ${T.surfaceAlt}` : "none",
                                  borderRight: i % 2 === 0 ? `1px solid ${T.surfaceAlt}` : "none",
                                }}
                              >
                                <span
                                  className={`fi fi-${sub.flag} flex-shrink-0`}
                                  style={{ fontSize: "1.4rem", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.1))" }}
                                />
                                <div>
                                  <p className="text-xs font-semibold leading-tight">{sub.label}</p>
                                  <p className="text-xs mt-0.5" style={{ color: T.muted, fontSize: "0.65rem" }}>{sub.tag}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                      style={{
                        color: isActive(item.href) ? T.navyMid : T.muted,
                        background: isActive(item.href) ? T.surfaceAlt : "transparent",
                      }}
                    >
                      {isActive(item.href) && (
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: T.red }} />
                      )}
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile bottom CTAs */}
            <div
              className="px-4 pb-5 pt-1 space-y-2.5"
              style={{ borderTop: `1px solid ${T.surfaceAlt}` }}
            >
              <a
                href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold mt-3"
                style={{
                  background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                  color: T.white,
                  boxShadow: `0 3px 12px ${T.red}44`,
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Book Free Counseling
              </a>
              <a
                href="tel:+919010060000"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold"
                style={{
                  color: T.navyMid,
                  background: T.surfaceAlt,
                  border: `1px solid rgba(15,27,45,0.08)`,
                }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

          </div>
        </div>
      </nav>

      {/* Spacer: 66px on mobile, 100px on desktop (66 nav + 34 utility bar) when not scrolled */}
      {/* <div style={{ height: (!scrolled && isDesktop) ? "98px" : "64px", transition: "height 0.3s ease" }} /> */}
    </>
  );
};