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
  DollarSign,
  Trophy,
  Building2,
  Plane,
  Microscope,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is the University of California accredited for international students?",
    answer:
      "Yes. The University of California system is accredited by the WASC Senior College and University Commission (WSCUC), one of the six regional accrediting bodies recognised by the U.S. Department of Education and the Council for Higher Education Accreditation (CHEA). UC degrees are recognised worldwide and accepted by employers, graduate schools and professional licensing boards globally.",
  },
  {
    question: "Which UC campus is the best for Indian students?",
    answer:
      "UC Berkeley, UCLA, UC San Diego and UC Davis are the most popular UC campuses among Indian students, offering strong STEM, business and engineering programmes. GVK EduTech's counsellors help you shortlist the UC campus that best matches your academic profile, test scores and career goals for studying in the USA.",
  },
  {
    question: "What is the tuition fee for international students at the University of California?",
    answer:
      "International undergraduate tuition at the University of California ranges from approximately USD 42,000–48,000 per year (about ₹35–40 lakh). Postgraduate programmes range from USD 28,000–55,000 per year depending on the campus and programme. Scholarships, on-campus jobs and assistantships can significantly reduce the total cost for Indian students.",
  },
  {
    question: "What are the English language requirements for the University of California?",
    answer:
      "Indian applicants to the University of California must submit TOEFL iBT (minimum 80–100), IELTS Academic (minimum 6.5–7.0), or Duolingo English Test scores. Strong academic performance in English-medium schooling at the 12th-standard level may waive this requirement for some applicants.",
  },
  {
    question: "Does the University of California offer scholarships for Indian students?",
    answer:
      "Yes. The University of California offers merit-based scholarships, need-based aid, and country-specific awards for Indian students, including the UC International Scholarships, Regents Scholarships and various departmental fellowships at the postgraduate level. GVK EduTech helps you prepare a strong scholarship application.",
  },
  {
    question: "Can I work while studying at the University of California?",
    answer:
      "Yes. International students on an F-1 visa can work up to 20 hours per week on campus during the academic year and full-time during breaks. After graduation, students can apply for Optional Practical Training (OPT) for 12 months, with STEM graduates eligible for an additional 24-month extension — a major advantage for Indian students in the USA.",
  },
  {
    question: "What is the duration of undergraduate and postgraduate programmes at UC?",
    answer:
      "Undergraduate (Bachelor's) programmes at the University of California are typically 4 years. Postgraduate Master's programmes are 1–2 years, while doctoral (PhD) programmes take 4–6 years depending on the field of study. Professional programmes such as MBA, MS in Computer Science and Engineering take 1.5–2 years.",
  },
  {
    question: "Is California safe for Indian students?",
    answer:
      "California is one of the safest states in the USA for international students. UC campuses have their own police departments, 24/7 campus security, emergency alert systems and dedicated international student offices. The large Indian student community, Indian grocery stores and temples across California make it a comfortable home away from home for Indian students.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Profile Evaluation",
    desc: "Share your 12th-standard / bachelor's marks, test scores and extracurriculars with GVK EduTech for a free profile evaluation",
    icon: FileText,
  },
  {
    step: 2,
    title: "Shortlist UC Campuses",
    desc: "Pick 2–4 UC campuses (Berkeley, LA, Davis, San Diego, Irvine) that match your profile and budget",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Submit UC Application",
    desc: "Apply via the UC Application portal — submit essays, recommendation letters and transcripts by the November deadline",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Receive Admission",
    desc: "Receive your UC admission decision by March — apply for scholarships and financial aid along with your offer letter",
    icon: Trophy,
  },
  {
    step: 5,
    title: "Apply for F-1 Visa",
    desc: "Submit your F-1 student visa application with the I-20 form issued by your UC campus — GVK assists end-to-end",
    icon: Plane,
  },
  {
    step: 6,
    title: "Fly to California",
    desc: "Book flights to San Francisco or Los Angeles — GVK EduTech provides travel, forex & pre-departure support",
    icon: Globe,
  },
];

const documents = [
  "10th & 12th Standard Mark Sheets (officially translated if required)",
  "Bachelor's Degree Certificate & Transcripts (for postgraduate applicants)",
  "Standardised Test Scores — SAT / ACT (UG) or GRE / GMAT (PG)",
  "TOEFL iBT / IELTS / Duolingo English Test Score Report",
  "Statement of Purpose (SOP) and Personal Essays",
  "Letters of Recommendation (2–3)",
  "Resume / Curriculum Vitae (for postgraduate applicants)",
  "Valid Passport (minimum 18 months validity)",
  "Financial Documents — Bank Statements, Affidavit of Support",
  "Portfolio (for architecture, design and arts programmes)",
  "Passport-Size Photographs (as per visa specifications)",
  "F-1 Visa Interview Documents — I-20, DS-160, SEVIS fee receipt",
];

const hostelFeatures = [
  { icon: Home, label: "On-campus residence halls and university-managed apartments at every UC campus" },
  { icon: Users, label: "Single, double and triple-sharing furnished rooms with attached bathrooms" },
  { icon: Utensils, label: "Multiple dining halls offering vegetarian, vegan, halal and international meal plans" },
  { icon: Wifi, label: "High-speed campus-wide WiFi and free ethernet in every residence hall room" },
  { icon: ShieldCheck, label: "24/7 campus police, secure entry and resident advisor support" },
  { icon: Clock, label: "Laundry, study lounges, common kitchens and community spaces" },
];

const whyChoose = [
  {
    title: "Globally Top-Ranked",
    desc: "UC Berkeley, UCLA and UC San Diego consistently rank in the world's top 30 universities — your degree is recognised everywhere",
    icon: Trophy,
  },
  {
    title: "World-Class Faculty",
    desc: "Nobel laureates, Pulitzer winners and Turing Award recipients teach UC undergraduates and graduate students",
    icon: GraduationCap,
  },
  {
    title: "STEM & Research Powerhouse",
    desc: "UC leads the world in research output, patents and tech transfer — ideal for Indian students in STEM and engineering",
    icon: Microscope,
  },
  {
    title: "Strong Indian Community",
    desc: "Over 25,000 Indian students across the UC system — cultural associations, festivals and Indian grocery stores on every campus",
    icon: Users,
  },
  {
    title: "OPT / STEM Extension",
    desc: "Work in the USA for up to 3 years after graduation through OPT and the 24-month STEM extension — direct pathway to US careers",
    icon: Globe,
  },
  {
    title: "California Lifestyle",
    desc: "Beaches, mountains, Silicon Valley and Hollywood — California offers the best student lifestyle in the United States",
    icon: MapPin,
  },
  {
    title: "Scholarships & Aid",
    desc: "UC International Scholarships, Regents Scholarships and departmental fellowships available for Indian students",
    icon: Star,
  },
  {
    title: "GVK EduTech Support",
    desc: "End-to-end UC application, essay review, visa, forex & pre-departure assistance from Hyderabad",
    icon: ShieldCheck,
  },
];

export default function UniversityOfCaliforniaPage() {
  return (
    <PageLayout>
      <PageHeader
        title="University of California — Admissions 2026"
        subtitle="World Top 30 · WSCUC Accredited · STEM Powerhouse · OPT Pathway · Strong Indian Community"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1600&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Founded 1869 · California, USA
              </p>
              <ColorfulHeading
                text="University of California"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                <strong className="text-foreground">The University of California (UC)</strong>{" "}
                is one of the most prestigious public university systems in the world,
                comprising 10 campuses across the state of California. From world-leading
                research at UC Berkeley and UCLA to pioneering medical and engineering work
                at UC San Diego, UC Davis and UCSF, the UC system is consistently ranked
                among the top global universities — making it a top choice for Indian
                students seeking world-class undergraduate and postgraduate education in
                the USA.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Accredited by the{" "}
                <strong className="text-foreground">WASC Senior College and University Commission (WSCUC)</strong>,
                the University of California attracts students from over 100 countries,
                including a thriving community of over 25,000 Indian students. UC offers
                150+ undergraduate majors and 500+ postgraduate programmes, with strong
                STEM, engineering, business, computer science and life sciences programmes
                that prepare Indian students for global careers and the OPT work pathway
                in the United States.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["WSCUC Accredited", "World Top 30", "OPT Eligible", "STEM Programs", "Nobel Laureates"].map(
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
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&auto=format&fit=crop"
                  alt="University of California campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">150+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Years of academic excellence
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">25,000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Indian students across UC
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
              { label: "WSCUC", sub: "WASC Senior College & University Commission" },
              { label: "AAU", sub: "Association of American Universities Member" },
              { label: "DOE", sub: "U.S. Department of Education Recognised" },
              { label: "CHEA", sub: "Council for Higher Education Accreditation" },
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
              text="Why Indian Students Choose the University of California"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From world-leading research and Nobel-winning faculty to OPT work pathways
              and a thriving Indian community, the UC system offers unmatched value for
              Indian students studying in the USA in 2026.
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
              text="University of California World Ranking & Reputation"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              The UC system is consistently ranked among the top public universities in the
              world, with multiple campuses in the global top 50 for academic reputation,
              employer reputation and research impact.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6">
            {[
              { rank: "Top 10", source: "QS World Ranking — UC Berkeley" },
              { rank: "Top 30", source: "THE World Ranking — UC System" },
              { rank: "70+", source: "Nobel Laureates affiliated with UC" },
            ].map((item, i) => (
              <Card key={i} className="border-2 border-accent/20">
                <CardContent className="p-6 text-center">
                  <p className="text-4xl font-bold text-accent mb-2">{item.rank}</p>
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
              text="University of California Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              UC's tuition is significantly lower than comparable private US universities
              for international students — making it one of the best-value top-ranked
              university systems in the United States.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition & Living Cost Breakdown (Annual)
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Particulars
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          USD
                        </th>
                        <th className="text-right px-6 py-3 font-semibold text-foreground">
                          INR*
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          UG Tuition Fee (per year)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $45,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹38,25,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          PG Tuition Fee (per year){" "}
                          <span className="text-muted-foreground text-xs">
                            (varies by programme)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $35,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹29,75,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          On-Campus Housing (per year)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $12,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹10,20,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          Meal Plan / Food (per year)
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $6,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹5,10,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (UG, per year)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~$63,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ~₹53,55,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative). Fees vary by UC campus and
                    programme — figures are average estimates for international students.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                What's Included
              </p>
              {[
                {
                  label: "Tuition Fees",
                  sub: "Complete UG / PG programme",
                  usd: "Included",
                },
                {
                  label: "On-Campus Housing",
                  sub: "Furnished residence hall room",
                  usd: "$12,000/yr",
                },
                {
                  label: "Meal Plan",
                  sub: "Dining halls & food courts",
                  usd: "$6,000/yr",
                },
                {
                  label: "Health Insurance",
                  sub: "UC student health cover",
                  usd: "Included",
                },
                {
                  label: "OPT Work Permit",
                  sub: "12–36 months US work eligibility",
                  usd: "Free",
                },
              ].map((item) => (
                <Card
                  key={item.label}
                  className="border border-border/60"
                >
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
                      Total 4-Year UG Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$252,000</p>
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
              text="Eligibility Criteria for Indian Students"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Clear, well-documented requirements — strong academics plus standardised test
              scores are key for Indian students applying to the University of California.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Academic Record (UG)",
                desc: "Strong 12th-standard marks (CBSE / ISC / State boards) with excellent grades in core subjects.",
              },
              {
                title: "Academic Record (PG)",
                desc: "Bachelor's degree with a strong GPA (typically 3.0+ / 4.0 scale) from a recognised university.",
              },
              {
                title: "Standardised Tests (UG)",
                desc: "SAT / ACT scores — UC campuses are test-optional but strong scores boost your application.",
              },
              {
                title: "Standardised Tests (PG)",
                desc: "GRE / GMAT scores depending on programme — STEM programmes often accept GRE waiver requests.",
              },
              {
                title: "English Proficiency",
                desc: "TOEFL iBT 80–100, IELTS 6.5–7.0, or Duolingo English Test — required for Indian applicants.",
              },
              {
                title: "Essays & Recommendations",
                desc: "Strong Personal Insight Questions (UC essays) and 2–3 letters of recommendation for PG programmes.",
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
              text="University of California Admission Process 2026"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              A straightforward six-step journey from profile evaluation to your first day
              at the University of California in the United States.
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
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading
              text="Required Documents for UC Admission"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Gather these documents before applying — GVK EduTech will verify, attest and
              help you with the entire UC application and F-1 visa process for Indian students.
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
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                On-Campus Living
              </p>
              <ColorfulHeading
                text="Housing & Dining Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The University of California's on-campus housing is safe, modern and built
                for a diverse international student body — featuring multiple residence
                halls, university-managed apartments, multiple dining halls with vegetarian
                and halal options, 24/7 campus police and high-speed WiFi so that Indian
                students feel completely at home while studying in the USA.
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
                  alt="UC residence hall room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="UC residence hall common area"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── STUDENT LIFE IN CALIFORNIA ──────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=400&auto=format&fit=crop"
                  alt="California campus landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?w=400&auto=format&fit=crop"
                  alt="California nature and beaches"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Life in California
              </p>
              <ColorfulHeading
                text="Student Life in California"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                California is America's most dynamic state — home to Silicon Valley, Hollywood,
                Yosemite and the Pacific coast. Indian students at the University of California
                enjoy a vibrant lifestyle with year-round sunshine, beaches, mountains,
                world-class restaurants and a thriving Indian student community across the
                state. UC campuses host hundreds of student clubs, Indian cultural
                associations and major festivals including Diwali, Holi and Independence Day.
              </p>
              <ul className="space-y-3">
                {[
                  "Year-round mild climate with beaches, mountains and national parks at your doorstep",
                  "Direct flights from Hyderabad, Delhi and Mumbai to San Francisco or Los Angeles",
                  "Silicon Valley, Hollywood and biotech hubs — unmatched internship and career opportunities",
                  "Vibrant Indian community with cultural associations, Indian grocery stores and temples across California",
                  "Affordable student housing and meal plans through UC's residence hall network",
                  "OPT work eligibility — Indian students can work in the USA for up to 3 years after graduation",
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
              text="Advantages of Studying at the University of California"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              UC combines world-class academics, lower public-university tuition and a
              direct OPT work pathway — a smart choice for Indian students aiming for global
              careers in 2026.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "World Top 30 System",
                desc: "Multiple UC campuses in the global top 30 — Berkeley, UCLA, UC San Diego, UCSF and more",
                icon: Trophy,
              },
              {
                title: "Lower Public Tuition",
                desc: "Significantly lower tuition than Ivy League and private US universities — best value for a top degree",
                icon: DollarSign,
              },
              {
                title: "OPT & STEM Extension",
                desc: "Work in the USA for up to 3 years after graduation through OPT and the 24-month STEM extension",
                icon: Globe,
              },
              {
                title: "Nobel-Winning Faculty",
                desc: "70+ Nobel laureates affiliated with UC — learn directly from world-leading researchers",
                icon: GraduationCap,
              },
              {
                title: "Strong STEM & Research",
                desc: "UC leads the US in research funding, patents and tech transfer — ideal for STEM students",
                icon: Microscope,
              },
              {
                title: "Affordable Living",
                desc: "UC's housing and meal plans are subsidised — significantly cheaper than private universities",
                icon: Star,
              },
              {
                title: "Global PG Pathways",
                desc: "UC degrees unlock PhD, MBA and professional pathways at top universities worldwide",
                icon: BookOpen,
              },
              {
                title: "GVK EduTech Support",
                desc: "End-to-end UC application, essay review, F-1 visa, forex & pre-departure assistance from Hyderabad",
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
              of California and studying in the USA.
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
            Begin Your Journey at the University of California
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Secure your seat at one of the world's top public university systems. Our expert
            Hyderabad-based counsellors will guide you through the entire UC application,
            F-1 visa, scholarship and pre-departure process.
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
              <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C%20I%20want%20to%20know%20more%20about%20admissions%20at%20the%20University%20of%20California%2C%20USA.">
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
