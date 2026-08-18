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
  Target,
  Calendar,
  Mountain,
  FlaskConical,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════════════
   UNIVERSITY OF DUNDEE — CONTENT DATA
════════════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is the University of Dundee recognised in India?",
    answer:
      "Yes. The University of Dundee is a UK public research university and its degrees are widely recognised in India. Dundee qualifications are valued by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies — opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at the University of Dundee?",
    answer:
      "Most taught Master's (MSc / MA / MPH / MRes / LLM) programs at Dundee run for 1 year full-time (12 months). Some professional pathways such as the MPH and certain research degrees can take 12–24 months. MPhil / PhD programs typically take 3–4 years of full-time study.",
  },
  {
    question: "Does the University of Dundee require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0. Higher requirements apply for programs in Nursing, Life Sciences and related subjects (often IELTS 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific program.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Dundee?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 20,000 – 28,000 per year (approximately INR 17–24 lakh) depending on the program. Clinical and laboratory-based programs such as Biomedical Sciences and Forensic Science typically sit at the higher end. Dundee offers a range of scholarships for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at Dundee?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Dundee's student-friendly job market offers retail, hospitality, tutoring, research assistant and university admin opportunities.",
  },
  {
    question: "Does the University of Dundee offer scholarships for Indian students?",
    answer:
      "Yes. Dundee offers multiple scholarships including the Global Excellence Scholarship, the Vice-Chancellor's Scholarship and country-specific awards for high-performing Indian postgraduate students. Most scholarships range from £5,000 – £15,000 and are awarded either automatically or via a short essay application.",
  },
  {
    question: "How safe is Dundee for international students?",
    answer:
      "Dundee is regularly ranked among the most affordable and welcoming student cities in the UK. The university provides 24/7 on-campus security, well-lit walkways, CCTV, and a dedicated Student Wellbeing service. The friendly local community and growing international population make Dundee an exceptionally welcoming city for Indian students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Dundee graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. Dundee graduates are highly sought after in life sciences, biomedical research, healthcare, computing, law, design, finance and public-sector roles across the UK and globally.",
  },
  {
    question: "What is the University of Dundee best known for?",
    answer:
      "The University of Dundee is renowned for life sciences, biomedical sciences, medicine, dentistry, nursing, forensic science, computing, law, art and design. It is consistently ranked in the top 200 universities globally (Times Higher Education) and is home to one of the UK's leading medical schools.",
  },
  {
    question: "Does GVK EduTech help with University of Dundee admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including the University of Dundee. We provide end-to-end support — program shortlisting, SOP / LOR guidance, application submission, CAS, visa filing and pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MPH / LLM at Dundee based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the Dundee portal with SOP & LORs",
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
    desc: "Our team assists with CAS, visa application and financial documentation",
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
  "English Language Test Score (IELTS / TOEFL / PTE)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (2–3)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds)",
  "Visa Application Form",
  "Offer Letter (University of Dundee)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus accommodation available" },
  { icon: Users, label: "Modern en-suite rooms (single & shared)" },
  { icon: Utensils, label: "Self-catering kitchens & food courts" },
  { icon: Wifi, label: "High-speed WiFi across campus" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

const whyChoose = [
  {
    title: "Top 200 Global University",
    desc: "Ranked in the top 200 universities worldwide by Times Higher Education",
    icon: TrendingUp,
  },
  {
    title: "World-Leading Life Sciences",
    desc: "Home to one of the UK's most cited life sciences and biomedical research centres",
    icon: FlaskConical,
  },
  {
    title: "Top Medical School",
    desc: "Dundee Medical School is consistently ranked among the very best in the UK",
    icon: HeartPulse,
  },
  {
    title: "Affordable Student City",
    desc: "Dundee is one of the most affordable and student-friendly cities in the UK",
    icon: MapPin,
  },
  {
    title: "Career-Focused Programs",
    desc: "Strong links with NHS, biotech, pharma and global employers",
    icon: Briefcase,
  },
  {
    title: "Generous Scholarships",
    desc: "Multiple merit-based scholarships for international postgraduate students",
    icon: Award,
  },
  {
    title: "Vibrant Student Life",
    desc: "100+ student societies, excellent sports facilities and lively campus life",
    icon: Users,
  },
  {
    title: "Safe & Welcoming Campus",
    desc: "Compact, friendly campus in the heart of Dundee — Scotland's sunniest city",
    icon: Building2,
  },
];

const rankings = [
  { label: "Top 200", sub: "Global University (Times Higher Education)" },
  { label: "Top 30", sub: "UK Universities (Complete University Guide 2026)" },
  { label: "Top 5", sub: "UK University for Forensic Science" },
  { label: "1881", sub: "Year Founded — 140+ Years of Excellence" },
];

const advantages = [
  {
    title: "World-Renowned Degrees",
    desc: "Degrees recognised globally by employers and universities worldwide",
  },
  {
    title: "1-Year Master's",
    desc: "Complete your Master's in just 1 year — cost and time efficient",
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa to work in the UK after graduation",
  },
  {
    title: "Strong Placement Support",
    desc: "Dedicated careers service with strong NHS, biotech and industry links",
  },
  {
    title: "Multicultural Environment",
    desc: "Diverse international community from 100+ countries",
  },
  {
    title: "Part-Time Work Allowed",
    desc: "Work up to 20 hours/week during term time in the UK",
  },
  {
    title: "Excellent Location",
    desc: "Compact, safe city — easy access to Edinburgh, Glasgow and Aberdeen",
  },
  {
    title: "GVK End-to-End Support",
    desc: "Application, visa, travel, and pre-departure assistance included",
  },
];

const programs = [
  {
    category: "Business & Management",
    courses: ["MSc Management", "MSc International Business", "MSc Finance", "MSc Accounting & Finance", "MBA"],
  },
  {
    category: "Computing & Data",
    courses: ["MSc Data Science", "MSc Computer Science", "MSc Artificial Intelligence", "MSc Cyber Security"],
  },
  {
    category: "Engineering",
    courses: ["MSc Mechanical Engineering", "MSc Civil Engineering", "MSc Biomedical Engineering"],
  },
  {
    category: "Life Sciences & Health",
    courses: ["MSc Biomedical Sciences", "MSc Forensic Science", "MPH Master of Public Health", "MSc Human Anatomy"],
  },
  {
    category: "Law & Humanities",
    courses: ["LLM Law", "MA International Relations", "MA History", "MA Philosophy"],
  },
  {
    category: "Art, Design & Architecture",
    courses: ["MA Art & Design", "MArch Architecture", "MSc Product Design", "MA Animation"],
  },
];

/* ══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════════════════════════════════ */

export default function UniversityOfDundeePage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Dundee Fees, Eligibility & Admission Process 2026"
        subtitle="Top 200 Global University · World-Class Life Sciences · Affordable UK City"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1607237138185-eedd9c4b464f?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1881 · Dundee, Scotland
              </p>
              <ColorfulHeading
                text="University of Dundee"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Dundee is one of the UK's most respected public
                research universities, located on Scotland's east coast. Founded
                in 1881, Dundee has grown into a global institution renowned for
                its{" "}
                <Link
                  href="/mbbs/uk"
                  className="text-accent font-semibold hover:underline"
                >
                  Master's programs in the UK
                </Link>
                , world-leading life sciences research, and an outstanding
                medical school.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The university is consistently ranked in the top 200 globally
                (Times Higher Education) and is especially well known for
                biomedical sciences, forensic science, computing, art and
                design, and law. Dundee offers excellent value for Indian
                students seeking a globally recognised UK degree at an
                affordable cost in one of Scotland's most welcoming cities.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Top 200 Global",
                  "Russell-equivalent Research",
                  "Medical School Excellence",
                  "Affordable Scotland",
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
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c4b464f?w=600&auto=format&fit=crop"
                  alt="University of Dundee campus, Scotland"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">140+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top 200</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    THE World Ranking
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE DUNDEE ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose the University of Dundee"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class life sciences to one of the UK's most affordable
              student cities, Dundee offers Indian students a transformative UK
              education experience.
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

      {/* ── 3. RECOGNITION & ACCREDITATION ──────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "THE", sub: "Top 200 Global University" },
              { label: "AIU", sub: "Recognised by Association of Indian Universities" },
              { label: "GMC", sub: "Accredited Medical School (UK)" },
              { label: "90%+", sub: "Graduate Employment Rate" },
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
              text="University of Dundee — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the top universities in the UK and
              globally — a research-intensive institution with world-class
              credentials in life sciences and medicine.
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

      {/* ── 5. POPULAR PROGRAMS ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Master's Programs 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Choose from a wide range of industry-relevant postgraduate
              programs at the University of Dundee.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <Card
                key={i}
                className="border border-border/60 hover:border-accent/40 transition-colors duration-200"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold text-foreground">
                    {prog.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {prog.courses.map((course, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
              Clear, straightforward requirements for postgraduate admission
              at Dundee.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 50–55% from a recognised Indian university",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (no band below 6.0) or equivalent — programme specific",
              },
              {
                title: "GMAT / GRE",
                desc: "Required for some business programs — check specific program requirements",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA (typically 2–3 years) — optional for other programs",
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

      {/* ── 7. FEES STRUCTURE ───────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Tuition Fees 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive tuition fees for world-class UK education in
              Scotland — with scholarships available.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    University of Dundee — Tuition Fee Breakdown
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
                        <td className="px-6 py-4 text-foreground">MSc / MA (Standard)</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £20,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹17,00,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MSc Lab-Based (e.g. Biomedical, Forensic)</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £25,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹21,25,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MBA</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £28,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹23,80,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Indicative Total
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £20,000–28,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹17–24 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹85 (indicative). Dundee fees
                    are subject to revision.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional costs */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Additional Costs
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus (per year)",
                  gbp: "£5,500 - £8,500",
                },
                {
                  label: "Living Expenses",
                  sub: "Food, transport, personal",
                  gbp: "£7,500 - £11,000",
                },
                {
                  label: "Visa & Health Surcharge",
                  sub: "NHS + visa fees",
                  gbp: "£2,500",
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
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="University of Dundee Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from your application to
              your first day at Dundee.
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

      {/* ── 9. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Dundee Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Keep these documents ready before applying — GVK EduTech will
              guide you through the process.
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

      {/* ── 10. ACCOMMODATION ───────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="University of Dundee Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Dundee offers a range of on-campus
                accommodation options to suit different budgets and
                preferences. From modern en-suite rooms to self-catering
                apartments, you'll find comfortable living spaces that foster
                a vibrant student community in the heart of Dundee.
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
                  alt="University of Dundee student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Dundee campus common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 11. STUDENT LIFE IN DUNDEE ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&auto=format&fit=crop"
                  alt="Dundee city, Scotland"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&auto=format&fit=crop"
                  alt="Scottish landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Dundee, Scotland
              </p>
              <ColorfulHeading
                text="Student Life in Scotland"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Dundee is one of the UK's most affordable and student-friendly
                cities — compact, safe and welcoming, with easy access to
                Edinburgh, Glasgow and the Scottish Highlands. Students enjoy
                excellent transport links, a high quality of life, and a
                vibrant international community.
              </p>
              <ul className="space-y-3">
                {[
                  "Affordable city — among the cheapest in the UK for students",
                  "Easy access to Edinburgh, Glasgow and Aberdeen by train",
                  "100+ student societies and clubs at Dundee",
                  "Excellent sports facilities and active student union",
                  "Beautiful Scottish coast, highlands and historic castles nearby",
                  "Strong Indian community with cultural events and restaurants",
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

      {/* ── 12. ADVANTAGES ───────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying at the University of Dundee"
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

      {/* ── 13. FAQs ─────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about the University of Dundee
              and studying in the UK.
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
            Begin Your Master's Journey at the University of Dundee
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert counsellors will guide you through the entire
            admission process — from application to your first day at Dundee,
            Scotland.
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
              { href: "/mbbs/uk", label: "Study in UK" },
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
