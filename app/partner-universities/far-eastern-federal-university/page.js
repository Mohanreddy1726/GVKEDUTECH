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
  Award,
  TrendingUp,
  MapPin,
} from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   FAR EASTERN FEDERAL UNIVERSITY — CONTENT DATA
══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question:
      "Is Far Eastern Federal University (FEFU) NMC approved?",
    answer:
      "Yes. Far Eastern Federal University is recognised by the National Medical Commission (NMC) of India and is listed in the World Directory of Medical Schools (WDOMS) and FAIMER. Indian graduates are eligible to appear for FMGE / NEXT and practise medicine in India after clearing the licensing exam.",
  },
  {
    question:
      "What is the duration of the MBBS program at Far Eastern Federal University?",
    answer:
      "The MBBS program at FEFU is 6 years — 5 years of academic study followed by 1 year of compulsory clinical internship. The medium of instruction is English for international students, with Russian language classes integrated from the first year to ease clinical interactions with local patients.",
  },
  {
    question:
      "What is the total MBBS fees at Far Eastern Federal University?",
    answer:
      "The total MBBS fees at FEFU for the complete 6-year program is approximately USD 30,000–36,000 — roughly ₹25–30 lakhs — including tuition, hostel and Indian mess. There is no donation or capitation fee at any stage of admission, and the fee structure is fully transparent.",
  },
  {
    question:
      "Is NEET required for admission to Far Eastern Federal University?",
    answer:
      "Yes. NEET-UG qualification is mandatory for all Indian students applying to study MBBS abroad, including at FEFU. Admission is granted on the basis of NEET score and Class 12 PCB marks — no separate entrance exam, donation or capitation fee is required.",
  },
  {
    question:
      "What is the medium of instruction at Far Eastern Federal University?",
    answer:
      "The complete MBBS course at FEFU is taught in English for international students from day one. Russian language training is integrated into the curriculum so students can communicate confidently with local patients during clinical rotations from the third year onwards.",
  },
  {
    question:
      "Is Vladivostok safe for Indian students?",
    answer:
      "Vladivostok is one of the safest large cities in Russia, with a strong police presence, a calm urban environment and a growing international community. FEFU's campus on Russky Island offers 24/7 security, CCTV-monitored hostels, separate accommodation for boys and girls, and an active Indian student community that supports newcomers.",
  },
  {
    question:
      "Is Indian food available in the hostel?",
    answer:
      "Yes. FEFU's hostel complex has dedicated Indian mess facilities run by experienced Indian cooks serving both vegetarian and non-vegetarian meals. Indian grocery stores, restaurants and community groups are easily accessible across Vladivostok.",
  },
  {
    question:
      "Can I pursue PG (postgraduate) after graduating from Far Eastern Federal University?",
    answer:
      "Absolutely. FEFU's degree is recognised across Europe, Asia, the Middle East and beyond. Graduates can apply for PG programs in the USA (after USMLE), UK (after PLAB), Germany, Australia, Canada and India (after NEXT / FMGE).",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill out the GVK EduTech application form with your academic and personal details",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "FEFU issues an official admission / invitation letter within 10–15 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your seat by remitting the first-year tuition to the university account",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Russian Visa",
    desc: "We help you file the Russian student visa using FEFU's official invitation letter",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights to Vladivostok",
    desc: "Fly to Vladivostok via Moscow — full travel assistance and airport pickup provided",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin Studies at FEFU",
    desc: "Complete university registration, medical check-up and start your MBBS journey on Russky Island",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Mark Sheet & Passing Certificate",
  "12th Mark Sheet & Passing Certificate",
  "NEET-UG Score Card",
  "Passport Size Photographs (10 copies)",
  "Birth Certificate (in English)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Medical Insurance",
  "Bank Statement (last 6 months)",
  "Admission / Invitation Letter from FEFU",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls" },
  { icon: Users, label: "Furnished rooms — 2 / 3 sharing with attached amenities" },
  { icon: Utensils, label: "Indian mess with veg & non-veg meals" },
  { icon: Wifi, label: "High-speed WiFi across the Russky Island campus" },
  { icon: ShieldCheck, label: "24/7 security & CCTV monitoring" },
  { icon: Clock, label: "Central heating, hot water & laundry" },
];

const whyChoose = [
  {
    title: "Far East's Premier Federal University",
    desc: "Recognised as Russia's flagship federal university in the Far East — the academic benchmark of the Asia-Pacific region",
    icon: Star,
  },
  {
    title: "Historic 125+ Year Legacy",
    desc: "Tracing its origins to 1899 — over 125 years of academic excellence and research across medicine, science and engineering",
    icon: Award,
  },
  {
    title: "No Donation / Capitation",
    desc: "100% transparent admission — no hidden charges, no management quota, no agent commissions at any stage",
    icon: ShieldCheck,
  },
  {
    title: "English Medium MBBS",
    desc: "Entire MBBS course delivered in English from day one for international students, with Russian language support",
    icon: Globe,
  },
  {
    title: "Stunning Russky Island Campus",
    desc: "Study on a modern, world-class campus on Russky Island with panoramic sea views and cutting-edge facilities",
    icon: MapPin,
  },
  {
    title: "Asia-Pacific Exposure",
    desc: "Unique gateway between Russia and the Asia-Pacific — strong links with Japan, China, South Korea and Southeast Asia",
    icon: Users,
  },
  {
    title: "FMGE / NEXT Coaching",
    desc: "Structured Indian medical licensing exam preparation integrated into the curriculum",
    icon: GraduationCap,
  },
  {
    title: "Globally Recognised Degree",
    desc: "Listed in WDOMS, FAIMER, NMC and recognised across Europe, USA, UK, Canada and Australia",
    icon: IndianRupee,
  },
];

const rankings = [
  { label: "Top 10", sub: "Among Universities in the Russian Far East" },
  { label: "WDOMS", sub: "World Directory of Medical Schools" },
  { label: "FAIMER", sub: "Listed in International Medical Directory" },
  { label: "1899", sub: "Year Established — 125+ Years of Legacy" },
];

const advantages = [
  {
    title: "No Entrance Exam",
    desc: "Admission based purely on NEET score and 12th PCB marks",
  },
  {
    title: "No Donation",
    desc: "Fully transparent fee structure — no capitation or hidden costs",
  },
  {
    title: "FMGE / NEXT Coaching",
    desc: "Indian licensing exam prep included throughout the course",
  },
  {
    title: "International Exposure",
    desc: "Study alongside peers from 50+ countries across Asia, Europe and the Americas",
  },
  {
    title: "Modern Clinical Training",
    desc: "Hands-on training in FEFU Medical Center and partner hospitals in Vladivostok",
  },
  {
    title: "WHO Recognition",
    desc: "Degree recognised by WHO, NMC, FAIMER and global medical councils",
  },
  {
    title: "Global PG Pathways",
    desc: "Eligible for postgraduate studies in USA, UK, Germany, Canada and more",
  },
  {
    title: "GVK End-to-End Support",
    desc: "Visa, travel, forex, SIM card & pre-departure briefing included",
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════ */

export default function FarEasternFederalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Far Eastern Federal University Fees, Eligibility & Admission Process 2026"
        subtitle="NMC Approved · WHO Recognised · English Medium · Far East's Premier Federal University"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1899 · Vladivostok, Russia
              </p>
              <ColorfulHeading
                text="Far Eastern Federal University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Far Eastern Federal University (FEFU) is the largest and
                leading higher education institution in the Russian Far East,
                located in Vladivostok on a stunning purpose-built campus on
                Russky Island. Established in 1899 as the Eastern Institute,
                FEFU is one of Russia&apos;s oldest universities and a flagship
                federal university with the highest national research status.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Recognised by the{" "}
                <strong className="text-foreground">
                  National Medical Commission (NMC)
                </strong>
                , WHO and listed in WDOMS, FEFU is a top destination for Indian
                students seeking a world-class{" "}
                <Link
                  href="/mbbs/russia"
                  className="text-accent font-semibold hover:underline"
                >
                  MBBS in Russia
                </Link>
                . Its medical graduates are eligible to appear for FMGE / NEXT
                in India and practise medicine across the world.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "NMC Approved",
                  "WHO Listed",
                  "WDOMS Recognised",
                  "English Medium",
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
                  <Link href="/contact">Free Counseling</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=600&auto=format&fit=crop"
                  alt="Far Eastern Federal University campus on Russky Island, Vladivostok, Russia"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">125+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">40,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 50+ countries
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE FEFU ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose FEFU"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From a 125-year academic legacy to a futuristic Russky Island
              campus and Asia-Pacific exposure, Far Eastern Federal University
              is the top choice for Indian medical aspirants seeking global MBBS
              education in the Far East.
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

      {/* ── 3. RECOGNITION (NMC / WHO) ──────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "NMC", sub: "India — National Medical Commission" },
              { label: "WHO", sub: "World Health Organisation Listed" },
              { label: "WDOMS", sub: "World Directory of Medical Schools" },
              { label: "FAIMER", sub: "Foundation for Advancement of Medical Education" },
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

      {/* ── 4. WORLD RANKING ────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Far Eastern Federal University — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the top universities in Russia and the
              Far East, recognised by every major international academic and
              medical body.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rankings.map((item) => (
              <Card
                key={item.label}
                className="border-2 border-accent/20 hover:border-accent/50 transition-colors duration-200"
              >
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-extrabold text-accent mb-1">
                    {item.label}
                  </p>
                  <p className="text-muted-foreground text-sm leading-snug">
                    {item.sub}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MBBS FEES STRUCTURE ──────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="MBBS Fees Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              An NMC approved federal university in Vladivostok with
              transparent fees — no hidden charges, no capitation fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    FEFU — Tuition Fee Breakdown
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
                          $6,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹5,52,500
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
                          $6,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹5,10,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $30,500
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹25,92,500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Far Eastern
                    Federal University fees are subject to revision by the
                    university.
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
                  sub: "On-campus shared room",
                  usd: "$900",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily veg / non-veg meals",
                  usd: "$1,500",
                },
                {
                  label: "Living Expenses",
                  sub: "Travel, books, personal",
                  usd: "$1,800",
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
                      Tuition + hostel + mess
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$41,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ELIGIBILITY CRITERIA ─────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria for Indian Students"
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
                desc: "12th standard with min. 50% in Physics, Chemistry & Biology (40% for SC/ST/OBC)",
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

      {/* ── 7. ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="FEFU Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward six-step journey from your application to your
              first day at Far Eastern Federal University, Vladivostok.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
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

      {/* ── 8. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for FEFU Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech will
              guide you through attestation, translation and submission.
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

      {/* ── 9. HOSTEL FACILITIES ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="FEFU Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Far Eastern Federal University&apos;s on-campus hostels on
                Russky Island are safe, comfortable and built with
                international students in mind — from dedicated Indian mess
                options to 24/7 campus security and high-speed WiFi in one of
                the most scenic university locations in the world.
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
                  alt="FEFU hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="FEFU hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN RUSSIA ───────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Vladivostok cityscape in Russia"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&auto=format&fit=crop"
                  alt="Vladivostok landmarks and culture"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Vladivostok, Russia
              </p>
              <ColorfulHeading
                text="Student Life in Russia"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Vladivostok is Russia&apos;s largest Pacific port city — a
                vibrant, cosmopolitan hub that blends European and Asian
                cultures. Set on the scenic Golden Horn Bay and home to FEFU&apos;s
                futuristic Russky Island campus, it offers Indian medical
                students an unmatched mix of academic excellence, safety and
                cross-cultural exposure.
              </p>
              <ul className="space-y-3">
                {[
                  "Russia's main Pacific port city with modern infrastructure",
                  "Rich cultural life — museums, theatres, and an active student community",
                  "Direct connectivity to major Asian capitals and Moscow",
                  "Indian grocery stores, restaurants and cultural groups across the city",
                  "Active Indian student association with annual festivals and events",
                  "Scenic Russky Island campus connected by the iconic Golden Bridge",
                  "Safe, friendly urban environment with a growing international population",
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

      {/* ── 11. ADVANTAGES ───────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying MBBS at FEFU"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((adv, i) => (
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

      {/* ── 12. FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about Far Eastern Federal
              University and MBBS in Russia.
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

      {/* ── APPLY NOW CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your MBBS Journey at Far Eastern Federal University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech&apos;s expert counselors will guide you through the entire
            admission process — from application and visa to your first day at
            FEFU, Vladivostok.
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

      {/* ── INTERNAL LINKS FOOTER ───────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/mbbs/russia", label: "MBBS in Russia" },
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
