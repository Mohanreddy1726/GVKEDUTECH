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
    question: "Is the University of Leeds recognised in India?",
    answer:
      "Yes. The University of Leeds is a globally prestigious Russell Group university. Its degrees are recognized by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies. A Leeds degree carries significant weight in the Indian job market.",
  },
  {
    question: "What is the duration of Master's programs at the University of Leeds?",
    answer:
      "Most taught Master's (MSc / MA / MBA) programs at Leeds run for 1 year full-time (12 months). Some programs with placement or research pathways take 12–18 months. MPhil/PhD programs typically take 3–4 years.",
  },
  {
    question: "Does the University of Leeds require IELTS?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no band below 6.0 (varies by program). Students from English-medium institutions may be eligible for a waiver. Check with GVK EduTech for program-specific requirements.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Leeds?",
    answer:
      "For the 2026 intake, indicative tuition fees range from GBP 18,000 – 28,000 per year (approximately INR 19–30 lakh) depending on the program. MBA programs cost around GBP 30,000–35,000. Scholarships are available for outstanding international students.",
  },
  {
    question: "Can Indian students work part-time while studying at Leeds?",
    answer:
      "Yes. On a UK Student Route visa, you can work up to 20 hours per week during term time and full-time during holidays. Leeds is a major city with excellent part-time job opportunities in retail, hospitality, tutoring, and on-campus positions.",
  },
  {
    question: "Does Leeds offer scholarships for Indian students?",
    answer:
      "Yes. The University of Leeds offers numerous scholarships including the Leeds Masters Scholarship, Vice-Chancellor's Scholarship, and country-specific awards for Indian students. Most scholarships range from £2,000 – £10,000.",
  },
  {
    question: "How safe is Leeds for international students?",
    answer:
      "Leeds is one of the UK's safest major cities for students. The university has dedicated on-campus security, well-lit pathways, and support services. The Students' Union also provides safety resources. The city has a large international community making it very welcoming.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Leeds graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a Master's degree. Leeds graduates are highly sought after in finance, tech, engineering, and healthcare sectors globally.",
  },
  {
    question: "Does GVK EduTech help with University of Leeds admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including Leeds. We provide end-to-end support — from program selection, SOP/LOR guidance, application submission, CAS, visa filing to pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Leeds based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Leeds portal with SOP & LORs",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Offer",
    desc: "Get your offer letter within 2–4 weeks (conditional or unconditional)",
    icon: Award,
  },
  {
    step: 5,
    title: "Accept Offer & Pay Deposit",
    desc: "Confirm your seat by paying the tuition deposit",
    icon: PoundSterling,
  },
  {
    step: 6,
    title: "CAS & Visa",
    desc: "Receive CAS letter and apply for UK Student Route visa",
    icon: Globe,
  },
  {
    step: 7,
    title: "Fly to Leeds",
    desc: "Book flights — GVK EduTech provides pre-departure orientation",
    icon: Plane,
  },
];

const documents = [
  "Valid Passport (min. 6 months validity)",
  "Bachelor's Degree Certificate & Transcripts",
  "English Language Proficiency (IELTS/PTE/TOEFL)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2 LORs)",
  "Passport Size Photos",
  "Updated CV/Resume",
  "Bank Statement (for visa)",
  "Application Fee Receipt",
  "Offer Letter (Leeds)",
];

const whyChoose = [
  {
    title: "Russell Group University",
    desc: "Part of the prestigious Russell Group — 24 leading UK research universities",
    icon: Landmark,
  },
  {
    title: "Top 100 Global",
    desc: "Ranked in the top 100 universities worldwide (QS World Rankings)",
    icon: TrendingUp,
  },
  {
    title: "Affordable Tuition",
    desc: "Competitive fees starting from GBP 18,000/year — excellent value for a Russell Group degree",
    icon: PoundSterling,
  },
  {
    title: "Industry Links",
    desc: "Strong connections with top UK employers — graduates land jobs at leading companies",
    icon: Briefcase,
  },
  {
    title: "Scholarships Available",
    desc: "Range of scholarships for international students worth £2,000–£10,000",
    icon: Award,
  },
  {
    title: "Vibrant Student Life",
    desc: "200+ student societies, excellent sports facilities, and exciting city life",
    icon: Users,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa allows you to work in the UK after graduation",
    icon: Globe,
  },
  {
    title: "Career Support",
    desc: "Dedicated careers service helping students secure placements and jobs",
    icon: Briefcase,
  },
];

const popularPrograms = [
  { name: "MSc International Business", fees: "£22,000" },
  { name: "MSc Data Science", fees: "£24,000" },
  { name: "MSc Engineering Management", fees: "£22,500" },
  { name: "MBA (Full-time)", fees: "£32,000" },
  { name: "LLM International Law", fees: "£19,500" },
  { name: "MA Global Fashion Management", fees: "£23,000" },
  { name: "MSc Public Health", fees: "£21,000" },
  { name: "MSc Computer Science", fees: "£24,500" },
];

function Plane({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

export default function UniversityOfLeedsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Leeds — Master's Programs 2026"
        subtitle="Russell Group University · Top 100 World Ranking · Post-Study Work Visa"
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
                Est. 1904 · Leeds, United Kingdom
              </p>
              <ColorfulHeading
                text="University of Leeds"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Leeds is a world-renowned Russell Group university
                located in the heart of Leeds — one of the UK's most vibrant student
                cities. With over 120 years of academic excellence, Leeds offers
                postgraduate programs that prepare you for global career success.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                As a graduate of Leeds, you'll join a network of over 300,000 alumni
                worldwide, including leaders in business, politics, science, and the
                arts. The university's strong industry links ensure excellent career
                prospects.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Russell Group", "Top 100 World", "Post-Study Visa", "Scholarships Available"].map(
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
                  alt="University of Leeds campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">#82</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    QS World University Ranking
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">300K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Global Alumni
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
              { label: "#82", sub: "QS World Ranking 2026" },
              { label: "Russell", sub: "Group University" },
              { label: "#23", sub: "UK University Ranking" },
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
              text="Why Indian Students Choose University of Leeds"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From Russell Group prestige to post-study work opportunities, Leeds
              checks every box for Indian students seeking a UK Master's degree.
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

      {/* ── POPULAR PROGRAMS ────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Master's Programs 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Indicative tuition fees for international students. Fees vary by program.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20 overflow-hidden">
              <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                <CardTitle className="text-base font-semibold text-foreground">
                  MSc / MA / MBA Programs & Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid sm:grid-cols-2 gap-px bg-border">
                  {popularPrograms.map((prog, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-background hover:bg-muted/30 transition-colors"
                    >
                      <span className="text-foreground font-medium">
                        {prog.name}
                      </span>
                      <span className="text-accent font-bold">{prog.fees}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              * Fees are indicative for 2026 intake. Visit university website for latest information.
            </p>
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
              Clear, straightforward requirements for Indian students.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Background",
                desc: "Bachelor's degree with minimum 60% or equivalent (varies by program)",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (no band below 6.0) or equivalent. Some programs require higher.",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA (typically 2–3 years). Not required for most MSc/MA programs.",
              },
              {
                title: "Documents",
                desc: "SOP, 2 LORs, CV, transcripts. Some programs may require GMAT.",
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
              day at Leeds.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-7 gap-4">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    {/* Number circle */}
                    <div className="w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center mb-3 flex-shrink-0">
                      <span className="text-accent font-bold text-sm">{item.step}</span>
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Leeds city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Leeds campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Leeds
              </p>
              <ColorfulHeading
                text="A City Built for Students"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Leeds is consistently voted one of the best student cities in the UK.
                With over 200,000 students, the city offers a perfect blend of
                academic excellence and vibrant social life.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the UK's most affordable major cities for students",
                  "Excellent public transport — everything within walking distance",
                  "Vibrant nightlife, restaurants, and cultural attractions",
                  "Strong Indian community with temples, restaurants, and shops",
                  "Close to London (2 hours by train) and Edinburgh (4 hours)",
                  "Regular flights to India from Leeds Bradford Airport",
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
              text="Advantages of Studying at University of Leeds"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Russell Group Status",
                desc: "Access to research-led teaching and extensive resources",
              },
              {
                title: "Post-Study Work Visa",
                desc: "2 years to work in the UK after your Master's",
              },
              {
                title: "Industry Placements",
                desc: "Many programs include optional placement year",
              },
              {
                title: "Scholarships",
                desc: "Range of scholarships for international students",
              },
              {
                title: "Career Services",
                desc: "Dedicated support for internships and graduate jobs",
              },
              {
                title: "Alumni Network",
                desc: "Connect with 300,000+ Leeds graduates worldwide",
              },
              {
                title: "Modern Campus",
                desc: "State-of-the-art facilities in a beautiful setting",
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
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Master's Journey at University of Leeds
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
              { href: "/partner-universities/uk", label: "Study in UK" },
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