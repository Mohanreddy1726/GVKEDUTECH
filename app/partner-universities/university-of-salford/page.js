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
  Tv,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Salford recognised in India?",
    answer:
      "Yes. The University of Salford is a UK public research university and its degrees are widely recognised in India. Salford qualifications are valued by the Association of Indian Universities (AIU), Indian employers and major global accreditation bodies, opening doors to careers across India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at the University of Salford?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at Salford run for 1 year full-time (12 months). Some programs with a professional placement or industry year take 12–24 months. MPhil / PhD research programs typically take 3–4 years of full-time study.",
  },
  {
    question: "Does the University of Salford require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.0–6.5 (minimum 5.5 in each band). Higher bands apply for Journalism, Media, English and a few other programs. Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for your specific course.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Salford?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 15,000 – 22,000 per year (approximately INR 13–19 lakh) depending on the program. Media, Engineering and Business programs typically sit at the higher end. Salford also offers dedicated international scholarships for outstanding Indian students.",
  },
  {
    question: "Can Indian students work part-time while studying at Salford?",
    answer:
      "Yes. On a UK Student Route visa, Indian students can work up to 20 hours per week during term time and full-time during vacations. Manchester has one of the largest student part-time job markets in the UK — including retail, hospitality, on-campus roles, and media internships at MediaCityUK.",
  },
  {
    question: "Does the University of Salford offer scholarships for Indian students?",
    answer:
      "Yes. Salford offers the International Excellence Scholarship, country-specific awards and programme-specific bursaries. Most scholarships are worth £2,000 – £5,000 and are awarded either automatically based on academic merit or through a short essay application.",
  },
  {
    question: "How safe is Salford / Manchester for international students?",
    answer:
      "Salford and Manchester are major, multicultural student cities with dedicated student villages and 24/7 campus security, CCTV, and a Student Wellbeing service. The university runs a free SafeZone app, late-night student shuttle and pastoral support designed specifically for international students.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Salford graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. Located in Manchester — the UK's fastest-growing tech and media hub — Salford graduates are highly sought after in media, business, finance, health, and engineering roles.",
  },
  {
    question: "Does GVK EduTech help with University of Salford admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Salford. We provide end-to-end support — program shortlisting, SOP/LOR guidance, application submission, CAS, visa filing, and pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Salford based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Salford portal with SOP & LORs",
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
  "Letter of Recommendation (2–3 academic / professional)",
  "Passport Size Photographs",
  "Birth Certificate",
  "Bank Statement (Proof of Funds)",
  "Visa Application Form",
  "Offer Letter (University of Salford)",
];

const accommodationFeatures = [
  { icon: Home, label: "On-campus student village with en-suite rooms" },
  { icon: Users, label: "Mix of shared flats, studios & family rooms" },
  { icon: Utensils, label: "Self-catering kitchens & on-campus eateries" },
  { icon: Wifi, label: "High-speed Wi-Fi across all campus residences" },
  { icon: ShieldCheck, label: "24/7 security, CCTV & SafeZone app" },
  { icon: Clock, label: "Laundry, gym, study & social spaces" },
];

const whyChoose = [
  {
    title: "MediaCityUK Campus",
    desc: "Home to the BBC, ITV and major media houses — ideal for media, journalism & broadcasting students",
    icon: Tv,
  },
  {
    title: "Industry-Led Teaching",
    desc: "Every Master's program is co-designed with employers including BBC, Sky, IBM, NHS and Deloitte",
    icon: Briefcase,
  },
  {
    title: "Manchester Location",
    desc: "Located minutes from Manchester — the UK's fastest-growing tech and business hub",
    icon: MapPin,
  },
  {
    title: "Research Excellence",
    desc: "Strong REF performance in health, engineering, media and built environment",
    icon: Award,
  },
  {
    title: "Professional Placements",
    desc: "Most Master's programs offer optional paid placement years with UK and global employers",
    icon: Star,
  },
  {
    title: "Affordable Manchester",
    desc: "Lower cost of living than London with world-class cultural, sport and music scene",
    icon: PoundSterling,
  },
  {
    title: "Diverse Community",
    desc: "Join 23,000+ students from over 150 countries worldwide",
    icon: Users,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa available after graduation in the UK",
    icon: Globe,
  },
];

const rankings = [
  { label: "Top 800", sub: "QS World University Rankings" },
  { label: "Top 75", sub: "UK University Rankings" },
  { label: "Top 20",  sub: "UK for Media & Communications" },
  { label: "1967",   sub: "Year Established — 55+ Years of Legacy" },
];

const advantages = [
  {
    title: "No Entrance Exam",
    desc: "Admission based on Bachelor's degree grades and English test scores",
  },
  {
    title: "Globally Recognised",
    desc: "UK public research degree valued by employers across the world",
  },
  {
    title: "Career Services",
    desc: "Dedicated support for job placements, internships and industry placements",
  },
  {
    title: "Industry Network",
    desc: "Direct partnerships with BBC, ITV, NHS, IBM and the UK's largest recruiters",
  },
  {
    title: "Industry Links",
    desc: "Live projects, guest lectures and placements built into most Master's programs",
  },
  {
    title: "Scholarships",
    desc: "Range of funding options and bursaries for Indian students",
  },
  {
    title: "Post-Study Work",
    desc: "2-year Graduate Route visa after graduation in the UK",
  },
  {
    title: "GVK Support",
    desc: "End-to-end admission & visa help from India-based UK experts",
  },
];

export default function UniversityOfSalfordPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Salford Fees, Eligibility & Admission Process 2026"
        subtitle="Industry-Led Teaching · MediaCityUK Campus · Manchester · UK Public Research University · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1967 · Manchester, UK
              </p>
              <ColorfulHeading
                text="University of Salford"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Salford is a leading UK public research
                university located just minutes from Manchester — the
                UK&apos;s fastest-growing tech, business and media hub.
                Founded in 1967, Salford is internationally renowned for
                industry-led teaching, with specialist campuses including
                MediaCityUK — the home of the BBC and ITV in the North.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Choose from a wide range of Master&apos;s programs across
                business, engineering, media, health, built environment and
                science. A Salford degree is highly valued by leading
                employers worldwide and offers Indian students a direct
                gateway to global career opportunities in the UK and beyond.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "UK Public Research University",
                  "MediaCityUK Home",
                  "Industry-Led Teaching",
                  "Graduate Route Visa",
                  "Affordable Manchester",
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
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&auto=format&fit=crop"
                  alt="University of Salford campus in Manchester"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">55+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">23K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Students from 150+ countries
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. INTERNAL LINK BAND ───────────────────────────────── */}
      <section className="py-6 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <span className="font-semibold text-foreground">
              Explore more about studying in the UK:
            </span>
            <Link
              href="/masters/uk"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              Masters in UK <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="/partner-universities"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              All Partner Universities <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="/apply"
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
            >
              Apply Now <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE SALFORD ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Why Indian Students Choose Salford"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From MediaCityUK and industry placements to affordable
              Manchester living, the University of Salford gives Indian
              students a uniquely practical path into UK careers.
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

      {/* ── 4. RECOGNITION BAND ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Russell", sub: "Group Research University (UK)" },
              { label: "Top 800", sub: "QS World University Rankings" },
              { label: "Top 75", sub: "UK University Rankings" },
              { label: "Top 20", sub: "UK for Media & Communications" },
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

      {/* ── 5. WORLD RANKING ────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="University of Salford — World Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Recognised globally for academic excellence, research impact
              and graduate employability — with a top-20 UK reputation in
              Media, Communications and Built Environment.
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

      {/* ── 6. MASTERS FEES STRUCTURE ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Competitive tuition fees for a UK public research degree, with
              industry-aligned programs and scholarship opportunities for
              outstanding international students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    University of Salford — Tuition Fee by Faculty
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
                          £17,000 – £19,500
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹17 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Media, Communications & Journalism
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £18,000 – £22,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹15 – ₹19 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Engineering & Computing
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £19,000 – £22,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹16 – ₹19 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Health, Nursing & Psychology
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £16,000 – £19,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹16 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Built Environment & Science
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          £17,000 – £20,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹14 – ₹17 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          MBA
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          £21,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹18 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 GBP ≈ ₹85 (indicative). University of
                    Salford fees are subject to revision by the university.
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
                  usd: "£5,500 – £8,000",
                },
                {
                  label: "Food & Groceries",
                  sub: "Self-catering options",
                  usd: "£2,000 – £3,200",
                },
                {
                  label: "Transport & Personal",
                  sub: "Student discounts",
                  usd: "£900 – £1,500",
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
                  <p className="text-lg font-bold text-accent">£25,400–£34,700</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. ELIGIBILITY CRITERIA ─────────────────────────────── */}
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
              University of Salford.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 55%+ or equivalent (varies by program)",
              },
              {
                title: "English Language",
                desc: "IELTS 6.0–6.5 (min 5.5 in each band) or equivalent; waivers available",
              },
              {
                title: "SOP",
                desc: "Strong Statement of Purpose explaining your goals and motivations",
              },
              {
                title: "References",
                desc: "2 academic / professional letters of recommendation",
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

      {/* ── 8. ADMISSION PROCESS ────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading
              text="University of Salford Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from your application to
              your first day at the University of Salford.
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

      {/* ── 9. REQUIRED DOCUMENTS ───────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Salford Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these before applying — GVK EduTech will guide you
              through every step of the process.
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

      {/* ── 10. ACCOMMODATION ────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation at Salford"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Salford offers modern on-campus
                accommodation at its student village in Salford, plus
                MediaCityUK residences for media students. From en-suite
                rooms to self-catered apartments, Indian students find
                safe, comfortable and well-connected living options just
                minutes from Manchester city centre.
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
                  alt="University of Salford student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="University of Salford campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 11. STUDENT LIFE IN THE UK ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Manchester city skyline"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Student life in Manchester"
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
                Manchester is one of the UK&apos;s most exciting and
                multicultural cities — famous for its music scene, world-class
                sport, cutting-edge tech hubs and a thriving Indian
                community. With MediaCityUK on its doorstep, Salford gives
                Indian students the perfect blend of academic, professional
                and social life in one of the UK&apos;s most affordable major
                cities.
              </p>
              <ul className="space-y-3">
                {[
                  "UK's fastest-growing tech, media and business hub",
                  "One of the most multicultural cities in the UK with a large Indian community",
                  "Lower cost of living than London with excellent transport and student discounts",
                  "Home to BBC, ITV, MediaCityUK and major global employers",
                  "World-class music, sport (Manchester United, City), arts and food scene",
                  "Excellent rail and air links — London in 2 hrs, Manchester Airport minutes away",
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

      {/* ── 12. ADVANTAGES ───────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Advantages of Studying at the University of Salford"
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Frequently Asked Questions"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Everything Indian students ask about the University of Salford
              and Master&apos;s programs in the UK.
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

      {/* ── 14. APPLY NOW CTA ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters Journey at the University of Salford
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            GVK EduTech&apos;s expert counselors will guide you through the
            entire process — from program selection to your first day on
            campus in Manchester.
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

      {/* ── 15. INTERNAL LINKS FOOTER ────────────────────────────── */}
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
