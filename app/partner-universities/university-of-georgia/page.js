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
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Georgia NMC approved for MBBS?",
    answer:
      "Yes. The University of Georgia (UG) is recognised by the National Medical Commission (NMC) of India. Indian graduates are eligible to appear for FMGE / NEXT and practise medicine in India after returning.",
  },
  {
    question: "What is the duration of the MBBS program at the University of Georgia?",
    answer:
      "The MBBS program at the University of Georgia is 6 years in total — 5 years of academic study followed by a 1-year clinical internship that includes hospital rotations and hands-on patient care.",
  },
  {
    question: "Is NEET required for admission to the University of Georgia?",
    answer:
      "Yes. NEET-UG qualification is mandatory for all Indian students applying to any medical university abroad, including the University of Georgia. A valid NEET scorecard is required at the time of admission.",
  },
  {
    question: "What is the medium of instruction at the University of Georgia?",
    answer:
      "The entire MBBS program is taught in English, making it ideal for Indian students. Basic Georgian language classes are also provided to help students communicate with patients during clinical rotations.",
  },
  {
    question: "What is the total MBBS fees at the University of Georgia for Indian students?",
    answer:
      "The total cost including tuition, hostel, and living expenses is approximately USD 36,000–38,000 for the full 6-year MBBS program — roughly INR 30–32 lakhs, making it one of the most affordable NMC-approved options in Europe.",
  },
  {
    question: "Is the University of Georgia safe for Indian students?",
    answer:
      "Yes. Tbilisi consistently ranks among the safest cities in Europe. The University of Georgia campus has 24/7 security, CCTV surveillance, and a dedicated international student support office that helps Indian students settle in comfortably.",
  },
  {
    question: "Can I work part-time while studying MBBS at the University of Georgia?",
    answer:
      "International students in Georgia are permitted to work part-time (up to 20 hours per week). However, the MBBS curriculum is rigorous, and we strongly recommend focusing primarily on academics.",
  },
  {
    question: "Can I pursue post-graduation abroad after graduating from the University of Georgia?",
    answer:
      "Yes. The UG degree is globally recognised and eligible for post-graduation pathways in the USA (USMLE), UK (PLAB), Germany, Australia, Canada, and several other countries, subject to clearing the respective licensing exams.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill the online form with academic details and upload the required documents",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Get your official admission letter from the University of Georgia within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your seat by paying the first-year fees directly to the university",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Georgian student visa application with full university documentation",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Book direct flights to Tbilisi — GVK EduTech provides full travel support",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Report to the university, complete registration, and start your MBBS journey",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "NEET Score Card",
  "Passport Size Photos (10 copies)",
  "Birth Certificate (English translated)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Health Insurance",
  "Bank Statement (Father / Guardian)",
  "Admission Letter (University of Georgia)",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing)" },
  { icon: Utensils, label: "Indian mess with veg / non-veg options" },
  { icon: Wifi, label: "High-speed Wi-Fi connectivity" },
  { icon: ShieldCheck, label: "24/7 security and CCTV surveillance" },
  { icon: Clock, label: "Laundry, hot water & central heating" },
];

const whyChoose = [
  {
    title: "NMC & WHO Recognised",
    desc: "Globally accepted MBBS degree — eligible for FMGE / NEXT in India and PG worldwide",
    icon: ShieldCheck,
  },
  {
    title: "Affordable MBBS Abroad",
    desc: "Complete 6-year MBBS at approx. INR 30–32 lakhs — among the lowest in Europe",
    icon: IndianRupee,
  },
  {
    title: "No Donation / Capitation",
    desc: "Fully transparent admission — no hidden charges, no management quota fees",
    icon: CheckCircle,
  },
  {
    title: "English Medium MBBS",
    desc: "The entire course is taught in English from day one — no language barrier",
    icon: Globe,
  },
  {
    title: "Indian Food on Campus",
    desc: "Dedicated Indian mess serving vegetarian and non-vegetarian meals daily",
    icon: Utensils,
  },
  {
    title: "Safe & Welcoming Country",
    desc: "Georgia consistently ranks among the safest countries for international students",
    icon: Star,
  },
  {
    title: "High FMGE / NEXT Pass Rate",
    desc: "Structured coaching for Indian medical licensing exams built into the curriculum",
    icon: GraduationCap,
  },
  {
    title: "Direct Flights from India",
    desc: "Reach Tbilisi in 6–7 hours via direct flights from major Indian cities",
    icon: ArrowRight,
  },
];

const worldRanking = [
  { label: "World Rank", value: "#6,800", source: "UniRank International Rankings" },
  { label: "Asia Rank", value: "#1,950", source: "Asian Universities Index" },
  { label: "Country Rank", value: "#14", source: "Georgia Higher Education Ranking" },
];

export default function UniversityOfGeorgiaPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Georgia — MBBS Fees, Eligibility & Admission Process 2026"
        subtitle="NMC Approved · WHO Recognised · English Medium · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 2004 · Tbilisi, Georgia
              </p>
              <ColorfulHeading
                text="University of Georgia (UG)"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Georgia (UG) is one of the largest and most
                internationally recognised private universities in the Caucasus
                region, attracting students from over 65 countries. For Indian
                students seeking an{" "}
                <strong className="text-foreground">affordable MBBS abroad</strong>{" "}
                with globally accepted credentials, UG offers a powerful
                combination of modern infrastructure, English-medium teaching,
                and transparent fee structure.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With{" "}
                <strong className="text-foreground">NMC approval</strong> and{" "}
                <strong className="text-foreground">WHO recognition</strong>,
                graduates of UG are eligible to appear for FMGE / NEXT in India
                and practise medicine upon return — opening doors to a global
                medical career across the USA, UK, Europe, Australia and beyond.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "English Medium", "Affordable Fees"].map(
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
                  alt="University of Georgia campus in Tbilisi"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">8,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students enrolled
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">65+</p>
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
              { label: "#6,800", sub: "World Ranking · UniRank" },
              { label: "B+", sub: "International Grade" },
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
              text="Why Indian Students Choose the University of Georgia"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From affordable tuition to a safe European living environment, UG
              checks every box for Indian medical aspirants.
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

      {/* ── WORLD RANKING & RECOGNITION ──────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="World Ranking & Recognition"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              The University of Georgia holds a strong position in
              international rankings and is recognised by major medical
              councils and accreditation bodies worldwide.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 mb-10">
            {worldRanking.map((item) => (
              <Card
                key={item.label}
                className="border-2 border-accent/20 hover:border-accent/40 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent mb-1">{item.value}</p>
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              UG is listed in the World Directory of Medical Schools (WDOMS),
              recognised by the Educational Commission for Foreign Medical
              Graduates (ECFMG), and approved by the Foundation for Advancement
              of International Medical Education and Research (FAIMER).
            </p>
          </div>
        </div>
      </section>

      {/* ── FEES ─────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="MBBS Fees Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most cost-effective MBBS destinations in Europe — no
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
                        <td className="px-6 py-4 text-foreground">
                          1st Year
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $6,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹5,10,000
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
                          $5,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹4,67,500
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $28,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹23,80,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Costs
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
                  usd: "$1,500",
                },
                {
                  label: "Living Expenses",
                  sub: "Transport, personal",
                  usd: "$1,800",
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
                      Total 6-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$36,000–38,000</p>
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
              Clear, straightforward requirements — no entrance exam beyond
              NEET.
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
                desc: "12th standard with min. 50% in Physics, Chemistry & Biology (40% for SC / ST / OBC)",
              },
              {
                title: "NEET",
                desc: "NEET-UG qualification is mandatory for all Indian students applying abroad",
              },
              {
                title: "English",
                desc: "No separate English proficiency test required — the medium of instruction is English",
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
              A straightforward six-step journey from application to your first
              day at the University of Georgia.
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
              Gather these before applying — GVK EduTech will guide you through
              every document.
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
                The University of Georgia's on-campus hostels are safe,
                comfortable, and thoughtfully designed for international
                students — from dedicated Indian mess options to round-the-clock
                security.
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
                  alt="University of Georgia hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="University of Georgia hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN TBILISI ──────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Tbilisi city, Georgia"
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
                Life in Tbilisi, Georgia
              </p>
              <ColorfulHeading
                text="A City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Georgia blends European modernity with warm Caucasian
                hospitality. Tbilisi offers a safe, affordable, and culturally
                rich backdrop for six transformative years of study — and
                Indian students find a welcoming home away from home.
              </p>
              <ul className="space-y-3">
                {[
                  "One of Europe's safest cities for international students",
                  "Low cost of living — well below most European capitals",
                  "Rich history, cuisine, and weekend travel opportunities",
                  "English widely spoken across the city",
                  "Vibrant Indian student community",
                  "Direct flights from Delhi, Mumbai, Chennai & Hyderabad",
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
              text="Advantages of Studying MBBS at the University of Georgia"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET score — no additional test required",
              },
              {
                title: "No Donation",
                desc: "Completely transparent process, no capitation fees",
              },
              {
                title: "FMGE / NEXT Coaching",
                desc: "Integrated preparation for Indian medical licensing exams",
              },
              {
                title: "International Exposure",
                desc: "Study alongside peers from 65+ countries",
              },
              {
                title: "Clinical Rotation",
                desc: "Hands-on training in affiliated teaching hospitals",
              },
              {
                title: "EU Recognition",
                desc: "Degree recognised across the European Union",
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your MBBS Journey at the University of Georgia
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire process —
            from application to your first day on campus in Tbilisi.
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
