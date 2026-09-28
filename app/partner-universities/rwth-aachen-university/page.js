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
  Euro,
  Search,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is RWTH Aachen University recognized globally?",
    answer:
      "Yes, RWTH Aachen University is one of the most prestigious technical universities in Europe and is globally recognized for its excellence in engineering and technology.",
  },
  {
    question: "What is the duration of Masters programs at RWTH Aachen?",
    answer:
      "Most Master's programs at RWTH Aachen typically last 4 semesters (2 years), combining advanced theoretical coursework with practical research or industry projects.",
  },
  {
    question: "What are the admission requirements for international students?",
    answer:
      "Admission generally requires a relevant Bachelor's degree with a strong academic record. Specific requirements vary by program, often including a GRE score or specific ECTS credits in core subjects.",
  },
  {
    question: "Is English proficiency required?",
    answer:
      "For English-taught programs, proof of English proficiency (TOEFL or IELTS) is mandatory. For German-taught programs, a high level of German proficiency (TestDaF or DSH) is required.",
  },
  {
    question: "Are there tuition fees for international students at RWTH Aachen?",
    answer:
      "Public universities in Germany, including RWTH Aachen, generally do not charge tuition fees for most programs. However, students must pay a semester contribution which covers administration and public transport.",
  },
  {
    question: "How is the student life in Aachen?",
    answer:
      "Aachen is a quintessential student city. With a huge percentage of its population being students, the city offers a vibrant atmosphere, affordable living, and a strong focus on innovation and technology.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Program Selection",
    desc: "Identify the Masters program that aligns with your academic background and career goals",
    icon: Search,
  },
  {
    step: 2,
    title: "Eligibility Check",
    desc: "Verify your degree compatibility and check specific ECTS requirements for the course",
    icon: ShieldCheck,
  },
  {
    step: 3,
    title: "Application Submission",
    desc: "Submit your application via the university portal with all required academic transcripts",
    icon: FileText,
  },
  {
    step: 4,
    title: "Academic Review",
    desc: "Wait for the admission committee to evaluate your credentials and research potential",
    icon: BookOpen,
  },
  {
    step: 5,
    title: "Receive Admission",
    desc: "Get your official offer letter and complete the enrollment process",
    icon: GraduationCap,
  },
  {
    step: 6,
    title: "Visa & Travel",
    desc: "Apply for the German student visa and arrange your move to Aachen",
    icon: Globe,
  },
];

const documents = [
  "Valid Passport",
  "Bachelor's Degree Certificate & Transcripts",
  "Proof of English/German Proficiency (IELTS/TOEFL/TestDaF)",
  "Curriculum Vitae (CV)",
  "Letter of Motivation",
  "Letters of Recommendation",
  "GRE Score (if required by program)",
  "Proof of Financial Means (Blocked Account)",
  "Passport Size Photographs",
];

const hostelFeatures = [
  { icon: Home, label: "Diverse housing options (Studentenwerk/Private)" },
  { icon: Users, label: "International student dormitories" },
  { icon: Utensils, label: "University canteens (Mensa) with affordable meals" },
  { icon: Wifi, label: "High-speed campus-wide WiFi" },
  { icon: ShieldCheck, label: "Safe and student-friendly urban environment" },
  { icon: Clock, label: "Easy access to campus via public transport" },
];

const whyChoose = [
  {
    title: "World-Class Engineering",
    desc: "A global leader in mechanical, electrical, and automotive engineering",
    icon: Star,
  },
  {
    title: "Strong Industry Ties",
    desc: "Direct partnerships with global giants like Siemens, BMW, and Bosch",
    icon: Globe,
  },
  {
    title: "Research Excellence",
    desc: "Cutting-edge research facilities and innovation hubs",
    icon: GraduationCap,
  },
  {
    title: "Low Cost of Education",
    desc: "Minimal semester fees compared to other global destinations",
    icon: Euro,
  },
  {
    title: "Strategic Location",
    desc: "Located at the border of Belgium and Netherlands for European exposure",
    icon: Users,
  },
  {
    title: "Highly Employable",
    desc: "Graduates are among the most sought-after professionals in the EU",
    icon: ShieldCheck,
  },
  {
    title: "Expert GVK Support",
    desc: "Guidance on university selection and German visa processing",
    icon: CheckCircle,
  },
  {
    title: "Academic Rigor",
    desc: "A degree that commands respect worldwide in technical fields",
    icon: BookOpen,
  },
];

// Helper for Search icon as it wasn't in the initial imports
const SearchIcon = Search;

export default function RWTHPage() {
  return (
    <PageLayout>
      <PageHeader
        title="RWTH Aachen University, Masters Eligibility & Admission Process 2026"
        subtitle="Technical Excellence · German Engineering · Globally Ranked · Research Driven"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939a7417e?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Aachen, Germany
              </p>
              <ColorfulHeading
                text="RWTH Aachen University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                RWTH Aachen University is one of the leading technical universities in
                Europe. Renowned for its excellence in engineering and technology,
                it provides an unparalleled environment for Master's students to
                specialize in cutting-edge technical domains.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With its strong emphasis on{" "}
                <strong className="text-foreground">industry-academia collaboration</strong> and{" "}
                <strong className="text-foreground">rigorous research</strong>,
                RWTH Aachen prepares its students to lead the next wave of
                technological innovation.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["TU9 Member", "Global Top 100", "Industry Leader", "Research Intensive"].map(
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
                  src="https://images.unsplash.com/photo-1562774053-701939a7417e?w=600&auto=format&fit=crop"
                  alt="RWTH Aachen Campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">TU9</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Elite Technical Uni
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Top</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Engineering Globally
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── RECOGNITION & RANKING ─────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "TU9", sub: "Alliance of Leading Technical Unis" },
              { label: "World", sub: "Top Ranked for Engineering" },
              { label: "EU", sub: "Premier Destination for Masters" },
              { label: "Industry", sub: "Direct Ties to Fortune 500s" },
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
              text="Why Pursue a Masters at RWTH Aachen?"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Combining academic rigor with industrial application, RWTH Aachen
              is the ideal launchpad for a global career in technology.
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
              text="Masters Cost Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Education in Germany is highly subsidized, ensuring that quality
              is not limited by high tuition fees.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Semester Contribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead className="border-b border-border bg-muted/30">
                      <tr>
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Component
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          Amount (EUR)
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          Amount (INR*)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Semester Contribution
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          €300 - €400
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹27k - ₹36k
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Student Services Fee
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          Included
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          -
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Annual Total (2 Semesters)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          €600 - €800
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹54k - ₹72k
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rates are indicative. Tuition is generally free for EU and most non-EU students in North Rhine-Westphalia.
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
                  label: "Blocked Account",
                  sub: "Mandatory visa requirement",
                  usd: "€11,208/yr",
                },
                {
                  label: "Student Housing",
                  sub: "Dormitories / Private rooms",
                  usd: "€300 - €600/mo",
                },
                {
                  label: "Health Insurance",
                  sub: "Statutory health insurance",
                  usd: "€120/mo",
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
              RWTH Aachen maintains high academic standards to ensure the quality of its graduates.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Background",
                desc: "Relevant Bachelor's degree in Engineering or Science with strong GPA",
              },
              {
                title: "Credit Requirements",
                desc: "Minimum ECTS credits in specific core subjects as defined by the program",
              },
              {
                title: "Language Proficiency",
                desc: "Proof of English (IELTS/TOEFL) or German (TestDaF/DSH) as per course",
              },
              {
                title: " standardized Tests",
                desc: "GRE or GMAT may be required for specific international applicants",
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
              A structured pathway to one of the world's most prestigious technical universities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-9 left-[calc(1/12*100%+1.25rem)] right-[calc(1/12*100%+1.25rem)] h-px bg-border" />
            <div className="grid md:grid-cols-6 gap-6">
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
              Precision and completeness are key to a successful application at RWTH Aachen.
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

      {/* ── HOSTEL ───────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Living
              </p>
              <ColorfulHeading
                text="Accommodation in Aachen"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Aachen offers various housing options for international students,
                from subsidized student dormitories to private apartments, ensuring
                a comfortable and collaborative living experience.
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
                  alt="Student Dorm"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Aachen City"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
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
                  src="https://images.unsplash.com/photo-1562774053-701939a7417e?w=400&auto=format&fit=crop"
                  alt="RWTH Campus"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Aachen Architecture"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in Aachen
              </p>
              <ColorfulHeading
                text="A Hub of Innovation"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Aachen is more than just a city; it is a living laboratory.
                Located at the crossroads of Germany, Belgium, and the Netherlands,
                it offers a unique multicultural environment for technical minds.
              </p>
              <ul className="space-y-3">
                {[
                  "High concentration of students and researchers",
                  "Affordable urban living and student-centric services",
                  "Exceptional public transportation connectivity",
                  "Rich historical heritage and a modern academic vibe",
                  "Direct access to leading European tech companies",
                  "Safe, welcoming environment for international scholars",
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
              text="Advantages of Studying at RWTH Aachen"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Global Brand",
                desc: "An RWTH degree is a gold standard in engineering worldwide",
              },
              {
                title: "Low Tuition",
                desc: "Access world-class education with minimal financial burden",
              },
              {
                title: "Industry Networking",
                desc: "Internship and project opportunities with top EU firms",
              },
              {
                title: "Research Focus",
                desc: "Cutting-edge labs and publications in top journals",
              },
              {
                title: "European Exposure",
                desc: "Study in the heart of Europe's industrial powerhouse",
              },
              {
                title: "Technical Rigor",
                desc: "Comprehensive and challenging curriculum for true experts",
              },
              {
                title: "High ROI",
                desc: "Excellent salary prospects and career growth in Germany",
              },
              {
                title: "GVK Guidance",
                desc: "Specialized support for German admission and visas",
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
            Master the Future of Technology at RWTH Aachen
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Join the elite circle of engineers and scientists. Our expert
            counselors will guide you through the German admission process.
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
              { href: "/partner-universities", label: "Partner Universities" },
              { href: "/apply", label: "Apply Now" },
              { href: "/contact", label: "Contact Us" },
              { href: "/about", label: "About GVK EduTech" },
              { href: "/", label: "Home" },
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
