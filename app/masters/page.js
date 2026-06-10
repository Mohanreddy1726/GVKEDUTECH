import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import {
  ArrowRight, GraduationCap, Globe2, Briefcase,
  Award, Building2, Lightbulb, CheckCircle, PhoneCall, MessageCircle
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQSchema } from "@/components/SEO";
import "flag-icons/css/flag-icons.min.css";

/* ─────────────────────────────────────────
   Design tokens — matches MBBSPage & CountryPageTemplate
───────────────────────────────────────────*/
const T = {
  navy:      "#0F1B2D",
  navyMid:   "#1A2B42",
  red:       "#C8243A",
  redDark:   "#A01828",
  redLight:  "#F2A0AB",
  surface:   "#F8F9FB",
  surfaceAlt:"#E8EDF5",
  muted:     "#5A7190",
  white:     "#FFFFFF",
};

export const metadata = {
  title: "Study Masters Abroad 2026 | Top Universities",
  description: "Pursue Masters abroad in top-ranked US, UK, Australian, German universities. Post-study work visas, scholarships available. Expert admission guidance.",
  keywords: [
    "Masters abroad for Indian students", "study Masters abroad",
    "Masters in USA for Indian students", "Masters in UK for Indian students",
    "Masters in Germany for Indian students", "post-study work visa abroad",
    "Masters in Australia for Indian students", "best universities for Masters abroad",
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
  { question: "What is the average cost of Masters abroad?", answer: "The cost varies by country — UK: £12,000–35,000/year, USA: $20,000–50,000/year, Australia: $20,000–45,000/year, Germany: Free to €1,500/semester." },
  { question: "Are scholarships available for Masters abroad?", answer: "Yes, many universities and governments offer scholarships for international students based on merit or need." },
  { question: "Which countries are best for Masters abroad?", answer: "Popular destinations include UK, USA, Canada, Australia, Germany, Ireland, and New Zealand — each offering unique advantages." },
];

const mastersCountries = [
  { name: "United Kingdom", flag: "gb", link: "/masters/uk",          monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142116267.png?updatedAt=1778748734939",    highlights: ["1-Year Programs", "Global Recognition", "Graduate Route Visa"] },
  { name: "Australia",      flag: "au", link: "/masters/australia",    monument: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&auto=format&fit=crop",                                          highlights: ["Post-Study Work Visa", "Top QS Rankings", "Research Focus"] },
  { name: "USA",            flag: "us", link: "/masters/usa",          monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/85eb56eb-ba7e-4dfa-b0c9-d23f708d5433.png",                       highlights: ["OPT/CPT Options", "Ivy League Access", "Research Excellence"] },
  { name: "Canada",         flag: "ca", link: "/masters/canada",       monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114258828.png?updatedAt=1778825585001",          highlights: ["PR Pathway", "Co-op Programs", "PGWP Visa"] },
  { name: "New Zealand",    flag: "nz", link: "/masters/newzealand",   monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_113045327.png?updatedAt=1778824851891",          highlights: ["Post-Study Work Visa", "Safe Destination", "Work Permit"] },
  { name: "Europe",         flag: "eu", link: "/masters/europe",       monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142139625.png?updatedAt=1778748734818",          highlights: ["Schengen Access", "Low/No Tuition", "Cultural Diversity"] },
  { name: "Germany",        flag: "de", link: "/masters/germany",      monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142156365.png?updatedAt=1778748734891",          highlights: ["Free Education", "Engineering Hub", "Work Permit"] },
  { name: "Ireland",        flag: "ie", link: "/masters/ireland",      monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114053196.png?updatedAt=1778825459744",          highlights: ["Tech Hub", "Stay Back Option", "English Speaking"] },
];

const benefits = [
  { icon: Award,        title: "World-Class Rankings",    description: "Gain admission to prestigious QS-ranked universities offering internationally recognized degrees that open doors to global career opportunities." },
  { icon: Briefcase,    title: "Career Opportunities",    description: "Leverage post-study work visas and exclusive internship opportunities with leading multinational corporations in your field of study." },
  { icon: Globe2,       title: "Global Networking",       description: "Build invaluable international connections and expand your professional network through diverse campus communities and industry collaborations." },
  { icon: GraduationCap,"title":"Scholarship Support",   description: "Receive comprehensive guidance for merit-based scholarships and financial aid options to make your international education more accessible." },
  { icon: Building2,    title: "Industry Exposure",       description: "Learn directly from industry experts through practical, hands-on curricula designed to prepare you for real-world professional challenges." },
  { icon: Lightbulb,    title: "Research Excellence",     description: "Access cutting-edge research facilities and innovation laboratories that drive breakthrough discoveries in your chosen discipline." },
];

const stats = [
  { value: "10,000+", label: "Students Placed" },
  { value: "8",       label: "Countries" },
  { value: "200+",    label: "Partner Universities" },
  { value: "95%",     label: "Visa Success Rate" },
];

const pageStyles = (
  <style>{`
    .masters-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: ${T.red};
      margin-bottom: 0.75rem;
    }
    .masters-eyebrow::before {
      content: '';
      display: block;
      width: 1.5rem;
      height: 2px;
      background: ${T.red};
      border-radius: 2px;
    }
    .masters-rule {
      display: block;
      width: 3rem;
      height: 3px;
      background: linear-gradient(to right, ${T.red}, ${T.redLight});
      border-radius: 2px;
      margin-top: 0.5rem;
    }
    .m-country-card {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      border: 1px solid ${T.surfaceAlt};
      display: block;
      text-decoration: none;
      transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
    }
    .m-country-card:hover {
      border-color: ${T.red}88;
      box-shadow: 0 12px 32px rgba(200,36,58,0.18);
      transform: translateY(-3px);
    }
    .m-country-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 30%,
        rgba(15,27,45,0.55) 65%,
        rgba(15,27,45,0.88) 100%
      );
      pointer-events: none;
    }
    .m-card-arrow { transition: transform 0.2s ease; }
    .m-country-card:hover .m-card-arrow { transform: translateX(4px); }
    .m-benefit-card {
      background: ${T.white};
      border-radius: 1rem;
      border: 1px solid ${T.surfaceAlt};
      border-left: 3px solid transparent;
      padding: 1.5rem;
      height: 100%;
      transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
    }
    .m-benefit-card:hover {
      border-left-color: ${T.red};
      box-shadow: 0 4px 20px rgba(15,27,45,0.08);
    }
    .m-faq-item {
      background: ${T.white};
      border-radius: 0.875rem;
      border: 1px solid ${T.surfaceAlt};
      transition: border-color 0.2s ease;
    }
    .m-faq-item:hover { border-color: ${T.red}44; }
  `}</style>
);

const MastersPage = () => {
  return (
    <PageLayout>
      {pageStyles}
      <FAQSchema faqs={faqs} />

      <PageHeader
        title="Study Masters Abroad"
        subtitle="Elevate Your Career with a Global Postgraduate Degree"
        breadcrumb="Masters Abroad"
        backgroundImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142046960.png?updatedAt=1778748651708"
      />

      {/* ── Stats Bar ── */}
      <div style={{ background: T.navy }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="py-5 px-6 text-center">
                <p className="text-2xl font-bold" style={{ color: T.red }}>{s.value}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Introduction ── */}
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="masters-eyebrow" style={{ justifyContent: "center" }}>
                Why Pursue Masters Abroad?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: T.navyMid }}>
                A Global Degree That<br />
                <span style={{ color: T.red }}>Accelerates Your Career</span>
              </h2>
              <span className="masters-rule mx-auto" />
              <p className="mt-6 text-base leading-relaxed" style={{ color: T.muted }}>
                A Master's degree from a distinguished international university unlocks unparalleled
                global career opportunities, enhanced earning potential, and accelerated professional
                advancement. Experience world-class academic instruction, immerse yourself in diverse
                cultures, and engage with state-of-the-art research facilities. GVK Edutech delivers
                end-to-end support — from strategic university selection to visa processing and seamless
                settlement assistance in your destination country.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="masters-eyebrow" style={{ justifyContent: "center" }}>Advantages</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Transformative Benefits of Masters Abroad
              </h2>
              <span className="masters-rule mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 70}>
                <div className="m-benefit-card">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: T.red + "14" }}
                  >
                    <benefit.icon className="w-6 h-6" style={{ color: T.red }} />
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: T.navyMid }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Countries ── */}
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="masters-eyebrow" style={{ justifyContent: "center" }}>Destinations</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Premier Destinations for Masters
              </h2>
              <span className="masters-rule mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mastersCountries.map((country, index) => (
              <ScrollReveal key={country.name} animation="scale" delay={index * 80}>
                <Link href={country.link} className="m-country-card">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${country.monument})` }}
                  />

                  {/* Content above the ::after gradient */}
                  <div className="relative z-10 p-6 pt-28 min-h-[280px] flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`fi fi-${country.flag}`}
                        style={{
                          fontSize: "2.25rem",
                          lineHeight: 1,
                          filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))",
                        }}
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {country.name}
                        </h3>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                          Masters Program
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {country.highlights.map((h, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.15)",
                            color: "#fff",
                            backdropFilter: "blur(4px)",
                            border: "1px solid rgba(255,255,255,0.2)",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: T.redLight }}
                    >
                      Explore Program
                      <ArrowRight className="w-4 h-4 m-card-arrow" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <div style={{ background: T.surfaceAlt, borderTop: `1px solid ${T.surfaceAlt}` }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "QS-Ranked Universities",
              "Post-Study Work Visas",
              "Scholarship Guidance",
              "IELTS/GRE Support",
              "Free Counseling",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: T.red }} />
                <span className="text-sm font-medium" style={{ color: T.navyMid }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <p className="masters-eyebrow" style={{ justifyContent: "center" }}>Support</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Frequently Asked Questions
              </h2>
              <span className="masters-rule mx-auto" />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 50}>
                <div className="m-faq-item">
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                        style={{ background: T.red + "18", color: T.red }}
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-semibold text-sm" style={{ color: T.navyMid }}>
                        {faq.question}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed pl-9" style={{ color: T.muted }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)` }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: T.red }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: T.red }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal animation="fade-up">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: T.redLight }}
            >
              Your Future Awaits
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Career?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Connect with our expert counselors for personalized guidance. We have successfully
              assisted thousands of students in securing admissions to the world's most prestigious universities.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                  color: "#fff",
                  boxShadow: `0 4px 16px ${T.red}55`,
                }}
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://api.whatsapp.com/send/?phone=918886661877&text=Hello%2C+I+am+interested+in+Masters+abroad.+Please+guide+me."
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Book Free Counseling
              </a>

              <a
                href="tel:+918886661877"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <PhoneCall className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default MastersPage;