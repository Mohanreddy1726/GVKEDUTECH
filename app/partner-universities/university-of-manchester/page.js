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
    question: "Is the University of Manchester recognised in India?",
    answer:
      "Yes. The University of Manchester is a globally prestigious Russell Group university. Its degrees are recognized by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies. A Manchester degree carries significant weight in the Indian job market.",
  },
  {
    question: "What is the duration of Master's programs at the University of Manchester?",
    answer:
      "Most taught Master's (MSc / MA / MBA) programs at Manchester run for 1 year full-time (12 months). Some programs with placement or research pathways take 12–18 months. MPhil/PhD programs typically take 3–4 years.",
  },
  {
    question: "Does the University of Manchester require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0 (varies by program). Students from English-medium institutions may be eligible for a waiver. Check with GVK EduTech for program-specific requirements.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Manchester?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 20,000 – 32,000 per year (approximately INR 22–35 lakh) depending on the program. MBA programs cost around GBP 35,000–45,000. Scholarships are available for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at Manchester?",
    answer:
      "Yes. On a UK Student Route visa, you can work up to 20 hours per week during term time and full-time during holidays. Manchester is a major city with excellent part-time job opportunities in retail, hospitality, tutoring, and on-campus positions.",
  },
  {
    question: "Does Manchester offer scholarships for Indian students?",
    answer:
      "Yes. The University of Manchester offers numerous scholarships including the Manchester Global MBA Scholarship, Vice-Chancellor's Excellence Scholarship, and country-specific awards for Indian students. Most scholarships range from £2,000 – £10,000.",
  },
  {
    question: "How safe is Manchester for international students?",
    answer:
      "Manchester is one of the UK's safest major cities for students. The university has dedicated on-campus security, well-lit pathways, and support services. The Students' Union also provides safety resources. The city has a large international community making it very welcoming.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Manchester graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a Master's degree. Manchester graduates are highly sought after in finance, tech, engineering, and healthcare sectors globally.",
  },
  {
    question: "Does GVK EduTech help with University of Manchester admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Manchester. We provide end-to-end support — from program selection, SOP/LOR guidance, application submission, CAS, visa filing to pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Manchester based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Manchester portal with SOP & LORs",
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
  "Offer Letter (University of Manchester)",
];

const hostelFeatures = [
  { icon: Home, label: "On-campus accommodation available" },
  { icon: Users, label: "Modern en-suite rooms (single & shared)" },
  { icon: Utensils, label: "Self-catering kitchens & food courts" },
  { icon: Wifi, label: "High-speed WiFi across campus" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

const whyChoose = [
  {
    title: "Russell Group University",
    desc: "Part of the prestigious Russell Group — 24 leading UK research-intensive universities",
    icon: Award,
  },
  {
    title: "World Top 30",
    desc: "Ranked in the top 30 globally — a degree recognized worldwide",
    icon: TrendingUp,
  },
  {
    title: "Research Excellence",
    desc: "World-leading research output across all faculties",
    icon: Star,
  },
  {
    title: "Industry Links",
    desc: "Strong connections with global employers and career services",
    icon: Briefcase,
  },
  {
    title: "Vibrant City",
    desc: "Live in Manchester — a cultural hub with excellent quality of life",
    icon: MapPin,
  },
  {
    title: "Diverse Community",
    desc: "Join 40,000+ students from 160+ countries",
    icon: Users,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa available after graduation",
    icon: Globe,
  },
  {
    title: "Alumni Network",
    desc: "Connect with successful Manchester graduates worldwide",
    icon: Building2,
  },
];

export default function UniversityOfManchesterPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Manchester — Masters 2026"
        subtitle="Russell Group · World Top 30 · World-Class Research"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              {/* Eyebrow */}
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1824 · Manchester, UK
              </p>
              <ColorfulHeading
                text="University of Manchester"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Manchester is a founding member of the prestigious
                Russell Group and one of the world's top 30 universities. With a
                legacy of innovation and research excellence dating back to 1824,
                Manchester offers Indian students a world-class education with
                global recognition.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Choose from over 1,000 Master's programs across sciences,
                engineering, business, humanities, and arts. A degree from
                Manchester opens doors to global career opportunities.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Russell Group", "Top 30 World", "Research Intensive", "High Employability"].map(
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
              {/* Stacked image with stat overlay */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop"
                  alt="University of Manchester campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">200+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">40K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    International students
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
              { label: "#27", sub: "World Ranking · QS 2025" },
              { label: "Russell", sub: "Group Member" },
              { label: "3rd", sub: "Most Targeted UK Uni" },
              { label: "Gold", sub: "TEF Teaching Excellence" },
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
              text="Why Indian Students Choose Manchester"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class research to excellent career prospects, Manchester
              offers everything you need for a successful future.
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
              Competitive tuition fees for a world-class UK education with various
              scholarship opportunities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee by Faculty
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Faculty
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
                          Business & Management
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £28,000 – £35,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹24 – ₹30 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Technology
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £25,000 – £32,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹21 – ₹27 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £22,000 – £28,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹19 – ₹24 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Humanities & Arts
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £20,000 – £25,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17 – ₹21 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          MBA
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £40,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹34 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹85 (indicative)
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
                  sub: "On-campus & private",
                  usd: "£8,000 – £12,000",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catering options",
                  usd: "£3,000 – £4,500",
                },
                {
                  label: "Transport & Personal",
                  sub: "Student discounts",
                  usd: "£2,000 – £3,000",
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
                      Approximate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">£33,000–£55,000</p>
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
              Clear requirements for Indian students — meet these to secure your
              place at Manchester.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 60%+ or equivalent (varies by program)",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (min 6.0 in each band) or equivalent; waivers available",
              },
              {
                title: "SOP",
                desc: "Strong Statement of Purpose explaining your goals",
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from application to your first
              day at Manchester.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-9 left-[calc(1/14*100%+1.25rem)] right-[calc(1/14*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-7 gap-6">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    {/* Number circle */}
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Manchester offers excellent accommodation options to suit every
                budget. From on-campus halls to private rentals, you'll find safe
                and comfortable living arrangements in this student-friendly
                city.
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
                  alt="Student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="Manchester campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN MANCHESTER ────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Manchester city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="UK student life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Manchester
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Manchester is a vibrant, multicultural city with excellent
                transport links across the UK. As a student, you'll enjoy
                world-class museums, music venues, sports events, and a thriving
                food scene — all at an affordable cost compared to London.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the UK's most affordable student cities",
                  "Excellent public transport & bike-friendly",
                  "Vibrant music & sports scene",
                  "Large Indian community & restaurants",
                  "Direct flights from major Indian cities",
                  "Post-study work visa (2 years)",
                  "World-class healthcare (NHS)",
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
              text="Advantages of Studying at Manchester"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Global Recognition",
                desc: "Degree valued by employers worldwide",
              },
              {
                title: "Research-led Teaching",
                desc: "Learn from world-leading researchers",
              },
              {
                title: "Career Services",
                desc: "Dedicated support for job placement",
              },
              {
                title: "Alumni Network",
                desc: "Connect with 500K+ graduates globally",
              },
              {
                title: "Industry Links",
                desc: "Partnerships with top employers",
              },
              {
                title: "Scholarships",
                desc: "Range of funding options for Indians",
              },
              {
                title: "Post-Study Work",
                desc: "2-year Graduate Route visa",
              },
              {
                title: "GVK Support",
                desc: "End-to-end admission & visa help",
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
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters Journey at University of Manchester
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire process —
            from program selection to your first day on campus.
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
              { href: "/mbbs/georgia", label: "MBBS in UK" },
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