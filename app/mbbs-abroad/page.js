"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { validatePhone } from "@/utils/validation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import { FAQSchema } from "@/components/SEO";
import "flag-icons/css/flag-icons.min.css";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Stethoscope,
  Globe2,
  BookOpen,
  Users,
  BadgeCheck,
  IndianRupee,
  Award,
  ShieldCheck,
  Plane,
  FileText,
  Star,
  Quote,
  PhoneCall,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Clock,
  Building2,
  TrendingUp,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Design tokens — matches /mbbs page
───────────────────────────────────────────── */
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

/* ─── Country data: 7 MBBS destinations ─── */
const mbbsCountries = [
  {
    name: "Russia",
    slug: "russia",
    flag: "ru",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142244856.png?updatedAt=1778748810968",
    duration: "6 Years",
    medium: "English",
    fee: "₹15 – ₹30 Lakh",
    universities: "30+ NMC Approved",
    highlights: ["Top QS-Ranked Universities", "Advanced Labs & Hospitals", "WHO & NMC Recognised", "Large Indian Community"],
  },
  {
    name: "Georgia",
    slug: "georgia",
    flag: "ge",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142235537.png?updatedAt=1778748810531",
    duration: "6 Years",
    medium: "English",
    fee: "₹25 – ₹35 Lakh",
    universities: "15+ NMC Approved",
    highlights: ["WHO Recognised", "Safe European Country", "No Donation", "High FMGE Pass Rate"],
  },
  {
    name: "Kyrgyzstan",
    slug: "kyrgyzstan",
    flag: "kg",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142254461.png?updatedAt=1778748810723",
    duration: "5–6 Years",
    medium: "English",
    fee: "₹12 – ₹22 Lakh",
    universities: "10+ NMC Approved",
    highlights: ["Most Affordable MBBS", "NMC Approved", "Safe Hostels", "Indian Mess Available"],
  },
  {
    name: "Kazakhstan",
    slug: "kazakhstan",
    flag: "kz",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114652294.png?updatedAt=1778825819983",
    duration: "6 Years",
    medium: "English",
    fee: "₹15 – ₹22 Lakh",
    universities: "8+ NMC Approved",
    highlights: ["Modern Infrastructure", "Multi-Profile Hospitals", "Affordable Fees", "Transparent Admissions"],
  },
  {
    name: "Nepal",
    slug: "nepal",
    flag: "np",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142225739.png?updatedAt=1778748808091",
    duration: "5.5 Years",
    medium: "English",
    fee: "₹30 – ₹55 Lakh",
    universities: "15+ NMC Approved",
    highlights: ["Cultural Proximity", "NMC Approved", "No Visa Required", "Similar Climate to India"],
  },
  {
    name: "Uzbekistan",
    slug: "uzbekistan",
    flag: "uz",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114749638.png?updatedAt=1778825875602",
    duration: "6 Years",
    medium: "English",
    fee: "₹14 – ₹20 Lakh",
    universities: "5+ NMC Approved",
    highlights: ["Emerging Destination", "Quality Education", "Cultural Heritage", "Low Living Cost"],
  },
  {
    name: "Vietnam",
    slug: "vietnam",
    flag: "vn",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114910639.png?updatedAt=1778825958215",
    duration: "6 Years",
    medium: "English",
    fee: "₹18 – ₹25 Lakh",
    universities: "5+ NMC Approved",
    highlights: ["WHO Listed", "Clinical Exposure", "Tropical Medicine", "Affordable Living"],
  },
];

/* ─── 6 hardcoded testimonials — videoUrl placeholders ─── */
const testimonials = [
  {
    name: "Aarav Sharma",
    city: "Hyderabad",
    initial: "AS",
    program: "MBBS, 2022–28",
    country: "Russia",
    university: "Bashkir State Medical University",
    quote:
      "GVK EduTech handled my entire admission — from application to visa — in just 6 weeks. I'm now in my 3rd year at Bashkir and love the clinical exposure here.",
    rating: 5,
    color: "#C8243A",
    videoUrl: "#", // TODO: replace with real YouTube link
  },
  {
    name: "Priya Reddy",
    city: "Bangalore",
    initial: "PR",
    program: "MBBS, 2021–27",
    country: "Georgia",
    university: "Tbilisi State Medical University",
    quote:
      "I was worried about FMGE preparation, but GVK's integrated coaching and mentoring helped me clear it on my first attempt. The 2-year journey here has been amazing.",
    rating: 5,
    color: "#1A2B42",
    videoUrl: "#",
  },
  {
    name: "Rohan Patel",
    city: "Ahmedabad",
    initial: "RP",
    program: "MBBS, 2023–29",
    country: "Kyrgyzstan",
    university: "International Higher School of Medicine",
    quote:
      "Total 6-year cost was under ₹20 lakh — less than half of what Indian private colleges charge. The Indian mess and hostel make it feel like home.",
    rating: 5,
    color: "#C8243A",
    videoUrl: "#",
  },
  {
    name: "Sneha Iyer",
    city: "Chennai",
    initial: "SI",
    program: "MBBS, 2022–28",
    country: "Kazakhstan",
    university: "South Kazakhstan Medical Academy",
    quote:
      "GVK's counsellors were with me at every step. From picking the right university to settling in Shymkent — their support was unbelievable. Highly recommend!",
    rating: 5,
    color: "#1A2B42",
    videoUrl: "#",
  },
  {
    name: "Karthik Nair",
    city: "Kochi",
    initial: "KN",
    program: "MBBS, 2021–27",
    country: "Uzbekistan",
    university: "Samarkand State Medical University",
    quote:
      "I had a low NEET score and was rejected by many consultants. GVK found me a seat in Samarkand within 3 weeks. Forever grateful to the team.",
    rating: 5,
    color: "#C8243A",
    videoUrl: "#",
  },
  {
    name: "Ananya Singh",
    city: "Lucknow",
    initial: "AS",
    program: "MBBS, 2023–28",
    country: "Nepal",
    university: "Kathmandu Medical College",
    quote:
      "No visa, similar food, similar climate — Nepal felt like a natural choice. GVK EduTech made the entire process effortless for me and my parents.",
    rating: 5,
    color: "#1A2B42",
    videoUrl: "#",
  },
];

/* ─── Why MBBS abroad ─── */
const whyAbroad = [
  { icon: BadgeCheck,    title: "NMC / WHO Approved",  desc: "Every university we partner with is officially recognised by India's NMC and listed with WHO — your MBBS degree is valid for practice in India and across the world." },
  { icon: IndianRupee,   title: "Affordable Fees",     desc: "Complete 6-year MBBS starting from ₹12 lakh — a fraction of the ₹80 lakh+ charged by private medical colleges in India." },
  { icon: BookOpen,      title: "English Medium",      desc: "Entire curriculum taught in English by internationally trained faculty, with bilingual support for clinical rotations." },
  { icon: Stethoscope,   title: "Clinical Exposure",   desc: "Hands-on training in government-affiliated multi-speciality hospitals from year 2 — real patient interaction from day one." },
  { icon: Users,         title: "Indian Food & Hostel",desc: "Indian mess, separate boys & girls hostels, dedicated GVK student coordinators on every campus." },
  { icon: ShieldCheck,   title: "No Donation",         desc: "100% transparent admission — no capitation, no hidden fees, no donation. Pay only the published tuition." },
];

/* ─── Admission process (5 steps) ─── */
const processSteps = [
  { icon: FileText,    title: "Free Counselling",  desc: "Talk to our MBBS experts — profile evaluation & country shortlist." },
  { icon: Award,       title: "Get Offer Letter",  desc: "Receive your admission offer from the chosen university in 7–10 days." },
  { icon: Plane,       title: "Visa & Travel",     desc: "We file your student visa, book tickets, and arrange airport pickup." },
  { icon: Building2,   title: "Arrive on Campus",  desc: "Complete registration, settle into hostel, and start your MBBS journey." },
  { icon: TrendingUp,  title: "FMGE / NExT Prep",  desc: "Integrated coaching from year 1 to clear FMGE / NExT in India on first attempt." },
];

/* ─── Eligibility ─── */
const eligibility = [
  "50% in Physics, Chemistry & Biology in 12th (40% for SC/ST/OBC)",
  "Valid NEET-UG scorecard (mandatory for Indian students)",
  "Minimum 17 years of age at the time of admission",
  "Valid Indian passport (min. 18 months validity)",
  "Medical fitness certificate & HIV test report",
  "No upper age limit as per latest NMC guidelines",
];

/* ─── FAQs ─── */
const faqs = [
  { q: "Is MBBS abroad valid in India?", a: "Yes. MBBS degrees from NMC-recognised universities abroad are valid in India. After completing your degree, you must clear the FMGE / NExT exam to obtain a licence to practise medicine in India." },
  { q: "What is the total cost of MBBS abroad?", a: "Total 6-year cost ranges from ₹12 lakh to ₹55 lakh depending on the country and university — significantly lower than Indian private medical colleges (₹80 lakh – ₹1.2 crore). The fee includes tuition, hostel, and Indian mess." },
  { q: "Do I need NEET for MBBS abroad?", a: "Yes. Qualifying NEET-UG is mandatory for all Indian students seeking MBBS admission abroad as per the latest NMC guidelines. NEET is also required to be eligible for FMGE / NExT after graduation." },
  { q: "Is the medium of instruction English?", a: "Yes. All our partner universities offer the complete MBBS programme in English. Basic local language (Russian / Kazakh / Uzbek) is taught alongside to help during clinical rotations with local patients." },
  { q: "How safe are these countries for Indian students?", a: "Russia, Georgia, Kyrgyzstan, Kazakhstan, Nepal, Uzbekistan, and Vietnam are all safe and welcoming for Indian students. All our partner universities have dedicated Indian coordinators, 24/7 campus security, and large Indian student communities." },
  { q: "Will I get Indian food and hostel?", a: "Yes. Every partner university has separate boys & girls hostels and an Indian mess serving vegetarian and non-vegetarian meals prepared by Indian chefs. GVK EduTech also has on-campus student coordinators." },
  { q: "What happens after MBBS abroad?", a: "After MBBS, you can return to India and appear for FMGE / NExT to practise, or pursue postgraduate studies (MD / MS) in the USA, UK, Germany, Australia, or Canada after clearing the respective licensing exams." },
  { q: "Does GVK EduTech help with the full admission?", a: "Yes. GVK EduTech provides end-to-end support — from profile evaluation, university shortlisting, application, offer letter, visa, travel, airport pickup, and post-arrival support until graduation." },
];

/* ─── Stats ─── */
const stats = [
  { v: "5,000+", l: "Indian Students Placed" },
  { v: "7",      l: "Countries" },
  { v: "100+",   l: "NMC Approved Universities" },
  { v: "98%",    l: "Visa Success Rate" },
];

/* ─── Inline page styles (matches /mbbs page) ─── */
const pageStyles = (
  <style>{`
    .ads-eyebrow {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
      text-transform: uppercase; color: ${T.red}; margin-bottom: 0.75rem;
    }
    .ads-eyebrow::before {
      content: ''; display: block; width: 1.5rem; height: 2px;
      background: ${T.red}; border-radius: 2px;
    }
    .ads-eyebrow.center { justify-content: center; }
    .ads-rule {
      display: block; width: 3rem; height: 3px;
      background: linear-gradient(to right, ${T.red}, ${T.redLight});
      border-radius: 2px; margin-top: 0.5rem;
    }
    .ads-rule.center { margin-left: auto; margin-right: auto; }
    .country-mini {
      position: relative; overflow: hidden; border-radius: 1rem;
      border: 1px solid ${T.surfaceAlt};
      transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease;
      display: flex; flex-direction: column;
    }
    .country-mini:hover {
      border-color: ${T.red}88;
      transform: translateY(-3px);
      box-shadow: 0 12px 32px rgba(200,36,58,0.15);
    }
    .country-mini::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to bottom, transparent 25%, rgba(15,27,45,0.7) 75%);
      pointer-events: none;
    }
    .testimonial-card {
      background: ${T.white};
      border-radius: 1rem;
      border: 1px solid ${T.surfaceAlt};
      padding: 1.5rem;
      transition: border-color .2s ease, box-shadow .2s ease;
      height: 100%;
      display: flex; flex-direction: column;
    }
    .testimonial-card:hover {
      border-color: ${T.red}44;
      box-shadow: 0 8px 24px rgba(15,27,45,0.08);
    }
    .video-thumb {
      position: relative; aspect-ratio: 16/9; border-radius: 0.75rem;
      overflow: hidden; background: #0F1B2D;
    }
    .video-thumb img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform .3s ease;
      filter: brightness(0.7);
    }
    .video-thumb:hover img { transform: scale(1.05); }
    .play-overlay {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(to bottom, transparent, rgba(15,27,45,0.5));
    }
    .step-card {
      background: ${T.white}; border: 1px solid ${T.surfaceAlt};
      border-radius: 1rem; padding: 1.5rem; text-align: center;
      transition: border-color .2s ease, box-shadow .2s ease;
      height: 100%;
    }
    .step-card:hover {
      border-color: ${T.red}66;
      box-shadow: 0 6px 20px rgba(15,27,45,0.08);
    }
  `}</style>
);

/* ════════════════════════════════════════════════
   Page
════════════════════════════════════════════════ */
const MBBSAdsLandingPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    neetScore: "",
    country: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSelect = (e) => {
    setFormData((p) => ({ ...p, country: e.target.value }));
    if (errors.country) setErrors((p) => ({ ...p, country: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    const phoneVal = validatePhone(formData.phone);
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneVal.valid) newErrors.phone = phoneVal.message;

    if (!formData.country) newErrors.country = "Please select a preferred country";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/mbbs-abroad", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          neetScore: formData.neetScore,
          country: formData.country,
          message: formData.message,
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      toast({
        title: "Thank you! 🎉",
        description: "Our counsellor will call you within 24 hours with your personalised MBBS plan.",
      });
      setFormData({
        fullName: "", phone: "", email: "", neetScore: "", country: "", message: "",
      });
    } catch (err) {
      console.error("MBBS Abroad submit error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {pageStyles}
      <FAQSchema faqs={faqs.map(f => ({ question: f.q, answer: f.a }))} />

      {/* ─────────────────────── HERO + FORM ─────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)` }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: T.red, opacity: 0.12, filter: "blur(40px)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: T.red, opacity: 0.08, filter: "blur(60px)" }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* ── Left: copy ── */}
            <div className="lg:col-span-3 text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ background: T.red + "22", color: T.redLight, border: `1px solid ${T.red}44` }}>
                <Sparkles className="w-3.5 h-3.5" />
                2026 Admissions Open · Limited Seats
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Study <span style={{ color: T.redLight }}>MBBS Abroad</span><br />
                at NMC-Approved Universities
              </h1>

              <p className="text-lg lg:text-xl mb-6 max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>
                Affordable fees from <strong className="text-white">₹12 Lakh</strong> · English Medium · 5,000+ Indian students placed in 7 countries.
              </p>

              {/* Mini stats inline */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                {[
                  { icon: BadgeCheck, text: "100% NMC Approved" },
                  { icon: IndianRupee, text: "No Donation" },
                  { icon: Award, text: "FMGE Coaching" },
                  { icon: ShieldCheck, text: "Visa Support" },
                ].map((b, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <b.icon className="w-4 h-4" style={{ color: T.redLight }} />
                    {b.text}
                  </span>
                ))}
              </div>

              {/* Trust strip */}
              <div className="hidden lg:flex items-center gap-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div>
                  <p className="text-3xl font-bold" style={{ color: T.redLight }}>5,000+</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Students Placed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: T.redLight }}>15+</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: T.redLight }}>98%</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Visa Success</p>
                </div>
              </div>
            </div>

            {/* ── Right: Lead form ── */}
            <div className="lg:col-span-2">
              <div
                id="hero-form"
                className="rounded-2xl p-6 lg:p-7 shadow-2xl scroll-mt-24"
                style={{
                  background: T.white,
                  border: `1px solid ${T.surfaceAlt}`,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: T.red + "14" }}>
                    <FileText className="w-5 h-5" style={{ color: T.red }} />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg leading-tight" style={{ color: T.navyMid }}>
                      Get Free Counselling
                    </h2>
                    <p className="text-xs" style={{ color: T.muted }}>Reply within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div>
                    <Label htmlFor="fullName" className="text-xs font-semibold" style={{ color: T.navyMid }}>
                      Full Name <span style={{ color: T.red }}>*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="mt-1 h-10"
                      style={{ borderColor: errors.fullName ? T.red : T.surfaceAlt }}
                    />
                    {errors.fullName && <p className="text-xs mt-1" style={{ color: T.red }}>{errors.fullName}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs font-semibold" style={{ color: T.navyMid }}>
                      Mobile Number <span style={{ color: T.red }}>*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="mt-1 h-10"
                      style={{ borderColor: errors.phone ? T.red : T.surfaceAlt }}
                    />
                    {errors.phone && <p className="text-xs mt-1" style={{ color: T.red }}>{errors.phone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs font-semibold" style={{ color: T.navyMid }}>
                      Email (optional)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-1 h-10"
                    />
                  </div>

                  <div>
                    <Label htmlFor="neetScore" className="text-xs font-semibold" style={{ color: T.navyMid }}>
                      NEET Score (optional)
                    </Label>
                    <Input
                      id="neetScore"
                      name="neetScore"
                      value={formData.neetScore}
                      onChange={handleChange}
                      placeholder="e.g. 280"
                      className="mt-1 h-10"
                    />
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-xs font-semibold" style={{ color: T.navyMid }}>
                      Preferred Country <span style={{ color: T.red }}>*</span>
                    </Label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleSelect}
                      className="mt-1 w-full h-10 px-3 rounded-md text-sm focus:outline-none focus:ring-2"
                      style={{
                        border: `1px solid ${errors.country ? T.red : T.surfaceAlt}`,
                        background: T.white,
                        color: formData.country ? T.navyMid : T.muted,
                      }}
                    >
                      <option value="">Select a country</option>
                      {mbbsCountries.map((c) => (
                        <option key={c.slug} value={c.slug}>{c.name}</option>
                      ))}
                      <option value="undecided">Not sure yet</option>
                    </select>
                    {errors.country && <p className="text-xs mt-1" style={{ color: T.red }}>{errors.country}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-xs font-semibold" style={{ color: T.navyMid }}>
                      Message (optional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us your preferred budget / country…"
                      rows={2}
                      className="mt-1 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 text-sm font-bold rounded-lg group"
                    style={{
                      background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                      color: T.white,
                      boxShadow: `0 4px 16px ${T.red}55`,
                    }}
                  >
                    {isSubmitting ? "Submitting…" : "Get Free Counselling"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                  </Button>

                  <p className="text-[10px] text-center" style={{ color: T.muted }}>
                    🔒 Your information is 100% safe. We never share your details.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── STATS BAR ─────────────────────── */}
      <div style={{ background: T.navy, borderTop: `1px solid ${T.navyMid}` }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="py-5 px-4 text-center">
                <p className="text-2xl font-bold" style={{ color: T.red }}>{s.v}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────── WHY MBBS ABROAD ─────────────────────── */}
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="ads-eyebrow center">Why Study MBBS Abroad?</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: T.navyMid }}>
                A Smarter Path to Becoming a Doctor
              </h2>
              <span className="ads-rule center" />
              <p className="mt-5 text-base leading-relaxed" style={{ color: T.muted }}>
                Pursuing MBBS abroad gives you world-class medical education at a fraction of
                the cost of private medical colleges in India — with global recognition,
                modern infrastructure, and rich clinical exposure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyAbroad.map((b, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{
                    background: T.white,
                    border: `1px solid ${T.surfaceAlt}`,
                    borderLeft: `3px solid ${T.red}`,
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: T.red + "14" }}
                  >
                    <b.icon className="w-6 h-6" style={{ color: T.red }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: T.navyMid }}>{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: T.muted }}>{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── COUNTRIES ─────────────────────── */}
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="ads-eyebrow center">MBBS Destinations</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: T.navyMid }}>
                Top 7 Countries for Indian Students
              </h2>
              <span className="ads-rule center" />
              <p className="mt-5 text-base" style={{ color: T.muted }}>
                Choose from Russia, Georgia, Kyrgyzstan, Kazakhstan, Nepal, Uzbekistan, and
                Vietnam — all offering NMC-approved MBBS programmes in English.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mbbsCountries.map((c, i) => (
              <ScrollReveal key={c.slug} animation="scale" delay={i * 60}>
                <Link href={`/mbbs/${c.slug}`} className="country-mini">
                  <div
                    className="h-44 bg-cover bg-center"
                    style={{ backgroundImage: `url(${c.image})` }}
                  />
                  <div className="relative z-10 p-5 flex-1 flex flex-col" style={{ background: T.white }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`fi fi-${c.flag}`}
                        style={{ fontSize: "1.5rem", lineHeight: 1, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
                      />
                      <h3 className="text-lg font-bold" style={{ color: T.navyMid }}>{c.name}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs mb-3">
                      <div>
                        <p style={{ color: T.muted }}>Duration</p>
                        <p className="font-semibold" style={{ color: T.navyMid }}>{c.duration}</p>
                      </div>
                      <div>
                        <p style={{ color: T.muted }}>Medium</p>
                        <p className="font-semibold" style={{ color: T.navyMid }}>{c.medium}</p>
                      </div>
                      <div className="col-span-2">
                        <p style={{ color: T.muted }}>Total Fees</p>
                        <p className="font-bold text-base" style={{ color: T.red }}>{c.fee}</p>
                      </div>
                    </div>
                    <ul className="space-y-1 mb-3 text-xs flex-1">
                      {c.highlights.slice(0, 2).map((h, j) => (
                        <li key={j} className="flex items-start gap-1.5" style={{ color: T.muted }}>
                          <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: T.red }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="flex items-center gap-1.5 text-xs font-bold pt-3"
                      style={{ color: T.red, borderTop: `1px solid ${T.surfaceAlt}` }}
                    >
                      Explore Program
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}

            {/* "Need help choosing?" CTA card */}
            <ScrollReveal animation="scale" delay={mbbsCountries.length * 60}>
              <div
                className="rounded-2xl p-6 flex flex-col items-center justify-center text-center h-full min-h-[340px]"
                style={{
                  background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)`,
                  color: T.white,
                }}
              >
                <Sparkles className="w-8 h-8 mb-3" style={{ color: T.redLight }} />
                <h3 className="font-bold text-lg mb-2">Not sure which country?</h3>
                <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Tell us your budget and NEET score — our counsellor will recommend the
                  best country & university for you.
                </p>
                <a
                  href="#hero-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                  style={{ background: T.red, color: T.white }}
                >
                  Get Free Help
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────── ELIGIBILITY + PROCESS BAND ─────────────────────── */}
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <ScrollReveal animation="fade-up">
              <p className="ads-eyebrow">Eligibility</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Who Can Apply?
              </h2>
              <span className="ads-rule" />
              <p className="mt-5 mb-6 text-base" style={{ color: T.muted }}>
                Simple, transparent requirements for Indian students applying for MBBS
                abroad in 2026.
              </p>
              <ul className="space-y-3">
                {eligibility.map((e, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: T.white, border: `1px solid ${T.surfaceAlt}` }}
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: T.red }} />
                    <span className="text-sm" style={{ color: T.navyMid }}>{e}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Process */}
            <ScrollReveal animation="fade-up" delay={150}>
              <p className="ads-eyebrow">Admission Process</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                5 Simple Steps
              </h2>
              <span className="ads-rule" />
              <p className="mt-5 mb-6 text-base" style={{ color: T.muted }}>
                From counselling to your first day on campus — GVK EduTech handles it all.
              </p>
              <div className="space-y-3">
                {processSteps.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ background: T.white, border: `1px solid ${T.surfaceAlt}` }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                      style={{ background: T.red, color: T.white }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm" style={{ color: T.navyMid }}>{s.title}</h3>
                      <p className="text-xs mt-1 leading-relaxed" style={{ color: T.muted }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────── TESTIMONIALS ─────────────────────── */}
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="ads-eyebrow center">Student Success Stories</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: T.navyMid }}>
                Hear From Our Students
              </h2>
              <span className="ads-rule center" />
              <p className="mt-5 text-base" style={{ color: T.muted }}>
                Real stories from Indian students who pursued MBBS abroad with GVK
                EduTech's guidance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 60}>
                <div className="testimonial-card">
                  {/* Video thumbnail */}
                  <a
                    href={t.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-thumb block mb-4 group"
                    aria-label={`Watch ${t.name}'s story`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg`}
                      alt={`${t.name} — ${t.country}`}
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop`;
                      }}
                    />
                    <div className="play-overlay">
                      <PlayCircle
                        className="w-14 h-14 text-white group-hover:scale-110 transition-transform"
                        style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))" }}
                      />
                    </div>
                    <div
                      className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold"
                      style={{ background: T.red, color: T.white }}
                    >
                      ▶ VIDEO
                    </div>
                  </a>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#F59E0B" }} />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4 flex-1">
                    <Quote className="w-6 h-6 absolute -top-1 -left-1 opacity-20" style={{ color: t.color }} />
                    <p className="text-sm leading-relaxed pl-5" style={{ color: T.navyMid }}>
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-3 pt-3" style={{ borderTop: `1px solid ${T.surfaceAlt}` }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.initial}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-sm truncate" style={{ color: T.navyMid }}>{t.name}</p>
                      <p className="text-xs truncate" style={{ color: T.muted }}>
                        {t.city} · {t.country}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:gap-3"
              style={{
                background: T.red,
                color: T.white,
                boxShadow: `0 4px 14px ${T.red}40`,
              }}
            >
              Explore All Testimonials
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────── TRUST STRIP ─────────────────────── */}
      <div style={{ background: T.surfaceAlt }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {[
              "NMC / WHO Approved Universities",
              "No Hidden Fees",
              "NEET Qualified Admissions",
              "English Medium Programs",
              "Free Counselling",
              "Visa & Travel Support",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: T.red }} />
                <span className="text-sm font-medium" style={{ color: T.navyMid }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────── FAQ ─────────────────────── */}
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="ads-eyebrow center">Support</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: T.navyMid }}>
                Frequently Asked Questions
              </h2>
              <span className="ads-rule center" />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 40}>
                <details
                  className="group rounded-xl overflow-hidden"
                  style={{ background: T.white, border: `1px solid ${T.surfaceAlt}` }}
                >
                  <summary
                    className="flex items-center gap-3 p-5 cursor-pointer list-none select-none"
                    style={{ listStyle: "none" }}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: T.red + "18", color: T.red }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-sm flex-1" style={{ color: T.navyMid }}>{f.q}</h3>
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-open:rotate-90"
                      style={{ color: T.muted }}
                    />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-sm leading-relaxed pl-10" style={{ color: T.muted }}>{f.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── CTA BANNER ─────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)` }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: T.red }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: T.red }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal animation="fade-up">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: T.redLight }}>
              Take the Next Step
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto">
              Ready to Begin Your Medical Career?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              Connect with our experienced counsellors for personalised guidance. We have
              successfully placed 5,000+ Indian students at top NMC-approved medical
              universities abroad.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="#hero-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
                style={{
                  background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                  color: T.white,
                  boxShadow: `0 4px 16px ${T.red}55`,
                }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+MBBS+abroad.+Please+guide+me."
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
                style={{
                  background: "rgba(255,255,255,0.1)", color: T.white,
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919010060000"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
                style={{
                  background: "transparent", color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <PhoneCall className="w-4 h-4" />
                +91 90100 60000
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────── INTERNAL LINKS ─────────────────────── */}
      <section className="py-10" style={{ background: T.surface, borderTop: `1px solid ${T.surfaceAlt}` }}>
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: T.muted }}>
            Explore More
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/", label: "Homepage" },
              { href: "/mbbs", label: "MBBS Abroad" },
              { href: "/partner-universities", label: "Partner Universities" },
              { href: "/apply", label: "Apply Now" },
              { href: "/contact", label: "Contact Us" },
              { href: "/about", label: "About GVK EduTech" },
            ].map((link) => (
              <Button key={link.href} asChild variant="outline" size="sm">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MBBSAdsLandingPage;
