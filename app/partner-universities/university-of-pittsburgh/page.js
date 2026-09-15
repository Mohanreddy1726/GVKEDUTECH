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
    question: "Is the University of Pittsburgh accredited?",
    answer:
      "Yes, the University of Pittsburgh is a highly accredited public research university, recognized globally for its academic excellence and research contributions.",
  },
  {
    question: "What programs are available for international students?",
    answer:
      "The University of Pittsburgh offers a wide range of Masters and Doctoral programs across various fields, including medicine, health sciences, and engineering.",
  },
  {
    question: "What are the admission requirements for international applicants?",
    answer:
      "Requirements vary by program but typically include official transcripts, letters of recommendation, a statement of purpose, and English proficiency test scores (TOEFL/IELTS).",
  },
  {
     question: "What is the medium of instruction?",
    answer:
      "The medium of instruction for all programs at the University of Pittsburgh is English.",
  },
  {
    question: "Does the university provide financial aid or scholarships?",
    answer:
      "Yes, various scholarships and financial aid options are available for meritorious international students. We recommend checking the specific program requirements.",
  },
  {
    question: "What is the cost of living in Pittsburgh, Pennsylvania?",
    answer:
      "The cost of living is moderate compared to major US cities like New York or LA. It includes expenses for housing, food, and transport, which vary by lifestyle.",
  },
  {
    question: "How is the student support system for international students?",
    answer:
      "The university has a dedicated international student office that provides support for visa processing, orientation, and cultural integration.",
  },
  {
    question: "Can international students work while studying?",
    answer:
      "Yes, international students on an F-1 visa can typically work on-campus for up to 20 hours per week during the semester.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Research Programs",
    desc: "Identify the Masters or PhD program that aligns with your career goals",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Prepare Documents",
    desc: "Gather transcripts, LORs, and take required English proficiency tests",
    icon: FileText,
  },
  {
    step: 3,
    title: "Submit Application",
    desc: "Complete the online application via the university portal",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Interview Process",
    desc: "Attend interviews if required by the specific academic department",
    icon: Users,
  },
  {
    step: 5,
    title: "Receive Admission",
    desc: "Get your official offer letter and I-20 document for visa application",
    icon: CheckCircle,
  },
  {
    step: 6,
    title: "Visa & Travel",
    desc: "Apply for the US student visa and plan your travel to Pittsburgh",
    icon: Globe,
  },
];

const documents = [
  "Official Academic Transcripts (Evaluated)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (LORs)",
  "English Proficiency Score (TOEFL/IELTS/PTE)",
  "Valid Passport",
  "Passport Size Photographs",
  "GRE/GMAT Score (if required by program)",
  "Financial Support Documents (Bank Statement)",
  "Updated Curriculum Vitae (CV)",
  "Application Fee Payment Receipt",
];

const hostelFeatures = [
  { icon: Home, label: "Diverse on-campus housing options" },
  { icon: Users, label: "Shared and single room availability" },
  { icon: Utensils, label: "Modern dining halls with diverse cuisines" },
  { icon: Wifi, label: "High-speed campus-wide WiFi" },
  { icon: ShieldCheck, label: "24/7 security and resident assistants" },
  { icon: Clock, label: "On-site laundry and recreation centers" },
];

const whyChoose = [
  {
    title: "Top-Tier Research",
    desc: "One of the leading research universities in the US with massive funding",
    icon: Star,
  },
  {
    title: "Global Reputation",
    desc: "Highly ranked globally for medicine, health, and public policy",
    icon: Globe,
  },
  {
    title: "Urban Campus",
    desc: "Located in the heart of Pittsburgh with great city access",
    icon: ShieldCheck,
  },
  {
    title: "Diverse Community",
    desc: "A welcoming environment for students from all over the world",
    icon: Users,
  },
  {
    title: "Career Opportunities",
    desc: "Strong ties with industry leaders and healthcare providers",
    icon: GraduationCap,
  },
  {
    title: "Academic Excellence",
    desc: "World-renowned faculty and cutting-edge teaching methods",
    icon: CheckCircle,
  },
  {
    title: "Innovative Facilities",
    desc: "Access to advanced labs, libraries, and technology centers",
    icon: BookOpen,
  },
  {
    title: "Expert Guidance",
    desc: "Full support from GVK EduTech for the US admission journey",
    icon: ArrowRight,
  },
];

export default function UniversityOfPittsburghPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Pittsburgh — Masters & PhD Admissions 2026"
        subtitle="World-Class Research · Global Recognition · USA Excellence"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756edd81f?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Ivy-League Standards · Pittsburgh, USA
              </p>
              <ColorfulHeading
                text="University of Pittsburgh"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Pittsburgh is a prestigious public research
                university known for its groundbreaking research and commitment
                to academic excellence. It offers world-class postgraduate
                programs that empower students to lead in their fields.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With a strong focus on{" "}
                <strong className="text-foreground">innovation</strong> and{" "}
                <strong className="text-foreground">global impact</strong>,
                Pitt provides an environment where students can push the
                boundaries of knowledge and secure a bright professional future.
              </p>

              {/* College Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Global Top Ranking", "Research Intensive", "USA Accredited", "English Medium"].map(
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
                  src="https://images.unsplash.com/photo-1541339907198-e08756edd81f?w=600&auto=format&fit=crop"
                  alt="University of Pittsburgh campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    US Public University
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">R1</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Research Category
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
              { label: "Accredited", sub: "US Department of Education" },
              { label: "Top 100", sub: "Global Research Universities" },
              { label: "R1", sub: "Very High Research Activity" },
              { label: "Global", sub: "Alumni Network Worldwide" },
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
              text="Why Choose University of Pittsburgh"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From academic prestige to an inspiring urban campus, Pitt offers
              everything an ambitious postgraduate student needs.
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
              text="Estimated Tuition & Costs 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Investment in a world-class education. Costs vary by program
              specialization and duration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Estimates
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
                          Annual USD
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          Annual INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Graduate Tuition
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $30,000 - $50,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹25,50,000 - ₹42,50,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Mandatory Fees
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $2,000 - $5,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹1,70,000 - ₹4,25,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Estimated Annual Total
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $32,000 - $55,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹27,20,000 - ₹46,75,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Fees vary by specific program.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Estimated Living Costs
              </p>
              {[
                {
                  label: "Housing",
                  sub: "On-campus or off-campus",
                  usd: "$8,000 - $12,000",
                },
                {
                  label: "Food & Dining",
                  sub: "Meal plans or groceries",
                  usd: "$4,000 - $6,000",
                },
                {
                  label: "Health Insurance",
                  sub: "Mandatory student plan",
                  usd: "$2,000 - $3,000",
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
                      Annual Budget Estimate
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + Living Costs
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$45k - $70k</p>
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
              Rigorous standards for high-achieving postgraduate applicants.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Background",
                desc: "A Bachelor's degree from a recognized university in a related field",
              },
              {
                title: "GPA Requirement",
                desc: "Competitive GPA (typically 3.0+ on a 4.0 scale) preferred",
              },
              {
                title: "English Proficiency",
                desc: "Valid TOEFL, IELTS, or PTE scores as per program requirements",
              },
              {
                title: "Standardized Tests",
                desc: "GRE or GMAT scores may be required for specific graduate programs",
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
              A structured journey to secure your place at one of the USA's
              top research universities.
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
              Ensure your application is complete to maximize your chances of
              admission.
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
                Premium Living
              </p>
              <ColorfulHeading
                text="Student Housing"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Pittsburgh offers a variety of housing options,
                from traditional residence halls to modern apartment-style living,
                ensuring a safe and supportive environment.
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
                  alt="Student common area"
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
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Pittsburgh city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="USA campus landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Pittsburgh
              </p>
              <ColorfulHeading
                text="A Hub of Innovation & Culture"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Pittsburgh is a city where tradition meets technology. Known as
                the "Steel City," it has transformed into a global hub for
                healthcare, robotics, and artificial intelligence.
              </p>
              <ul className="space-y-3">
                {[
                  "High standard of living and safe urban environment",
                  "Access to world-renowned hospitals and research centers",
                  "Vibrant arts scene and diverse culinary experiences",
                  "Strong networking opportunities with US industry leaders",
                  "Supportive community for international graduates",
                  "Proximity to other major US East Coast cities",
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
              text="Advantages of Studying at University of Pittsburgh"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Academic Prestige",
                desc: "Study at a university recognized for its elite academic standards",
              },
              {
                title: "Advanced Research",
                desc: "Opportunity to work on cutting-edge projects with global impact",
              },
              {
                title: "Networking",
                desc: "Connect with industry pioneers and distinguished alumni",
              },
              {
                title: "Career Growth",
                desc: "High employability rates in top US and international companies",
              },
              {
                title: "Interdisciplinary Approach",
                desc: "Flexible programs that encourage learning across multiple fields",
              },
              {
                title: "State-of-the-Art Labs",
                desc: "Access to some of the most advanced research tools in the world",
              },
              {
                title: "Urban Advantage",
                desc: "Direct access to internships in a thriving metropolitan area",
              },
              {
                title: "GVK EduTech Guidance",
                desc: "End-to-end support for US visa and university placement",
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
            Begin Your Graduate Journey at University of Pittsburgh
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the complex US admission
            process to secure your spot at this prestigious institution.
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
              { href: "/", label: "Home" },
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
