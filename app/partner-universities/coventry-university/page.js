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
} from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   COVENTRY UNIVERSITY — CONTENT DATA
══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is Coventry University recognised in India?",
    answer:
      "Yes. Coventry University is a UK government-recognised public university and its degrees are widely accepted in India by the Association of Indian Universities (AIU), leading Indian employers, and global accreditation bodies. A Coventry degree opens doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at Coventry University?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at Coventry University run for 1 year full-time (12 months). Some professional pathways with an industry placement or professional practice year extend to 18–24 months. MPhil / PhD research degrees typically take 3–4 years of full-time study.",
  },
  {
    question: "Does Coventry University require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 5.5–6.0. Higher requirements apply for programs in Education, Law and Healthcare (often IELTS 6.5–7.0). Indian students with strong English-medium academic records may be eligible for a waiver — speak to GVK EduTech for the latest exemptions.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at Coventry University?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 16,000 – 19,000 per year (approximately INR 17–20 lakh) depending on the program. MBA and specialised lab-based programs typically cost around GBP 18,000–22,000. Coventry also offers the GREAT Scholarship, International Scholarship and country-specific awards for Indian students.",
  },
  {
    question: "Can Indian students work part-time while studying at Coventry?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Coventry has a strong part-time job market in retail, hospitality, tutoring, university admin, and on-campus roles, with significantly lower living costs than London.",
  },
  {
    question: "Does Coventry University offer scholarships for Indian students?",
    answer:
      "Yes. Coventry offers multiple scholarships including the GREAT Scholarship, International Merit Scholarship, Global Leaders Scholarship and country-specific awards that recognise Indian academic excellence. Most scholarships range from £1,500 – £5,000 and are awarded either automatically or via a short essay application.",
  },
  {
    question: "How safe is Coventry for international students?",
    answer:
      "Coventry is one of the most diverse, student-friendly and affordable cities in the UK, consistently ranked among the top UK cities for student experience. The university provides 24/7 on-campus security, well-lit walkways, CCTV, dedicated Student Wellbeing services and a large South Asian community that makes Indian students feel at home.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Coventry graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a Master's degree. Coventry University graduates are highly sought after in automotive engineering, business, computing, healthcare, construction and design roles across the UK, Europe and globally.",
  },
  {
    question: "Does GVK EduTech help with Coventry University admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Coventry. We provide end-to-end support — program shortlisting, SOP/LOR guidance, application submission, CAS, visa filing, accommodation and pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Coventry based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the Coventry University portal with SOP & LORs",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your conditional / unconditional offer letter within 2–4 weeks",
    icon: CheckCircle,
  },
  {
    step: 5,
    title: "Pay Deposit & CAS",
    desc: "Pay the tuition deposit and receive your CAS to apply for the UK Student Route visa",
    icon: Globe,
  },
  {
    step: 6,
    title: "Apply for Visa",
    desc: "Our team assists with visa application, financial documentation and interview prep",
    icon: ShieldCheck,
  },
  {
    step: 7,
    title: "Pre-Departure Briefing",
    desc: "Attend GVK EduTech's pre-departure session and fly to the UK",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (minimum 6 months validity beyond course end)",
  "Bachelor's Degree Certificate & Transcripts",
  "10th & 12th Mark Sheets",
  "IELTS / TOEFL / PTE Score Card",
  "Statement of Purpose (SOP)",
  "2 Letters of Recommendation (LORs)",
  "Updated Resume / CV",
  "Work Experience Certificates (if applicable)",
  "Passport Size Photographs",
  "Proof of Funds / Bank Statement (last 6 months)",
  "CAS (Confirmation of Acceptance for Studies) from Coventry",
  "TB Test Report (if required by UKVI)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus en-suite & studio halls of residence" },
  { icon: Users, label: "Single gender, mixed and quiet-floor options" },
  { icon: Utensils, label: "Self-catered and catered meal plan options" },
  { icon: Wifi, label: "High-speed WiFi and utilities included" },
  { icon: ShieldCheck, label: "24/7 security, CCTV and secure door entry" },
  { icon: Clock, label: "On-site laundry, study lounges and social spaces" },
];

const whyChoose = [
  {
    title: "180+ Years of Educational Heritage",
    desc: "Tracing its roots back to 1843, Coventry University was granted university status in 1992 and is today one of the largest and fastest-rising universities in the UK",
    icon: Star,
  },
  {
    title: "Award-Winning Teaching",
    desc: "Winner of Times Higher Education University of the Year 2015 and consistently ranked Top 15 in the UK for teaching quality (Guardian University Guide)",
    icon: Award,
  },
  {
    title: "Affordable UK City",
    desc: "Located in Coventry — significantly cheaper than London for tuition, rent and living while offering the same Russell-tier career opportunities",
    icon: PoundSterling,
  },
  {
    title: "Strong Industry Links",
    desc: "Industry placements with Jaguar Land Rover, Aston Martin, NHS, IBM, Deloitte and more — built directly into many Master's programs",
    icon: Briefcase,
  },
  {
    title: "Globally Connected Campus",
    desc: "38,000+ students from 150+ countries create a truly international, multicultural learning environment",
    icon: Globe,
  },
  {
    title: "High Graduate Employability",
    desc: "95%+ of Coventry graduates are in work or further study within 6 months of graduation (DLHE)",
    icon: TrendingUp,
  },
  {
    title: "Modern Campus & Facilities",
    desc: "Award-winning £250M+ campus with cutting-edge engineering, computing, healthcare and design labs, library and student hub",
    icon: Building2,
  },
  {
    title: "Career-Ready Pathways",
    desc: "Dedicated careers team, employer mentoring, on-campus recruitment fairs and 2-year Graduate Route visa for Master's graduates",
    icon: MapPin,
  },
];

const rankings = [
  { label: "Top 15", sub: "Guardian UK University Guide 2024" },
  { label: "Top 600", sub: "QS World University Rankings 2025" },
  { label: "Uni of Year", sub: "Times Higher Education Award" },
  { label: "180+ Years", sub: "of Educational Legacy" },
];

const advantages = [
  {
    title: "Affordable UK Tuition",
    desc: "Lower fees than most Russell Group universities with the same global recognition and career outcomes",
  },
  {
    title: "Placement Year Options",
    desc: "Many Master's programs offer paid industry placements of 6–12 months with leading UK employers",
  },
  {
    title: "Diverse & Welcoming",
    desc: "Multicultural campus with 38,000+ students, large Indian community and active student societies",
  },
  {
    title: "Career Support",
    desc: "Dedicated careers service, CV workshops, mock interviews, employer events and 2-year post-study work visa",
  },
  {
    title: "Industry-Focused Curriculum",
    desc: "Programs co-designed with industry partners — practical, current and aligned to global job market needs",
  },
  {
    title: "Central UK Location",
    desc: "Coventry sits in the heart of England — 1 hr to London, 20 min to Birmingham, excellent rail and road links",
  },
  {
    title: "Modern Learning Spaces",
    desc: "£250M+ investment in award-winning campus buildings, simulation labs, library and student facilities",
  },
  {
    title: "GVK End-to-End Support",
    desc: "Free counselling, application, CAS, visa, accommodation and pre-departure — all under one roof",
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════ */

export default function CoventryUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Coventry University Fees, Eligibility & Admission Process 2026"
        subtitle="Times Higher Education University of the Year · UK Public University · 38,000+ Students"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light" id="overview">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1843 · Coventry, West Midlands, UK
              </p>
              <ColorfulHeading
                text="Coventry University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Coventry University is one of the UK&apos;s largest, most
                modern and fastest-rising public research universities,
                located in the heart of Coventry in the West Midlands. With
                roots dating back to 1843 and university status granted in
                1992, Coventry has built a global reputation for teaching
                excellence, industry-focused programs and outstanding
                graduate employability, making it a top choice for Indian
                students seeking a world-class UK education at an affordable
                cost.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Choose from a wide range of Master&apos;s programs across
                business, computing, engineering, health, law, automotive
                design, architecture and the social sciences. A Coventry
                degree is recognised by employers across the world and
                offers Indian students outstanding career outcomes — backed
                by strong industry links, dedicated placement years and the
                UK&apos;s 2-year Graduate Route work visa after graduation.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Uni of the Year",
                  "Top 15 UK",
                  "38,000+ Students",
                  "150+ Countries",
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
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&fit=crop"
                  alt="Coventry University campus in Coventry, West Midlands, UK"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">38K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 150+ countries
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top 15</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    UK University (Guardian 2024)
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE COVENTRY ──────────────────────────────── */}
      <section className="py-20 section-dark" id="why-choose">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Coventry"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From an award-winning teaching reputation and industry
              placements to a vibrant, affordable UK city campus, Coventry
              University offers everything Indian students need for a
              successful global career.
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

      {/* ── 3. RECOGNITION BAND ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white" id="recognition">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Uni of Year", sub: "Times Higher Education Award" },
              { label: "Top 15", sub: "Guardian UK University Guide 2024" },
              { label: "Top 600", sub: "QS World University Rankings" },
              { label: "QAA", sub: "UK Quality Assurance Agency" },
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
      <section className="py-20 section-light" id="world-ranking">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Coventry University — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the world&apos;s leading modern
              universities — recognised for academic excellence, teaching
              quality, research impact and outstanding graduate
              employability.
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

      {/* ── 5. MASTERS FEES STRUCTURE ───────────────────────────── */}
      <section className="py-20 section-dark" id="masters-fees">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive tuition fees for a top UK public university degree,
              with various scholarship opportunities for outstanding
              international students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Coventry University — Tuition Fee by Faculty
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Faculty
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          GBP/Year
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Business, Management & MBA
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,000 – £19,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17 – ₹20 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Automotive
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,000 – £19,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹18 – ₹21 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Computing, Data Science & AI
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,500 – £19,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17 – ₹20 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Health, Nursing & Life Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,000 – £18,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17 – ₹19 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Architecture, Art & Design
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,000 – £18,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17 – ₹19 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Indicative Range
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £16,000 – £19,500
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹17 – ₹21 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹105 (indicative). Coventry
                    University fees are subject to revision by the university.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Living cost cards */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Monthly Living Costs
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus en-suite room",
                  gbp: "£500 – £700",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catered or meal plan",
                  gbp: "£200 – £300",
                },
                {
                  label: "Travel & Personal",
                  sub: "Bus pass, phone, leisure",
                  gbp: "£150 – £250",
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
                    <p className="text-base font-bold text-accent">
                      {item.gbp}
                    </p>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      Total 1-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + living in Coventry
                    </p>
                  </div>
                  <p className="text-base font-bold text-accent">~£22,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ELIGIBILITY CRITERIA ─────────────────────────────── */}
      <section className="py-20 section-light" id="eligibility">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear, straightforward requirements — designed to welcome
              motivated students from across India.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Bachelor's Degree",
                desc: "Recognised undergraduate degree with 55%+ or equivalent (varies by program — some specialist courses require 60%+)",
              },
              {
                title: "English Language",
                desc: "IELTS Academic 6.0–6.5 overall (min 5.5 in each band) or equivalent; waivers available for English-medium backgrounds",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA applicants (typically 2+ years) — not mandatory for most MSc / MA programs",
              },
              {
                title: "SOP",
                desc: "Strong Statement of Purpose explaining your academic goals, motivations and career plans",
              },
              {
                title: "References",
                desc: "2 academic or professional Letters of Recommendation from professors or employers",
              },
              {
                title: "Portfolio",
                desc: "Required for Architecture, Art & Design programs — showcase of relevant creative work",
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
      <section className="py-20 section-dark" id="admission-process">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="Coventry University Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from your application to
              your first day at Coventry University, UK.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/14*100%+1.25rem)] right-[calc(1/14*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-7 gap-6">
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

      {/* ── 8. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-light" id="required-documents">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Coventry Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these before applying — GVK EduTech will guide you
              through every step of the process.
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

      {/* ── 9. ACCOMMODATION ────────────────────────────────────── */}
      <section className="py-20 section-dark" id="accommodation">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation at Coventry"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Coventry University offers excellent on-campus accommodation
                options to suit every budget — from modern en-suite halls of
                residence at the heart of campus to private rentals across
                the city. Students find safe, comfortable and well-located
                living arrangements in one of the UK&apos;s most affordable,
                diverse and student-friendly cities.
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
                  alt="Coventry University student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="Coventry University modern campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN THE UK ──────────────────────────── */}
      <section className="py-20 section-light" id="student-life">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Coventry city centre"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="UK student life in Coventry"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Coventry, UK
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Coventry is a vibrant, youthful and historic city in the
                heart of England&apos;s West Midlands — home to over 360,000
                people and a thriving student community. Famous for being
                the UK City of Culture 2021, Coventry blends stunning
                medieval heritage with modern regeneration, world-class
                museums, beautiful parks and one of the largest South Asian
                communities in the UK — making it exceptionally welcoming
                for Indian students.
              </p>
              <ul className="space-y-3">
                {[
                  "UK City of Culture 2021 — home to Coventry Cathedral, Herbert Art Gallery and Transport Museum",
                  "One of the most affordable student cities in the UK — significantly cheaper than London for rent, food and travel",
                  "Friendly, compact and walkable city with excellent bus networks and a dedicated student night bus service",
                  "Gateway to the Cotswolds, Stratford-upon-Avon, Warwick Castle and Birmingham — all within 30 minutes",
                  "Large Indian community with restaurants, grocery stores, temples and cultural associations across the city",
                  "Excellent rail links to London (1 hr), Birmingham (20 min), Manchester, Edinburgh and Cardiff",
                  "2-year post-study Graduate Route work visa available for all Master's graduates",
                  "World-class free healthcare (NHS) for all international students from day one",
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
      <section className="py-20 section-dark" id="advantages">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying at Coventry University"
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
      <section className="py-20 section-light" id="faqs">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about Coventry University and
              Master&apos;s programs in the UK.
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
            Begin Your Masters Journey at Coventry University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech&apos;s expert counselors will guide you through the
            entire process — from program selection and application to your
            first day on campus in Coventry.
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
              { href: "/masters/uk", label: "Masters in UK" },
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
