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
    question: "Is Osh State University NMC approved?",
    answer:
      "Yes, Osh State University is recognized by the National Medical Commission (NMC) of India and listed with the World Health Organization (WHO). Indian graduates are eligible to appear for FMGE / NExT and practice medicine in India after completing the required screening test.",
  },
  {
    question: "What is the duration of MBBS at Osh State University?",
    answer:
      "The MBBS program at Osh State University runs for 6 years — 5 years of classroom and clinical training followed by 1 year of compulsory internship. The internship can be completed in Kyrgyzstan or in India, subject to NMC guidelines.",
  },
  {
    question: "Is NEET compulsory for MBBS admission at Osh State University?",
    answer:
      "Yes. As per the NMC's latest regulations, every Indian student planning to study MBBS abroad must qualify NEET-UG in the year of admission. NEET is mandatory even for Osh State's English-medium MBBS program.",
  },
  {
    question: "What is the medium of instruction at Osh State University?",
    answer:
      "The full MBBS course at Osh State University is taught in English for international students, making it a popular choice among Indian medical aspirants. Basic Russian/Kyrgyz language classes are included to help students during clinical rotations with local patients.",
  },
  {
    question: "What is the total MBBS fee at Osh State University for Indian students?",
    answer:
      "The complete MBBS fee at Osh State University for the 6-year program is approximately USD 16,000–20,000 (around INR 13–17 lakh). This is one of the most affordable NMC-approved MBBS options for Indian students and includes tuition, hostel and basic living support.",
  },
  {
    question: "How safe is Osh for Indian students studying at Osh State University?",
    answer:
      "Osh, the second-largest city in Kyrgyzstan, is considered one of the safest student cities in Central Asia. The city has a growing Indian student community, dedicated Indian hostels and messes, 24/7 security, and a warm, welcoming culture for international students.",
  },
  {
    question: "Is there Indian food available at Osh State University hostels?",
    answer:
      "Yes. The hostels attached to Osh State University have an Indian mess run by experienced Indian cooks. Both vegetarian and non-vegetarian options are available daily, with a menu that suits Indian taste preferences — making it feel like home away from home.",
  },
  {
    question: "Can I pursue PG (postgraduate) after MBBS from Osh State University?",
    answer:
      "Absolutely. Osh State University's degree is recognized globally, so graduates can apply for PG in India (after FMGE/NExT), USA (after USMLE), UK (after PLAB), Germany, Australia and other countries. Many alumni have built successful medical careers across the world.",
  },
  {
    question: "Does GVK EduTech help with the Osh State University admission and visa process?",
    answer:
      "Yes. GVK EduTech is an authorized admission partner for Osh State University. We provide end-to-end support — from counselling, application, offer letter, fee remittance, visa filing and travel to airport pickup and on-campus orientation in Osh.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill the GVK EduTech enquiry form with your 12th marks, NEET score and personal details",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Get your official admission / invitation letter from Osh State University within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Remit the first-year tuition and hostel fees as per the Osh State University fee structure",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Visa",
    desc: "We assist with the Kyrgyz student visa — documentation, file preparation and submission",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights",
    desc: "Fly to Osh International Airport — convenient connections from India via Bishkek or direct routes",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin MBBS at Osh State",
    desc: "GVK EduTech team handles airport pickup, hostel allotment and university registration",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (minimum 18 months validity)",
  "10th Mark Sheet & Passing Certificate",
  "12th Mark Sheet & Passing Certificate",
  "NEET-UG Score Card (current year)",
  "Passport Size Photographs (white background, 10 copies)",
  "Birth Certificate (in English)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate with HIV Report",
  "Travel & Health Insurance",
  "Bank Statement of Parent / Guardian (last 6 months)",
  "Admission / Invitation Letter from Osh State University",
  "Affidavit of Financial Support",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls with 24/7 wardens" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing) with attached furniture" },
  { icon: Utensils, label: "Indian mess — veg and non-veg meals prepared by Indian cooks" },
  { icon: Wifi, label: "High-speed Wi-Fi and study rooms in every hostel block" },
  { icon: ShieldCheck, label: "Round-the-clock security, CCTV and biometric entry" },
  { icon: Clock, label: "Central heating, hot water, laundry and cleaning services" },
];

const whyChoose = [
  {
    title: "70+ Years of Legacy",
    desc: "Founded in 1954 — one of the oldest and most reputed universities in Southern Kyrgyzstan",
    icon: Star,
  },
  {
    title: "Most Affordable MBBS",
    desc: "Complete 6-year MBBS starting at approx. ₹13 lakh — among the lowest in the world",
    icon: IndianRupee,
  },
  {
    title: "No Donation / Capitation",
    desc: "Transparent admission process — pay only the official university fee, nothing extra",
    icon: ShieldCheck,
  },
  {
    title: "100% English Medium",
    desc: "Full MBBS syllabus taught in English for the entire 6-year duration",
    icon: Globe,
  },
  {
    title: "Indian Mess & Hostel",
    desc: "Dedicated Indian hostels with home-style veg and non-veg meals every day",
    icon: Utensils,
  },
  {
    title: "Growing Indian Community",
    desc: "Increasing number of Indian students studying — easy to settle in and make friends",
    icon: Users,
  },
  {
    title: "NMC / WHO Approved",
    desc: "Eligible to appear for FMGE / NExT in India and pursue PG anywhere in the world",
    icon: GraduationCap,
  },
  {
    title: "Strategic Location",
    desc: "Osh is the commercial hub of Kyrgyzstan with excellent infrastructure and connectivity",
    icon: CheckCircle,
  },
];

const ranking = [
  { label: "Country Rank", value: "#2" },
  { label: "NMC", value: "Approved" },
  { label: "WHO", value: "Listed" },
  { label: "FAIMER", value: "Listed" },
  { label: "MCI", value: "Recognised" },
  { label: "Founded", value: "1954" },
];

export default function OshStateUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Osh State University — MBBS 2026"
        subtitle="NMC Approved · WHO Recognised · English Medium · Lowest MBBS Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1954 · Osh, Kyrgyzstan
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                Osh State University for Indian Students 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                <strong className="text-foreground">Osh State University</strong> (OSU) is one of the
                largest and oldest universities in Kyrgyzstan, located in the historic city of Osh —
                the southern capital and commercial hub of the country. It is a premier choice for
                Indian students seeking affordable, NMC-approved MBBS abroad.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With a globally recognized degree, fully English-medium instruction, and a
                total 6-year fee starting from around <strong className="text-foreground">₹13 lakh</strong>,
                Osh State University offers Indian students an excellent combination of quality,
                affordability and global career opportunities.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "FAIMER", "English Medium", "Est. 1954"].map(
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

              <div className="flex gap-4 flex-wrap">
                <Button asChild size="lg" variant="accent">
                  <Link href="/apply">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Free Counseling</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/mbbs/kyrgyzstan">MBBS in Kyrgyzstan</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600&auto=format&fit=crop"
                  alt="Osh State University campus in Osh"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">70+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">3000+</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {ranking.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-white/80 text-xs mt-1 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE OSH STATE ───────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Osh State University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From low MBBS fees to English-medium classes and a growing Indian student
              community, Osh State University checks every box for Indian medical aspirants.
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

      {/* ── RECOGNITION & WORLD RANKING ──────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Global Recognition
              </p>
              <ColorfulHeading
                text="Recognition & World Ranking"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Osh State University is one of the most recognized universities in Kyrgyzstan.
                Its MBBS degree is accepted by the NMC (India), WHO, FAIMER, ECFMG (USA) and
                several other international medical councils — making it a safe and globally
                accepted qualification for Indian students.
              </p>
              <ul className="space-y-3">
                {[
                  "Listed with the World Health Organization (WHO)",
                  "Approved by the National Medical Commission (NMC), India",
                  "Recognised by FAIMER and listed in the World Directory of Medical Schools",
                  "Eligible for ECFMG certification — students can appear for USMLE",
                  "Accepted by medical councils of UK, Australia, Canada and the EU",
                  "Ranked among the top universities in Kyrgyzstan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-2 border-accent/30">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent">#2</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      University in Kyrgyzstan
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">1954</p>
                    <p className="text-sm text-muted-foreground mt-1">Established</p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">25000+</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Students Enrolled
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/30">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent">30+</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Countries Represented
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MBBS FEES ───────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Osh State University MBBS Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Among the most affordable NMC-approved MBBS programs in the world —
              no hidden charges, no capitation fees, no donation.
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
                        <td className="px-6 py-4 text-foreground">1st Year</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $3,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹2,97,500
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
                          $3,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹2,55,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $16,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹13,60,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Hostel + mess extra.
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
                  sub: "On-campus shared room",
                  usd: "$600",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily veg / non-veg meals",
                  usd: "$1,000",
                },
                {
                  label: "Living Expenses",
                  sub: "Travel, books, personal",
                  usd: "$1,000",
                },
              ].map((item) => (
                <Card key={item.label} className="border border-border/60">
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
                  <p className="text-lg font-bold text-accent">~$24,000</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Want a country-level fee comparison? See our complete guide to{" "}
            <Link
              href="/mbbs/kyrgyzstan"
              className="text-accent font-semibold hover:underline"
            >
              MBBS in Kyrgyzstan fees for 2026
            </Link>
            .
          </p>
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
              Clear, straightforward requirements — no entrance exam beyond NEET.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age",
                desc: "Minimum 17 years as on 31st December of the admission year. No upper age limit.",
              },
              {
                title: "Academics",
                desc: "12th standard with min. 50% in Physics, Chemistry & Biology (40% for SC/ST/OBC)",
              },
              {
                title: "NEET",
                desc: "NEET-UG qualification is mandatory for Indian students applying for MBBS abroad",
              },
              {
                title: "English",
                desc: "No IELTS / TOEFL required — Osh State teaches the full MBBS course in English",
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
              text="Osh State University Admission Process for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A simple, six-step journey from your application form to your first day at
              the Osh State University campus.
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
              text="Documents Required for Osh State University Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before you apply — the GVK EduTech team will
              verify and submit each one on your behalf.
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

      {/* ── HOSTEL FACILITIES ───────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Osh State University Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Osh State University's on-campus hostels are designed with Indian students
                in mind — with separate wings for boys and girls, dedicated Indian mess,
                24/7 security and central heating for the cold Kyrgyz winters.
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
                  alt="Osh State University hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Osh State University hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN OSH ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&auto=format&fit=crop"
                  alt="Osh city view"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Kyrgyzstan mountains"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Osh
              </p>
              <ColorfulHeading
                text="Student Life in Kyrgyzstan"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Osh is the second-largest city in Kyrgyzstan and a major commercial hub.
                Known as the "Southern Capital," it offers a vibrant student life with
                affordable living costs, welcoming locals, and a growing international
                student community. Indian students find it easy to settle in and thrive.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the most affordable student cities in Central Asia",
                  "Low cost of living — meals, transport and shopping cost a fraction of Europe",
                  "Strategic location — gateway to the Fergana Valley and Central Asia",
                  "Active Indian student associations and cultural events",
                  "Easy connectivity with flights via Bishkek from major Indian cities",
                  "English widely understood in and around the university",
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
              text="Advantages of Studying MBBS at Osh State University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Osh State University stands out as one of the most trusted Kyrgyz universities
              for Indian MBBS aspirants — here is why.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "No Entrance Exam",
                desc: "Admission based on NEET score and 12th marks — no separate entrance test",
              },
              {
                title: "No Donation",
                desc: "Transparent fee structure — no capitation, no hidden charges",
              },
              {
                title: "FMGE / NExT Coaching",
                desc: "Integrated preparation for Indian medical licensing exams",
              },
              {
                title: "International Exposure",
                desc: "Study alongside peers from 30+ countries in a multicultural campus",
              },
              {
                title: "Early Clinical Exposure",
                desc: "Hospital rotations begin from the 3rd year at OSU-affiliated hospitals",
              },
              {
                title: "Global PG Pathways",
                desc: "Eligible for PG in USA, UK, Germany, Australia after licensing exams",
              },
              {
                title: "Indian Hostel & Mess",
                desc: "Home-style food, separate hostels, Indian wardens and 24/7 support",
              },
              {
                title: "End-to-End Support",
                desc: "GVK EduTech handles admission, visa, travel and on-arrival orientation",
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
              Everything Indian students and parents ask about Osh State University, Osh
              and the MBBS admission process.
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

      {/* ── APPLY NOW CTA ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Apply Now for MBBS at Osh State University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Talk to our Kyrgyzstan MBBS experts today. Get a free profile evaluation,
            complete fee breakdown, and end-to-end admission support from the{" "}
            <Link
              href="/about"
              className="underline underline-offset-4 hover:text-white"
            >
              team at GVK EduTech
            </Link>
            .
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
                Book Free Counseling
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── RELATED LINKS ────────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
            Continue Exploring
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/mbbs/kyrgyzstan", label: "MBBS in Kyrgyzstan" },
              { href: "/partner-universities", label: "All Partner Universities" },
              { href: "/", label: "Homepage" },
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