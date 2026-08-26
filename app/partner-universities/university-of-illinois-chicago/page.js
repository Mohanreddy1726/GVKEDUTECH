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
  Building2,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Illinois Chicago (UIC) internationally recognised?",
    answer:
      "Yes. The University of Illinois Chicago (UIC) is regionally accredited by the Higher Learning Commission (HLC) and is a member of the prestigious Association of American Universities (AAU). UIC's degrees are recognised by employers and academic institutions worldwide and accepted by WES for credential evaluation.",
  },
  {
    question: "What is the duration of a Masters program at UIC?",
    answer:
      "Most UIC Masters programs are 1.5 to 2 years in duration, depending on the department and credit load (typically 30–36 credit hours). STEM-designated programs qualify Indian students for the 24-month STEM OPT extension in addition to the standard 12-month OPT.",
  },
  {
    question: "Does UIC require GRE or GMAT for admission?",
    answer:
      "Many UIC Masters programs have made GRE / GMAT scores optional for recent applicants. Requirements vary by school — engineering, computer science, and business programs may still recommend or require test scores. GVK EduTech will advise you based on your target program.",
  },
  {
    question: "What English proficiency scores are required for Indian students?",
    answer:
      "UIC requires a minimum TOEFL iBT score of 80 (or IELTS 6.5) for most Masters programs. Some programs may ask for higher scores. Students who have completed a degree at an English-medium institution may qualify for a waiver — we help you evaluate your eligibility.",
  },
  {
    question: "Can I work while studying at UIC?",
    answer:
      "Yes. On an F-1 student visa, you can work up to 20 hours per week on campus during the semester and full-time during breaks. After graduation, you may be eligible for 12 months of OPT, extendable to 36 months for STEM-designated degrees.",
  },
  {
    question: "What is the total cost of a Masters degree at UIC for Indian students?",
    answer:
      "For Indian students, the total estimated cost of a 2-year STEM Masters at UIC is approximately USD 65,000 – 80,000 (INR 55 – 68 lakhs), which includes tuition, housing, food, insurance, books, and personal expenses. Scholarships, GA / TA positions, and on-campus jobs can reduce this significantly.",
  },
  {
    question: "How is on-campus housing at the University of Illinois Chicago?",
    answer:
      "UIC offers modern on-campus residence halls and apartment-style student housing on its South Campus — within walking distance of classrooms, libraries, and the Chicago Transit Authority (CTA) Blue Line that connects to the rest of the city. Most first-year international students live on campus.",
  },
  {
    question: "Can I work in the USA after completing my Masters at UIC?",
    answer:
      "Yes. UIC graduates on an F-1 visa are eligible for Optional Practical Training (OPT) — 12 months of full-time work authorisation in your field of study. If your degree is in a STEM field, you can apply for a 24-month STEM OPT extension, giving you up to 36 months of US work experience.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Apply online via the UIC graduate college portal — upload transcripts, SOP, and test scores",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Admission",
    desc: "Get your official admission decision from the UIC graduate committee within 6–10 weeks",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Enrollment Deposit",
    desc: "Confirm your seat by paying the enrollment deposit to the university",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Receive I-20",
    desc: "UIC issues your Form I-20 — the document needed to apply for the F-1 student visa",
    icon: Globe,
  },
  {
    step: 5,
    title: "Attend F-1 Visa Interview",
    desc: "Book your F-1 visa interview at the US Embassy — GVK EduTech provides full visa prep support",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Fly to Chicago & Enroll",
    desc: "Travel to Chicago, attend international orientation, and begin your Masters program",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 6 months validity beyond program end date)",
  "Bachelor's Degree Transcripts & Certificate (attested)",
  "Statement of Purpose (SOP) — 500–1000 words",
  "Letters of Recommendation (LORs) — usually 2 or 3",
  "GRE / GMAT Score Card (if required by program)",
  "TOEFL iBT / IELTS / Duolingo Score Report",
  "Updated Resume / Curriculum Vitae",
  "Financial Documents (bank statements, sponsor letter)",
  "Passport-size Photographs (US visa specifications)",
  "DS-160 Confirmation Page (after visa application)",
];

const housingFeatures = [
  { icon: Home, label: "On-campus residence halls & apartment-style communities" },
  { icon: Users, label: "Furnished single / shared rooms with utilities included" },
  { icon: Utensils, label: "Meal plans with diverse dining options (incl. Indian / vegetarian)" },
  { icon: Wifi, label: "High-speed Wi-Fi across campus & housing" },
  { icon: ShieldCheck, label: "24/7 campus security and residential life staff" },
  { icon: Clock, label: "Study lounges, laundry, and recreation centres" },
];

const whyChoose = [
  {
    title: "Top-Ranked US University",
    desc: "Among the top 100 public universities in the US (US News) and top 250 globally (QS / THE)",
    icon: Star,
  },
  {
    title: "STEM-OPT Eligible",
    desc: "Eligible for 36 months of US work authorisation after graduation — strong ROI for Indian students",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Tuition",
    desc: "Tuition ~USD 18,000 / year for out-of-state students — excellent value vs. peer US universities",
    icon: IndianRupee,
  },
  {
    title: "Located in Chicago",
    desc: "Study in the 3rd largest US city — headquarters of Google, Amazon, Boeing, and major Fortune 500 firms",
    icon: Building2,
  },
  {
    title: "Diverse Campus Community",
    desc: "Students from 100+ countries — a vibrant, multicultural learning environment in the heart of Chicago",
    icon: Globe,
  },
  {
    title: "Industry Connections",
    desc: "Direct recruiting pipelines with Motorola, Caterpillar, Allstate, and Chicago's booming tech & finance sector",
    icon: Users,
  },
  {
    title: "Research Powerhouse",
    desc: "Over USD 450M in annual research expenditure — strong funded RA / TA opportunities for grad students",
    icon: TrendingUp,
  },
  {
    title: "GVK EduTech Support",
    desc: "End-to-end application, scholarship, visa & pre-departure assistance for Indian students",
    icon: CheckCircle,
  },
];

const worldRanking = [
  { label: "QS World Rank", value: "#285", source: "QS World University Rankings 2025" },
  { label: "THE World Rank", value: "#201–250", source: "Times Higher Education 2025" },
  { label: "US News (National)", value: "#82", source: "Best Colleges in the USA 2025" },
];

export default function UniversityOfIllinoisChicagoPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Illinois Chicago — Masters Fees, Eligibility & Admission Process 2026"
        subtitle="AAU Member · STEM-OPT Eligible · Chicago Location · Affordable US Public University"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1982 · Chicago, Illinois, USA
              </p>
              <ColorfulHeading
                text="University of Illinois Chicago (UIC)"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Illinois Chicago (UIC) is the largest
                university in Chicago and one of the top public research
                universities in the United States. A member of the prestigious{" "}
                <strong className="text-foreground">Association of American Universities (AAU)</strong>,
                UIC attracts Indian students seeking a world-class Masters
                degree with strong career outcomes and direct access to
                Chicago's thriving job market.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With{" "}
                <strong className="text-foreground">STEM-designated programs</strong>{" "}
                across engineering, computer science, data science, and business,
                UIC offers Indian graduates up to{" "}
                <strong className="text-foreground">36 months of OPT</strong>{" "}
                — combined with one of the most affordable tuitions among US
                public universities.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["AAU Member", "STEM-OPT", "F-1 Visa", "Chicago Campus"].map(
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
                  src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&auto=format&fit=crop"
                  alt="University of Illinois Chicago campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">35,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students enrolled
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">100+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Countries represented
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
              { label: "AAU", sub: "Association of American Universities" },
              { label: "HLC", sub: "Higher Learning Commission Accredited" },
              { label: "#82", sub: "US News National Ranking · 2025" },
              { label: "STEM-OPT", sub: "36 Months US Work Authorisation" },
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
              text="Why Indian Students Choose the University of Illinois Chicago"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From AAU membership to Chicago's career ecosystem, UIC delivers
              one of the best returns on investment for Indian Masters students.
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

      {/* ── WORLD RANKING & RECOGNITION ──────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="World Ranking & Recognition"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              UIC is consistently ranked among the top public universities in
              the US and is recognised by the most respected international
              ranking bodies.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 mb-10">
            {worldRanking.map((item) => (
              <Card
                key={item.label}
                className="border-2 border-accent/20 hover:border-accent/40 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent mb-1">{item.value}</p>
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              UIC is a member of the prestigious Association of American
              Universities (AAU), accredited by the Higher Learning Commission
              (HLC), and recognised by the World Education Services (WES) for
              credential evaluation in Canada and the USA.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEES ─────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Transparent, all-inclusive cost estimates — among the most
              affordable STEM Masters programs in the US Midwest.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition & Fee Breakdown (STEM MS, per year)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Item
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
                          Tuition (out-of-state, 24 credits)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $28,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹23,80,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          University Fees
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $1,400
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹1,19,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Health Insurance{" "}
                          <span className="text-muted-foreground text-xs">
                            (per year)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $2,200
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹1,87,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (2 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $63,200
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹53,72,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Tuition varies by program — MBA and select programs may be higher.
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
                  label: "On-Campus Housing",
                  sub: "Furnished, utilities included",
                  usd: "$7,800",
                },
                {
                  label: "Food / Meal Plan",
                  sub: "Dining halls & groceries",
                  usd: "$4,800",
                },
                {
                  label: "Books & Personal",
                  sub: "Supplies, transport, misc.",
                  usd: "$2,800",
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
                      Total 2-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$80,000</p>
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
              A bachelor's degree, English proficiency, and (sometimes) a
              standardised test score — that's the short list.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Bachelor's Degree",
                desc: "4-year undergraduate degree from a recognised university with a strong academic record (typically GPA 3.0+ on a 4.0 scale)",
              },
              {
                title: "English Proficiency",
                desc: "TOEFL iBT 80+ / IELTS 6.5+ / Duolingo 110+ (waivers available for English-medium degrees)",
              },
              {
                title: "Standardised Tests",
                desc: "GRE / GMAT recommended or required depending on the program — many UIC programs are test-optional",
              },
              {
                title: "Other Requirements",
                desc: "Statement of Purpose, Letters of Recommendation, Resume, and program-specific prerequisites",
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
              A clear six-step journey from online application to your first
              semester at the UIC campus in Chicago.
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
              Keep these ready before applying — GVK EduTech will guide you
              through every requirement.
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

      {/* ── HOUSING ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Housing & Residence Life"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                UIC offers modern, well-located on-campus residence halls and
                apartment-style student housing on the South Campus — within
                walking distance of classrooms, libraries, and the CTA Blue
                Line that connects you directly to downtown Chicago and O'Hare
                International Airport.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {housingFeatures.map((f, i) => {
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
                  alt="UIC residence hall"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="UIC campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN CHICAGO ──────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=400&auto=format&fit=crop"
                  alt="Chicago skyline"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Chicago city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Chicago, USA
              </p>
              <ColorfulHeading
                text="A City Students Love"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Chicago is the 3rd largest city in the United States — a
                global hub for finance, technology, healthcare, and culture.
                With the CTA Blue Line running directly through UIC's campus,
                you can reach downtown in just 15 minutes and tap into one of
                the strongest job markets in the USA.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the largest Indian student communities in the US Midwest",
                  "Affordable cost of living compared to Boston, NYC, or San Francisco",
                  "Major job market — Google, Amazon, Boeing, and 30+ Fortune 500 HQ",
                  "World-class food, music, art, and lakefront living on Lake Michigan",
                  "Direct flights from India to O'Hare International Airport (ORD)",
                  "Safe, walkable campus with 24/7 UIC Police patrol and blue-light emergency phones",
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
              text="Advantages of Studying at the University of Illinois Chicago"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "STEM-OPT 36 Months",
                desc: "Eligible for 36 months of US work authorisation after graduation",
              },
              {
                title: "Affordable US Public Uni",
                desc: "Significantly lower tuition than private US universities of similar rank",
              },
              {
                title: "Chicago Job Market",
                desc: "Direct access to 30+ Fortune 500 HQ and a booming tech & finance sector",
              },
              {
                title: "Globally Diverse",
                desc: "Students from 100+ countries create a rich global network",
              },
              {
                title: "AAU Membership",
                desc: "Member of the prestigious Association of American Universities (AAU)",
              },
              {
                title: "Optional Practical Training",
                desc: "12-month OPT + 24-month STEM extension for eligible graduates",
              },
              {
                title: "Research Powerhouse",
                desc: "USD 450M+ annual research expenditure — funded RA / TA opportunities",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end application, scholarship, visa & pre-departure guidance",
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
            Fall 2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters Journey at the University of Illinois Chicago
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire process —
            from application to F-1 visa to your first day at the UIC campus.
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
              { href: "/masters/usa", label: "Masters in USA" },
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
