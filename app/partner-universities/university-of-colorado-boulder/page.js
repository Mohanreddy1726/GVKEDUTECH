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
  Award,
  DollarSign,
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

// Frequently asked questions (placeholder content)
const faqs = [
  {
    question: "Is University of Colorado Boulder recognised internationally?",
    answer: "Yes. CU Boulder is accredited by the U.S. Department of Education and recognized by professional bodies worldwide."
  },
  {
    question: "What is the tuition fee for the 2026 intake?",
    answer: "The total tuition for a typical 4‑year program is approximately $30,000 per year (≈ ₹2.4 lakhs) for international students."
  },
  {
    question: "Do I need to appear for an entrance exam?",
    answer: "No separate entrance exam is required beyond standard university admission criteria such as GPA and English proficiency."
  },
];

// Admission steps – simplified placeholder
const admissionSteps = [
  { step: 1, title: "Free Counselling", desc: "Discuss your profile with GVK EduTech’s experts", icon: FileText },
  { step: 2, title: "Choose Program", desc: "Select the desired program and confirm fees", icon: BookOpen },
  { step: 3, title: "Apply Online", desc: "Submit application through CU Boulder portal", icon: GraduationCap },
  { step: 4, title: "Receive Offer", desc: "Offer letter within 2–4 weeks", icon: CheckCircle },
  { step: 5, title: "Pay Deposit", desc: "Secure your seat by paying the tuition deposit", icon: Award },
  { step: 6, title: "Visa Assistance", desc: "Get help with I‑20 and student visa", icon: Globe },
  { step: 7, title: "Pre‑Departure", desc: "Orientation, flight booking and travel tips", icon: ArrowRight },
];

// Documents required (placeholder)
const documents = [
  "Valid Passport (min. 12 months)",
  "High School Transcript / Degree Certificate",
  "English Language Test (IELTS/TOEFL/PTE)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (2‑3)",
  "Bank Statement (Proof of Funds)",
  "Passport‑size Photographs",
  "Birth Certificate",
];

// Accommodation / Hostel feature list (placeholder)
const accommodationFeatures = [
  { icon: Home, label: "On‑campus housing available" },
  { icon: Users, label: "Shared & single rooms" },
  { icon: Utensils, label: "Mess & dining facilities" },
  { icon: Wifi, label: "High‑speed campus Wi‑Fi" },
  { icon: ShieldCheck, label: "24/7 security & CCTV" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

// Why choose Colorado Boulder (placeholder highlights)
const whyChoose = [
  { title: "World‑Class Campus", desc: "State‑of‑the‑art labs, libraries and classrooms", icon: Award },
  { title: "International Accreditation", desc: "Recognised by U.S. Department of Education and global bodies", icon: Globe },
  { title: "Competitive Tuition", desc: "One of the more affordable U.S. research universities", icon: DollarSign },
  { title: "Experienced Faculty", desc: "Professors with international research experience", icon: BookOpen },
];

// Rankings (placeholder)
const rankings = [
  { label: "Top 100", sub: "U.S. News National Universities (2026)" },
  { label: "CU Boulder", sub: "Top 5% U.S. public universities" },
];

// Advantages (placeholder)
const advantages = [
  { title: "Strong STEM Programs", desc: "Renowned engineering, computer science and physics departments" },
  { title: "Industry Connections", desc: "Partnerships with tech companies for internships" },
  { title: "Scholarships", desc: "Merit‑based scholarships for Indian students" },
  { title: "GVK Support", desc: "End‑to‑end assistance from counselling to visa" },
];

export default function UniversityOfColoradoBoulderPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Colorado Boulder Fees, Eligibility & Admission Process 2026"
        subtitle="Accredited Programs – US Recognised – Competitive Tuition"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200&auto=format&fit=crop"
      />
      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Established 2020 · Boulder, Colorado
              </p>
              <ColorfulHeading text="University of Colorado Boulder" size="3xl" className="mb-5" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                CU Boulder offers a world‑class education recognised globally. With a strong focus on research, innovation and student support, it is a popular choice for Indian students seeking quality U.S. higher education.
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
                  src="https://images.unsplash.com/photo-1531973968075-9a0c5b63772c?w=1200&auto=format&fit=crop"
                  alt="University of Colorado Boulder campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Years of Excellence</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">5K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">International Students</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE CU BOTTOM ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Why Indian Students Choose CU Boulder" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              Cutting‑edge research, global recognition and a cost‑effective tuition make CU Boulder a top choice.
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
              { label: "U.S. Department of Education", sub: "Accredited" },
              { label: "ABET", sub: "Engineering Accreditation" },
              { label: "AACSB", sub: "Business Accreditation" },
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
            <p className="text-muted-foreground text-lg">CU Boulder is consistently ranked among the top U.S. universities.</p>
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

      {/* ── 5. TUITION FEES ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Tuition Fee Structure 2026–27" size="3xl" className="mb-4" />
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
                      <td className="px-6 py-4 text-right font-semibold text-foreground">$30,000</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">₹2,55,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 text-foreground">2nd–4th Year</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">$30,000</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">₹2,55,000</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="px-6 py-4 font-bold text-foreground">Total (4 Years)</td>
                      <td className="px-6 py-4 text-right font-bold text-accent text-base">$120,000</td>
                      <td className="px-6 py-4 text-right font-bold text-accent text-base">₹10,20,000</td>
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
              Straight‑forward eligibility – no additional entrance exams beyond standard requirements.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              { title: "Age", desc: "Minimum 17 years as on 31 December of the admission year" },
              { title: "Academics", desc: "High school with minimum 50% in core subjects (40% for SC/ST/OBC)" },
              { title: "English", desc: "Proof of English proficiency (IELTS/TOEFL/PTE)" },
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

      {/* ── 10. STUDENT LIFE IN USA ─────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Student Life in the USA" size="3xl" className="mb-4" />
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Colorado offers a vibrant outdoor lifestyle, diverse cultural events, and a thriving tech ecosystem. CU Boulder supports international students with dedicated services, clubs and career fairs.
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
