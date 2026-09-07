// "use client" ensures client-side rendering
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
  Award,
  DollarSign,
  Briefcase,
  Building2,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

// Frequently asked questions for GRUNI
const faqs = [
  {
    question: "Is Grigol Robakidze University recognised in India?",
    answer: "Yes. Grigol Robakidze University (GRUNI) is recognised by the National Medical Council (NMC) and World Health Organization (WHO), making its MBBS degree valid for Indian medical licensing exams and practice."
  },
  {
    question: "What is the MBBS fee for the 2026 intake at GRUNI?",
    answer: "The total tuition fee for the 6-year MBBS programme at Grigol Robakidze University is approximately $24,000 (≈ ₹20.4 lakhs) for international students, making it one of the most affordable options in Georgia."
  },
  {
    question: "Do I need to appear for an entrance exam for GRUNI?",
    answer: "No separate entrance exam is required. Admission is based on 12th grade marks (minimum 50% in PCB), NEET qualification, and English proficiency. GVK EduTech provides end-to-end guidance."
  },
  {
    question: "What is the medium of instruction at GRUNI?",
    answer: "The MBBS programme at Grigol Robakidze University is taught entirely in English, ensuring international students can follow the curriculum without language barriers."
  },
  {
    question: "Does GRUNI provide hostel accommodation?",
    answer: "Yes, GRUNI offers on-campus hostel facilities with modern amenities including Wi-Fi, dining halls, laundry, 24/7 security, and separate wings for male and female students."
  },
];

// Admission steps – simplified
const admissionSteps = [
  { step: 1, title: "Free Counselling", desc: "Discuss your profile with GVK EduTech's experts", icon: FileText },
  { step: 2, title: "Choose Programme", desc: "Select the MBBS programme and confirm fees", icon: BookOpen },
  { step: 3, title: "Apply Online", desc: "Submit application through GRUNI admission portal", icon: GraduationCap },
  { step: 4, title: "Receive Offer", desc: "Offer letter within 2–3 weeks of application", icon: CheckCircle },
  { step: 5, title: "Pay Deposit", desc: "Secure your seat by paying the tuition deposit", icon: Award },
  { step: 6, title: "Visa Assistance", desc: "Get help with student visa for Georgia", icon: Globe },
  { step: 7, title: "Pre-Departure", desc: "Orientation, flight booking and travel tips", icon: ArrowRight },
];

// Documents required for MBBS admission
const documents = [
  "Valid Passport (minimum 18 months validity)",
  "12th Grade Certificate & Mark Sheets",
  "NEET Scorecard (qualified)",
  "English Language Test (IELTS/TOEFL/PTE) or Medium of Instruction Certificate",
  "Statement of Purpose (SOP)",
  "Letter of Recommendation (2–3)",
  "Bank Statement (Proof of Funds)",
  "Passport-size Photographs (recent)",
  "Birth Certificate",
  "Medical Fitness Certificate",
];

// Accommodation / Hostel feature list
const accommodationFeatures = [
  { icon: Home, label: "On-campus hostels available" },
  { icon: Users, label: "Separate boys & girls wings" },
  { icon: Utensils, label: "Mess & dining facilities" },
  { icon: Wifi, label: "High-speed campus Wi-Fi" },
  { icon: ShieldCheck, label: "24/7 security & CCTV surveillance" },
  { icon: Clock, label: "Laundry, gym & study spaces" },
];

// Why choose Grigol Robakidze University
const whyChoose = [
  { title: "NMC & WHO Recognised", desc: "Degrees accepted globally for licensing exams", icon: Globe },
  { title: "Affordable Tuition", desc: "One of the lowest fee structures in Georgia for MBBS", icon: DollarSign },
  { title: "English Medium", desc: "Complete 6-year MBBS taught in English", icon: BookOpen },
  { title: "Modern Infrastructure", desc: "Advanced labs, simulation centres & digital library", icon: Award },
  { title: "Clinical Exposure", desc: "Affiliated hospitals for early clinical rotations", icon: Building2 },
  { title: "Indian Student Community", desc: "Growing Indian student base with cultural familiarity", icon: Users },
];

// Rankings
const rankings = [
  { label: "Top 10", sub: "Medical Universities in Georgia" },
  { label: "NMC", sub: "National Medical Council Approved" },
  { label: "WHO", sub: "World Health Organization Listed" },
  { label: "FAIMER", sub: "Foundation for Advancement of International Medical Education" },
];

// Advantages over other partner universities
const advantages = [
  { title: "Lowest Fee in Georgia", desc: "Most cost-effective MBBS option among Georgian medical universities" },
  { title: "No Entrance Exam", desc: "Admission based on NEET and academic record only" },
  { title: "Early Clinical Training", desc: "Hospital exposure from 3rd year onwards" },
  { title: "GVK EduTech Support", desc: "End-to-end assistance from counselling to graduation" },
];

export default function GrigolRobakidzeUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Grigol Robakidze University (GRUNI) Fees, Eligibility & Admission Process 2026"
        subtitle="NMC & WHO Recognised MBBS in Georgia – Affordable Tuition – English Medium"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1522920193-30c9716f3517?w=1200&auto=format&fit=crop"
      />

      {/* ── 1. OVERVIEW ─────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Established 1992 · Tbilisi, Georgia
              </p>
              <ColorfulHeading text="Grigol Robakidze University (GRUNI)" size="3xl" className="mb-5" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                Grigol Robakidze University (GRUNI) is one of Georgia's leading private medical universities, offering a 6-year MBBS programme recognised by the National Medical Council (NMC) of India and the World Health Organization (WHO). Located in Tbilisi, the university combines European-standard medical education with affordable tuition fees, making it a preferred destination for Indian students pursuing MBBS abroad. The curriculum follows international standards with early clinical exposure and modern simulation facilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "NMC Approved",
                  "WHO Listed",
                  "English Medium",
                  "Lowest Fees in Georgia",
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
                  src="https://images.unsplash.com/photo-1543797483-74c45022a4b6?w=1200&auto=format&fit=crop"
                  alt="Grigol Robakidze University campus"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">30+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Years of Excellence</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-background border border-border rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-bold text-accent">3000+</p>
                  <p className="text-sm text-muted-foreground mt-0.5">International Students</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 2. WHY CHOOSE GRUNI ─────────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Why Indian Students Choose GRUNI" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              NMC recognition, affordable fees, English-medium instruction, and strong clinical training make GRUNI a top choice for MBBS in Georgia.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="border border-border/60 hover:border-accent/50 transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. RECOGNITION ─────────────────────────────────────── */}
      <section className="py-12 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "NMC", sub: "National Medical Council" },
              { label: "WHO", sub: "World Health Organization" },
              { label: "FAIMER", sub: "International Medical Education" },
              { label: "ECFMG", sub: "USMLE Eligibility" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-4xl font-bold">{item.label}</p>
                <p className="text-white/75 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WORLD RANKING ───────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="World Ranking & Recognition" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">GRUNI is ranked among the top 10 medical universities in Georgia and holds key international accreditations for global mobility.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rankings.map((r, i) => (
              <Card key={i} className="border border-border/60">
                <CardContent className="p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">{r.label}</p>
                  <p className="text-muted-foreground text-sm">{r.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MBBS FEES STRUCTURE ───────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="MBBS Fee Structure 2026–27" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              Transparent tuition fees with no hidden charges – one of the most affordable MBBS options in Georgia.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-accent/20 overflow-hidden">
              <CardHeader className="bg-accent/8 border-b border-accent/20 px-6 py-4">
                <CardTitle className="text-base font-semibold text-foreground">Tuition Fee Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-6 py-3 font-semibold text-foreground">Year</th>
                      <th className="text-right px-6 py-3 font-semibold text-foreground">USD</th>
                      <th className="text-right px-6 py-3 font-semibold text-foreground">INR*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 text-foreground">1st Year</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">$5,000</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">₹4,25,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 text-foreground">2nd–6th Year (per year)</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">$3,800</td>
                      <td className="px-6 py-4 text-right font-semibold text-foreground">₹3,23,000</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="px-6 py-4 font-bold text-foreground">Total (6 Years)</td>
                      <td className="px-6 py-4 text-right font-bold text-accent text-base">$24,000</td>
                      <td className="px-6 py-4 text-right font-bold text-accent text-base">₹20,40,000</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground px-6 py-3 border-t border-border">* Exchange rate: 1 USD ≈ ₹85 | Hostel & mess fees extra (~$1,500–2,000/year)</p>
              </CardContent>
            </Card>
            <Card className="border border-border/60">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Additional Costs (Approximate)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Hostel Fee (per year)</span>
                  <span className="font-semibold text-foreground">$800–1,000</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Mess/Food (per year)</span>
                  <span className="font-semibold text-foreground">$1,000–1,200</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Medical Insurance</span>
                  <span className="font-semibold text-foreground">$150–200</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Visa & Processing</span>
                  <span className="font-semibold text-foreground">$500–800</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">One-time Admission Fee</span>
                  <span className="font-semibold text-foreground">$500</span>
                </div>
                <div className="flex justify-between pt-2 font-bold">
                  <span className="text-foreground">Estimated Total (6 Years)</span>
                  <span className="text-accent">$32,000–35,000 (₹27–30 Lakhs)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── 6. ELIGIBILITY ─────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Eligibility Criteria" size="3xl" className="mb-4" />
            <p className="text-muted-foreground text-lg">
              Straightforward eligibility – no additional entrance exams beyond NEET for Indian students.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              { title: "Age", desc: "Minimum 17 years as on 31 December of the admission year" },
              { title: "Academics", desc: "12th standard with minimum 50% in Physics, Chemistry & Biology (40% for SC/ST/OBC)" },
              { title: "NEET", desc: "NEET-UG qualification mandatory for Indian applicants (as per NMC norms)" },
              { title: "English", desc: "English proficiency via IELTS/TOEFL/PTE or Medium of Instruction certificate from school" },
            ].map(item => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-background border border-border/60">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-foreground mb-1">{item.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ADMISSION PROCESS ─────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <ColorfulHeading text="Admission Process" size="3xl" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {admissionSteps.map(step => (
              <Card key={step.step} className="border border-border/60">
                <CardHeader className="flex flex-row items-center gap-4">
                  <step.icon className="w-6 h-6 text-accent" />
                  <CardTitle className="text-lg font-semibold">Step {step.step}: {step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. REQUIRED DOCUMENTS ─────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Required Documents" size="3xl" className="mb-4" />
          </div>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            {documents.map(doc => (
              <li key={doc}>{doc}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 9. HOSTEL FACILITIES ─────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Hostel Facilities" size="3xl" className="mb-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {accommodationFeatures.map((item, i) => (
              <Card key={i} className="border border-border/60">
                <CardContent className="flex items-center space-x-3">
                  <item.icon className="w-6 h-6 text-accent" />
                  <span className="text-foreground">{item.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. STUDENT LIFE IN GEORGIA ─────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Student Life in Georgia" size="3xl" className="mb-4" />
          </div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Georgia offers a safe, welcoming environment with a low cost of living, rich culture, and modern infrastructure. Tbilisi is a vibrant European capital with excellent public transport, diverse cuisine, and a growing international student community. GRUNI provides dedicated support for international students including cultural events, language support, and easy travel across Europe.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: MapPin, label: "Safe & Welcoming", desc: "Low crime rate, friendly locals" },
              { icon: Utensils, label: "Georgian Cuisine", desc: "Affordable, delicious food options" },
              { icon: Globe, label: "Visa-Free Travel", desc: "Schengen access from Georgia" },
              { icon: Building2, label: "Modern City Life", desc: "Metro, malls, cultural venues" },
            ].map((item, i) => (
              <Card key={i} className="border border-border/60 text-center p-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. ADVANTAGES ───────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Key Advantages of GRUNI" size="3xl" className="mb-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((adv, i) => (
              <Card key={i} className="border border-border/60">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-1">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">{adv.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. FAQs ────────────────────────────────────────────── */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <ColorfulHeading text="Frequently Asked Questions" size="3xl" className="mb-4" />
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((item, i) => (
              <div key={i} className="border-b border-border/40 pb-6">
                <h4 className="font-semibold text-foreground mb-2">{item.question}</h4>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKING SECTION ──────────────────────────── */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <ColorfulHeading text="Explore More" size="2xl" className="mb-4" />
            <p className="text-muted-foreground">Discover related pages and resources for your MBBS journey</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link href="/mbbs/georgia" className="group block p-6 rounded-2xl bg-background border border-border/60 hover:border-accent/50 transition-colors">
              <GraduationCap className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">MBBS in Georgia</h3>
              <p className="text-muted-foreground text-sm mt-1">Complete guide to studying MBBS in Georgia</p>
            </Link>
            <Link href="/partner-universities" className="group block p-6 rounded-2xl bg-background border border-border/60 hover:border-accent/50 transition-colors">
              <Building2 className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">All Partner Universities</h3>
              <p className="text-muted-foreground text-sm mt-1">Browse 100+ medical universities worldwide</p>
            </Link>
            <Link href="/apply" className="group block p-6 rounded-2xl bg-background border border-border/60 hover:border-accent/50 transition-colors">
              <FileText className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Apply Now</h3>
              <p className="text-muted-foreground text-sm mt-1">Start your application with GVK EduTech</p>
            </Link>
            <Link href="/contact" className="group block p-6 rounded-2xl bg-background border border-border/60 hover:border-accent/50 transition-colors">
              <Users className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Free Counselling</h3>
              <p className="text-muted-foreground text-sm mt-1">Get expert guidance for your medical career</p>
            </Link>
            <Link href="/about" className="group block p-6 rounded-2xl bg-background border border-border/60 hover:border-accent/50 transition-colors">
              <Award className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">About GVK EduTech</h3>
              <p className="text-muted-foreground text-sm mt-1">Leading education consultancy for MBBS abroad</p>
            </Link>
            <Link href="/" className="group block p-6 rounded-2xl bg-background border border-border/60 hover:border-accent/50 transition-colors">
              <Home className="w-6 h-6 text-accent mb-2" />
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">Homepage</h3>
              <p className="text-muted-foreground text-sm mt-1">Back to GVK EduTech main page</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ───────────────────────────────────── */}
      <section className="py-20 section-dark">
        <div className="container mx-auto px-4 text-center">
          <ColorfulHeading text="Ready to Start Your MBBS Journey at GRUNI?" size="2xl" className="mb-4" />
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of Indian students pursuing affordable, globally recognised medical education in Georgia. Get expert guidance from GVK EduTech.
          </p>
          <Button asChild size="lg" variant="accent">
            <Link href="/apply">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}