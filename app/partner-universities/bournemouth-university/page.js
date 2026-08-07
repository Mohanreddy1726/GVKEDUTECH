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

/* ══════════════════════════════════════════════════════════
   BOURNEMOUTH UNIVERSITY — CONTENT DATA
══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is Bournemouth University recognised in India?",
    answer:
      "Yes. Bournemouth University is a UK government-recognised public university and its degrees are widely accepted in India. BU qualifications are valued by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies, opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at Bournemouth University?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at Bournemouth run for 1 year full-time (12 months). Some programs offer a professional placement year, taking 12–24 months. MPhil / PhD programs typically take 3–4 years of full-time research.",
  },
  {
    question: "Does Bournemouth University require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0. Higher requirements apply for programs in Media, Communication and related subjects (often IELTS 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific program.",
  },
  {
    question: "What is the tuition fee for Indian students at Bournemouth University?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 17,500 – 19,500 per year (approximately INR 19–22 lakh) depending on the program. Business, Tourism and Management programs are around GBP 17,500 – 18,500; Data Science, Engineering and Media programs range from GBP 18,500 – 19,500.",
  },
  {
    question: "Can Indian students work part-time while studying at Bournemouth?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Bournemouth has one of the largest hospitality and tourism job markets in the UK — retail, hotels, restaurants, tutoring, university admin, and on-campus roles are popular options.",
  },
  {
    question: "Does Bournemouth University offer scholarships for Indian students?",
    answer:
      "Yes. Bournemouth offers multiple scholarships including the BU International Scholarship, the Academic Excellence Scholarship and the Vice-Chancellor's Scholarship. Most awards range from £1,500 – £4,000 and are either automatic (based on academic merit) or require a short essay application.",
  },
  {
    question: "How safe is Bournemouth for international students?",
    answer:
      "Bournemouth is one of the UK's safest, friendliest and most popular coastal student cities. BU's campuses are modern, purpose-built and have 24/7 security, well-lit walkways, CCTV and a dedicated Student Wellbeing service. The town is home to over 25,000 students and has a welcoming, multicultural atmosphere.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help BU graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. BU is consistently ranked among the UK's top universities for graduate employability and has strong industry links across media, tourism, business and healthcare sectors.",
  },
  {
    question: "Does GVK EduTech help with Bournemouth University admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Bournemouth. We provide end-to-end support — program shortlisting, SOP/LOR guidance, application submission, CAS, visa filing, and pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Bournemouth based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the Bournemouth University portal with SOP & LORs",
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
  "Valid Passport (min. 12 months validity)",
  "Bachelor's Degree Certificate & Mark Sheets (transcripts)",
  "English Language Test Score (IELTS / TOEFL / PTE)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (2–3)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds — typically 9 months of tuition + living)",
  "Visa Application Form",
  "Offer / CAS Letter from Bournemouth University",
];

const accommodationFeatures = [
  { icon: Home, label: "Modern on-campus halls in the heart of Bournemouth" },
  { icon: Users, label: "En-suite and studio rooms (single & shared) for international students" },
  { icon: Utensils, label: "Self-catering kitchens — Indian restaurants and groceries within walking distance" },
  { icon: Wifi, label: "High-speed WiFi across all halls of residence" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance across campuses" },
  { icon: Clock, label: "Laundry, gym, study spaces & social lounges" },
];

const whyChoose = [
  {
    title: "Coastal UK Campus",
    desc: "Two modern campuses in Bournemouth — one of the UK's most beautiful coastal student cities on England's south coast",
    icon: MapPin,
  },
  {
    title: "Top 100 Modern UK University",
    desc: "Consistently ranked among the UK's top young universities with high graduate employment outcomes (LEO)",
    icon: TrendingUp,
  },
  {
    title: "TEF Silver Award",
    desc: "Awarded Silver in the UK's Teaching Excellence Framework (TEF 2023) — strong teaching and student outcomes",
    icon: Award,
  },
  {
    title: "Industry-Led Curriculum",
    desc: "Strong focus on placement years, professional practice and industry partnerships across business, media and health",
    icon: Briefcase,
  },
  {
    title: "Affordable UK Tuition",
    desc: "Lower tuition fees than most London-based universities — excellent value for a UK Master's degree",
    icon: PoundSterling,
  },
  {
    title: "Beachside City Living",
    desc: "Live and study by the sea — Bournemouth offers beaches, parks, cafes and a vibrant multicultural community",
    icon: Star,
  },
  {
    title: "Optional Placement Year",
    desc: "12-month paid professional placement with leading UK employers — a real-world boost to your CV",
    icon: Globe,
  },
  {
    title: "Diverse International Community",
    desc: "Join 18,000+ students from over 130 countries — a friendly, multicultural campus experience",
    icon: Users,
  },
];

const rankings = [
  { label: "Top 100", sub: "Times Higher Education Young University Rankings 2025" },
  { label: "TEF Silver", sub: "UK Teaching Excellence Framework 2023" },
  { label: "Top 50", sub: "Guardian University Guide 2025 — Tourism & Hospitality" },
  { label: "1992", sub: "Year Established — Modern University with Strong Heritage" },
];

const advantages = [
  {
    title: "No Entrance Exam",
    desc: "Admission based on Bachelor's degree grades and English test scores",
  },
  {
    title: "Globally Recognised",
    desc: "UK government-recognised degree valued by employers across the world",
  },
  {
    title: "Career Services",
    desc: "Dedicated support for job placements, internships and industry placements",
  },
  {
    title: "Strong Alumni Network",
    desc: "Connect with 80,000+ Bournemouth graduates working in 150+ countries",
  },
  {
    title: "Industry Partnerships",
    desc: "Links with top UK employers across media, tourism, business, health and engineering",
  },
  {
    title: "2-Year Graduate Visa",
    desc: "Eligible for the UK Graduate Route visa — 2 years of post-study work",
  },
  {
    title: "Affordable Bournemouth",
    desc: "Lower cost of living than London or Oxford — great value for international students",
  },
  {
    title: "GVK End-to-End Support",
    desc: "Free counselling, application help, visa assistance & pre-departure orientation",
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════ */

export default function BournemouthUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Bournemouth University Fees, Eligibility & Admission Process 2026"
        subtitle="TEF Silver · Top UK Young University · Affordable Master's by the Coast"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1992 · Bournemouth, United Kingdom
              </p>
              <ColorfulHeading
                text="Bournemouth University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Bournemouth University (BU) is one of the UK&apos;s most popular and
                fastest-rising modern universities, located on the south coast of
                England in the beautiful coastal city of Bournemouth. With a
                strong focus on professional practice, industry placements and
                graduate employability, BU is a top destination for Indian
                students seeking{" "}
                <Link
                  href="/masters/uk"
                  className="text-accent font-semibold hover:underline"
                >
                  Masters in the UK
                </Link>
                .
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Recognised by the UK&apos;s Quality Assurance Agency, the{" "}
                <strong className="text-foreground">
                  Association of Indian Universities (AIU)
                </strong>{" "}
                and major global accreditation bodies, Bournemouth graduates
                are highly sought after by employers in the UK, India and
                around the world — particularly in media, tourism, business,
                healthcare and engineering.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "TEF Silver",
                  "Top UK Young University",
                  "AIU Recognised",
                  "18,000+ Students",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full text-sm font-semibold"
                  >
                    {badge}
                  </span>
                ))}
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
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop"
                  alt="Bournemouth University campus in Bournemouth, United Kingdom"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">18,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 130+ countries
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">£17.5K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Tuition starts from / year
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE BOURNEMOUTH ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Bournemouth University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From TEF Silver teaching quality to industry-led curriculum and a
              friendly coastal campus, Bournemouth University is a smart choice
              for Indian postgraduate aspirants.
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

      {/* ── 3. RECOGNITION (TEF / QAA / AACSB / etc.) ────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "TEF Silver", sub: "UK Teaching Excellence Framework 2023" },
              { label: "QAA", sub: "UK Quality Assurance Agency — Recognised" },
              { label: "AIU", sub: "Association of Indian Universities" },
              { label: "UKVI", sub: "UK Visas & Immigration — Sponsor Licence" },
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

      {/* ── 4. WORLD RANKING ────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Bournemouth University — World Ranking 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A fast-rising UK modern university with strong recognition across
              QS, THE and major UK guides — particularly in tourism, media and
              health.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rankings.map((item) => (
              <Card
                key={item.label}
                className="border-2 border-accent/20 hover:border-accent/50 transition-colors duration-200"
              >
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-extrabold text-accent mb-1">
                    {item.label}
                  </p>
                  <p className="text-muted-foreground text-sm leading-snug">
                    {item.sub}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TUITION FEES STRUCTURE ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Tuition Fees 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Indicative international tuition fees at Bournemouth — among the
              most affordable UK Russell Group–level education options.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Bournemouth University — Indicative Tuition Fee (International)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Program Category
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          GBP / year
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Business / Tourism / Management{" "}
                          <span className="text-muted-foreground text-xs">
                            (MSc, MBA, MBM)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹19,25,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Data Science / Computer Science
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £18,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹20,35,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Media / Engineering / Health Programs
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £19,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹21,45,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Indicative Range
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £17,500–19,500
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹19.2–21.4 Lakhs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹110 (indicative). Bournemouth
                    University tuition fees are subject to revision by the
                    university. Living costs in Bournemouth approx. £9,207/year
                    (UKVI requirement).
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Living cost cards */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Costs
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus en-suite room",
                  gbp: "£5,500",
                },
                {
                  label: "Food & Groceries",
                  sub: "Including Indian groceries",
                  gbp: "£3,000",
                },
                {
                  label: "Travel & Personal",
                  sub: "Books, transport, leisure",
                  gbp: "£2,200",
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
                    <p className="text-lg font-bold text-accent">{item.gbp}</p>
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
                      Tuition + living in Bournemouth
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~£29,000</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ELIGIBILITY CRITERIA ─────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear, merit-based requirements — no entrance exam for most
              postgraduate programs.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Qualification",
                desc: "Bachelor's degree from a recognised Indian university — minimum 55–60% (higher for competitive programs)",
              },
              {
                title: "English Proficiency",
                desc: "IELTS Academic 6.5 (no band below 6.0); TOEFL iBT 90 / PTE 65 — waivers for English-medium institutions",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA applicants (typically 2–3 years); not mandatory for most MSc programs",
              },
              {
                title: "Documents",
                desc: "SOP, 2–3 Letters of Recommendation, transcripts, CV and valid passport",
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

      {/* ── 7. ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="Bournemouth University Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A clear seven-step journey from your application to your first
              day at Bournemouth University, UK.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/14*100%+1.25rem)] right-[calc(1/14*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-7 gap-6">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="flex flex-col items-center text-center"
                  >
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

      {/* ── 8. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Bournemouth Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech will
              guide you through SOP writing, LOR formatting and CAS filing.
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

      {/* ── 9. ACCOMMODATION / CAMPUS LIVING ─────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Bournemouth University Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Bournemouth&apos;s on-campus accommodation is modern, safe and
                purpose-built for international students — just a short walk
                from the beach, the city centre and the Talbot and Lansdowne
                campuses. From en-suite rooms to self-catering kitchens and
                vibrant social spaces, settling in is easy and comfortable.
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
                  alt="Bournemouth University student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Bournemouth University common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN BOURNEMOUTH ─────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Bournemouth city view, United Kingdom"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&auto=format&fit=crop"
                  alt="Bournemouth beach and coast"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Bournemouth, United Kingdom
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Bournemouth is one of the UK&apos;s most popular coastal student
                cities — famous for its 7 miles of sandy beaches, vibrant
                nightlife and welcoming atmosphere. With a growing Indian
                community, world-class restaurants, music venues and easy
                transport links, Bournemouth gives Indian students the perfect
                blend of UK experience and home comfort.
              </p>
              <ul className="space-y-3">
                {[
                  "Bournemouth is home to 25,000+ students — a safe, friendly coastal city on England's south coast",
                  "Growing Indian community with restaurants, grocery stores and cultural events year-round",
                  "Significantly lower cost of living than London — excellent value for international students",
                  "Vibrant beachside culture — 7 miles of beaches, parks, cinemas, music venues and water sports",
                  "Easy connectivity — 2 hours by train to London, direct flights from Bournemouth Airport",
                  "Active Indian student association with annual Diwali, Holi and cultural celebrations",
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

      {/* ── 11. ADVANTAGES ───────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying at Bournemouth University"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((adv, i) => (
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

      {/* ── 12. FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about Bournemouth University and
              studying a Master&apos;s in the UK.
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

      {/* ── APPLY NOW CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters at Bournemouth University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech&apos;s expert UK counselors will guide you through the
            entire admission process — from program shortlisting and SOP
            review to your CAS, visa and first day at Bournemouth, UK.
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

      {/* ── INTERNAL LINKS FOOTER ───────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/masters/uk", label: "Masters in UK" },
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
