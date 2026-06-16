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
  Briefcase,
  Award,
  Plane,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Technical University of Munich recognized in India?",
    answer:
      "Yes, TUM degrees are globally recognized. However, for medical practice in India, you would need to clear the FMGE/NEXT exam after completing your studies.",
  },
  {
    question: "What is the duration of programs at TUM?",
    answer:
      "Bachelor's programs typically take 3-4 years, while Master's programs are 2 years. Medical programs (if available) may take longer.",
  },
  {
    question: "Is German language required?",
    answer:
      "Many programs at TUM are taught in English, but learning German is highly recommended for daily life and internships in Germany.",
  },
  {
    question: "What is the cost of studying at TUM?",
    answer:
      "TUM charges minimal tuition fees (around €150-€300 per semester) for both EU and non-EU students. Living costs in Munich are approximately €800-€1,000 per month.",
  },
  {
    question: "Can I work while studying?",
    answer:
      "Students are allowed to work part-time (up to 20 hours/week) during semesters. Germany offers excellent part-time job opportunities for students.",
  },
  {
    question: "What is the admission process for Indian students?",
    answer:
      "Admission requires submitting academic transcripts, language proficiency proof (IELTS/TOEFL), and program-specific documents. Some programs may require GMAT/GRE.",
  },
  {
    question: "How is the accommodation in Munich?",
    answer:
      "Munich has excellent student housing through Studentenwerk. Monthly rent for student rooms ranges from €300-€600. Early application is recommended.",
  },
  {
    question: "What are the career prospects after TUM?",
    answer:
      "TUM graduates have excellent career prospects in Germany and globally. The university has strong industry connections with top companies like BMW, Siemens, and Allianz.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Choose Program",
    desc: "Select your desired program from TUM's course catalog",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Check Eligibility",
    desc: "Review entry requirements including academics and language tests",
    icon: CheckCircle,
  },
  {
    step: 3,
    title: "Submit Application",
    desc: "Apply online through TUM's application portal",
    icon: FileText,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your admission letter within 4-6 weeks",
    icon: GraduationCap,
  },
  {
    step: 5,
    title: "Apply for Visa",
    desc: "Submit German student visa application with admission documents",
    icon: Globe,
  },
  {
    step: 6,
    title: "Arrive in Munich",
    desc: "Book flights and attend TUM orientation program",
    icon: Plane,
  },
];

const documents = [
  "Valid Passport (min. 12 months)",
  "Academic Transcripts (10th, 12th, Bachelor's)",
  "Degree Certificate",
  "IELTS/TOEFL Score Card",
  "Passport Size Photos (6 copies)",
  "Birth Certificate",
  "Police Clearance Certificate",
  "Medical Certificate",
  "Block Bank Statement",
  "Travel Insurance",
  "Admission Letter (TUM)",
  "Motivational Letter",
  "Letter of Recommendation (2)",
];

const hostelFeatures = [
  { icon: Home, label: "Student housing through Studentenwerk" },
  { icon: Users, label: "Single and shared rooms available" },
  { icon: Utensils, label: "Shared kitchens for self-catering" },
  { icon: Wifi, label: "High-speed internet on campus" },
  { icon: ShieldCheck, label: "Safe campus with 24/7 security" },
  { icon: Clock, label: "Near public transport (U-Bahn/S-Bahn)" },
];

const whyChoose = [
  {
    title: "World-Class University",
    desc: "Ranked among top 50 universities globally",
    icon: Award,
  },
  {
    title: "Low Tuition Fees",
    desc: "Only €150-300 per semester for all students",
    icon: IndianRupee,
  },
  {
    title: "Excellent Employment Rate",
    desc: "95%+ graduates find jobs within 6 months",
    icon: Briefcase,
  },
  {
    title: "English Programs Available",
    desc: "Multiple courses taught entirely in English",
    icon: Globe,
  },
  {
    title: "Industry Connections",
    desc: "Strong ties with top German companies",
    icon: Star,
  },
  {
    title: "Central Location",
    desc: "Located in heart of Europe, easy travel",
    icon: Plane,
  },
  {
    title: "Research Opportunities",
    desc: "Access to cutting-edge research facilities",
    icon: BookOpen,
  },
  {
    title: "International Community",
    desc: "Students from 130+ countries",
    icon: Users,
  },
];

export default function TechnicalUniversityOfMunichPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Technical University of Munich — Study in Germany 2026"
        subtitle="Top Ranked · World-Class Education · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://t3.ftcdn.net/jpg/02/50/23/20/360_F_250232047_z9kCGCC2l3NShBNy1BJ8H3nVe9pWpnff.jpg"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              {/* Eyebrow */}
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1868 · Munich, Germany
              </p>
              <ColorfulHeading
                text="Technical University of Munich"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The Technical University of Munich (TUM) is one of Germany's
                leading universities, renowned for excellence in engineering,
                natural sciences, and business. With over 150 years of academic
                heritage, TUM offers world-class education at minimal tuition costs.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                TUM consistently ranks among the <strong className="text-foreground">top 50 universities globally</strong> and
                top 10 in Europe, providing graduates with exceptional career
                opportunities in Germany and worldwide.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Top 50 World Ranking", "TU9 Member", "Excellence Initiative", "English Programs"].map(
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdLN_AwTa2XPMnq9hTxkiaB1kKypPddfBQLDzpIhv1A&s=10"
                  alt="Technical University of Munich campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">150+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">45,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students enrolled
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
              { label: "#49", sub: "World University Ranking 2024" },
              { label: "#6", sub: "Europe Ranking · Times Higher Ed" },
              { label: "TU9", sub: "German Universities of Excellence" },
              { label: "95%+", sub: "Graduate Employment Rate" },
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
              text="Why Indian Students Choose TUM"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class education to excellent career prospects, TUM offers
              exceptional value for Indian students.
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
              text="TUM World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              TUM consistently ranks among the top universities globally.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { rank: "#49", source: "Times Higher Education 2024" },
              { rank: "#55", source: "QS World University Rankings" },
              { rank: "#30", source: "Engineering & Technology (QS)" },
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
              text="Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most affordable top-ranked universities in the world —
              minimal tuition fees with excellent quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fees (Per Semester)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Student Category
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          EUR
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          EU Students
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          €0
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹0
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Non-EU Students
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          €150-300
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14,000-28,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Semester Contribution
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          €80-100
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹7,500-9,500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 EUR ≈ ₹95 (indicative)
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
                  label: "Student Housing",
                  sub: "Room in student residence",
                  eur: "€300-500",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catering option",
                  eur: "€200-300",
                },
                {
                  label: "Transport",
                  sub: "Semester ticket included",
                  eur: "€0-50",
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
                    <p className="text-lg font-bold text-accent">{item.eur}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      Monthly Total
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Approximate budget
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">€600-900</p>
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
              Clear requirements for Indian students — varies by program.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Minimum 70-75% in Bachelor's for Master's programs",
              },
              {
                title: "English",
                desc: "IELTS 6.5 / TOEFL 88 (for English-taught programs)",
              },
              {
                title: "German",
                desc: "A1-B2 level required depending on program",
              },
              {
                title: "Documents",
                desc: "CV, LORs, and program-specific requirements",
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
              day at TUM.
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

      {/* ── ACCOMMODATION ───────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation in Munich"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Munich offers excellent student accommodation options. The
                Studentenwerk Munich manages thousands of student housing units
                across the city, providing affordable living options near campus.
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
                  alt="Student housing"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="Munich city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN MUNICH ────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEvn4lMd0yw-Ln7zTMYDgUFwMfdA7Roito_6wDM8FJA&s=10"
                  alt="Munich campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhzbP2DJFN8rBSR3L3qdxKlzet1fF78wN8pONWaXgdQ&s=10"
                  alt="Germany landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Munich
              </p>
              <ColorfulHeading
                text="A City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Munich is one of Germany's most vibrant cities, combining historic
                charm with modern living. As a student city, it offers excellent
                quality of life, rich culture, and easy access to the rest of Europe.
              </p>
              <ul className="space-y-3">
                {[
                  "High quality of life with excellent infrastructure",
                  "Safe and welcoming for international students",
                  "Strong economy with job opportunities",
                  "Rich cultural scene and history",
                  "Central location — easy travel across Europe",
                  "World-class restaurants, cafes, and nightlife",
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
              text="Advantages of Studying at TUM"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Affordable Education",
                desc: "Minimal tuition fees even for international students",
              },
              {
                title: "World-Class Faculty",
                desc: "Learn from Nobel laureates and industry experts",
              },
              {
                title: "Industry Links",
                desc: "Internship and job opportunities with top companies",
              },
              {
                title: "Research Focus",
                desc: "Access to cutting-edge research facilities",
              },
              {
                title: "English Programs",
                desc: "Multiple programs taught entirely in English",
              },
              {
                title: "Central Europe",
                desc: "Easy travel to other European countries",
              },
              {
                title: "Post-Study Visa",
                desc: "18 months job search visa after graduation",
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
            Begin Your Journey at Technical University of Munich
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire process —
            from application to your first day in Munich.
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