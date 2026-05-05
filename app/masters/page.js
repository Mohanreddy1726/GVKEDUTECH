import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, GraduationCap, Globe2, Briefcase, Award, Building2, Lightbulb } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AirplaneDecoration, GraduationCapDecoration, GlobeDecoration, FlightPathDecoration } from "@/components/ThematicDecorations";
import { ColorfulHeading } from "@/components/ColorfulHeading";
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

const mastersCountries = [
  {
    name: "Australia",
    flag: "au",
    link: "/masters/australia",
    monument: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop",
    highlights: ["Post-Study Work Visa", "Top QS Rankings", "Research Focus"],
  },
  {
    name: "United Kingdom",
    flag: "gb",
    link: "/masters/uk",
    monument: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop",
    highlights: ["1-Year Programs", "Global Recognition", "Graduate Route Visa"],
  },
  {
    name: "USA",
    flag: "us",
    link: "/masters/usa",
    monument: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&auto=format&fit=crop",
    highlights: ["OPT/CPT Options", "Ivy League Access", "Research Excellence"],
  },
  {
    name: "Europe",
    flag: "eu",
    link: "/masters/europe",
    monument: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop",
    highlights: ["Schengen Access", "Low/No Tuition", "Cultural Diversity"],
  },
  {
    name: "Germany",
    flag: "de",
    link: "/masters/germany",
    monument: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop",
    highlights: ["Free Education", "Engineering Hub", "Work Permit"],
  },
  {
    name: "Canada",
    flag: "ca",
    link: "/masters/canada",
    monument: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&auto=format&fit=crop",
    highlights: ["PR Pathway", "Co-op Programs", "PGWP Visa"],
  },
  {
    name: "Ireland",
    flag: "ie",
    link: "/masters/ireland",
    monument: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=800&auto=format&fit=crop",
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
      <PageHeader
        title="Study Masters Abroad"
        subtitle="Elevate Your Career with a Global Postgraduate Degree"
        breadcrumb="Masters Abroad"
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
                  {/* Background Monument Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundImage: `url(${country.monument})` }}
                  />

                  <div className="relative p-8 bg-card/90 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`fi fi-${country.flag} text-5xl`}></span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {country.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">Masters Program</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {country.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-primary font-medium">
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
