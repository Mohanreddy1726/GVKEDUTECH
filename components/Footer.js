"use client";

import { Heart, Phone, Mail, Clock, ArrowRight, MapPin } from "lucide-react";
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, XLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────
   Design tokens
───────────────────────────────────────────*/
const T = {
  navy:       "#0F1B2D",
  navyLight:  "#152338",
  navyMid:    "#1A2B42",
  red:        "#C8243A",
  redLight:   "#F2A0AB",
  muted:      "rgba(255,255,255,0.52)",
  mutedHover: "rgba(255,255,255,0.88)",
  divider:    "rgba(255,255,255,0.08)",
};

/* ── Data ── */
const mbbsPrograms = [
  { label: "MBBS in Georgia",     href: "/mbbs/georgia" },
  { label: "MBBS in Kyrgyzstan",  href: "/mbbs/kyrgyzstan" },
  { label: "MBBS in Russia",      href: "/mbbs/russia" },
  { label: "MBBS in Kazakhstan",  href: "/mbbs/kazakhstan" },
  { label: "MBBS in Uzbekistan",  href: "/mbbs/uzbekistan" },
  { label: "MBBS in Nepal",       href: "/mbbs/nepal" },
  { label: "MBBS in Vietnam",     href: "/mbbs/vietnam" },
];

const mastersPrograms = [
  { label: "Masters in UK",        href: "/masters/uk" },
  { label: "Masters in USA",       href: "/masters/usa" },
  { label: "Masters in Australia", href: "/masters/australia" },
  { label: "Masters in Canada",    href: "/masters/canada" },
  { label: "Masters in Germany",   href: "/masters/germany" },
  { label: "Masters in Europe",    href: "/masters/europe" },
  { label: "Masters in Ireland",   href: "/masters/ireland" },
];

const companyLinks = [
  { label: "About Us",            href: "/about" },
  { label: "Our Services",        href: "/services" },
  { label: "Partner Universities",href: "/partner-universities" },
  { label: "Success Stories",     href: "/gallery" },
  { label: "Gallery",             href: "/gallery" },
  { label: "Contact Us",          href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy",      href: "/privacy-policy" },
  { label: "Terms & Conditions",  href: "/terms-and-conditions" },
  { label: "Disclaimer",          href: "/disclaimer" },
];

const resourceLinks = [
  { label: "NMC Guidelines for MBBS Abroad",  href: "/resources/nmc-guidelines" },
  { label: "WHO World Directory",              href: "/resources/who-recognition" },
  { label: "WES Credential Evaluation",        href: "/resources/credential-evaluation" },
  { label: "USMLE & ECFMG Certification",      href: "/resources/usmle-ecfmg" },
];

const socialLinks = [
  { icon: FacebookLogoIcon,  href: "https://www.facebook.com/gvkedutec/",                                              label: "Facebook" },
  { icon: InstagramLogoIcon, href: "https://www.instagram.com/gvkedutech_mbbsabroad/",                                label: "Instagram" },
  { icon: YoutubeLogoIcon,   href: "https://www.youtube.com/@gvkedutech",                                             label: "YouTube" },
  { icon: XLogoIcon,         href: "https://x.com/GEdutech",                                                         label: "Twitter/X" },
  { icon: LinkedinLogoIcon,  href: "https://www.linkedin.com/company/gvk-edutech/posts/?feedView=all",               label: "LinkedIn" },
];

/* ── Helpers ── */
const FooterLink = ({ href, children, external = false }) => {
  const cls = "group flex items-center gap-1.5 text-sm transition-colors duration-150";
  const inner = (
    <>
      <span style={{ color: T.muted, transition: "color 0.15s" }}
        className="group-hover:text-white">{children}</span>
      <ArrowRight
        className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150"
        style={{ color: T.red }}
      />
    </>
  );

  if (external)
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>;
  return <Link href={href} className={cls}>{inner}</Link>;
};

const ColHeading = ({ children }) => (
  <h4
    className="text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2"
    style={{ color: T.red }}
  >
    <span
      className="inline-block w-4 h-0.5 rounded"
      style={{ background: T.red }}
    />
    {children}
  </h4>
);

/* ── Footer ── */
export const Footer = () => {
  return (
    <footer style={{ background: T.navy }}>

      {/* ── CTA Strip ── */}
      <div
        className="border-b"
        style={{ borderColor: T.divider, background: T.navyLight }}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: T.red + "25" }}
              >
                <Phone className="w-4 h-4" style={{ color: T.red }} />
              </span>
              <div>
                <p className="text-xs" style={{ color: T.muted }}>Free counseling — call or WhatsApp</p>
                <div className="flex gap-3 flex-wrap">
                  <a href="tel:+919010060000" className="text-sm font-bold text-white hover:underline">+91 9010060000</a>
                  <span style={{ color: T.divider }}>|</span>
                  <a href="tel:+918886661877" className="text-sm font-bold text-white hover:underline">+91 8886661877</a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm" style={{ color: T.muted }}>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" style={{ color: T.red }} />
                <a href="mailto:info@gvkedutech.com" className="hover:text-white transition-colors">
                  info@gvkedutech.com
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" style={{ color: T.red }} />
                Mon – Sat, 9 AM – 7 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Brand — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/logo.jpg?updatedAt=1776492281519"
                width={40} height={40} alt="GVK Edutech"
                className="rounded-lg"
              />
              <Image
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK%20EDUTECH%20LOGO%2007-05.png"
                width={160} height={40} alt="GVK Edutech"
                className="brightness-150"
              />
            </Link>

            <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
              Your trusted partner for MBBS and Masters programs abroad.
              15+ years of excellence in overseas education consultancy with
              5,000+ students successfully placed.
            </p>

            {/* Social icons */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: T.muted }}>
                Follow Us
              </p>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
                    style={{ background: "rgba(255,255,255,0.07)", color: T.muted }}
                    onMouseEnter={e => Object.assign(e.currentTarget.style, { background: T.red, color: "#fff" })}
                    onMouseLeave={e => Object.assign(e.currentTarget.style, { background: "rgba(255,255,255,0.07)", color: T.muted })}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Apply CTA */}
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold"
              style={{
                background: `linear-gradient(135deg, ${T.red}, #A01828)`,
                color: "#fff",
                boxShadow: `0 4px 14px ${T.red}44`,
              }}
            >
              Apply Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* MBBS — 2 cols */}
          <div className="lg:col-span-2">
            <ColHeading>MBBS Abroad</ColHeading>
            <ul className="space-y-2.5">
              {mbbsPrograms.map(l => (
                <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Masters — 2 cols */}
          <div className="lg:col-span-2">
            <ColHeading>Masters Abroad</ColHeading>
            <ul className="space-y-2.5">
              {mastersPrograms.map(l => (
                <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Company — 2 cols */}
          <div className="lg:col-span-2">
            <ColHeading>Company</ColHeading>
            <ul className="space-y-2.5">
              {companyLinks.map(l => (
                <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
              ))}
            </ul>
            <div className="mt-7">
              <ColHeading>Legal</ColHeading>
              <ul className="space-y-2.5">
                {legalLinks.map(l => (
                  <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources — 3 cols */}
          <div className="lg:col-span-3">
            <ColHeading>Trusted Resources</ColHeading>
            <ul className="space-y-2.5">
              {resourceLinks.map(l => (
                <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
              ))}
            </ul>

            {/* Head Office mini card */}
            <div
              className="mt-7 p-4 rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)", border: `1px solid ${T.divider}` }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: T.red }}>
                Head Office
              </p>
              <p className="text-xs leading-relaxed" style={{ color: T.muted }}>
                3rd Floor, Shiva Sai Commercial Building,<br />
                Vidya Nagar, Hyderabad – 500044
              </p>
              <a
                href="https://maps.app.goo.gl/HSBuYGWVxe46562SA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold mt-2 hover:underline"
                style={{ color: T.red }}
              >
                <MapPin className="w-3 h-3" /> Get Directions
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="border-t"
        style={{ borderColor: T.divider, background: T.navyLight }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs" style={{ color: T.muted }}>
              © {new Date().getFullYear()} GVK Edutech Services Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-xs flex items-center gap-1.5" style={{ color: T.muted }}>
              Made with
              <Heart className="w-3.5 h-3.5 fill-current" style={{ color: T.red }} />
              for aspiring doctors & engineers worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};