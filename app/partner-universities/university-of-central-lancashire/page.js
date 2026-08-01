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
  PoundSterling,
  Award,
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Central Lancashire (UCLan) recognised in India?",
    answer:
      "Yes. The University of Central Lancashire is a recognised UK public university and its degrees are widely accepted in India. UCLan qualifications are valued by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies, opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at UCLan?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at UCLan run for 1 year full-time (12 months). Some research and placement pathways take 12–18 months. MPhil/PhD programs typically take 3–4 years of full-time study.",
  },
  {
    question: "Does UCLan require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0. Higher requirements apply for programs in Health, Medicine and related subjects (often IELTS 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific program.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at UCLan?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 15,000 – 19,000 per year (approximately INR 16–20 lakh) for most Master's programs. MBBS and select health programs are higher (around GBP 35,000 – 45,000 per year). UCLan also offers international scholarships of £1,500 – £5,000 for outstanding students.",
  },
  {
    question: "Can Indian students work part-time while studying at UCLan?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Preston has a strong part-time job market in retail, hospitality, healthcare, tutoring, university admin, and on-campus roles.",
  },
  {
    question: "Does UCLan offer scholarships for Indian students?",
    answer:
      "Yes. UCLan offers international scholarships, early-payment discounts, and country-specific bursaries for Indian students. Most scholarships range from £1,500 – £5,000 and are awarded automatically based on academic merit or via a short essay application.",
  },
  {
    question: "How safe is Preston for international students?",
    answer:
      "Preston is one of the most affordable and student-friendly cities in the North of England. The university provides 24/7 on-campus security, well-lit walkways, CCTV, and a dedicated Student Hub. The large South Asian community in Preston makes Indian students feel right at home.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help UCLan graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree (3 years for a PhD). UCLan graduates are sought after in business, healthcare, engineering, technology, and education roles globally.",
  },
  {
    question: "Does GVK EduTech help with UCLan admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including UCLan. We provide end-to-end support — program shortlisting, SOP/LOR guidance, application submission, CAS, visa filing, and pre-departure orientation.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Free Counselling",
    desc: "Discuss your academic profile with GVK EduTech's UK admissions experts",
    icon: FileText,
  },
  {
    step: 2,
    title: "Choose Your Program",
    desc: "Shortlist the right MSc / MA / MBA at UCLan based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the UCLan portal with SOP & LORs",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your offer letter within 2–4 weeks (fast-track options available)",
    icon: CheckCircle,
  },
  {
    step: 5,
    title: "Accept Offer & Pay Deposit",
    desc: "Secure your seat by paying the tuition deposit",
    icon: PoundSterling,
  },
  {
    step: 6,
    title: "Apply for Visa",
    desc: "Our team assists with CAS, visa application, and financial documentation",
    icon: Globe,
  },
  {
    step: 7,
    title: "Pre-Departure Briefing",
    desc: "Attend orientation, book flights, and prepare for your UK journey",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (min. 12 months)",
  "Bachelor's Degree Certificate & Mark Sheets",
  "English Language Test Score (IELTS/TOEFL/PTE)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2–3)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds)",
  "Visa Application Form",
  "Offer Letter (University of Central Lancashire)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus halls of residence available" },
  { icon: Users, label: "Modern en-suite rooms (single & shared)" },
  { icon: Utensils, label: "Self-catering kitchens & on-campus food courts" },
  { icon: Wifi, label: "High-speed WiFi across all campuses" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym, library & study spaces" },
];

const whyChoose = [
  {
    title: "Top 7% World Ranked",
    desc: "Ranked in the top 7% of universities worldwide (Centre for World University Rankings)",
    icon: TrendingUp,
  },
  {
    title: "Modern UK University",
    desc: "One of the largest and most modern public universities in the UK with global recognition",
    icon: Award,
  },
  {
    title: "MBBS & Health Sciences",
    desc: "Among the few UK modern universities with a full Medical School offering MBBS to international students",
    icon: GraduationCap,
  },
  {
    title: "Affordable UK Fees",
    desc: "Tuition starting from £15,000/year — significantly lower than most UK universities",
    icon: PoundSterling,
  },
  {
    title: "Industry Placements",
    desc: "Strong partnerships with NHS, BAE Systems, NHS Trusts, and global employers",
    icon: Briefcase,
  },
  {
    title: "Vibrant Indian Community",
    desc: "3,500+ Indian students, an active Indian Society and on-campus cultural events",
    icon: Users,
  },
  {
    title: "Post-Study Work Visa",
    desc: "Eligible for the UK Graduate Route visa (2 years) after graduation",
    icon: Globe,
  },
  {
    title: "Multi-Campus Network",
    desc: "Study in Preston, Cyprus or one of the global partner campuses — true international exposure",
    icon: Building2,
  },
];

export default function UniversityOfCentralLancashirePage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Central Lancashire (UCLan) — Masters 2026"
        subtitle="Top 7% World Ranked · Affordable UK Fees · MBBS & Masters Available"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1828 · Preston, Lancashire, UK
              </p>
              <ColorfulHeading
                text="University of Central Lancashire (UCLan)"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The <strong className="text-foreground">University of Central Lancashire (UCLan)</strong> is
                one of the largest and most established modern universities in the
                UK, located in the heart of Preston, Lancashire. Founded in 1828
                and granted university status in 1992, UCLan is ranked in the top
                7% of universities worldwide and is a popular destination for
                Indian students seeking quality UK education at an affordable
                cost.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                UCLan is one of the few UK modern universities to offer a full{" "}
                <strong className="text-foreground">MBBS program</strong> alongside 500+ Master's
                programs across business, engineering, health, law, sciences and
                humanities — making it a strong choice for Indian students pursuing
                either clinical or postgraduate study in the UK.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Top 7% World", "UK Public University", "MBBS Available", "Affordable Fees", "Est. 1828"].map(
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
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop"
                  alt="University of Central Lancashire campus in Preston"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">35K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 100+ countries
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">1828</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Heritage of excellence
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
              { label: "Top 7%", sub: "World University Ranking" },
              { label: "35,000+", sub: "Students Enrolled" },
              { label: "500+", sub: "Postgraduate Programs" },
              { label: "100+", sub: "Nationalities on Campus" },
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

      {/* ── WHY CHOOSE UCLAN ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose UCLan"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-ranked teaching to affordable UK tuition and a full
              MBBS pathway, UCLan offers everything Indian students need for a
              successful future in the UK.
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
                The University of Central Lancashire is a fully recognised UK
                public university with degrees accredited by UK professional
                bodies and respected by employers worldwide. UCLan MBBS is
                recognised by the General Medical Council (GMC) — the UK
                equivalent of India's NMC — and is listed with the World Health
                Organization (WHO).
              </p>
              <ul className="space-y-3">
                {[
                  "Recognised UK public university — degrees valid globally",
                  "GMC-accredited MBBS program (equivalent to NMC recognition)",
                  "Listed with the World Health Organization (WHO)",
                  "Top 7% of universities worldwide (CWUR)",
                  "Member of the UK Association of Commonwealth Universities (ACU)",
                  "TEF Silver award for teaching excellence",
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
                    UCLan World Ranking Snapshot
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  {[
                    { label: "CWUR World Rank", value: "Top 7%" },
                    { label: "UK University Rank", value: "#70 (Guardian 2024)" },
                    { label: "GMC Status", value: "MBBS Recognised" },
                    { label: "WHO Listing", value: "WDOMS Listed" },
                    { label: "TEF Award", value: "Silver" },
                    { label: "Founded", value: "1828" },
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

      {/* ── FEES ─────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Among the most affordable UK universities for international
              students — with scholarships of up to £5,000 for Indian students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee by Program
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
                          GBP/Year
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Business & Management (MSc / MBA)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £15,000 – £18,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹13 – ₹15 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Computing
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,000 – £19,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹16 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Health & Life Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,000 – £19,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹16 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Humanities & Social Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £14,500 – £17,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹12 – ₹14 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          MBBS (5 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £35,000 – £45,000 / yr
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹30 – ₹38 lakh / yr
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹85 (indicative). MBBS fees vary by clinical year.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Costs (Preston)
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus halls / private",
                  usd: "£4,500 – £7,000",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catering & Indian stores",
                  usd: "£2,200 – £3,200",
                },
                {
                  label: "Transport & Personal",
                  sub: "Student discounts available",
                  usd: "£900 – £1,500",
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
                      Total 1-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + living, approximate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">£23,100–£30,700</p>
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
              text="Eligibility Criteria"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear requirements for Indian students — meet these to secure your
              place at UCLan.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 55%+ or equivalent (varies by program; MBBS requires 85%+ in PCB + UCAT)",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (min 6.0 in each band) or equivalent; waivers available",
              },
              {
                title: "SOP",
                desc: "Strong Statement of Purpose explaining your goals and motivation",
              },
              {
                title: "References",
                desc: "2 academic/professional letters of recommendation",
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
              A straightforward seven-step journey from application to your
              first day at UCLan Preston.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/14*100%+1.25rem)] right-[calc(1/14*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-7 gap-6">
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
              Gather these before applying — GVK EduTech will guide you through
              every step.
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

      {/* ── ACCOMMODATION ────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation at UCLan"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                UCLan offers excellent on-campus accommodation options to suit
                every budget. From modern en-suite halls to private rentals
                near campus, you'll find safe, comfortable and affordable
                living arrangements in friendly Preston — one of the most
                affordable student cities in the UK.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {accommodationFeatures.map((f, i) => {
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
                  alt="UCLan student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="UCLan Preston campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN PRESTON ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Preston city view"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&auto=format&fit=crop"
                  alt="UK student life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Preston
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Preston is one of the most affordable and culturally diverse
                student cities in the UK. Located in the heart of Lancashire
                with excellent rail links to London, Manchester, Liverpool and
                Edinburgh, Preston offers Indian students a safe, welcoming
                and budget-friendly home for their UK study journey.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the most affordable student cities in the UK",
                  "Large South Asian community — Indian restaurants, temples and stores nearby",
                  "Excellent rail links to London (2.5 hrs), Manchester (40 min), Edinburgh (3 hrs)",
                  "Compact and walkable — everything within easy reach",
                  "Rich Victorian heritage and the beautiful Lancashire countryside",
                  "Post-study work visa (2 years) for all international graduates",
                  "World-class healthcare (NHS) for international students",
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
              text="Advantages of Studying at UCLan"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              UCLan stands out as one of the most affordable and well-rounded UK
              universities for Indian students — here is why.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Global Recognition",
                desc: "UK degree valued by employers worldwide and in India",
              },
              {
                title: "Affordable UK Tuition",
                desc: "From £15,000/year — among the lowest in the UK",
              },
              {
                title: "MBBS Pathway",
                desc: "GMC-recognised MBBS program for international students",
              },
              {
                title: "Career Services",
                desc: "Dedicated employability and placement support",
              },
              {
                title: "Scholarships",
                desc: "Range of international funding options for Indians",
              },
              {
                title: "Industry Placements",
                desc: "Strong NHS, BAE Systems and employer partnerships",
              },
              {
                title: "Post-Study Work",
                desc: "Eligible for 2-year Graduate Route visa",
              },
              {
                title: "GVK Support",
                desc: "End-to-end admission & visa help from GVK EduTech",
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
              Everything Indian students and parents ask about the University
              of Central Lancashire, Preston and the UK admission process.
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
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your UK Journey at the University of Central Lancashire
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire process —
            from program selection to your first day on the Preston campus.
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
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5">
            Continue Exploring
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/mbbs/uk", label: "MBBS in UK" },
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
