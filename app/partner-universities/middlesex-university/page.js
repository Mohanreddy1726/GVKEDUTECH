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
  Award,
  Briefcase,
  Building2,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Middlesex University recognised in India?",
    answer:
      "Yes. Middlesex University is a UK government-recognised public university and its degrees are accepted by Indian employers, the Association of Indian Universities (AIU) via equivalence, and global accreditation bodies. It is a member institution under the UK Office for Students and is widely respected by Indian companies and universities worldwide.",
  },
  {
    question: "What is the duration of Master's programs at Middlesex University?",
    answer:
      "Most taught Master's (MSc / MA / MBA) programs at Middlesex run for 1 year full-time (12 months). Some professional Master's with a placement year or a January/February start are 18–24 months. Research degrees (MRes, MPhil) usually take 1–2 years.",
  },
  {
    question: "Does Middlesex University require IELTS?",
    answer:
      "Most postgraduate programs at Middlesex require an overall IELTS Academic score of 6.5 with no band below 5.5–6.0 (varies by program). Indian students with a strong academic record in English-medium institutions may be eligible for a waiver — speak to GVK EduTech for the latest exemptions.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at Middlesex University?",
    answer:
      "For the 2026 intake, the indicative tuition fee for most taught Master's programs is GBP 14,000 – 17,000 per year (around INR 14.5–18 lakh). MBA and certain professional programs cost between GBP 18,000 – 22,000. Scholarships and early-bird discounts can reduce this by up to £3,000.",
  },
  {
    question: "Can Indian students work part-time while studying at Middlesex?",
    answer:
      "Yes. On a UK Student Route visa you can work up to 20 hours per week during term time and full-time during holidays. The Hendon campus in North London is well connected to central London — making part-time work in retail, hospitality, tutoring and on-campus jobs easily accessible.",
  },
  {
    question: "Does Middlesex offer scholarships for Indian students?",
    answer:
      "Yes. Middlesex University offers a range of international scholarships including the Vice-Chancellor's Scholarship, Country-Specific Scholarships (including India), and GREAT Scholarships. Most awards are worth £1,000 – £5,000 against tuition fees.",
  },
  {
    question: "How safe is North London (Hendon) for international students?",
    answer:
      "The Hendon campus in the London Borough of Barnet is one of the safest areas in London, with a large international student community, dedicated on-campus support, 24/7 security at halls of residence, and easy access to central London via the Northern Line tube.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Middlesex graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a UK Master's degree. Middlesex graduates regularly transition into roles across London in finance, tech, consulting, healthcare and creative industries — leveraging the university's strong industry links.",
  },
  {
    question: "Does GVK EduTech help with Middlesex University admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for Middlesex University. We provide end-to-end support — from shortlisting, SOP/LOR guidance, application submission, CAS, visa filing to pre-departure and post-arrival support in the UK.",
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
    desc: "Shortlist the right MSc / MA / MBA at Middlesex based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the Middlesex University portal with SOP & LORs",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your conditional / unconditional offer letter within 2–4 weeks",
    icon: CheckCircle,
  },
  {
    step: 5,
    title: "Pay Deposit & CAS",
    desc: "Pay the tuition deposit and receive your CAS to apply for the UK Student Route visa",
    icon: Globe,
  },
  {
    step: 6,
    title: "Fly to London",
    desc: "Attend pre-departure briefing, book accommodation and fly to London",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (minimum 6 months validity beyond course end)",
  "Bachelor's Degree Certificate & Transcripts",
  "10th & 12th Mark Sheets",
  "IELTS / TOEFL / PTE Academic Score",
  "Statement of Purpose (SOP)",
  "2 Letters of Recommendation (LORs) — academic / professional",
  "Updated CV / Resume",
  "Work Experience Letters (for MBA applicants)",
  "Statement of Funds / Bank Statements (last 6 months)",
  "Passport-size photographs (white background)",
  "CAS (Confirmation of Acceptance for Studies) from Middlesex",
  "TB Test Report (if required by UKVI)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus halls at the Hendon campus in North London" },
  { icon: Users, label: "Self-catered en-suite and shared rooms — all bills included" },
  { icon: PoundSterling, label: "Weekly rent from £140 – £230 inclusive of utilities" },
  { icon: Wifi, label: "High-speed Wi-Fi, study rooms and laundry in every hall" },
  { icon: ShieldCheck, label: "24/7 security, CCTV, on-site residential life team" },
  { icon: Clock, label: "20-minute Northern Line tube ride to central London" },
];

const whyChoose = [
  {
    title: "150+ Years of Heritage",
    desc: "Founded in 1878 — among the UK's oldest academic institutions, granted university status in 1992",
    icon: Star,
  },
  {
    title: "Top-Rated UK University",
    desc: "1st in London for Career Prospects (Whatuni 2026) and 1st for Course Quality (Uni Compare)",
    icon: Award,
  },
  {
    title: "Affordable UK Tuition",
    desc: "Master's starting from £14,000 — among the most affordable in London for Indian students",
    icon: PoundSterling,
  },
  {
    title: "Prime North London Campus",
    desc: "Single Hendon campus with modern facilities, easily connected to central London via tube",
    icon: Building2,
  },
  {
    title: "Graduate Route Visa",
    desc: "Eligible for 2 years of post-study work in the UK after completing your Master's",
    icon: Briefcase,
  },
  {
    title: "Strong Industry Links",
    desc: "Placement opportunities with leading London employers across finance, tech, healthcare and design",
    icon: Globe,
  },
  {
    title: "Truly Global Community",
    desc: "20,000+ students from 150+ countries — making it one of the most diverse UK campuses",
    icon: Users,
  },
  {
    title: "Safe & Welcoming",
    desc: "Located in the London Borough of Barnet — one of the safest boroughs in the capital",
    icon: CheckCircle,
  },
];

const ranking = [
  { label: "UK Ranking", value: "Top 100" },
  { label: "Founded", value: "1878" },
  { label: "Students", value: "20,000+" },
  { label: "Countries", value: "150+" },
  { label: "THE World", value: "501–600" },
  { label: "Global", value: "Top 800" },
];

const popularPrograms = [
  {
    title: "MSc Computer Science",
    duration: "1 Year",
    fee: "£16,000",
    desc: "Software engineering, cloud computing, AI fundamentals and modern web technologies",
    icon: BookOpen,
  },
  {
    title: "MSc Data Science",
    duration: "1 Year",
    fee: "£16,500",
    desc: "Big data, machine learning, Python, R and predictive analytics",
    icon: BookOpen,
  },
  {
    title: "MSc International Business Management",
    duration: "1 Year",
    fee: "£15,500",
    desc: "Global strategy, marketing, finance and emerging market business",
    icon: BookOpen,
  },
  {
    title: "MSc Project Management",
    duration: "1 Year",
    fee: "£15,000",
    desc: "PRINCE2, Agile, risk management and digital transformation",
    icon: BookOpen,
  },
  {
    title: "MSc Engineering Management",
    duration: "1 Year",
    fee: "£15,500",
    desc: "Operations, supply chain, lean manufacturing and quality systems",
    icon: BookOpen,
  },
  {
    title: "MA International Relations",
    duration: "1 Year",
    fee: "£14,500",
    desc: "Global politics, diplomacy, security studies and conflict resolution",
    icon: BookOpen,
  },
  {
    title: "MBA (Master of Business Administration)",
    duration: "1 Year",
    fee: "£20,500",
    desc: "Leadership, strategy, finance and entrepreneurship with industry projects",
    icon: Briefcase,
  },
  {
    title: "MSc Public Health",
    duration: "1 Year",
    fee: "£15,500",
    desc: "Epidemiology, global health policy, healthcare management and research",
    icon: BookOpen,
  },
];

const recognitionList = [
  "Listed in the UK Office for Students Register of English HE Providers",
  "Member of the European University Association (EUA)",
  "Recognised by the Association of Indian Universities (AIU) via UK NARIC equivalence",
  "Degrees accepted by the UK Visas and Immigration (UKVI) for the Graduate Route visa",
  "AACSB-accredited business school (select programs)",
  "Active member of the University Alliance — a group of UK universities focused on industry collaboration",
];

export default function MiddlesexUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Middlesex University for Indian Students 2026"
        subtitle="Public University · 150+ Years of Heritage · North London Campus · 2-Year Graduate Route Visa"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1878 · Hendon, North London
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                Middlesex University Fees, Eligibility & Admission Process 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The <strong className="text-foreground">Middlesex University</strong> is
                a historic, publicly-funded UK university with a single modern campus
                in Hendon, North London. It is one of the most diverse and
                internationally-focused universities in the UK for Indian students
                looking to pursue a globally-recognised{" "}
                <strong className="text-foreground">Master's degree in the UK</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over <strong className="text-foreground">150 years of academic heritage</strong>,
                a truly global community of 20,000+ students from 150+ countries, and
                affordable tuition starting at £14,000, Middlesex offers Indian
                students the perfect combination of academic rigour, career outcomes
                and a vibrant London lifestyle.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["UK Public University", "Office for Students", "Graduate Route Visa", "1st in London — Career Prospects", "Est. 1878"].map(
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
                  <Link href="/masters/uk">Masters in UK</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop"
                  alt="Middlesex University campus in Hendon, London"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">150+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic heritage
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">20K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 150+ countries
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

      {/* ── WHY CHOOSE MIDDLESEX ─────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Middlesex University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From a heritage-rich London campus to industry-led Master's programs
              and the UK Graduate Route visa, Middlesex checks every box for
              ambitious Indian students.
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
                text="Accreditation & World Ranking"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Middlesex University is one of the most internationally diverse
                public universities in the United Kingdom. Its degrees are recognised
                by employers, government bodies and universities across the world —
                including India — making it a safe and globally-accepted qualification
                for Indian students.
              </p>
              <ul className="space-y-3">
                {recognitionList.map((item, i) => (
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
                    <p className="text-3xl font-bold text-accent">Top 100</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      UK University Ranking
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">1878</p>
                    <p className="text-sm text-muted-foreground mt-1">Established</p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">150+</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Countries Represented
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/30">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent">501–600</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      THE World Ranking
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── POPULAR PROGRAMS ─────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Master's Programs for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Industry-aligned 1-year Master's programs designed to launch your global
              career — taught by experts with strong London industry links.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {popularPrograms.map((p, i) => {
              const Icon = p.icon;
              return (
                <Card
                  key={i}
                  className="border border-border/60 hover:border-accent/40 transition-colors duration-200"
                >
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                      {p.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs border-t border-border pt-3">
                      <span className="text-muted-foreground">{p.duration}</span>
                      <span className="font-bold text-accent">{p.fee}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            Want the complete picture? Read our full guide to{" "}
            <Link
              href="/masters/uk"
              className="text-accent font-semibold hover:underline"
            >
              Master's in the UK for Indian students
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── TUITION & FEES ───────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Middlesex University Tuition & Living Costs 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most affordable UK universities in London — transparent fee
              structure with scholarships up to £5,000 for Indian students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Breakdown (Indicative)
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
                          GBP
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MA / MSc (Most programs)</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £14,000 – 17,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14.5 – 18 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MBA</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £20,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹22 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MRes / Research</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £14,000 – 16,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14.5 – 17 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total Program Cost
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £14,000 – 22,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹14.5 – 24 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹105 (indicative). Scholarships of up to £5,000 available.
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
                  label: "Halls of Residence",
                  sub: "On-campus en-suite room",
                  gbp: "£7,500 – 11,500",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catered / catered",
                  gbp: "£2,400 – 3,600",
                },
                {
                  label: "Travel & Personal",
                  sub: "Oyster card, books, misc",
                  gbp: "£2,000 – 3,000",
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
                    <p className="text-base font-bold text-accent">{item.gbp}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-sm">
                      Total Annual Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Tuition + living estimate
                    </p>
                  </div>
                  <p className="text-base font-bold text-accent">~£28,000</p>
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
              text="Eligibility Criteria for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Straightforward requirements — strong academics, English proficiency
              and the right documents.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Bachelor's Degree",
                desc: "4-year Bachelor's degree with 55% and above from a recognised Indian university (60%+ for competitive programs)",
              },
              {
                title: "English Proficiency",
                desc: "IELTS 6.5 overall (no band below 5.5–6.0) or equivalent TOEFL / PTE score",
              },
              {
                title: "Work Experience",
                desc: "2–3 years of relevant work experience required for MBA applicants",
              },
              {
                title: "Documents",
                desc: "SOP, 2 LORs, transcripts, CV and valid passport",
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
              text="Middlesex University Admission Process for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A simple, six-step journey from your counselling session to your first
              day at the Middlesex campus in Hendon, North London.
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
              text="Documents Required for Middlesex University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              GVK EduTech helps you prepare, verify and submit every document for a
              smooth UK university application.
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Accommodation
              </p>
              <ColorfulHeading
                text="On-Campus Halls in North London"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Middlesex University offers modern, on-campus halls of residence at
                its Hendon campus in North London — all within a 20-minute tube
                ride of central London via the Northern Line. Halls include 24/7
                security, common rooms, study spaces and a dedicated residential
                life team.
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
                  alt="Middlesex University halls of residence"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Middlesex University student common room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN LONDON ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="North London city view"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="London city life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Hendon, North London
              </p>
              <ColorfulHeading
                text="A Truly London Student Experience"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Hendon campus is set in the leafy, safe London Borough of
                Barnet — with quick Northern Line access to the heart of the
                capital. Indian students get a calm, modern campus environment and
                a 20-minute tube ride to central London for internships, culture
                and adventure.
              </p>
              <ul className="space-y-3">
                {[
                  "Modern single-campus experience in the safe London Borough of Barnet",
                  "One of the most diverse student communities in the UK — 150+ nationalities",
                  "Easy access to London's top employers for internships and placements",
                  "Active Indian Society and student-led cultural events through the year",
                  "Northern Line tube connects Hendon to central London in under 20 minutes",
                  "Direct flights from Delhi, Mumbai, Bangalore, Hyderabad and Chennai to London",
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
              text="Advantages of Studying at Middlesex University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Middlesex stands out for its unique combination of heritage, value
              and career outcomes — here is why Indian students pick it.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "1-Year Master's",
                desc: "Save up to a year compared to US / Australia and reduce total cost",
              },
              {
                title: "Affordable London",
                desc: "Lower tuition and living costs than most London universities",
              },
              {
                title: "Graduate Route Visa",
                desc: "2 years of post-study work in the UK after graduation",
              },
              {
                title: "Industry Placements",
                desc: "Optional placement year with leading London employers",
              },
              {
                title: "Global Alumni",
                desc: "Strong alumni network across 150+ countries and Fortune 500 firms",
              },
              {
                title: "Scholarships",
                desc: "Up to £5,000 in merit and country-specific scholarships for Indians",
              },
              {
                title: "Indian Community",
                desc: "Large Indian student community and a dedicated Indian Society on campus",
              },
              {
                title: "GVK End-to-End",
                desc: "From shortlisting to visa — GVK EduTech handles the entire journey",
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
            <p className="text-muted-foreground text-lg">
              Everything Indian students and parents ask about Middlesex University,
              the UK student visa and life in London.
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
            Apply Now for Master's at Middlesex University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Talk to our UK admissions experts today. Get a free profile evaluation,
            university shortlisting, SOP/LOR review and full visa support from the{" "}
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
              { href: "/masters/uk", label: "Master's in UK" },
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
