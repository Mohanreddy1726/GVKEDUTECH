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
   UNIVERSITY OF LINCOLN — CONTENT DATA
══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is the University of Lincoln recognised in India?",
    answer:
      "Yes. The University of Lincoln is a UK government-recognised public research university and its degrees are widely accepted in India. Lincoln qualifications are valued by the Association of Indian Universities (AIU), Indian employers and all major global accreditation bodies, opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at the University of Lincoln?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at Lincoln run for 1 year full-time (12 months). Some programs offer a professional placement year, taking 12–24 months. MPhil / PhD programs typically take 3–4 years of full-time research.",
  },
  {
    question: "Does the University of Lincoln require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0. Higher requirements apply for programs in Journalism, Media and Law (often IELTS 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific program.",
  },
  {
    question: "What is the tuition fee for Indian students at the University of Lincoln?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 17,000 – 20,000 per year (approximately INR 18–22 lakh) depending on the program. MSc programs in Computing, Engineering and Data Science are around GBP 18,500; MBA and Business programs range from GBP 19,000 – 20,000.",
  },
  {
    question: "Can Indian students work part-time while studying at Lincoln?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Lincoln has a growing student job market — retail, hospitality, tutoring, university admin and on-campus roles are all popular options.",
  },
  {
    question: "Does the University of Lincoln offer scholarships for Indian students?",
    answer:
      "Yes. Lincoln offers multiple scholarships including the Global Postgraduate Scholarship, the Vice-Chancellor's International Award and subject-specific bursaries. Most awards range from £2,000 – £5,000 and are either automatic (based on academic merit) or require a short essay application.",
  },
  {
    question: "How safe is Lincoln for international students?",
    answer:
      "Lincoln is one of the safest and most historic student cities in England, regularly ranked among the UK's friendliest cities. The campus has 24/7 security, well-lit walkways, CCTV and a dedicated Student Wellbeing service. The city has a warm, close-knit community of over 15,000 students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Lincoln graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. Lincoln has excellent graduate outcomes — consistently ranked in the UK top 25 for graduate-level employment (LEO) and recognised by major UK employers for producing work-ready graduates.",
  },
  {
    question: "Does GVK EduTech help with University of Lincoln admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Lincoln. We provide end-to-end support — program shortlisting, SOP/LOR guidance, application submission, CAS, visa filing, and pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Lincoln based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Lincoln portal with SOP & LORs",
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
  "Bank Statement (Proof of Funds — typically 28 months of tuition + living)",
  "Visa Application Form",
  "Offer / CAS Letter from the University of Lincoln",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus en-suite and studio accommodation" },
  { icon: Users, label: "Modern single & shared rooms for all budgets" },
  { icon: Utensils, label: "Self-catering kitchens & food courts — Indian options nearby" },
  { icon: Wifi, label: "High-speed WiFi across campus" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym, library & study spaces" },
];

const whyChoose = [
  {
    title: "Top 30 UK University",
    desc: "Ranked in the UK top 30 (Guardian University Guide 2026) and top 500 globally (QS World University Rankings)",
    icon: Star,
  },
  {
    title: "TEF Gold Rated",
    desc: "Awarded Gold in the UK's Teaching Excellence Framework (TEF 2023) for outstanding teaching quality",
    icon: Award,
  },
  {
    title: "Affordable Tuition",
    desc: "Tuition fees from £17,000/year — among the best value Russell Group–calibre universities in the UK",
    icon: PoundSterling,
  },
  {
    title: "Triple-Crown Business School",
    desc: "Lincoln International Business School holds AACSB & EQUIS accreditation — globally recognised for management education",
    icon: Briefcase,
  },
  {
    title: "Top 25 for Graduate Employment",
    desc: "Consistently ranked in the UK top 25 for graduate-level employment and in the top 10 for student satisfaction",
    icon: TrendingUp,
  },
  {
    title: "Historic Student City",
    desc: "Campus in the heart of Lincoln — a beautiful, historic cathedral city with a warm, friendly community",
    icon: MapPin,
  },
  {
    title: "Industry Placements",
    desc: "Optional 12-month paid professional placement with leading UK employers across business, tech and engineering",
    icon: Globe,
  },
  {
    title: "Diverse International Community",
    desc: "Join 15,000+ students from over 100 countries — a truly global, multicultural campus experience",
    icon: Users,
  },
];

const rankings = [
  { label: "Top 30", sub: "Guardian University Guide 2026 — UK Ranking" },
  { label: "TEF Gold", sub: "Teaching Excellence Framework 2023" },
  { label: "Top 500", sub: "QS World University Rankings — Global" },
  { label: "1992", sub: "Year Established — 30+ Years of Legacy" },
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
    desc: "Connect with 90,000+ Lincoln graduates working in 150+ countries",
  },
  {
    title: "Industry Partnerships",
    desc: "Links with top UK employers across business, engineering, health and life sciences",
  },
  {
    title: "2-Year Graduate Visa",
    desc: "Eligible for the UK Graduate Route visa — 2 years of post-study work",
  },
  {
    title: "Affordable Lincoln",
    desc: "Lower cost of living than London & major UK cities — great value for international students",
  },
  {
    title: "GVK End-to-End Support",
    desc: "Free counselling, application help, visa assistance & pre-departure orientation",
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════ */

export default function UniversityOfLincolnPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Lincoln Fees, Eligibility & Admission Process 2026"
        subtitle="TEF Gold · Top 30 UK · AACSB & EQUIS Accredited · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1992 · Lincoln, United Kingdom
              </p>
              <ColorfulHeading
                text="University of Lincoln"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Lincoln is a leading public research
                university located in the heart of the historic city of
                Lincoln, England. Founded in 1992, Lincoln has grown into
                one of the UK's top-ranked modern universities, earning
                TEF Gold for teaching quality and a top-30 UK spot in the
                Guardian University Guide 2026 — making it a top
                destination for Indian students seeking{" "}
                <Link
                  href="/masters/uk"
                  className="text-accent font-semibold hover:underline"
                >
                  Masters in the UK
                </Link>
                .
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Recognised by the UK's Quality Assurance Agency, the{" "}
                <strong className="text-foreground">
                  Association of Indian Universities (AIU)
                </strong>{" "}
                and the AACSB / EQUIS for business, Lincoln graduates
                are highly sought after by employers in the UK, India and
                around the world.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "TEF Gold",
                  "Top 30 UK",
                  "AACSB & EQUIS",
                  "AIU Recognised",
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
                  alt="University of Lincoln campus in Lincoln, United Kingdom"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">15,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 100+ countries
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE LINCOLN ──────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose the University of Lincoln"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From TEF Gold teaching quality to AACSB–EQUIS accredited
              business programs and one of the UK's best graduate
              employment records, Lincoln is a smart choice for Indian
              postgraduate aspirants.
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

      {/* ── 3. RECOGNITION (TEF / AACSB / EQUIS) ─────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "TEF", sub: "UK — Gold Teaching Excellence Framework" },
              { label: "AACSB", sub: "Association to Advance Collegiate Schools of Business" },
              { label: "EQUIS", sub: "European Quality Improvement System" },
              { label: "AIU", sub: "Recognised by Association of Indian Universities" },
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
              text="University of Lincoln — World Ranking 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A fast-rising UK university — ranked in the UK top 30 and
              top 500 globally, with consistent recognition across QS,
              THE and major UK guides.
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
              Indicative international tuition fees at Lincoln — among
              the most affordable top-30 UK universities with excellent
              value for a TEF Gold education.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    University of Lincoln — Indicative Tuition Fee (International)
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
                          Business & Management{" "}
                          <span className="text-muted-foreground text-xs">
                            (MSc Management, MBA, Marketing)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £19,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹20,90,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Computing & Data Science
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
                          Engineering & AI Programs
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £20,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹22,00,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Indicative Range
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £18,500–20,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹20.3–22 Lakhs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹110 (indicative). University
                    of Lincoln tuition fees are subject to revision by the
                    university. Living costs in Lincoln approx. £9,000/year
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
                  gbp: "£5,200",
                },
                {
                  label: "Food & Groceries",
                  sub: "Including Indian groceries",
                  gbp: "£2,800",
                },
                {
                  label: "Travel & Personal",
                  sub: "Books, transport, leisure",
                  gbp: "£2,000",
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
                      Tuition + living in Lincoln
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~£30,000</p>
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
              text="University of Lincoln Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A clear seven-step journey from your application to your
              first day at the University of Lincoln, England.
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
              text="Required Documents for Lincoln Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech
              will guide you through SOP writing, LOR formatting and CAS
              filing.
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
                text="University of Lincoln Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Lincoln's on-campus accommodation is in the heart of the
                city — safe, modern and built for international
                students. From en-suite rooms to self-catering kitchens
                with Indian food options nearby, settling in is easy and
                comfortable.
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
                  alt="University of Lincoln student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="University of Lincoln common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN LINCOLN ─────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Lincoln cathedral and city, United Kingdom"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&auto=format&fit=crop"
                  alt="Lincoln historic city centre"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Lincoln, United Kingdom
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Lincoln is a beautiful, historic cathedral city in the
                East Midlands of England — consistently ranked among the
                UK's friendliest and safest student cities. With its
                medieval castle, cobblestone streets and thriving
                student community, Lincoln gives Indian students the
                perfect blend of classic UK heritage and warm home
                comfort.
              </p>
              <ul className="space-y-3">
                {[
                  "Regularly ranked among the UK's top 10 most student-friendly cities",
                  "Growing Indian community with restaurants, grocery stores and cultural events",
                  "Significantly lower cost of living than London & major UK cities — excellent value",
                  "Iconic Lincoln Cathedral, medieval castle and Brayford Waterfront at your doorstep",
                  "Easy connectivity — 2 hours by train to London, 1 hour to Manchester and direct regional flights",
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
              text="Advantages of Studying at the University of Lincoln"
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
              Everything Indian students ask about the University of
              Lincoln and studying a Master's in the UK.
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
            Begin Your Masters at the University of Lincoln
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert UK counselors will guide you through the
            entire admission process — from program shortlisting and SOP
            review to your CAS, visa and first day at Lincoln, England.
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
