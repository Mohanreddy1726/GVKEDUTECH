import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { MessageCircle, Phone, Target, Building2, FileText, Shield, Plane, ArrowLeftRight, Globe, Home, Hotel, BarChart3, Wallet, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ─────────────────────────────────────────
   Design tokens
───────────────────────────────────────────*/
const T = {
  navy:       "#0F1B2D",
  navyMid:    "#1A2B42",
  red:        "#C8243A",
  redDark:    "#A01828",
  redLight:   "#F2A0AB",
  surface:    "#F8F9FB",
  surfaceAlt: "#E8EDF5",
  muted:      "#5A7190",
  white:      "#FFFFFF",
};

export const metadata = {
  title: "Study Abroad Services | Complete Admission Support",
  description: "GVK EduTech offers comprehensive services including career counselling, university selection, visa assistance, and pre-departure briefings for MBBS and Masters abroad.",
  keywords: ["education consultancy services", "study abroad services", "visa assistance", "university admission help", "pre-departure briefing"],
  openGraph: {
    title: "GVK EduTech Services",
    description: "Comprehensive support for your study abroad journey - from counselling to visa assistance.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GVK EduTech Services" }],
  },
};

const services = [
  {
    icon: Target,
    title: "Career Counselling",
    description: "Our expert career counsel panel provides a wide range of options from the most reputed universities globally, explaining possibilities with pros and cons.",
    step: "01",
  },
  {
    icon: Building2,
    title: "University Selection",
    description: "Our well-trained counselors guide students in getting selected for the best university based on their academics and individual performance profile.",
    step: "02",
  },
  {
    icon: FileText,
    title: "Application Process",
    description: "From registration to admission confirmation, our international affairs panel handles everything — easing the burden on students and parents at every step.",
    step: "03",
  },
  {
    icon: Shield,
    title: "Visa Assistance",
    description: "Our qualified assistants oversee all visa documentation and personally apply with scrutiny and care, ensuring smooth student transition throughout.",
    step: "04",
  },
  {
    icon: Plane,
    title: "Pre-Departure Briefings",
    description: "Students are briefed on the destination's climate, culture, language, local rules, and academic procedures to ensure confident preparation before departure.",
    step: "05",
  },
  {
    icon: ArrowLeftRight,
    title: "Foreign Exchange",
    description: "GVK EduTech has tie-ups with reputed Forex dealers to ensure our students always receive a highly competitive exchange rate.",
    step: "06",
  },
  {
    icon: Globe,
    title: "Travel Assistance",
    description: "We provide ideal travel dates, flight tickets with selected class options, and make the entire transition completely hassle-free for the student.",
    step: "07",
  },
  {
    icon: Home,
    title: "Post-Departure Assistance",
    description: "GVK EduTech overseas advisors in various countries receive you at airports and ensure you settle down seamlessly in your new environment.",
    step: "08",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description: "We offer on-campus, state-of-the-art hostel facilities completely maintained by Indian staff, ensuring comfort and familiarity away from home.",
    step: "09",
  },
  {
    icon: BarChart3,
    title: "Student Profile Analysis",
    description: "Once the course begins, our management stays in constant touch with parents and students on academics, hostel, and mess facilities until course completion.",
    step: "10",
  },
  {
    icon: Wallet,
    title: "Financial Assistance",
    description: "The complete financial structure is explained transparently with zero hidden obligations. Our regional manager assists with comfortable payment planning.",
    step: "11",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Guidance",
    description: "We assist students throughout the scholarship application and education loan process with thorough documentation and detailed guidance at every step.",
    step: "12",
  },
];

const highlights = [
  "End-to-end admission support",
  "NMC & WHO approved universities",
  "Transparent fee structure",
  "Dedicated post-arrival support",
  "Indian food & hostel facilities",
  "15+ years of expertise",
];

const pageStyles = (
  <style>{`
    .srv-eyebrow {
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
    .srv-eyebrow::before {
      content: '';
      display: block;
      width: 1.5rem;
      height: 2px;
      background: ${T.red};
      border-radius: 2px;
    }
    .srv-rule {
      display: block;
      width: 3rem;
      height: 3px;
      background: linear-gradient(to right, ${T.red}, ${T.redLight});
      border-radius: 2px;
      margin-top: 0.5rem;
    }
    .srv-card {
      background: ${T.white};
      border-radius: 1.125rem;
      border: 1px solid ${T.surfaceAlt};
      padding: 1.75rem;
      position: relative;
      overflow: hidden;
      transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
      height: 100%;
    }
    .srv-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(to right, ${T.red}, ${T.redLight});
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    .srv-card:hover {
      box-shadow: 0 10px 30px rgba(15,27,45,0.1);
      transform: translateY(-3px);
      border-color: ${T.red}33;
    }
    .srv-card:hover::before {
      transform: scaleX(1);
    }
    .srv-icon-wrap {
      width: 3rem;
      height: 3rem;
      border-radius: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.25rem;
      background: ${T.red}12;
      transition: background 0.2s ease;
    }
    .srv-card:hover .srv-icon-wrap {
      background: ${T.red}22;
    }
    .srv-step {
      position: absolute;
      top: 1.25rem;
      right: 1.25rem;
      font-size: 2rem;
      font-weight: 900;
      line-height: 1;
      color: ${T.surfaceAlt};
      user-select: none;
      letter-spacing: -0.03em;
      transition: color 0.25s ease;
    }
    .srv-card:hover .srv-step {
      color: ${T.red}18;
    }
  `}</style>
);

const ServicesPage = () => {
  return (
    <PageLayout>
      {pageStyles}

      <PageHeader
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" }
        ]}
      />

      {/* ── Stats Bar ── */}
      <div style={{ background: T.navy }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "12+",     label: "Services Offered" },
              { value: "5,000+", label: "Students Guided" },
              { value: "15+",    label: "Years Experience" },
              { value: "100%",   label: "Transparency" },
            ].map((s, i) => (
              <div key={i} className="py-5 px-6 text-center">
                <p className="text-2xl font-bold" style={{ color: T.red }}>{s.value}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl">

        {/* ── Introduction ── */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: text */}
            <div>
              <p className="srv-eyebrow">What We Offer</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 leading-tight" style={{ color: T.navyMid }}>
                Everything You Need,<br />
                <span style={{ color: T.red }}>In One Place</span>
              </h2>
              <span className="srv-rule mb-6" />
              <p className="text-base leading-relaxed mb-8" style={{ color: T.muted }}>
                At GVK Edutech, we guide students and parents in making informed decisions about higher
                education, helping them find the right university that aligns with their goals and
                academic profile. With our personalized approach and global expertise, we turn
                aspirations into achievements — one student at a time.
              </p>
              <div className="grid grid-cols-1 gap-2.5">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: T.red }} />
                    <span className="text-sm font-medium" style={{ color: T.navyMid }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: decorative journey steps */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${T.navy}, #1E3558)` }}
            >
              {/* orb */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 pointer-events-none"
                style={{ background: T.red }}
              />
              <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: T.redLight }}>
                Your Journey With Us
              </p>
              {[
                { n: "01", label: "Free Counseling Session" },
                { n: "02", label: "University Shortlisting" },
                { n: "03", label: "Application & Admission" },
                { n: "04", label: "Visa Processing" },
                { n: "05", label: "Pre-Departure Briefing" },
                { n: "06", label: "Arrival & Settlement" },
              ].map((step, i, arr) => (
                <div key={i} className="flex items-start gap-3 relative">
                  <div className="flex flex-col items-center">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: T.red, color: T.white }}
                    >
                      {step.n}
                    </span>
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 my-1" style={{ background: "rgba(255,255,255,0.12)", minHeight: "1.25rem" }} />
                    )}
                  </div>
                  <p
                    className="text-sm font-medium pt-1.5 pb-3"
                    style={{ color: i === 0 ? T.white : "rgba(255,255,255,0.65)" }}
                  >
                    {step.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <p className="srv-eyebrow" style={{ justifyContent: "center" }}>Full Service Suite</p>
            <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
              Our 12 Core Services
            </h2>
            <span className="srv-rule mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 50}>
                <div className="srv-card">
                  {/* Step watermark */}
                  <span className="srv-step">{service.step}</span>

                  {/* Icon */}
                  <div className="srv-icon-wrap">
                    <service.icon className="w-5 h-5" style={{ color: T.red }} />
                  </div>

                  <h3 className="text-base font-bold mb-2" style={{ color: T.navyMid }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${T.navy}, #1E3558)` }}
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: T.red }} />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-5 pointer-events-none"
            style={{ background: T.red }} />

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: T.redLight }}>
              Get Started Today
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
              Get in touch with our expert counselors today for a FREE consultation and take the
              first step toward your dream education abroad.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
                style={{
                  background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                  color: T.white,
                  boxShadow: `0 4px 16px ${T.red}55`,
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Book Free Counseling
              </a>
              <a
                href="tel:+919010060000"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: T.white,
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <Phone className="w-4 h-4" />
                Call: +91 9010060000
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default ServicesPage;