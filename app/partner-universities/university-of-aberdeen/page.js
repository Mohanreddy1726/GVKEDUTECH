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
  PoundSterling,
  Award,
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
  FlaskConical,
  HeartPulse,
  Anchor,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════════════
   UNIVERSITY OF ABERDEEN — CONTENT DATA
════════════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is the University of Aberdeen recognised in India?",
    answer:
      "Yes. The University of Aberdeen is one of the oldest English-speaking universities in the world (founded 1495) and its degrees are widely recognised in India. Aberdeen qualifications are valued by the Association of Indian Universities (AIU), Indian employers and all major global accreditation bodies — opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at the University of Aberdeen?",
    answer:
      "Most taught Master's (MSc / MA / MPH / MRes / LLM) programs at Aberdeen run for 1 year full-time (12 months). Some professional pathways such as the MPH and certain research degrees can take 12–24 months. MPhil / PhD programs typically take 3–4 years of full-time study.",
  },
  {
    question: "Does the University of Aberdeen require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0. Higher requirements apply for programs in Nursing, Life Sciences, Medicine and related subjects (often IELTS 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific program.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Aberdeen?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 18,000 – 25,000 per year (approximately INR 19–21 lakh) depending on the program. Energy, oil & gas and engineering programs typically sit at the higher end. Aberdeen offers a range of scholarships and the 'Aberdeen Global Scholarship' for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at Aberdeen?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Aberdeen — Europe's energy capital — offers strong part-time opportunities in retail, hospitality, tutoring, research assistance and university admin roles, especially in oil, gas and renewables.",
  },
  {
    question: "Does the University of Aberdeen offer scholarships for Indian students?",
    answer:
      "Yes. Aberdeen offers multiple scholarships including the Aberdeen Global Scholarship, the Vice-Principal's Scholarship, and country-specific awards for high-performing Indian postgraduate students. Most scholarships range from £3,000 – £8,000 and are awarded either automatically or via a short essay-based application.",
  },
  {
    question: "How safe is Aberdeen for international students?",
    answer:
      "Aberdeen is regularly ranked among the safest and most affordable student cities in the UK. The university provides 24/7 on-campus security, well-lit walkways, CCTV and a dedicated Student Wellbeing service. The friendly local community and growing international population make Aberdeen an exceptionally welcoming city for Indian students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Aberdeen graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. Aberdeen graduates are highly sought after in energy, oil & gas, life sciences, biomedical research, computing, business, law and public-sector roles across the UK and globally.",
  },
  {
    question: "What is the University of Aberdeen best known for?",
    answer:
      "The University of Aberdeen is renowned for energy and petroleum engineering, life sciences, biomedical sciences, medicine, divinity, law, computing and business. It is consistently ranked in the top 200 universities globally (Times Higher Education) and is home to one of Europe's leading centres for energy studies.",
  },
  {
    question: "Does GVK EduTech help with University of Aberdeen admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including the University of Aberdeen. We provide end-to-end support — program shortlisting, SOP / LOR guidance, application submission, CAS, visa filing and pre-departure orientation.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Free Counselling",
    desc: "Discuss your academic profile with GVK EduTech's UK admissions experts",
    icon: FileText,
  },
  {
    step: 2,
    title: "Choose Your Program",
    desc: "Shortlist the right MSc / MA / MPH / LLM at Aberdeen based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the Aberdeen portal with SOP & LORs",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your offer letter within 2–4 weeks (fast-track options available)",
    icon: CheckCircle,
  },
  {
    step: 5,
    title: "Accept Offer & Pay Deposit",
    desc: "Secure your seat by paying the tuition deposit",
    icon: PoundSterling,
  },
  {
    step: 6,
    title: "Apply for Visa",
    desc: "Our team assists with CAS, visa application and financial documentation",
    icon: Globe,
  },
  {
    step: 7,
    title: "Pre-Departure Briefing",
    desc: "Attend orientation, book flights, and prepare for your UK journey",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (min. 12 months)",
  "Bachelor's Degree Certificate & Mark Sheets",
  "English Language Test Score (IELTS / TOEFL / PTE)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (2–3)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds)",
  "Visa Application Form",
  "Offer Letter (University of Aberdeen)",
];

const accommodationFeatures = [
  { icon: Home, label: "Modern on-campus halls of residence" },
  { icon: Users, label: "En-suite and shared rooms available" },
  { icon: Utensils, label: "Self-catering kitchens & dining options" },
  { icon: Wifi, label: "High-speed WiFi across all residences" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

const whyChoose = [
  {
    title: "530+ Years of Heritage",
    desc: "Founded in 1495 — the 5th oldest university in the English-speaking world",
    icon: TrendingUp,
  },
  {
    title: "Energy Capital of Europe",
    desc: "Located in Aberdeen — the global hub for oil, gas, renewables and energy research",
    icon: Lightbulb,
  },
  {
    title: "World-Leading Life Sciences",
    desc: "Pioneering research in biomedical sciences, nutrition, immunology and medicine",
    icon: FlaskConical,
  },
  {
    title: "Top Medical School",
    desc: "Aberdeen Medical School is consistently ranked among the very best in the UK",
    icon: HeartPulse,
  },
  {
    title: "Strong Industry Links",
    desc: "Direct industry partnerships with BP, Shell, TotalEnergies and NHS Scotland",
    icon: Briefcase,
  },
  {
    title: "Affordable Student City",
    desc: "Lower cost of living compared to London, Edinburgh and other UK cities",
    icon: MapPin,
  },
  {
    title: "Scholarships for Indian Students",
    desc: "Aberdeen Global Scholarship and merit-based awards of up to £8,000",
    icon: Award,
  },
  {
    title: "International Community",
    desc: "Welcoming campus with students from 130+ countries and a strong Indian society",
    icon: Users,
  },
];

const rankings = [
  { label: "Top 200", sub: "Global University (Times Higher Education)" },
  { label: "Top 30", sub: "UK Universities (Complete University Guide 2026)" },
  { label: "Top 10", sub: "UK for Medicine & Health Sciences" },
  { label: "1495", sub: "Year Founded — 530+ Years of Excellence" },
];

const advantages = [
  {
    title: "Globally Respected Degree",
    desc: "5th-oldest English-speaking university — a degree with 530+ years of heritage",
  },
  {
    title: "Energy & Petroleum Hub",
    desc: "Europe's energy capital — direct exposure to oil, gas and renewables industries",
  },
  {
    title: "1-Year Master's",
    desc: "Complete your Master's in just 1 year — cost and time efficient",
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa to work in the UK after graduation",
  },
  {
    title: "Strong Placement Support",
    desc: "Dedicated careers service with strong NHS, energy and industry links",
  },
  {
    title: "Multicultural Environment",
    desc: "Diverse international community from 130+ countries",
  },
  {
    title: "Part-Time Work Allowed",
    desc: "Work up to 20 hours/week during term time in the UK",
  },
  {
    title: "GVK End-to-End Support",
    desc: "Application, visa, travel, and pre-departure assistance included",
  },
];

const programs = [
  {
    category: "Energy, Oil & Gas",
    courses: [
      "MSc Petroleum Engineering",
      "MSc Energy Transition",
      "MSc Oil & Gas Engineering",
      "MSc Subsea Engineering",
      "MSc Renewable Energy Systems",
    ],
  },
  {
    category: "Business & Management",
    courses: [
      "MSc Management",
      "MSc International Business Management",
      "MSc Finance & Investment",
      "MSc Accounting & Finance",
      "MBA",
    ],
  },
  {
    category: "Life Sciences & Health",
    courses: [
      "MSc Biomedical Sciences",
      "MPH Master of Public Health",
      "MSc Human Nutrition",
      "MSc Immunology & Immunotherapy",
      "MSc Molecular Medicine",
    ],
  },
  {
    category: "Computing & Data",
    courses: [
      "MSc Data Science",
      "MSc Artificial Intelligence",
      "MSc Cyber Security",
      "MSc Information Technology",
    ],
  },
  {
    category: "Law & Humanities",
    courses: [
      "LLM Oil & Gas Law",
      "LLM International Commercial Law",
      "MA International Relations",
      "MA History of Art",
    ],
  },
  {
    category: "Engineering & Geosciences",
    courses: [
      "MSc Mechanical Engineering",
      "MSc Civil Engineering",
      "MSc Petroleum Geology",
      "MSc Geophysics",
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════════════════════════════════ */

export default function UniversityOfAberdeenPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Aberdeen Fees, Eligibility & Admission Process 2026"
        subtitle="Founded 1495 · Top 200 Global University · Europe's Energy Capital · Scotland"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1583157320491-1ea8bf0a40ee?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1495 · Aberdeen, Scotland
              </p>
              <ColorfulHeading
                text="University of Aberdeen"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Aberdeen is one of the United Kingdom's
                oldest and most prestigious universities, located in Aberdeen
                — Europe's energy capital. Founded in 1495, Aberdeen is the
                5th oldest university in the English-speaking world and is
                renowned for its{" "}
                <Link
                  href="/masters/uk"
                  className="text-accent font-semibold hover:underline"
                >
                  Master's programs in the UK
                </Link>
                , world-leading energy and life sciences research, and an
                outstanding medical school.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The university is consistently ranked in the top 200 globally
                (Times Higher Education) and is especially well known for
                petroleum engineering, oil & gas, biomedical sciences,
                medicine, divinity, law, computing and business. Aberdeen
                offers excellent value for Indian students seeking a globally
                respected UK degree at an affordable cost in one of Scotland's
                most welcoming coastal cities.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Founded 1495",
                  "Top 200 Global",
                  "Energy Capital Hub",
                  "Medical School Excellence",
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
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop"
                  alt="University of Aberdeen campus, Scotland"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">530+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic heritage
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top 200</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    THE World Ranking
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE ABERDEEN ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose the University of Aberdeen"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From 530 years of academic heritage to one of Europe's most
              dynamic energy hubs, Aberdeen offers Indian students a
              transformative UK education experience.
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

      {/* ── 3. RECOGNITION & ACCREDITATION ──────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "THE", sub: "Top 200 Global University" },
              { label: "AIU", sub: "Recognised by Association of Indian Universities" },
              { label: "GMC", sub: "Accredited Medical School (UK)" },
              { label: "130+", sub: "Countries Represented on Campus" },
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
              text="University of Aberdeen — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the top universities in the UK and
              globally — a research-intensive institution with 530+ years of
              academic heritage and world-class credentials.
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

      {/* ── 5. POPULAR PROGRAMS ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Master's Programs 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Choose from a wide range of industry-relevant postgraduate
              programs at the University of Aberdeen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <Card
                key={i}
                className="border border-border/60 hover:border-accent/40 transition-colors duration-200"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold text-foreground">
                    {prog.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {prog.courses.map((course, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
              Clear, straightforward requirements for postgraduate admission
              at Aberdeen.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 50–55% from a recognised Indian university",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (no band below 6.0) or equivalent — programme specific",
              },
              {
                title: "GMAT / GRE",
                desc: "Required for some business programs — check specific program requirements",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA (typically 2–3 years) — optional for other programs",
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

      {/* ── 7. FEES STRUCTURE ───────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Tuition Fees 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive tuition fees for a 530-year-old UK university in
              Scotland — with scholarships available for Indian students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    University of Aberdeen — Tuition Fee Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Program Type
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          GBP
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MSc / MA (Standard)</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £18,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹19,00,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MSc Lab-Based (e.g. Biomedical)</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £22,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹23,00,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MSc Energy / Oil & Gas</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £25,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹26,00,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Indicative Total
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £18,000–25,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹19–27 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹105 (indicative). Aberdeen fees
                    are subject to revision. Scholarships can reduce the
                    overall cost significantly.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional costs */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Additional Costs
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus (per year)",
                  gbp: "£5,000 - £8,000",
                },
                {
                  label: "Living Expenses",
                  sub: "Food, transport, personal",
                  gbp: "£7,000 - £10,000",
                },
                {
                  label: "Visa & Health Surcharge",
                  sub: "NHS + visa fees",
                  gbp: "£2,500",
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
                    <p className="text-lg font-bold text-accent">{item.gbp}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="University of Aberdeen Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from your application to
              your first day at Aberdeen.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/14*100%+1.25rem)] right-[calc(1/14*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-7 gap-6">
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

      {/* ── 9. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Aberdeen Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech will
              guide you through the process.
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

      {/* ── 10. ACCOMMODATION ───────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="University of Aberdeen Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Aberdeen offers a range of on-campus
                accommodation options to suit different budgets and
                preferences. From modern en-suite rooms to self-catering
                apartments, you'll find comfortable living spaces that foster
                a vibrant student community in the heart of Aberdeen.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {accommodationFeatures.map((f, i) => {
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
                  alt="University of Aberdeen student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Aberdeen campus common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 11. STUDENT LIFE IN ABERDEEN ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&auto=format&fit=crop"
                  alt="Aberdeen city, Scotland"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&auto=format&fit=crop"
                  alt="Aberdeen coastline, Scotland"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Aberdeen, Scotland
              </p>
              <ColorfulHeading
                text="Student Life in Scotland"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Aberdeen is one of Scotland's most vibrant coastal cities —
                safe, friendly and welcoming, with a strong international
                community, beautiful granite architecture, stunning coastlines,
                and easy access to the Scottish Highlands. Students enjoy
                excellent transport links, a high quality of life, and a
                thriving cultural scene.
              </p>
              <ul className="space-y-3">
                {[
                  "Affordable city — lower cost of living than Edinburgh, Glasgow and London",
                  "Easy access to Edinburgh, Glasgow and Inverness by train",
                  "100+ student societies and clubs at the University of Aberdeen",
                  "Excellent sports facilities and an active student union",
                  "Beautiful Scottish coast, castles and Highlands on the doorstep",
                  "Strong Indian community with cultural events, restaurants and temples",
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

      {/* ── 12. ADVANTAGES ───────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying at the University of Aberdeen"
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

      {/* ── 13. FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about the University of Aberdeen
              and studying in the UK.
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
            Begin Your Master's Journey at the University of Aberdeen
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert counsellors will guide you through the entire
            admission process — from application to your first day at Aberdeen,
            Scotland.
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
              { href: "/masters/uk", label: "Study in UK" },
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
