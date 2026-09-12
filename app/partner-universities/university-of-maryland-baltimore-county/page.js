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
  DollarSign,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Maryland, Baltimore County (UMBC) accredited?",
    answer:
      "Yes, UMBC is a highly respected public research university and is fully accredited by the Middle States Commission on Higher Education.",
  },
  {
    question: "What is the duration of Masters programs at UMBC?",
    answer:
      "Depending on the specialization, Masters programs at UMBC typically range from 1.5 to 2 years of full-time study.",
  },
  {
    question: "Are there scholarships available for international students?",
    answer:
      "Yes, UMBC offers various merit-based scholarships and financial aid options for qualified international applicants to help cover tuition and living costs.",
  },
  {
    question: "What is the medium of instruction?",
    answer:
      "The medium of instruction is English. International students are required to provide proof of English proficiency via TOEFL, IELTS, or PTE.",
  },
  {
    question: "Does UMBC provide support for international student visas?",
    answer:
      "Yes, the UMBC International Student and Scholar Services (ISSS) office provides comprehensive support for I-20 issuance and F-1 visa applications.",
  },
  {
    question: "What is the estimated total cost of studying at UMBC?",
    answer:
      "The total cost including tuition, health insurance, and living expenses typically ranges from USD 35,000 to 55,000 per year, depending on the program and lifestyle.",
  },
  {
    question: "Is on-campus housing available?",
    answer:
      "Yes, UMBC offers various on-campus housing options for graduate students, though off-campus living in the Baltimore area is also popular.",
  },
  {
    question: "What are the career prospects after graduating from UMBC?",
    answer:
      "UMBC graduates are highly sought after by employers in the US and globally, particularly in fields of technology, science, and public policy, given its proximity to Washington D.C.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Application Submission",
    desc: "Submit your online application along with transcripts, Statement of Purpose, and CV",
    icon: FileText,
  },
  {
    step: 2,
    title: "English Proficiency",
    desc: "Submit valid TOEFL, IELTS, or PTE scores to meet the language requirement",
    icon: Globe,
  },
  {
    step: 3,
    title: "Admission Decision",
    desc: "Receive your official admission offer after a thorough review of your academic profile",
    icon: BookOpen,
  },
  {
    step: 4,
    title: "Financial Verification",
    desc: "Provide proof of funds to obtain the I-20 form for your student visa",
    icon: DollarSign,
  },
  {
    step: 5,
    title: "Visa Interview",
    desc: "Attend your F-1 student visa interview at the US Embassy/Consulate",
    icon: ShieldCheck,
  },
  {
    step: 6,
    title: "Enrollment",
    desc: "Arrive at the Baltimore campus, complete orientation, and begin your studies",
    icon: GraduationCap,
  },
];

const documents = [
  "Official Academic Transcripts (Attested)",
  "Degree Certificate/Provisional Certificate",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (LORs)",
  "Updated Curriculum Vitae (CV)",
  "Valid Passport",
  "English Proficiency Test Scores (TOEFL/IELTS/PTE)",
  "GRE/GMAT Scores (if required by the specific program)",
  "Proof of Financial Support (Bank Statements)",
  "Passport Size Photographs",
  "Valid Visa / I-20 Form",
];

const campusFacilities = [
  { icon: Home, label: "Modern graduate housing options" },
  { icon: Users, label: "Diverse and inclusive international community" },
  { icon: Utensils, label: "Multiple dining halls and food courts on campus" },
  { icon: Wifi, label: "Campus-wide high-speed WiFi and digital libraries" },
  { icon: ShieldCheck, label: "Comprehensive campus security and health services" },
  { icon: Clock, label: "24/7 access to research labs and study spaces" },
];

const whyChoose = [
  {
    title: "Research Powerhouse",
    desc: "A top-ranked research university known for innovation and academic excellence",
    icon: Star,
  },
  {
    title: "Prime Location",
    desc: "Strategically located near Baltimore and Washington D.C. for networking",
    icon: Globe,
  },
  {
    title: "Expert Faculty",
    desc: "Learn from world-class professors and industry leaders in their respective fields",
    icon: GraduationCap,
  },
  {
    title: "Industry Connections",
    desc: "Strong ties with government agencies and Fortune 500 companies",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive Support",
    desc: "Dedicated services for international students from arrival to career placement",
    icon: CheckCircle,
  },
  {
    title: "Inclusive Culture",
    desc: "A vibrant campus that celebrates diversity and academic curiosity",
    icon: Home,
  },
  {
    title: "Advanced Resources",
    desc: "State-of-the-art laboratories and a massive digital resource library",
    icon: BookOpen,
  },
  {
    title: "High ROI",
    desc: "Exceptional educational quality leading to high-paying global careers",
    icon: DollarSign,
  },
];

export default function UMBCPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Maryland, Baltimore County (UMBC) Fees, Eligibility & Admission Process 2026"
        subtitle="Top-Ranked Research University · Global Recognition · US Education · Masters Programs"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8dca27272438?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Academic Excellence · Baltimore, USA
              </p>
              <ColorfulHeading
                text="University of Maryland, Baltimore County"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Maryland, Baltimore County (UMBC) is a premier
                public research university renowned for its commitment to academic
                excellence, research innovation, and student success. UMBC provides
                a transformative educational experience for students worldwide.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Known for its strong focus on <strong className="text-foreground">STEM</strong> and{" "}
                <strong className="text-foreground">Graduate Studies</strong>, UMBC
                is the ideal destination for students seeking a high-impact Masters
                degree in a dynamic, research-driven environment.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Regionally Accredited", "Research-Intensive", "English Medium", "Global Alumni Network"].map(
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
                  src="https://images.unsplash.com/photo-1523050854058-8dca27272438?w=600&auto=format&fit=crop"
                  alt="UMBC campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Elite</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Research Facilities
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    US Public University
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
              { label: "MSCHE", sub: "Middle States Commission Accredited" },
              { label: "USA", sub: "Globally Recognized Degree" },
              { label: "Top 1%", sub: "US Research Institutions" },
              { label: "A+", sub: "Academic Grade" },
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
              text="Why Choose UMBC for Your Masters?"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Combining academic rigor with industry integration, UMBC provides
              the perfect launchpad for a successful global career.
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

      {/* ── FEES ─────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Estimated Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Transparent fee estimations for international graduate students.
              Detailed costs vary by specific program and credit load.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Estimates (Annual)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Category
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
                          Tuition Fee (Average)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $25,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹21,25,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Health Insurance & Student Fees
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $3,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹2,55,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total Academic Cost (Per Year)
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
                  label: "Housing",
                  sub: "On/Off campus options",
                  usd: "$12,000",
                },
                {
                  label: "Meals & Dining",
                  sub: "Average monthly spending",
                  usd: "$6,000",
                },
                {
                  label: "Misc Expenses",
                  sub: "Books, travel, personal",
                  usd: "$4,000",
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
                      Total Estimated Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Per academic year
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$50,000</p>
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
              UMBC seeks candidates with strong academic backgrounds and a
              passion for research and innovation.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Degree",
                desc: "A bachelor's degree from an accredited institution in a related field",
              },
              {
                title: "GPA Requirement",
                desc: "Minimum undergraduate GPA (typically 3.0 or higher on a 4.0 scale)",
              },
              {
                title: "English Proficiency",
                desc: "Valid TOEFL, IELTS, or PTE scores as per program requirements",
              },
              {
                title: "Standardized Tests",
                desc: "GRE or GMAT scores (required for some specific graduate programs)",
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
              Our streamlined application process ensures you get the support
              needed to transition into US higher education.
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
              Prepare these essential documents to ensure a fast and successful
              application process.
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

      {/* ── CAMPUS FACILITIES ────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                World-Class Campus
              </p>
              <ColorfulHeading
                text="Campus Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                UMBC offers an environment tailored for research and personal
                growth, featuring state-of-the-art facilities and a wide array of
                student support services.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {campusFacilities.map((f, i) => {
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
                  src="https://images.unsplash.com/photo-1541339907198-e08756edd81f?w=400&auto=format&fit=crop"
                  alt="University Campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="Study area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=400&auto=format&fit=crop"
                  alt="Baltimore City"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1497633762164-66786bb4ebd9?w=400&auto=format&fit=crop"
                  alt="Student Life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Living in Baltimore
              </p>
              <ColorfulHeading
                text="Student Life at UMBC"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Studying at UMBC means being part of a dynamic community in
                Baltimore, Maryland. The city offers a rich mix of cultural
                experiences, urban exploration, and a strong connection to
                political and academic hubs.
              </p>
              <ul className="space-y-3">
                {[
                  "Proximity to Washington D.C. providing unparalleled networking",
                  "A safe and inclusive campus with numerous student organizations",
                  "High-quality urban living with diverse dining and entertainment",
                  "Access to world-class museums, galleries, and historic sites",
                  "A collaborative academic environment with a focus on peer learning",
                  "Extensive career services including internships and job fairs",
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
              text="Why Choose UMBC for Your Future?"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Research-First Approach",
                desc: "Opportunities to work on real-world problems from day one",
              },
              {
                title: "Global Networking",
                desc: "Connect with industry leaders and scholars across the USA",
              },
              {
                title: "Interdisciplinary Study",
                desc: "Flexible programs that allow for cross-departmental learning",
              },
              {
                title: "High Graduate Employability",
                desc: "Strong track record of alumni in top Fortune 500 companies",
              },
              {
                title: "Advanced Labs",
                desc: "Access to cutting-edge technical equipment and resources",
              },
              {
                title: "US Degree Value",
                desc: "A credential that is respected and recognized globally",
              },
              {
                title: "Strategic Hub",
                desc: "Easy access to the political and financial heart of the US",
              },
              {
                title: "GVK Expert Guidance",
                desc: "Full support from application to landing in Baltimore",
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
            Build Your Global Future at UMBC
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Take the leap into a world-class academic experience. Our counselors
            are ready to help you secure your admission to UMBC.
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
