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
   UNIVERSITY OF STIRLING — CONTENT DATA
══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is the University of Stirling recognised in India?",
    answer:
      "Yes. The University of Stirling is a UK government-recognised institution and a member of the Universities Scotland and the Association of Commonwealth Universities. Its degrees are widely accepted by Indian employers, Association of Indian Universities (AIU), and global accreditation bodies — making a Stirling Masters a strong credential for careers in India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at the University of Stirling?",
    answer:
      "Most taught Master's (MSc / MA / MBA) programmes at Stirling run for 1 year full-time (12 months). Several programs include a paid industrial placement or study abroad option that extends the duration to 16–24 months. MPhil / PhD research programmes typically take 3–4 years.",
  },
  {
    question: "Does the University of Stirling require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate taught programmes require an overall IELTS Academic score of 6.5 with no band below 6.0 (some programmes require 7.0). Students from English-medium institutions may be eligible for a waiver. Check with GVK EduTech for programme-specific requirements.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at Stirling?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 17,000 – 22,000 per year (approximately INR 18–24 lakh) depending on the programme. MBA programmes cost around GBP 22,000–25,000. University of Stirling scholarships are available for outstanding international students and can reduce tuition by up to £4,000.",
  },
  {
    question: "Can Indian students work part-time while studying at Stirling?",
    answer:
      "Yes. On a UK Student Route visa, you can work up to 20 hours per week during term time and full-time during holidays. Stirling and the wider central Scotland region — including nearby Edinburgh and Glasgow — offer excellent part-time opportunities in retail, hospitality, research assistance, and on-campus jobs.",
  },
  {
    question: "Does the University of Stirling offer scholarships for Indian students?",
    answer:
      "Yes. The University of Stirling offers the Stirling International Excellence Scholarship, Sports Scholarship, Postgraduate Merit Award, and country-specific awards for Indian students. Most scholarships range from £2,000 – £4,000 — ask GVK EduTech for the latest 2026 scholarship shortlist.",
  },
  {
    question: "How safe is Stirling for international students?",
    answer:
      "Stirling is consistently ranked among the safest cities in the UK. The university has dedicated on-campus security, well-lit pathways, and 24/7 support services. The Students' Union runs safety programmes, and the small, friendly student community makes the city very welcoming for international and Indian students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Stirling graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a Master's degree (3 years after a PhD). University of Stirling graduates are highly sought after in sports science, business, data science, education, nursing, and healthcare sectors globally.",
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
    desc: "Shortlist the right MSc / MA / MBA at Stirling based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Stirling portal with SOP & LORs",
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
    desc: "Secure your seat by paying the tuition deposit and meeting conditions",
    icon: PoundSterling,
  },
  {
    step: 6,
    title: "Apply for Visa",
    desc: "We assist with CAS, UK Student Route visa, and financial documentation",
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
  "Valid Passport (min. 12 months validity)",
  "Bachelor's Degree Certificate & Transcripts",
  "English Language Test Score (IELTS / TOEFL / PTE)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2–3)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds)",
  "Visa Application Form",
  "Offer Letter (University of Stirling)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus halls & self-catered flats" },
  { icon: Users, label: "Modern en-suite rooms (single & shared)" },
  { icon: Utensils, label: "Self-catering kitchens & food courts" },
  { icon: Wifi, label: "High-speed WiFi across campus" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

const whyChoose = [
  {
    title: "Scotland's University for Sporting Excellence",
    desc: "Official Scotland's University for Sporting Excellence — world leader in Sports Science",
    icon: Award,
  },
  {
    title: "Top 500 Global University",
    desc: "Ranked among the top 500 universities worldwide by QS and Times Higher Education",
    icon: TrendingUp,
  },
  {
    title: "Award-Winning Campus",
    desc: "Voted UK's Best Campus University multiple times — set on a 330-acre loch-side estate",
    icon: Star,
  },
  {
    title: "Central Scotland Location",
    desc: "Just 30 minutes from Edinburgh and Glasgow — easy access to two of the UK's best cities",
    icon: MapPin,
  },
  {
    title: "Strong Industry Placements",
    desc: "Paid placement year options with leading UK and global employers across most faculties",
    icon: Briefcase,
  },
  {
    title: "Diverse Community",
    desc: "Join 17,000+ students from 100+ countries across the world",
    icon: Users,
  },
  {
    title: "Post-Study Work Visa",
    desc: "Eligible for the 2-year UK Graduate Route visa after graduation",
    icon: Globe,
  },
  {
    title: "Global Alumni Network",
    desc: "Connect with 100,000+ Stirling graduates across 160+ countries",
    icon: Building2,
  },
];

const rankings = [
  { label: "#481", sub: "QS World University Rankings 2026" },
  { label: "Top 350", sub: "Times Higher Education World Rankings" },
  { label: "Top 50", sub: "Sports Science — Global Subject Leader" },
  { label: "TEF", sub: "Silver — Teaching Excellence Framework" },
];

const advantages = [
  {
    title: "Global Recognition",
    desc: "Degree valued by employers worldwide and recognised in India by AIU",
  },
  {
    title: "Research-Led Teaching",
    desc: "Learn from world-leading researchers and industry practitioners",
  },
  {
    title: "Career Services",
    desc: "Dedicated support for internships and job placement",
  },
  {
    title: "Alumni Network",
    desc: "Connect with 100,000+ successful graduates globally",
  },
  {
    title: "Industry Placements",
    desc: "Paid industrial placement year options across most Master's programmes",
  },
  {
    title: "Affordable Tuition",
    desc: "Lower fees than most London & Russell Group universities — high value UK Masters",
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa — work in the UK after graduation",
  },
  {
    title: "GVK Support",
    desc: "End-to-end admission, SOP/LOR guidance and visa help",
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════ */

export default function UniversityOfStirlingPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Stirling Fees, Eligibility & Admission Process 2026"
        subtitle="Scotland's University for Sporting Excellence · Top 500 Global · Award-Winning Campus"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1591123720164-6c1b8af4c8d8?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1967 · Stirling, Scotland, United Kingdom
              </p>
              <ColorfulHeading
                text="University of Stirling"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Stirling is one of the UK's leading modern
                universities, located in central Scotland and named{" "}
                <strong className="text-foreground">Scotland's University for
                Sporting Excellence</strong>. Ranked among the world's top 500
                universities and consistently voted the UK's best campus
                university, Stirling offers Indian students an outstanding UK
                education at a far more affordable cost than most London
                institutions — making it a top destination to{" "}
                <Link
                  href="/masters/uk"
                  className="text-accent font-semibold hover:underline"
                >
                  study Masters in the UK
                </Link>
                .
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With 17,000+ students from 100+ countries, a 100,000-strong
                global alumni network, and world-leading programmes in Sports
                Science, Nursing, Education, Business, Psychology and Data
                Science, a Stirling degree opens doors to rewarding careers
                across the UK, India and worldwide.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Top 500 World",
                  "Scotland's Sports Uni",
                  "Award-Winning Campus",
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
                  src="https://images.unsplash.com/photo-1591123720164-6c1b8af4c8d8?w=600&auto=format&fit=crop"
                  alt="University of Stirling campus in Scotland, United Kingdom"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">55+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">17K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 100+ countries
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
              { label: "#481", sub: "QS World Ranking 2026" },
              { label: "Russell", sub: "Scotland's Sports University" },
              { label: "Athena", sub: "Swan Charter Awards" },
              { label: "TEF", sub: "Silver Teaching Excellence" },
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

      {/* ── 3. WHY CHOOSE STIRLING ────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Stirling"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From a globally top-ranked Sports Science department to a
              stunning loch-side campus just 30 minutes from Edinburgh, Stirling
              offers the perfect launchpad for Indian students pursuing a UK
              Masters degree.
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

      {/* ── 4. WORLD RANKING ────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="University of Stirling — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the top universities in the UK and
              Scotland across all major ranking bodies.
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

      {/* ── 5. MASTERS FEE STRUCTURE ────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive tuition fees for a world-class UK education with
              multiple scholarship opportunities for Indian students.
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
                          GBP / Year
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
                          £18,000 – £22,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹19 – ₹24 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Sports Science & Health
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,000 – £21,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹18 – ₹22 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Computer Science & Data Analytics
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £19,000 – £22,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹20 – ₹24 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Education & Social Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,500 – £19,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17 – ₹21 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Nursing & Health Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,500 – £20,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹18 – ₹22 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          MBA
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £22,000 – £25,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹23 – ₹27 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹108 (indicative). University of
                    Stirling fees are subject to revision by the university.
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
                  sub: "On-campus & private",
                  gbp: "£5,500 – £9,000",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catering options",
                  gbp: "£2,400 – £3,600",
                },
                {
                  label: "Transport & Personal",
                  sub: "Student discounts available",
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
                      Tuition + living (approx.)
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">£26K – £42K</p>
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
              Clear requirements — meet these to secure your place at the
              University of Stirling.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 55%+ or equivalent (varies by programme; some require 60%+). Indian degrees from recognised universities are accepted.",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (min 6.0 in each band) or equivalent; waivers available for English-medium degrees from Indian universities",
              },
              {
                title: "SOP",
                desc: "Strong Statement of Purpose explaining your goals, motivation and why Stirling",
              },
              {
                title: "References",
                desc: "2 academic / professional letters of recommendation",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA applicants (typically 2+ years); optional but valued for most other programmes",
              },
              {
                title: "Passport & Funds",
                desc: "Valid Indian passport and proof of funds (tuition + living costs) for the UK Student Route visa",
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

      {/* ── 7. ADMISSION PROCESS (7 STEPS) ──────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="University of Stirling Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from counselling to your
              first day at Stirling, Scotland.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
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

      {/* ── 8. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Stirling Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech will
              guide you through every step of attestation and submission.
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
      <section className="py-20 section-dark">
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
                The University of Stirling offers excellent on-campus halls and
                a wide range of private rentals in and around the city. Whether
                you choose catered or self-catered, you'll find safe, modern,
                and comfortable living arrangements designed with international
                students in mind — at a significantly lower cost than most UK
                universities.
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
                  alt="Student accommodation at University of Stirling"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="University of Stirling campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN THE UK ────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&auto=format&fit=crop"
                  alt="Stirling, Scotland"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="UK city waterfront"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Stirling, Scotland
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Stirling is a historic university city in central Scotland —
                home to Stirling Castle, the Wallace Monument, and just 30
                minutes from both Edinburgh and Glasgow. As a Stirling student,
                you'll enjoy the safety and beauty of a small city with easy
                access to two of the UK's best cultural, financial and
                employment hubs.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the safest and most affordable student cities in the UK",
                  "Just 30 minutes by train to Edinburgh and Glasgow",
                  "Stunning loch-side campus with gym, sports facilities and student union",
                  "Large Indian student community and growing South Asian food scene",
                  "Direct flights from India to Edinburgh and Glasgow",
                  "2-year Graduate Route post-study work visa",
                  "Free NHS healthcare for international students",
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
              text="Advantages of Studying at the University of Stirling"
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
              Everything Indian students ask about the University of Stirling
              and Masters in the UK.
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
            Begin Your Masters Journey at the University of Stirling, Scotland
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert UK counselors will guide you through every
            step — from shortlisting a program and SOP/LOR drafting to CAS,
            visa filing, and pre-departure orientation.
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
