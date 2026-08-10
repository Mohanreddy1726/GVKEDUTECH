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
  Award,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Caspian International School of Medicine NMC approved?",
    answer:
      "Yes, CISM is recognised by the National Medical Commission (NMC) of India. Indian graduates are eligible to appear for FMGE/NExT and practise medicine in India after returning.",
  },
  {
    question: "What is the duration of MBBS at CISM Kazakhstan?",
    answer:
      "The MBBS program at Caspian International School of Medicine is 5 years, with clinical rotations and practical training integrated throughout the curriculum — ideal for Indian students seeking a shorter study cycle.",
  },
  {
    question: "Is NEET required for admission to CISM?",
    answer:
      "Yes, NEET-UG qualification is mandatory for all Indian students applying to study MBBS abroad. CISM accepts NEET-qualified students directly without any additional entrance test.",
  },
  {
    question: "What is the medium of instruction at CISM?",
    answer:
      "The entire MBBS program at Caspian International School of Medicine is delivered in English. Students also learn basic Kazakh/Russian to communicate with local patients during clinical rotations.",
  },
  {
    question: "What is the total MBBS fee at Caspian International School of Medicine?",
    answer:
      "The complete 5-year MBBS program at CISM costs between USD 20,000 – 24,000 (approx. INR 17 – 20 lakh), making it one of the most affordable NMC-approved MBBS options for Indian students.",
  },
  {
    question: "Does CISM provide hostel facilities and Indian food?",
    answer:
      "Yes, CISM offers fully furnished on-campus hostels with separate wings for boys and girls, 24/7 security, Wi-Fi, and an Indian mess serving vegetarian and non-vegetarian meals prepared by Indian chefs.",
  },
  {
    question: "Where is Caspian International School of Medicine located?",
    answer:
      "CISM is located in Almaty, Kazakhstan's largest city and education hub. Almaty is well-connected by direct flights from Delhi, Mumbai, and other major Indian cities.",
  },
  {
    question: "Can I pursue PG abroad after MBBS from CISM?",
    answer:
      "Yes, the CISM degree is globally recognised and Indian students can pursue postgraduate studies in the USA (USMLE), UK (PLAB), Germany, Australia, or any other country after clearing the respective licensing exams.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill the GVK EduTech application form with academic details and attach required documents",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Get the official admission / invitation letter from Caspian International School of Medicine within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your MBBS seat by remitting the first-year tuition to the university account",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Kazakh student visa application — GVK EduTech handles the entire documentation",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights to Almaty",
    desc: "Book flights to Almaty — GVK EduTech provides complete pre-departure support",
    icon: Plane,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Arrive at campus, complete registration, and start your MBBS journey at CISM",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (minimum 18 months validity)",
  "10th Mark Sheet & Passing Certificate",
  "12th Mark Sheet & Passing Certificate",
  "NEET-UG Score Card (current academic year)",
  "Passport Size Photographs (10 copies, white background)",
  "Birth Certificate (in English)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Health Insurance",
  "Bank Statement (sponsorship from parent/guardian)",
  "Admission / Invitation Letter from CISM",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls" },
  { icon: Users, label: "Fully furnished rooms (twin / triple sharing)" },
  { icon: Utensils, label: "Indian mess with veg / non-veg meals" },
  { icon: Wifi, label: "High-speed Wi-Fi across hostels & campus" },
  { icon: ShieldCheck, label: "24/7 security with CCTV surveillance" },
  { icon: Clock, label: "Hot water, laundry & heating facilities" },
];

const whyChoose = [
  {
    title: "NMC & WHO Recognised",
    desc: "Globally accepted MBBS degree — eligible for FMGE/NExT in India",
    icon: ShieldCheck,
  },
  {
    title: "Affordable MBBS Fees",
    desc: "Complete 5-year MBBS at approx. INR 17–20 lakh — best value in Central Asia",
    icon: IndianRupee,
  },
  {
    title: "No Donation / Capitation",
    desc: "Transparent admission process — no hidden charges, no capitation fees",
    icon: Star,
  },
  {
    title: "English Medium MBBS",
    desc: "Entire MBBS course is taught in English from day one",
    icon: Globe,
  },
  {
    title: "5-Year Program",
    desc: "Shorter, focused MBBS program — start practising a year earlier",
    icon: GraduationCap,
  },
  {
    title: "Indian Mess on Campus",
    desc: "Dedicated Indian mess with vegetarian and non-vegetarian daily meals",
    icon: Utensils,
  },
  {
    title: "Hands-On Clinical Training",
    desc: "Clinical rotations in multi-specialty teaching hospitals from year 2",
    icon: Stethoscope,
  },
  {
    title: "Safe, Welcoming Country",
    desc: "Kazakhstan offers a safe, multicultural environment for Indian students",
    icon: CheckCircle,
  },
];

export default function CaspianInternationalSchoolOfMedicinePage() {
  return (
    <PageLayout>
      <PageHeader
        title="Caspian International School of Medicine"
        subtitle="NMC Approved · WHO Recognised · English Medium · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://cism.edu.kz/assets/img/banner-top.webp"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              {/* Eyebrow */}
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Almaty, Kazakhstan · English-Medium MBBS
              </p>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-5">
                Caspian International School of Medicine — Fees, Eligibility & Admission Process 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Caspian International School of Medicine (CISM) is one of the fastest-growing
                NMC-approved medical universities in Kazakhstan, offering a 5-year English-medium
                MBBS program tailored for Indian students. With modern infrastructure, experienced
                faculty, and strong clinical exposure, CISM provides an excellent pathway for
                aspiring doctors.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">NMC approval</strong> and{" "}
                <strong className="text-foreground">WHO recognition</strong>, CISM graduates can
                return to India and practise medicine after clearing the FMGE / NExT exam — or
                pursue postgraduate studies anywhere in the world.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "NMC Approved",
                  "WHO Listed",
                  "WDOMS Listed",
                  "English Medium",
                  "No Donation",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-semibold"
                  >
                    {badge}
                  </span>
                ))}
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
                  src="https://cism.edu.kz/assets/img/about/campus.webp"
                  alt="Caspian International School of Medicine campus in Almaty"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat cards */}
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">5 Years</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    MBBS program duration
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">1000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Indian students enrolled
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINK BAND ───────────────────────────────── */}
      <section className="py-6 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span className="font-semibold text-foreground">
              Explore more about MBBS in Kazakhstan:
            </span>
            <Link
              href="/mbbs/kazakhstan"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              MBBS in Kazakhstan <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="/partner-universities"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              All Partner Universities <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="/apply"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              Apply Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
              { label: "MEC", sub: "Ministry of Education, Kazakhstan" },
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
              text="Why Indian Students Choose CISM"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From affordable tuition to 100% English-medium teaching and on-campus Indian
              food, CISM is built around what Indian MBBS aspirants actually need.
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
              text="CISM World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Caspian International School of Medicine is ranked among the leading private
              medical universities in Kazakhstan and Central Asia.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { rank: "Top 80", source: "Medical Universities in Kazakhstan" },
              { rank: "Top 200", source: "Medical Universities in Central Asia" },
              { rank: "Listed", source: "WDOMS & WHO World Directory" },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-accent mb-2">{item.rank}</p>
                  <p className="text-muted-foreground text-sm">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEES ─────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="MBBS Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most affordable NMC-approved MBBS programs in Kazakhstan — no
              capitation, no hidden charges, fully transparent fee structure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Breakdown — CISM Kazakhstan
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
                        <td className="px-6 py-4 text-foreground">
                          1st Year
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $4,800
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹4,08,000
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
                          $3,800
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹3,23,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (5 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $20,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹17,00,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Fees include tuition only;
                    hostel &amp; mess charged separately.
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
                  usd: "$1,200",
                },
              ].map((item) => (
                <Card
                  key={item.label}
                  className="border border-border/60"
                >
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
                      Total 5-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$24,000</p>
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
              Simple, transparent requirements — no entrance exam beyond NEET-UG.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age",
                desc: "Minimum 17 years as on 31st December of the admission year (no upper limit)",
              },
              {
                title: "Academics",
                desc: "12th standard (PCB) with minimum 50% aggregate (40% for SC/ST/OBC)",
              },
              {
                title: "NEET-UG",
                desc: "Qualifying NEET score is compulsory for Indian students applying abroad",
              },
              {
                title: "English Proficiency",
                desc: "No IELTS / TOEFL required — the entire MBBS course is delivered in English",
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
              A clear six-step admission journey — from enquiry to arrival at CISM
              campus in Almaty.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-9 left-[calc(1/12*100%+1.25rem)] right-[calc(1/12*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-6 gap-6">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    {/* Number circle */}
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
              Prepare these before applying — the GVK EduTech team will help you compile,
              attest and submit every document.
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

      {/* ── HOSTEL ───────────────────────────────────────────── */}
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
                CISM&apos;s on-campus hostels are purpose-built for international students —
                with separate wings for boys and girls, modern amenities, and a dedicated
                Indian mess serving fresh vegetarian and non-vegetarian meals daily.
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
                  alt="CISM hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="CISM hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN KAZAKHSTAN ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1602940659805-770d1b3b9911?w=400&auto=format&fit=crop"
                  alt="Almaty city skyline"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=400&auto=format&fit=crop"
                  alt="Almaty mountains landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Almaty
              </p>
              <ColorfulHeading
                text="A City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Almaty is Kazakhstan&apos;s largest city — set against the snow-capped Tian Shan
                mountains, with a vibrant café culture, malls, parks, and a large friendly
                Indian student community. CISM students enjoy a safe, affordable, and
                truly international lifestyle.
              </p>
              <ul className="space-y-3">
                {[
                  "Safe, multicultural city with thousands of Indian students",
                  "Affordable living costs — groceries, transport & entertainment",
                  "Modern infrastructure, malls, cafes and co-working spaces",
                  "Snow-capped mountains, ski resorts and weekend getaways",
                  "Active Indian student association and Indian restaurants",
                  "Direct flights from Delhi, Mumbai and other major Indian cities",
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
              text="Advantages of Studying MBBS at CISM"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET score — no additional university test",
              },
              {
                title: "No Donation",
                desc: "Completely transparent admission, zero capitation or hidden fees",
              },
              {
                title: "5-Year MBBS",
                desc: "Shorter study cycle — start practising or PG preparation sooner",
              },
              {
                title: "International Exposure",
                desc: "Diverse cohort with peers from 20+ countries",
              },
              {
                title: "Clinical Rotations",
                desc: "Hands-on training in affiliated multi-specialty hospitals",
              },
              {
                title: "Affordable Cost",
                desc: "Among the lowest MBBS fees in any NMC-approved destination",
              },
              {
                title: "Global PG Pathways",
                desc: "Eligible for PG in USA, UK, Germany, Australia & more",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end visa, travel & pre-departure assistance",
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
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about MBBS admission at Caspian International
              School of Medicine.
            </p>
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
            2026 Admissions Open · Limited Seats
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your MBBS Journey at Caspian International School of Medicine
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Secure your seat at one of Kazakhstan&apos;s fastest-growing NMC-approved medical
            universities — GVK EduTech handles everything from counselling to visa to
            arrival in Almaty.
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

      {/* ── RELATED LINKS ────────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/mbbs/kazakhstan", label: "MBBS in Kazakhstan" },
              { href: "/partner-universities", label: "Partner Universities" },
              { href: "/apply", label: "Apply Now" },
              { href: "/contact", label: "Contact Us" },
              { href: "/about", label: "About GVK EduTech" },
              { href: "/", label: "Home" },
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
