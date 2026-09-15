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
  IndianRupee,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is BAU International University NMC approved?",
    answer:
      "Yes, BAU International University is recognized by the National Medical Commission (NMC) of India and listed with the WHO. Indian students can appear for FMGE/NEXT after completing their MBBS degree.",
  },
  {
    question: "What is the duration of MBBS at BAU International University?",
    answer:
      "The MBBS program at BAU International University is 6 years, which includes clinical rotation and practical training in state-of-the-art facilities.",
  },
  {
    question: "Is NEET required for admission?",
    answer:
      "Yes, NEET-UG qualification is mandatory for all Indian students seeking admission to any medical university abroad, including BAU International University.",
  },
  {
    question: "What is the medium of instruction at BAU?",
    answer:
      "The entire MBBS course is taught in English. Students are also encouraged to learn the local language to facilitate communication during clinical rotations.",
  },
  {
    question: "Can I work part-time while studying at BAU?",
    answer:
      "Students are generally allowed to work part-time within legal limits, but the medical curriculum is rigorous, and we recommend prioritizing studies.",
  },
  {
    question: "What is the total cost of MBBS at BAU International University?",
    answer:
      "The total cost including tuition, hostel, and living expenses is competitive. Please contact our counselors for the most updated fee structure for 2026.",
  },
  {
    question: "How is the food and accommodation for Indian students?",
    answer:
      "BAU provides safe and comfortable hostel facilities with Indian mess options. Vegetarian and non-vegetarian Indian meals are available to ensure students feel at home.",
  },
  {
    question: "Is the degree globally recognized?",
    answer:
      "Yes, the degree from BAU International University is globally recognized, allowing graduates to pursue postgraduate opportunities in the USA, UK, Europe, and India.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Fill out the online application form and upload your academic credentials",
    icon: FileText,
  },
  {
    step: 2,
    title: "Document Verification",
    desc: "Our team reviews your documents to ensure you meet the eligibility criteria",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Receive Offer Letter",
    desc: "Get your official admission letter from BAU International University",
    icon: GraduationCap,
  },
  {
    step: 4,
    title: "Fee Payment",
    desc: "Confirm your seat by paying the initial tuition fees",
    icon: IndianRupee,
  },
  {
    step: 5,
    title: "Visa Processing",
    desc: "Apply for your student visa with full support from GVK EduTech",
    icon: Globe,
  },
  {
    step: 6,
    title: "Join University",
    desc: "Fly to Georgia and begin your medical journey at BAU",
    icon: ArrowRight,
  },
];

const documents = [
  "Valid Passport (with at least 18 months validity)",
  "10th Grade Mark Sheet & Certificate",
  "12th Grade Mark Sheet & Certificate",
  "NEET-UG Score Card",
  "10 Recent Passport Size Photographs",
  "Birth Certificate",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV/Hepatitis Test Report",
  "Valid Travel Insurance",
  "Bank Statement of Sponsor (Parents/Guardian)",
  "Admission Letter from BAU International University",
];

const hostelFeatures = [
  { icon: Home, label: "Separate and secure hostels for boys and girls" },
  { icon: Users, label: "Modern rooms with essential furnishings" },
  { icon: Utensils, label: "Indian mess providing veg/non-veg meals" },
  { icon: Wifi, label: "High-speed internet and WiFi access" },
  { icon: ShieldCheck, label: "24/7 security and safety surveillance" },
  { icon: Clock, label: "Laundry services and heating facilities" },
];

const whyChoose = [
  {
    title: "World-Class Infrastructure",
    desc: "State-of-the-art laboratories and classrooms designed for modern medical education",
    icon: Star,
  },
  {
    title: "Affordable Tuition",
    desc: "Competitive fee structure making high-quality medical education accessible",
    icon: IndianRupee,
  },
  {
    title: "Transparent Admissions",
    desc: "No hidden costs or donations — a fair and merit-based admission process",
    icon: ShieldCheck,
  },
  {
    title: "English Medium Instruction",
    desc: "The complete MBBS curriculum is delivered in English for international students",
    icon: Globe,
  },
  {
    title: "Cultural Diversity",
    desc: "Study in a multicultural environment with students from across the globe",
    icon: Users,
  },
  {
    title: "Safe Environment",
    desc: "Located in Georgia, one of the safest countries for international students",
    icon: CheckCircle,
  },
  {
    title: "Clinical Exposure",
    desc: "Early clinical exposure with training in reputed affiliated hospitals",
    icon: GraduationCap,
  },
  {
    title: "Comprehensive Support",
    desc: "Full guidance from GVK EduTech for visa, travel, and on-ground support",
    icon: ArrowRight,
  },
];

export default function BauInternationalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="BAU International University Fees, Eligibility & Admission Process 2026"
        subtitle="NMC Approved · WHO Recognised · English Medium · Affordable Fees"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop"
      />

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Modern Excellence · Georgia
              </p>
              <ColorfulHeading
                text="BAU International University"
                size="3xl"
                className="mb-5"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                BAU International University is a premier institution dedicated to
                shaping the next generation of medical professionals. Offering a
                blend of academic rigor and practical training, it is an ideal
                destination for Indian students pursuing MBBS abroad.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With{" "}
                <strong className="text-foreground">NMC approval</strong> and{" "}
                <strong className="text-foreground">WHO recognition</strong>,
                BAU ensures that its graduates are globally competitive and eligible
                to practice medicine in India and worldwide.
              </p>

              {/* College Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["NMC Approved", "WHO Listed", "English Medium", "Global Recognition"].map(
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
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop"
                  alt="BAU International University campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">Global</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Standard Education
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    English Medium
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
              { label: "NMC", sub: "India — National Medical Commission" },
              { label: "WHO", sub: "World Health Organization Listed" },
              { label: "Top", sub: "Academic Standards in Georgia" },
              { label: "EU", sub: "European Standard Curriculum" },
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
              text="Why Indian Students Choose BAU"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              From modern infrastructure to a supportive academic environment,
              BAU provides everything needed for a successful medical career.
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
              text="MBBS Fee Structure 2026–27"
              size="3xl"
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg">
              Transparent pricing with no hidden costs, ensuring a worry-free
              educational journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="border-2 border-accent/20 overflow-hidden">
                <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                  <CardTitle className="text-base font-semibold text-foreground">
                    Tuition Fee Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left px-6 py-3 font-semibold text-foreground">
                          Year
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
                          1st Year
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $7,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹5,95,000
                        </td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="px-6 py-4 text-foreground">
                          2nd–6th Year{" "}
                          <span className="text-muted-foreground text-xs">
                            (per year)
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          $5,000
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-foreground">
                          ₹4,25,000
                        </td>
                      </tr>
                      <tr className="bg-accent/5">
                        <td className="px-6 py-4 font-bold text-foreground">
                          Total (6 Years)
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          $32,000
                        </td>
                        <td className="px-6 py-4 text-right font-bold text-accent text-base">
                          ₹27,20,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">
                    * Exchange rate: 1 USD ≈ ₹85 (indicative)
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
                  label: "Hostel",
                  sub: "On-campus accommodation",
                  usd: "$1,000",
                },
                {
                  label: "Indian Mess",
                  sub: "Daily veg / non-veg meals",
                  usd: "$1,500",
                },
                {
                  label: "Living Expenses",
                  sub: "Transport, personal",
                  usd: "$2,000",
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
                      Total 6-Year Cost
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      All-inclusive estimate
                    </p>
                  </div>
                  <p className="text-lg font-bold text-accent">~$45,000</p>
                </CardContent>
              </Card>
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
              Admission is based on academic merit and NEET qualification.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Age",
                desc: "Minimum 17 years of age by December 31st of the admission year",
              },
              {
                title: "Academics",
                desc: "12th grade with minimum 50% aggregate in Biology, Chemistry, and Physics",
              },
              {
                title: "NEET",
                desc: "NEET-UG qualification is mandatory for all Indian applicants",
              },
              {
                title: "English",
                desc: "Proficiency in English is required as it is the medium of instruction",
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
              A seamless process to get you enrolled in one of Georgia's finest
              medical universities.
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
              Ensure you have these documents ready for a smooth application
              process.
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
                Safe & Comfortable Living
              </p>
              <ColorfulHeading
                text="Hostel Facilities"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                BAU International University provides hostels that are designed
                to offer a "home away from home" experience for international
                students, combining safety with all modern amenities.
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
                  alt="Hostel room"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Hostel common area"
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
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Georgia city"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Georgia landscape"
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover mt-8"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Student Life in Georgia
              </p>
              <ColorfulHeading
                text="Experience the Charm of Georgia"
                size="3xl"
                className="mb-6 text-left"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Studying in Georgia offers more than just an academic degree; it is
                an opportunity to experience one of the most welcoming and
                beautiful countries in the world.
              </p>
              <ul className="space-y-3">
                {[
                  "High safety standards for international students",
                  "Affordable cost of living compared to Western Europe",
                  "Rich cultural heritage and breathtaking landscapes",
                  "English-speaking environment in urban areas",
                  "Strong and supportive Indian student community",
                  "Ease of travel across Europe and Asia",
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
              text="Key Advantages of BAU International University"
              size="3xl"
              className="mb-4"
            />
          </div>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Modern Curriculum",
                desc: "Up-to-date medical syllabus meeting international standards",
              },
              {
                title: "No Donation Fees",
                desc: "Direct and transparent admission without any capitation",
              },
              {
                title: "NEXT/FMGE Prep",
                desc: "Integrated coaching and support for licensing exams",
              },
              {
                title: "Diverse Peer Group",
                desc: "Learn and grow with students from multiple countries",
              },
              {
                title: "Clinical Practice",
                desc: "Extensive hands-on training in leading hospitals",
              },
              {
                title: "Global Degree",
                desc: "Degree recognized by WHO and major health bodies",
              },
              {
                title: "Post-Grad Paths",
                desc: "Strong pathways for PG in USA, UK, and Europe",
              },
              {
                title: "Full GVK Support",
                desc: "Comprehensive guidance from admission to graduation",
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
            Start Your Medical Journey at BAU International University
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Our expert counselors are ready to help you secure your admission
            and plan your future in medicine.
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
              { href: "/", label: "Home" },
              { href: "/mbbs/georgia", label: "MBBS in Georgia" },
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
