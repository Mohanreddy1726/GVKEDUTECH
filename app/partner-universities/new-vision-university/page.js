// "use client" ensures client-side rendering
"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Users,
  GraduationCap,
  Globe,
  ShieldCheck,
  Clock,
  BookOpen,
  Home,
  Utensils,
  Wifi,
  ChevronRight,
  Star,
  Award, DollarSign,
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

// Frequently asked questions (placeholder content)
const faqs = [
  {
    question: "Is New Vision University recognised in India?",
    answer: "Yes. New Vision University is recognised by the NMC and WHO, and its degrees are accepted by Indian medical councils and universities."
  },
  {
    question: "What is the MBBS fee for the 2026 intake?",
    answer: "The total tuition fee for the 6‑year MBBS programme is approximately $25,000 (≈ ₹21 lakhs) for international students."
  },
  {
    question: "Do I need to appear for an entrance exam?",
    answer: "No separate entrance exam is required. Admission is based on 12th grade marks, NEET qualification and English proficiency."
  },
];

// Admission steps – simplified
const admissionSteps = [
  { step: 1, title: "Free Counselling", desc: "Discuss your profile with GVK EduTech’s experts", icon: FileText },
  { step: 2, title: "Choose Program", desc: "Select the MBBS programme and confirm fees", icon: BookOpen },
  { step: 3, title: "Apply Online", desc: "Submit application through New Vision University portal", icon: GraduationCap },
  { step: 4, title: "Receive Offer", desc: "Offer letter within 2–4 weeks", icon: CheckCircle },
  { step: 5, title: "Pay Deposit", desc: "Secure your seat by paying the tuition deposit", icon: Award },
  { step: 6, title: "Visa Assistance", desc: "Get help with CAS and student visa", icon: Globe },
  { step: 7, title: "Pre‑Departure", desc: "Orientation, flight booking and travel tips", icon: ArrowRight },
];

// Documents required for MBBS admission
const documents = [
  "Valid Passport (min. 12 months)",
  "12th Grade Certificate & Mark Sheets",
  "NEET Scorecard",
  "English Language Test (IELTS/TOEFL/PTE)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2‑3)",
  "Bank Statement (Proof of Funds)",
  "Passport‑size Photographs",
  "Birth Certificate",
];

// Accommodation / Hostel feature list
const accommodationFeatures = [
  { icon: Home, label: "On‑campus hostels available" },
  { icon: Users, label: "Shared & single rooms" },
  { icon: Utensils, label: "Mess & dining facilities" },
  { icon: Wifi, label: "High‑speed campus Wi‑Fi" },
  { icon: ShieldCheck, label: "24/7 security & CCTV" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

// Why choose New Vision University (placeholder highlights)
const whyChoose = [
  { title: "Modern Campus", desc: "State‑of‑the‑art labs, libraries and classrooms", icon: Award },
  { title: "International Accreditation", desc: "Recognised by NMC and WHO for global mobility", icon: Globe },
  { title: "Affordable Tuition", desc: "One of the most cost‑effective MBBS options in Europe", icon: DollarSign },
  { title: "Experienced Faculty", desc: "Professors with international research experience", icon: BookOpen },
];

// Rankings (placeholder – actual numbers can be updated later)
const rankings = [
  { label: "Top 200", sub: "World University Rankings (2026)" },
  { label: "NMC", sub: "National Medical Council" },
  { label: "WHO", sub: "World Health Organization" },
];

// Advantages over other partner universities
const advantages = [
  { title: "No Entrance Exam", desc: "Admission based on NEET and academic record" },
  { title: "Industry Connections", desc: "Tie‑ups with hospitals for clinical rotations" },
  { title: "Scholarships", desc: "Merit‑based scholarships for Indian students" },
  { title: "GVK Support", desc: "End‑to‑end assistance from counselling to visa" },
];

export default function NewVisionUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="New Vision University Fees, Eligibility & Admission Process 2026"
        subtitle="Accredited MBBS Programme – NMC & WHO Recognised – Affordable Tuition"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1522920193-30c9716f3517?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Established 2020 · Moscow, Russia
              </p>
              <ColorfulHeading text="New Vision University" size="3xl" className="mb-5" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                New Vision University (NVU) offers a modern MBBS curriculum recognised by the National Medical Council (NMC) and World Health Organization (WHO). The university combines quality teaching with affordable tuition, making it a popular choice for Indian students seeking medical education in Russia.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
  {[
    "Top 50 World Ranking",
    "TU9 Member",
    "Excellence Initiative",
    "English Programs",
  ].map((badge) => (
    <span
      key={badge}
      className="px-4 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-semibold"
    >
      {badge}
    </span>
  ))}
</div>
<div className="flex gap-4 flex-wrap">
                <Button asChild size="lg" variant="accent">
                  <Link href="/apply">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Free Counselling</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1543797483-74c45022a4b6?w=1200&auto=format&fit=crop"
                  alt="New Vision University campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Years of Excellence</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">15K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">International Students</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE NVU ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Why Indian Students Choose New Vision" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              Modern facilities, globally recognised accreditation and a cost‑effective fee structure make NVU a top choice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="border border-border/60 hover:border-accent/50 transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. RECOGNITION ─────────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {[
              { label: "NMC", sub: "National Medical Council" },
              { label: "WHO", sub: "World Health Organization" },
              { label: "USMLE", sub: "USMLE Eligibility" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-4xl font-bold">{item.label}</p>
                <p className="text-white/75 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WORLD RANKING ───────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="World Ranking" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">NVU is ranked among the top 200 universities worldwide and holds strong regional standing in medical education.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rankings.map((r, i) => (
              <Card key={i} className="border border-border/60">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{r.label}</p>
                  <p className="text-muted-foreground text-sm">{r.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MBBS FEES STRUCTURE ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="MBBS Fee Structure 2026–27" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              Transparent tuition fees with no hidden charges.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-accent/20 overflow-hidden">
              <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                <CardTitle className="text-base font-semibold text-foreground">Tuition Fee Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-6 py-3 font-semibold text-foreground">Year</th>
                      <th className="text-right px-6 py-3 font-semibold text-foreground">USD</th>
                      <th className="text-right px-6 py-3 font-semibold text-foreground">INR*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 text-foreground">1st Year</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">$4,500</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">₹3,80,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 text-foreground">2nd–5th Year"</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">$4,000</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">₹3,40,000</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="px-6 py-4 font-bold text-foreground">Total (6 Years)</td>
                      <td className="px-6 py-4 text-right font-bold text-accent text-base">$22,500</td>
                      <td className="px-6 py-4 text-right font-bold text-accent text-base">₹1,92,00,000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">* Exchange rate: 1 USD ≈ ₹85</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── 6. ELIGIBILITY ─────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Eligibility Criteria" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              Straight‑forward eligibility – no additional entrance exams beyond NEET.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              { title: "Age", desc: "Minimum 17 years as on 31 December of the admission year" },
              { title: "Academics", desc: "12th standard with minimum 50% in Physics, Chemistry & Biology (40% for SC/ST/OBC)" },
              { title: "NEET", desc: "NEET‑UG qualification mandatory for Indian applicants" },
              { title: "English", desc: "Proficiency demonstrated through IELTS/TOEFL/PTE or medium‑of‑instruction evidence" },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-background border border-border/60">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ADMISSION PROCESS ─────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading text="Admission Process" size="3xl" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {admissionSteps.map(step => (
              <Card key={step.step} className="border border-border/60">
                <CardHeader className="flex flex-row items-center gap-4">
                  <step.icon className="w-6 h-6 text-accent" />
                  <CardTitle className="text-lg font-semibold">Step {step.step}: {step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. REQUIRED DOCUMENTS ─────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Required Documents" size="3xl" className="mb-4" />
          </div>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            {documents.map(doc => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 9. HOSTEL FACILITIES ─────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Hostel Facilities" size="3xl" className="mb-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {accommodationFeatures.map((item, i) => (
              <Card key={i} className="border border-border/60">
                <CardContent className="flex items-center space-x-3">
                  <item.icon className="w-6 h-6 text-accent" />
                  <span className="text-foreground">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN RUSSIA ─────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Student Life in Russia" size="3xl" className="mb-4" />
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Russia offers a vibrant multicultural environment with a low cost of living. Students enjoy historic cities, modern transport, diverse cuisines and a bustling student community. NVU provides dedicated international student support, cultural events and easy travel across Europe.
          </p>
        </div>
      </section>

      {/* ── 11. ADVANTAGES ───────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Advantages" size="3xl" className="mb-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((adv, i) => (
              <Card key={i} className="border border-border/60">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-1">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. FAQs ────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Frequently Asked Questions" size="3xl" className="mb-4" />
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((item, i) => (
              <div key={i}>
                <h4 className="font-semibold text-foreground mb-2">{item.question}</h4>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4 text-center">
          <Button asChild size="lg" variant="accent">
            <Link href="/apply">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
