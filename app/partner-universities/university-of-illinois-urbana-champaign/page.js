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
    question: "Is the University of Illinois Urbana-Champaign recognized globally?",
    answer:
      "Yes, UIUC is one of the world's leading public research universities, consistently ranked among the top institutions globally for engineering, computer science, and medical research.",
  },
  {
    question: "What are the admission requirements for international students?",
    answer:
      "Admission is highly competitive and typically requires strong academic transcripts, standardized test scores (like GRE or GMAT for graduate programs), and English proficiency evidence (TOEFL/IELTS).",
  },
  {
    question: "Does UIUC provide support for student visas?",
    answer:
      "Yes, the university's international student services office provides comprehensive guidance and the necessary documentation (like I-20) for the US student visa process.",
  },
  {
    question: "What is the medium of instruction at UIUC?",
    answer:
      "All programs at the University of Illinois Urbana-Champaign are conducted entirely in English.",
  },
  {
    question: "Are there scholarship opportunities available?",
    answer:
      "UIUC offers various scholarships, fellowships, and assistantships based on academic merit and financial need. We recommend applying early to maximize your chances.",
  },
  {
    question: "What is the cost of studying at UIUC?",
    answer:
      "Tuition and living costs vary significantly by program. Please contact GVK EduTech for a detailed budget plan tailored to your specific course of study.",
  },
  {
    question: "What are the housing options for international students?",
    answer:
      "The university offers a wide range of on-campus dormitories and off-campus housing options to suit different budgets and preferences.",
  },
  {
    question: "Can I work while studying at UIUC?",
    answer:
      "International students on F-1 visas can typically work on-campus for up to 20 hours per week and may apply for OPT (Optional Practical Training) after graduation.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Academic Evaluation",
    desc: "Assess your transcripts and identify the program that aligns with your career goals",
    icon: FileText,
  },
  {
    step: 2,
    title: "Standardized Testing",
    desc: "Complete required exams such as GRE/GMAT and English proficiency tests (TOEFL/IELTS)",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Application Submission",
    desc: "Submit a comprehensive application including Statement of Purpose (SOP) and LORs",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Admission Decision",
    desc: "Receive your official admission offer and confirm your enrollment",
    icon: Globe,
  },
  {
    step: 5,
    title: "Visa Processing",
    desc: "Apply for the US student visa with support from UIUC and GVK EduTech",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Enrollment",
    desc: "Arrive in Urbana-Champaign, complete orientation, and start your academic journey",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport",
  "Official Academic Transcripts (Evaluated)",
  "Degree Certificates",
  "Standardized Test Scores (GRE/GMAT/SAT)",
  "English Proficiency Score (TOEFL/IELTS/PTE)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (LOR)",
  "Updated Curriculum Vitae (CV)",
  "Proof of Financial Support (Bank Statements)",
  "Passport Size Photographs",
  "Valid Identification Proof",
  "Admission Offer Letter (UIUC)",
];

const hostelFeatures = [
  { icon: Home, label: "Diverse on-campus residence halls" },
  { icon: Users, label: "Collaborative living and learning communities" },
  { icon: Utensils, label: "World-class dining halls with global cuisines" },
  { icon: Wifi, label: "University-wide high-speed campus network" },
  { icon: ShieldCheck, label: "Comprehensive campus security and safety" },
  { icon: Clock, label: "24/7 access to academic and recreational facilities" },
];

const whyChoose = [
  {
    title: "World-Class Ranking",
    desc: "Consistently ranked as a global leader in research and academic innovation",
    icon: Star,
  },
  {
    title: "Research Excellence",
    desc: "Access to cutting-edge laboratories and funding for groundbreaking research",
    icon: ShieldCheck,
  },
  {
    title: "Prestigious Alumni",
    desc: "Join a network of global leaders, innovators, and industry pioneers",
    icon: IndianRupee,
  },
  {
    title: "Diverse Campus",
    desc: "A multicultural environment fostering global perspectives and friendships",
    icon: Globe,
  },
  {
    title: "Industry Links",
    desc: "Strong connections with Fortune 500 companies for internships and jobs",
    icon: Users,
  },
  {
    title: "Safe US Campus",
    desc: "Located in a dedicated university town optimized for student life",
    icon: CheckCircle,
  },
  {
    title: "Academic Rigor",
    desc: "Curriculums that challenge students to excel in their chosen fields",
    icon: GraduationCap,
  },
  {
    title: "GVK Expert Guidance",
    desc: "End-to-end support for competitive US university applications",
    icon: ArrowRight,
  },
];

export default function UIUCPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Illinois Urbana-Champaign Fees, Eligibility & Admission Process 2026"
        subtitle="Ivy-League Standard · World-Class Research · Global Recognition · Academic Excellence"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756edd812?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Research Powerhouse · Urbana-Champaign, USA
              </p>
              <ColorfulHeading
                text="University of Illinois Urbana-Champaign"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Illinois Urbana-Champaign (UIUC) is a world-renowned
                public land-grant research university. Known for its unparalleled
                contributions to science, engineering, and medicine, it provides an
                academic environment that pushes the boundaries of human knowledge.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With a legacy of innovation and a commitment to excellence, UIUC
                graduates are highly sought after by top employers and postgraduate
                programs worldwide.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Top Global Ranking", "Research Intensive", "Ivy-League Caliber", "English Medium"].map(
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
                  src="https://images.unsplash.com/photo-1541339907198-e08756edd812?w=600&auto=format&fit=crop"
                  alt="University of Illinois Urbana-Champaign campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Research University
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Global Recognition
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION & RANKING ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Global", sub: "Top-Tier World University Ranking" },
              { label: "Research", sub: "Leader in STEM & Humanities" },
              { label: "Accred.", sub: "Fully Accredited US Institution" },
              { label: "Grade", sub: "Premier Academic Standard" },
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
              text="Why International Students Choose UIUC"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From state-of-the-art facilities to a vibrant campus life, UIUC
              offers an unparalleled experience for aspiring scholars.
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
              An investment in a world-class education. Fees vary by program and
              residency status.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Overview
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
                          Estimated USD
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          Estimated INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Undergraduate / Graduate
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          Contact for Details
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          Contact for Details
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total Estimated Cost
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          Competitive
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          Competitive
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Tuition depends on specific major and credit hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Estimated Annual Living Costs
              </p>
              {[
                {
                  label: "Housing",
                  sub: "University residence or apartments",
                  usd: "Contact Us",
                },
                {
                  label: "Dining/Meal Plan",
                  sub: "Campus dining options",
                  usd: "Contact Us",
                },
                {
                  label: "Personal Expenses",
                  sub: "Insurance, books, transport",
                  usd: "Contact Us",
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
                      Total Budget
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">Contact Us</p>
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
              Rigorous standards ensuring a cohort of high-achieving scholars
              from across the globe.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Record",
                desc: "Exceptional GPA/Percentage in relevant fields of study",
              },
              {
                title: "Standardized Tests",
                desc: "Competitive GRE/GMAT scores for graduate admissions",
              },
              {
                title: "English Proficiency",
                desc: "High scores in TOEFL, IELTS, or PTE",
              },
              {
                title: "Portfolio/SOP",
                desc: "Strong Statement of Purpose and academic recommendations",
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
              Navigating the US admission cycle requires precision. We provide
              the expertise to make your application stand out.
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
              A comprehensive dossier is key to a successful US application.
              Our team ensures every document meets UIUC's strict standards.
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Housing
              </p>
              <ColorfulHeading
                text="Housing & Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                UIUC offers a vibrant living experience with modern residence
                halls that promote academic success and social integration.
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
                  alt="University housing"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Student lounge"
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
                  src="https://images.unsplash.com/photo-1523050854058-86bc9da93f1b?w=400&auto=format&fit=crop"
                  alt="Campus life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756edd812?w=400&auto=format&fit=crop"
                  alt="Academic building"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Urbana-Champaign
              </p>
              <ColorfulHeading
                text="A Hub of Innovation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Living and studying at UIUC is an immersive experience. The
                campus is a city within a city, offering everything from
                world-class libraries to a vibrant arts and sports scene.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the largest and most diverse student bodies in the US",
                  "State-of-the-art facilities and research centers",
                  "High quality of life in a dedicated university town",
                  "Extensive student organizations and networking events",
                  "Strong focus on career development and alumni mentorship",
                  "Strategic location for internships in major US hubs",
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
              text="Advantages of Studying at UIUC"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Elite Prestige",
                desc: "A degree from UIUC is recognized and respected by top employers globally",
              },
              {
                title: "Cutting-Edge Tech",
                desc: "Access to some of the world's most advanced computing and lab facilities",
              },
              {
                title: "Expert Faculty",
                desc: "Learn from Nobel laureates and industry-leading professors",
              },
              {
                title: "Career Trajectory",
                desc: "High placement rates in top-tier US and international firms",
              },
              {
                title: "Interdisciplinary",
                desc: "Opportunity to combine majors and explore diverse academic interests",
              },
              {
                title: "Global Network",
                desc: "Connect with a massive and influential global alumni community",
              },
              {
                title: "US Experience",
                desc: "Gain invaluable cultural and professional exposure in the USA",
              },
              {
                title: "GVK Application Edge",
                desc: "Personalized SOP and LOR guidance for competitive US entry",
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
            Elevate Your Future at University of Illinois Urbana-Champaign
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Secure your place in one of the world's most prestigious universities.
            Our consultants are ready to guide you.
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
