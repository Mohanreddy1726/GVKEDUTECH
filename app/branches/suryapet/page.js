import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, GraduationCap, BookOpen, Globe, Award, FileCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Best Study Abroad Consultancy in Suryapet | MBBS & Masters Abroad",
  description: "Looking for the best study abroad consultancy in Suryapet? GVK EduTech offers expert guidance for MBBS and Masters abroad in Suryapet.",
  keywords: "study abroad consultancy suryapet, best abroad consultancy suryapet",
};

const T = { navy: "#0F1B2D", navyMid: "#1A2B42", red: "#C8243A", surface: "#F8F9FB", surfaceAlt: "#E8EDF5", muted: "#5A7190", white: "#FFFFFF" };

const mbbsCountries = [
  { label: "MBBS in Kazakhstan", href: "/mbbs/kazakhstan", flag: "kz" },
  { label: "MBBS in Kyrgyzstan", href: "/mbbs/kyrgyzstan", flag: "kg" },
  { label: "MBBS in Russia", href: "/mbbs/russia", flag: "ru" },
  { label: "MBBS in Georgia", href: "/mbbs/georgia", flag: "ge" },
  { label: "MBBS in Uzbekistan", href: "/mbbs/uzbekistan", flag: "uz" },
  { label: "MBBS in Nepal", href: "/mbbs/nepal", flag: "np" },
  { label: "MBBS in Vietnam", href: "/mbbs/vietnam", flag: "vn" },
];

const mastersCountries = [
  { label: "Masters in UK", href: "/masters/uk", flag: "gb" },
  { label: "Masters in Australia", href: "/masters/australia", flag: "au" },
  { label: "Masters in USA", href: "/masters/usa", flag: "us" },
  { label: "Masters in Canada", href: "/masters/canada", flag: "ca" },
  { label: "Masters in Germany", href: "/masters/germany", flag: "de" },
  { label: "Masters in Europe", href: "/masters/europe", flag: "eu" },
];

const services = [
  { icon: GraduationCap, title: "University Selection" },
  { icon: FileCheck, title: "Admission Assistance" },
  { icon: Award, title: "Scholarship Support" },
  { icon: Globe, title: "Pre-Departure Briefing" },
];

const office = {
  city: "Suryapet",
  type: "Regional Office",
  address: "Suryapet, Telangana",
  phones: ["+91 9949200740", "+91 7729077770"],
  email: "info@gvkedutech.com",
  mapLink: "https://goo.gl/maps/suryapet",
  image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115307375.png",
  monument: "Kuntala Falls",
  regionalDirector: "Mrs. Shoba Rani",
  qualification: "B.A",
};

const pageStyles = (
  <style>{`
    .country-card:hover { background: ${T.surfaceAlt}; }
    .service-card:hover { transform: translateY(-3px); }
  `}</style>
);

export default function SuryapetPage() {
  return (
    <PageLayout>
      {pageStyles}
      <PageHeader title="Best Study Abroad Consultancy in Suryapet" subtitle="Your trusted partner for MBBS and Masters abroad" breadcrumb="Branches / Suryapet" />
      <section className="py-16" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: T.navyMid }}>Best Study Abroad Consultancy in Suryapet</h1>
            <p className="text-lg" style={{ color: T.muted }}>GVK EduTech offers expert guidance for MBBS and Masters abroad.</p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/contact" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: T.red, color: T.white }}>Book Free Counseling</Link>
              <a href="tel:+919949200740" className="px-6 py-3 rounded-xl font-semibold text-sm border" style={{ borderColor: T.surfaceAlt, color: T.navyMid }}>Call: +91 9949200740</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>MBBS Abroad</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {mbbsCountries.map((c) => (<Link key={c.href} href={c.href} className="country-card flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt, background: T.surface }}><span className={`fi fi-${c.flag} text-2xl`} /><p className="font-semibold text-sm" style={{ color: T.navyMid }}>{c.label}</p><ArrowRight className="w-4 h-4" style={{ color: T.red }} /></Link>))}
          </div>
          <div className="text-center mt-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>Masters Abroad</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 max-w-4xl mx-auto">
            {mastersCountries.map((c) => (<Link key={c.href} href={c.href} className="country-card flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt, background: T.surface }}><span className={`fi fi-${c.flag} text-2xl`} /><p className="font-semibold text-sm" style={{ color: T.navyMid }}>{c.label}</p><ArrowRight className="w-4 h-4" style={{ color: T.red }} /></Link>))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>Our Services</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (<div key={i} className="service-card p-6 rounded-2xl border text-center" style={{ borderColor: T.surfaceAlt }}><div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: T.red + "15" }}><s.icon className="w-6 h-6" style={{ color: T.red }} /></div><h3 className="font-bold" style={{ color: T.navyMid }}>{s.title}</h3></div>))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>GVK EduTech Suryapet Office</h2></div>
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="relative h-[350px] rounded-2xl overflow-hidden">
              <Image src={office.image} alt="GVK EduTech Suryapet" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5" style={{ color: T.red }} /><p className="text-sm" style={{ color: T.muted }}>{office.address}</p></div>
              <div className="grid grid-cols-2 gap-4">
                <a href={`tel:${office.phones[0]}`} className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: T.surfaceAlt }}><Phone className="w-5 h-5" style={{ color: T.red }} /><span className="font-semibold text-sm" style={{ color: T.navyMid }}>{office.phones[0]}</span></a>
                <a href="mailto:info@gvkedutech.com" className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: T.surfaceAlt }}><Mail className="w-5 h-5" style={{ color: T.red }} /><span className="font-semibold text-sm" style={{ color: T.navyMid }}>Email</span></a>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl border" style={{ borderColor: T.surfaceAlt, background: T.white }}><Clock className="w-5 h-5" style={{ color: T.red }} /><span className="text-sm" style={{ color: T.muted }}>Mon – Sat: 9:00 AM – 7:00 PM</span></div>
              <div className="flex gap-3">
                <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm" style={{ background: T.red, color: T.white }}>Get Directions</a>
                <a href="https://api.whatsapp.com/send/?phone=919010060000" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border" style={{ borderColor: T.surfaceAlt, color: T.navyMid }}>WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Other Branches ── */}
      <section className="py-16" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold" style={{ color: T.navyMid }}>Other Branch Offices</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { city: "Hyderabad", flag: "in" },
              { city: "Bangalore", flag: "in" },
              { city: "Chennai", flag: "in" },
              { city: "Warangal", flag: "in" },
              { city: "Karimnagar", flag: "in" },
              { city: "Vijayawada", flag: "in" },
              { city: "Visakhapatnam", flag: "in" },
              { city: "Nellore", flag: "in" },
              { city: "Tirupati", flag: "in" },
              { city: "Nalgonda", flag: "in" },
            ].filter(b => b.city.toLowerCase() !== "suryapet").map((branch) => (
              <Link key={branch.city} href={`/branches/${branch.city.toLowerCase()}`} className="flex items-center gap-3 p-4 rounded-xl border bg-white" style={{ borderColor: T.surfaceAlt }}>
                <span className={`fi fi-${branch.flag} text-xl`} />
                <span className="font-semibold" style={{ color: T.navyMid }}>{branch.city}</span>
                <ArrowRight className="w-4 h-4 ml-auto" style={{ color: T.red }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)` }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Start Your Study Abroad Journey</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: T.red, color: T.white }}>Book Free Counseling</Link>
            <a href="tel:+919949200740" className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/20 text-white">Call Now</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}