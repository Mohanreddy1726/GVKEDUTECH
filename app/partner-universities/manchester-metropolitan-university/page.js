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
  Palette,
  Cpu,
} from "lucide-react";
import Link from "next/link";

/* ══════════════════════════════════════════════════════════════════
   MANCHESTER METROPOLITAN UNIVERSITY — CONTENT DATA
════════════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: "Is Manchester Metropolitan University recognised in India?",
    answer:
      "Yes. Manchester Metropolitan University (MMU) is a recognised UK public university and its degrees are widely accepted in India. MMU qualifications are valued by the Association of Indian Universities (AIU), Indian employers, and major global accreditation bodies, opening doors to careers in India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at Manchester Metropolitan University?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at MMU run for 1 year full-time (12 months). Some pathways with a professional placement or internship year take up to 18–24 months. MPhil / PhD programs typically take 3–4 years of full-time research.",
  },
  {
    question: "Does Manchester Metropolitan University require IELTS?",
    answer:
      "Yes. Most postgraduate programs at MMU require an overall IELTS Academic score of 6.5 with no band below 5.5. Higher requirements apply for programs in Education, Health and Social Care, and some English / Linguistics pathways (often IELTS 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific program.",
  },
  {
    question: "What is the tuition fee for Indian students at Manchester Metropolitan University?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 17,000 – 22,000 per year (approximately INR 18–24 lakh) depending on the program. MBA programs typically cost around GBP 25,000–30,000. MMU also offers a range of scholarships for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at MMU?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Manchester has one of the largest part-time job markets in the UK — retail, hospitality, hospitality, tutoring, and university admin roles are widely available across the city.",
  },
  {
    question: "Does Manchester Metropolitan University offer scholarships for Indian students?",
    answer:
      "Yes. MMU offers multiple scholarships including the Manchester Met Global Futures Scholarship, country-specific awards, and merit-based bursaries that recognise Indian academic excellence. Most scholarships range from £2,000 – £5,000 and are awarded automatically or via a short essay application.",
  },
  {
    question: "How safe is Manchester for international students?",
    answer:
      "Manchester is one of the UK's most diverse and welcoming student cities. MMU provides 24/7 on-campus security, well-lit walkways, CCTV, and a dedicated Student Wellbeing service. The city is home to a large South Asian community, with familiar food, culture and places of worship — making it an exceptionally comfortable city for Indian students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help MMU graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. Manchester — being a major economic hub outside London — offers strong demand for graduates in finance, consulting, technology, creative industries, healthcare, and public-sector roles.",
  },
  {
    question: "What is Manchester Metropolitan University known for?",
    answer:
      "MMU is renowned for business, management, marketing, fashion, art and design, computing, engineering, science, sports science, education, and health. The Manchester Metropolitan University Business School holds AACSB accreditation, and Manchester School of Art is one of the oldest and most prestigious design schools in the UK.",
  },
  {
    question: "Does GVK EduTech help with Manchester Metropolitan University admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Manchester Metropolitan University. We provide end-to-end support — program shortlisting, SOP / LOR guidance, application submission, CAS, visa filing, accommodation and pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at MMU based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the MMU portal with SOP & LORs",
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
  "Bachelor's Degree Certificate & Mark Sheets",
  "English Language Test Score (IELTS / TOEFL / PTE)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2–3)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds)",
  "Visa Application Form",
  "Offer Letter (Manchester Metropolitan University)",
];

const accommodationFeatures = [
  { icon: Home, label: "Guaranteed on-campus accommodation for international students" },
  { icon: Users, label: "Modern en-suite rooms (single & shared apartments)" },
  { icon: Utensils, label: "Self-catering kitchens, cafés and food courts" },
  { icon: Wifi, label: "High-speed WiFi across all halls of residence" },
  { icon: ShieldCheck, label: "24/7 security, CCTV & on-site pastoral support" },
  { icon: Clock, label: "Laundry, gym, study spaces & social hubs" },
];

const whyChoose = [
  {
    title: "One of UK's Largest Universities",
    desc: "Over 40,000 students from 130+ countries — a true global learning community",
    icon: Building2,
  },
  {
    title: "Manchester — A Top Student City",
    desc: "Ranked the UK's most student-friendly city outside London",
    icon: MapPin,
  },
  {
    title: "Strong Career Outcomes",
    desc: "90%+ of MMU graduates in work or further study within 6 months",
    icon: Target,
  },
  {
    title: "Triple-Crown Business School",
    desc: "Manchester Met Business School holds AACSB, AMBA and EQUIS accreditations",
    icon: Briefcase,
  },
  {
    title: "Award-Winning Teaching",
    desc: "Gold-rated Teaching Excellence Framework (TEF) — top UK quality rating",
    icon: Award,
  },
  {
    title: "Vibrant Indian Community",
    desc: "One of the UK's largest South Asian populations — easy to settle in",
    icon: Users,
  },
  {
    title: "Industry-Led Curriculum",
    desc: "Courses designed with leading employers — practical & career-focused",
    icon: TrendingUp,
  },
  {
    title: "Affordable UK Education",
    desc: "Lower tuition fees than most Russell Group universities — great ROI",
    icon: Star,
  },
];

const rankings = [
  { label: "Top 60", sub: "UK University (Complete University Guide 2026)" },
  { label: "Top 700", sub: "Global University (Times Higher Education)" },
  { label: "TEF Gold", sub: "Teaching Excellence Framework — Top UK Rating" },
  { label: "1824", sub: "Year Founded — 200+ Years of Heritage" },
];

const advantages = [
  {
    title: "Globally Recognised Degrees",
    desc: "Degrees accepted by employers and universities across the world",
  },
  {
    title: "1-Year Master's Programs",
    desc: "Complete your Master's in just 12 months — cost and time efficient",
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa to work in the UK after graduation",
  },
  {
    title: "Strong Placement Support",
    desc: "Dedicated careers service with ties to top UK and global employers",
  },
  {
    title: "Multicultural City",
    desc: "Diverse international community from 130+ countries on campus",
  },
  {
    title: "Part-Time Work Allowed",
    desc: "Work up to 20 hours/week during term time in Manchester",
  },
  {
    title: "Excellent UK Location",
    desc: "2 hours to London by train — easy access to all major UK cities",
  },
  {
    title: "GVK End-to-End Support",
    desc: "Application, visa, travel, and pre-departure assistance included",
  },
];

const programs = [
  {
    category: "Business & Management",
    courses: ["MSc Management", "MSc International Business Management", "MBA", "MSc Marketing", "MSc Finance & Business Analytics"],
  },
  {
    category: "Computing & Data",
    courses: ["MSc Computer Science", "MSc Data Science", "MSc Artificial Intelligence", "MSc Cyber Security", "MSc Software Engineering"],
  },
  {
    category: "Art, Design & Fashion",
    courses: ["MA Fashion Design", "MA Interior Design", "MA Graphic Design & Art Direction", "MA Product Design", "MA Animation"],
  },
  {
    category: "Engineering",
    courses: ["MSc Mechanical Engineering", "MSc Electrical Engineering", "MSc Civil Engineering", "MSc Biomedical Engineering"],
  },
  {
    category: "Health & Social Care",
    courses: ["MSc Public Health", "MSc Physiotherapy (pre-registration)", "MSc Clinical Nutrition", "MSc Mental Health Nursing"],
  },
  {
    category: "Education & Humanities",
    courses: ["MA Education", "MA TESOL", "MA International Relations", "MA English Literature", "MA History"],
  },
];

/* ══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════════════════════════════════ */

export default function ManchesterMetropolitanUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Manchester Metropolitan University Fees, Eligibility & Admission Process 2026"
        subtitle="TEF Gold Rated · Triple-Crown Business School · Top 60 UK University"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1824 · Manchester, UK
              </p>
              <ColorfulHeading
                text="Manchester Metropolitan University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Manchester Metropolitan University (MMU) is one of the UK's
                largest and most popular public universities, located in the
                heart of Manchester — England's most dynamic and student-friendly
                city. With over 40,000 students from 130+ countries, MMU offers
                a vibrant, diverse, and industry-linked learning experience.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                MMU is a TEF Gold-rated university and home to the Manchester
                Met Business School — which holds triple-crown accreditation
                (AACSB, AMBA, EQUIS). With affordable tuition fees, excellent
                career outcomes and one of the UK's largest Indian communities
                in the city, MMU is a top choice for Indian students seeking
                quality, value and global career opportunities in the UK.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "TEF Gold",
                  "Triple-Crown Business School",
                  "Top 60 UK",
                  "40,000+ Students",
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
                  alt="Manchester Metropolitan University campus, Manchester, UK"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">200+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of heritage
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">40,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students enrolled
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE MMU ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Manchester Metropolitan University"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From TEF Gold teaching quality to a triple-crown business school
              and one of the UK's most student-friendly cities — MMU offers
              Indian students an unbeatable UK education experience.
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
              { label: "TEF Gold", sub: "Highest UK Teaching Quality Rating" },
              { label: "AACSB / EQUIS / AMBA", sub: "Triple-Crown Business School" },
              { label: "AIU", sub: "Recognised by Association of Indian Universities" },
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
              text="Manchester Metropolitan University — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the UK's top modern universities, with
              a global reputation for teaching quality, employability and
              industry-linked research.
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

      {/* ── 5. POPULAR PROGRAMS ──────────────────────────────── */}
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
              programs at Manchester Metropolitan University.
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
              at MMU.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 50-55% from a recognised Indian university",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (no band below 5.5) or equivalent — programme specific",
              },
              {
                title: "GMAT / GRE",
                desc: "Required for MBA and some business programs — check specific requirements",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA (typically 2-3 years) — optional for other Master's programs",
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
              Affordable tuition fees for a TEF Gold UK education — with
              scholarships available for outstanding students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Manchester Metropolitan University — Tuition Fee Breakdown
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
                          £17,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹19,12,500
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MSc Business / Computing</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £20,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹22,40,500
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">MBA</td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £28,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹30,60,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Indicative Total
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £17,500–28,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹19–31 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹109 (indicative). MMU fees are
                    subject to revision.
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
                  sub: "On-campus halls (per year)",
                  gbp: "£6,500 - £9,500",
                },
                {
                  label: "Living Expenses",
                  sub: "Food, transport, personal",
                  gbp: "£8,000 - £11,000",
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
              text="Manchester Metropolitan University Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from your application to
              your first day at MMU, Manchester.
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
              text="Required Documents for MMU Admission"
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
                text="Manchester Metropolitan University Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                MMU offers guaranteed on-campus accommodation for new
                international students, with modern halls located right in
                the heart of Manchester. From en-suite rooms to shared
                self-catering apartments, students enjoy 24/7 security,
                pastoral support and a vibrant community of students from
                all over the world.
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
                  alt="MMU student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="MMU campus common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 11. STUDENT LIFE IN MANCHESTER ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Manchester city view"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&auto=format&fit=crop"
                  alt="UK student life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Manchester, UK
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Manchester is one of the UK's most vibrant, multicultural and
                affordable student cities. Known for its legendary music scene,
                world-class sport (Manchester United and Manchester City),
                thriving tech and creative industries — and one of the largest
                South Asian communities in the UK — Manchester offers Indian
                students a perfect blend of home comforts and global exposure.
              </p>
              <ul className="space-y-3">
                {[
                  "2 hours to London by direct train — easy access across the UK",
                  "Large Indian community — restaurants, temples, grocery and cultural events",
                  "Vibrant student union with 100+ societies and sports clubs",
                  "World-class sport, music, arts and food scene",
                  "Strong industry links — placement and internship opportunities",
                  "Affordable living compared to London and southern UK cities",
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
              text="Advantages of Studying at Manchester Metropolitan University"
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
              Everything Indian students ask about Manchester Metropolitan
              University and studying in the UK.
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
            Begin Your Master's Journey at Manchester Metropolitan University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech's expert counselors will guide you through the entire
            admission process — from application to your first day at MMU,
            Manchester, UK.
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
