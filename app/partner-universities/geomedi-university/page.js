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
    question: "Is Geomedi University NMC approved?",
    answer:
      "Yes, Geomedi University is recognized by the National Medical Commission (NMC) of India. Indian students can appear for FMGE/NEXT after completing their MBBS degree.",
  },
  {
    question: "What is the duration of MBBS at Geomedi University?",
    answer:
      "The MBBS program at Geomedi University is 6 years (5 years + 1 year internship), focusing on high-quality clinical training and academic excellence.",
  },
  {
    question: "Is NEET required for admission to Geomedi University?",
    answer:
      "Yes, NEET-UG qualification is mandatory for all Indian students seeking admission to medical universities abroad, including Geomedi University.",
  },
  {
    question: "What is the medium of instruction at Geomedi?",
    answer:
      "The entire MBBS course is taught in English. Students also learn the Georgian language to facilitate clinical communication with local patients during rotations.",
  },
  {
    question: "Can I work part-time while studying at Geomedi University?",
    answer:
      "Students are generally allowed to work part-time (up to 20 hours/week) as per Georgian laws, but we recommend prioritizing the rigorous medical curriculum.",
  },
  {
    question: "What is the total cost of MBBS at Geomedi University?",
    answer:
      "The total cost including tuition, hostel, and living expenses varies by year. Contact GVK EduTech for the most updated and detailed fee structure.",
  },
  {
    question: "How is the food and accommodation for Indian students?",
    answer:
      "Geomedi University provides comfortable hostel facilities with Indian mess options available, ensuring students have access to familiar and nutritious meals.",
  },
  {
    question: "Is the degree from Geomedi globally recognized?",
    answer:
      "Yes, the degree is globally recognized, allowing graduates to pursue postgraduate studies in the USA, UK, Germany, and other leading medical destinations.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill the online form with your academic details and upload required documents",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Get your official admission letter from Geomedi University after document verification",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Confirm your seat by paying the initial tuition fees as per university guidelines",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Georgian student visa application with the university's supporting documents",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Arrange your travel to Georgia — GVK EduTech provides complete travel and logistics support",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Report to the university, complete on-campus registration, and start your medical journey",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "NEET Score Card (Mandatory for Indians)",
  "Passport Size Photos (10-15 copies)",
  "Birth Certificate",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel Insurance",
  "Bank Statement (Father/Guardian)",
  "Admission Letter (Geomedi University)",
];

const hostelFeatures = [
  { icon: Home, label: "Safe and secure hostels for boys and girls" },
  { icon: Users, label: "Modern rooms with essential furniture" },
  { icon: Utensils, label: "Indian mess facilities with veg/non-veg options" },
  { icon: Wifi, label: "High-speed WiFi for academic research" },
  { icon: ShieldCheck, label: "24/7 security and surveillance" },
  { icon: Clock, label: "Laundry and heating facilities" },
];

const whyChoose = [
  {
    title: "Modern Infrastructure",
    desc: "Equipped with state-of-the-art labs and simulation centers for practical learning",
    icon: Star,
  },
  {
    title: "Global Recognition",
    desc: "WHO and NMC approved, ensuring graduates can practice globally",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Education",
    desc: "High-quality medical education at a fraction of the cost of private colleges in India",
    icon: IndianRupee,
  },
  {
    title: "English Medium",
    desc: "The entire curriculum is delivered in English for ease of understanding",
    icon: Globe,
  },
  {
    title: "Indian Community",
    desc: "A supportive environment with a growing community of Indian medical students",
    icon: Users,
  },
  {
    title: "Safe Environment",
    desc: "Georgia is known for being one of the safest countries for international students",
    icon: CheckCircle,
  },
  {
    title: "NEXT/FMGE Focus",
    desc: "Curriculum designed to align with international standards and licensing exams",
    icon: GraduationCap,
  },
  {
    title: "Full Support",
    desc: "End-to-end guidance from GVK EduTech for admission, visa, and travel",
    icon: ArrowRight,
  },
];

export default function GeomediUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Geomedi University Fees, Eligibility & Admission Process 2026"
        subtitle="NMC Approved · WHO Recognised · English Medium · Modern Infrastructure"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Medical Excellence · Georgia
              </p>
              <ColorfulHeading
                text="Geomedi University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Geomedi University is a premier destination for international students
                seeking a world-class MBBS degree. Combining innovative teaching
                methods with advanced clinical exposure, it offers a comprehensive
                medical education designed for the doctors of tomorrow.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With{" "}
                <strong className="text-foreground">NMC approval</strong> and{" "}
                <strong className="text-foreground">WHO recognition</strong>,
                students are fully eligible to pursue their medical careers in India
                and across the globe.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "MCI Recognised", "English Medium"].map(
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
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop"
                  alt="Geomedi University campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Modern Medical Facility
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    English Medium
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
              { label: "NMC", sub: "India — National Medical Commission" },
              { label: "WHO", sub: "World Health Organization Listed" },
              { label: "Rank", sub: "Leading Medical Institution in Georgia" },
              { label: "Grade", sub: "International Academic Standard" },
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
              text="Why Indian Students Choose Geomedi University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From advanced simulation labs to a supportive multicultural
              environment, Geomedi offers everything a medical aspirant needs.
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
              text="MBBS Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Transparent and affordable pricing designed to make medical
              education accessible to all deserving students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Year
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
                          1st Year
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          Contact for Details
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          Contact for Details
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Subsequent Years
                          <span className="text-muted-foreground text-xs">
                            (per year)
                          </span>
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
                    * Fees are subject to change. Please consult our counselors for the precise current fee structure.
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
                  label: "Hostel",
                  sub: "Secure on-campus rooms",
                  usd: "Contact Us",
                },
                {
                  label: "Indian Mess",
                  sub: "Quality veg/non-veg meals",
                  usd: "Contact Us",
                },
                {
                  label: "Living Expenses",
                  sub: "Personal & Transport",
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
                      Total Package
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Comprehensive estimate
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
              Simple requirements designed to identify passionate and capable
              medical aspirants.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age",
                desc: "Minimum 17 years of age by the end of the admission year",
              },
              {
                title: "Academics",
                desc: "10+2 standard with min. 50% in Physics, Chemistry & Biology",
              },
              {
                title: "NEET",
                desc: "Valid NEET-UG qualification is mandatory for Indian citizens",
              },
              {
                title: "Language",
                desc: "Proficiency in English (Medium of Instruction)",
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
              We make your transition to Georgia seamless. Follow these
              simple steps to secure your seat at Geomedi University.
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
              Prepare these documents for a smooth admission process. GVK
              EduTech will assist you in the verification and submission.
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
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Geomedi University provides a safe and comfortable residential
                environment, ensuring that students can focus entirely on their
                studies while feeling at home.
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
                  alt="Hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Hostel common area"
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
                  alt="Tbilisi city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Georgia landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Georgia
              </p>
              <ColorfulHeading
                text="A Student's Paradise"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Studying in Georgia offers a unique blend of safety, cultural
                richness, and high-quality living. It is an ideal environment for
                international students to grow both personally and professionally.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the safest regions in Europe for international students",
                  "Affordable cost of living compared to Western Europe",
                  "Stunning landscapes and rich historical heritage",
                  "English widely used in academic and urban settings",
                  "Strong community of Indian students providing peer support",
                  "Excellent connectivity with direct flights from India",
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
              text="Advantages of Studying at Geomedi University"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Direct admission based on NEET and academic records",
              },
              {
                title: "Zero Donation",
                desc: "Fully transparent fee structure with no hidden charges",
              },
              {
                title: "Licensing Focus",
                desc: "Strong emphasis on USMLE and NEXT preparation",
              },
              {
                title: "Diverse Culture",
                desc: "Opportunity to study with students from various countries",
              },
              {
                title: "Clinical Training",
                desc: "Early exposure to patients in affiliated hospitals",
              },
              {
                title: "Global Mobility",
                desc: "Degree recognised for PG studies worldwide",
              },
              {
                title: "Modern Labs",
                desc: "Access to advanced medical technology and simulation",
              },
              {
                title: "End-to-End Support",
                desc: "Complete guidance provided by GVK EduTech",
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
            Begin Your Medical Career at Geomedi University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of successful students. Our expert counselors will
            help you every step of the way.
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
              { href: "/mbbs/georgia", label: "MBBS in Georgia" },
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
