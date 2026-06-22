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
  Landmark,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Glasgow recognised in India?",
    answer:
      "Yes. The University of Glasgow is a globally prestigious Russell Group university and one of Scotland's ancient universities. Its degrees are recognized by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies. A Glasgow degree carries significant weight in the Indian job market.",
  },
  {
    question: "What is the duration of Master's programs at the University of Glasgow?",
    answer:
      "Most taught Master's (MSc / MA / MBA) programs at Glasgow run for 1 year full-time (12 months). Some programs with placement or research pathways take 12–18 months. MPhil/PhD programs typically take 3–4 years.",
  },
  {
    question: "Does the University of Glasgow require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0 (varies by program). Students from English-medium institutions may be eligible for a waiver. Check with GVK EduTech for program-specific requirements.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Glasgow?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 20,000 – 32,000 per year (approximately INR 21–34 lakh) depending on the program. MBA programs cost around GBP 35,000–40,000. Scholarships are available for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at Glasgow?",
    answer:
      "Yes. On a UK Student Route visa, you can work up to 20 hours per week during term time and full-time during holidays. Glasgow is Scotland's largest city with excellent part-time job opportunities in retail, hospitality, tutoring, and on-campus positions.",
  },
  {
    question: "Does Glasgow offer scholarships for Indian students?",
    answer:
      "Yes. The University of Glasgow offers numerous scholarships including the Glasgow Masters Scholarship, Vice-Chancellor's Scholarship, and country-specific awards for Indian students. Most scholarships range from £2,000 – £15,000.",
  },
  {
    question: "How safe is Glasgow for international students?",
    answer:
      "Glasgow is one of the UK's safest major cities for students. The university has dedicated on-campus security, well-lit pathways, and support services. The Students' Union also provides safety resources. The city has a large international community making it very welcoming.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Glasgow graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a Master's degree. Glasgow graduates are highly sought after in finance, tech, engineering, healthcare, and creative industries globally.",
  },
  {
    question: "Does GVK EduTech help with University of Glasgow admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Glasgow. We provide end-to-end support — from program selection, SOP/LOR guidance, application submission, CAS, visa filing to pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Glasgow based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Glasgow portal with SOP & LORs",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your conditional/unconditional offer within 2–4 weeks",
    icon: Award,
  },
  {
    step: 5,
    title: "Accept & Pay Deposit",
    desc: "Accept your offer and pay the tuition deposit to secure your place",
    icon: PoundSterling,
  },
  {
    step: 6,
    title: "CAS & Visa",
    desc: "Receive CAS, submit visa application — GVK EduTech assists with documentation",
    icon: Globe,
  },
  {
    step: 7,
    title: "Pre-Departure",
    desc: "Attend orientation, book flights, and prepare for your Glasgow journey",
    icon: Plane,
  },
];

const documents = [
  "Valid Passport (min. 12 months)",
  "Bachelor's Degree Certificate & Mark Sheets",
  "English Language Test Score (IELTS/TOEFL/PTE)",
  "Statement of Purpose (SOP)",
  "Letters of Recommendation (2 LORs)",
  "Passport Size Photos",
  "CV/Resume",
  "Work Experience Letters (if applicable)",
  "Bank Statement (for visa)",
  "Income Proof",
  "CAS Letter",
  "Visa Application Form",
];

const whyChoose = [
  {
    title: "World Top 100 University",
    desc: "Ranked in the top 100 globally (QS World University Rankings 2026)",
    icon: Award,
  },
  {
    title: "Russell Group Member",
    desc: "Part of the UK's prestigious Russell Group of research-intensive universities",
    icon: Star,
  },
  {
    title: "Ancient University",
    desc: "Founded in 1451 — one of the oldest universities in the English-speaking world",
    icon: Landmark,
  },
  {
    title: "Scholarships Available",
    desc: "Range of merit-based scholarships for international students up to £15,000",
    icon: PoundSterling,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa to work in the UK after your Master's",
    icon: Briefcase,
  },
  {
    title: "Vibrant Student City",
    desc: "Glasgow is a friendly, affordable, and culturally rich city in Scotland",
    icon: MapPin,
  },
  {
    title: "Industry Links",
    desc: "Strong connections with top UK and global employers for placements",
    icon: Building2,
  },
  {
    title: "Global Alumni Network",
    desc: "Join a network of 250,000+ Glasgow graduates worldwide",
    icon: Users,
  },
];

const popularPrograms = [
  { name: "MSc Management", fees: "£24,000", duration: "1 year" },
  { name: "MSc International Business", fees: "£26,500", duration: "1 year" },
  { name: "MSc Data Science", fees: "£28,000", duration: "1 year" },
  { name: "MSc Artificial Intelligence", fees: "£29,500", duration: "1 year" },
  { name: "MBA", fees: "£35,000", duration: "1 year" },
  { name: "LLM International Law", fees: "£22,000", duration: "1 year" },
  { name: "MSc Finance", fees: "£27,000", duration: "1 year" },
  { name: "MSc Engineering Management", fees: "£25,500", duration: "1 year" },
];

const intakeMonths = [
  { label: "September", month: "Primary Intake", available: true },
  { label: "January", month: "Secondary Intake", available: true },
];

function Plane({ className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

export default function UniversityOfGlasgowPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Glasgow — Masters Programs 2026"
        subtitle="Russell Group University · World Top 100 · Post-Study Work Visa"
        breadcrumb="Partner Universities"
        backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNG9G1W0nZdWKI9r4vctjBZ1qAMAxVmQJDk3Vuz4Y-A&s=10"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1451 · Glasgow, Scotland, UK
              </p>
              <ColorfulHeading
                text="University of Glasgow"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Glasgow is a world-class research university and
                member of the prestigious Russell Group. Founded in 1451, it is one of
                the oldest universities in the English-speaking world, offering
                exceptional postgraduate programs across sciences, arts, business, and
                engineering.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With over <strong className="text-foreground">250,000 alumni</strong>{" "}
                worldwide and a reputation for academic excellence, Glasgow is the
                perfect choice for Indian students seeking a globally recognized UK
                Master's degree.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Russell Group", "World Top 100", "Ancient University", "Post-Study Visa"].map(
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdV4VKgTU1SXJiy2maVTuyfi9b8mNdSf4WQo3dHbB_Q&s=10"
                  alt="University of Glasgow campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">#81</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    QS World Ranking 2026
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">570+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Indian Students
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RANKING BAND ──────────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "QS #81", sub: "World University Rankings 2026" },
              { label: "Russell Group", sub: "UK Research Intensive Universities" },
              { label: "#14", sub: "UK University Rankings" },
              { label: "4th", sub: "Oldest UK University" },
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
              text="Why Indian Students Choose Glasgow"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class education to post-study work opportunities, Glasgow
              checks every box for Indian students.
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

      {/* ── POPULAR PROGRAMS ─────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Master's Programs"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Indicative tuition fees for international students (2026 intake)
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-6">
            <Card className="border-2 border-accent/20 overflow-hidden">
              <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                <CardTitle className="text-base font-semibold text-foreground">
                  Business & Management
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Program
                      </th>
                      <th className="text-right px-4 py-3 font-semibold text-foreground">
                        Fees (GBP)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularPrograms.slice(0, 5).map((prog, i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="px-4 py-3 text-foreground">{prog.name}</td>
                        <td className="px-4 py-3 text-right font-semibold text-foreground">
                          {prog.fees}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 overflow-hidden">
              <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                <CardTitle className="text-base font-semibold text-foreground">
                  Science & Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Program
                      </th>
                      <th className="text-right px-4 py-3 font-semibold text-foreground">
                        Fees (GBP)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {popularPrograms.slice(5).map((prog, i) => (
                      <tr key={i} className="border-b border-border">
                        <td className="px-4 py-3 text-foreground">{prog.name}</td>
                        <td className="px-4 py-3 text-right font-semibold text-foreground">
                          {prog.fees}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            * Exchange rate: 1 GBP ≈ ₹108 (indicative). Fees are indicative and subject to change.
          </p>
        </div>
      </section>

      {/* ── INTAKE ────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Intake Periods"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Plan your application timeline according to your preferred intake.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {intakeMonths.map((intake, i) => (
              <Card key={i} className="border border-border/60">
                <CardContent className="p-6 text-center">
                  <p className="text-2xl font-bold text-accent mb-1">
                    {intake.label}
                  </p>
                  <p className="text-muted-foreground text-sm">{intake.month}</p>
                  {intake.available && (
                    <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Open
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear requirements for Indian students applying to Glasgow.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Requirements",
                desc: "Bachelor's degree with 50-55% or equivalent (varies by program)",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (no band below 6.0) or equivalent. Some programs require higher.",
              },
              {
                title: "GMAT/GRE",
                desc: "Required for MBA and some finance programs. Check specific program requirements.",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA (typically 2-3 years). Optional for other programs.",
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
              text="Admission Process"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from application to your first day
              at Glasgow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/14*100%+1.25rem)] right-[calc(1/14*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-7 gap-4">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-[4rem] h-[4rem] rounded-full border-2 border-accent bg-background flex items-center justify-center mb-3 flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="font-bold text-foreground text-xs mb-1">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">
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
              text="Required Documents"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these before applying — GVK EduTech will guide you through every
              document.
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

      {/* ── STUDENT LIFE ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkAjf4r1xxtaSAepQr0k_DY-Hp2X9AyOgethgccnBUpG-pTOP4QP1eeM&s=10"
                  alt="Glasgow campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Glasgow city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Life
              </p>
              <ColorfulHeading
                text="Life in Glasgow"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Glasgow is Scotland's largest and most vibrant city — known for its
                friendly people, rich cultural heritage, and affordable cost of living.
                As a student, you'll enjoy world-class amenities, excellent transport
                links, and a thriving social scene.
              </p>
              <ul className="space-y-3">
                {[
                  "Affordable living costs compared to London",
                  "Safe and welcoming city for international students",
                  "Excellent public transport (subway, buses, trains)",
                  "Vibrant music, art, and nightlife scene",
                  "Home to major UK and global employers",
                  "Easy access to Edinburgh, Highlands, and Europe",
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
              text="Advantages of Studying at Glasgow"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "2-Year Post-Study Visa",
                desc: "Work in the UK for 2 years after your Master's",
              },
              {
                title: "Scholarships",
                desc: "Up to £15,000 available for Indian students",
              },
              {
                title: "Research Excellence",
                desc: "World-leading research across all disciplines",
              },
              {
                title: "Global Network",
                desc: "Join 250,000+ alumni worldwide",
              },
              {
                title: "Career Services",
                desc: "Dedicated career support and employer connections",
              },
              {
                title: "Modern Facilities",
                desc: "State-of-the-art libraries and labs",
              },
              {
                title: "Student Support",
                desc: "Comprehensive visa, housing, and welfare support",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end application and visa assistance",
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
            Begin Your Master's Journey at the University of Glasgow
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors will guide you through the entire process — from
            program selection to your first day on campus.
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
              { href: "/mbbs/uk", label: "Masters in UK" },
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