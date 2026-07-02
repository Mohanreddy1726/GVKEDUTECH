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
  TrendingUp,
  MapPin,
  Briefcase,
} from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   NEWCASTLE UNIVERSITY — CONTENT DATA
══════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is Newcastle University a Russell Group university?",
    answer:
      "Yes. Newcastle University is a founding member of the Russell Group — the UK's prestigious association of 24 leading research-intensive universities. It is consistently ranked among the top universities in the UK and the world, and is recognised globally for the quality of its teaching and research.",
  },
  {
    question: "What is the world ranking of Newcastle University?",
    answer:
      "Newcastle University is consistently ranked in the QS World Top 150 and Times Higher Education World Top 200. It is one of the most popular UK universities among international students and is widely respected by employers and academics across the world.",
  },
  {
    question: "What postgraduate programs does Newcastle University offer for Indian students?",
    answer:
      "Newcastle University offers a wide range of Masters (MSc / MA / MEng / LLM) programs across engineering, business, computing, life sciences, medicine, humanities, architecture and social sciences. Popular programs for Indian students include MSc Data Science, MSc Computer Science, MBA, MSc Mechanical Engineering, MSc Civil Engineering, MA Architecture and MSc Biotechnology.",
  },
  {
    question: "What is the tuition fee for international Masters students at Newcastle University?",
    answer:
      "International Masters tuition fees at Newcastle University typically range from £22,000 to £32,000 per year (₹23–34 lakh), depending on the program. MBA fees are higher at around £32,000–£35,000. Engineering, science and business programs fall in the mid-range. Scholarships of £2,000–£5,000 are available for eligible international students.",
  },
  {
    question: "Does Newcastle University offer scholarships for Indian students?",
    answer:
      "Yes. Newcastle University offers a range of scholarships for Indian and international students, including the Vice-Chancellor's Excellence Scholarship, the Global Excellence Scholarship, and country-specific bursaries. GVK EduTech helps you identify and apply for the right scholarship to reduce your overall cost of study.",
  },
  {
    question: "Is IELTS / TOEFL required for admission to Newcastle University?",
    answer:
      "Yes. International students need to demonstrate English language proficiency. Newcastle University typically requires an overall IELTS score of 6.5 (with no band below 5.5) for most Masters programs, with higher requirements (7.0–7.5) for programs in education, law and journalism. TOEFL iBT and PTE are also accepted.",
  },
  {
    question: "Does Newcastle University offer post-study work visa?",
    answer:
      "Yes. The UK Graduate Route visa allows Newcastle University graduates to stay and work in the UK for 2 years after completing a Masters degree (3 years for PhD). This gives Indian students valuable international work experience and a clear pathway to long-term UK career and settlement opportunities.",
  },
  {
    question: "How safe is Newcastle for Indian students?",
    answer:
      "Newcastle upon Tyne is one of the safest and most student-friendly cities in the UK. It has a large international student community, an active Indian Society, dedicated Indian grocery stores and restaurants, and excellent public transport. The university provides 24/7 campus security, dedicated international student support and a thriving campus life.",
  },
  {
    question: "What is the cost of living in Newcastle for Indian students?",
    answer:
      "Newcastle is significantly more affordable than London and other major UK cities. The average monthly cost of living is £800–£1,100 (₹85,000–₹1,20,000) including accommodation, food, transport and personal expenses. The university offers on-campus and city-centre housing options at competitive rates.",
  },
  {
    question: "What are the career prospects after studying at Newcastle University?",
    answer:
      "Newcastle University is one of the UK's top universities for graduate employability, with 95% of graduates in work or further study within 6 months. The university has strong links with global employers including Accenture, NHS, Siemens, PwC, Rolls-Royce, and many more. GVK EduTech's dedicated career support helps you prepare applications, CVs and interview skills.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Choose Your Program",
    desc: "Shortlist your preferred Masters program and check entry requirements with our counselors",
    icon: FileText,
  },
  {
    step: 2,
    title: "Prepare Documents",
    desc: "Get transcripts, English test scores (IELTS / TOEFL), LORs and SOP ready for application",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Submit Application",
    desc: "Apply directly via Newcastle University portal or through GVK EduTech for guided support",
    icon: ArrowRight,
  },
  {
    step: 4,
    title: "Receive Offer Letter",
    desc: "Newcastle issues a conditional or unconditional offer letter within 4–6 weeks",
    icon: GraduationCap,
  },
  {
    step: 5,
    title: "Pay Tuition Deposit",
    desc: "Confirm your seat by paying the tuition fee deposit as mentioned in the offer letter",
    icon: IndianRupee,
  },
  {
    step: 6,
    title: "Apply for UK Student Visa",
    desc: "We help you file the UK Tier-4 student visa with CAS letter from Newcastle University",
    icon: Globe,
  },
];

const documents = [
  "Valid Passport (min. 6 months validity beyond course end date)",
  "Bachelor's Degree Certificate & Transcripts",
  "Bachelor's Mark Sheets (all semesters)",
  "IELTS / TOEFL / PTE Score Card",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (LORs) — 2 academic / 1 professional",
  "Updated Resume / CV",
  "Work Experience Certificate (if applicable, especially for MBA)",
  "Portfolio (for Architecture / Design programs)",
  "GRE / GMAT Score (for select programs)",
  "Financial Proof — Bank statements & sponsorship letters",
  "Passport Size Photographs (white background)",
];

const whyChoose = [
  {
    title: "Russell Group University",
    desc: "Founding member of the UK's prestigious Russell Group — recognised globally for research excellence and teaching quality",
    icon: Star,
  },
  {
    title: "QS World Top 150",
    desc: "Consistently ranked in the QS World University Rankings Top 150 and Times Higher Education Top 200",
    icon: TrendingUp,
  },
  {
    title: "Affordable UK City",
    desc: "Newcastle offers a significantly lower cost of living than London and southern UK cities — better value for money",
    icon: IndianRupee,
  },
  {
    title: "Strong Employability",
    desc: "95% of graduates employed or in further study within 6 months — strong links with global employers",
    icon: Briefcase,
  },
  {
    title: "2-Year Post-Study Work Visa",
    desc: "Eligible for the UK Graduate Route — 2 years of post-study work in the UK after completing your Masters",
    icon: Globe,
  },
  {
    title: "Research Excellence",
    desc: "Top-rated research university in the UK (REF 2021) with world-class facilities and academic staff",
    icon: Award,
  },
  {
    title: "Welcoming City",
    desc: "One of the friendliest and safest cities in the UK with a large Indian student community and cultural events",
    icon: MapPin,
  },
  {
    title: "GVK End-to-End Support",
    desc: "Application, scholarship, visa, forex, accommodation & pre-departure briefing — all under one roof",
    icon: ShieldCheck,
  },
];

const rankings = [
  { label: "Top 150", sub: "QS World University Rankings" },
  { label: "Russell", sub: "Founding Member of the Russell Group" },
  { label: "Top 200", sub: "Times Higher Education World Ranking" },
  { label: "95%", sub: "Graduate Employability Rate" },
];

const advantages = [
  {
    title: "Russell Group",
    desc: "Founding member of the UK's most prestigious university alliance",
  },
  {
    title: "Affordable Fees",
    desc: "Tuition and living costs significantly lower than London-based universities",
  },
  {
    title: "Global Recognition",
    desc: "Degree accepted by employers, universities and governments worldwide",
  },
  {
    title: "Post-Study Work Visa",
    desc: "Eligible for the 2-year UK Graduate Route visa after completion",
  },
  {
    title: "Industry Links",
    desc: "Strong partnerships with global employers — excellent placement record",
  },
  {
    title: "Research Excellence",
    desc: "Top-rated research university in the UK (REF 2021)",
  },
  {
    title: "Scholarships",
    desc: "Multiple merit and need-based scholarships for international students",
  },
  {
    title: "GVK Support",
    desc: "End-to-end guidance — application, scholarship, visa, and travel",
  },
];

/* ══════════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════════ */

export default function NewcastleUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Newcastle University Fees, Eligibility & Admission Process 2026"
        subtitle="Russell Group · QS World Top 150 · 2-Year UK Post-Study Work Visa"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1963 · Newcastle upon Tyne, UK
              </p>
              <ColorfulHeading
                text="Newcastle University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Newcastle University is a leading Russell Group research
                university located in Newcastle upon Tyne, North East
                England. With roots dating back to 1834 and a Royal Charter
                granted in 1963, Newcastle is consistently ranked among the{" "}
                <strong className="text-foreground">top 150 universities
                in the world</strong> (QS) and is one of the most popular UK
                destinations for Indian students pursuing{" "}
                <Link
                  href="/masters/uk"
                  className="text-accent font-semibold hover:underline"
                >
                  Masters in the UK
                </Link>
                .
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Recognised for its world-class research, modern campus and
                strong industry links, Newcastle graduates enjoy a{" "}
                <strong className="text-foreground">95% employability
                rate</strong>. With affordable tuition, lower living costs
                than London, and a 2-year UK Graduate Route post-study work
                visa, Newcastle offers exceptional value for ambitious
                Indian students.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Russell Group",
                  "QS Top 150",
                  "UK Graduate Route",
                  "High Employability",
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
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&auto=format&fit=crop"
                  alt="Newcastle University campus in Newcastle upon Tyne, UK"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top 150</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    QS World University Ranking
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">95%</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Graduate employability
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE NEWCASTLE ──────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Newcastle University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A Russell Group UK university with world-class research, a
              prime North England location and exceptional graduate
              outcomes.
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

      {/* ── 3. RECOGNITION ──────────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Russell", sub: "Founding Member of the Russell Group" },
              { label: "QS Top 150", sub: "QS World University Rankings" },
              { label: "UK Visas", sub: "Eligible for UK Graduate Route Visa" },
              { label: "REF 2021", sub: "Top-Rated Research University" },
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
              text="Newcastle University — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A founding member of the Russell Group, ranked among the
              world's best universities for teaching, research and
              employability.
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
              text="Masters Tuition Fees 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              More affordable than London-based universities — with
              scholarships available to reduce your overall cost of study.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Newcastle University — International Masters Fees
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
                          GBP / Year
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Computing (MSc)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £25,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹26,50,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Business / Management (MSc)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £27,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹28,62,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Life Sciences / Biotechnology
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £24,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹25,44,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Architecture / Planning (MA)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £22,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹23,32,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          MBA
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £33,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹34,98,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹106 (indicative). Newcastle
                    University fees are subject to revision by the university.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Living cost cards */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Monthly Living Costs
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus / city housing",
                  gbp: "£450–£600",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catered or meal plans",
                  gbp: "£180–£250",
                },
                {
                  label: "Transport",
                  sub: "Metro, bus, walking",
                  gbp: "£60–£80",
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
                      Monthly Total
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All living expenses
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~£950</p>
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
              Standard UK postgraduate entry requirements — straightforward
              and transparent.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree (4-year) with 60% or above from a recognised Indian university",
              },
              {
                title: "English Proficiency",
                desc: "IELTS 6.5 overall (min 5.5 each band) — or equivalent TOEFL / PTE scores",
              },
              {
                title: "Work Experience",
                desc: "2–5 years preferred for MBA applicants; not required for most MSc programs",
              },
              {
                title: "Entrance Tests",
                desc: "GMAT/GRE for MBA and select business programs; not required for most courses",
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
              text="Newcastle University Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A clear six-step journey from your application to your first
              day at Newcastle University, UK.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/12*100%+1.25rem)] right-[calc(1/12*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-6 gap-6">
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
              text="Required Documents for Newcastle University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech will
              guide you through every step of the application.
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

      {/* ── 9. ACCOMMODATION / STUDENT LIFE ──────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Living in Newcastle
              </p>
              <ColorfulHeading
                text="Accommodation & Student Life"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Newcastle University guarantees accommodation for all new
                international students in modern, well-equipped halls of
                residence. The city is compact, walkable and welcoming —
                offering the perfect environment for academic focus,
                friendship and adventure.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Home, label: "Guaranteed first-year accommodation" },
                  { icon: Users, label: "Self-catered & catered options" },
                  { icon: Utensils, label: "Multi-cuisine dining on campus" },
                  { icon: Wifi, label: "High-speed WiFi in all residences" },
                  { icon: ShieldCheck, label: "24/7 campus security & support" },
                  { icon: Clock, label: "Walking distance to city centre" },
                ].map((f, i) => {
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
                  alt="Newcastle University student residence"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Newcastle University common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN UK ───────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Newcastle upon Tyne city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400&auto=format&fit=crop"
                  alt="Newcastle Tyne Bridge"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Newcastle, UK
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Newcastle upon Tyne is consistently ranked among the UK's
                best student cities — known for its friendly people, vibrant
                nightlife, rich industrial heritage and easy access to
                Edinburgh, York, the Lake District and London.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the UK's friendliest, safest and most affordable cities",
                  "Vibrant student city with cafes, music venues and sports culture",
                  "Large Indian community with Indian grocery stores and restaurants",
                  "Iconic Tyne Bridge, Quayside and the famous Angel of the North",
                  "Strong Indian Society at Newcastle University for cultural support",
                  "Easy weekend travel to Edinburgh, Lake District, Manchester & London",
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
              text="Advantages of Studying at Newcastle University"
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
              Everything Indian students ask about Newcastle University and
              Masters in the UK.
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
            Begin Your Masters Journey at Newcastle University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert counselors will guide you through the
            entire admission process — from university shortlisting and
            scholarships to UK student visa and pre-departure briefing.
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
