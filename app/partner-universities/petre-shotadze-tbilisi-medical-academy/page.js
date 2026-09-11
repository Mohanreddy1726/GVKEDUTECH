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
    question: "Is Petre Shotadze Tbilisi Medical Academy NMC approved?",
    answer:
      "Yes, Petre Shotadze Tbilisi Medical Academy is recognized by the National Medical Commission (NMC) of India and WHO. Indian students can appear for FMGE/NEXT after completing their MBBS degree.",
  },
  {
    question: "What is the duration of MBBS at Petre Shotadze Tbilisi Medical Academy?",
    answer:
      "The MBBS program is 6 years in duration, including clinical rotations and practical training in Georgia.",
  },
  {
    question: "Is NEET required for admission?",
    answer:
      "Yes, NEET-UG qualification is mandatory for all Indian students seeking admission to any medical university abroad, including Petre Shotadze Tbilisi Medical Academy.",
  },
  {
    question: "What is the medium of instruction?",
    answer:
      "The entire MBBS course is taught in English. Students also learn the local Georgian language to facilitate clinical interactions with patients.",
  },
  {
    question: "Can I work while studying in Georgia?",
    answer:
      "Students are generally allowed to work part-time (up to 20 hours/week), but the medical curriculum is rigorous, and we recommend focusing on your studies.",
  },
  {
    question: "What is the total cost of MBBS at Petre Shotadze Tbilisi Medical Academy?",
    answer:
      "The total cost, including tuition, hostel, and living expenses, is highly competitive and affordable compared to private colleges in India.",
  },
  {
    question: "How is the food and accommodation for Indian students?",
    answer:
      "The academy provides safe and comfortable hostels with Indian mess facilities, offering vegetarian and non-vegetarian options.",
  },
  {
    question: "Can I pursue PG in other countries after graduating?",
    answer:
      "Yes, the degree is globally recognized, allowing graduates to pursue postgraduate studies in the USA, UK, Germany, and other countries after clearing the required licensing exams.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill out the online application form and upload your academic credentials",
    icon: FileText,
  },
  {
    step: 2,
    title: "Document Verification",
    desc: "Our team reviews your academic records and NEET qualification",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Receive Offer Letter",
    desc: "Get your official admission letter from the academy",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Pay Tuition Fees",
    desc: "Confirm your enrollment by paying the required first-year fees",
    icon: IndianRupee,
  },
  {
    step: 5,
    title: "Visa Processing",
    desc: "Apply for the Georgian student visa with our end-to-end support",
    icon: Globe,
  },
  {
    step: 6,
    title: "Travel to Georgia",
    desc: "Book your flights and start your medical journey in Tbilisi",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (minimum 18 months validity)",
  "10th Standard Mark Sheet & Certificate",
  "12th Standard Mark Sheet & Certificate",
  "NEET-UG Score Card",
  "Passport Size Photographs (10-15 copies)",
  "Birth Certificate",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV/Hepatitis Test Report",
  "Travel Insurance",
  "Bank Statement (Guardian's proof of funds)",
  "Academy Admission Letter",
];

const hostelFeatures = [
  { icon: Home, label: "Safe & secure on-campus hostels" },
  { icon: Users, label: "Comfortable shared rooms with amenities" },
  { icon: Utensils, label: "Dedicated Indian mess with veg options" },
  { icon: Wifi, label: "High-speed internet connectivity" },
  { icon: ShieldCheck, label: "24/7 security and surveillance" },
  { icon: Clock, label: "Laundry and heating facilities" },
];

const whyChoose = [
  {
    title: "High Academic Standards",
    desc: "Renowned for its rigorous medical training and experienced faculty members",
    icon: Star,
  },
  {
    title: "Affordable Education",
    desc: "Quality MBBS education at a fraction of the cost of private Indian colleges",
    icon: IndianRupee,
  },
  {
    title: "NMC & WHO Recognized",
    desc: "Globally recognized degree ensuring eligibility for FMGE/NEXT and PG worldwide",
    icon: ShieldCheck,
  },
  {
    title: "English Medium Curriculum",
    desc: "Complete course delivered in English for ease of learning for international students",
    icon: Globe,
  },
  {
    title: "Modern Infrastructure",
    desc: "Advanced laboratories and clinical training facilities for hands-on experience",
    icon: GraduationCap,
  },
  {
    title: "Safe Living Environment",
    desc: "Located in Tbilisi, one of the safest and most welcoming cities in Europe",
    icon: CheckCircle,
  },
  {
    title: "Clinical Exposure",
    desc: "Extensive practical training in affiliated hospitals from early years",
    icon: BookOpen,
  },
  {
    title: "Expert Guidance",
    desc: "End-to-end support from GVK EduTech for admission, visa, and travel",
    icon: ArrowRight,
  },
];

export default function PetreShotadzeTbilisiMedicalAcademyPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Petre Shotadze Tbilisi Medical Academy Fees, Eligibility & Admission Process 2026"
        subtitle="NMC Approved · WHO Recognised · English Medium · Affordable Tuition"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1562774053-702739656662?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Excellence in Medical Education · Tbilisi, Georgia
              </p>
              <ColorfulHeading
                text="Petre Shotadze Tbilisi Medical Academy"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Petre Shotadze Tbilisi Medical Academy is a premier institution for
                medical aspirants seeking a global career in healthcare. Located in the
                heart of Tbilisi, Georgia, it offers a perfect blend of traditional
                medical wisdom and modern clinical practices.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">NMC approval</strong> and{" "}
                <strong className="text-foreground">WHO recognition</strong>, the academy
                ensures that its graduates are well-prepared to excel in medical licensing
                exams like FMGE/NEXT and practice medicine globally.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "English Medium", "Affordable Fees"].map(
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
                  src="https://images.unsplash.com/photo-1562774053-702739656662?w=600&auto=format&fit=crop"
                  alt="Petre Shotadze Tbilisi Medical Academy campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Global</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Recognition
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
              { label: "Ranked", sub: "Top-tier Medical Institution in Georgia" },
              { label: "EU", sub: "European Standards of Education" },
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
              text="Why Choose Petre Shotadze Tbilisi Medical Academy?"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class faculty to a student-friendly environment, the academy
              is designed to nurture the next generation of doctors.
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
              Competitive pricing for world-class education, making high-quality
              medical degrees accessible to all.
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
                          2nd–6th Year
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          Competitive
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          Competitive
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total Estimate
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          Affordable
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          Affordable
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Please contact our counselors for the exact updated fee structure.
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
                  sub: "Safe campus accommodation",
                  usd: "Affordable",
                },
                {
                  label: "Indian Mess",
                  sub: "Veg/Non-veg meal plans",
                  usd: "Affordable",
                },
                {
                  label: "Living Expenses",
                  sub: "Transport, personal costs",
                  usd: "Affordable",
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
                      Total Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">Competitive</p>
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
              Simple requirements for students dedicated to the field of medicine.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age",
                desc: "Minimum 17 years of age by December 31st of the admission year",
              },
              {
                title: "Academic Qualification",
                desc: "10+2 with Biology, Physics, and Chemistry with min. 50% aggregate",
              },
              {
                title: "NEET Requirement",
                desc: "Qualifying NEET-UG is mandatory for all Indian students",
              },
              {
                title: "English Proficiency",
                desc: "No separate test required; course is taught in English",
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
              A streamlined process to help you transition from your home to the
              medical academy in Georgia.
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
              Ensure you have these documents ready. GVK EduTech provides a full
              checklist and verification service.
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
                Student Living
              </p>
              <ColorfulHeading
                text="Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The academy's accommodation is designed to feel like a home away
                from home, ensuring students have a peaceful and supportive
                environment for their studies.
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
                Living in Tbilisi
              </p>
              <ColorfulHeading
                text="A Vibrant Student City"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Studying in Tbilisi offers students a unique opportunity to experience
                a blend of ancient culture and modern European living. It is an
                ideal location for international students.
              </p>
              <ul className="space-y-3">
                {[
                  "One of Europe's most welcoming cities for international students",
                  "Low cost of living compared to Western Europe",
                  "Safe, clean, and culturally rich environment",
                  "English widely spoken in tourist and academic areas",
                  "Strong community of Indian medical students",
                  "Direct connectivity to major Indian cities",
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
              text="Advantages of Petre Shotadze Tbilisi Medical Academy"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET scores — no additional university test",
              },
              {
                title: "No Donation Fee",
                desc: "Completely transparent admission process with no capitation",
              },
              {
                title: "FMGE/NEXT Focus",
                desc: "Curriculum aligned with licensing exams for Indian returnees",
              },
              {
                title: "Cultural Diversity",
                desc: "Interact with students from across the globe",
              },
              {
                title: "Hands-on Training",
                desc: "Early clinical exposure in affiliated medical centers",
              },
              {
                title: "EU Recognized",
                desc: "Degrees aligned with European medical education standards",
              },
              {
                title: "Global Opportunities",
                desc: "Pathway to PG in USA, UK, and other leading nations",
              },
              {
                title: "Complete Support",
                desc: "GVK EduTech provides support from application to landing",
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
            Start Your Medical Journey at Petre Shotadze Tbilisi Medical Academy
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors are ready to help you navigate the admission
            process and ensure a smooth transition to Georgia.
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
