import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, GraduationCap, Globe2, BadgeCheck, Stethoscope, BookOpen, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StethoscopeDecoration, HeartbeatDecoration, DNADecoration } from "@/components/ThematicDecorations";
import { FAQSchema } from "@/components/SEO";
import "flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: "Study MBBS Abroad - Top Medical Universities | GVK EduTech",
  description: "Explore MBBS abroad programs in Georgia, Russia, Kyrgyzstan, Kazakhstan & more. NMC/WHO approved universities with affordable fees. Start your medical career today.",
  keywords: ["MBBS abroad", "study MBBS abroad", "MBBS in Georgia", "MBBS in Russia", "medical education abroad", "NMC approved MBBS", "cheap MBBS abroad"],
  openGraph: {
    title: "Study MBBS Abroad | GVK EduTech",
    description: "Explore MBBS abroad programs in Georgia, Russia, Kyrgyzstan, Kazakhstan & more. NMC/WHO approved universities.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS Abroad - GVK EduTech" }],
  },
};

const faqs = [
  { question: "What is the duration of MBBS abroad?", answer: "The MBBS program abroad typically lasts 5-6 years including clinical training." },
  { question: "Is MBBS abroad valid in India?", answer: "Yes, degrees from NMC/WHO approved universities are valid in India after clearing the FMGE/NExT exam." },
  { question: "What is the average cost of MBBS abroad?", answer: "The total cost ranges from ₹15-50 lakhs depending on the country and university, which is much lower than private medical colleges in India." },
  { question: "Do I need to qualify NEET for MBBS abroad?", answer: "Yes, qualifying NEET is mandatory for Indian students seeking MBBS admission abroad." },
];

const mbbsCountries = [
  {
    name: "Georgia",
    flag: "ge",
    link: "/mbbs/georgia",
    monument: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&auto=format&fit=crop",
    highlights: ["WHO Recognized", "English Medium", "Low Cost"],
  },
  {
    name: "Kyrgyzstan",
    flag: "kg",
    link: "/mbbs/kyrgyzstan",
    monument: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",
    highlights: ["NMC Approved", "Affordable Fees", "Safe Environment"],
  },
  {
    name: "Russia",
    flag: "ru",
    link: "/mbbs/russia",
    monument: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&auto=format&fit=crop",
    highlights: ["Top Rankings", "Advanced Labs", "Global Recognition"],
  },
  {
    name: "Kazakhstan",
    flag: "kz",
    link: "/mbbs/kazakhstan",
    monument: "https://images.unsplash.com/photo-1625657799852-3d2bd008a050?w=800&auto=format&fit=crop",
    highlights: ["MCI Recognized", "Modern Infrastructure", "Low Tuition"],
  },
  {
    name: "Uzbekistan",
    flag: "uz",
    link: "/mbbs/uzbekistan",
    monument: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",
    highlights: ["Emerging Destination", "Quality Education", "Cultural Heritage"],
  },
  {
    name: "Vietnam",
    flag: "vn",
    link: "/mbbs/vietnam",
    monument: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&auto=format&fit=crop",
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
      />

      {/* Introduction */}
      <section className="py-16 section-light relative overflow-hidden">
        <StethoscopeDecoration className="top-8 right-[5%] w-36 h-36" />
        <HeartbeatDecoration className="bottom-8 left-[3%] w-[220px] h-[60px]" />
        <DNADecoration className="top-4 left-[8%] w-[50px] h-[140px]" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Why Choose <span className="text-accent">MBBS Abroad</span>?
              </h2>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
                Key Benefits of MBBS Abroad
              </h2>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
                Premier Destinations for MBBS
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mbbsCountries.map((country, index) => (
              <ScrollReveal key={country.name} animation="scale" delay={index * 100}>
                <Link
                  href={country.link}
                  className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300 block"
                >
                  {/* Background Monument Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${country.monument})` }}
                  />

                  <div className="relative p-8 bg-card/90 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`fi fi-${country.flag} text-5xl`}></span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {country.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">MBBS Program</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {country.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-accent font-medium">
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
