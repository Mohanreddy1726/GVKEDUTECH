import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import {
  ArrowRight, GraduationCap, Globe2, BadgeCheck,
  Stethoscope, BookOpen, Users, CheckCircle, PhoneCall, MessageCircle
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FAQSchema } from "@/components/SEO";
import "flag-icons/css/flag-icons.min.css";

/* ─────────────────────────────────────────
   Design tokens — matches CountryPageTemplate
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
  title: "Study MBBS Abroad 2026 | Top Medical Universities",
  description: "Study MBBS abroad in top NMC/WHO approved universities. Low fees in Russia, Georgia, Kyrgyzstan, Kazakhstan. 5000+ Indian doctors placed. Free counseling.",
  keywords: [
    "MBBS abroad for Indian students", "study MBBS abroad",
    "MBBS in Russia for Indian students", "MBBS in Georgia for Indian students",
    "MBBS in Kyrgyzstan for Indian students", "low cost MBBS abroad",
    "NMC approved MBBS abroad", "medical education abroad",
    "MBBS abroad eligibility", "NEET qualified MBBS abroad",
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
  { name: "Kazakhstan", flag: "kz", link: "/mbbs/kazakhstan", monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114652294.png?updatedAt=1778825819983", highlights: ["MCI Recognized", "Modern Infrastructure", "Low Tuition"] },
  { name: "Kyrgyzstan", flag: "kg", link: "/mbbs/kyrgyzstan", monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142254461.png?updatedAt=1778748810723", highlights: ["NMC Approved", "Affordable Fees", "Safe Environment"] },
  { name: "Russia",     flag: "ru", link: "/mbbs/russia",     monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142244856.png?updatedAt=1778748810968", highlights: ["Top Rankings", "Advanced Labs", "Global Recognition"] },
  { name: "Georgia",    flag: "ge", link: "/mbbs/georgia",    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142235537.png?updatedAt=1778748810531", highlights: ["WHO Recognized", "English Medium", "Low Cost"] },
  { name: "Uzbekistan", flag: "uz", link: "/mbbs/uzbekistan", monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114749638.png?updatedAt=1778825875602", highlights: ["Emerging Destination", "Quality Education", "Cultural Heritage"] },
  { name: "Nepal",      flag: "np", link: "/mbbs/nepal",      monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142225739.png?updatedAt=1778748808091", highlights: ["NMC Approved", "Cultural Proximity", "Affordable"] },
  { name: "Vietnam",    flag: "vn", link: "/mbbs/vietnam",    monument: "https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114910639.png?updatedAt=1778825958215", highlights: ["WHO Listed", "Clinical Exposure", "Tropical Medicine"] },
];

const benefits = [
  { icon: BadgeCheck,   title: "NMC/WHO Approved",    description: "All partnered universities hold official recognition from India's National Medical Commission and the World Health Organization, ensuring your degree is valid for global medical practice." },
  { icon: BookOpen,     title: "English Medium",       description: "The complete MBBS curriculum is delivered in English by internationally trained faculty, eliminating language barriers and ensuring comprehensive understanding." },
  { icon: Globe2,       title: "No Donation",          description: "Pursue your medical education without the burden of hidden donations or capitation fees—transparent, affordable, and merit-based admissions guaranteed." },
  { icon: GraduationCap,"title": "Direct Admission",  description: "Experience a streamlined admission process with minimal documentation requirements and dedicated support from application to enrollment." },
  { icon: Stethoscope,  title: "Clinical Training",    description: "Gain invaluable hands-on clinical experience in government hospitals from the early years of your medical education, preparing you for real-world practice." },
  { icon: Users,        title: "Indian Food & Support",description: "Enjoy the comfort of Indian mess facilities and round-the-clock student support services at all our partnered universities abroad." },
];

const stats = [
  { value: "5,000+", label: "Students Placed" },
  { value: "7",      label: "Countries" },
  { value: "15+",    label: "Years Experience" },
  { value: "50+",    label: "Partner Universities" },
];

/* ─── Inline style helpers ─── */
const sectionLabel = (
  <style>{`
    .mbbs-section-eyebrow {
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
    .mbbs-section-eyebrow::before {
      content: '';
      display: block;
      width: 1.5rem;
      height: 2px;
      background: ${T.red};
      border-radius: 2px;
    }
    .mbbs-gold-rule {
      display: block;
      width: 3rem;
      height: 3px;
      background: linear-gradient(to right, ${T.red}, ${T.redLight});
      border-radius: 2px;
      margin-top: 0.5rem;
    }
    .country-card {
      position: relative;
      overflow: hidden;
      border-radius: 1rem;
      border: 1px solid ${T.surfaceAlt};
      display: block;
      transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
      text-decoration: none;
    }
    .country-card:hover {
      border-color: ${T.red}88;
      box-shadow: 0 12px 32px rgba(200,36,58,0.18);
      transform: translateY(-3px);
    }
    .country-card::after {
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
    .country-card:hover .card-arrow {
      transform: translateX(4px);
    }
    .card-arrow {
      transition: transform 0.2s ease;
    }
    .benefit-card {
      background: ${T.white};
      border-radius: 1rem;
      border: 1px solid ${T.surfaceAlt};
      border-left: 3px solid transparent;
      padding: 1.5rem;
      transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
      height: 100%;
    }
    .benefit-card:hover {
      border-left-color: ${T.red};
      box-shadow: 0 4px 20px rgba(15,27,45,0.08);
    }
    .faq-item {
      background: ${T.white};
      border-radius: 0.875rem;
      border: 1px solid ${T.surfaceAlt};
      overflow: hidden;
      transition: border-color 0.2s ease;
    }
    .faq-item:hover {
      border-color: ${T.red}44;
    }
  `}</style>
);

const MBBSPage = () => {
  return (
    <PageLayout>
      {sectionLabel}
      <FAQSchema faqs={faqs} />

      <PageHeader
        title="Study MBBS Abroad"
        subtitle="Your Gateway to a World-Class Medical Education"
        breadcrumb="MBBS Abroad"
        backgroundImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/mbbs.png?updatedAt=1778841973678"
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
              <p className="mbbs-section-eyebrow mx-auto" style={{ justifyContent: "center" }}>
                Why Choose MBBS Abroad?
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: T.navyMid }}>
                A Smarter Path to<br />
                <span style={{ color: T.red }}>Becoming a Doctor</span>
              </h2>
              <span className="mbbs-gold-rule mx-auto" />
              <p className="mt-6 text-base leading-relaxed" style={{ color: T.muted }}>
                Pursuing an MBBS degree abroad gives you access to exceptional medical education at a
                fraction of the cost of private colleges in India. With internationally recognized degrees,
                state-of-the-art infrastructure, and deep clinical exposure, studying medicine overseas is a
                strategic investment in your future. GVK Edutech supports you end-to-end — from university
                selection to visa processing and post-arrival assistance.
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
              <p className="mbbs-section-eyebrow mx-auto" style={{ justifyContent: "center" }}>Advantages</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Key Benefits of MBBS Abroad
              </h2>
              <span className="mbbs-gold-rule mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 70}>
                <div className="benefit-card">
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
              <p className="mbbs-section-eyebrow mx-auto" style={{ justifyContent: "center" }}>Destinations</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Premier Destinations for MBBS
              </h2>
              <span className="mbbs-gold-rule mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mbbsCountries.map((country, index) => (
              <ScrollReveal key={country.name} animation="scale" delay={index * 80}>
                <Link href={country.link} className="country-card">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${country.monument})`,
                      transform: country.name === "Russia" ? "scale(1.02) translateY(-10px)" : "none",
                    }}
                  />

                  {/* Content sits above the ::after overlay */}
                  <div className="relative z-10 p-6 pt-28 min-h-[280px] flex flex-col justify-end">
                    {/* Flag + name */}
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
                          MBBS Program
                        </p>
                      </div>
                    </div>

                    {/* Highlight pills */}
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

                    {/* Explore link */}
                    <div
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: T.redLight }}
                    >
                      Explore Program
                      <ArrowRight className="w-4 h-4 card-arrow" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div style={{ background: T.surfaceAlt, borderTop: `1px solid ${T.surfaceAlt}` }}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "NMC / WHO Approved Universities",
              "No Hidden Fees",
              "NEET Qualified Admissions",
              "English Medium Programs",
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
              <p className="mbbs-section-eyebrow mx-auto" style={{ justifyContent: "center" }}>Support</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Frequently Asked Questions
              </h2>
              <span className="mbbs-gold-rule mx-auto" />
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 50}>
                <div className="faq-item">
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
        {/* decorative orbs */}
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
              Ready to Begin Your Medical Career?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Connect with our experienced counselors for personalized guidance. We have successfully
              mentored over 5,000 students in realizing their dream of becoming medical professionals.
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
                href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+MBBS+abroad.+Please+guide+me."
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
                href="tel:+919010060000"
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

export default MBBSPage;