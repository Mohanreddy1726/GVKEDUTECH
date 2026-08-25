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
  TrendingUp,
  Award,
  Briefcase,
  Building2,
  DollarSign,
  Microscope,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Purdue University good for Indian students?",
    answer:
      "Yes. Purdue University is one of the top-ranked public research universities in the USA and a popular choice for Indian students pursuing Masters and PhD programs in engineering, business, computer science and the sciences — with strong career outcomes and a large Indian alumni network.",
  },
  {
    question: "What is the tuition fee for international students at Purdue?",
    answer:
      "International graduate tuition at Purdue University typically ranges from USD 30,000 – 45,000 per year depending on the program (Engineering, Business, Computer Science, etc.). GVK EduTech helps students plan affordable payment options and explore scholarship opportunities.",
  },
  {
    question: "Does Purdue University offer scholarships for Indian students?",
    answer:
      "Yes. Purdue offers merit-based scholarships, graduate assistantships (TA / RA) and departmental funding for international students. Indian applicants with strong academics and GRE / GMAT scores can secure partial to full tuition waivers.",
  },
  {
    question: "What are the popular Masters programs at Purdue?",
    answer:
      "Top Masters programs at Purdue include MS in Computer Science, MS in Electrical Engineering, MS in Mechanical Engineering, MS in Data Science, MBA (Krannert School of Management), MS in Industrial Engineering, MS in Cybersecurity and MS in Biomedical Engineering.",
  },
  {
    question: "What is the acceptance rate for international students at Purdue?",
    answer:
      "Purdue's overall acceptance rate is around 50–60%, but selective programs like CS, Engineering and the Krannert MBA are more competitive. A strong GPA, GRE / GMAT, TOEFL / IELTS and a clear statement of purpose are key to a successful application.",
  },
  {
    question: "What is the cost of living in West Lafayette, Indiana?",
    answer:
      "West Lafayette is significantly more affordable than coastal US cities. Estimated monthly living expenses — rent, food, transport and utilities — range from USD 900 – 1,400, making it one of the best-value Big Ten campus towns in America.",
  },
  {
    question: "What are the job and internship prospects after Purdue?",
    answer:
      "Purdue consistently ranks among the top US universities for graduate employability. Companies like Google, Amazon, Microsoft, Meta, Apple, Intel, Deloitte, JP Morgan and Tata Consultancy Services actively recruit on campus every year.",
  },
  {
    question: "Does GVK EduTech assist with Purdue admissions?",
    answer:
      "Yes. GVK EduTech provides end-to-end support — university shortlisting, SOP / LOR editing, application submission, visa processing, education loan guidance and pre-departure briefing for students targeting Purdue University.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Shortlist Program",
    desc: "Pick the right Masters or PhD program at Purdue with our expert counselors",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Prepare Documents",
    desc: "SOP, LORs, GRE / GMAT, TOEFL / IELTS, transcripts and resume polishing",
    icon: FileText,
  },
  {
    step: 3,
    title: "Submit Application",
    desc: "Apply via the Purdue Graduate School portal or program-specific portal",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Admission",
    desc: "Accept the offer letter, apply for I-20 and pay the SEVIS fee",
    icon: Award,
  },
  {
    step: 5,
    title: "Visa Interview",
    desc: "Book your F-1 student visa slot and prepare for the US embassy interview",
    icon: Globe,
  },
  {
    step: 6,
    title: "Fly to Purdue",
    desc: "Travel to West Lafayette and begin your journey at a top US public university",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (min. 6 months validity)",
  "Bachelor's Degree Transcript & Certificate",
  "GRE / GMAT Score Card (program-specific)",
  "TOEFL / IELTS Score Card",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (LORs) — 2 to 3",
  "Updated Resume / CV",
  "Work Experience Letters (if applicable)",
  "Passport Size Photographs",
  "Financial Affidavit / Bank Statements",
  "SEVIS Fee Receipt (I-901)",
  "Form I-20 issued by Purdue University",
];

const hostelFeatures = [
  { icon: Home, label: "On-campus residence halls & off-campus apartments" },
  { icon: Users, label: "Single, double & shared room options" },
  { icon: Utensils, label: "Multiple dining courts & international meal plans" },
  { icon: Wifi, label: "High-speed campus-wide WiFi and IT support" },
  { icon: ShieldCheck, label: "24/7 Purdue University Police & emergency services" },
  { icon: Clock, label: "Free campus bus system, libraries open 24/7 during exams" },
];

const whyChoose = [
  {
    title: "Top 50 US Public University",
    desc: "Consistently ranked among the top public universities in the United States",
    icon: TrendingUp,
  },
  {
    title: "World-Class Research",
    desc: "Pioneering research in engineering, agriculture, sciences and aviation",
    icon: Microscope,
  },
  {
    title: "Strong Placement Record",
    desc: "High graduate employability with top recruiters like Google, Amazon & Microsoft",
    icon: Briefcase,
  },
  {
    title: "Affordable Tuition",
    desc: "Lower tuition than most private US universities, with merit scholarships",
    icon: DollarSign,
  },
  {
    title: "Large Indian Community",
    desc: "Thousands of Indian students and a vibrant cultural network on campus",
    icon: Users,
  },
  {
    title: "STEM-Designated Programs",
    desc: "Eligible for 24-month OPT extension after graduation for STEM students",
    icon: Award,
  },
  {
    title: "Modern Campus",
    desc: "State-of-the-art labs, libraries, sports facilities and student centers",
    icon: Building2,
  },
  {
    title: "Global Recognition",
    desc: "Degree recognised by employers, governments and universities worldwide",
    icon: Globe,
  },
];

const programs = [
  { name: "MS in Computer Science", duration: "1.5 – 2 years", fee: "$33,000 / yr" },
  { name: "MS in Electrical Engineering", duration: "1.5 – 2 years", fee: "$32,000 / yr" },
  { name: "MS in Mechanical Engineering", duration: "1.5 – 2 years", fee: "$32,000 / yr" },
  { name: "MS in Data Science / AI", duration: "1.5 – 2 years", fee: "$36,000 / yr" },
  { name: "MBA (Krannert)", duration: "2 years", fee: "$45,000 / yr" },
  { name: "MS in Industrial Engineering", duration: "1.5 – 2 years", fee: "$32,000 / yr" },
  { name: "MS in Biomedical Engineering", duration: "1.5 – 2 years", fee: "$34,000 / yr" },
  { name: "MS in Cybersecurity", duration: "1.5 – 2 years", fee: "$33,000 / yr" },
];

export default function PurdueUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Purdue University — Masters & PhD Admissions 2026"
        subtitle="Top US Public University · STEM-Designated · High ROI · Strong Placements"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1869 · West Lafayette, Indiana, USA
              </p>
              <ColorfulHeading
                text="Purdue University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Purdue University is a world-renowned public research
                university and one of the top destinations for Indian
                students pursuing Masters and PhD programs in the USA. Known
                for academic excellence, cutting-edge research and exceptional
                career outcomes, Purdue offers unmatched value.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ranked among the{" "}
                <strong className="text-foreground">top 50 universities globally</strong>{" "}
                and home to a vibrant Indian student community, Purdue
                combines Big Ten energy with industry-driven curricula and
                stellar graduate employability.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Top 50 US University", "STEM-Designated", "AAU Member", "Big Ten", "Public Ivy"].map(
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
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop"
                  alt="Purdue University campus West Lafayette"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">155+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic legacy
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">50K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 130+ countries
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
              { label: "#46", sub: "US News National University Ranking" },
              { label: "Top 100", sub: "QS World University Rankings" },
              { label: "AAU", sub: "Association of American Universities" },
              { label: "STEM", sub: "All major programs STEM-designated" },
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
              text="Why Indian Students Choose Purdue"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class academics and Big Ten athletics to strong
              placements, here is why Purdue is a top choice for Indian
              graduate students.
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

      {/* ── WORLD RANKING ───────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Purdue University — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A consistent top performer across global rankings — a true
              "Public Ivy" with research prowess recognised worldwide.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "QS World Rank", value: "#89", sub: "QS World University Rankings 2026" },
              { label: "US News", value: "#46", sub: "Best National Universities" },
              { label: "THE World Rank", value: "#83", sub: "Times Higher Education" },
              { label: "Research Output", value: "Top 10", sub: "US public research universities" },
            ].map((item) => (
              <Card key={item.label} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-accent">{item.value}</p>
                  <p className="text-sm font-semibold text-foreground mt-2">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.sub}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS & FEES ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Masters Programs & Tuition Fees 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Indicative annual tuition for international graduate students
              at Purdue University — actual fees may vary by program and
              year.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20 overflow-hidden">
              <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                <CardTitle className="text-base font-semibold text-foreground">
                  Purdue University — Graduate Programs Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-6 py-3 font-semibold text-foreground">
                        Program
                      </th>
                      <th className="text-right px-6 py-3 font-semibold text-foreground">
                        Duration
                      </th>
                      <th className="text-right px-6 py-3 font-semibold text-foreground">
                        Tuition (USD / yr)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((p, i) => (
                      <tr
                        key={p.name}
                        className={
                          i === programs.length - 1
                            ? "bg-accent/5"
                            : "border-b border-border"
                        }
                      >
                        <td className="px-6 py-4 text-foreground">
                          {p.name}
                        </td>
                        <td className="px-6 py-4 text-right text-foreground">
                          {p.duration}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-accent">
                          {p.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                  * Indicative tuition for international graduate students.
                  Living expenses, health insurance and books are additional.
                  Scholarships and TA / RA waivers can significantly reduce
                  net cost.
                </p>
              </CardContent>
            </Card>
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
              Graduate admission requirements at Purdue University for
              Indian students.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Bachelor's Degree",
                desc: "4-year undergraduate degree from a recognised university with a strong GPA (3.0+ / 4.0 scale preferred)",
              },
              {
                title: "GRE / GMAT",
                desc: "Required for most programs — high quantitative scores preferred for engineering and CS programs",
              },
              {
                title: "English Proficiency",
                desc: "TOEFL iBT 80+ or IELTS 6.5+ required for Indian applicants",
              },
              {
                title: "Work Experience",
                desc: "Relevant internships or full-time work experience strengthens MBA and MEng applications",
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
              A six-step journey from shortlisting your program at Purdue
              to stepping onto campus in West Lafayette, Indiana.
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              GVK EduTech's expert counselors will help you prepare every
              document for a strong Purdue application.
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
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Accommodation & Housing"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Purdue offers on-campus residence halls and a thriving
                off-campus housing market. From single rooms to shared
                apartments, students find safe, affordable and welcoming
                options within walking distance of classrooms and labs.
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
                  alt="Purdue student housing"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Purdue campus common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE ─────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=400&auto=format&fit=crop"
                  alt="Purdue University campus life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="West Lafayette Indiana"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Life at Purdue
              </p>
              <ColorfulHeading
                text="Big Ten Spirit, Global Community"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over 1,000 student organisations, NCAA Division I
                athletics and a vibrant Indian Students Association, Purdue
                offers the perfect blend of academics, culture and community
                for Indian graduate students.
              </p>
              <ul className="space-y-3">
                {[
                  "1,000+ student clubs including a large Indian Students Association",
                  "NCAA Division I Big Ten sports — football, basketball and more",
                  "Affordable cost of living in West Lafayette compared to coastal US cities",
                  "On-campus career fairs with Google, Amazon, Meta and Microsoft",
                  "Strong Indian alumni network across the USA and globally",
                  "Safe, walkable campus with dedicated student support services",
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
              text="Advantages of Studying at Purdue University"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Top US Public University",
                desc: "Recognised globally as a leading research and engineering school",
              },
              {
                title: "STEM-Designated Programs",
                desc: "Eligible for 24-month OPT extension after graduation",
              },
              {
                title: "High Graduate Employability",
                desc: "Strong on-campus recruiting by Fortune 500 companies",
              },
              {
                title: "Affordable Tuition",
                desc: "Lower fees than most private US universities with scholarships",
              },
              {
                title: "Research Opportunities",
                desc: "Hands-on research with leading faculty from day one",
              },
              {
                title: "Global Network",
                desc: "500,000+ alumni across 100+ countries worldwide",
              },
              {
                title: "Big Ten Experience",
                desc: "Iconic American college experience with top-tier athletics",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end admissions, visa and pre-departure support",
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
            <p className="text-muted-foreground text-lg">
              Common questions Indian students ask about Masters and PhD
              admissions at Purdue University.
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open — Fall & Spring Intakes
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters Journey at Purdue University, USA
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert counselors will guide you through program
            shortlisting, applications, scholarships and visa — all the way
            to your first day on the Purdue campus.
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
