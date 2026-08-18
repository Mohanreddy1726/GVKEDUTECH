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
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is West Kazakhstan Marat Ospanov Medical University NMC approved?",
    answer:
      "Yes. WKMU is listed with the National Medical Commission (NMC) of India. Indian graduates are eligible to appear for FMGE / NEXT and practise in India after returning.",
  },
  {
    question: "What is the duration of MBBS at WKMU?",
    answer:
      "The MBBS programme at WKMU is 6 years — 5 years of academic study plus a 1-year clinical internship in affiliated hospitals in Aktobe.",
  },
  {
    question: "Is NEET required for admission?",
    answer:
      "Yes. NEET-UG qualification is mandatory for Indian students applying to any medical university abroad, including WKMU. No additional entrance exam is required.",
  },
  {
    question: "What is the medium of instruction at WKMU?",
    answer:
      "The full MBBS course is taught in English for international students. Kazakh and Russian are taught alongside so students can interact with local patients during clinical rotations.",
  },
  {
    question: "What is the total cost of MBBS at WKMU?",
    answer:
      "The total MBBS cost (tuition + hostel + mess + living) for 6 years is approximately USD 26,000–32,000, i.e. around INR 22–27 lakhs.",
  },
  {
    question: "Is Indian food available at the hostel?",
    answer:
      "Yes. WKMU hostels have a dedicated Indian mess serving vegetarian and non-vegetarian meals. Rooms are furnished, heated, and Wi-Fi enabled.",
  },
  {
    question: "Can students pursue postgraduate studies abroad after WKMU?",
    answer:
      "Yes. The WKMU degree is recognised globally. Graduates can apply for PG in the USA (USMLE), UK (PLAB), Germany, Australia, Canada and other countries after clearing the respective licensing exams.",
  },
  {
    question: "How safe is Aktobe for Indian students?",
    answer:
      "Aktobe is one of Kazakhstan's largest and safest cities, with a welcoming local population, 24/7 hostel security, CCTV surveillance, and an active Indian student community.",
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
    desc: "Get your official admission letter from WKMU within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your seat by paying the first-year tuition fee as per invoice",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Kazakh student visa application — GVK EduTech assists end-to-end",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Book flights to Aktobe — full travel and airport pickup arranged",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Report to WKMU, complete registration, and start your MBBS journey",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "NEET Score Card",
  "Passport Size Photos (10 copies)",
  "Birth Certificate (in English)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Health Insurance",
  "Bank Statement (Father / Guardian)",
  "Admission Letter from WKMU",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing)" },
  { icon: Utensils, label: "Indian mess with veg / non-veg meals" },
  { icon: Wifi, label: "High-speed Wi-Fi and central heating" },
  { icon: ShieldCheck, label: "24/7 security and CCTV surveillance" },
  { icon: Clock, label: "Laundry, hot water & common rooms" },
];

const whyChoose = [
  {
    title: "NMC & WHO Recognised",
    desc: "Degree valid for medical practice in India and accepted worldwide",
    icon: ShieldCheck,
  },
  {
    title: "Affordable MBBS Fees",
    desc: "Complete 6-year MBBS at approximately INR 22–27 lakhs all-inclusive",
    icon: IndianRupee,
  },
  {
    title: "No Donation / Capitation",
    desc: "Transparent admission — pay only the official tuition fees",
    icon: Star,
  },
  {
    title: "English Medium",
    desc: "Full MBBS course taught in English from day one",
    icon: Globe,
  },
  {
    title: "Indian Food on Campus",
    desc: "Dedicated Indian mess with vegetarian and non-vegetarian daily meals",
    icon: Utensils,
  },
  {
    title: "Experienced Faculty",
    desc: "Highly qualified professors with decades of teaching and clinical experience",
    icon: GraduationCap,
  },
  {
    title: "Strong Clinical Training",
    desc: "Hands-on rotations in multi-profile affiliated hospitals from year 2",
    icon: BookOpen,
  },
  {
    title: "Safe & Welcoming City",
    desc: "Aktobe is one of the safest, most student-friendly cities in Kazakhstan",
    icon: CheckCircle,
  },
];

export default function WestKazakhstanMaratOspanovMedicalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="West Kazakhstan Marat Ospanov Medical University — MBBS 2026"
        subtitle="NMC Approved · WHO Listed · English Medium · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1600&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1957 · Aktobe, Kazakhstan
              </p>
              <ColorfulHeading
                text="West Kazakhstan Marat Ospanov Medical University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                West Kazakhstan Marat Ospanov Medical University (WKMU), located
                in Aktobe, is one of the most established and respected medical
                universities in Kazakhstan. Founded in 1957 and renamed in
                honour of the distinguished Kazakh surgeon Marat Ospanov, WKMU
                has trained thousands of doctors who practise medicine across
                the world.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">NMC approval</strong>,{" "}
                <strong className="text-foreground">WHO listing</strong> and a
                fully English-medium MBBS programme, WKMU is a top choice for
                Indian students seeking a globally recognised medical degree at
                an affordable cost.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "FAIMER Listed", "English Medium"].map(
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
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop"
                  alt="West Kazakhstan Marat Ospanov Medical University campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">65+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of medical education
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">3000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    International students
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
              { label: "FAIMER", sub: "International Medical Directory" },
              { label: "MCI", sub: "Recognised for FMGE / NEXT" },
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
              text="Why Indian Students Choose WKMU"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From affordable tuition to strong clinical exposure, WKMU checks
              every box for Indian medical aspirants.
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
              text="WKMU World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              WKMU is consistently ranked among the top medical universities
              in Kazakhstan and Central Asia.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { rank: "#3200+", source: "Webometrics World Ranking" },
              { rank: "Top 60", source: "Medical Universities in Asia" },
              { rank: "Top 15", source: "Medical Universities in Kazakhstan" },
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
              One of the most affordable NMC-approved MBBS destinations in
              Central Asia — no hidden charges, no capitation fees.
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
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $19,400
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹16,49,000
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
                  usd: "$700",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily veg / non-veg meals",
                  usd: "$1,200",
                },
                {
                  label: "Living Expenses",
                  sub: "Transport, personal",
                  usd: "$1,400",
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
                  <p className="text-lg font-bold text-accent">~$28,000</p>
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
                desc: "NEET-UG qualification is mandatory for Indian students applying abroad",
              },
              {
                title: "English",
                desc: "No separate English proficiency test — the medium of instruction is English",
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
              A straightforward six-step journey from application to your first
              day at WKMU.
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
                WKMU's on-campus hostels are safe, comfortable and designed
                with Indian students in mind — from dedicated Indian mess
                options and central heating to 24/7 security and high-speed
                Wi-Fi.
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
                  alt="Hostel room at WKMU"
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

      {/* ── STUDENT LIFE IN AKTOBE ─────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=400&auto=format&fit=crop"
                  alt="Aktobe city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&auto=format&fit=crop"
                  alt="Kazakhstan landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Aktobe
              </p>
              <ColorfulHeading
                text="A City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Aktobe is one of Kazakhstan's largest cities, blending
                traditional Kazakh culture with modern infrastructure. Students
                enjoy a safe, affordable and enriching environment with friendly
                locals and a growing international community.
              </p>
              <ul className="space-y-3">
                {[
                  "Safe and welcoming city for international students",
                  "Low cost of living — affordable for Indian families",
                  "Modern infrastructure — malls, cafes, transport",
                  "Rich cultural experiences and natural beauty nearby",
                  "Indian community and Indian restaurants available",
                  "Direct flight connectivity from major Indian cities",
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
              text="Advantages of Studying at WKMU"
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
                desc: "Completely transparent admission process, no capitation fees",
              },
              {
                title: "FMGE / NEXT Coaching",
                desc: "Integrated preparation for Indian medical licensing exams",
              },
              {
                title: "International Exposure",
                desc: "Study alongside peers from 30+ countries",
              },
              {
                title: "Clinical Rotation",
                desc: "Hands-on training in multi-profile teaching hospitals",
              },
              {
                title: "Affordable Cost",
                desc: "Best-value NMC-approved MBBS in Central Asia",
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
            Begin Your MBBS Journey at West Kazakhstan Marat Ospanov Medical
            University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counsellors will guide you through the entire process —
            from application to your first day on the WKMU campus in Aktobe.
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
