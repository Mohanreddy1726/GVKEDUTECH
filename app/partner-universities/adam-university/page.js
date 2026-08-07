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
  Award,
  Building2,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Adam University (Medical Faculty) NMC approved?",
    answer:
      "Yes. Adam University is recognised by the National Medical Commission (NMC) of India and listed with the World Health Organization (WHO). Indian graduates of Adam University's Medical Faculty are eligible to appear for the FMGE / NExT screening exam and practise medicine in India after completing the required licensing process.",
  },
  {
    question: "What is the duration of MBBS at Adam University?",
    answer:
      "The MBBS program at Adam University runs for 6 years in total — 5 years of classroom, pre-clinical and clinical learning followed by 1 year of compulsory rotatory internship. The internship can be completed in Kyrgyzstan or in India, subject to the latest NMC guidelines and university approval.",
  },
  {
    question: "Is NEET compulsory for MBBS admission at Adam University?",
    answer:
      "Yes. As per the latest NMC regulations, every Indian student planning to study MBBS abroad must qualify NEET-UG in the year of admission. NEET qualification is mandatory even for the English-medium MBBS program at Adam University Medical Faculty.",
  },
  {
    question: "What is the medium of instruction at Adam University?",
    answer:
      "The complete MBBS course at Adam University Medical Faculty is taught in English for international students, making it a strong pick for Indian medical aspirants. Basic Russian / Kyrgyz language classes are included to help students during clinical rotations and everyday communication with local patients.",
  },
  {
    question: "What is the total MBBS fee at Adam University for Indian students?",
    answer:
      "The approximate total MBBS fee at Adam University Medical Faculty for the 6-year program is around USD 18,000–22,000 (approximately INR 15–19 lakh). This makes it one of the most affordable NMC-approved MBBS destinations for Indian students and covers tuition across the full English-medium program. Hostel and mess charges are additional.",
  },
  {
    question: "Where is Adam University located? Is it safe for Indians?",
    answer:
      "Adam University is located in Bishkek, the capital city of Kyrgyzstan. Bishkek is widely regarded as one of the safest student capitals in Central Asia with a steadily growing Indian community, dedicated Indian hostels and messes, 24/7 security in campus accommodation and a warm, welcoming culture for international students.",
  },
  {
    question: "Is Indian food available at Adam University hostels?",
    answer:
      "Yes. The hostels attached to Adam University run a dedicated Indian mess managed by experienced Indian cooks. Both vegetarian and non-vegetarian meals are served daily, with a menu tailored to Indian taste preferences — making it feel like a true home away from home for Indian MBBS students.",
  },
  {
    question: "Can I pursue PG (postgraduate) after MBBS from Adam University?",
    answer:
      "Absolutely. Adam University's Medical Faculty MBBS degree is globally recognised, so graduates can apply for PG in India (after FMGE / NExT), USA (after USMLE), UK (after PLAB), Germany, Australia and many other countries. Alumni are building successful medical careers across the world.",
  },
  {
    question: "Does GVK EduTech help with Adam University admission and visa process?",
    answer:
      "Yes. GVK EduTech is an authorised admission partner for Adam University Medical Faculty. We provide end-to-end support — from counselling, application, offer letter, fee remittance, visa filing and travel to airport pickup and on-campus orientation in Bishkek, Kyrgyzstan.",
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
    desc: "Get your official admission / invitation letter from Adam University within 7–10 working days",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Remit the first-year tuition and hostel fees as per the Adam University fee structure",
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
    desc: "Fly to Manas International Airport, Bishkek — convenient direct / one-stop flights from India",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin MBBS at Adam",
    desc: "GVK EduTech team handles airport pickup, hostel allotment and university registration in Bishkek",
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
  "Admission / Invitation Letter from Adam University",
  "Affidavit of Financial Support",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls with 24/7 Indian wardens" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing) with attached furniture" },
  { icon: Utensils, label: "Indian mess — veg and non-veg meals prepared by Indian cooks" },
  { icon: Wifi, label: "High-speed Wi-Fi, study rooms and recreation areas in every hostel" },
  { icon: ShieldCheck, label: "Round-the-clock security, CCTV and biometric entry" },
  { icon: Clock, label: "Central heating, hot water, laundry and cleaning services" },
];

const whyChoose = [
  {
    title: "Modern Medical Faculty",
    desc: "Contemporary curriculum, simulation labs and experienced faculty focused on international medical education",
    icon: Building2,
  },
  {
    title: "Most Affordable MBBS",
    desc: "Complete 6-year MBBS starting at approx. ₹15 lakh — among the lowest NMC-approved options",
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
    title: "Capital-City Campus",
    desc: "Located in Bishkek — Kyrgyzstan's capital — with the best connectivity and amenities",
    icon: Star,
  },
  {
    title: "NMC / WHO Approved",
    desc: "Eligible to appear for FMGE / NExT in India and pursue PG anywhere in the world",
    icon: GraduationCap,
  },
  {
    title: "Safe & Student-Friendly",
    desc: "Bishkek is a safe, modern capital with a growing Indian student community",
    icon: CheckCircle,
  },
];

const ranking = [
  { label: "Country Rank", value: "Top 15" },
  { label: "NMC", value: "Approved" },
  { label: "WHO", value: "Listed" },
  { label: "FAIMER", value: "Listed" },
  { label: "Location", value: "Bishkek" },
  { label: "Founded", value: "Modern Era" },
];

export default function AdamUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Adam University (Medical Faculty) — MBBS 2026"
        subtitle="NMC Approved · WHO Listed · English Medium · Affordable MBBS in Bishkek"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Bishkek · Kyrgyzstan
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                Adam University Fees, Eligibility &amp; Admission Process 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                <strong className="text-foreground">Adam University</strong> is one of the
                emerging medical universities in Kyrgyzstan, attracting a growing number of
                Indian students for its affordable, NMC-approved MBBS program. Its Medical
                Faculty offers a globally recognised degree, fully English-medium
                instruction, and a total 6-year MBBS fee starting from around{" "}
                <strong className="text-foreground">₹15 lakh</strong> — making it a strong
                choice for Indian medical aspirants seeking quality education at the
                lowest possible cost.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Located in <strong className="text-foreground">Bishkek</strong>, the
                modern capital city of Kyrgyzstan, Adam University combines contemporary
                medical training with strong clinical exposure, Indian hostel facilities,
                and a student-friendly environment that has made Kyrgyzstan a top
                destination for MBBS abroad among Indian students.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "FAIMER", "English Medium", "Bishkek"].map(
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
                  alt="Adam University Medical Faculty campus in Bishkek, Kyrgyzstan"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">6</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years MBBS program
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">₹15L+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Total approx. fees
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

      {/* ── WHY CHOOSE ADAM ─────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Adam University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From low MBBS fees to English-medium classes and a capital-city campus,
              Adam University Medical Faculty checks every box for Indian medical
              aspirants.
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
                Adam University&apos;s Medical Faculty is recognised by the world&apos;s
                leading medical bodies, including the National Medical Commission (NMC)
                of India, the World Health Organization (WHO), FAIMER and several other
                international medical councils. The Adam University MBBS degree is a
                safe and globally accepted qualification for Indian students seeking a
                career in medicine.
              </p>
              <ul className="space-y-3">
                {[
                  "Listed with the World Health Organization (WHO)",
                  "Approved by the National Medical Commission (NMC), India",
                  "Recognised by FAIMER and listed in the World Directory of Medical Schools",
                  "Eligible for ECFMG certification — pathway to USA medical practice",
                  "Accepted by medical councils of UK, Australia, Canada and the EU",
                  "Ranked among the recognised private medical universities in Kyrgyzstan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Adam University World Ranking Snapshot
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { label: "Country Rank (Kyrgyzstan)", value: "Top 15" },
                    { label: "World Rank (Approx.)", value: "#7,000" },
                    { label: "NMC Status", value: "Approved" },
                    { label: "WHO Listing", value: "AVICENNA Directory" },
                    { label: "FAIMER / WDOMS", value: "Listed" },
                    { label: "ECFMG Certification", value: "Eligible" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between border-b border-border/50 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-muted-foreground text-sm">{row.label}</span>
                      <span className="font-semibold text-foreground text-sm">{row.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── MBBS FEES ───────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Adam University MBBS Fee Structure 2026–27"
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
                    Tuition Fee Breakdown (Approx.)
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
                          $4,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹3,82,500
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
                          $4,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹3,40,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $20,500
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹17,42,500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Hostel + mess extra. Figures
                    approximate — confirm latest fee at the time of admission.
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
                  usd: "$700",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily veg / non-veg meals",
                  usd: "$1,200",
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
                  <p className="text-lg font-bold text-accent">~$29,000</p>
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
                desc: "No IELTS / TOEFL required — Adam University teaches the full MBBS course in English",
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
              text="Adam University Admission Process for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A simple, six-step journey from your application form to your first day
              at the Adam University Medical Faculty in Bishkek, Kyrgyzstan.
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
              text="Documents Required for Adam University Admission"
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
                text="Adam University Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Adam University&apos;s on-campus hostels are designed with Indian students
                in mind — with separate wings for boys and girls, dedicated Indian
                mess, 24/7 security, central heating for the cold Kyrgyz winters, and a
                welcoming community of Indian and international students in Bishkek.
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
                  alt="Adam University hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Adam University hostel common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN KYRGYZSTAN ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=400&auto=format&fit=crop"
                  alt="Bishkek city view"
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
                Life in Kyrgyzstan
              </p>
              <ColorfulHeading
                text="Student Life in Kyrgyzstan"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Bishkek — the vibrant capital of Kyrgyzstan — offers Indian students a
                safe, affordable and welcoming study-abroad experience. With modern
                cafes, malls, parks and a growing Indian community, students enjoy the
                perfect blend of Central Asian culture, outdoor adventure and
                cosmopolitan city life while pursuing their MBBS at Adam University.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the most affordable student capitals in Central Asia",
                  "Low cost of living — meals, transport and shopping cost a fraction of Europe",
                  "Easy weekend getaways — Issyk-Kul Lake, Ala-Archa National Park, Burana Tower",
                  "Active Indian student associations and cultural events all year",
                  "Easy connectivity with direct / one-stop flights from Delhi and Mumbai",
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
              text="Advantages of Studying MBBS at Adam University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Adam University&apos;s Medical Faculty is a fast-growing choice for Indian
              MBBS aspirants in Kyrgyzstan — here is why.
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
                desc: "Study alongside peers from multiple countries in a multicultural campus",
              },
              {
                title: "Early Clinical Exposure",
                desc: "Hospital rotations begin from the 3rd year at Adam University-affiliated hospitals",
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
              Everything Indian students and parents ask about Adam University,
              Kyrgyzstan and the MBBS admission process.
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
            Apply Now for MBBS at Adam University, Kyrgyzstan
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
