"use client";

import { Heart } from "lucide-react";
import { FacebookLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, XLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

const mbbsPrograms = [
  { label: "MBBS in Georgia", href: "/mbbs/georgia" },
  { label: "MBBS in Kyrgyzstan", href: "/mbbs/kyrgyzstan" },
  { label: "MBBS in Russia", href: "/mbbs/russia" },
  { label: "MBBS in Kazakhstan", href: "/mbbs/kazakhstan" },
  { label: "MBBS in Uzbekistan", href: "/mbbs/uzbekistan" },
  { label: "MBBS in Vietnam", href: "/mbbs/vietnam" },
];

const mastersPrograms = [
  { label: "Masters in Australia", href: "/masters/australia" },
  { label: "Masters in UK", href: "/masters/uk" },
  { label: "Masters in USA", href: "/masters/usa" },
  { label: "Masters in Europe", href: "/masters/europe" },
  { label: "Masters in Germany", href: "/masters/germany" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Success Stories", href: "/gallery" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const supportLinks = [
  { label: "Apply Now", href: "/apply" },
  { label: "Partner Universities", href: "/partner-universities" },
  { label: "Book Counseling", href: "https://api.whatsapp.com/send/?phone=919885852424&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me." },
];

const externalLinks = [
  { label: "NMC Guidelines for MBBS Abroad", href: "/resources/nmc-guidelines" },
  { label: "WHO World Directory of Medical Schools", href: "/resources/who-recognition" },
  { label: "WES Credential Evaluation", href: "/resources/credential-evaluation" },
  { label: "USMLE & ECFMG Certification", href: "/resources/usmle-ecfmg" },
];

const socialLinks = [
  { icon: FacebookLogoIcon, href: "https://www.facebook.com/gvkedutec/", label: "Facebook" },
  { icon: InstagramLogoIcon, href: "https://www.instagram.com/gvkedutech_mbbsabroad/", label: "Instagram" },
  { icon: YoutubeLogoIcon, href: "https://www.youtube.com/@gvkedutech", label: "YouTube" },
  { icon: XLogoIcon, href: "#", label: "Twitter" },
  { icon: LinkedinLogoIcon, href: "https://www.linkedin.com/company/gvk-edutech/posts/?feedView=all", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/logo.jpg?updatedAt=1776492281519" width={45} height={45} alt="GVK Edutech" />
              <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK-LOGO.png?updatedAt=1776492281541" width={240} height={240} alt="GVK" className="lg:block brightness-120" />
            </Link>
            <p className="text-white/70 max-w-sm leading-relaxed">
              Your trusted partner for MBBS and Masters programs abroad.
              15+ years of excellence in overseas education consultancy.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* MBBS Programs */}
          <div>
            <h4 className="font-bold text-lg mb-5">MBBS Abroad</h4>
            <ul className="space-y-3">
              {mbbsPrograms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Masters Programs */}
          <div>
            <h4 className="font-bold text-lg mb-5">Masters Abroad</h4>
            <ul className="space-y-3">
              {mastersPrograms.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h4 className="font-bold text-lg mb-5">Trusted Resources</h4>
            <ul className="space-y-3">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-white/70 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} GVK Edutech. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-current" /> for aspiring doctors & engineers.
          </p>
        </div>
      </div>
    </footer>
  );
};