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
  Trophy,
  Building2,
  Plane,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Astana Medical University NMC approved?",
    answer:
      "Yes. Astana Medical University (AMU) is recognised by the National Medical Commission (NMC) of India, listed with the World Health Organization (WHO), and registered with FAIMER and the WFME. Indian graduates are eligible to appear for FMGE / NExT and practise medicine in India after completing their MBBS at AMU.",
  },
  {
    question: "What is the duration of MBBS at Astana Medical University?",
    answer:
      "The MBBS programme at AMU is 6 years in total — 5 years of academic and clinical training followed by a 1-year compulsory internship. Clinical rotations begin from year 3 in the university's multi-speciality teaching hospitals in Astana.",
  },
  {
    question: "What is the total MBBS fee at Astana Medical University for Indian students?",
    answer:
      "The total MBBS fee at AMU for the full 6-year programme is approximately USD 22,000–25,000 (about ₹19–22 lakh). This includes tuition fees, hostel accommodation and basic living support. There is no donation or capitation fee — the fee structure is fixed and transparent.",
  },
  {
    question: "Is NEET required for MBBS admission at AMU?",
    answer:
      "Yes. NEET-UG qualification is mandatory for all Indian students applying to Astana Medical University, as per the latest NMC guidelines. NEET is required to be eligible for FMGE / NExT in India after graduation.",
  },
  {
    question: "What is the medium of instruction at Astana Medical University?",
    answer:
      "The entire MBBS programme at AMU is taught in English, which makes it easy for Indian students to follow the curriculum. Basic Kazakh language classes are offered alongside so that students can comfortably interact with local patients during clinical rotations.",
  },
  {
    question: "Does Astana Medical University provide hostel and Indian food?",
    answer:
      "Yes. AMU has separate, secure hostels for boys and girls within the campus. Indian mess facilities — both vegetarian and non-vegetarian — are available, so Indian students can enjoy home-style meals throughout their MBBS in Kazakhstan journey.",
  },
  {
    question: "Can I do postgraduate studies after MBBS at Astana Medical University?",
    answer:
      "Yes. After MBBS at AMU, Indian students can appear for FMGE / NExT to practise in India, or pursue postgraduate studies (MD / MS / PG Diploma) in Kazakhstan, USA, UK, Germany, Australia and other countries after clearing the respective licensing exams such as USMLE, PLAB or AMC.",
  },
  {
    question: "Is Kazakhstan safe for Indian students?",
    answer:
      "Kazakhstan is one of the safest and most welcoming countries in Central Asia for international students. Astana — the capital city — is modern, well-planned, and has a large Indian student community, Indian restaurants, grocery stores and cultural associations that make students feel at home.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill the GVK EduTech enquiry form with your academic details, NEET score and passport details",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Astana Medical University issues an admission letter within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay First-Year Fees",
    desc: "Confirm your seat by remitting the tuition + hostel fee directly to the university account",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "Submit your Kazakhstan student visa application with university documents — GVK assists end-to-end",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Book flights from India to Astana — GVK EduTech provides full travel and airport pickup support",
    icon: Plane,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Report to the AMU campus, complete registration and start your MBBS journey in Kazakhstan",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (minimum 18 months validity)",
  "10th Mark Sheet & Passing Certificate",
  "12th Mark Sheet & Passing Certificate",
  "NEET Score Card (current year)",
  "Passport-Size Photographs (10 copies, white background)",
  "Birth Certificate (English translation)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Health Insurance",
  "Bank Statement (Father / Guardian — last 6 months)",
  "Admission Letter from Astana Medical University",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls inside the campus" },
  { icon: Users, label: "Fully furnished rooms on twin-sharing basis" },
  { icon: Utensils, label: "Indian mess serving veg & non-veg meals daily" },
  { icon: Wifi, label: "High-speed WiFi in every hostel block" },
  { icon: ShieldCheck, label: "24/7 security, CCTV and biometric entry" },
  { icon: Clock, label: "Laundry, hot water and central heating" },
];

const whyChoose = [
  {
    title: "NMC, WHO & WFME Approved",
    desc: "Recognised by NMC India, WHO, FAIMER and WFME — your MBBS degree is accepted worldwide",
    icon: ShieldCheck,
  },
  {
    title: "Affordable MBBS Fees",
    desc: "Complete 6-year MBBS at approx. ₹19–22 lakh — far lower than Indian private medical colleges",
    icon: IndianRupee,
  },
  {
    title: "No Donation / Capitation",
    desc: "100% transparent admission — no hidden charges, no capitation fees of any kind",
    icon: Star,
  },
  {
    title: "English Medium MBBS",
    desc: "Full MBBS course taught in English from day one — no language barrier for Indian students",
    icon: Globe,
  },
  {
    title: "Indian Mess on Campus",
    desc: "Dedicated Indian mess with vegetarian and non-vegetarian meals prepared by Indian chefs",
    icon: Utensils,
  },
  {
    title: "Capital-City Location",
    desc: "Located in Astana — Kazakhstan's modern, well-connected capital with direct flights from India",
    icon: Building2,
  },
  {
    title: "Clinical Training in Top Hospitals",
    desc: "Clinical rotations in multi-speciality National Hospitals and research centres in Astana",
    icon: BookOpen,
  },
  {
    title: "Safe & Welcoming City",
    desc: "Astana is one of the safest student cities in Central Asia with a large Indian community",
    icon: CheckCircle,
  },
];

export default function AstanaMedicalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Astana Medical University — MBBS 2026"
        subtitle="NMC Approved · WHO Listed · English Medium · Affordable Fees · Capital-City Campus"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1964 · Astana, Kazakhstan
              </p>
              <ColorfulHeading
                text="Astana Medical University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                <strong className="text-foreground">Astana Medical University (AMU)</strong> is one of the
                most prestigious and oldest medical universities in Kazakhstan, located in the
                capital city of Astana. With over 60 years of excellence in medical education,
                AMU is a top choice for Indian students seeking an affordable, NMC-approved
                MBBS programme abroad.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Recognised by the <strong className="text-foreground">National Medical Commission (NMC)</strong>,
                the <strong className="text-foreground">World Health Organization (WHO)</strong>,
                FAIMER and WFME, AMU graduates are eligible to appear for{" "}
                <strong className="text-foreground">FMGE / NExT</strong> and practise medicine in India.
                The university offers a fully English-medium MBBS programme with modern
                infrastructure, experienced faculty and strong clinical exposure.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "WFME Accredited", "FAIMER Recognised", "English Medium"].map(
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
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&auto=format&fit=crop"
                  alt="Astana Medical University campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">60+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of medical excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">5000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    International students
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
              { label: "WFME", sub: "World Federation for Medical Education" },
              { label: "FAIMER", sub: "Foundation for Advancement in Medical Education" },
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
              text="Why Indian Students Choose AMU"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From affordable tuition in Kazakhstan's capital to excellent clinical training,
              Astana Medical University checks every box for Indian medical aspirants.
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
              text="AMU World Ranking & Reputation"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Astana Medical University is consistently ranked among the top medical
              universities in Kazakhstan and Central Asia.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { rank: "#3500+", source: "Webometrics World Ranking" },
              { rank: "Top 10", source: "Medical Universities in Kazakhstan" },
              { rank: "Top 100", source: "Medical Universities in Asia" },
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
              text="Astana Medical University MBBS Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most affordable NMC-approved MBBS programmes in Central Asia —
              no hidden charges, no donation, no capitation fee.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    MBBS Tuition Fee Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Particulars
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
                          Tuition Fee (1st Year)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $5,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹4,25,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Tuition Fee (2nd–6th Year){" "}
                          <span className="text-muted-foreground text-xs">
                            (per year)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $3,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹2,97,500
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Hostel Fee (per year)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $700
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹59,500
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Indian Mess / Food (per year)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $1,200
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹1,02,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~$25,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~₹21,25,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Hostel & mess fees are
                    indicative — final figure confirmed at admission.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                What's Included
              </p>
              {[
                {
                  label: "Tuition Fees",
                  sub: "Complete 6-year MBBS",
                  usd: "Included",
                },
                {
                  label: "On-Campus Hostel",
                  sub: "Furnished twin-sharing room",
                  usd: "$700/yr",
                },
                {
                  label: "Indian Mess",
                  sub: "Veg & non-veg meals daily",
                  usd: "$1,200/yr",
                },
                {
                  label: "Medical Insurance",
                  sub: "Health cover for 6 years",
                  usd: "Included",
                },
                {
                  label: "Airport Pickup",
                  sub: "Astana airport transfer",
                  usd: "Free",
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
                      Total 6-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$25,000</p>
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
              text="Eligibility Criteria for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear, straightforward requirements — only NEET-UG is mandatory, no separate
              entrance exam for AMU.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age Requirement",
                desc: "Minimum 17 years as on 31st December of the admission year. No upper age limit as per NMC.",
              },
              {
                title: "Academic Qualification",
                desc: "12th standard with minimum 50% in Physics, Chemistry and Biology (40% for SC / ST / OBC).",
              },
              {
                title: "NEET-UG Mandatory",
                desc: "Valid NEET-UG scorecard is compulsory for all Indian students applying for MBBS abroad.",
              },
              {
                title: "English Proficiency",
                desc: "No IELTS / TOEFL required — the MBBS course is taught entirely in English at AMU.",
              },
              {
                title: "Valid Passport",
                desc: "Indian passport with minimum 18 months validity at the time of visa application.",
              },
              {
                title: "Medical Fitness",
                desc: "Good physical and mental health, supported by a medical fitness certificate and HIV test report.",
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
              text="Astana Medical University Admission Process 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward six-step journey from application to your first day at
              Astana Medical University in Kazakhstan.
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
              text="Required Documents for MBBS Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these documents before applying — GVK EduTech will verify, attest and
              help you with the entire submission process.
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
                text="Hostel & Mess Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Astana Medical University's on-campus hostels are safe, modern and built
                with international students in mind — featuring separate wings for boys
                and girls, dedicated Indian mess facilities, 24/7 security and high-speed
                WiFi so that Indian students feel completely at home.
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
                  alt="AMU hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="AMU hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN KAZAKHSTAN ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=400&auto=format&fit=crop"
                  alt="Astana city skyline"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=400&auto=format&fit=crop"
                  alt="Kazakhstan landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Astana
              </p>
              <ColorfulHeading
                text="Student Life in Kazakhstan"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Astana is Kazakhstan's futuristic capital — a planned, modern city with
                iconic architecture, international cuisine, malls, museums and a thriving
                student community. Indian students enjoy a safe, affordable and enriching
                environment with direct flight connectivity from New Delhi and other
                major Indian cities.
              </p>
              <ul className="space-y-3">
                {[
                  "Safe and welcoming capital city for international students",
                  "Direct flights from New Delhi to Astana in ~4 hours",
                  "Affordable cost of living compared to Europe and Russia",
                  "Modern infrastructure, malls, museums and public transport",
                  "Indian restaurants, grocery stores and cultural associations",
                  "Vibrant Indian student community at AMU and across Astana",
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
              text="Advantages of Studying MBBS at AMU"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Astana Medical University combines capital-city infrastructure, internationally
              recognised degrees and affordable fees — a smart choice for Indian medical
              aspirants in 2026.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based purely on NEET score — no separate AMU entrance test",
                icon: FileText,
              },
              {
                title: "No Donation / Capitation",
                desc: "Transparent fee structure — pay only the published tuition + hostel fee",
                icon: Star,
              },
              {
                title: "FMGE / NExT Coaching",
                desc: "Integrated coaching and mentoring to help clear FMGE / NExT in India",
                icon: Trophy,
              },
              {
                title: "International Exposure",
                desc: "Study alongside peers from 25+ countries — global classroom experience",
                icon: Globe,
              },
              {
                title: "Modern Clinical Training",
                desc: "Rotations in Astana's National Hospitals and multi-speciality centres",
                icon: BookOpen,
              },
              {
                title: "Affordable Total Cost",
                desc: "Complete MBBS at ~₹21 lakh — far below Indian private medical colleges",
                icon: IndianRupee,
              },
              {
                title: "Global PG Pathways",
                desc: "Eligible for PG in USA, UK, Germany, Australia and Canada after licensing exams",
                icon: GraduationCap,
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end visa, travel, forex & pre-departure assistance from Hyderabad",
                icon: ShieldCheck,
              },
            ].map((adv, i) => {
              const Icon = adv.icon;
              return (
                <Card
                  key={i}
                  className="border border-border/60 hover:border-accent/40 transition-colors duration-200"
                >
                  <CardContent className="p-5">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {adv.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
              Answers to the most common questions Indian students ask about Astana
              Medical University and MBBS in Kazakhstan.
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

      {/* ── APPLY NOW CTA ─────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open · Limited Seats
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your MBBS Journey at Astana Medical University, Kazakhstan
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Secure your seat at one of Kazakhstan's most reputed NMC-approved medical
            universities. Our expert Hyderabad-based counsellors will guide you through
            the entire process — from application to your first day on campus.
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
            <Button
              asChild
              size="xl"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C%20I%20want%20to%20know%20more%20about%20MBBS%20at%20Astana%20Medical%20University%2C%20Kazakhstan.">
                WhatsApp Counselor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ────────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
            Explore More
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/", label: "Homepage" },
              { href: "/mbbs/kazakhstan", label: "MBBS in Kazakhstan" },
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