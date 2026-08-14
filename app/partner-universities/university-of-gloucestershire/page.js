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
  ChevronRight,
  Star,
  PoundSterling,
  Award,
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
  Plane,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of Gloucestershire recognised in India?",
    answer:
      "Yes. The University of Gloucestershire is a UK government-recognised, Ofsted-inspected public university. Its degrees are recognised by the Association of Indian Universities (AIU), Indian employers, and all major global accreditation bodies. A Gloucestershire degree is well accepted for further studies and employment in India and abroad.",
  },
  {
    question: "What is the duration of Master's programs at the University of Gloucestershire?",
    answer:
      "Most taught Master's (MSc / MA / MBA / MRes) programs at the University of Gloucestershire run for 1 year full-time (12 months). Some programs with a work placement or research thesis take 12–18 months. MPhil/PhD programs typically take 2–4 years of full-time study.",
  },
  {
    question: "Does the University of Gloucestershire require IELTS for Indian students?",
    answer:
      "Yes. Most postgraduate programs require an overall IELTS Academic score of 6.0 – 6.5 with no band below 5.5 (varies by program). Students from English-medium institutions may be eligible for a waiver. GVK EduTech will confirm program-specific requirements before you apply.",
  },
  {
    question: "What is the tuition fee for international (Indian) students at the University of Gloucestershire?",
    answer:
      "For the 2026 intake, indicative tuition fees for international students range from GBP 13,000 – 16,500 per year (approximately INR 14–18 lakh) depending on the program. MBA programs cost around GBP 15,000 – 18,000. The University of Gloucestershire also offers a range of merit-based and country-specific scholarships for Indian students.",
  },
  {
    question: "Can Indian students work part-time while studying at Gloucestershire?",
    answer:
      "Yes. On a UK Student Route visa, you can work up to 20 hours per week during term time and full-time during holidays. Cheltenham and Gloucester have excellent part-time job opportunities in retail, hospitality, hospitality, on-campus roles, and tutoring — both universities maintain active job boards for international students.",
  },
  {
    question: "Does the University of Gloucestershire offer scholarships for Indian students?",
    answer:
      "Yes. The University of Gloucestershire offers a number of scholarships including the International Scholarship, Postgraduate Academic Excellence Scholarship, and country-specific awards for Indian students. Most scholarships range from £1,500 – £5,000 in tuition fee waivers.",
  },
  {
    question: "How safe is Cheltenham and Gloucester for international students?",
    answer:
      "Cheltenham and Gloucester are consistently ranked among the safest student cities in the UK. Both campuses have 24/7 security, well-lit pathways, dedicated student support services, and a Students' Union that runs safety and wellbeing programmes. The local communities are welcoming with a large international student population.",
  },
  {
    question: "What is the Graduate Route Visa and how does it help Gloucestershire graduates?",
    answer:
      "The UK Graduate Route visa allows international graduates to stay and work in the UK for 2 years after completing a Master's degree. Gloucestershire graduates are highly sought after in business, IT, education, sport, healthcare, hospitality and creative industries — both in the UK and globally.",
  },
  {
    question: "Does GVK EduTech help with University of Gloucestershire admissions?",
    answer:
      "Yes. GVK EduTech is an authorised application partner for the University of Gloucestershire. We provide end-to-end support — from program selection, SOP/LOR guidance, application submission, CAS letter, visa filing, and pre-departure orientation for Indian students.",
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
    desc: "Shortlist the right MSc / MA / MBA at Gloucestershire based on goals and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Apply Online",
    desc: "Submit your application via the University of Gloucestershire portal with SOP & LORs",
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
    title: "Fly to the UK",
    desc: "Book flights — GVK EduTech provides pre-departure orientation",
    icon: Plane,
  },
];

const documents = [
  "Valid Passport (min. 6 months validity beyond course end date)",
  "Bachelor's Degree Certificate & Transcripts",
  "English Language Proficiency (IELTS / PTE / TOEFL)",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2 LORs)",
  "Passport Size Photos",
  "Updated CV / Resume",
  "Bank Statement & Financial Proof (for visa)",
  "Application Fee Receipt",
  "Offer Letter (University of Gloucestershire)",
];

const whyChoose = [
  {
    title: "TEF Silver Award",
    desc: "Awarded Silver in the UK Teaching Excellence Framework — high-quality teaching and student outcomes",
    icon: Trophy,
  },
  {
    title: "Affordable UK Fees",
    desc: "Tuition starting from £13,000/year — among the most affordable UK universities for Indian students",
    icon: PoundSterling,
  },
  {
    title: "Career-Focused Programs",
    desc: "Industry-designed curriculum with optional placement year — graduate job-ready in 12 months",
    icon: Briefcase,
  },
  {
    title: "Post-Study Work Visa",
    desc: "2-year Graduate Route visa to live and work in the UK after completing your Master's",
    icon: Globe,
  },
  {
    title: "Scholarships Available",
    desc: "Range of merit-based and country-specific scholarships for international students",
    icon: Award,
  },
  {
    title: "Two Beautiful Campuses",
    desc: "Modern campuses in Cheltenham and Gloucester — picture-perfect Cotswolds location",
    icon: Building2,
  },
  {
    title: "Strong Industry Links",
    desc: "Partnerships with leading UK employers — including BBC, NHS, IBM, and local tech firms",
    icon: TrendingUp,
  },
  {
    title: "Welcoming Community",
    desc: "Active international student society, Indian society, and 100+ clubs for a vibrant campus life",
    icon: Users,
  },
];

const popularPrograms = [
  { name: "MSc International Business Management", fees: "£14,500" },
  { name: "MSc Marketing", fees: "£14,500" },
  { name: "MSc Data Science & Analytics", fees: "£15,000" },
  { name: "MSc Cyber Security", fees: "£15,000" },
  { name: "MSc Computer Science", fees: "£14,500" },
  { name: "MA Education", fees: "£13,500" },
  { name: "MSc Sport & Exercise Science", fees: "£14,000" },
  { name: "MBA (Full-time)", fees: "£16,500" },
  { name: "MA Film & Television", fees: "£14,500" },
  { name: "MSc Psychology (Conversion)", fees: "£15,500" },
];

export default function UniversityOfGloucestershirePage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of Gloucestershire — Master's Programs 2026"
        subtitle="TEF Silver · Affordable UK Fees · Post-Study Work Visa · Career-Focused Programs"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Est. 1847 · Cheltenham & Gloucester, United Kingdom
              </p>
              <ColorfulHeading
                text="University of Gloucestershire"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                The <strong className="text-foreground">University of Gloucestershire</strong> is
                a leading UK public university spread across two picturesque campuses in
                Cheltenham and Gloucester — in the heart of the Cotswolds. With over 175 years of
                educational heritage, the university is renowned for its career-focused
                teaching, industry-led curriculum and one of the most affordable tuition fee
                structures among UK universities for international students.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Awarded <strong className="text-foreground">Silver in the UK Teaching Excellence
                Framework (TEF)</strong>, the University of Gloucestershire offers a wide range of
                postgraduate programs in business, computing, cyber security, marketing,
                education, sport, psychology, film and creative arts. As a graduate, you'll join
                a global network of <strong className="text-foreground">100,000+ alumni</strong>{" "}
                and benefit from strong industry links, optional placement years, and the{" "}
                <strong className="text-foreground">2-year UK Graduate Route visa</strong>.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["TEF Silver", "UK Public University", "Post-Study Visa", "Affordable Fees", "Placements Available"].map(
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
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&auto=format&fit=crop"
                  alt="University of Gloucestershire campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">175+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of educational heritage
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">100K+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Global Alumni Network
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
              { label: "TEF", sub: "Silver — Teaching Excellence" },
              { label: "Ofsted", sub: "Inspected & Approved" },
              { label: "UK", sub: "Recognised Degree (RQF Level 7)" },
              { label: "AIU", sub: "Association of Indian Universities" },
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
              text="Why Indian Students Choose University of Gloucestershire"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From affordable tuition to TEF Silver teaching and the 2-year UK Graduate Route
              visa, the University of Gloucestershire ticks every box for Indian students
              seeking a UK Master's degree in 2026.
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
              text="University of Gloucestershire — World & UK Ranking"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              The University of Gloucestershire is consistently ranked among the top modern UK
              universities, with strong scores in teaching quality, student satisfaction, and
              graduate employment.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { rank: "Top 100", source: "UK University Ranking (Guardian 2026)" },
              { rank: "TEF Silver", source: "Teaching Excellence Framework" },
              { rank: "Top 150", source: "Times & Sunday Times UK Ranking" },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl lg:text-4xl font-bold text-accent mb-2">{item.rank}</p>
                  <p className="text-muted-foreground text-sm">{item.source}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR PROGRAMS ────────────────────────────────── */}
      <section className="py-20 section-dark">
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
                      <span className="text-foreground font-medium text-sm">
                        {prog.name}
                      </span>
                      <span className="text-accent font-bold whitespace-nowrap ml-3">{prog.fees}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              * Fees are indicative for 2026 intake. Visit the University of Gloucestershire website for the latest information.
            </p>
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ──────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Eligibility Criteria for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear, straightforward requirements for Indian students applying to the
              University of Gloucestershire.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Background",
                desc: "Bachelor's degree with minimum 55–60% or equivalent (varies by program). Some programs accept a 3-year Indian bachelor's degree in a relevant field.",
              },
              {
                title: "English Language",
                desc: "IELTS 6.0 – 6.5 (no band below 5.5) or equivalent. Some programs may require a higher overall band.",
              },
              {
                title: "Work Experience",
                desc: "Required for MBA (typically 2–3 years of relevant professional experience). Not required for most MSc / MA programs.",
              },
              {
                title: "Documents",
                desc: "SOP, 2 LORs, CV / Resume, academic transcripts. Some programs may require a portfolio or interview.",
              },
              {
                title: "Valid Passport",
                desc: "Indian passport with minimum 6 months validity beyond the course end date at the time of CAS / visa application.",
              },
              {
                title: "Financial Proof",
                desc: "Bank statement showing funds for tuition + living costs (~£9,207 per year outside London) for the UK Student Route visa.",
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
              text="University of Gloucestershire Admission Process 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward seven-step journey from application to your first day at
              the University of Gloucestershire in the UK.
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for Master's Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these documents before applying — GVK EduTech will verify, attest and
              help you with the entire submission process for the University of Gloucestershire.
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

      {/* ── CAMPUS & HOSTEL ──────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Two Beautiful Campuses
              </p>
              <ColorfulHeading
                text="Campus & Accommodation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of Gloucestershire operates two campuses — the flagship{" "}
                <strong className="text-foreground">Park Campus in Cheltenham</strong> and the
                modern <strong className="text-foreground">Francis Close Hall Campus in
                Gloucester</strong>. Both offer state-of-the-art teaching spaces, libraries,
                simulation labs, sports facilities and purpose-built student accommodation
                within easy walking distance of lectures and the city centre.
              </p>
              <ul className="space-y-3">
                {[
                  "Park Campus (Cheltenham) — main campus with library, IT suites and business school",
                  "Francis Close Hall (Gloucester) — modern campus for education, health and creative arts",
                  "Purpose-built student villages — en-suite rooms, shared kitchens, common rooms",
                  "Free university WiFi across all campuses and halls of residence",
                  "On-campus gym, sports hall, café, student union and chaplaincy",
                  "24/7 campus security, CCTV, secure entry and student support services",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&auto=format&fit=crop"
                  alt="Gloucestershire student accommodation"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Gloucestershire campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN THE UK ────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop"
                  alt="Cheltenham town"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=400&auto=format&fit=crop"
                  alt="Cotswolds countryside"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Cheltenham & Gloucester
              </p>
              <ColorfulHeading
                text="Student Life in the UK"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Cheltenham and Gloucester are two of the most beautiful, safest and
                student-friendly towns in the Cotswolds. With Regency architecture, vibrant
                festivals, charming cafés, parks and a thriving arts scene, students at the
                University of Gloucestershire enjoy a perfect blend of academic excellence
                and a quintessentially English lifestyle — with London just two hours away
                by direct train.
              </p>
              <ul className="space-y-3">
                {[
                  "Two of the UK's safest, most picturesque student towns in the Cotswolds",
                  "Cheltenham — famous for its Regency architecture, festivals and horse racing",
                  "Gloucester — historic cathedral city on the River Severn",
                  "Direct trains to London in 2 hours, Birmingham in 40 minutes, Bristol in 1 hour",
                  "Indian restaurants, grocery stores, temples and a growing Indian community",
                  "100+ student clubs and societies including the Indian Society and Sports clubs",
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
              text="Advantages of Studying at University of Gloucestershire"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              TEF Silver teaching, affordable UK tuition, optional placement year, and the
              2-year Graduate Route visa make Gloucestershire a smart choice for Indian
              students in 2026.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "TEF Silver Award",
                desc: "Recognised for high-quality teaching, learning and graduate outcomes",
                icon: Trophy,
              },
              {
                title: "Post-Study Work Visa",
                desc: "2 years to live and work in the UK after your Master's",
                icon: Globe,
              },
              {
                title: "Optional Placement Year",
                desc: "Many programs include a paid industry placement to gain UK work experience",
                icon: Briefcase,
              },
              {
                title: "Affordable UK Fees",
                desc: "Tuition starting from £13,000/year — among the most affordable in the UK",
                icon: PoundSterling,
              },
              {
                title: "Scholarships",
                desc: "Range of merit-based and country-specific scholarships for international students",
                icon: Award,
              },
              {
                title: "Career Services",
                desc: "Dedicated careers team, on-campus job fairs and 1:1 CV / interview coaching",
                icon: Star,
              },
              {
                title: "Modern Facilities",
                desc: "State-of-the-art libraries, IT suites, simulation labs and sports facilities",
                icon: Building2,
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end application, CAS, visa & pre-departure assistance from Hyderabad",
                icon: ShieldCheck,
              },
            ].map((adv, i) => {
              const Icon = adv.icon;
              return (
                <Card
                  key={i}
                  className="border border-border/60 hover:border-accent/40 transition-colors duration-200"
                >
                  <CardContent className="p-5">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1.5">
                      {adv.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {adv.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
            <p className="text-muted-foreground text-lg">
              Answers to the most common questions Indian students ask about the University
              of Gloucestershire and Master's programs in the UK.
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

      {/* ── APPLY NOW CTA ─────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/70 text-sm font-semibold tracking-widest uppercase mb-4">
            2026 Admissions Open · Limited Seats
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
            Begin Your UK Master's Journey at the University of Gloucestershire
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Secure your seat at one of the UK's most affordable and career-focused
            universities. Our expert Hyderabad-based counsellors will guide you through
            the entire process — from program selection to your first day on campus in
            Cheltenham or Gloucester.
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
            <Button
              asChild
              size="xl"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C%20I%20want%20to%20know%20more%20about%20Master%27s%20programs%20at%20the%20University%20of%20Gloucestershire%2C%20UK.">
                WhatsApp Counselor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ────────────────────────────────────── */}
      <section className="py-10 section-light border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-5">
            Explore More
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/", label: "Homepage" },
              { href: "/masters/uk", label: "Master's in the UK" },
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
