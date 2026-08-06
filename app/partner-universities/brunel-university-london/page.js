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
    question: "Is Brunel University London recognised in India?",
    answer:
      "Yes. Brunel University London is a UK government-recognised public research university and its degrees are widely accepted in India. Brunel qualifications are valued by the Association of Indian Universities (AIU) via UK NARIC equivalence, Indian employers, and all major global accreditation bodies — opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at Brunel University London?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at Brunel run for 1 year full-time (12 months). Some professional Master's with an optional placement year are 18–24 months. MPhil / PhD research programs typically take 2–4 years of full-time study.",
  },
  {
    question: "Does Brunel University require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate programs at Brunel require an overall IELTS Academic score of 6.5 with no band below 6.0. Higher requirements (IELTS 7.0) apply for programs in Education, Law and certain Business pathways. Indian students with strong English-medium academic backgrounds may be eligible for a waiver — speak to GVK EduTech for the latest exemptions.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at Brunel University London?",
    answer:
      "For the 2026 intake, indicative tuition fees for most taught Master's programs range from GBP 18,000 – 22,000 per year (approximately INR 19–24 lakh). MBA and certain professional programs cost between GBP 23,000 – 26,000. Brunel also offers international scholarships of £1,000 – £6,000 to reduce overall costs.",
  },
  {
    question: "Can Indian students work part-time while studying at Brunel?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Brunel's Uxbridge campus is well connected to central London via the Metropolitan and Piccadilly lines — making part-time work in retail, hospitality, tutoring and on-campus jobs easily accessible.",
  },
  {
    question: "Does Brunel University offer scholarships for Indian students?",
    answer:
      "Yes. Brunel University offers a range of international scholarships including the Brunel International Scholarship, the Postgraduate Academic Excellence Scholarship, and country-specific awards. Most scholarships range from £1,000 – £6,000 and are either automatic (based on merit) or require a short essay-based application.",
  },
  {
    question: "How safe is the Brunel campus area for international students?",
    answer:
      "Brunel's Uxbridge campus is in one of West London's safest and most student-friendly boroughs — with 24/7 on-campus security, well-lit walkways, CCTV, and a dedicated International Student Support team. London as a whole is home to over 100,000 Indian residents and a thriving Indian community, making Brunel a welcoming base for Indian students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Brunel graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a UK Master's degree. Brunel graduates are highly sought after in London across finance, engineering, design, technology, healthcare and consulting — leveraging Brunel's strong industry links and placement record.",
  },
  {
    question: "Does GVK EduTech help with Brunel University London admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Brunel. We provide end-to-end support — from program shortlisting, SOP/LOR guidance, application submission, CAS, visa filing to pre-departure and post-arrival support in London.",
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
    desc: "Shortlist the right MSc / MA / MBA at Brunel based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the Brunel University portal with SOP & LORs",
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
    desc: "Attend pre-departure briefing, book accommodation and fly to the UK",
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
  "CAS (Confirmation of Acceptance for Studies) from Brunel",
  "TB Test Report (if required by UKVI)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus halls at Uxbridge, including en-suite and shared rooms" },
  { icon: Users, label: "Self-catered kitchens, common rooms, study areas and social spaces" },
  { icon: PoundSterling, label: "Weekly rent from £130 – £210 including utilities and Wi-Fi" },
  { icon: Wifi, label: "High-speed Wi-Fi, laundry and 24/7 maintenance support in every hall" },
  { icon: ShieldCheck, label: "24/7 security, CCTV, secure door access and on-site residential team" },
  { icon: Clock, label: "30 minutes to central London via the Metropolitan & Piccadilly lines" },
];

const whyChoose = [
  {
    title: "60+ Years of Heritage",
    desc: "Founded in 1966 — Brunel has built a strong global reputation in engineering, design and social sciences over six decades",
    icon: Star,
  },
  {
    title: "West London Location",
    desc: "Single-site Uxbridge campus — safe, green and connected to central London in 30 minutes",
    icon: MapPin,
  },
  {
    title: "Affordable UK Tuition",
    desc: "Master's starting from £18,000 — significantly lower than most central London universities",
    icon: PoundSterling,
  },
  {
    title: "Research Excellence",
    desc: "Strong REF performance across engineering, health, design, social sciences and business",
    icon: TrendingUp,
  },
  {
    title: "Graduate Route Visa",
    desc: "Eligible for 2 years of post-study work in the UK after completing your Master's",
    icon: Briefcase,
  },
  {
    title: "Industry Placements",
    desc: "Optional professional placement year with leading London employers across business, engineering and design",
    icon: Globe,
  },
  {
    title: "Global Student Community",
    desc: "15,000+ students from 100+ countries — a diverse, multicultural learning environment",
    icon: Users,
  },
  {
    title: "Safe & Welcoming",
    desc: "Dedicated International Student Support, on-campus health, faith and wellbeing services",
    icon: CheckCircle,
  },
];

const rankings = [
  { label: "QS World Top 350", value: "Top 350" },
  { label: "Founded", value: "1966" },
  { label: "Students", value: "15,000+" },
  { label: "Countries", value: "100+" },
  { label: "London Campus", value: "Uxbridge" },
  { label: "Graduate Route", value: "2 Years" },
];

const popularPrograms = [
  {
    title: "MSc Mechanical Engineering",
    duration: "1 Year",
    fee: "£20,500",
    desc: "Advanced design, materials, manufacturing and sustainable engineering systems",
    icon: BookOpen,
  },
  {
    title: "MSc Data Science & Analytics",
    duration: "1 Year",
    fee: "£19,500",
    desc: "Big data, machine learning, Python, R and predictive analytics",
    icon: BookOpen,
  },
  {
    title: "MSc Project Management",
    duration: "1 Year",
    fee: "£18,500",
    desc: "PRINCE2, Agile, risk management and digital transformation",
    icon: BookOpen,
  },
  {
    title: "MSc International Business",
    duration: "1 Year",
    fee: "£19,000",
    desc: "Global strategy, marketing, finance and emerging market business",
    icon: BookOpen,
  },
  {
    title: "MSc Construction Project Management",
    duration: "1 Year",
    fee: "£18,500",
    desc: "Planning, procurement, contract management and sustainability in construction",
    icon: BookOpen,
  },
  {
    title: "MA Industrial Design",
    duration: "1 Year",
    fee: "£18,000",
    desc: "Product design, prototyping, human factors and digital manufacturing",
    icon: BookOpen,
  },
  {
    title: "MBA (Master of Business Administration)",
    duration: "1 Year",
    fee: "£25,500",
    desc: "Leadership, strategy, finance and entrepreneurship with industry projects",
    icon: Briefcase,
  },
  {
    title: "MSc Public Health",
    duration: "1 Year",
    fee: "£18,500",
    desc: "Epidemiology, global health policy, biostatistics and health promotion",
    icon: BookOpen,
  },
];

const recognitionList = [
  "Listed in the UK Office for Students Register of English HE Providers",
  "Member of the European University Association (EUA)",
  "Recognised by the Association of Indian Universities (AIU) via UK NARIC equivalence",
  "Degrees accepted by the UK Visas and Immigration (UKVI) for the Graduate Route visa",
  "AACSB-accredited Brunel Business School (select programs)",
  "Active member of University Alliance — a group of UK universities focused on industry collaboration",
];

const studentLife = [
  "Single, self-contained campus in Uxbridge — safe, green and easy to navigate",
  "30 minutes to central London via the Metropolitan & Piccadilly underground lines",
  "One of West London's most student-friendly boroughs with a thriving international community",
  "Active Indian Society and student-led cultural events through the year",
  "On-campus sports facilities — gym, swimming pool, courts and over 100 student societies",
  "Direct flights from Delhi, Mumbai, Bangalore, Hyderabad and Chennai to London Heathrow",
];

const advantages = [
  {
    title: "1-Year Master's",
    desc: "Save up to a year compared to US / Australia and reduce total cost",
  },
  {
    title: "Affordable London",
    desc: "Lower tuition and living costs than most central London universities",
  },
  {
    title: "Graduate Route Visa",
    desc: "2 years of post-study work in the UK after graduation",
  },
  {
    title: "Industry Placements",
    desc: "Optional placement year with leading London and UK employers",
  },
  {
    title: "Global Alumni",
    desc: "Strong alumni network across 100+ countries and Fortune 500 firms",
  },
  {
    title: "Scholarships",
    desc: "Up to £6,000 in merit and country-specific scholarships for Indians",
  },
  {
    title: "Indian Community",
    desc: "Large Indian student community in London and a dedicated Indian Society on campus",
  },
  {
    title: "GVK End-to-End",
    desc: "From shortlisting to visa — GVK EduTech handles the entire journey",
  },
];

export default function BrunelUniversityLondonPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Brunel University London for Indian Students 2026"
        subtitle="Public University · 60+ Years of Heritage · West London Campus · 2-Year Graduate Route Visa"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1966 · Uxbridge, West London
              </p>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-5">
                Brunel University London for Indian Students 2026
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                <strong className="text-foreground">Brunel University London</strong> is a
                leading public research university located on a single, self-contained
                campus in Uxbridge, West London. With roots dating back to 1966, Brunel
                has earned a strong global reputation in engineering, design, business
                and the social sciences — making it a popular and affordable choice for
                Indian students seeking a globally-recognised{" "}
                <strong className="text-foreground">Master's degree in the UK</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over <strong className="text-foreground">60 years of academic heritage</strong>,
                a research-led teaching ethos, and a welcoming campus community of 15,000+
                students from 100+ countries, Brunel offers Indian students the perfect
                combination of academic rigour, career outcomes and London lifestyle —
                at a far more affordable fee point than most central London universities.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["UK Public University", "QS Top 350", "Office for Students", "Graduate Route Visa", "Est. 1966"].map(
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
                  alt="Brunel University London campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">60+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic heritage
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">15K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 100+ countries
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
            {rankings.map((item) => (
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

      {/* ── WHY CHOOSE BRUNEL ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Brunel University London"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From a research-led teaching ethos to industry placements and the UK
              Graduate Route visa, Brunel checks every box for ambitious Indian students.
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
                Brunel University London is one of the most respected public
                universities in the United Kingdom. Its degrees are recognised by
                employers, government bodies and universities across the world —
                including India — making it a safe and globally-accepted
                qualification for Indian students.
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
                    <p className="text-3xl font-bold text-accent">Top 350</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      QS World University Rankings
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">1966</p>
                    <p className="text-sm text-muted-foreground mt-1">Established</p>
                  </CardContent>
                </Card>
                <Card className="border border-border/60">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">100+</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Countries Represented
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-accent/30">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-accent">OfS</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      UK Office for Students
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
              text="Brunel University London Tuition & Living Costs 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              One of the most affordable London-based universities — transparent fee
              structure with scholarships up to £6,000 for Indian students.
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
                          £18,000 – 22,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹19 – 24 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MBA</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £25,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹28 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MRes / Research</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £18,000 – 20,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹19 – 22 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total Program Cost
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £18,000 – 25,500
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹19 – 28 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹110 (indicative). Scholarships of up to £6,000 available.
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
                  gbp: "£6,800 – 10,900",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catered / catered",
                  gbp: "£2,400 – 3,600",
                },
                {
                  label: "Travel & Personal",
                  sub: "Oyster card, books, misc",
                  gbp: "£1,800 – 2,800",
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
                  <p className="text-base font-bold text-accent">~£30,500</p>
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
              Straightforward requirements — strong academics, English proficiency and
              the right documents.
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
                desc: "IELTS 6.5 overall (no band below 6.0) or equivalent TOEFL / PTE score",
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
              text="Brunel University London Admission Process for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A simple, six-step journey from your counselling session to your first
              day at the Brunel campus in Uxbridge, West London.
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
              text="Documents Required for Brunel University London"
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
                text="On-Campus Halls in Uxbridge, West London"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Brunel University offers modern, on-campus halls of residence on
                its single Uxbridge campus — all within easy reach of central
                London via the Metropolitan and Piccadilly underground lines.
                Halls include 24/7 security, common rooms, study spaces and a
                dedicated residential life team.
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
                  alt="Brunel University halls of residence"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Brunel student common room"
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
                  alt="Uxbridge, West London"
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
                Life in Uxbridge, London
              </p>
              <ColorfulHeading
                text="A Quintessentially London Student Experience"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The Brunel campus sits in Uxbridge — a leafy, safe and well-connected
                corner of West London. Indian students get the best of both worlds —
                a calm, self-contained campus and a 30-minute tube ride to the
                heart of London for internships, culture and adventure.
              </p>
              <ul className="space-y-3">
                {studentLife.map((item, i) => (
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
              text="Advantages of Studying at Brunel University London"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Brunel stands out for the unique combination of research-led teaching,
              value and career outcomes — here is why Indian students pick it.
            </p>
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
              Everything Indian students and parents ask about Brunel University
              London, the UK student visa and life in London.
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
            Apply Now for Master's at Brunel University London
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
