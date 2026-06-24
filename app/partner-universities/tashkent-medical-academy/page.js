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
  IndianRupee,
  Plane,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Tashkent Medical Academy NMC approved?",
    answer:
      "Yes. Tashkent Medical Academy is recognised by the National Medical Commission (NMC) of India, and is also listed with the World Health Organisation (WHO) and FAIMER. Indian graduates are eligible to appear for FMGE / NEXT and practise in India after returning.",
  },
  {
    question: "What is the duration of MBBS at Tashkent Medical Academy?",
    answer:
      "The MBBS programme at Tashkent Medical Academy is 6 years — 5 years of academic and clinical training followed by a 1-year internship, in line with the latest NMC guidelines for medical studies abroad.",
  },
  {
    question: "Is NEET required for admission to Tashkent Medical Academy?",
    answer:
      "Yes. NEET-UG qualification is mandatory for every Indian student applying for MBBS abroad, including admission to Tashkent Medical Academy. You must have a valid NEET scorecard at the time of application.",
  },
  {
    question: "What is the medium of instruction at Tashkent Medical Academy?",
    answer:
      "The complete MBBS syllabus is taught in English for international students, which makes it easy for Indian students to follow lectures, write exams, and interact with faculty. Basic Uzbek is also taught for clinical rotations with local patients.",
  },
  {
    question: "What is the total MBBS fee at Tashkent Medical Academy?",
    answer:
      "The total cost of pursuing MBBS at Tashkent Medical Academy is approximately USD 18,000 – 22,000 for the entire 6-year programme — roughly INR 16 – 19 lakhs. This includes tuition, hostel, and basic living expenses.",
  },
  {
    question: "Is hostel accommodation available for Indian students?",
    answer:
      "Yes. Tashkent Medical Academy offers on-campus hostels with separate wings for boys and girls. Rooms are fully furnished (typically 2–3 sharing), and an Indian mess serving vegetarian and non-vegetarian meals is available within walking distance.",
  },
  {
    question: "How safe is Uzbekistan for Indian students?",
    answer:
      "Uzbekistan is one of the safest countries in Central Asia, with very low crime rates and a welcoming attitude toward international students. Tashkent is a modern capital with reliable public transport, English-speaking locals in university zones, and a friendly Indian community.",
  },
  {
    question: "Can I practise in India or pursue PG abroad after graduating?",
    answer:
      "Yes. After completing MBBS at Tashkent Medical Academy, you can return to India and appear for FMGE / NEXT to obtain a licence to practise. The degree is also recognised for PG entrance exams in the USA (USMLE), UK (PLAB), and other countries.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill the GVK EduTech enquiry form with your 12th marks and NEET score",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Get your official admission letter from Tashkent Medical Academy within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your seat by paying the first-year tuition fee directly to the university",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Uzbekistan student visa application with university documents — we assist end-to-end",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Fly to Tashkent via direct / one-stop flights from Delhi or Mumbai — GVK EduTech handles travel support",
    icon: Plane,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Report to the university, complete registration, and start your MBBS journey in Tashkent",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "NEET Score Card",
  "Passport Size Photos (8–10 copies)",
  "Birth Certificate (English translation)",
  "Police Clearance Certificate (PCC)",
  "Medical Certificate with HIV Report",
  "Travel & Health Insurance",
  "Bank Statement (Father / Guardian)",
  "Admission Letter from Tashkent Medical Academy",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing)" },
  { icon: Utensils, label: "Indian mess with veg / non-veg options nearby" },
  { icon: Wifi, label: "High-speed WiFi in hostel and campus" },
  { icon: ShieldCheck, label: "24/7 security with CCTV surveillance" },
  { icon: Clock, label: "Laundry, hot water & central heating" },
];

const whyChoose = [
  {
    title: "Est. 1919 — 100+ Years Legacy",
    desc: "One of Uzbekistan's oldest and most respected medical institutions with a century of academic excellence",
    icon: Star,
  },
  {
    title: "Highly Affordable Fees",
    desc: "Complete 6-year MBBS at approx. INR 16–19 lakhs — among the most affordable NMC-approved options abroad",
    icon: IndianRupee,
  },
  {
    title: "No Donation / No Capitation",
    desc: "Transparent admission — no hidden charges, no management quota, no donation of any kind",
    icon: ShieldCheck,
  },
  {
    title: "English Medium MBBS",
    desc: "Full MBBS syllabus taught in English for international students from day one",
    icon: Globe,
  },
  {
    title: "Indian Food on Campus",
    desc: "Indian mess within campus / walking distance serving daily vegetarian and non-vegetarian meals",
    icon: Utensils,
  },
  {
    title: "Safe & Student-Friendly Country",
    desc: "Uzbekistan consistently ranks among the safest countries in Central Asia for international students",
    icon: CheckCircle,
  },
  {
    title: "Strong FMGE / NEXT Coaching",
    desc: "Dedicated preparation for Indian medical licensing exams integrated into the curriculum",
    icon: GraduationCap,
  },
  {
    title: "Direct Flights from India",
    desc: "Convenient direct and one-stop flights to Tashkent from Delhi and Mumbai",
    icon: Plane,
  },
];

export default function TashkentMedicalAcademyPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Tashkent Medical Academy — MBBS 2026"
        subtitle="NMC Approved · WHO Listed · English Medium · Affordable Uzbekistan MBBS"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1919 · Tashkent, Uzbekistan
              </p>
              <ColorfulHeading
                text="Tashkent Medical Academy"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Tashkent Medical Academy (TMA) is one of Uzbekistan's most
                prestigious medical universities — a top choice for Indian
                students seeking quality, English-medium MBBS education abroad
                at a fraction of the cost of private colleges in India.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">NMC approval</strong>,{" "}
                <strong className="text-foreground">WHO recognition</strong>,
                and a curriculum aligned with international standards, TMA
                graduates are eligible to appear for FMGE / NEXT and practise
                medicine in India on return.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "FAIMER Recognised", "English Medium"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="px-4 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-semibold"
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" variant="accent">
                  <Link href="/apply">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Free Counseling</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&auto=format&fit=crop"
                  alt="Tashkent Medical Academy campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">100+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of medical education
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">₹16–19L</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Total 6-year MBBS fee
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION & WORLD RANKING BAND ─────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "NMC", sub: "India — National Medical Commission" },
              { label: "WHO", sub: "World Health Organisation Listed" },
              { label: "FAIMER", sub: "International Medical Directory" },
              { label: "Est. 1919", sub: "100+ Years of Academic Excellence" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold">{item.label}</p>
                <p className="text-white/75 text-sm mt-1 leading-snug">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ──────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose TMA"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Affordable tuition, English-medium teaching, and a safe,
              student-friendly campus make Tashkent Medical Academy a standout
              choice for MBBS abroad.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={i}
                  className="border border-border/60 hover:border-accent/50 transition-colors duration-200"
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MBBS FEES ────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="MBBS Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most affordable MBBS programmes in the world — no
              hidden charges, no capitation fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Year
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          USD
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">1st Year</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $4,200
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹3,57,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          2nd–6th Year{" "}
                          <span className="text-muted-foreground text-xs">
                            (per year)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $2,800 – $3,200
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹2,38,000 – ₹2,72,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $18,000 – $22,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹15,30,000 – ₹18,70,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Excludes hostel & mess.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Costs
              </p>
              {[
                { label: "Hostel", sub: "On-campus accommodation", usd: "$600 – $900" },
                { label: "Indian Mess", sub: "Daily veg / non-veg meals", usd: "$1,200 – $1,500" },
                { label: "Living Expenses", sub: "Transport, personal, utilities", usd: "$1,200 – $1,500" },
              ].map((item) => (
                <Card key={item.label} className="border border-border/60">
                  <CardContent className="px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {item.label}
                      </p>
                      <p className="text-muted-foreground text-xs mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-accent">{item.usd}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      Total 6-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$28,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear, straightforward requirements — no entrance exam beyond NEET.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age",
                desc: "Minimum 17 years as on 31st December of the admission year",
              },
              {
                title: "Academics",
                desc: "12th standard (PCB) with min. 50% (40% for SC / ST / OBC) from a recognised board",
              },
              {
                title: "NEET",
                desc: "NEET-UG qualification is mandatory for Indian students applying for MBBS abroad",
              },
              {
                title: "English",
                desc: "No IELTS / TOEFL required — the MBBS programme is taught entirely in English",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-2xl bg-background border border-border/60"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward six-step journey from enquiry to your first day
              at Tashkent Medical Academy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/12*100%+1.25rem)] right-[calc(1/12*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-6 gap-6">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full border-2 border-accent bg-background flex items-center justify-center mb-4 flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <p className="font-bold text-foreground text-sm mb-1">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="accent">
              <Link href="/apply">
                Start Your Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before you apply — GVK EduTech helps
              you prepare and verify each one.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-3">
                  {documents.map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-muted/50 border border-border/50"
                    >
                      <FileText className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-foreground text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── HOSTEL FACILITIES ────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Tashkent Medical Academy's hostels are safe, comfortable, and
                set up with Indian students in mind — from dedicated Indian
                mess options to round-the-clock security.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {hostelFeatures.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{f.label}</span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&auto=format&fit=crop"
                  alt="Hostel room at Tashkent Medical Academy"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Tashkent city life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Uzbekistan landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Tashkent
              </p>
              <ColorfulHeading
                text="A City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Uzbekistan blends Central Asian heritage with modern
                infrastructure. Tashkent is a safe, affordable, and culturally
                rich capital — the perfect backdrop for six transformative
                years of medical study.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the safest capitals in Central Asia for international students",
                  "Low cost of living compared to European and other Asian destinations",
                  "Rich Silk Road history, cuisine, and weekend travel to Samarkand & Bukhara",
                  "Growing Indian student community with Indian restaurants & grocery stores",
                  "Reliable public transport and modern campus infrastructure",
                  "Convenient direct and one-stop flights from Delhi and Mumbai",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ───────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying at TMA"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET score — no additional entrance test",
              },
              {
                title: "No Donation",
                desc: "Transparent admission process — zero capitation fees",
              },
              {
                title: "FMGE / NEXT Coaching",
                desc: "Integrated preparation for Indian medical licensing exams",
              },
              {
                title: "International Exposure",
                desc: "Study alongside peers from 20+ countries",
              },
              {
                title: "Clinical Rotation",
                desc: "Hands-on training in affiliated teaching hospitals in Tashkent",
              },
              {
                title: "WHO Recognised",
                desc: "Degree listed in WHO World Directory of Medical Schools",
              },
              {
                title: "Global PG Pathways",
                desc: "Eligible for PG in USA, UK, Germany, Australia after licensing exams",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end visa, travel, forex & pre-departure assistance",
              },
            ].map((adv, i) => (
              <Card
                key={i}
                className="border border-border/60 hover:border-accent/40 transition-colors duration-200"
              >
                <CardContent className="p-5">
                  <h3 className="font-bold text-foreground text-sm mb-1.5">
                    {adv.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {adv.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-border/60 rounded-2xl overflow-hidden bg-background open:border-accent/30"
              >
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none select-none">
                  <span className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="font-semibold text-foreground flex-1">
                    {faq.question}
                  </p>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground text-sm leading-relaxed pl-11">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY NOW CTA ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your MBBS Journey at Tashkent Medical Academy
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire process —
            from application and admission to your first day on campus in
            Tashkent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="xl" className="group">
              <Link href="/apply">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="accent" className="group">
              <Link href="/contact">
                Free Counseling Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKING ─────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/mbbs/uzbekistan", label: "MBBS in Uzbekistan" },
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
}