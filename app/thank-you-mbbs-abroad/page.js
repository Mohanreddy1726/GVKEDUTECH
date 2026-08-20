import { PageLayout } from "@/components/PageLayout";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  PhoneCall,
  MessageCircle,
  Sparkles,
  Clock,
  BadgeCheck,
} from "lucide-react";

export const metadata = {
  title: "Thank You | GVK EduTech MBBS Abroad",
  description:
    "Thank you for your interest in MBBS abroad with GVK EduTech. Our counsellor will contact you within 24 hours with a personalised MBBS plan.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const T = {
  navy: "#0F1B2D",
  red: "#C8243A",
  redDark: "#A01828",
  redLight: "#F2A0AB",
  white: "#FFFFFF",
  surface: "#F8F9FB",
  surfaceAlt: "#E8EDF5",
  muted: "#5A7190",
};

const ThankYouMBBSAbroadPage = () => {
  return (
    <PageLayout>
      <style>{`
        .ty-card {
          background: ${T.white};
          border: 1px solid ${T.surfaceAlt};
        }
        .ty-next-step {
          background: ${T.surface};
          border: 1px solid ${T.surfaceAlt};
          border-left: 3px solid ${T.red};
        }
      `}</style>

      <section
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)` }}
      >
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: T.red, opacity: 0.12, filter: "blur(40px)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: T.red, opacity: 0.08, filter: "blur(60px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container mx-auto px-4 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{
                background: T.red + "22",
                border: `1px solid ${T.red}55`,
              }}
            >
              <CheckCircle className="w-10 h-10" style={{ color: T.redLight }} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
              style={{ background: T.red + "22", color: T.redLight, border: `1px solid ${T.red}44` }}>
              <Sparkles className="w-3.5 h-3.5" />
              Submission Received
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Thank You<span style={{ color: T.redLight }}>!</span>
            </h1>

            <p className="text-lg lg:text-xl max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
              Your enquiry for MBBS abroad has been received. Our counsellor will
              call you within <strong className="text-white">24 hours</strong> with
              a personalised MBBS plan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-8 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" style={{ color: T.redLight }} />
                Reply within 24 hours
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" style={{ color: T.redLight }} />
                100% Free Counselling
              </span>
              <span className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" style={{ color: T.redLight }} />
                No Spam Calls
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: T.red }}
              >
                What Happens Next
              </p>
              <h2 className="text-3xl font-bold" style={{ color: T.navy }}>
                3 Simple Next Steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  n: "1",
                  t: "Profile Review",
                  d: "Our expert reviews your 12th marks, NEET score, and budget.",
                },
                {
                  n: "2",
                  t: "Counsellor Call",
                  d: "You'll receive a call within 24 hours to discuss your shortlist.",
                },
                {
                  n: "3",
                  t: "University Plan",
                  d: "Get a personalised country & university recommendation.",
                },
              ].map((s) => (
                <div key={s.n} className="ty-next-step rounded-2xl p-6 text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-base font-bold"
                    style={{ background: T.red, color: T.white }}
                  >
                    {s.n}
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ color: T.navy }}>
                    {s.t}
                  </h3>
                  <p className="text-sm" style={{ color: T.muted }}>
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto ty-card rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2" style={{ color: T.navy }}>
              Need to Talk Now?
            </h3>
            <p className="text-sm mb-6" style={{ color: T.muted }}>
              Reach our MBBS abroad counsellors directly on call or WhatsApp.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+just+submitted+the+MBBS+abroad+form.+Please+guide+me."
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                  color: T.white,
                  boxShadow: `0 4px 16px ${T.red}55`,
                }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
              <a
                href="tel:+919010060000"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  background: "transparent",
                  color: T.navy,
                  border: `1px solid ${T.surfaceAlt}`,
                }}
              >
                <PhoneCall className="w-4 h-4" />
                +91 90100 60000
              </a>
            </div>

            <div className="mt-8">
              <Link
                href="/mbbs-abroad"
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: T.red }}
              >
                ← Back to MBBS Abroad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ThankYouMBBSAbroadPage;
