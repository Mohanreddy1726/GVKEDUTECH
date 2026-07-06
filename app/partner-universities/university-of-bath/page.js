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
    question: "Is the University of Bath recognised in India?",
    answer:
      "Yes. The University of Bath is a prestigious Russell Group research university and its degrees are widely recognised in India. Bath qualifications are valued by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies, opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at the University of Bath?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at Bath run for 1 year full-time (12 months). Some research and placement pathways (with a professional placement year) take 12–24 months. MPhil / PhD programs typically take 3–4 years of full-time study.",
  },
  {
    question: "Does the University of Bath require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0. Higher requirements apply for programs in Business, Education, English and related subjects (often IELTS 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific program.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Bath?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 22,000 – 30,000 per year (approximately INR 19–26 lakh) depending on the program. MBA programs typically cost around GBP 32,000–38,000. The University of Bath also offers a range of scholarships for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at Bath?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Bath has a strong part-time job market in retail, hospitality, tutoring, university admin, and on-campus roles.",
  },
  {
    question: "Does the University of Bath offer scholarships for Indian students?",
    answer:
      "Yes. Bath offers multiple scholarships including the Global Leaders Scholarship, Postgraduate Scholarships, and country-specific awards that recognise Indian academic excellence. Most scholarships range from £5,000 – £15,000 and are awarded automatically or via a short essay application.",
  },
  {
    question: "How safe is Bath for international students?",
    answer:
      "Bath is consistently ranked among the safest cities in the UK. The university provides 24/7 on-campus security, well-lit walkways, CCTV, and a dedicated Student Wellbeing service. The friendly local community and growing international population make Bath an exceptionally welcoming city for Indian students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Bath graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. Bath graduates are highly sought after in finance, consulting, technology, research, engineering, education and public-sector roles globally.",
  },
  {
    question: "Does GVK EduTech help with University of Bath admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Bath. We provide end-to-end support — program shortlisting, SOP/LOR guidance, application submission, CAS, visa filing, and pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Bath based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Bath portal with SOP & LORs",
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
  "Offer Letter (University of Bath)",
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
    title: "Russell Group University",
    desc: "Member of the prestigious Russell Group — 24 leading UK research-intensive universities",
    icon: Award,
  },
  {
    title: "World Top 160",
    desc: "Consistently ranked among the top 160 universities globally (QS World Rankings)",
    icon: TrendingUp,
  },
  {
    title: "Top for Employability",
    desc: "Ranked among the UK's top 10 universities for graduate employment outcomes",
    icon: Briefcase,
  },
  {
    title: "Research Excellence",
    desc: "Outstanding REF performance across engineering, sciences, management and humanities",
    icon: Star,
  },
  {
    title: "Heritage City Location",
    desc: "Live in Bath — a UNESCO World Heritage city famous for Roman baths and Georgian architecture",
    icon: MapPin,
  },
  {
    title: "Diverse Community",
    desc: "Join 20,000+ students from over 130 countries worldwide",
    icon: Users,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa available after graduation",
    icon: Globe,
  },
  {
    title: "Alumni Network",
    desc: "Connect with successful Bath graduates working in 150+ countries",
    icon: Building2,
  },
];

const rankings = [
  { label: "Top 160", sub: "QS World University Rankings" },
  { label: "Russell", sub: "Group Member" },
  { label: "Top 10", sub: "UK Graduate Employability" },
  { label: "1966", sub: "Year Established — 60+ Years of Legacy" },
];

const advantages = [
  {
    title: "No Entrance Exam",
    desc: "Admission based on Bachelor's degree grades and English test scores",
  },
  {
    title: "Globally Recognised",
    desc: "Russell Group degree valued by employers across the world",
  },
  {
    title: "Career Services",
    desc: "Dedicated support for job placements, internships and industry placements",
  },
  {
    title: "Alumni Network",
    desc: "Connect with 160K+ graduates globally",
  },
  {
    title: "Industry Links",
    desc: "Partnerships with top employers across engineering, business and tech",
  },
  {
    title: "Scholarships",
    desc: "Range of funding options for Indian students",
  },
  {
    title: "Post-Study Work",
    desc: "2-year Graduate Route visa after graduation",
  },
  {
    title: "GVK Support",
    desc: "End-to-end admission & visa help from India experts",
  },
];

export default function UniversityOfBathPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Bath Fees, Eligibility & Admission Process 2026"
        subtitle="Russell Group · World Top 160 · Research-Led Teaching · UNESCO World Heritage City Campus"
        breadcrumb="Partner Universities"
        backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbLzXCl8qduiFgntO6W1OjtTquYDVPz2SSfceFrukwVw&s=10"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1966 · Bath, UK
              </p>
              <ColorfulHeading
                text="University of Bath"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Bath is a leading Russell Group research
                university, consistently ranked among the world&apos;s top 160.
                Founded in 1966, Bath has built a strong global reputation for
                research-led teaching, world-class facilities, and outstanding
                graduate employability — making it a top destination for
                Indian students pursuing postgraduate study in the UK.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Choose from over 200 Master&apos;s programs across engineering,
                business, sciences, humanities, social sciences and health.
                A degree from Bath opens doors to global career opportunities
                and is highly valued by leading employers worldwide.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Russell Group", "Top 160 World", "Research Intensive", "High Employability"].map(
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
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA7nzHy2j_GcfOdwOeQkkV2fVNC64cNPNNo6A1ym2Uw&s=10"
                  alt="University of Bath campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">60+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">20K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 130+ countries
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE BATH ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Bath"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From Russell Group research-led teaching to excellent career
              prospects and a stunning UNESCO World Heritage city campus, the
              University of Bath offers everything you need for a successful
              future.
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

      {/* ── 3. RECOGNITION BAND ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Russell", sub: "Group Member" },
              { label: "Top 160", sub: "QS World University Rankings" },
              { label: "Top 10", sub: "UK Graduate Employability" },
              { label: "UK Top 10", sub: "Consistently Top-Ranked" },
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
              text="University of Bath — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Consistently ranked among the world&apos;s leading universities and
              recognised for academic excellence, research impact and graduate
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

      {/* ── 5. MASTERS FEES STRUCTURE ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive tuition fees for a Russell Group UK education, with
              various scholarship opportunities for outstanding international
              students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    University of Bath — Tuition Fee by Faculty
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
                          £25,000 – £30,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹21 – ₹26 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Computer Science
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £26,000 – £30,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹22 – ₹26 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Sciences (Biology, Physics, etc.)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £23,000 – £28,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹20 – ₹24 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Humanities & Social Sciences
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
                          £38,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹32 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹85 (indicative). University of
                    Bath fees are subject to revision by the university.
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
                  label: "Accommodation",
                  sub: "On-campus & private",
                  usd: "£6,800 – £9,800",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catering options",
                  usd: "£2,500 – £3,800",
                },
                {
                  label: "Transport & Personal",
                  sub: "Student discounts",
                  usd: "£1,200 – £2,200",
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
                  <p className="text-lg font-bold text-accent">£33,500–£46,800</p>
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
              Clear requirements — meet these to secure your place at the
              University of Bath.
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
                desc: "Strong Statement of Purpose explaining your goals and motivations",
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

      {/* ── 7. ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="University of Bath Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from your application to
              your first day at the University of Bath.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/14*100%+1.25rem)] right-[calc(1/14*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-7 gap-6">
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

      {/* ── 8. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Bath Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these before applying — GVK EduTech will guide you through
              every step of the process.
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

      {/* ── 9. ACCOMMODATION ────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation at Bath"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Bath offers excellent on-campus
                accommodation options to suit every budget. From modern
                en-suite halls of residence to private rentals, students find
                safe, comfortable and well-located living arrangements across
                the Claverton Down campus.
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
                  alt="University of Bath student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkA7nzHy2j_GcfOdwOeQkkV2fVNC64cNPNNo6A1ym2Uw&s=10"
                  alt="University of Bath campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN THE UK ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiIick52-Fju6nO8rNB8cBYjDh_7fAfjPhFZnaCug-g&s=10"
                  alt="Bath city and Roman Baths"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="UK student life in Bath"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Bath, UK
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Bath is England&apos;s only city designated a UNESCO World
                Heritage Site, famous for its Roman Baths, Georgian
                architecture and vibrant cultural scene. With the Cotswolds
                and the coast nearby, you get the perfect blend of heritage,
                nature and a modern student lifestyle.
              </p>
              <ul className="space-y-3">
                {[
                  "UNESCO World Heritage city — Roman Baths, Bath Abbey and the Royal Crescent",
                  "One of the safest and most welcoming cities in the UK",
                  "Compact, walkable and student-friendly with great cafes and culture",
                  "Lower cost of living than London and other major UK cities",
                  "Gateway to the Cotswolds, Bristol, Stonehenge and the Jurassic Coast",
                  "Strong Indian community & restaurants across the city",
                  "Excellent rail links to London (1.5 hrs), Bristol (15 min) and Cardiff",
                  "2-year post-study Graduate Route work visa available",
                  "World-class free healthcare (NHS) for international students",
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
              text="Advantages of Studying at the University of Bath"
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
              Everything Indian students ask about the University of Bath and
              Master&apos;s programs in the UK.
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
            Begin Your Masters Journey at the University of Bath
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech&apos;s expert counselors will guide you through the
            entire process — from program selection to your first day on
            campus in Bath.
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
