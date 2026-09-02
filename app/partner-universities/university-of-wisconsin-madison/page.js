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
  MapPin,
  Award,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is University of Wisconsin-Madison accredited?",
    answer:
      "Yes, University of Wisconsin-Madison is fully accredited by the Higher Learning Commission (HLC) and holds numerous program-specific accreditations across engineering, business, medicine, law, and other fields.",
  },
  {
    question: "What is the acceptance rate for University of Wisconsin-Madison?",
    answer:
      "University of Wisconsin-Madison has an acceptance rate of approximately 49-53% for undergraduate programs. Graduate program acceptance rates vary significantly by department.",
  },
  {
    question: "Is GRE/GMAT required for admission to University of Wisconsin-Madison?",
    answer:
      "GRE/GMAT requirements vary by program. Many graduate programs have made these tests optional. Check specific department requirements for your intended program.",
  },
  {
    question: "What is the medium of instruction at University of Wisconsin-Madison?",
    answer:
      "The primary medium of instruction is English. International students must demonstrate English proficiency through TOEFL, IELTS, or Duolingo English Test unless they have completed prior education in English.",
  },
  {
    question: "Can international students work while studying at UW-Madison?",
    answer:
      "Yes, F-1 visa students can work on-campus up to 20 hours per week during academic terms and full-time during breaks. Curricular Practical Training (CPT) and Optional Practical Training (OPT) are available for off-campus work related to field of study.",
  },
  {
    question: "What is the estimated cost of attendance at University of Wisconsin-Madison?",
    answer:
      "For international graduate students, estimated annual cost (tuition + living expenses) ranges from $45,000-$65,000 depending on the program. Undergraduate costs are approximately $55,000-$60,000 per year.",
  },
  {
    question: "Does University of Wisconsin-Madison offer scholarships for international students?",
    answer:
      "Yes, UW-Madison offers various merit-based scholarships, departmental fellowships, and assistantships (TA/RA positions) for international graduate students. Undergraduate international scholarships are more limited but available.",
  },
  {
    question: "What are the career prospects after graduating from UW-Madison?",
    answer:
      "UW-Madison has excellent career outcomes with strong industry connections. The university's career services, alumni network, and location in a growing tech/biotech hub provide strong employment opportunities. Many STEM graduates qualify for 3-year OPT extension.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Research Programs",
    desc: "Explore 200+ graduate and professional programs to find your fit",
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
    icon: FileText,
  },
  {
    step: 4,
    title: "Submit Application",
    desc: "Apply via the UW-Madison Graduate School application portal",
    icon: ArrowRight,
  },
  {
    step: 5,
    title: "Receive Decision",
    desc: "Get admission decision and funding offer (if applicable)",
    icon: CheckCircle,
  },
  {
    step: 6,
    title: "Enroll & Prepare",
    desc: "Accept offer, apply for visa, and prepare for arrival in Madison",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport",
  "Official Transcripts (all institutions)",
  "Degree Certificates / Provisional Certificates",
  "English Proficiency Scores (TOEFL/IELTS/Duolingo)",
  "GRE/GMAT Scores (if required by program)",
  "Statement of Purpose / Personal Statement",
  "Letters of Recommendation (2-3)",
  "Resume / CV",
  "Financial Documentation (for I-20)",
  "Passport-size Photographs",
];

const campusFeatures = [
  { icon: Home, label: "Residence halls & university apartments" },
  { icon: Users, label: "300+ student organizations" },
  { icon: Utensils, label: "Diverse dining options including vegetarian/vegan" },
  { icon: Wifi, label: "High-speed campus-wide WiFi" },
  { icon: ShieldCheck, label: "24/7 campus safety & police" },
  { icon: Clock, label: "Recreation centers, libraries, health services" },
];

const whyChoose = [
  {
    title: "Public Ivy Excellence",
    desc: "Consistently ranked among top 15 public universities in the US (US News)",
    icon: Star,
  },
  {
    title: "Research Powerhouse",
    desc: "R1 university with $1.5B+ annual research expenditure — top 5 nationally",
    icon: Award,
  },
  {
    title: "STEM & Innovation Hub",
    desc: "Leader in biotech, engineering, computer science, and data science",
    icon: Globe,
  },
  {
    title: "Strong ROI",
    desc: "High graduate salaries, strong alumni network, excellent career services",
    icon: IndianRupee,
  },
  {
    title: "Vibrant College Town",
    desc: "Madison consistently ranked best college town — lakes, trails, culture",
    icon: MapPin,
  },
  {
    title: "Global Community",
    desc: "8,000+ international students from 130+ countries",
    icon: Users,
  },
  {
    title: "Generous Funding",
    desc: "TA/RA positions, fellowships, and scholarships for qualified students",
    icon: ShieldCheck,
  },
  {
    title: "3-Year OPT for STEM",
    desc: "Extended work authorization for eligible STEM graduates",
    icon: Clock,
  },
];

export default function UniversityOfWisconsinMadisonPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Wisconsin–Madison — Admissions, Fees & Programs 2026"
        subtitle="Top 15 Public University · R1 Research · STEM Leader · 3-Year STEM OPT"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              {/* Eyebrow */}
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1848 · Madison, Wisconsin, USA
              </p>
              <ColorfulHeading
                text="University of Wisconsin–Madison"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Wisconsin–Madison (UW–Madison) is a world-renowned public research university
                and the flagship campus of the University of Wisconsin System. Founded in 1848, it is one of
                America's original "Public Ivy" institutions — offering Ivy League quality education at public
                university value.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                As an <strong className="text-foreground">R1 Doctoral University</strong> with{" "}
                <strong className="text-foreground">$1.5+ billion in annual research spending</strong>, UW–Madison
                leads globally in biotechnology, engineering, computer science, agriculture, and medicine.
                The university's 200+ graduate programs attract top talent from 130+ countries.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "R1 Research University",
                  "Top 15 Public (US News)",
                  "AAU Member",
                  "3-Year STEM OPT",
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
              {/* Stacked image with stat overlay */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop"
                  alt="University of Wisconsin-Madison campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">175+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">$1.5B+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Annual research expenditure
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
              { label: "#13", sub: "Top Public University (US News 2024)" },
              { label: "#46", sub: "National Universities (US News 2024)" },
              { label: "#29", sub: "Global Universities (QS 2024)" },
              { label: "AAU", sub: "Association of American Universities" },
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
              text="Why International Students Choose UW–Madison"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class research to an unbeatable college town experience, UW–Madison delivers.
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

      {/* ── WORLD RANKING ─────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Global Rankings & Recognition"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the world's elite public research universities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              {
                metric: "#13",
                label: "Top Public University",
                sub: "US News & World Report 2024",
              },
              {
                metric: "#46",
                label: "National Universities",
                sub: "US News & World Report 2024",
              },
              {
                metric: "#29",
                label: "Global Universities",
                sub: "QS World Rankings 2024",
              },
            ].map((item) => (
              <Card key={item.label} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-accent mb-1">{item.metric}</p>
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEES ─────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Estimated Cost of Attendance 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Costs vary by program and residency. Figures below are estimates for international students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition & Fees (Annual Estimates)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Program Level
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          Tuition (USD)
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR (approx.)*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Undergraduate (non-resident)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ~$40,600
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ~₹34.5L
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Graduate (non-resident)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ~$25,500–$45,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ~₹21.5L–₹38L
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Professional (Law, Medicine, PharmD)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ~$45,000–$65,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ~₹38L–₹55L
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Mandatory Fees (all)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~$1,500–$2,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~₹1.3L–₹1.7L
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Fees subject to change. Check program page for exact amounts.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Living cost cards */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Expenses (Madison)
              </p>
              {[
                {
                  label: "Housing (on/off campus)",
                  sub: "Shared apartment or dorm",
                  usd: "$10,000–$14,000",
                },
                {
                  label: "Food / Meal Plan",
                  sub: "Groceries or dining halls",
                  usd: "$4,500–$6,500",
                },
                {
                  label: "Health Insurance",
                  sub: "SHIP (student health plan)",
                  usd: "$3,000–$4,000",
                },
                {
                  label: "Books & Personal",
                  sub: "Supplies, transport, misc.",
                  usd: "$3,000–$4,500",
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
                      Total Annual Budget
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + Living (Graduate)
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$45K–$65K</p>
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
              text="Eligibility & Admission Requirements"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Requirements vary by program. Below are general guidelines for graduate admission.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Background",
                desc: "Recognized bachelor's degree (4-year) or equivalent with minimum 3.0/4.0 GPA (varies by program)",
              },
              {
                title: "English Proficiency",
                desc: "TOEFL iBT 90+, IELTS 7.0+, or Duolingo 120+ (some programs require higher scores)",
              },
              {
                title: "Standardized Tests",
                desc: "GRE required for most PhD programs; many Master's programs have made GRE optional",
              },
              {
                title: "Application Package",
                desc: "Transcripts, SOP, 3 letters of recommendation, CV/resume, program-specific requirements",
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
              text="Graduate Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A structured journey from program selection to your first semester in Madison.
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
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Prepare these documents for your graduate application to UW–Madison.
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

      {/* ── CAMPUS LIFE ───────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Campus Experience
              </p>
              <ColorfulHeading
                text="Life at UW–Madison"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Set on an isthmus between two beautiful lakes (Mendota and Monona), Madison offers
                a unique blend of urban energy and outdoor lifestyle. The campus is walkable, bike-friendly,
                and connected to a vibrant downtown with farmers markets, live music, and diverse cuisine.
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
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="UW-Madison campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop"
                  alt="Madison city view"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN MADISON ────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Madison capitol"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop"
                  alt="Lake Monona"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Madison
              </p>
              <ColorfulHeading
                text="Student Life in Wisconsin's Capital"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Madison isn't just a college town — it's a state capital consistently ranked among
                the best places to live in the US. With two lakes, 200+ parks, a thriving food scene,
                and a strong tech/biotech job market, it offers an exceptional quality of life.
              </p>
              <ul className="space-y-3">
                {[
                  "Named #1 Best College Town in America (multiple publications)",
                  "Two lakes (Mendota & Monona) for kayaking, sailing, ice skating",
                  "Extensive bike trails — Platinum Bicycle Friendly Community",
                  "Vibrant Capitol Square farmers market (largest producer-only market)",
                  "Thriving biotech/tech corridor — Epic, Promega, Exact Sciences nearby",
                  "Safe, walkable neighborhoods with strong Indian/Asian communities",
                  "Direct flights from Chicago (ORD) — 45 min; major hub connections",
                  "Four distinct seasons — beautiful autumns, snowy winters, mild summers",
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
              text="Advantages of Studying at UW–Madison"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Public Ivy Quality",
                desc: "Elite education at a fraction of private university cost",
              },
              {
                title: "Research Opportunities",
                desc: "Undergrad & grad research with world-renowned faculty",
              },
              {
                title: "Industry Connections",
                desc: "Strong ties to Epic, Google, Microsoft, biotech firms",
              },
              {
                title: "STEM OPT Extension",
                desc: "3-year work authorization for eligible STEM graduates",
              },
              {
                title: "Global Alumni Network",
                desc: "450,000+ alumni worldwide — Badgers hire Badgers",
              },
              {
                title: "Comprehensive Support",
                desc: "International Student Services, career center, health services",
              },
              {
                title: "Interdisciplinary Culture",
                desc: "Cross-department collaboration encouraged across schools",
              },
              {
                title: "GVK EduTech Guidance",
                desc: "End-to-end application, visa & pre-departure support",
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
                </div></details>
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
            Begin Your Journey at University of Wisconsin–Madison
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through program selection, application strategy,
            and visa preparation for one of America's top public universities.
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
              { href: "/masters/usa", label: "Masters in USA" },
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