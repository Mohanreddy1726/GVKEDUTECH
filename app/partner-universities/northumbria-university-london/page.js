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
} from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   NORTHUMBRIA UNIVERSITY LONDON — CONTENT DATA
══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is Northumbria University London recognised in India?",
    answer:
      "Yes. Northumbria University is a globally recognised UK public research university. Its degrees are recognised by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies. A Northumbria degree is highly valued in the Indian job market.",
  },
  {
    question: "What is the duration of Master's programs at Northumbria University London?",
    answer:
      "Most taught Master's (MSc / MA / MBA) programs at Northumbria London run for 1 year full-time (12 months). Some programs with placement or professional pathways take 12–18 months. MPhil / PhD programs typically take 3–4 years.",
  },
  {
    question: "Does Northumbria University London require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 5.5 (varies by program). Students from English-medium institutions may be eligible for a waiver. Check with GVK EduTech for program-specific requirements.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at Northumbria University London?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 16,000 – 22,000 per year (approximately INR 14–19 lakh) depending on the program. MBA programs cost around GBP 18,000–22,000. Scholarships are available for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at Northumbria London?",
    answer:
      "Yes. On a UK Student Route visa, you can work up to 20 hours per week during term time and full-time during holidays. London has excellent part-time job opportunities in retail, hospitality, IT, finance, and on-campus positions at Northumbria's City campus.",
  },
  {
    question: "Does Northumbria offer scholarships for Indian students?",
    answer:
      "Yes. Northumbria University offers numerous scholarships including the Vice-Chancellor's Excellence Scholarship, Northumbria Global Scholarship, and country-specific awards for Indian students. Most scholarships range from £2,000 – £5,000.",
  },
  {
    question: "How safe is London for international students?",
    answer:
      "London is one of the most cosmopolitan and student-friendly cities in the world. Northumbria's London campus has dedicated on-campus security, 24/7 support services, and the Students' Union provides safety resources. London has a large, welcoming international community.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Northumbria graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a Master's degree. Northumbria graduates have excellent career prospects in London and across the UK in business, computing, engineering, design and healthcare sectors.",
  },
  {
    question: "Does GVK EduTech help with Northumbria University London admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Northumbria. We provide end-to-end support — from program selection, SOP / LOR guidance, application submission, CAS, visa filing to pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Northumbria London based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through Northumbria University portal with SOP & LORs",
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
    desc: "Our team assists with CAS, visa application, and financial documentation",
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
  "English Language Test Score (IELTS/TOEFL/PTE)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2–3)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds)",
  "Visa Application Form",
  "Offer Letter (Northumbria University London)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus & partner accommodation in London" },
  { icon: Users, label: "Modern en-suite rooms (single & shared)" },
  { icon: Utensils, label: "Self-catering kitchens & food courts" },
  { icon: Wifi, label: "High-speed WiFi across campus" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

const whyChoose = [
  {
    title: "Russell Group-Affiliated",
    desc: "Strong research-led teaching and a partner of the prestigious Russell Group of UK universities",
    icon: Award,
  },
  {
    title: "London Campus",
    desc: "Study in the heart of London — the world's leading financial, business and cultural hub",
    icon: Building2,
  },
  {
    title: "Affordable Fees",
    desc: "Competitive tuition fees with generous scholarships for international students",
    icon: PoundSterling,
  },
  {
    title: "Industry-Led Teaching",
    desc: "Programs co-designed with employers to ensure job-ready graduates",
    icon: Briefcase,
  },
  {
    title: "Career Support",
    desc: "Dedicated careers service, placement years and strong industry partnerships",
    icon: Star,
  },
  {
    title: "Diverse Community",
    desc: "Join 30,000+ students from 130+ countries across two campuses (Newcastle & London)",
    icon: Users,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa available after graduation in the UK",
    icon: Globe,
  },
  {
    title: "150+ Years Legacy",
    desc: "A long-established UK public university with a proud heritage of academic excellence",
    icon: Award,
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════ */

export default function NorthumbriaUniversityLondonPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Northumbria University London — Masters 2026"
        subtitle="London Campus · Russell Group-Affiliated · Career-Focused Programs"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1872 · London, United Kingdom
              </p>
              <ColorfulHeading
                text="Northumbria University London"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Northumbria University London is the London campus of the
                renowned Northumbria University, a major UK public research
                university with over 150 years of academic heritage. Located in
                the heart of London, the campus offers Indian students a world-class{" "}
                <Link
                  href="/masters/uk"
                  className="text-accent font-semibold hover:underline"
                >
                  Masters in the UK
                </Link>{" "}
                experience in business, computing, design and engineering.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Recognised for industry-led teaching, a TEF Gold rating, and
                strong graduate employability, Northumbria London degrees open
                doors to rewarding career opportunities across the UK, Europe and
                globally.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "TEF Gold",
                  "Russell Group-Affiliated",
                  "London Campus",
                  "High Employability",
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
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop"
                  alt="Northumbria University London campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">150+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic heritage
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">30K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students worldwide
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. RECOGNITION BAND ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "TEF Gold", sub: "Teaching Excellence Framework" },
              { label: "QS #400", sub: "World University Ranking" },
              { label: "Top 50", sub: "UK University Ranking" },
              { label: "96%", sub: "Graduate Employability" },
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

      {/* ── 3. WHY CHOOSE ──────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Northumbria London"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From a central London location to industry-led teaching and
              generous scholarships, Northumbria University London offers
              everything you need for a successful global career.
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

      {/* ── 4. FEES STRUCTURE ──────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive London-based tuition fees with scholarship
              opportunities for international students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee by Faculty
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
                          Business & Management
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,000 – £19,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹16 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Computing & IT
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,500 – £20,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹15 – ₹17 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Technology
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,000 – £19,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹17 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Arts, Design & Media
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,000 – £18,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹15 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          MBA
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £20,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹17 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹85 (indicative)
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
                  label: "Accommodation",
                  sub: "Halls of residence & private",
                  gbp: "£7,000 – £10,000",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catering options",
                  gbp: "£2,500 – £3,500",
                },
                {
                  label: "Transport & Personal",
                  sub: "Student Oyster discounts",
                  gbp: "£1,500 – £2,500",
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
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      Total 1-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Approximate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">£27,000–£35,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ELIGIBILITY CRITERIA ─────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear requirements for Indian students — meet these to secure your
              place at Northumbria London.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 55%+ or equivalent (varies by program; some MBAs may require 2+ years of work experience)",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (min 5.5 in each band) or equivalent; waivers available for English-medium graduates",
              },
              {
                title: "SOP",
                desc: "Statement of Purpose explaining your academic goals and career plans",
              },
              {
                title: "References",
                desc: "2 academic / professional letters of recommendation",
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

      {/* ── 6. ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from application to your
              first day at Northumbria University London.
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

      {/* ── 7. REQUIRED DOCUMENTS ───────────────────────────────── */}
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
              every step.
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

      {/* ── 8. ACCOMMODATION ────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Northumbria University London offers excellent accommodation
                options — both university-managed halls of residence and curated
                partner housing. Indian students enjoy safe, modern living
                arrangements in the heart of London, with easy access to campus
                and transport links.
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
                  alt="Northumbria London student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Northumbria London campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 9. STUDENT LIFE IN LONDON ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="London city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="London student life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in London, UK
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                London is the world's leading financial, business and cultural
                capital. As a Northumbria London student, you'll study in the
                heart of the city, surrounded by world-class museums, theatres,
                restaurants and one of the largest Indian communities in the
                world.
              </p>
              <ul className="space-y-3">
                {[
                  "Study in the heart of London — global business and culture hub",
                  "Largest Indian community outside India with restaurants, temples and cultural events",
                  "Excellent transport network — Underground, buses, Overground and National Rail",
                  "Easy weekend travel to Paris, Amsterdam, Edinburgh and beyond",
                  "Direct flights to all major Indian cities from London airports",
                  "Post-study work visa (2 years) for international graduates",
                  "World-class healthcare (NHS) for international students",
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

      {/* ── 10. ADVANTAGES ───────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying at Northumbria London"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "London Location",
                desc: "Study in the heart of one of the world's most exciting cities",
              },
              {
                title: "TEF Gold",
                desc: "Recognised for outstanding teaching quality",
              },
              {
                title: "Industry-Led",
                desc: "Programs designed in consultation with top employers",
              },
              {
                title: "Russell Group-Affiliated",
                desc: "Strong research and teaching partnerships",
              },
              {
                title: "High Employability",
                desc: "96% of graduates in work or further study within 6 months",
              },
              {
                title: "Generous Scholarships",
                desc: "Multiple funding options for Indian students",
              },
              {
                title: "2-Year Graduate Route",
                desc: "Work in the UK for 2 years after your Master's",
              },
              {
                title: "GVK End-to-End Support",
                desc: "Application, CAS, visa and pre-departure help",
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

      {/* ── 11. FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about Northumbria University London
              and studying a Master's in the UK.
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
            Begin Your Masters Journey at Northumbria University London
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert counselors will guide you through the entire
            process — from program selection and application to your first day
            on Northumbria's London campus.
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
