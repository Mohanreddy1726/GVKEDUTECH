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
  TrendingUp,
  Palmtree,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Is Bridgetown International University recognised by NMC and WHO?",
    answer:
      "Bridgetown International University (BIU) is listed with the World Health Organisation (WHO) and the National Medical Commission (NMC) of India. Graduates are eligible to sit for the FMGE / NEXT exam in India, pursue ECFMG certification in the USA, and apply for medical licensure in the Caribbean, UK, and other international jurisdictions.",
  },
  {
    question: "What is the duration of the MD program at BIU?",
    answer:
      "The MD (Doctor of Medicine) program at BIU follows the US-style 4-year medical curriculum. The first two years cover basic sciences taught on campus in Barbados, and the final two years focus on clinical rotations at affiliated teaching hospitals in the Caribbean and the USA.",
  },
  {
    question: "Is NEET required for Indian students to study at BIU?",
    answer:
      "Yes. Indian students must qualify NEET-UG to be eligible for admission at BIU and to later obtain an NMC eligibility certificate required to practise medicine in India after graduation. GVK EduTech assists with the NEET counselling and NMC paperwork.",
  },
  {
    question: "Is the BIU medical program taught in English?",
    answer:
      "Yes. The entire MD program at BIU is delivered in English, including lectures, textbooks, lab work, and clinical instruction. No language proficiency test is mandatory for admission, although basic English comprehension is essential for success.",
  },
  {
    question: "Can I work part-time while studying at BIU?",
    answer:
      "Caribbean student visa regulations generally allow limited part-time work on campus. Most BIU students focus on their studies given the rigorous nature of the medical curriculum. Clinical rotations in the later years may include paid stipends at affiliated hospitals.",
  },
  {
    question: "What is the total cost of studying MD at BIU?",
    answer:
      "The total cost of the 4-year MD program at BIU is approximately USD 60,000 – 80,000 (INR 50 – 68 lakhs), including tuition, hostel, mess, books, insurance, and personal expenses. Scholarships and instalment plans are available — GVK EduTech can advise on eligibility.",
  },
  {
    question: "What is the living environment like for Indian students in Barbados?",
    answer:
      "Barbados offers a safe, English-speaking environment with a tropical Caribbean climate. BIU provides on-campus housing with furnished rooms, Indian mess options, and dedicated international student support. The local population is welcoming, and there is a growing Indian student community on the island.",
  },
  {
    question: "Can I practise medicine in the USA or UK after graduating from BIU?",
    answer:
      "Yes. BIU graduates are eligible to sit for the USMLE (USA) and PLAB (UK) exams. Many BIU alumni match into US residency programs after clinical rotations in the US, and others pursue postgraduate training in the UK, Canada, and the Caribbean. The curriculum is structured to support these global pathways.",
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Submit Application",
    desc: "Apply online via the BIU admissions portal — upload academic transcripts, ID, and NEET score",
    icon: FileText,
  },
  {
    step: 2,
    title: "Receive Offer Letter",
    desc: "Get your official admission decision from BIU within 2–4 weeks of application",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Pay Tuition Fees",
    desc: "Pay the first-year tuition to confirm your seat at Bridgetown International University",
    icon: IndianRupee,
  },
  {
    step: 4,
    title: "Apply for Student Visa",
    desc: "Apply for a Barbados student visa with BIU's support documents and your acceptance letter",
    icon: Globe,
  },
  {
    step: 5,
    title: "Book Flights to Barbados",
    desc: "Fly to Grantley Adams International Airport — GVK EduTech provides full travel support",
    icon: ArrowRight,
  },
  {
    step: 6,
    title: "Begin Studies",
    desc: "Report to the BIU campus, complete orientation, and start your MD journey in Barbados",
    icon: GraduationCap,
  },
];

const documents = [
  "Valid Passport (min. 18 months validity)",
  "10th Mark Sheet & Certificate",
  "12th Mark Sheet & Certificate",
  "NEET Score Card",
  "Passport Size Photos (10 copies)",
  "Birth Certificate (English translated)",
  "Police Clearance Certificate (PCC)",
  "Medical Fitness Certificate",
  "HIV Test Report",
  "Travel & Health Insurance",
  "Bank Statement (Father / Guardian)",
  "Admission Letter (Bridgetown International University)",
];

const hostelFeatures = [
  { icon: Home, label: "Separate hostels for boys and girls on campus" },
  { icon: Users, label: "Fully furnished rooms (2–3 sharing) with study desks" },
  { icon: Utensils, label: "Indian mess with veg / non-veg options" },
  { icon: Wifi, label: "High-speed Wi-Fi across the campus" },
  { icon: ShieldCheck, label: "24/7 security and CCTV surveillance" },
  { icon: Clock, label: "Laundry, hot water & air-conditioning" },
];

const whyChoose = [
  {
    title: "NMC & WHO Recognised",
    desc: "Globally accepted MD degree — eligible for FMGE / NEXT in India and PG worldwide",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Tuition",
    desc: "Significantly lower fees than US / UK medical schools with similar US-based curriculum",
    icon: IndianRupee,
  },
  {
    title: "English Medium",
    desc: "Entire MD program taught in English — perfect for Indian students",
    icon: Globe,
  },
  {
    title: "Caribbean Lifestyle",
    desc: "Study in Barbados — safe, English-speaking, tropical island destination",
    icon: Palmtree,
  },
  {
    title: "US-Style Curriculum",
    desc: "4-year MD program modelled on American medical schools, with US clinical rotations",
    icon: BookOpen,
  },
  {
    title: "USMLE Coaching",
    desc: "Built-in USMLE Step 1 preparation and dedicated mentorship for residency match",
    icon: Star,
  },
  {
    title: "Indian Community",
    desc: "Active Indian student community, cultural associations, and festival celebrations",
    icon: Users,
  },
  {
    title: "GVK EduTech Support",
    desc: "End-to-end guidance — application, visa, travel, and post-arrival support",
    icon: CheckCircle,
  },
];

const recognitionStats = [
  { label: "NMC", note: "National Medical Commission" },
  { label: "WHO", note: "World Health Organisation" },
  { label: "FAIMER", note: "Foundation for Advancement of International Medical Education" },
  { label: "ACCM", note: "Accreditation Commission on Colleges of Medicine" },
];

const worldRankStats = [
  { rank: "#8,200", note: "World Ranking · UniRank" },
  { rank: "#1,200", note: "Caribbean Region" },
  { rank: "#15", note: "Caribbean Medical Schools" },
];

const tuitionRows = [
  { year: "Year 1", amount: "$14,000" },
  { year: "Year 2", amount: "$14,000" },
  { year: "Year 3", amount: "$14,000" },
  { year: "Year 4", amount: "$14,000" },
  { year: "Total (4 Years)", amount: "$56,000", highlight: true },
];

const livingCosts = [
  { label: "Hostel (per year)", value: "$3,000" },
  { label: "Indian Mess (per year)", value: "$2,400" },
  { label: "Books & Supplies (per year)", value: "$800" },
  { label: "Insurance (per year)", value: "$1,200" },
  { label: "Personal Expenses (per year)", value: "$2,400" },
  { label: "Total Living (per year)", value: "$9,800" },
];

const eligibility = [
  {
    title: "Age",
    desc: "Minimum 17 years at the time of admission. No upper age limit for applicants.",
    icon: Clock,
  },
  {
    title: "Academics",
    desc: "10+2 with Physics, Chemistry, Biology (PCB) — minimum 50% aggregate (40% for reserved categories).",
    icon: BookOpen,
  },
  {
    title: "NEET",
    desc: "NEET-UG qualification is mandatory for Indian students as per NMC regulations.",
    icon: FileText,
  },
  {
    title: "English",
    desc: "No IELTS / TOEFL required. Basic English comprehension is essential for the MD program.",
    icon: Globe,
  },
];

const advantages = [
  { title: "No Entrance Exam", desc: "Admission based on 12th marks and NEET score — no separate BIU entrance test" },
  { title: "No Donation / Capitation", desc: "Transparent fee structure with no hidden charges or donation fees" },
  { title: "USMLE Coaching", desc: "Built-in USMLE Step 1 and Step 2 preparation during the MD program" },
  { title: "US Clinical Rotations", desc: "Final 2 years include clinical rotations in affiliated US teaching hospitals" },
  { title: "Caribbean Recognition", desc: "Recognised by CAAM-HP and ACCM — accepted across the Caribbean region" },
  { title: "Global PG Pathways", desc: "Eligible for residency in the USA, UK, Canada, India (FMGE/NEXT), and more" },
  { title: "Safe & Welcoming", desc: "Barbados is consistently ranked among the safest Caribbean islands" },
  { title: "GVK EduTech Support", desc: "End-to-end support from counselling to graduation — admissions, visa, travel" },
];

const studentLifeBullets = [
  "Study in Barbados — a safe, English-speaking Caribbean island nation",
  "Enjoy year-round tropical weather with average temperatures of 24–30°C",
  "Active international student community with Indian cultural associations",
  "Easy access to pristine beaches, water sports, and Caribbean cuisine",
  "Strong Indian diaspora with restaurants, temples, and grocery stores",
  "Direct flights from the UK, USA, and Canada — convenient global connectivity",
];

const relatedLinks = [
  { label: "MBBS in Central America", href: "/mbbs/centralamerica" },
  { label: "Partner Universities", href: "/partner-universities" },
  { label: "Apply Now", href: "/apply" },
  { label: "Contact Us", href: "/contact" },
  { label: "About GVK EduTech", href: "/about" },
];

export default function BridgetownInternationalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Bridgetown International University — MD 2026"
        subtitle="NMC Approved · WHO Listed · US-Style MD · Caribbean Lifestyle"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. Overview ── */}
      <section className="section-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--brand-red, #C8243A)" }}>
                <span className="block w-6 h-0.5" style={{ background: "var(--brand-red, #C8243A)" }} />
                Overview
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                Bridgetown International University — MD Fees, Eligibility & Admission Process 2026
              </h1>
              <p className="text-base md:text-lg mb-6" style={{ color: "var(--muted, #5A7190)" }}>
                Bridgetown International University (BIU) is a leading Caribbean medical school in Barbados, offering a
                US-style 4-year MD program. With NMC and WHO recognition, English-medium instruction, and affordable
                tuition, BIU is a top choice for Indian students seeking a globally accepted medical degree in a
                safe, English-speaking Caribbean environment.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["NMC Approved", "WHO Listed", "English Medium", "US-Style MD"].map((b) => (
                  <span key={b} className="px-3 py-1.5 rounded-full text-xs font-semibold border" style={{ borderColor: "var(--surface-alt, #E8EDF5)", color: "var(--navy-mid, #1A2B42)" }}>
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/apply">Apply Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/contact">Free Counseling</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="relative">
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&auto=format&fit=crop"
                    alt="Bridgetown International University campus"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                  <div className="text-2xl font-bold" style={{ color: "var(--brand-red, #C8243A)" }}>5,000+</div>
                  <div className="text-xs" style={{ color: "var(--muted, #5A7190)" }}>Students Enrolled</div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                  <div className="text-2xl font-bold" style={{ color: "var(--brand-red, #C8243A)" }}>50+</div>
                  <div className="text-xs" style={{ color: "var(--muted, #5A7190)" }}>Countries Represented</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. Recognition band ── */}
      <section className="py-12 md:py-16" style={{ background: "var(--accent, #C8243A)", color: "#fff" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {recognitionStats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{s.label}</div>
                <div className="text-xs md:text-sm opacity-90">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Why Choose BIU ── */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="Why Choose Bridgetown International University" size="3xl" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((c) => (
              <ScrollReveal key={c.title}>
                <Card className="h-full rounded-2xl border hover:shadow-lg transition-shadow" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(200,36,58,0.08)" }}>
                      <c.icon className="w-6 h-6" style={{ color: "var(--brand-red, #C8243A)" }} />
                    </div>
                    <h3 className="font-bold text-base mb-2" style={{ color: "var(--navy-mid, #1A2B42)" }}>{c.title}</h3>
                    <p className="text-sm" style={{ color: "var(--muted, #5A7190)" }}>{c.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. World Ranking ── */}
      <section className="section-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="Bridgetown International University — World Ranking" size="3xl" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {worldRankStats.map((s) => (
              <Card key={s.note} className="rounded-2xl border text-center" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "var(--brand-red, #C8243A)" }}>{s.rank}</div>
                  <div className="text-sm" style={{ color: "var(--muted, #5A7190)" }}>{s.note}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-center text-sm md:text-base" style={{ color: "var(--muted, #5A7190)" }}>
            Bridgetown International University is listed by the World Health Organisation (WHO), the National Medical
            Commission (NMC) of India, FAIMER, and the Accreditation Commission on Colleges of Medicine (ACCM). The
            university's MD program is recognised by medical councils across the Caribbean, India, the UK, and the USA.
          </p>
        </div>
      </section>

      {/* ── 5. MD Fees Structure ── */}
      <section className="section-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="MD Fees Structure at Bridgetown International University" size="3xl" />
            <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto" style={{ color: "var(--muted, #5A7190)" }}>
              Indicative annual tuition and living costs for the 4-year MD program at BIU (in USD).
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="rounded-2xl border" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
              <CardHeader>
                <CardTitle className="text-xl">MD Tuition Fees (4 Years)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "var(--surface, #F8F9FB)" }}>
                      <th className="text-left p-4 font-semibold" style={{ color: "var(--navy-mid, #1A2B42)" }}>Year</th>
                      <th className="text-right p-4 font-semibold" style={{ color: "var(--navy-mid, #1A2B42)" }}>Tuition (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tuitionRows.map((r) => (
                      <tr key={r.year} className="border-t" style={{ borderColor: "var(--surface-alt, #E8EDF5)", background: r.highlight ? "rgba(200,36,58,0.04)" : "transparent" }}>
                        <td className="p-4 font-medium" style={{ color: "var(--navy-mid, #1A2B42)" }}>{r.year}</td>
                        <td className="p-4 text-right font-bold" style={{ color: r.highlight ? "var(--brand-red, #C8243A)" : "var(--navy-mid, #1A2B42)" }}>{r.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-4 text-xs" style={{ color: "var(--muted, #5A7190)" }}>
                  ≈ ₹48 lakhs total tuition (1 USD ≈ ₹85). Scholarships and instalment plans available.
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
              <CardHeader>
                <CardTitle className="text-xl">Living Costs (per year)</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {livingCosts.map((c) => (
                  <div key={c.label} className="flex items-center justify-between p-3 rounded-xl" style={{ background: "var(--surface, #F8F9FB)" }}>
                    <span className="text-sm" style={{ color: "var(--navy-mid, #1A2B42)" }}>{c.label}</span>
                    <span className="font-bold text-sm" style={{ color: "var(--brand-red, #C8243A)" }}>{c.value}</span>
                  </div>
                ))}
                <div className="p-4 rounded-xl mt-4" style={{ background: "rgba(200,36,58,0.08)" }}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold" style={{ color: "var(--navy-mid, #1A2B42)" }}>Total 4-Year Cost</span>
                    <span className="font-bold text-lg" style={{ color: "var(--brand-red, #C8243A)" }}>~$95,200 (≈ ₹81 lakhs)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── 6. Eligibility ── */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="Who Can Apply for MD at BIU" size="3xl" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {eligibility.map((e) => (
              <Card key={e.title} className="rounded-2xl border text-center" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto" style={{ background: "rgba(200,36,58,0.08)" }}>
                    <e.icon className="w-6 h-6" style={{ color: "var(--brand-red, #C8243A)" }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--navy-mid, #1A2B42)" }}>{e.title}</h3>
                  <p className="text-sm" style={{ color: "var(--muted, #5A7190)" }}>{e.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Admission Process ── */}
      <section className="section-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="BIU Admission Process — Step by Step" size="3xl" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {admissionSteps.map((s) => (
              <ScrollReveal key={s.step}>
                <Card className="rounded-2xl border h-full" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ background: "var(--brand-red, #C8243A)" }}>
                        {s.step}
                      </div>
                      <s.icon className="w-5 h-5" style={{ color: "var(--brand-red, #C8243A)" }} />
                    </div>
                    <h3 className="font-bold mb-2" style={{ color: "var(--navy-mid, #1A2B42)" }}>{s.title}</h3>
                    <p className="text-sm" style={{ color: "var(--muted, #5A7190)" }}>{s.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/apply">Start Your Application <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 8. Required Documents ── */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="Documents Required for BIU Admission" size="3xl" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {documents.map((d, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl border bg-white" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                <FileText className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--brand-red, #C8243A)" }} />
                <span className="text-sm" style={{ color: "var(--navy-mid, #1A2B42)" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Hostel Facilities ── */}
      <section className="section-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <ColorfulHeading text="Hostel & Campus Facilities at BIU" size="3xl" />
              <p className="mt-4 text-sm md:text-base" style={{ color: "var(--muted, #5A7190)" }}>
                BIU provides on-campus housing designed for international students — furnished rooms, Indian mess, high-speed
                Wi-Fi, and 24/7 security, all within walking distance of classrooms and labs.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {hostelFeatures.map((f) => (
                  <div key={f.label} className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "var(--surface, #F8F9FB)" }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(200,36,58,0.08)" }}>
                      <f.icon className="w-4 h-4" style={{ color: "var(--brand-red, #C8243A)" }} />
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--navy-mid, #1A2B42)" }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&auto=format&fit=crop" alt="BIU hostel" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden mt-8">
                  <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop" alt="BIU campus" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden -mt-4">
                  <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&auto=format&fit=crop" alt="BIU classroom" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1568667256549-094345857637?w=600&auto=format&fit=crop" alt="Barbados beach" className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 10. Student Life ── */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&auto=format&fit=crop" alt="Barbados beach" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden mt-8">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop" alt="Caribbean" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden -mt-4">
                  <img src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=600&auto=format&fit=crop" alt="Island life" className="w-full h-full object-cover" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=600&auto=format&fit=crop" alt="Sunset" className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <ColorfulHeading text="Student Life in Barbados" size="3xl" />
              <p className="mt-4 text-sm md:text-base mb-6" style={{ color: "var(--muted, #5A7190)" }}>
                Barbados offers a unique combination of a safe Caribbean environment, a tropical climate, and a
                well-established international student community. Indian students find a welcoming home on the island.
              </p>
              <ul className="space-y-3">
                {studentLifeBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--brand-red, #C8243A)" }} />
                    <span className="text-sm" style={{ color: "var(--navy-mid, #1A2B42)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 11. Advantages ── */}
      <section className="section-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="Advantages of Studying MD at BIU" size="3xl" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {advantages.map((a) => (
              <Card key={a.title} className="rounded-2xl border h-full" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                <CardContent className="p-5">
                  <CheckCircle className="w-5 h-5 mb-3" style={{ color: "var(--brand-red, #C8243A)" }} />
                  <h3 className="font-bold text-sm mb-2" style={{ color: "var(--navy-mid, #1A2B42)" }}>{a.title}</h3>
                  <p className="text-xs" style={{ color: "var(--muted, #5A7190)" }}>{a.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. FAQs ── */}
      <section className="section-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <ColorfulHeading text="Frequently Asked Questions — BIU" size="3xl" />
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-2xl border px-5 py-4" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
                <summary className="cursor-pointer flex items-center justify-between gap-3 list-none">
                  <span className="font-semibold text-sm md:text-base" style={{ color: "var(--navy-mid, #1A2B42)" }}>{f.question}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" style={{ color: "var(--brand-red, #C8243A)" }} />
                </summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted, #5A7190)" }}>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 13. Apply Now CTA ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Begin Your MD Journey at Bridgetown International University</h2>
          <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Apply now for the 2026 intake at BIU and start your US-style medical degree in Barbados.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-xl">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl bg-transparent text-white border-white/30 hover:bg-white/10">
              <Link href="/contact">Free Counseling Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── 14. Related Links ── */}
      <section className="section-light py-12 border-t" style={{ borderColor: "var(--surface-alt, #E8EDF5)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold" style={{ color: "var(--navy-mid, #1A2B42)" }}>Explore More</h3>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {relatedLinks.map((l) => (
              <Button key={l.href} asChild variant="outline" size="sm" className="rounded-full">
                <Link href={l.href}>{l.label}</Link>
              </Button>
            ))}
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
