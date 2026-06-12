import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, MessageCircle, User, ArrowRight, ChevronRight, GraduationCap, BookOpen, Globe, Award, FileCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Best Study Abroad Consultancy in Nellore | MBBS & Masters Abroad",
  description: "Looking for the best study abroad consultancy in Nellore? GVK EduTech offers expert guidance for MBBS and Masters abroad admissions in Nellore.",
  keywords: "study abroad consultancy nellore, best abroad consultancy nellore, overseas education consultants nellore, mbbs abroad consultancy nellore",
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
  { label: "Masters in Ireland", href: "/masters/ireland", flag: "ie" },
  { label: "Masters in New Zealand", href: "/masters/newzealand", flag: "nz" },
];

const popularDestinations = [
  { label: "Study in UK", href: "/masters/uk", flag: "gb" },
  { label: "Study in USA", href: "/masters/usa", flag: "us" },
  { label: "Study in Australia", href: "/masters/australia", flag: "au" },
  { label: "Study in Canada", href: "/masters/canada", flag: "ca" },
  { label: "Study in Germany", href: "/masters/germany", flag: "de" },
  { label: "Study in Ireland", href: "/masters/ireland", flag: "ie" },
];

const services = [
  { icon: GraduationCap, title: "University Selection", desc: "Personalized course selection" },
  { icon: FileCheck, title: "Admission Assistance", desc: "End-to-end application support" },
  { icon: Award, title: "Scholarship Support", desc: "Help finding scholarships" },
  { icon: Globe, title: "Pre-Departure Briefing", desc: "Travel orientation" },
];

const faqs = [
  { q: "Why choose GVK EduTech in Nellore?", a: "15+ years experience placing 5,000+ students abroad." },
  { q: "Which countries do you specialize in?", a: "MBBS in Kazakhstan, Kyrgyzstan, Russia, Georgia and Masters in UK, USA, Australia, Canada, Germany." },
];

const office = {
  city: "Nellore",
  type: "Regional Office",
  address: "Nellore, Andhra Pradesh",
  phones: ["+91 8886669980", "+91 8465077770"],
  email: "info@gvkedutech.com",
  mapLink: "https://goo.gl/maps/nellore",
  image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115237409.png",
  monument: "Srisailam Dam",
  regionalDirector: "Mr. Amarnath Reddy & Mrs. Rajeswari Reddy",
  qualification: "M.Sc Biotechnology & M.Sc Organic Chemistry",
};

const pageStyles = (
  <style>{`
    .dest-card { transition: all 0.25s ease; }
    .dest-card:hover { transform: translateY(-4px); }
    .country-card { transition: all 0.2s ease; }
    .country-card:hover { background: ${T.surfaceAlt}; }
    .service-card { transition: all 0.25s ease; }
    .service-card:hover { transform: translateY(-3px); }
  `}</style>
);

export default function NellorePage() {
  return (
    <PageLayout>
      {pageStyles}
      <PageHeader title="Best Study Abroad Consultancy in Nellore" subtitle="Your trusted partner for MBBS and Masters abroad" breadcrumb="Branches / Nellore" />
      <section className="py-16" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: T.navyMid }}>Best Study Abroad Consultancy in Nellore</h1>
            <p className="text-lg" style={{ color: T.muted }}>GVK EduTech offers expert guidance for MBBS and Masters abroad with 15+ years experience.</p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link href="/contact" className="px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: T.red, color: T.white }}>Book Free Counseling</Link>
              <a href="tel:+918886669980" className="px-6 py-3 rounded-xl font-semibold text-sm border" style={{ borderColor: T.surfaceAlt, color: T.navyMid }}>Call: +91 8886669980</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>Study Abroad Programs</h2></div>
          <div className="mb-14">
            <h3 className="text-xl font-bold mb-6" style={{ color: T.navyMid }}>MBBS Abroad</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mbbsCountries.map((c) => (<Link key={c.href} href={c.href} className="country-card flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt, background: T.surface }}><span className={`fi fi-${c.flag} text-2xl`} /><p className="font-semibold text-sm" style={{ color: T.navyMid }}>{c.label}</p><ArrowRight className="w-4 h-4" style={{ color: T.red }} /></Link>))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6" style={{ color: T.navyMid }}>Masters Abroad</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mastersCountries.map((c) => (<Link key={c.href} href={c.href} className="country-card flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt, background: T.surface }}><span className={`fi fi-${c.flag} text-2xl`} /><p className="font-semibold text-sm" style={{ color: T.navyMid }}>{c.label}</p><ArrowRight className="w-4 h-4" style={{ color: T.red }} /></Link>))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>Popular Destinations</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDestinations.map((d) => (<Link key={d.href} href={d.href} className="dest-card flex items-center gap-4 p-5 rounded-2xl bg-white border" style={{ borderColor: T.surfaceAlt }}><span className={`fi fi-${d.flag} text-4xl`} /><p className="font-bold text-lg" style={{ color: T.navyMid }}>{d.label}</p><ChevronRight className="w-5 h-5 ml-auto" style={{ color: T.muted }} /></Link>))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>Our Services</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (<div key={i} className="service-card p-6 rounded-2xl border" style={{ borderColor: T.surfaceAlt }}><div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: T.red + "15" }}><s.icon className="w-6 h-6" style={{ color: T.red }} /></div><h3 className="font-bold text-lg mb-2" style={{ color: T.navyMid }}>{s.title}</h3><p className="text-sm" style={{ color: T.muted }}>{s.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>GVK EduTech Nellore Office</h2></div>
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src={office.image} alt="GVK EduTech Nellore" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6"><span className="px-3 py-1 text-xs font-bold rounded-full" style={{ background: T.navyMid, color: T.white }}>Regional Office</span></div>
            </div>
            <div className="space-y-6">
              <div><h3 className="text-2xl font-bold mb-4" style={{ color: T.navyMid }}>GVK EduTech Nellore</h3><div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-0.5" style={{ color: T.red }} /><p className="text-sm" style={{ color: T.muted }}>{office.address}</p></div></div>
              <div className="grid grid-cols-2 gap-4">
                <a href={`tel:${office.phones[0]}`} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt }}><Phone className="w-5 h-5" style={{ color: T.red }} /><div><p className="text-xs" style={{ color: T.muted }}>Phone</p><p className="font-semibold text-sm" style={{ color: T.navyMid }}>{office.phones[0]}</p></div></a>
                <a href="mailto:info@gvkedutech.com" className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt }}><Mail className="w-5 h-5" style={{ color: T.red }} /><div><p className="text-xs" style={{ color: T.muted }}>Email</p><p className="font-semibold text-sm" style={{ color: T.navyMid }}>info@gvkedutech.com</p></div></a>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt, background: T.white }}><Clock className="w-5 h-5" style={{ color: T.red }} /><div><p className="text-sm font-semibold" style={{ color: T.navyMid }}>Working Hours</p><p className="text-sm" style={{ color: T.muted }}>Monday – Saturday: 9:00 AM – 7:00 PM</p></div></div>
              <div className="flex items-center gap-4 p-4 rounded-xl border" style={{ borderColor: T.surfaceAlt, background: T.white }}><div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold" style={{ background: T.red + "15", color: T.red }}>AR</div><div><p className="text-xs" style={{ color: T.muted }}>Regional Director</p><p className="font-semibold" style={{ color: T.navyMid }}>{office.regionalDirector}</p></div></div>
              <div className="flex gap-3">
                <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm" style={{ background: T.red, color: T.white }}><MapPin className="w-4 h-4" /> Get Directions</a>
                <a href="https://api.whatsapp.com/send/?phone=919010060000" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border" style={{ borderColor: T.surfaceAlt, color: T.navyMid }}><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold" style={{ color: T.navyMid }}>Frequently Asked Questions</h2></div>
          <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="p-5 rounded-xl border" style={{ borderColor: T.surfaceAlt }}><h4 className="font-semibold mb-2" style={{ color: T.navyMid }}>{f.q}</h4><p className="text-sm" style={{ color: T.muted }}>{f.a}</p></div>))}</div>
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
              { city: "Tirupati", flag: "in" },
              { city: "Suryapet", flag: "in" },
              { city: "Nalgonda", flag: "in" },
            ].filter(b => b.city.toLowerCase() !== "nellore").map((branch) => (
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Start Your Study Abroad Journey Today</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ background: T.red, color: T.white }}><MessageCircle className="w-4 h-4" /> Book Free Counseling</Link>
            <a href="tel:+918886669980" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-white/20 text-white"><Phone className="w-4 h-4" /> Call Now</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}