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
    question: "Is David Tvildiani Medical University (DTMU) NMC approved?",
    answer:
      "Yes, DTMU is recognized by the National Medical Commission (NMC) of India. Students can appear for the FMGE/NEXT exam after completing their MBBS degree.",
  },
  {
    question: "What is the duration of the MBBS program at DTMU?",
    answer:
      "The MBBS program at DTMU is a 6-year course, which includes 5 years of academic study and 1 year of clinical internship.",
  },
  {
    question: "Is NEET mandatory for admission to DTMU?",
    answer:
      "Yes, for Indian students, a qualified NEET-UG score is mandatory for admission to any medical university abroad, including DTMU.",
  },
  {
    question: "What is the medium of instruction at DTMU?",
    answer:
      "The course is taught entirely in English. Additionally, students are taught the Georgian language to help them communicate with patients during clinical rotations.",
  },
  {
    question: "Are there any hidden charges or donations?",
    answer:
      "No, DTMU follows a transparent admission process. There are no donations, capitation fees, or hidden charges.",
  },
  {
    question: "What is the total cost of MBBS at David Tvildiani Medical University?",
    answer:
      "The total cost, including tuition and living expenses, is approximately USD 40,000–50,000 for the entire duration.",
  },
  {
    question: "How is the accommodation for Indian students?",
    answer:
      "DTMU provides modern hostels with dedicated Indian mess facilities, ensuring that students have access to familiar and nutritious meals.",
  },
  {
    question: "Can DTMU graduates practice medicine in the USA or UK?",
    answer:
      "Yes, the degree is globally recognized. Graduates can pursue PG opportunities in the USA (via USMLE) or UK (via PLAB/UKMLA) after passing the required exams.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Provide your academic documents and fill out the online application form",
    icon: FileText,
  },
  {
    step: 2,
    title: "Admission Offer",
    desc: "Receive your official admission letter from DTMU within a few working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Fee Payment",
    desc: "Secure your seat by paying the first-year tuition fee",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Visa Processing",
    desc: "Apply for the Georgian student visa with university support documents",
    icon: Globe,
  },
  {
    step: 5,
    title: "Travel Arrangement",
    desc: "Book your flight to Tbilisi — GVK EduTech provides full travel assistance",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "University Enrollment",
    desc: "Arrive in Tbilisi, complete your registration, and start your medical journey",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Standard Mark Sheet & Certificate",
  "12th Standard Mark Sheet & Certificate",
  "NEET-UG Score Card",
  "Recent Passport Size Photographs",
  "Birth Certificate",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV/AIDS Test Report",
  "Valid Travel Insurance",
  "Financial Bank Statement (Guardian)",
  "Official Admission Letter from DTMU",
];

const hostelFeatures = [
  { icon: Home, label: "Modern, secure hostels for boys and girls" },
  { icon: Users, label: "Comfortable furnished rooms (sharing)" },
  { icon: Utensils, label: "Dedicated Indian mess with veg/non-veg meals" },
  { icon: Wifi, label: "High-speed unlimited WiFi connectivity" },
  { icon: ShieldCheck, label: "24/7 security and surveillance" },
  { icon: Clock, label: "Laundry, heating, and hot water facilities" },
];

const whyChoose = [
  {
    title: "Cutting-Edge Infrastructure",
    desc: "Modern campus with advanced labs, simulation centers, and digital classrooms",
    icon: Star,
  },
  {
    title: "Global Recognition",
    desc: "Degree recognized by WHO, NMC, and other global medical bodies",
    icon: Globe,
  },
  {
    title: "International Faculty",
    desc: "Taught by renowned professors and clinical experts from around the world",
    icon: GraduationCap,
  },
  {
    title: "Advanced Simulation",
    desc: "Hands-on training using state-of-the-art medical simulation technology",
    icon: ShieldCheck,
  },
  {
    title: "Indian Student Support",
    desc: "Comprehensive guidance from application to graduation for Indian aspirants",
    icon: CheckCircle,
  },
  {
    title: "Heart of Tbilisi",
    desc: "Located in Georgia's capital, offering a safe and vibrant urban lifestyle",
    icon: Home,
  },
  {
    title: "Clinical Excellence",
    desc: "Direct clinical exposure in top-tier affiliated hospitals in Georgia",
    icon: BookOpen,
  },
  {
    title: "Affordable Excellence",
    desc: "World-class medical education with a competitive and transparent fee structure",
    icon: IndianRupee,
  },
];

export default function DavidTvildianiMedicalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="David Tvildiani Medical University Fees, Eligibility & Admission Process 2026"
        subtitle="NMC Approved · WHO Recognised · English Medium · Modern Campus"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Premium Medical Education · Tbilisi, Georgia
              </p>
              <ColorfulHeading
                text="David Tvildiani Medical University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                David Tvildiani Medical University (DTMU) is a premier institution
                dedicated to excellence in medical education. Combining modern
                infrastructure with a globally recognized curriculum, DTMU is
                designed to produce the next generation of world-class physicians.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">NMC approval</strong> and{" "}
                <strong className="text-foreground">WHO recognition</strong>,
                DTMU ensures that its graduates are fully eligible to practice
                medicine globally, including returning to India after clearing
                the FMGE/NEXT exams.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "English Medium", "Modern Simulation Hub"].map(
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
                  alt="David Tvildiani Medical University campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top-Tier</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Medical Infrastructure
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

      {/* ── RECOGNITION BAND ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "NMC", sub: "India — National Medical Commission" },
              { label: "WHO", sub: "World Health Organization Listed" },
              { label: "EU", sub: "European Standards of Education" },
              { label: "A+", sub: "Infrastructure Grade" },
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
              text="Why Choose DTMU for Your MBBS?"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From high-tech simulation labs to a supportive community, DTMU
              offers an ideal environment for aspiring doctors.
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
              Transparent pricing with no hidden costs, ensuring a smooth
              financial plan for your medical education.
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
                          $8,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹6,80,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          2nd–5th Year{" "}
                          <span className="text-muted-foreground text-xs">
                            (per year)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $7,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹5,95,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $36,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹3,06,00,000
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
                  label: "Hostel",
                  sub: "Modern on-campus living",
                  usd: "$1,500",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily nutritious meals",
                  usd: "$2,000",
                },
                {
                  label: "Living Expenses",
                  sub: "Transport, personal",
                  usd: "$2,500",
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
                      All-inclusive estimate
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
              DTMU maintains clear and fair admission standards to ensure
              the quality of its medical graduates.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age Requirement",
                desc: "Minimum 17 years as on 31st December of the admission year",
              },
              {
                title: "Academic Qualification",
                desc: "12th standard with min. 50% in Physics, Chemistry & Biology (40% for reserved categories)",
              },
              {
                title: "NEET Qualification",
                desc: "Valid NEET-UG qualification is mandatory for all Indian students",
              },
              {
                title: "Language Proficiency",
                desc: "The medium of instruction is English; no separate proficiency test is typically required",
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
              Getting admitted to DTMU is a seamless process with
              end-to-end support from GVK EduTech.
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
              Ensure you have these documents ready. Our experts will
              assist you with the verification and upload process.
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
                Student Residences
              </p>
              <ColorfulHeading
                text="Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                DTMU provides modern, safe, and comfortable on-campus
                accommodation designed to provide a home-away-from-home
                experience for international students.
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
                  alt="Modern Hostel room"
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
                  alt="Tbilisi City center"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Georgian architecture"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Experiencing Georgia
              </p>
              <ColorfulHeading
                text="Student Life in Tbilisi"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Living in Tbilisi, the capital of Georgia, offers an
                unforgettable blend of ancient history and modern
                Europeanism. It is a student-friendly city with a
                warm atmosphere and a low cost of living.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the safest cities in Europe for international students",
                  "Highly affordable living costs compared to Western Europe",
                  "Rich cultural heritage, breathtaking landscapes, and museums",
                  "English is widely spoken among the youth and in tourism",
                  "Thriving community of Indian and international medical students",
                  "Easy connectivity to India via major flight hubs",
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
              text="Key Advantages of Studying at DTMU"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET qualification — no separate university test",
              },
              {
                title: "Zero Donation",
                desc: "Completely transparent fees, no capitation or management quotas",
              },
              {
                title: "Integrated Coaching",
                desc: "Academic support focused on clearing NEXT and FMGE exams",
              },
              {
                title: "Diverse Peer Group",
                desc: "Study alongside students from across the globe",
              },
              {
                title: "Modern Labs",
                desc: "Hands-on training in cutting-edge medical laboratories",
              },
              {
                title: "Global Degree",
                desc: "Qualification recognized across the EU and other major countries",
              },
              {
                title: "Diverse PG Options",
                desc: "Pathway to specialization in USA, UK, and Germany",
              },
              {
                title: "GVK Expert Support",
                desc: "Full assistance with visa, travel, and on-campus settlement",
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
            Begin Your Medical Career at David Tvildiani Medical University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join a community of future doctors in one of Georgia's most advanced
            medical schools. Our experts are here to help you every step of the way.
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
