"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import { FAQSchema } from "@/components/SEO";
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
  DollarSign,
  Award,
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
  Rocket,
  Cpu,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Northeastern University (Boston) recognised in India?",
    answer:
      "Yes. Northeastern University is a top-tier US research university accredited by the New England Commission of Higher Education (NECHE). Its degrees are recognised by the Association of Indian Universities (AIU), Indian employers, and global accreditation bodies — making a Northeastern degree highly respected in the Indian job market.",
  },
  {
    question: "What is the duration of Master's programs at Northeastern University?",
    answer:
      "Most Master's (MS / MA / MBA) programs at Northeastern run for 1.5–2 years full-time. Many programs also offer a 12–16 month fast-track option or a co-op (work experience) pathway that may extend the program to 2 years. The flagship PlusOne program lets qualified Northeastern undergraduates earn a Master's in just one extra year.",
  },
  {
    question: "Does Northeastern University require GRE / GMAT?",
    answer:
      "Many Master's programs at Northeastern have made GRE/GMAT optional for recent applicants, though certain competitive programs (e.g., MS in Data Science, Computer Science, Engineering) may still recommend strong scores. Check program-specific requirements — GVK EduTech will guide you.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at Northeastern?",
    answer:
      "For the 2026 intake, indicative tuition for international Master's students ranges from USD 28,000 – 60,000 per year (approximately INR 24–51 lakh) depending on the college and program. Co-op and MBA programs cost more. Merit-based scholarships up to USD 15,000 per year are available.",
  },
  {
    question: "Can Indian students work part-time while studying at Northeastern?",
    answer:
      "Yes. On an F-1 student visa, Indian students can work up to 20 hours per week on campus during term time and full-time during breaks. Northeastern's signature co-op program lets Master's students complete up to 6–8 months of paid, full-time work in leading US companies — a major value-add of a Northeastern degree.",
  },
  {
    question: "Does Northeastern offer scholarships for Indian students?",
    answer:
      "Yes. Northeastern offers merit-based scholarships ranging from USD 5,000 to USD 15,000 per year for outstanding international Master's applicants. There are also global scholarship programs and research assistantships available — GVK EduTech helps you identify and apply for the best-fit opportunities.",
  },
  {
    question: "How safe is Boston for international students?",
    answer:
      "Boston is one of the safest and most student-friendly cities in the United States. Northeastern has its own police department, 24/7 campus security, emergency blue-light phones, and a strong international student support office. Boston is also home to 250,000+ university students across 60+ institutions — a very welcoming student environment.",
  },
  {
    question: "What is OPT and how does it help Northeastern graduates?",
    answer:
      "OPT (Optional Practical Training) allows international graduates to work in the USA for up to 12 months after completing their degree. STEM-designated Master's graduates (which covers most Northeastern programs) are eligible for a 24-month STEM extension, giving Indian students up to 3 years of US work authorisation after graduation.",
  },
  {
    question: "What is Northeastern's signature co-op program?",
    answer:
      "Northeastern's co-op program is one of the oldest and largest in the USA. Master's students can alternate classroom study with 6–8 month paid industry placements at companies like Amazon, Google, Tesla, Pfizer, and Goldman Sachs. This real-world experience is built into many degree programs and is a major reason Indian students choose Northeastern.",
  },
  {
    question: "Does GVK EduTech help with Northeastern University admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for US universities including Northeastern. We provide end-to-end support — from program and campus selection, SOP/LOR guidance, application submission, I-20, F-1 visa filing to pre-departure orientation and accommodation assistance.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Free Counselling",
    desc: "Discuss your academic profile with GVK EduTech's US admissions experts",
    icon: FileText,
  },
  {
    step: 2,
    title: "Choose Your Program",
    desc: "Shortlist the right MS / MA at Northeastern based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Take Standardised Tests",
    desc: "Appear for GRE/GMAT (if required) and IELTS / TOEFL / PTE",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Apply Online",
    desc: "Submit your application via Northeastern portal with SOP & LORs",
    icon: CheckCircle,
  },
  {
    step: 5,
    title: "Receive Offer",
    desc: "Get your offer letter within 4–8 weeks; merit scholarships evaluated",
    icon: Star,
  },
  {
    step: 6,
    title: "Pay Deposit & Get I-20",
    desc: "Confirm enrollment, receive Form I-20 for F-1 student visa",
    icon: DollarSign,
  },
  {
    step: 7,
    title: "Apply for F-1 Visa",
    desc: "Our team assists with DS-160, visa interview and financial documentation",
    icon: Globe,
  },
  {
    step: 8,
    title: "Pre-Departure Briefing",
    desc: "Attend orientation, book flights, and prepare for your Boston journey",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (min. 6 months validity beyond program end date)",
  "Bachelor's Degree Certificate & Transcripts",
  "English Language Test Score (IELTS / TOEFL / PTE)",
  "GRE / GMAT Score (if required by program)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2–3)",
  "Resume / CV",
  "Passport Size Photographs",
  "Financial Documents (Bank Statements, Affidavit of Support)",
  "DS-160 Visa Application Form",
  "SEVIS Fee Receipt (I-901)",
  "Form I-20 (issued by Northeastern)",
];

const hostelFeatures = [
  { icon: Home, label: "On-campus residence halls (multiple options)" },
  { icon: Users, label: "Modern single & shared en-suite rooms" },
  { icon: Utensils, label: "Dining halls & food courts with global cuisine" },
  { icon: Wifi, label: "High-speed WiFi & smart classrooms" },
  { icon: ShieldCheck, label: "Northeastern Police & 24/7 campus security" },
  { icon: Clock, label: "Fitness centres, libraries & study lounges" },
];

const whyChoose = [
  {
    title: "Top 50 US University",
    desc: "Ranked among the top 50 US universities with strong global reputation",
    icon: TrendingUp,
  },
  {
    title: "#1 Co-op Program",
    desc: "Largest co-op program in the USA — paid industry experience built into your Master's",
    icon: Briefcase,
  },
  {
    title: "STEM-OPT Eligible",
    desc: "Most programs are STEM-designated — qualify for up to 3 years US work authorisation",
    icon: Rocket,
  },
  {
    title: "Boston Location",
    desc: "Located in Boston — a global hub for biotech, fintech, AI and healthcare",
    icon: MapPin,
  },
  {
    title: "Diverse Community",
    desc: "Students from 140+ countries — 24% international student population",
    icon: Users,
  },
  {
    title: "Research Excellence",
    desc: "R1 research university with USD 200M+ annual research expenditure",
    icon: Award,
  },
  {
    title: "Industry Network",
    desc: "Strong partnerships with Amazon, Google, Pfizer, Tesla, BCG and more",
    icon: Building2,
  },
  {
    title: "Innovation Hub",
    desc: "State-of-the-art labs and innovation centres including the Roux Institute",
    icon: Cpu,
  },
];

const rankingFacts = [
  { rank: "#53", source: "National Universities · US News 2025" },
  { rank: "#344", source: "QS World University Rankings 2025" },
  { rank: "Top 100", source: "Global Employability · Times Higher Ed" },
  { rank: "1898", source: "Founded · 125+ years of academic excellence" },
];

export default function NortheasternUniversityBostonPage() {
  return (
    <PageLayout>
      <FAQSchema
        faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      {/* ── HERO / PAGE HEADER ──────────────────────────────── */}
      <PageHeader
        title="Northeastern University, Boston — Masters 2026"
        subtitle="Top 50 US University · #1 Co-op Program · STEM-OPT · Boston"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1572538323043-50ebf7b5dfa8?w=1600&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1898 · Boston, Massachusetts, USA
              </p>
              <ColorfulHeading
                text="Northeastern University, Boston"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Northeastern University (Boston) is a top-tier US research
                university renowned for its experiential learning model and
                the largest co-op program in the United States. Located in the
                heart of Boston — a global hub for biotech, AI, fintech and
                healthcare — Northeastern offers Indian students a Master's
                degree that combines rigorous academics with paid industry
                experience at companies like Amazon, Google, Tesla, and Pfizer.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With <strong className="text-foreground">STEM-designated</strong>{" "}
                programs across most colleges, graduates qualify for up to{" "}
                <strong className="text-foreground">3 years of US work
                authorisation</strong> through OPT and the STEM extension —
                making Northeastern one of the strongest return-on-investment
                choices for Indian students pursuing a Master's in the USA.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Top 50 US University",
                  "STEM-OPT Eligible",
                  "#1 Co-op Program",
                  "Boston Location",
                  "R1 Research",
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
                  <Link href="/contact">Free Counselling</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&auto=format&fit=crop"
                  alt="Northeastern University Boston campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">125+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">3,500+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Co-op employer partners
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
              { label: "#53", sub: "US News National Universities 2025" },
              { label: "R1", sub: "Carnegie Research University" },
              { label: "STEM", sub: "Most Programs Eligible for OPT" },
              { label: "NECHE", sub: "Accredited by New England Commission" },
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
              text="Why Indian Students Choose Northeastern"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-class co-op opportunities to Boston's thriving job
              market, Northeastern offers everything Indian students need for a
              global career.
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
              text="Northeastern University Rankings"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A top-50 US university with strong global rankings across QS,
              Times Higher Education and US News.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rankingFacts.map((item, i) => (
              <Card key={i} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl font-bold text-accent mb-2">
                    {item.rank}
                  </p>
                  <p className="text-muted-foreground text-sm">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEES ─────────────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Masters Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Tuition varies by college and program. Northeastern also offers
              merit scholarships up to USD 15,000 per year for international
              students.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main fee table */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee by College
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          College / Program
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          USD/Year
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Khoury College (CS / Data Science / AI)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $34,000 – $42,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹29 – ₹36 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          College of Engineering
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $32,000 – $40,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹27 – ₹34 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          D'Amore-McKim (Business / MBA / Analytics)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $40,000 – $60,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹34 – ₹51 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          College of Science
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $30,000 – $38,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹25 – ₹32 lakh
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Bouvé College of Health Sciences
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $32,000 – $40,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹27 – ₹34 lakh
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Full-Time MBA
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~$52,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~₹44 lakh
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Tuition
                    excludes co-op semester fees (where applicable).
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Living cost cards */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Annual Living Costs (Boston)
              </p>
              {[
                {
                  label: "Accommodation",
                  sub: "On-campus residence halls",
                  usd: "$10,000 – $14,000",
                },
                {
                  label: "Food & Dining",
                  sub: "Meal plans & groceries",
                  usd: "$4,500 – $6,500",
                },
                {
                  label: "Transport & Books",
                  sub: "MBTA pass, supplies",
                  usd: "$2,000 – $3,500",
                },
                {
                  label: "Health Insurance",
                  sub: "Mandatory for all students",
                  usd: "$2,500 – $3,500",
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
                    <p className="text-base font-bold text-accent">
                      {item.usd}
                    </p>
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
                      Tuition + living (indicative)
                    </p>
                  </div>
                  <p className="text-base font-bold text-accent">$50K–$80K</p>
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
              text="Eligibility Criteria"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear requirements for Indian students applying for a Master's
              degree at Northeastern University Boston.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academics",
                desc: "Bachelor's degree with 60%+ or equivalent (varies by program; CS/Data Science prefers stronger academics)",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5+ (min 6.0 in each band), TOEFL 79+, or PTE 53+. Waivers available for English-medium degrees",
              },
              {
                title: "GRE / GMAT",
                desc: "Optional for most programs, though strong scores strengthen CS, Engineering and Analytics applications",
              },
              {
                title: "Work Experience",
                desc: "2–3 years recommended for MBA; helpful for MS programs but not always required",
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
              A clear eight-step journey from counselling to your first day at
              Northeastern's Boston campus.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-9 left-[calc(1/16*100%+1.25rem)] right-[calc(1/16*100%+1.25rem)] h-px bg-border" />

            <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-6">
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
              Gather these before applying — GVK EduTech will guide you
              through every step, attestation, and translation.
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
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation & Housing"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Northeastern offers multiple on-campus residence halls in
                Boston — all within walking distance of classrooms and labs.
                From traditional halls to modern apartment-style living, every
                option includes 24/7 security, dining, study spaces, and
                high-speed internet.
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
                  alt="Northeastern student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop"
                  alt="Northeastern campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN BOSTON ────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1572538323043-50ebf7b5dfa8?w=400&auto=format&fit=crop"
                  alt="Boston city skyline"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&auto=format&fit=crop"
                  alt="Boston student life"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Boston
              </p>
              <ColorfulHeading
                text="A Global Hub for Education & Innovation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Boston is one of the world's most prestigious student cities —
                home to 60+ colleges and universities and over 250,000
                students. As a Northeastern student, you will study in the
                middle of a thriving biotech, AI and fintech ecosystem that
                consistently ranks among the top US cities for graduate
                employment.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the safest and most student-friendly cities in the USA",
                  "Global hub for biotech, pharma, AI, fintech and healthcare",
                  "World-class museums, sports teams and music venues",
                  "Large Indian community with temples, restaurants and grocery stores",
                  "Excellent public transport (MBTA subway, buses, commuter rail)",
                  "Direct flights from Delhi, Mumbai and Bengaluru to Boston Logan",
                  "Easy weekend getaways to New York, Washington DC and Vermont",
                  "Strong alumni network and recruiter presence from Fortune 500 companies",
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
              text="Advantages of Studying at Northeastern"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A Master's degree from Northeastern combines rigorous academics
              with paid industry experience — the strongest ROI for Indian
              students in the USA.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Paid Co-op Experience",
                desc: "Earn while you learn — 6–8 month paid co-op at top US companies",
              },
              {
                title: "STEM-OPT 3 Years",
                desc: "Up to 3 years of US work authorisation after graduation",
              },
              {
                title: "Top 50 US Ranking",
                desc: "Globally recognised degree with high employer preference",
              },
              {
                title: "Boston Network",
                desc: "Access to Boston's biotech, fintech and AI hiring ecosystem",
              },
              {
                title: "Merit Scholarships",
                desc: "Up to USD 15,000 per year for outstanding international applicants",
              },
              {
                title: "Diverse Community",
                desc: "Students from 140+ countries — strong Indian community on campus",
              },
              {
                title: "Career Services",
                desc: "Dedicated career coaching, resume reviews and on-campus recruiting",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end admission, I-20 and F-1 visa assistance",
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
            Fall 2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Masters Journey at Northeastern University, Boston
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join one of the top-50 US universities with the largest co-op
            program in the country. Our expert counsellors will guide you
            from program selection and SOPs to your F-1 visa and first day in
            Boston.
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
                Free Counselling Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ───────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/masters/usa", label: "Masters in USA" },
              { href: "/partner-universities", label: "Partner Universities" },
              { href: "/apply", label: "Apply Now" },
              { href: "/contact", label: "Contact Us" },
              { href: "/about", label: "About GVK EduTech" },
              { href: "/", label: "Homepage" },
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
