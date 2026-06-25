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
  Wifi,
  ChevronRight,
  Star,
  PoundSterling,
  Trophy,
  Building2,
  Briefcase,
  Send,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Sheffield a Russell Group university?",
    answer:
      "Yes. The University of Sheffield is a founding member of the Russell Group — the UK's association of 24 leading research-intensive universities. It is ranked among the top 100 universities in the world by the QS World University Rankings 2026, making it one of the most prestigious destinations for Indian students pursuing Masters degrees in the UK.",
  },
  {
    question: "What Masters programmes does the University of Sheffield offer for Indian students?",
    answer:
      "Sheffield offers 250+ postgraduate taught and research programmes across Engineering, Business, Computer Science, Data Science, AI, Biosciences, Medicine, Law, Architecture, Psychology and the Social Sciences. Popular choices for Indian students include MSc Computer Science, MSc Data Science, MBA, MSc AI, MSc Mechanical Engineering and MSc Management.",
  },
  {
    question: "What is the tuition fee at the University of Sheffield for international students?",
    answer:
      "Annual tuition fees for international Masters students at Sheffield range from approximately £22,000 to £30,000 (₹23–32 lakh) depending on the programme. Business, Engineering and Data Science courses sit at the higher end, while Social Sciences and Humanities programmes are more affordable. Scholarships of £2,000–£10,000 are available for eligible Indian students.",
  },
  {
    question: "What are the eligibility requirements for Indian students?",
    answer:
      "For most Masters programmes, Indian students need a 4-year bachelor's degree with 60% or above (or a First Class / 2:1 UK-equivalent classification). English language requirements are IELTS 6.5 (with no band below 6.0) or equivalent PTE / TOEFL scores. GMAT is required for the MBA programme.",
  },
  {
    question: "Does the University of Sheffield provide post-study work opportunities?",
    answer:
      "Yes. Sheffield graduates can apply for the UK Graduate Route visa, which allows up to 2 years of post-study work in the UK after completing an eligible Masters programme. Sheffield's award-winning Careers Service supports Indian students with CV, interview prep, employer events and one-to-one career coaching throughout their studies.",
  },
  {
    question: "Are there scholarships at the University of Sheffield for Indian students?",
    answer:
      "Yes. Indian students can apply for the Sheffield International Postgraduate Scholarship, departmental scholarships, GREAT Scholarships, the Commonwealth Shared Scholarship and external Chevening / Commonwealth Scholarships. Awards range from £2,000 to full tuition fee waivers based on academic merit.",
  },
  {
    question: "What is the cost of living in Sheffield for Indian students?",
    answer:
      "Sheffield is one of the most affordable major student cities in the UK. Monthly living costs (accommodation, food, transport, utilities) range from £900–£1,200 (₹95,000–₹1.3 lakh). The University of Sheffield guarantees on-campus accommodation for all new international postgraduates in their first year.",
  },
  {
    question: "How safe and student-friendly is Sheffield?",
    answer:
      "Sheffield is consistently ranked among the safest and happiest student cities in the UK. With over 60,000 students, a vibrant Indian community, dedicated Indian grocery stores, restaurants and temples, and excellent public transport, Sheffield offers Indian students the perfect blend of academic rigour and cultural familiarity.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Choose Programme",
    desc: "Pick your Masters programme at Sheffield and check country-specific entry requirements",
    icon: BookOpen,
  },
  {
    step: 2,
    title: "Prepare Documents",
    desc: "Collect transcripts, English test scores, SOP, LORs and passport — GVK assists end-to-end",
    icon: FileText,
  },
  {
    step: 3,
    title: "Submit Application",
    desc: "Apply via the Sheffield online portal or through GVK EduTech for guided admission",
    icon: Globe,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your conditional or unconditional offer letter within 2–4 weeks",
    icon: CheckCircle,
  },
  {
    step: 5,
    title: "Pay Deposit & CAS",
    desc: "Pay tuition deposit to receive your CAS (Confirmation of Acceptance for Studies)",
    icon: PoundSterling,
  },
  {
    step: 6,
    title: "Apply for UK Visa",
    desc: "Submit your Student Route visa application — GVK supports the full visa process",
    icon: ShieldCheck,
  },
  {
    step: 7,
    title: "Fly to Sheffield",
    desc: "Book flights to Manchester Airport — Sheffield is just 1 hour by train",
    icon: Send,
  },
  {
    step: 8,
    title: "Begin Studies",
    desc: "Attend orientation, settle into your guaranteed accommodation and start your Masters",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (minimum 6 months validity beyond course end date)",
  "10th & 12th Mark Sheets",
  "Bachelor's Degree Certificate & Transcripts (4-year degree, 60%+)",
  "IELTS / PTE / TOEFL Score (IELTS 6.5 typical, no band below 6.0)",
  "GMAT / GRE Score (MBA / select Business programmes)",
  "Statement of Purpose (SOP)",
  "2 Letters of Recommendation (LORs)",
  "Updated CV / Resume",
  "Work Experience Certificate (if applicable)",
  "Portfolio (for Architecture / Design programmes)",
  "Research Proposal (for MPhil / PhD applicants)",
  "Passport-size Photographs",
];

const hostelFeatures = [
  { icon: Home, label: "Guaranteed on-campus accommodation for new international postgraduates" },
  { icon: Users, label: "Wide range of en-suite and shared flats — choose what suits you best" },
  { icon: Wifi, label: "High-speed WiFi in all rooms and common areas" },
  { icon: ShieldCheck, label: "24/7 campus security, CCTV and secure fob access" },
  { icon: Clock, label: "On-site laundry, common rooms, study spaces and bike storage" },
  { icon: Building2, label: "Walking distance to libraries, labs, lecture halls and the Students' Union" },
];

const whyChoose = [
  {
    title: "Russell Group University",
    desc: "Founding member of the UK's elite Russell Group — world-class teaching and research",
    icon: Trophy,
  },
  {
    title: "Top 100 Global University",
    desc: "Ranked among the top 100 universities worldwide by QS World Rankings 2026",
    icon: Globe,
  },
  {
    title: "250+ Masters Programmes",
    desc: "Huge range of postgraduate taught and research courses across 50+ departments",
    icon: BookOpen,
  },
  {
    title: "Affordable UK City",
    desc: "Sheffield is consistently ranked as one of the most affordable UK student cities",
    icon: PoundSterling,
  },
  {
    title: "Generous Scholarships",
    desc: "Multiple merit-based scholarships worth £2,000–£10,000+ for Indian students",
    icon: Star,
  },
  {
    title: "Post-Study Work Visa",
    desc: "Eligible for the UK Graduate Route — up to 2 years of post-study work in the UK",
    icon: Briefcase,
  },
  {
    title: "Guaranteed Accommodation",
    desc: "First-year international postgraduates get guaranteed on-campus housing",
    icon: Home,
  },
  {
    title: "Award-Winning Careers Service",
    desc: "Dedicated support with CVs, interviews, employer events and one-to-one career coaching",
    icon: GraduationCap,
  },
];

export default function UniversityOfSheffieldPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Sheffield — Masters 2026"
        subtitle="Russell Group · Top 100 Global University · 250+ Masters Programmes · Generous Scholarships"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1905 · Sheffield, United Kingdom
              </p>
              <ColorfulHeading
                text="University of Sheffield"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The <strong className="text-foreground">University of Sheffield</strong> is
                a world-leading Russell Group research university located in Sheffield,
                South Yorkshire, England. Ranked in the <strong className="text-foreground">top 100 universities globally</strong> by the QS
                World University Rankings 2026, Sheffield is one of the most prestigious
                destinations for Indian students pursuing a Masters degree in the UK.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">250+ postgraduate programmes</strong>,
                world-class research facilities, award-winning teaching, generous scholarships
                and the UK Graduate Route post-study work visa, Sheffield gives Indian
                students an unmatched combination of academic excellence, affordability and
                global career opportunities.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Russell Group", "QS Top 100", "Top 30 UK", "Research Excellence", "AACSB Accredited"].map(
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
                  src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop"
                  alt="University of Sheffield campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">120+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">8000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    International students
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION BAND ───────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Russell Group", sub: "UK's Top 24 Research Universities" },
              { label: "QS Top 100", sub: "World University Rankings 2026" },
              { label: "AACSB", sub: "Business School Accreditation" },
              { label: "Athena Swan", sub: "Gender Equality in Higher Education" },
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
              text="Why Indian Students Choose Sheffield"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              World-class research, generous scholarships, affordable living and a thriving
              Indian community — Sheffield has everything Indian Masters aspirants need.
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
              text="Sheffield World & UK Rankings"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the world's top universities — a globally
              recognised name on your Masters degree.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { rank: "#92", source: "QS World University Rankings 2026" },
              { rank: "Top 20", source: "The Times & Sunday Times Good University Guide 2026" },
              { rank: "Russell Group", source: "Founding Member · UK Research Elite" },
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

      {/* ── TUITION FEES ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="University of Sheffield Masters Fees 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Transparent tuition fees by programme — Indian students can also apply for
              multiple scholarships to reduce costs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Indicative Annual Tuition Fee
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Programme Type
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          GBP
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Computer Science
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £26,000 – £29,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹27–31 Lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Business, MBA & Management
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £24,000 – £30,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹25–32 Lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Data Science, AI & Maths
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £25,000 – £28,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹26–30 Lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Biosciences, Medicine & Health
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £24,000 – £27,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹25–29 Lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Arts, Humanities & Social Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £20,000 – £24,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹21–25 Lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Average Total (1-Year Masters)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~£25,500
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~₹27 Lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹107 (indicative). Tuition fees vary by
                    programme and are confirmed at offer stage.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Monthly Living Costs
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus en-suite room",
                  gbp: "£650 – £850",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catered, weekly shop",
                  gbp: "£150 – £200",
                },
                {
                  label: "Transport",
                  sub: "Bus pass / student travel",
                  gbp: "£50 – £80",
                },
                {
                  label: "Personal & Misc",
                  sub: "Books, leisure, phone",
                  gbp: "£80 – £120",
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
                    <p className="text-base font-bold text-accent">{item.gbp}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      Total Programme Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + living for 12 months
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~£36,000</p>
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
              Clear, programme-specific entry requirements. Indian students with strong
              academics have excellent chances of admission.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Qualification",
                desc: "4-year bachelor's degree with 60% or above (UK 2:1 equivalent). Top programmes may require 65%–70%+.",
              },
              {
                title: "English Proficiency",
                desc: "IELTS 6.5 overall (no band below 6.0). PTE / TOEFL scores accepted as equivalents.",
              },
              {
                title: "GMAT / GRE",
                desc: "GMAT required for the MBA programme. GRE optional for select Engineering and Science programmes.",
              },
              {
                title: "Work Experience",
                desc: "2–3 years of relevant work experience preferred for MBA and select Management programmes.",
              },
              {
                title: "Statement of Purpose",
                desc: "A strong SOP explaining your motivation, academic background and career goals is essential.",
              },
              {
                title: "Letters of Recommendation",
                desc: "Two LORs from academic professors or professional supervisors who know your work well.",
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
              text="University of Sheffield Admission Process 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A clear, step-by-step journey from application to your first day in
              Sheffield. GVK EduTech supports you at every stage.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/16*100%+1.25rem)] right-[calc(1/16*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-8 gap-6">
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
              text="Required Documents for Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these before applying — GVK EduTech will help review, refine and
              submit your application to the University of Sheffield.
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

      {/* ── HOSTEL & ACCOMMODATION ────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Accommodation for International Students"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Sheffield guarantees on-campus accommodation for all
                new international postgraduate students in their first year. Choose from
                en-suite rooms, shared flats, or studio apartments — all within walking
                distance of lecture halls, libraries, restaurants and the Students' Union.
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
                  alt="Sheffield student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Sheffield common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN SHEFFIELD ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Sheffield city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400&auto=format&fit=crop"
                  alt="Sheffield Peak District"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Sheffield
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Sheffield is one of the UK's greenest and most affordable cities, with
                the Peak District National Park on its doorstep. It hosts a vibrant
                student community of over 60,000, a strong Indian diaspora, dedicated
                Indian restaurants and grocery stores, plus excellent transport links
                to London, Manchester and Edinburgh.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the safest and most affordable student cities in the UK",
                  "Direct trains to London (2 hrs), Manchester (1 hr) and Edinburgh (3.5 hrs)",
                  "Thriving Indian community with restaurants, grocery stores and temples",
                  "Beautiful Peak District on the doorstep for hiking and weekend trips",
                  "Active Students' Union with 300+ societies including Indian societies",
                  "Excellent part-time work opportunities during studies",
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
              text="Advantages of Studying at Sheffield"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The University of Sheffield combines academic prestige, research excellence
              and exceptional value — the smart choice for Indian Masters aspirants in 2026.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Russell Group Recognition",
                desc: "Founding member of the UK's elite Russell Group — prestigious global brand",
                icon: Trophy,
              },
              {
                title: "Generous Scholarships",
                desc: "Multiple scholarships worth £2,000–£10,000+ for eligible Indian students",
                icon: Star,
              },
              {
                title: "2-Year Post-Study Work Visa",
                desc: "Eligible for the UK Graduate Route visa — work in the UK after graduation",
                icon: Briefcase,
              },
              {
                title: "Award-Winning Careers Service",
                desc: "Dedicated CV, interview and employer-event support throughout your Masters",
                icon: GraduationCap,
              },
              {
                title: "Affordable UK Living",
                desc: "One of the most affordable major student cities — lower cost than London or Manchester",
                icon: PoundSterling,
              },
              {
                title: "Research-Led Teaching",
                desc: "Learn from world-leading researchers in state-of-the-art facilities",
                icon: BookOpen,
              },
              {
                title: "Top 100 Global University",
                desc: "QS World Top 100 — a globally recognised name on your CV",
                icon: Globe,
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end application, scholarship, visa & pre-departure assistance from Hyderabad",
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
              Answers to the most common questions Indian students ask about the
              University of Sheffield and studying in the UK.
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
            2026 Intake Now Open · Apply Early for Scholarships
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters Journey at the University of Sheffield, UK
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join one of the UK's top Russell Group universities and unlock world-class
            research, teaching and global career opportunities. Our Hyderabad-based
            counsellors will guide you through every step — from shortlisting to visa.
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
              <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C%20I%20want%20to%20know%20more%20about%20Masters%20at%20the%20University%20of%20Sheffield%2C%20UK.">
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