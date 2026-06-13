"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import { ArrowRight, CheckCircle, FileText, Users } from "lucide-react";
import Link from "next/link";

const faqs = [
  { question: "Is Tbilisi State Medical University NMC approved?", answer: "Yes, TSMU is recognized by the National Medical Commission (NMC) of India. Indian students can appear for FMGE/NEXT after completing their MBBS degree." },
  { question: "What is the duration of MBBS at TSMU?", answer: "The MBBS program at TSMU is 6 years (5 years + 1 year internship). This includes clinical rotation and practical training." },
  { question: "Is NEET required for admission?", answer: "Yes, NEET-UG qualification is mandatory for Indian students seeking admission to any medical university abroad, including TSMU." },
  { question: "What is the medium of instruction?", answer: "The entire MBBS course is taught in English. However, students also learn Georgian language for clinical interactions with local patients." },
  { question: "Can I work while studying?", answer: "Students are allowed to work part-time (up to 20 hours/week) in certain jobs. However, the course is demanding and we recommend focusing on studies." },
  { question: "What is the total cost of MBBS at TSMU?", answer: "The total cost including tuition, hostel, and living expenses is approximately USD 45,000-50,000 for 6 years (INR 38-43 lakhs)." },
  { question: "How is the food and accommodation?", answer: "TSMU provides hostels with Indian mess facilities. Vegetarian and non-vegetarian Indian food is available. Rooms are furnished with necessary amenities." },
  { question: "Can I do postgraduate in other countries after TSMU?", answer: "Yes, TSMU degree is globally recognized. Students can pursue PG in USA, UK, Germany, Australia, and other countries after clearing respective exams." }
];

export default function TbilisiStateMedicalUniversityPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Tbilisi State Medical University for Indian Students 2026"
        subtitle="NMC Approved | WHO Recognized | Affordable MBBS in Georgia"
        breadcrumb="Partner Universities"
        backgroundImage="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&auto=format&fit=crop"
      />

      {/* Overview */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-up">
              <ColorfulHeading text="Tbilisi State Medical University (TSMU)" size="3xl" className="mb-4" />
              <p className="text-muted-foreground text-lg mb-6">
                Tbilisi State Medical University (TSMU) is one of the oldest and most prestigious medical universities in Georgia, established in 1919. It is the top choice for Indian students seeking quality MBBS education abroad at affordable fees.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                TSMU is <strong>NMC approved</strong> and <strong>WHO recognized</strong>, making it an ideal destination for Indian medical aspirants. The university has a rich history of over 100 years in medical education and has produced thousands of successful doctors worldwide.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">NMC Approved</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">WHO Listed</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">MCI Recognized</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">English Medium</span>
              </div>
              <div className="flex gap-4">
                <Button asChild size="lg" variant="accent">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get Counseling</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <img
                src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&auto=format&fit=crop"
                alt="Tbilisi State Medical University"
                className="rounded-2xl shadow-2xl w-full"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose TSMU */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Why Choose Tbilisi State Medical University?" size="3xl" className="mb-4" />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "100+ Years of Excellence", desc: "Since 1919, producing world-class medical professionals" },
                { title: "Affordable Fees", desc: "Total MBBS cost around INR 27-30 lakhs (lowest among European universities)" },
                { title: "No Donation/Capitation", desc: "Transparent admission process with no hidden charges" },
                { title: "English Medium", desc: "Complete course taught in English from day one" },
                { title: "Indian Food Available", desc: "Indian mess with veg/non-veg options on campus" },
                { title: "Direct Flights", desc: "Easy travel from India - 6-7 hours by direct flight" },
                { title: "Safe Country", desc: "Georgia is one of the safest countries for international students" },
                { title: "High FMGE Pass Rate", desc: "Excellent coaching for Indian medical licensing exams" }
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Recognition & Approvals" size="3xl" className="mb-4" />
          <div className="max-w-3xl mx-auto mt-12">
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <p className="text-4xl font-bold text-accent">NMC</p>
                    <p className="text-muted-foreground mt-2">India</p>
                    <p className="text-xs text-muted-foreground">National Medical Commission</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent">WHO</p>
                    <p className="text-muted-foreground mt-2">World Health Organization</p>
                    <p className="text-xs text-muted-foreground">Listed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent">#801</p>
                    <p className="text-muted-foreground mt-2">Asia Ranking</p>
                    <p className="text-xs text-muted-foreground">(Times Higher Education)</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-accent">B++</p>
                    <p className="text-muted-foreground mt-2">Grade</p>
                    <p className="text-xs text-muted-foreground">(International)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="MBBS Fees Structure" size="3xl" className="mb-4" />
          <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
            Affordable tuition fees make TSMU one of the most cost-effective options for MBBS abroad.
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20">
              <CardHeader className="bg-accent/10">
                <CardTitle className="text-xl">Fee Structure (2026-2027)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-semibold text-foreground">Particulars</th>
                        <th className="text-right p-4 font-semibold text-foreground">Amount (USD)</th>
                        <th className="text-right p-4 font-semibold text-foreground">Amount (INR)*</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="p-4 text-foreground">1st Year Fees</td>
                        <td className="p-4 text-right text-foreground font-semibold">$8,000</td>
                        <td className="p-4 text-right text-foreground font-semibold">₹6,80,000</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="p-4 text-foreground">2nd-5th Year (per year)</td>
                        <td className="p-4 text-right text-foreground font-semibold">$6,000</td>
                        <td className="p-4 text-right text-foreground font-semibold">₹5,10,000</td>
                      </tr>
                      <tr className="border-b border-border bg-accent/5">
                        <td className="p-4 text-foreground font-bold">Total Fees (6 Years)</td>
                        <td className="p-4 text-right text-foreground font-bold">$32,000</td>
                        <td className="p-4 text-right text-foreground font-bold">₹27,20,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-muted/30 text-sm text-muted-foreground">
                  * Exchange rate: 1 USD = ₹85 (approximate)
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-muted-foreground text-sm">Hostel (Optional)</p>
                  <p className="text-xl font-bold text-foreground">$1,200/year</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-muted-foreground text-sm">Food (Indian Mess)</p>
                  <p className="text-xl font-bold text-foreground">$1,800/year</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <p className="text-muted-foreground text-sm">Living Expenses</p>
                  <p className="text-xl font-bold text-foreground">$2,400/year</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Eligibility Criteria" size="3xl" className="mb-4" />
          <div className="max-w-3xl mx-auto mt-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Basic Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Age</p>
                      <p className="text-muted-foreground">Minimum 17 years old as on 31st December of admission year</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Academic Qualification</p>
                      <p className="text-muted-foreground">Passed 12th standard with minimum 50% marks in Physics, Chemistry, and Biology (40% for SC/ST/OBC categories)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">NEET Qualification</p>
                      <p className="text-muted-foreground">Must have qualified NEET-UG exam (mandatory for Indian students seeking admission abroad)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">English Proficiency</p>
                      <p className="text-muted-foreground">No separate English test required. Medium of instruction is English.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Admission Process" size="3xl" className="mb-4" />
          <p className="text-muted-foreground text-lg mb-12 max-w-3xl">
            Simple and transparent admission process with no entrance exam required.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { step: 1, title: "Submit Application", desc: "Fill the application form with your academic details and scan required documents" },
                { step: 2, title: "Get Admission Letter", desc: "Receive admission letter from TSMU within 7-10 working days" },
                { step: 3, title: "Pay Tuition Fees", desc: "Pay first year fees to confirm your seat and receive official confirmation" },
                { step: 4, title: "Apply for Visa", desc: "Apply for Georgian student visa with university documents" },
                { step: 5, title: "Book Flight & Travel", desc: "Book flight to Tbilisi and get travel assistance from GVK EduTech" },
                { step: 6, title: "University Reporting", desc: "Report to university, complete registration and start classes" }
              ].map((item) => (
                <Card key={item.step} className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm ml-14">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Required Documents" size="3xl" className="mb-4" />
          <div className="max-w-3xl mx-auto mt-12">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Valid Passport (min. 18 months)",
                    "10th Mark Sheet & Certificate",
                    "12th Mark Sheet & Certificate",
                    "NEET Score Card",
                    "Passport Size Photos (10 copies)",
                    "Birth Certificate",
                    "Police Clearance Certificate",
                    "Medical Certificate",
                    "HIV Test Report",
                    "Travel Insurance",
                    "Bank Statement (Father/Guardian)",
                    "Admission Letter (TSMU)"
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <FileText className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hostel Facilities */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Hostel Facilities" size="3xl" className="mb-4" />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <ScrollReveal animation="fade-up">
              <p className="text-muted-foreground text-lg mb-6">
                Tbilisi State Medical University provides comfortable hostel accommodation for international students. The hostels are located within the university campus, ensuring safety and convenience.
              </p>
              <div className="space-y-4">
                {[
                  "Separate hostels for boys and girls",
                  "Fully furnished rooms (2-3 sharing)",
                  "Indian mess with veg/non-veg options",
                  "High-speed WiFi connectivity",
                  "24/7 security and CCTV surveillance",
                  "Laundry facilities",
                  "Hot water and heating",
                  "Study rooms and recreation area",
                  "Medical store on campus",
                  "Transportation facility"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&auto=format&fit=crop"
                  alt="Hostel Room"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&auto=format&fit=crop"
                  alt="Hostel Common Area"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Student Life in Georgia */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Student Life in Georgia" size="3xl" className="mb-4" />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <ScrollReveal animation="fade-up">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&auto=format&fit=crop"
                  alt="Tbilisi City"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&auto=format&fit=crop"
                  alt="Georgia Landscape"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-muted-foreground text-lg mb-6">
                Georgia offers a unique blend of European culture and Asian hospitality, making it an ideal destination for international students. The country is known for its safety, low cost of living, and welcoming attitude towards Indian students.
              </p>
              <div className="space-y-4">
                {[
                  "Safe and secure country for international students",
                  "Low cost of living compared to European countries",
                  "Rich cultural heritage and history",
                  "Beautiful mountains and nature for weekend trips",
                  "Delicious Georgian cuisine (similar to Indian food)",
                  "Easy connectivity to India (direct flights)",
                  "English widely spoken in cities",
                  "Vibrant student community from various countries"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Advantages of Studying at TSMU" size="3xl" className="mb-4" />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "No Entrance Exam", desc: "Admission based on NEET score, no additional entrance test" },
                { title: "No Donation/Capitation", desc: "Transparent process with no hidden fees" },
                { title: "FMGE/NEXT Preparation", desc: "University provides coaching for Indian medical exams" },
                { title: "International Exposure", desc: "Study with students from 50+ countries" },
                { title: "Clinical Rotation", desc: "Hands-on training in affiliated hospitals" },
                { title: "EU Recognition", desc: "Degree recognized across European Union" },
                { title: "Postgraduate Pathways", desc: "Options to pursue PG in USA, UK, Germany, etc." },
                { title: "GVK Support", desc: "Complete visa and travel assistance" }
              ].map((adv, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">{adv.title}</h3>
                    <p className="text-muted-foreground text-sm">{adv.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <ColorfulHeading text="Frequently Asked Questions" size="3xl" className="mb-4" />
          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader className="p-6 pb-0">
                  <CardTitle className="text-lg font-semibold text-foreground flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </span>
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-3">
                  <p className="text-muted-foreground ml-11">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Study at Tbilisi State Medical University?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert counselors can help you with the complete admission process, visa guidance, and travel arrangements.
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
                Get Free Counseling
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-8">Related Pages</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/mbbs/georgia">MBBS in Georgia</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/partner-universities">Partner Universities</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">About GVK EduTech</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}