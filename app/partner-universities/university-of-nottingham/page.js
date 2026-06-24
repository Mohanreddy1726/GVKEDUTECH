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
  Plane,
  Wifi,
  ChevronRight,
  PoundSterling,
  Award,
  Briefcase,
  Landmark,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Nottingham recognised in India?",
    answer:
      "Yes. The University of Nottingham is a Russell Group university, and its degrees are recognised by the Association of Indian Universities (AIU). A Nottingham degree is highly regarded by Indian employers and global accreditation bodies across all major industries.",
  },
  {
    question: "What is the duration of Master's programs at the University of Nottingham?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at Nottingham are 1 year full-time (12 months). Some programs with a placement year take 18–24 months, while MPhil / PhD research degrees typically take 3–4 years.",
  },
  {
    question: "Does the University of Nottingham require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.5 with no individual band below 6.0 (some programs require 7.0). Students from English-medium institutions may be eligible for a waiver — check with GVK EduTech for program-specific requirements.",
  },
  {
    question: "What is the tuition fee for Indian students at the University of Nottingham?",
    answer:
      "For the 2026 intake, indicative tuition fees for international students range from GBP 18,000 – 28,000 per year (approximately INR 19–30 lakh), depending on the program. MBA programs cost around GBP 30,000 – 35,000. Scholarships of £2,000 – £10,000 are available.",
  },
  {
    question: "Can Indian students work part-time while studying at Nottingham?",
    answer:
      "Yes. On a UK Student Route visa, you can work up to 20 hours per week during term time and full-time during holidays. Nottingham has a strong student job market across retail, hospitality, tutoring, research assistance, and on-campus roles.",
  },
  {
    question: "Does the University of Nottingham offer scholarships for Indian students?",
    answer:
      "Yes. Nottingham offers a range of scholarships for international students including the Vice-Chancellor's Scholarship, country-specific awards for Indian students, and faculty-specific scholarships. Awards typically range from £2,000 – £10,000.",
  },
  {
    question: "How safe is Nottingham for Indian students?",
    answer:
      "Nottingham is consistently ranked among the safest student cities in the UK. The university has 24/7 on-campus security, a dedicated Students' Union welfare team, well-lit walking routes, and a large Indian community that makes newcomers feel at home.",
  },
  {
    question: "What is the Graduate Route Visa and how does it benefit Nottingham graduates?",
    answer:
      "The UK Graduate Route visa lets international graduates stay and work in the UK for 2 years after completing a Master's degree. Nottingham graduates are highly sought after in finance, technology, pharmaceuticals, engineering, and consulting sectors.",
  },
  {
    question: "Does GVK EduTech help with University of Nottingham admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for UK universities including the University of Nottingham. We provide end-to-end support — from program selection, SOP / LOR guidance, application submission, CAS, visa filing to pre-departure orientation.",
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
    desc: "Shortlist the right MSc / MA / MBA at Nottingham based on goals and budget",
    icon: GraduationCap,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application through the University of Nottingham portal with SOP & LORs",
    icon: Globe,
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
    icon: CheckCircle,
  },
  {
    step: 7,
    title: "Fly to Nottingham",
    desc: "Book flights — GVK EduTech provides pre-departure orientation",
    icon: Plane,
  },
];

const documents = [
  "Valid Passport (min. 6 months validity)",
  "Bachelor's Degree Certificate & Transcripts",
  "English Language Proficiency (IELTS / PTE / TOEFL)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2 LORs)",
  "Passport Size Photos",
  "Updated CV / Resume",
  "Bank Statement (for visa)",
  "Application Fee Receipt",
  "Offer Letter (University of Nottingham)",
];

const whyChoose = [
  {
    title: "Russell Group University",
    desc: "Founding member of the prestigious Russell Group — 24 leading UK research universities",
    icon: Landmark,
  },
  {
    title: "Top 100 Global",
    desc: "Ranked in the top 100 universities worldwide (QS World University Rankings)",
    icon: TrendingUp,
  },
  {
    title: "Competitive Tuition",
    desc: "Indicative fees from GBP 18,000/year — excellent value for a Russell Group degree",
    icon: PoundSterling,
  },
  {
    title: "Industry Placements",
    desc: "Many Master's programs offer optional placement years with leading UK employers",
    icon: Briefcase,
  },
  {
    title: "Scholarships Available",
    desc: "Vice-Chancellor's, country-specific and faculty awards from £2,000 – £10,000",
    icon: Award,
  },
  {
    title: "Award-Winning Campus",
    desc: "Voted UK's University of the Year multiple times — green campus with world-class facilities",
    icon: GraduationCap,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa allows you to work in the UK after graduation",
    icon: Globe,
  },
  {
    title: "Career Support",
    desc: "Dedicated careers service and 300+ student societies for holistic development",
    icon: Users,
  },
];

const popularPrograms = [
  { name: "MSc Business Analytics", fees: "£25,000" },
  { name: "MSc Data Science", fees: "£25,500" },
  { name: "MSc Management", fees: "£22,000" },
  { name: "MBA (Full-time)", fees: "£32,000" },
  { name: "MSc Engineering Management", fees: "£22,500" },
  { name: "MA International Relations", fees: "£19,500" },
  { name: "MSc Computer Science", fees: "£24,500" },
  { name: "LLM International Law", fees: "£20,000" },
];

export default function UniversityOfNottinghamPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Nottingham — Master's Programs 2026"
        subtitle="Russell Group University · Top 100 World Ranking · Post-Study Work Visa"
        breadcrumb="Partner Universities"
        backgroundImage="data:image/jpeg;base64,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"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1881 · Nottingham, United Kingdom
              </p>
              <ColorfulHeading
                text="University of Nottingham"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The University of Nottingham is a world-leading Russell Group
                university with campuses in the UK, China, and Malaysia. With
                over 140 years of academic heritage, Nottingham is a top choice
                for Indian students seeking a globally recognised UK Master's
                degree.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A degree from Nottingham opens doors worldwide — join a network
                of over 300,000 alumni including Nobel laureates, industry
                leaders, and policymakers. The university's strong industry
                links, research excellence, and award-winning campus make it one
                of the most sought-after UK study destinations.
              </p>

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
              <div className="relative">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="University of Nottingham campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">#100</p>
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

      {/* ── RECOGNITION & WORLD RANKING BAND ─────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "#100", sub: "QS World Ranking 2026" },
              { label: "Russell", sub: "Group University" },
              { label: "#27", sub: "UK University Ranking" },
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
              text="Why Indian Students Choose University of Nottingham"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From Russell Group prestige to post-study work opportunities and a
              thriving Indian community, Nottingham ticks every box for Indian
              students aiming for a UK Master's.
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

      {/* ── POPULAR PROGRAMS & FEES ───────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Popular Master's Programs 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Indicative tuition fees for international students. Fees vary by
              program and may change year to year.
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
              * Fees are indicative for 2026 intake. Visit the university website for latest information.
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
              Clear, straightforward requirements for Indian students applying
              to Master's programs.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Background",
                desc: "Bachelor's degree with minimum 60% or equivalent from a recognised Indian university",
              },
              {
                title: "English Language",
                desc: "IELTS 6.5 (no band below 6.0) or equivalent. Some programs require IELTS 7.0",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA (typically 2–3 years). Most MSc / MA programs do not require it",
              },
              {
                title: "Documents",
                desc: "SOP, 2 LORs, CV, transcripts. GMAT required for select programs only",
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
              A clear seven-step journey from counselling to your first day at
              University of Nottingham.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-7 gap-4">
              {admissionSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-accent bg-background flex items-center justify-center mb-3 flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
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
              every document.
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
                  src="data:image/jpeg;base64,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"
                  alt="Nottingham city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Nottingham campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Nottingham
              </p>
              <ColorfulHeading
                text="A City Built for Students"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nottingham is one of England's most vibrant and affordable
                student cities — a thriving cultural hub with a large Indian
                community, lively nightlife, and beautiful green campuses that
                have won multiple UK awards.
              </p>
              <ul className="space-y-3">
                {[
                  "One of the UK's most affordable major cities for students",
                  "Award-winning University Park campus — frequently voted the best in the UK",
                  "Strong Indian community with temples, restaurants, grocery stores, and cultural events",
                  "Excellent transport links to London (1.5 hrs), Manchester, and Birmingham",
                  "Direct flights to India from East Midlands Airport",
                  "Rich cultural scene — theatre, music, sport, and historic landmarks",
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
              text="Advantages of Studying at University of Nottingham"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Russell Group Status",
                desc: "Access to research-led teaching and world-class facilities",
              },
              {
                title: "Post-Study Work Visa",
                desc: "2 years to work in the UK after completing your Master's",
              },
              {
                title: "Industry Placements",
                desc: "Optional placement year with leading UK and global employers",
              },
              {
                title: "Generous Scholarships",
                desc: "Vice-Chancellor's and country-specific awards for Indian students",
              },
              {
                title: "Career Services",
                desc: "Dedicated support for internships and graduate jobs",
              },
              {
                title: "Alumni Network",
                desc: "Connect with 300,000+ Nottingham graduates worldwide",
              },
              {
                title: "Award-Winning Campus",
                desc: "Multiple UK University of the Year awards and green spaces",
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end application, CAS, and visa assistance",
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

      {/* ── APPLY NOW CTA ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your Master's Journey at the University of Nottingham
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert UK admissions counselors will guide you through the entire
            process — from program selection and application to your first day
            on campus in Nottingham.
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

      {/* ── INTERNAL LINKING ─────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/", label: "Home" },
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