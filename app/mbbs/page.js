import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, GraduationCap, Globe2, BadgeCheck, Stethoscope, BookOpen, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StethoscopeDecoration, HeartbeatDecoration, DNADecoration } from "@/components/ThematicDecorations";
import { FAQSchema, ArticleSchema } from "@/components/SEO";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import "flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: "Study MBBS Abroad 2026 | Top Medical Universities in Russia, Georgia, Kyrgyzstan",
  description: "Study MBBS abroad in top NMC/WHO approved universities. Low fees in Russia, Georgia, Kyrgyzstan, Kazakhstan. 5000+ Indian doctors placed. Free counseling.",
  keywords: [
    "MBBS abroad for Indian students",
    "study MBBS abroad",
    "MBBS in Russia for Indian students",
    "MBBS in Georgia for Indian students",
    "MBBS in Kyrgyzstan for Indian students",
    "low cost MBBS abroad",
    "NMC approved MBBS abroad",
    "medical education abroad",
    "MBBS abroad eligibility",
    "NEET qualified MBBS abroad",
  ],
  openGraph: {
    title: "Study MBBS Abroad 2026 | Top Medical Universities | GVK EduTech",
    description: "Study MBBS abroad at NMC/WHO approved universities in Russia, Georgia, Kyrgyzstan. Low fees, no donation, English medium.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS Abroad - GVK EduTech" }],
    updated_time: new Date().toISOString(),
  },
};

const faqs = [
  { question: "What is the duration of MBBS abroad?", answer: "The MBBS program abroad typically lasts 5-6 years including clinical training." },
  { question: "Is MBBS abroad valid in India?", answer: "Yes, degrees from NMC/WHO approved universities are valid in India after clearing the FMGE/NExT exam." },
  { question: "What is the average cost of MBBS abroad?", answer: "The total cost ranges from ₹15-50 lakhs depending on the country and university, which is much lower than private medical colleges in India." },
  { question: "Do I need to qualify NEET for MBBS abroad?", answer: "Yes, qualifying NEET is mandatory for Indian students seeking MBBS admission abroad." },
  { question: "Are MBBS abroad programs taught in English?", answer: "Yes, all our partnered universities offer MBBS programs entirely in English medium for international students." },
  { question: "What is the eligibility criteria for MBBS abroad?", answer: "Indian students must have scored 50% in PCB in 12th grade (40% for reserved categories) and qualified NEET to be eligible for MBBS abroad." },
];

const mbbsCountries = [
  {
    name: "Nepal",
    flag: "np",
    link: "/mbbs/nepal",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142225739.png?updatedAt=1778748808091",
    highlights: ["NMC Approved", "Cultural Proximity", "Affordable"],
  },
  {
    name: "Georgia",
    flag: "ge",
    link: "/mbbs/georgia",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142235537.png?updatedAt=1778748810531",
    highlights: ["WHO Recognized", "English Medium", "Low Cost"],
  },
  {
    name: "Kyrgyzstan",
    flag: "kg",
    link: "/mbbs/kyrgyzstan",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142254461.png?updatedAt=1778748810723",
    highlights: ["NMC Approved", "Affordable Fees", "Safe Environment"],
  },
  {
    name: "Russia",
    flag: "ru",
    link: "/mbbs/russia",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142244856.png?updatedAt=1778748810968",
    highlights: ["Top Rankings", "Advanced Labs", "Global Recognition"],
  },
  {
    name: "Kazakhstan",
    flag: "kz",
    link: "/mbbs/kazakhstan",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114652294.png?updatedAt=1778825819983",
    highlights: ["MCI Recognized", "Modern Infrastructure", "Low Tuition"],
  },
  {
    name: "Uzbekistan",
    flag: "uz",
    link: "/mbbs/uzbekistan",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114749638.png?updatedAt=1778825875602",
    highlights: ["Emerging Destination", "Quality Education", "Cultural Heritage"],
  },
  {
    name: "Vietnam",
    flag: "vn",
    link: "/mbbs/vietnam",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114910639.png?updatedAt=1778825958215",
    highlights: ["WHO Listed", "Clinical Exposure", "Tropical Medicine"],
  },
];

const benefits = [
  {
    icon: BadgeCheck,
    title: "NMC/WHO Approved",
    description: "All partnered universities hold official recognition from India's National Medical Commission and the World Health Organization, ensuring your degree is valid for global medical practice.",
  },
  {
    icon: BookOpen,
    title: "English Medium",
    description: "The complete MBBS curriculum is delivered in English by internationally trained faculty, eliminating language barriers and ensuring comprehensive understanding.",
  },
  {
    icon: Globe2,
    title: "No Donation",
    description: "Pursue your medical education without the burden of hidden donations or capitation fees—transparent, affordable, and merit-based admissions guaranteed.",
  },
  {
    icon: GraduationCap,
    title: "Direct Admission",
    description: "Experience a streamlined admission process with minimal documentation requirements and dedicated support from application to enrollment.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Training",
    description: "Gain invaluable hands-on clinical experience in government hospitals from the early years of your medical education, preparing you for real-world practice.",
  },
  {
    icon: Users,
    title: "Indian Food & Support",
    description: "Enjoy the comfort of Indian mess facilities and round-the-clock student support services at all our partnered universities abroad.",
  },
];

const MBBSPage = () => {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <PageHeader
        title="Study MBBS Abroad"
        subtitle="Your Gateway to a World-Class Medical Education"
        breadcrumb="MBBS Abroad"
        backgroundImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142208533.png?updatedAt=1778748733612"
      />

      {/* Introduction */}
      <section className="py-16 section-light relative overflow-hidden">
        <StethoscopeDecoration className="top-8 right-[5%] w-36 h-36" />
        <HeartbeatDecoration className="bottom-8 left-[3%] w-[220px] h-[60px]" />
        <DNADecoration className="top-4 left-[8%] w-[50px] h-[140px]" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <ColorfulHeading text="Why Choose MBBS Abroad?" size="3xl" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pursuing an MBBS degree abroad provides access to exceptional medical education at a fraction
                of the cost compared to private institutions in India. With internationally recognized degrees,
                state-of-the-art infrastructure, and extensive clinical exposure, studying medicine overseas
                represents a strategic investment in your future. GVK Edutech offers comprehensive support
                throughout your journey—from selecting the ideal university to visa processing and seamless
                post-arrival assistance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                Advantages
              </span>
              <ColorfulHeading text="Key Benefits of MBBS Abroad" className="mt-2" size="3xl" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="bg-background p-6 rounded-2xl border border-border hover:border-accent transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 section-light relative overflow-hidden">
        <StethoscopeDecoration className="bottom-10 right-[3%] w-24 h-24" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                Destinations
              </span>
              <ColorfulHeading text="Premier Destinations for MBBS" className="mt-2" size="3xl" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mbbsCountries.map((country, index) => (
              <ScrollReveal key={country.name} animation="scale" delay={index * 100}>
                <Link
                  href={country.link}
                  className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300 block"
                >
                  {/* Banner Monument Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${country.monument})`,
                      filter: 'brightness(1.1)',
                      transform: country.name === 'Russia' ? 'scale(1.02) translateY(-10px)' : 'none'
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/5" />

                  <div className="relative p-8 pt-24 min-h-[280px] flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`fi fi-${country.flag} text-5xl`}></span>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                          {country.name}
                        </h3>
                        <p className="text-sm text-white/70">MBBS Program</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {country.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-white/20 text-white backdrop-blur-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-white font-medium">
                      Explore Program
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-accent/80">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Begin Your Medical Career?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Connect with our experienced counselors for personalized guidance. We have successfully
              mentored over 5,000 students in realizing their dream of becoming medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="group">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" className="bg-white text-accent hover:bg-white/90 font-semibold">
                <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+MBBS+abroad.+Please+guide+me.">
                  Book Free Counseling
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default MBBSPage;
