import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, GraduationCap, Globe2, Briefcase, Award, Building2, Lightbulb } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AirplaneDecoration, GraduationCapDecoration, GlobeDecoration, FlightPathDecoration } from "@/components/ThematicDecorations";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import { FAQSchema } from "@/components/SEO";
import "flag-icons/css/flag-icons.min.css";

export const metadata = {
  title: "Study Masters Abroad 2026 | Top Universities in USA, UK, Australia, Germany",
  description: "Pursue Masters abroad in top-ranked US, UK, Australian, German universities. Post-study work visas, scholarships available. Expert admission guidance.",
  keywords: [
    "Masters abroad for Indian students",
    "study Masters abroad",
    "Masters in USA for Indian students",
    "Masters in UK for Indian students",
    "Masters in Germany for Indian students",
    "post-study work visa abroad",
    "Masters in Australia for Indian students",
    "best universities for Masters abroad",
    "Masters scholarship abroad",
  ],
  openGraph: {
    title: "Study Masters Abroad 2026 | Top Universities | GVK EduTech",
    description: "Pursue Masters abroad in top-ranked USA, UK, Australia, Germany universities. Post-study work visas, scholarships available.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters Abroad - GVK EduTech" }],
    updated_time: new Date().toISOString(),
  },
};

const faqs = [
  { question: "What is the duration of Masters abroad?", answer: "Most Masters programs abroad take 1-2 years to complete, depending on the country and course type." },
  { question: "What are the requirements for Masters abroad?", answer: "Requirements typically include a Bachelor's degree, English proficiency test scores (IELTS/TOEFL), SOP, LOR, and sometimes GMAT/GRE." },
  { question: "Can I work while studying Masters abroad?", answer: "Yes, most countries allow part-time work during studies. Post-study work visas also let you work after graduation." },
  { question: "What is the average cost of Masters abroad?", answer: "The cost varies by country - UK: £12,000-35,000/year, USA: $20,000-50,000/year, Australia: $20,000-45,000/year, Germany: Free to €1,500/semester." },
  { question: "Are scholarships available for Masters abroad?", answer: "Yes, many universities and governments offer scholarships for international students based on merit or need." },
  { question: "Which countries are best for Masters abroad?", answer: "Popular destinations include UK, USA, Canada, Australia, Germany, Ireland, and New Zealand - each offering unique advantages." },
];

const mastersCountries = [
  {
    name: "United Kingdom",
    flag: "gb",
    link: "/masters/uk",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142116267.png?updatedAt=1778748734939",
    highlights: ["1-Year Programs", "Global Recognition", "Graduate Route Visa"],
  },
  {
    name: "Australia",
    flag: "au",
    link: "/masters/australia",
    monument: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&auto=format&fit=crop",
    highlights: ["Post-Study Work Visa", "Top QS Rankings", "Research Focus"],
  },
  {
    name: "USA",
    flag: "us",
    link: "/masters/usa",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/85eb56eb-ba7e-4dfa-b0c9-d23f708d5433.png",
    highlights: ["OPT/CPT Options", "Ivy League Access", "Research Excellence"],
  },
  {
    name: "Canada",
    flag: "ca",
    link: "/masters/canada",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114258828.png?updatedAt=1778825585001",
    highlights: ["PR Pathway", "Co-op Programs", "PGWP Visa"],
  },
  {
    name: "New Zealand",
    flag: "nz",
    link: "/masters/newzealand",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_113045327.png?updatedAt=1778824851891",
    highlights: ["Post-Study Work Visa", "Safe Destination", "Work Permit"],
  },
  {
    name: "Europe",
    flag: "eu",
    link: "/masters/europe",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142139625.png?updatedAt=1778748734818",
    highlights: ["Schengen Access", "Low/No Tuition", "Cultural Diversity"],
  },
  {
    name: "Germany",
    flag: "de",
    link: "/masters/germany",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142156365.png?updatedAt=1778748734891",
    highlights: ["Free Education", "Engineering Hub", "Work Permit"],
  },
  {
    name: "Ireland",
    flag: "ie",
    link: "/masters/ireland",
    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114053196.png?updatedAt=1778825459744",
    highlights: ["Tech Hub", "Stay Back Option", "English Speaking"],
  },
];

const benefits = [
  {
    icon: Award,
    title: "World-Class Rankings",
    description: "Gain admission to prestigious QS-ranked universities offering internationally recognized degrees that open doors to global career opportunities.",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Leverage post-study work visas and exclusive internship opportunities with leading multinational corporations in your field of study.",
  },
  {
    icon: Globe2,
    title: "Global Networking",
    description: "Build invaluable international connections and expand your professional network through diverse campus communities and industry collaborations.",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Support",
    description: "Receive comprehensive guidance for merit-based scholarships and financial aid options to make your international education more accessible.",
  },
  {
    icon: Building2,
    title: "Industry Exposure",
    description: "Learn directly from industry experts through practical, hands-on curricula designed to prepare you for real-world professional challenges.",
  },
  {
    icon: Lightbulb,
    title: "Research Excellence",
    description: "Access cutting-edge research facilities and innovation laboratories that drive breakthrough discoveries in your chosen discipline.",
  },
];

const MastersPage = () => {
  return (
    <PageLayout>
      <FAQSchema faqs={faqs} />
      <PageHeader
        title="Study Masters Abroad"
        subtitle="Elevate Your Career with a Global Postgraduate Degree"
        breadcrumb="Masters Abroad"
        backgroundImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142046960.png?updatedAt=1778748651708"
      />

      {/* Introduction */}
      <section className="py-16 section-light relative overflow-hidden">
        <AirplaneDecoration className="top-10 right-[6%] w-20 h-20" />
        <GlobeDecoration className="bottom-8 left-[4%] w-28 h-28" />
        <FlightPathDecoration className="top-16 left-[15%] w-[280px] h-[90px]" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <ColorfulHeading
                text="Why Pursue Masters Abroad?"
                className="text-primary"
              />
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Master's degree from a distinguished international university unlocks unparalleled
                global career opportunities, enhanced earning potential, and accelerated professional
                advancement. Experience world-class academic instruction, immerse yourself in diverse
                cultures, and engage with state-of-the-art research facilities. GVK Edutech delivers
                end-to-end support—from strategic university selection to visa processing and seamless
                settlement assistance in your destination country.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-card relative overflow-hidden">
        <GraduationCapDecoration className="top-10 right-[4%] w-28 h-28" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Advantages
              </span>
              <ColorfulHeading
                text="Transformative Benefits of Masters Abroad"
                className="mt-2"
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className="bg-background p-6 rounded-2xl border border-border hover:border-primary transition-all duration-300 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-7 h-7 text-primary" />
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
        <AirplaneDecoration className="bottom-12 left-[4%] w-16 h-16 rotate-12" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Destinations
              </span>
              <ColorfulHeading
                text="Premier Destinations for Masters"
                className="mt-2"
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mastersCountries.map((country, index) => (
              <ScrollReveal key={country.name} animation="scale" delay={index * 100}>
                <Link
                  href={country.link}
                  className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary transition-all duration-300 block"
                >
                  {/* Banner Monument Image */}
                  <div
                    className="absolute inset-0 bg-cover"
                    style={{
                      backgroundImage: `url(${country.monument})`,
                      filter: 'brightness(1.1)',
                    }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-black/5" />

                  <div className="relative p-8 pt-24 min-h-[280px] flex flex-col justify-end">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`fi fi-${country.flag} text-5xl`}></span>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                          {country.name}
                        </h3>
                        <p className="text-sm text-white/70">Masters Program</p>
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
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Connect with our expert counselors for personalized guidance. We have successfully
              assisted thousands of students in securing admissions to the world's most prestigious universities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="group">
                <Link href="/apply">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+Masters+abroad.+Please+guide+me.">
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

export default MastersPage;
