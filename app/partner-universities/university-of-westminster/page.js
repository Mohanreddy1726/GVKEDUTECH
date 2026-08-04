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
  TrendingUp,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Westminster recognised in India?",
    answer:
      "Yes. The University of Westminster is a UK government-recognised public university and its degrees are accepted by Indian employers, the Association of Indian Universities (AIU) via equivalence, and global accreditation bodies. It is a member institution under the UK Office for Students and is widely respected by Indian companies and universities worldwide.",
  },
  {
    question: "What is the duration of Master's programs at the University of Westminster?",
    answer:
      "Most taught Master's (MSc / MA / MBA) programs at Westminster run for 1 year full-time (12 months). Some professional Master's with a placement year or a January start are 18–24 months. Research degrees (MRes, MPhil) usually take 1–2 years depending on the mode of study.",
  },
  {
    question: "Does the University of Westminster require IELTS?",
    answer:
      "Most postgraduate programs at Westminster require an overall IELTS Academic score of 6.5 with no band below 5.5–6.0 (varies by program). Indian students with a strong academic record in English-medium institutions may be eligible for a waiver or pre-sessional English — speak to GVK EduTech for the latest exemptions.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Westminster?",
    answer:
      "For the 2026 intake, the indicative tuition fee for most taught Master's programs is GBP 14,000 – 17,000 per year (around INR 14.5–18 lakh). MBA and certain professional programs cost between GBP 17,000 – 21,000. Scholarships and early-bird discounts can reduce this by up to £3,000.",
  },
  {
    question: "Can Indian students work part-time while studying at the University of Westminster?",
    answer:
      "Yes. On a UK Student Route visa you can work up to 20 hours per week during term time and full-time during holidays. The Westminster campuses are located in the heart of London — making part-time work in retail, hospitality, hospitality, tutoring and on-campus jobs easily accessible.",
  },
  {
    question: "Does Westminster offer scholarships for Indian students?",
    answer:
      "Yes. The University of Westminster offers a range of international scholarships including the Vice-Chancellor's Scholarship, Country-Specific Scholarships (including India), and GREAT Scholarships. Most awards are worth £1,000 – £5,000 against tuition fees and are awarded based on academic merit.",
  },
  {
    question: "How safe is central London for international students at Westminster?",
    answer:
      "Westminster's campuses are located in the heart of central London — one of the most vibrant, well-connected and student-friendly cities in the world. The university offers 24/7 security at halls of residence, a dedicated international student support team, and easy access to public transport.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Westminster graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a UK Master's degree. University of Westminster graduates regularly transition into roles across London in finance, media, tech, consulting and the creative industries — leveraging the university's strong central London industry links.",
  },
  {
    question: "Does GVK EduTech help with University of Westminster admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for the University of Westminster. We provide end-to-end support — from shortlisting, SOP/LOR guidance, application submission, CAS, visa filing to pre-departure and post-arrival support in London.",
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
    desc: "Shortlist the right MSc / MA / MBA at Westminster based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Westminster portal with SOP & LORs",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your conditional or unconditional offer letter within 2–4 weeks",
    icon: Award,
  },
  {
    step: 5,
    title: "Pay Tuition Deposit",
    desc: "Pay the CAS deposit and share financial documents for the visa file",
    icon: PoundSterling,
  },
  {
    step: 6,
    title: "Fly to London",
    desc: "Receive CAS, attend visa interview and begin your UK Masters journey",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (minimum 18 months validity)",
  "10th & 12th Mark Sheets and Passing Certificates",
  "Bachelor's Degree Transcripts & Certificate (consolidated mark sheet)",
  "Bachelor's Degree Medium of Instruction (MOI) Letter",
  "IELTS / TOEFL / PTE Score Card (or MOI-based waiver)",
  "Statement of Purpose (SOP) — 800–1000 words",
  "Letters of Recommendation (LORs) — 2 academic / 1 professional",
  "Updated CV / Resume",
  "Work Experience Certificates (if applicable for MBA / MIM)",
  "Portfolio (for design, architecture, media programs)",
  "Passport Size Photographs (white background)",
  "Financial Documents — Bank statements, affidavits, sponsor letter",
];

const whyChoose = [
  {
    title: "Founded in 1838",
    desc: "One of the oldest universities in the UK with 185+ years of academic excellence and heritage",
    icon: Star,
  },
  {
    title: "Heart of London",
    desc: "Four campuses in central London — at Regent Street, Marylebone, Harrow and Tavistock Place",
    icon: MapPin,
  },
  {
    title: "£100M+ Investment",
    desc: "Recently modernised campuses with state-of-the-art facilities, libraries and student spaces",
    icon: TrendingUp,
  },
  {
    title: "Industry-Led Courses",
    desc: "Programs co-designed with top London employers like BBC, NHS, Lloyds, PWC and Deloitte",
    icon: Briefcase,
  },
  {
    title: "Strong Employability",
    desc: "Westminster graduates rank among the top UK universities for career outcomes and starting salaries",
    icon: Award,
  },
  {
    title: "Diverse Community",
    desc: "20,000+ students from 165+ countries — one of the most multicultural campuses in the UK",
    icon: Users,
  },
  {
    title: "Russell-Group Quality Teaching",
    desc: "Triple-crown accredited business school (AACSB, EQUIS, AMBA) for MBA and MIM programs",
    icon: ShieldCheck,
  },
  {
    title: "London Network",
    desc: "Unrivalled access to internships, networking events and graduate jobs across central London",
    icon: Globe,
  },
];

const ranking = [
  { label: "Country Rank", value: "Top 80" },
  { label: "Founded", value: "1838" },
  { label: "Students", value: "20,000+" },
  { label: "Countries", value: "165+" },
  { label: "QS Stars", value: "5 Stars" },
  { label: "TEF Award", value: "Silver" },
];

export default function UniversityOfWestminsterPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Westminster — Master's 2026"
        subtitle="London · Triple-Crown Business School · 185+ Years of Heritage"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1838 · London, United Kingdom
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                University of Westminster — Fees, Eligibility &amp; Admission 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The <strong className="text-foreground">University of Westminster</strong> is
                one of London&apos;s oldest and most prestigious public universities, with
                a 185+ year legacy of academic excellence, four campuses in the heart of
                central London, and a vibrant community of 20,000+ students from 165+
                countries.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With a triple-crown accredited business school, industry-led Master&apos;s
                programs, and an unbeatable central London location, Westminster is the
                ideal choice for Indian students seeking a globally recognised UK degree
                with strong career outcomes. Indicative tuition starts at around{" "}
                <strong className="text-foreground">£14,000 / ₹14.5 lakh</strong> per year.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["UK Public University", "Triple-Crown Business School", "Office for Students", "Russell-Group Teaching", "Est. 1838"].map(
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
                  <Link href="/contact">Free Counselling</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/masters/uk">Masters in UK</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop"
                  alt="University of Westminster London campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">185+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of heritage
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">20,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 165+ countries
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

      {/* ── WHY CHOOSE WESTMINSTER ────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose the University of Westminster"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From a triple-crown business school to four iconic London campuses,
              Westminster offers Indian students the complete UK Master&apos;s experience.
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
                Globally Recognised
              </p>
              <ColorfulHeading
                text="Accreditation & World Ranking"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The University of Westminster&apos;s degrees are recognised by employers,
                universities and government bodies across the world. Its business school
                holds the prestigious &quot;triple-crown&quot; accreditation (AACSB, EQUIS
                and AMBA) — a distinction held by fewer than 1% of business schools
                worldwide.
              </p>
              <ul className="space-y-3">
                {[
                  "Recognised by the UK Office for Students (OfS)",
                  "Triple-crown accredited business school (AACSB, EQUIS, AMBA)",
                  "Listed in the QAA UK Quality Code for Higher Education",
                  "Degrees accepted by AIU (India) via equivalence route",
                  "Member of the Association of Commonwealth Universities (ACU)",
                  "Awarded TEF Silver for outstanding teaching quality",
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
                    <p className="text-3xl font-bold text-accent">1838</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Year Established
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">Top 80</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      UK University Ranking
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">20,000+</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Students Enrolled
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/30">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent">165+</p>
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

      {/* ── TUITION FEES ────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="University of Westminster Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Transparent, all-inclusive fee structure with scholarships up to £5,000
              for outstanding Indian students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Annual Tuition Fee (Indicative)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Program Type
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
                        <td className="px-6 py-4 text-foreground">MSc / MA (Most Programs)</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £14,000 – 17,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14,70,000 – 17,85,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MBA / MIM</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,000 – 21,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17,85,000 – 22,05,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MPhil / MRes (Research)</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £13,500 – 15,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14,17,500 – 16,27,500
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Average Master&apos;s (1 Year)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~£15,500
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~₹16,27,500
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹105 (indicative). Living costs extra.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Monthly Living Costs (London)
              </p>
              {[
                { label: "Accommodation", sub: "Halls of residence (shared)", gbp: "£700 – 950" },
                { label: "Food & Groceries", sub: "Self-cooked / meal plans", gbp: "£250 – 350" },
                { label: "Transport", sub: "Oyster Card / monthly pass", gbp: "£160 – 180" },
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
                      Tuition + Living estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~£27,000</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Want a country-level fee comparison? See our complete guide to{" "}
            <Link
              href="/masters/uk"
              className="text-accent font-semibold hover:underline"
            >
              Master&apos;s in the UK for 2026
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
              Clear, transparent requirements for Indian Bachelor&apos;s degree holders
              applying for a UK Master&apos;s at Westminster.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor&apos;s degree (3 or 4 years) with 55% and above from a recognised Indian university. Higher marks required for competitive programs.",
              },
              {
                title: "English Proficiency",
                desc: "IELTS 6.5 (no band below 5.5–6.0) or equivalent TOEFL / PTE score. MOI-based waivers may apply for English-medium institutions.",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA / MIM programs — typically 2–3 years of full-time work experience. Not mandatory for MSc / MA programs.",
              },
              {
                title: "Documents",
                desc: "SOP, 2 LORs, updated CV, transcripts and a valid passport. Portfolio required for design, architecture and media programs.",
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
              text="Westminster Admission Process for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A simple, six-step journey from your free counselling session to your
              first day at the University of Westminster in London.
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
              text="Documents Required for University of Westminster Admission"
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

      {/* ── ACCOMMODATION / HOSTEL ──────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Westminster Halls of Residence"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Westminster offers modern, fully-furnished halls of
                residence in prime central London locations — within easy reach of
                Regent Street, Marylebone and the West End. Indian students love the
                convenience, security and vibrant international community.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Home, label: "Halls in central London — walking distance to campuses" },
                  { icon: Users, label: "Mix of UK and international students from 165+ countries" },
                  { icon: Wifi, label: "Free high-speed Wi-Fi, study rooms and common lounges" },
                  { icon: ShieldCheck, label: "24/7 security, CCTV and on-site wardens" },
                  { icon: Utensils, label: "Self-catered and catered meal plan options" },
                  { icon: Building2, label: "Easy access to Tube, bus and Overground networks" },
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
                  alt="Westminster halls room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Westminster halls common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN LONDON ──────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Central London student life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&auto=format&fit=crop"
                  alt="Westminster London"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in London
              </p>
              <ColorfulHeading
                text="Student Life in London"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Westminster&apos;s central London location places students at the heart of
                one of the world&apos;s most dynamic cities — surrounded by global
                businesses, world-class culture, iconic landmarks and a thriving Indian
                diaspora. The career, networking and lifestyle opportunities here are
                unmatched.
              </p>
              <ul className="space-y-3">
                {[
                  "Central London campuses next to Oxford Street, Soho and the West End",
                  "Unmatched part-time work and internship opportunities in every sector",
                  "Massive Indian community and culture in areas like Southall, Wembley and East London",
                  "Excellent transport — Tube, Overground, Buses, and the new Elizabeth Line",
                  "World-class museums, libraries, theatres and music venues — most free",
                  "Direct flights to all major Indian cities — Delhi, Mumbai, Bengaluru, Hyderabad",
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
              text="Advantages of Studying a Master's at Westminster"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Here&apos;s why Indian students pick the University of Westminster over other
              UK universities for their Master&apos;s.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Triple-Crown Business School",
                desc: "Westminster Business School holds AACSB, EQUIS and AMBA — fewer than 1% of business schools worldwide have this",
              },
              {
                title: "Prime London Location",
                desc: "Four campuses in central London — perfect for internships, networking and graduate careers",
              },
              {
                title: "Industry-Linked Curriculum",
                desc: "Programs co-designed with top London employers like BBC, NHS, PwC, Deloitte and Lloyds",
              },
              {
                title: "Strong Employability",
                desc: "Westminster graduates rank among the top UK universities for career outcomes and starting salaries",
              },
              {
                title: "2-Year Graduate Visa",
                desc: "Stay and work in the UK for 2 years after your Master's via the Graduate Route visa",
              },
              {
                title: "Affordable London Fees",
                desc: "Master's starting at £14,000 — competitive for a central London Russell-Group-equivalent university",
              },
              {
                title: "Diverse, Welcoming Campus",
                desc: "20,000+ students from 165+ countries — one of the most multicultural student bodies in the UK",
              },
              {
                title: "End-to-End Support",
                desc: "GVK EduTech handles shortlisting, SOP/LOR, application, CAS, visa and pre-departure briefing",
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
              Everything Indian students and parents ask about the University of
              Westminster, London and the UK Master&apos;s admission process.
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
            Apply Now for a Master&apos;s at the University of Westminster, London
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Talk to our UK admissions experts today. Get a free profile evaluation,
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
                Book Free Counselling
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
              { href: "/masters/uk", label: "Masters in UK" },
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
