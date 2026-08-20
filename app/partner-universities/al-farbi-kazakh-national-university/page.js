"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import { FAQSchema } from "@/components/SEO";
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
  Trophy,
  FlaskConical,
  Atom,
  Building2,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Al-Farabi Kazakh National University (KazNU) NMC approved for MBBS?",
    answer:
      "Yes. Al-Farabi Kazakh National University is recognised by India's National Medical Commission (NMC). Indian students graduating from KazNU's MBBS programme are eligible to appear for FMGE/NExT and practise medicine in India after clearing the licensing exam.",
  },
  {
    question: "What is the duration of the MBBS programme at Al-Farabi KazNU?",
    answer:
      "The MBBS programme at Al-Farabi Kazakh National University is a 6-year course (5 years of academic study + 1 year of clinical internship). The curriculum includes pre-clinical sciences, para-clinical subjects, and hands-on clinical rotations at affiliated teaching hospitals in Almaty.",
  },
  {
    question: "Is NEET-UG mandatory for Indian students applying to Al-Farabi KazNU?",
    answer:
      "Yes. As per the latest NMC guidelines, qualifying NEET-UG is mandatory for every Indian student seeking admission to any medical university abroad — including Al-Farabi Kazakh National University. NEET qualification is also required to sit for FMGE/NExT after graduation.",
  },
  {
    question: "What is the medium of instruction for MBBS at KazNU?",
    answer:
      "The complete MBBS programme is taught in English for international students. Students also learn basic Kazakh and Russian to communicate effectively with local patients during clinical rotations from year 3 onwards.",
  },
  {
    question: "What is the total fee for MBBS at Al-Farabi Kazakh National University?",
    answer:
      "The total cost of the 6-year MBBS programme at KazNU — including tuition, hostel, and Indian mess — is approximately USD 22,000–28,000 (around INR 19–24 lakhs). This makes it one of the most affordable English-medium MBBS options for Indian students.",
  },
  {
    question: "Does Al-Farabi KazNU provide Indian food and hostel facilities?",
    answer:
      "Yes. KazNU offers separate on-campus hostels for boys and girls with 24/7 security, furnished rooms, and high-speed WiFi. A dedicated Indian mess serves hygienic vegetarian and non-vegetarian meals prepared by Indian cooks, so students feel at home throughout their MBBS journey.",
  },
  {
    question: "What is Al-Farabi Kazakh National University's world ranking?",
    answer:
      "Al-Farabi KazNU is the top-ranked university in Kazakhstan and Central Asia. It is ranked in the QS World University Rankings, holds the highest national ranking, and is a member of the Shanghai Cooperation Organisation University. QS ranks it among the top 250 universities in Asia.",
  },
  {
    question: "Can Indian students pursue postgraduate studies abroad after MBBS from KazNU?",
    answer:
      "Yes. Al-Farabi KazNU's MBBS degree is globally recognised. Graduates are eligible to pursue postgraduate medical education (MD/MS) in the USA, UK, Germany, Canada, and Australia after clearing the respective licensing examinations such as USMLE, PLAB, and AMC.",
  },
  {
    question: "How safe is Almaty for Indian students?",
    answer:
      "Almaty is one of the safest and most student-friendly cities in Central Asia. The city has a large Indian community, Indian restaurants, cultural festivals, and dedicated international student support at KazNU. GVK EduTech also provides on-ground coordinators to help Indian students throughout their stay.",
  },
  {
    question: "Does GVK EduTech provide complete admission support for Al-Farabi KazNU?",
    answer:
      "Yes. GVK EduTech handles the entire admission process end-to-end — from profile evaluation, application, and offer letter to visa filing, travel arrangements, airport pickup, and post-arrival support in Almaty until graduation.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Free Counselling",
    desc: "Talk to our MBBS experts — profile evaluation & KazNU shortlisting",
    icon: FileText,
  },
  {
    step: 2,
    title: "Get Offer Letter",
    desc: "Receive your official admission letter from Al-Farabi KazNU within 7–10 days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your seat by paying the first-year fees to the university account",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Kazakhstan student visa application with university documents",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Book flights to Almaty — GVK EduTech provides full travel support",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin MBBS",
    desc: "Report to KazNU campus, complete registration, and start your medical journey",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (minimum 18 months validity)",
  "10th Mark Sheet & Passing Certificate",
  "12th Mark Sheet & Passing Certificate",
  "NEET-UG Score Card",
  "Passport Size Photographs (10 copies)",
  "Birth Certificate (in English)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Medical Insurance",
  "Bank Statement (Father / Guardian — last 6 months)",
  "Admission / Invitation Letter from KazNU",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing)" },
  { icon: Utensils, label: "Indian mess — veg & non-veg meals daily" },
  { icon: Wifi, label: "High-speed WiFi across campus and hostels" },
  { icon: ShieldCheck, label: "24/7 security, CCTV & biometric access" },
  { icon: Clock, label: "Laundry, hot water, heating & recreation room" },
];

const whyChoose = [
  {
    title: "Kazakhstan's #1 University",
    desc: "Highest-ranked university in the country — older and more reputed than most medical-only universities",
    icon: Trophy,
  },
  {
    title: "NMC & WHO Recognised",
    desc: "MBBS degree accepted for medical practice in India and across the world after licensing exam",
    icon: ShieldCheck,
  },
  {
    title: "Affordable MBBS Fees",
    desc: "Complete 6-year MBBS at approx. INR 19–24 lakhs — far lower than Indian private colleges",
    icon: IndianRupee,
  },
  {
    title: "No Donation / No Capitation",
    desc: "100% transparent admission process — pay only the published tuition fee",
    icon: Star,
  },
  {
    title: "English Medium MBBS",
    desc: "Entire programme delivered in English from day one by internationally trained faculty",
    icon: Globe,
  },
  {
    title: "Indian Mess & Hostel",
    desc: "Dedicated Indian mess with veg & non-veg meals, separate hostels for boys and girls",
    icon: Utensils,
  },
  {
    title: "Strong Research Focus",
    desc: "Member of SCO University and Shanghai-rankings — research-oriented learning environment",
    icon: FlaskConical,
  },
  {
    title: "Safe & Cosmopolitan",
    desc: "Almaty is among the safest cities in Central Asia with a large international student community",
    icon: CheckCircle,
  },
];

const rankingFacts = [
  { rank: "Top 250", source: "QS Asia University Rankings" },
  { rank: "#1", source: "University in Kazakhstan (national)" },
  { rank: "Top 500", source: "QS World University Rankings" },
  { rank: "1934", source: "Established — 90+ years of academic excellence" },
];

export default function AlFarabiKazakhNationalUniversityPage() {
  return (
    <PageLayout>
      <FAQSchema
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      {/* ── HERO / PAGE HEADER ──────────────────────────────── */}
      <PageHeader
        title="Al-Farabi Kazakh National University — MBBS 2026"
        subtitle="NMC Approved · WHO Recognised · Kazakhstan's #1 University · English Medium"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1600&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1934 · Almaty, Kazakhstan
              </p>
              <ColorfulHeading
                text="Al-Farabi Kazakh National University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Al-Farabi Kazakh National University (KazNU) is Kazakhstan's oldest,
                largest, and highest-ranked university — named after the medieval
                philosopher Al-Farabi. Located in the heart of Almaty, KazNU offers
                Indian students a world-class MBBS programme in English at a
                fraction of the cost of Indian private medical colleges.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">NMC approval</strong>,{" "}
                <strong className="text-foreground">WHO recognition</strong>, and
                membership in the Shanghai Cooperation Organisation (SCO)
                University, KazNU's MBBS graduates are eligible to appear for
                FMGE/NExT and practise medicine in India upon return — or pursue
                postgraduate studies in the USA, UK, Germany, or Australia.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "NMC Approved",
                  "WHO Listed",
                  "Kazakhstan #1",
                  "English Medium",
                  "QS Ranked",
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
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0d?w=900&auto=format&fit=crop"
                  alt="Al-Farabi Kazakh National University campus in Almaty"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">90+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">20,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 50+ countries
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION BAND ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "NMC", sub: "India — National Medical Commission" },
              { label: "WHO", sub: "World Health Organization Listed" },
              { label: "WDOMS", sub: "World Directory of Medical Schools" },
              { label: "SCO", sub: "Shanghai Cooperation Organisation Uni" },
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
              text="Why Indian Students Choose Al-Farabi KazNU"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Kazakhstan's #1 university — combining academic prestige with
              affordable English-medium MBBS for Indian students.
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

      {/* ── WORLD RANKING ────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Al-Farabi KazNU World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              The highest-ranked university in Kazakhstan — recognised globally
              by QS and listed in major world university directories.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rankingFacts.map((item, i) => (
              <Card key={i} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-2">
                    {item.rank}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── MBBS FEES STRUCTURE ──────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="MBBS Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most affordable English-medium MBBS programmes in
              Central Asia — transparent fees, no hidden charges, no capitation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
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
                          2nd–5th Year{" "}
                          <span className="text-muted-foreground text-xs">
                            (per year)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $3,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹2,97,500
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $18,200
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹15,47,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Hostel and Indian
                    mess billed separately.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Living cost cards */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Costs
              </p>
              {[
                {
                  label: "Hostel",
                  sub: "On-campus accommodation",
                  usd: "$700",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily veg / non-veg meals",
                  usd: "$1,100",
                },
                {
                  label: "Living Expenses",
                  sub: "Transport, personal",
                  usd: "$1,300",
                },
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
                  <p className="text-lg font-bold text-accent">~$25,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Simple, transparent requirements for Indian students applying for
              MBBS at Al-Farabi KazNU in 2026.
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
                desc: "12th standard with min. 50% in Physics, Chemistry & Biology (40% for SC/ST/OBC)",
              },
              {
                title: "NEET-UG",
                desc: "Qualifying NEET-UG score is mandatory for all Indian students applying to MBBS abroad",
              },
              {
                title: "English",
                desc: "No IELTS/TOEFL required — the entire MBBS programme is taught in English",
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
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward six-step journey from counselling to your first
              day at Al-Farabi Kazakh National University in Almaty.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-9 left-[calc(1/12*100%+1.25rem)] right-[calc(1/12*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-6 gap-6">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="flex flex-col items-center text-center"
                  >
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these before applying — GVK EduTech will guide you through
              every document, attestation and translation.
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
      <section className="py-20 section-dark">
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
                Al-Farabi KazNU's on-campus hostels are designed for international
                students — safe, fully furnished, and equipped with everything
                Indian students need to feel at home, including Indian mess and
                24/7 campus security.
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
                  alt="Al-Farabi KazNU hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Al-Farabi KazNU common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN ALMATY ───────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1602941525436-a9e36ad9d62a?w=400&auto=format&fit=crop"
                  alt="Almaty city skyline"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=400&auto=format&fit=crop"
                  alt="Kazakhstan mountains near Almaty"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Almaty
              </p>
              <ColorfulHeading
                text="A Cosmopolitan City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Almaty is Kazakhstan's largest city — a vibrant cultural and
                educational hub nestled at the foothills of the Trans-Ili
                Alatau mountains. Indian students enjoy a safe, affordable, and
                cosmopolitan lifestyle with modern infrastructure, a thriving
                Indian community, and easy weekend getaways to mountains and
                ski resorts.
              </p>
              <ul className="space-y-3">
                {[
                  "Safe and welcoming city for international students",
                  "Affordable cost of living compared to European destinations",
                  "Modern metro, malls, restaurants and medical facilities",
                  "Rich cultural experiences — Soviet, Kazakh and modern fusion",
                  "Large Indian community, Indian restaurants and grocery stores",
                  "Direct flights from Delhi, Mumbai and other Indian cities",
                  "Easy weekend access to ski resorts and mountain trekking",
                  "Year-round international student events and festivals",
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
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying MBBS at Al-Farabi KazNU"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A complete MBBS experience designed for Indian students — from
              academic rigour to on-campus comfort.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET score — no additional entrance test at KazNU",
              },
              {
                title: "No Donation",
                desc: "Transparent admission — no capitation fee, no hidden charges",
              },
              {
                title: "FMGE / NExT Coaching",
                desc: "Integrated preparation from year 1 for Indian medical licensing",
              },
              {
                title: "International Exposure",
                desc: "Study alongside peers from 50+ countries across Asia & beyond",
              },
              {
                title: "Modern Clinical Training",
                desc: "Hands-on rotations at multi-speciality teaching hospitals in Almaty",
              },
              {
                title: "Affordable Cost",
                desc: "Best-value English-medium MBBS in Central Asia",
              },
              {
                title: "Global PG Pathways",
                desc: "Eligible for PG in USA, UK, Germany, Australia after licensing exams",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end visa, travel, hostel & pre-departure assistance",
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
      <section className="py-20 section-light">
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your MBBS Journey at Al-Farabi Kazakh National University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join Kazakhstan's #1 university for a globally recognised,
            English-medium MBBS at an affordable cost. Our expert counsellors
            will guide you from application to your first day in Almaty.
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
                Free Counselling Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ───────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/mbbs/kazakhstan", label: "MBBS in Kazakhstan" },
              { href: "/partner-universities", label: "Partner Universities" },
              { href: "/apply", label: "Apply Now" },
              { href: "/contact", label: "Contact Us" },
              { href: "/about", label: "About GVK EduTech" },
              { href: "/", label: "Homepage" },
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
