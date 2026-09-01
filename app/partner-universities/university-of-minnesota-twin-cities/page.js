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
  Briefcase,
  MapPin,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is University of Minnesota Twin Cities accredited?",
    answer:
      "Yes, the University of Minnesota is accredited by the Higher Learning Commission (HLC) and holds numerous program-specific accreditations including ABET, AACSB, CCNE, and more.",
  },
  {
    question: "What is the acceptance rate for international graduate students?",
    answer:
      "Graduate acceptance rates vary by program but typically range from 15-35% for competitive programs. The university evaluates applications holistically.",
  },
  {
    question: "Is GRE required for admission?",
    answer:
      "GRE requirements vary by program. Many STEM programs require GRE, while some professional programs may waive it based on work experience or GPA. Check your specific program requirements.",
  },
  {
    question: "What are the English language requirements?",
    answer:
      "Minimum TOEFL iBT 79, IELTS 6.5, or Duolingo 110. Some programs may have higher requirements. Students from English-medium institutions may qualify for waivers.",
  },
  {
    question: "Can international students work while studying?",
    answer:
      "Yes, F-1 visa holders can work up to 20 hours/week on-campus during semesters and full-time during breaks. CPT and OPT are available for off-campus work related to your field of study.",
  },
  {
    question: "What is the estimated cost of attendance for international students?",
    answer:
      "Estimated annual cost: $35,000–$55,000 including tuition ($28,000–$45,000), living expenses ($15,000–$20,000), health insurance ($2,500), and books/supplies ($1,000–$2,000).",
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Yes, the university offers merit-based scholarships, departmental fellowships, and graduate assistantships (TA/RA positions) that provide tuition waivers and stipends.",
  },
  {
    question: "What is the career outcome for international graduates?",
    answer:
      "90%+ placement rate within 6 months. Strong industry connections in healthcare, tech, engineering, and business. STEM OPT allows 3 years of work authorization in the US.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Choose Your Program",
    desc: "Explore 150+ graduate programs and identify your best fit",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Check Requirements",
    desc: "Review program-specific prerequisites, deadlines, and test requirements",
    icon: FileText,
  },
  {
    step: 3,
    title: "Prepare Application",
    desc: "Gather transcripts, test scores, letters of recommendation, and statement of purpose",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Submit Online",
    desc: "Apply via the Graduate School portal with $95 application fee",
    icon: ArrowRight,
  },
  {
    step: 5,
    title: "Receive Decision",
    desc: "Decisions released on rolling basis — typically 6–10 weeks after deadline",
    icon: Award,
  },
  {
    step: 6,
    title: "Secure Visa & Enroll",
    desc: "Receive I-20, apply for F-1 visa, and complete pre-arrival requirements",
    icon: Globe,
  },
];

const documents = [
  "Completed online application + $95 fee",
  "Official transcripts (all institutions)",
  "Degree certificates / provisional certificates",
  "GRE / GMAT scores (if required by program)",
  "English proficiency scores (TOEFL/IELTS/Duolingo)",
  "Statement of Purpose (500–1000 words)",
  "3 Letters of Recommendation",
  "Current CV / Resume",
  "Passport copy (bio page)",
  "Financial documentation (bank statements)",
  "Program-specific requirements (portfolio, writing sample, etc.)",
];

const campusFeatures = [
  { icon: Home, label: "On-campus graduate housing available" },
  { icon: Users, label: "400+ student organizations" },
  { icon: Utensils, label: "Diverse dining options including halal, vegetarian, vegan" },
  { icon: Wifi, label: "High-speed WiFi across campus" },
  { icon: ShieldCheck, label: "24/7 campus security & Safe Walk program" },
  { icon: Clock, label: "Recreation centers, libraries, health services" },
];

const whyChoose = [
  {
    title: "Top 25 Public University",
    desc: "Consistently ranked among the best public universities in the US (US News #26 National, #6 Public)",
    icon: Award,
  },
  {
    title: "Research Powerhouse",
    desc: "$1B+ annual research expenditure — 8th highest among US public universities",
    icon: Star,
  },
  {
    title: "STEM Leader",
    desc: "Top-ranked programs in Engineering, CS, Data Science, Health Sciences, and Business",
    icon: Globe,
  },
  {
    title: "Industry Connections",
    desc: "Partnerships with 3M, Medtronic, Target, Best Buy, UnitedHealth, and 500+ employers",
    icon: Briefcase,
  },
  {
    title: "Twin Cities Advantage",
    desc: "Minneapolis-St. Paul: #1 metro for Fortune 500 HQs per capita, vibrant culture, affordable living",
    icon: MapPin,
  },
  {
    title: "Strong ROI",
    desc: "High starting salaries, 3-year STEM OPT, alumni network of 500,000+ worldwide",
    icon: DollarSign,
  },
  {
    title: "International Support",
    desc: "ISSS office, 6,000+ international students, cultural centers, dedicated career services",
    icon: Users,
  },
  {
    title: "GVK EduTech Guidance",
    desc: "End-to-end application, visa, scholarship & pre-departure support",
    icon: ShieldCheck,
  },
];

export default function UniversityOfMinnesotaTwinCitiesPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Minnesota Twin Cities — Masters 2026"
        subtitle="Top 25 Public University · $1B Research · STEM Leader · 3-Year STEM OPT"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1721304743409-9195d8e8b5fc?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              {/* Eyebrow */}
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1851 · Minneapolis-St. Paul, Minnesota, USA
              </p>
              <ColorfulHeading
                text="University of Minnesota Twin Cities"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                A world-class public research university and flagship campus of the University
                of Minnesota system. With 19 colleges and schools offering 150+ graduate programs,
                UMN combines Ivy League-caliber academics with Big Ten campus life — all in the
                thriving Twin Cities metropolitan area.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                As a <strong className="text-foreground">Top 25 public university</strong> with
                <strong className="text-foreground">$1B+ annual research funding</strong>, UMN
                offers Indian students unparalleled opportunities in STEM, business, healthcare,
                and policy — plus 3 years of STEM OPT work authorization in the USA.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["HLC Accredited", "AAU Member", "#6 Public Research", "Big Ten Academic Alliance"].map(
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
              {/* Stacked image with stat overlay */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1721304743409-9195d8e8b5fc?w=600&auto=format&fit=crop"
                  alt="University of Minnesota Twin Cities campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">170+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">6,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    International students
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RANKING & RECOGNITION BAND ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { label: "#26", sub: "National Universities (US News 2024)" },
              { label: "#6", sub: "Top Public Universities (US News 2024)" },
              { label: "#8", sub: "Public Research Spending ($1.04B)" },
              { label: "AAU", sub: "Association of American Universities Member" },
              { label: "3 yr", sub: "STEM OPT Work Authorization" },
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
              text="Why Indian Students Choose UMN Twin Cities"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From research excellence to career outcomes in the Twin Cities hub — UMN delivers
              exceptional value for your graduate education investment.
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

      {/* ── POPULAR MASTERS PROGRAMS ─────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Masters Programs for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              150+ graduate programs across 19 colleges — here are the most sought-after by Indian applicants
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Engineering & CS */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Top-Ranked Programs & Estimated Annual Tuition (2025–26)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Program
                        </th>
                        <th className="text-center px-6 py-3 font-semibold text-foreground">
                          US News Rank
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          Tuition (Intl.)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MS Computer Science</td>
                        <td className="px-6 py-4 text-center font-semibold text-accent">#19</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">$34,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MS Data Science</td>
                        <td className="px-6 py-4 text-center font-semibold text-accent">#12</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">$32,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MS Electrical & Computer Engg</td>
                        <td className="px-6 py-4 text-center font-semibold text-accent">#14</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">$33,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MS Mechanical Engineering</td>
                        <td className="px-6 py-4 text-center font-semibold text-accent">#16</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">$33,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MS Biomedical Engineering</td>
                        <td className="px-6 py-4 text-center font-semibold text-accent">#8</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">$34,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MBA (Carlson School)</td>
                        <td className="px-6 py-4 text-center font-semibold text-accent">#31</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">$45,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MPH Public Health</td>
                        <td className="px-6 py-4 text-center font-semibold text-accent">#11</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">$28,000</td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">MS Business Analytics</td>
                        <td className="px-6 py-4 text-center font-bold text-accent">#15</td>
                        <td className="px-6 py-4 text-right font-bold text-accent">$38,000</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Tuition estimates for 2025–26 academic year. Fees vary by credits & program. Check specific program pages for exact amounts.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Living cost cards */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Cost of Living (Twin Cities)
              </p>
              {[
                {
                  label: "Housing (Shared)",
                  sub: "On/off campus apartment",
                  usd: "$10,000–$14,000",
                },
                {
                  label: "Food & Groceries",
                  sub: "Cooking + occasional dining",
                  usd: "$4,000–$6,000",
                },
                {
                  label: "Transport & Misc",
                  sub: "Metro Transit, personal, insurance",
                  usd: "$4,000–$6,000",
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
                      Total Annual Estimate
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + Living (varies by program)
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">$45K–$65K</p>
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
              text="Admission Requirements"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive but transparent — requirements vary by program, here's the general baseline
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Background",
                desc: "4-year bachelor's degree (or 3-year + 1-year masters) from recognized university, min 3.0/4.0 GPA",
              },
              {
                title: "Standardized Tests",
                desc: "GRE required for most STEM programs; GMAT for MBA; waivers possible for strong profiles",
              },
              {
                title: "English Proficiency",
                desc: "TOEFL iBT 79+, IELTS 6.5+, Duolingo 110+ (higher for some programs)",
              },
              {
                title: "Application Package",
                desc: "SOP, 3 LORs, CV, transcripts, test scores, $95 fee — all submitted online",
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
              text="Application Timeline & Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A structured six-step journey from program selection to your first semester at UMN
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

          {/* Deadlines note */}
          <div className="mt-12 p-6 bg-amber/10 border border-amber/30 rounded-2xl">
            <p className="font-semibold text-amber mb-2">⏰ Key Deadlines for Fall 2026</p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div><strong>Priority Deadline:</strong> Dec 1, 2025 (most programs)</div>
              <div><strong>Regular Deadline:</strong> Jan 15 – Mar 1, 2026 (varies)</div>
              <div><strong>Rolling:</strong> Some programs until May 2026</div>
            </div>
          </div>

          <div className="text-center mt-8">
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
              text="Required Documents Checklist"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Prepare these documents early — GVK EduTech helps you compile & verify everything
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

      {/* ── CAMPUS LIFE ─────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life at UMN
              </p>
              <ColorfulHeading
                text="Campus Facilities & Student Life"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Twin Cities campus spans both Minneapolis and St. Paul — offering urban
                energy, lakes, parks, and a vibrant arts scene. 50,000+ students create a
                diverse, inclusive community with endless opportunities.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {campusFeatures.map((f, i) => {
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
                  src="https://images.unsplash.com/photo-1721304743409-9195d8e8b5fc?w=400&auto=format&fit=crop"
                  alt="UMN campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&auto=format&fit=crop"
                  alt="Minneapolis skyline"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TWIN CITIES ADVANTAGE ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=400&auto=format&fit=crop"
                  alt="Minneapolis downtown"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&auto=format&fit=crop"
                  alt="Minnesota lakes"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                The Twin Cities Advantage
              </p>
              <ColorfulHeading
                text="Minneapolis-St. Paul: Career & Lifestyle Hub"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Twin Cities metro (3.7M population) offers the perfect blend of professional
                opportunity and quality of life — consistently ranked among the best US cities
                for young professionals.
              </p>
              <ul className="space-y-3">
                {[
                  "#1 US metro for Fortune 500 HQs per capita (17 companies)",
                  "Medtrronic, 3M, Target, Best Buy, UnitedHealth, US Bank, General Mills HQ",
                  "Thriving tech scene: AWS, Google, Microsoft, Oracle offices + startups",
                  "World-class healthcare: Mayo Clinic, University of Minnesota Medical Center",
                  "10,000+ lakes, extensive bike trails, 4 distinct seasons",
                  "Lower cost of living vs. Bay Area, NYC, Boston, Seattle",
                  "Direct flights to India via Chicago, NYC, Doha, Dubai hubs",
                  "Strong Indian community: temples, groceries, cultural associations",
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
              text="Advantages of Studying at University of Minnesota"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Public Ivy Quality",
                desc: "Ivy League-level education at public university tuition",
              },
              {
                title: "Research Opportunities",
                desc: "Work with world-class faculty on $1B+ funded projects",
              },
              {
                title: "STEM OPT Eligible",
                desc: "3 years post-graduation work authorization in USA",
              },
              {
                title: "Career Services",
                desc: "Dedicated international career coaches, 500+ employer events/year",
              },
              {
                title: "Assistantships (TA/RA)",
                desc: "Tuition waiver + stipend for qualified graduate students",
              },
              {
                title: "Alumni Network",
                desc: "500,000+ alumni worldwide, strong India chapter",
              },
              {
                title: "Health & Wellness",
                desc: "Boynton Health (on-campus), counseling, recreation centers",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end application, visa & pre-departure guidance",
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
            Fall 2026 Applications Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters Journey at University of Minnesota
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through program selection, application
            strategy, scholarships, visa — every step to your admit at UMN Twin Cities.
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
              { href: "/mbbs", label: "MBBS Abroad" },
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