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
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Caucasus International University NMC approved?",
    answer:
      "Yes. Caucasus International University (CIU) is recognised by the National Medical Commission (NMC) of India. Indian graduates are eligible to appear for FMGE / NEXT and practise medicine in India after returning.",
  },
  {
    question: "What is the duration of MBBS at CIU Georgia?",
    answer:
      "The MBBS program at Caucasus International University is 6 years in total — 5 years of academic learning followed by a 1-year clinical internship with hands-on hospital rotations across Georgia.",
  },
  {
    question: "Is NEET required for admission to CIU?",
    answer:
      "Yes. NEET-UG qualification is mandatory for all Indian students applying to CIU or any NMC-approved medical university abroad. A valid NEET scorecard is required at the time of admission.",
  },
  {
    question: "What is the medium of instruction at CIU?",
    answer:
      "The entire MBBS program at Caucasus International University is taught in English, making it ideal for Indian students. Basic Georgian language classes are also provided to help during clinical interactions.",
  },
  {
    question: "What is the total MBBS fees at Caucasus International University?",
    answer:
      "The total MBBS fees at CIU for the full 6-year program is approximately USD 30,000 – 36,000 (around INR 26 – 31 lakhs), which includes tuition and is one of the most affordable options in Georgia.",
  },
  {
    question: "Does CIU provide hostel and Indian mess facilities?",
    answer:
      "Yes. CIU offers on-campus hostel accommodation with separate wings for boys and girls, fully furnished rooms, high-speed WiFi, 24/7 security, and a dedicated Indian mess serving vegetarian and non-vegetarian meals.",
  },
  {
    question: "Can I practice in India after MBBS from CIU?",
    answer:
      "Yes. CIU is recognised by NMC, WHO, FAIMER and WDOMS. Indian graduates can appear for FMGE / NEXT and, after clearing the licensing exam, practise medicine in India or pursue postgraduate studies abroad.",
  },
  {
    question: "Is Georgia safe for Indian students?",
    answer:
      "Georgia is one of the safest countries in Europe for international students, with a very low crime rate and a welcoming attitude towards Indian nationals. Tbilisi consistently ranks high on global safety indexes.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill the online form with your academic details and upload required documents",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Get your official admission letter from CIU within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your seat by paying the first-year tuition fees to the university account",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Georgian student visa application with university support documents",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Book direct flights to Tbilisi — GVK EduTech provides end-to-end travel support",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Report to the university, complete registration, and start your MBBS journey at CIU",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "NEET UG Score Card",
  "Passport Size Photographs (10 copies)",
  "Birth Certificate (English)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Health Insurance",
  "Bank Statement (last 6 months)",
  "Admission Letter from CIU",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing)" },
  { icon: Utensils, label: "Indian mess with veg / non-veg options" },
  { icon: Wifi, label: "High-speed WiFi across the hostel" },
  { icon: ShieldCheck, label: "24/7 security and CCTV surveillance" },
  { icon: Clock, label: "Laundry, hot water & central heating" },
];

const whyChoose = [
  {
    title: "NMC & WHO Recognised",
    desc: "Listed with NMC, WHO, FAIMER, WDOMS — globally accepted medical degree",
    icon: ShieldCheck,
  },
  {
    title: "Affordable MBBS Fees",
    desc: "Complete 6-year MBBS from INR 26–31 lakhs — among the lowest in Europe",
    icon: IndianRupee,
  },
  {
    title: "English Medium Curriculum",
    desc: "Full MBBS program delivered in English from day one",
    icon: Globe,
  },
  {
    title: "No Donation / Capitation",
    desc: "Transparent admission process with zero hidden charges",
    icon: CheckCircle,
  },
  {
    title: "Modern Campus & Labs",
    desc: "State-of-the-art simulation labs, library and digital classrooms",
    icon: Award,
  },
  {
    title: "Indian Mess on Campus",
    desc: "Daily vegetarian and non-vegetarian Indian meals prepared for students",
    icon: Utensils,
  },
  {
    title: "FMGE / NEXT Coaching",
    desc: "Integrated preparation support for Indian medical licensing exams",
    icon: TrendingUp,
  },
  {
    title: "Direct Flights from India",
    desc: "6–7 hour direct connectivity to Tbilisi from major Indian cities",
    icon: ArrowRight,
  },
];

const feeTable = [
  { year: "1st Year", usd: "$6,500", inr: "₹5,52,500" },
  { year: "2nd Year", usd: "$5,500", inr: "₹4,67,500" },
  { year: "3rd Year", usd: "$5,500", inr: "₹4,67,500" },
  { year: "4th Year", usd: "$5,500", inr: "₹4,67,500" },
  { year: "5th Year", usd: "$5,500", inr: "₹4,67,500" },
  { year: "6th Year (Internship)", usd: "$5,500", inr: "₹4,67,500" },
];

const totalUSD = feeTable.reduce((s, r) => s + parseInt(r.usd.replace(/[^0-9]/g, "")), 0);
const totalINR = feeTable.reduce((s, r) => s + parseInt(r.inr.replace(/[^0-9]/g, "")), 0);

export default function CaucasusInternationalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Caucasus International University — MBBS in Georgia 2026"
        subtitle="NMC Approved · WHO Listed · English Medium · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1995 · Tbilisi, Georgia
              </p>
              <ColorfulHeading
                text="Caucasus International University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Caucasus International University (CIU) is one of the most
                popular destinations in Georgia for Indian students pursuing
                MBBS abroad. With a globally recognised degree, modern
                European-standard campus and affordable fees, CIU combines
                quality medical education with international exposure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Recognised by the{" "}
                <strong className="text-foreground">National Medical Commission (NMC)</strong>{" "}
                and listed with the{" "}
                <strong className="text-foreground">World Health Organization (WHO)</strong>,
                CIU graduates are eligible to appear for FMGE / NEXT in India
                and pursue medical careers or postgraduation worldwide.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "FAIMER", "WDOMS", "English Medium"].map(
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
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&auto=format&fit=crop"
                  alt="Caucasus International University campus Tbilisi Georgia"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">25+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Countries represented
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
              { label: "FAIMER", sub: "Foundation for Advancement of Intl. Medical Education" },
              { label: "WDOMS", sub: "World Directory of Medical Schools" },
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
              text="Why Indian Students Choose CIU Georgia"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From NMC recognition to affordable fees and a safe European
              lifestyle, Caucasus International University checks every box
              for Indian medical aspirants.
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

      {/* ── WORLD RANKING ───────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Caucasus International University — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              CIU is steadily rising in international rankings, reflecting
              its growing reputation as a leading medical university in the
              Caucasus region.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Country Rank", value: "#35", sub: "Among Georgia universities" },
              { label: "World Rank", value: "#7,500+", sub: "Global ranking (Webometrics)" },
              { label: "Established", value: "1995", sub: "29+ years of legacy" },
              { label: "FMGE Pass Rate", value: "High", sub: "Strong NEXT preparation" },
            ].map((item) => (
              <Card key={item.label} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-accent">{item.value}</p>
                  <p className="text-sm font-semibold text-foreground mt-2">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.sub}
                  </p>
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
              One of the most affordable MBBS programs in Europe — fully
              transparent, with no donation or capitation fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    CIU Georgia — Tuition Fee Breakdown
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
                          Tuition (USD)
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          Tuition (INR*)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeTable.map((row, i) => (
                        <tr
                          key={row.year}
                          className={
                            i === feeTable.length - 1
                              ? "bg-accent/5"
                              : "border-b border-border"
                          }
                        >
                          <td className="px-6 py-4 text-foreground">
                            {row.year}
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-foreground">
                            {row.usd}
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-foreground">
                            {row.inr}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-accent/10">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ${totalUSD.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹{totalINR.toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Hostel &amp;
                    mess charges are additional and paid directly to the
                    university.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Costs (Approx.)
              </p>
              {[
                {
                  label: "Hostel",
                  sub: "On-campus accommodation",
                  usd: "$1,200",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily veg / non-veg meals",
                  usd: "$1,800",
                },
                {
                  label: "Living Expenses",
                  sub: "Transport, personal, utilities",
                  usd: "$2,400",
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
                      Total 6-Year Estimate
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + hostel + mess + living
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$48,000</p>
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
              Straightforward requirements — no separate entrance exam at
              CIU; admission is based on NEET score and academic record.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age",
                desc: "Minimum 17 years as on 31st December of the admission year (2026)",
              },
              {
                title: "Academics",
                desc: "12th standard with min. 50% in Physics, Chemistry & Biology (40% for SC/ST/OBC)",
              },
              {
                title: "NEET",
                desc: "NEET-UG qualification is mandatory for all Indian students applying abroad",
              },
              {
                title: "English",
                desc: "No separate IELTS / TOEFL required — English-medium instruction at CIU",
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
              A simple six-step journey from application to your first day at
              Caucasus International University, Tbilisi.
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech will
              assist you with every step of documentation.
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
                text="Hostel Facilities at CIU"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                CIU's modern on-campus hostels are designed for international
                students — comfortable, secure and fully equipped, with a
                dedicated Indian mess serving familiar home-style meals.
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
                  alt="CIU hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="CIU hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE ─────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Tbilisi city Georgia"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Georgia landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Life in Georgia
              </p>
              <ColorfulHeading
                text="A European City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Tbilisi blends European charm with warm Caucasian hospitality.
                It is one of the safest, most affordable and culturally rich
                capitals in Europe — the perfect backdrop for your MBBS years
                at Caucasus International University.
              </p>
              <ul className="space-y-3">
                {[
                  "One of Europe's safest cities for international students",
                  "Low cost of living compared to Western Europe",
                  "Rich history, vibrant nightlife and weekend getaways",
                  "English widely spoken in cafés, malls and transport",
                  "Large Indian student community at CIU and in Tbilisi",
                  "Direct flights from Delhi, Mumbai, Hyderabad & Chennai",
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
              text="Advantages of Studying MBBS at CIU Georgia"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET score — no extra test at CIU",
              },
              {
                title: "No Donation",
                desc: "Fully transparent admission, no capitation fees",
              },
              {
                title: "FMGE / NEXT Coaching",
                desc: "Dedicated support for Indian medical licensing exams",
              },
              {
                title: "International Faculty",
                desc: "Learn from doctors and professors from across Europe",
              },
              {
                title: "Clinical Rotations",
                desc: "Hands-on training at leading Tbilisi teaching hospitals",
              },
              {
                title: "EU-Recognised Degree",
                desc: "Eligible to practise across European and CIS countries",
              },
              {
                title: "Global PG Pathways",
                desc: "Eligible for PG in USA, UK, Germany, Australia and more",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end admission, visa and travel assistance",
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
              Everything Indian students ask about MBBS at Caucasus
              International University, Georgia.
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
            2026 Admissions Open — Limited Seats
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your MBBS Journey at Caucasus International University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire admission
            process — from application to your first day on the CIU campus in
            Tbilisi, Georgia.
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
              { href: "/mbbs/georgia", label: "MBBS in Georgia" },
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
