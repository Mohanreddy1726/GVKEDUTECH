"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle, Phone, CheckCircle, GraduationCap,
  Building, PhoneCall, ExternalLink, ChevronDown, ChevronUp,
  MapPin, Clock, BookOpen, Award, Users, TrendingUp, Globe
} from "lucide-react";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import { getUniversityLogo } from "@/data/universityLogos";

/* ─────────────────────────────────────────────
   Design tokens (override via globals.css if desired)
───────────────────────────────────────────── */
const T = {
  navy:    "#0F1B2D",
  navyMid: "#1A2B42",
  gold:    "#C8243A",   // rich crimson red
  goldLight: "#F2A0AB", // soft rose tint
  surface: "#F8F9FB",
  surfaceAlt: "#E8EDF5",
  muted:   "#5A7190",
  white:   "#FFFFFF",
};

/* ─── Reusable primitives ─── */

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span
      className="text-xs font-semibold uppercase tracking-widest"
      style={{ color: T.gold }}
    >
      {children}
    </span>
    <span
      className="flex-1 h-px"
      style={{ background: `linear-gradient(to right, ${T.gold}55, transparent)` }}
    />
  </div>
);

const GoldHeading = ({ children, size = "2xl", center = false }) => (
  <h2
    className={`font-bold mb-6 leading-tight ${center ? "text-center" : ""} text-${size}`}
    style={{ color: T.navyMid }}
  >
    {children}
    <span
      className="block mt-1"
      style={{
        width: center ? "4rem" : "3rem",
        height: "3px",
        background: `linear-gradient(to right, ${T.gold}, ${T.goldLight})`,
        borderRadius: "2px",
        margin: center ? "0.5rem auto 0" : "0.5rem 0 0",
      }}
    />
  </h2>
);

const ElevatedCard = ({ children, className = "", hover = true }) => (
  <div
    className={`bg-white rounded-2xl ${className}`}
    style={{
      boxShadow: "0 2px 8px rgba(15,27,45,0.07), 0 1px 2px rgba(15,27,45,0.04)",
      transition: "box-shadow 0.2s ease, transform 0.2s ease",
    }}
    onMouseEnter={e => hover && Object.assign(e.currentTarget.style, {
      boxShadow: "0 8px 24px rgba(15,27,45,0.12), 0 2px 6px rgba(15,27,45,0.06)",
      transform: "translateY(-2px)",
    })}
    onMouseLeave={e => hover && Object.assign(e.currentTarget.style, {
      boxShadow: "0 2px 8px rgba(15,27,45,0.07), 0 1px 2px rgba(15,27,45,0.04)",
      transform: "translateY(0)",
    })}
  >
    {children}
  </div>
);

/* ─── FAQ Accordion ─── */
const FAQItem = ({ question, answer, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <ElevatedCard hover={false}>
      <button
        className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <div className="flex gap-3 items-start">
          <span
            className="mt-0.5 w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
            style={{ background: T.gold + "22", color: T.gold }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-semibold text-sm" style={{ color: T.navyMid }}>{question}</span>
        </div>
        {open
          ? <ChevronUp className="flex-shrink-0 w-4 h-4" style={{ color: T.gold }} />
          : <ChevronDown className="flex-shrink-0 w-4 h-4" style={{ color: T.muted }} />
        }
      </button>
      {open && (
        <div className="px-5 pb-5 pl-14 text-sm leading-relaxed" style={{ color: T.muted }}>
          {answer}
        </div>
      )}
    </ElevatedCard>
  );
};

/* ─── Section wrapper ─── */
const Section = ({ children, alt = false, className = "" }) => (
  <section
    className={`mb-16 ${className}`}
    style={alt ? { background: T.surfaceAlt, borderRadius: "1.25rem", padding: "2.5rem" } : {}}
  >
    {children}
  </section>
);

/* ═══════════════════════════════════════════
   MAIN TEMPLATE
═══════════════════════════════════════════ */
export const CountryPageTemplate = ({
  country, programType, heroImage, introduction, whyChoose,
  advantages, gvkAdvantages, programStructure, feeStructure,
  eligibility, documents, curriculum, universities, faqs,
  climateInfo, careerOpportunities, courseOptions, specializations,
  scholarships, admissionProcess, hostelFacilities, costOfLiving,
  visaProcess, customHeading, exploreCountries,
}) => {
  const isMMBS = programType === "MBBS";

  const whatsappLink = isMMBS
    ? `https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+MBBS+in+${country}.+Please+guide+me.`
    : `https://api.whatsapp.com/send/?phone=918886661877&text=Hello%2C+I+am+interested+in+Masters+programs+in+${country}.`;

  const ctaButtons = (light = false, center = false) => (
    <div className={`flex flex-wrap gap-3 ${center ? "justify-center" : ""}`}>
      <a
        href={isMMBS ? "/apply" : "tel:+918886661877"}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
        style={{
          background: `linear-gradient(135deg, ${T.gold}, #A01828)`,
          color: "#fff",
          boxShadow: `0 4px 14px ${T.gold}55`,
        }}
      >
        {isMMBS ? <><MessageCircle className="w-4 h-4" /> Apply Now</> : <><PhoneCall className="w-4 h-4" /> Call Now</>}
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all border"
        style={light
          ? { borderColor: "rgba(255,255,255,0.3)", color: "#fff", background: "rgba(255,255,255,0.1)" }
          : { borderColor: T.gold + "55", color: T.navyMid, background: T.gold + "0D" }
        }
      >
        <MessageCircle className="w-4 h-4" /> Chat with Expert
      </a>
      <a
        href="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all border"
        style={light
          ? { borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)", background: "transparent" }
          : { borderColor: T.surfaceAlt, color: T.muted, background: "transparent" }
        }
      >
        <Phone className="w-4 h-4" /> Contact Us
      </a>
    </div>
  );

  return (
    <PageLayout>
      <PageHeader
        title={country}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: isMMBS ? "MBBS Abroad" : "Masters Abroad" },
          { label: country }
        ]}
        backgroundImage={heroImage}
      />

      <div className="container mx-auto px-4 py-16 max-w-6xl">

        {/* ── Introduction ── */}
        <Section>
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <SectionLabel>Overview</SectionLabel>
              <GoldHeading size="3xl">
                {customHeading || (isMMBS
                  ? `Study MBBS in ${country}`
                  : `Pursue Your ${programType} in ${country}`
                )}
              </GoldHeading>
              <p className="leading-relaxed text-base mb-8" style={{ color: T.muted }}>
                {introduction}
              </p>
              {ctaButtons()}
            </div>

            {/* Quick-stats sidebar */}
            {programStructure && (
              <div className="lg:col-span-2">
                <ElevatedCard className="p-6 border" hover={false}
                  style={{ borderColor: T.surfaceAlt }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: T.gold }}>
                    Quick Facts
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: <Clock className="w-4 h-4" />, label: "Duration", value: programStructure.duration },
                      { icon: <Globe className="w-4 h-4" />, label: "Language", value: programStructure.medium },
                      ...(programStructure.details ? [{ icon: <BookOpen className="w-4 h-4" />, label: "Details", value: programStructure.details }] : []),
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: T.gold + "18", color: T.gold }}
                        >
                          {item.icon}
                        </span>
                        <div>
                          <p className="text-xs" style={{ color: T.muted }}>{item.label}</p>
                          <p className="font-semibold text-sm" style={{ color: T.navyMid }}>{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ElevatedCard>
              </div>
            )}
          </div>
        </Section>

        {/* ── Why Choose ── */}
        <Section>
          <SectionLabel>Advantages</SectionLabel>
          <GoldHeading center size="2xl">
            Why Choose {country} for Your {programType}?
          </GoldHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChoose.map((reason, i) => (
              <ElevatedCard key={i} className="p-5">
                <div className="flex items-start gap-3">
                  <span
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                    style={{ background: T.gold + "18" }}
                  >
                    <CheckCircle className="w-4 h-4" style={{ color: T.gold }} />
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: T.navyMid }}>{reason}</p>
                </div>
              </ElevatedCard>
            ))}
          </div>

          {advantages?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-3 mt-5">
              {advantages.map((adv, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: T.surface, border: `1px solid ${T.surfaceAlt}` }}
                >
                  <span
                    className="text-xs font-bold flex-shrink-0 w-6 h-6 rounded flex items-center justify-center"
                    style={{ background: T.gold + "22", color: T.gold }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm" style={{ color: T.navyMid }}>{adv.text}</p>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* ── Climate ── */}
        {climateInfo && (
          <Section alt>
            <div className="flex items-start gap-4">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: T.gold + "22" }}
              >
                <MapPin className="w-5 h-5" style={{ color: T.gold }} />
              </span>
              <div>
                <SectionLabel>Environment</SectionLabel>
                <GoldHeading>Climate Information</GoldHeading>
                <p className="text-sm leading-relaxed" style={{ color: T.muted }}>{climateInfo}</p>
              </div>
            </div>
          </Section>
        )}

        {/* ── GVK Advantages ── */}
        {gvkAdvantages?.length > 0 && (
          <Section>
            <div
              className="rounded-2xl p-8"
              style={{ background: `linear-gradient(135deg, ${T.navy}F2, ${T.navyMid})` }}
            >
              <SectionLabel>{/* overridden color below */}
                <span style={{ color: T.goldLight }}>Our Edge</span>
              </SectionLabel>
              <GoldHeading>
                <span style={{ color: "#fff" }}>GVK Edutech Advantages</span>
              </GoldHeading>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {gvkAdvantages.map((adv, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.07)" }}>
                    <Award className="w-4 h-4 flex-shrink-0" style={{ color: T.gold }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.88)" }}>{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* ── Fee Structure ── */}
        {feeStructure?.length > 0 && (
          <Section>
            <SectionLabel>Financials</SectionLabel>
            <GoldHeading>Fee Structure</GoldHeading>
            <ElevatedCard hover={false} className="overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: T.navy }}>
                    <th className="text-left p-4 font-semibold" style={{ color: "#fff" }}>Category</th>
                    <th className="text-left p-4 font-semibold" style={{ color: "#fff" }}>Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, i) => (
                    <tr
                      key={i}
                      style={{
                        background: i % 2 === 0 ? T.white : T.surface,
                        borderBottom: `1px solid ${T.surfaceAlt}`,
                      }}
                    >
                      <td className="p-4 font-medium" style={{ color: T.navyMid }}>{fee.category}</td>
                      <td className="p-4" style={{ color: T.muted }}>{fee.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ElevatedCard>
          </Section>
        )}

        {/* ── Course Options ── */}
        {courseOptions?.length > 0 && (
          <Section alt>
            <SectionLabel>Programs</SectionLabel>
            <GoldHeading>Course Options & Requirements</GoldHeading>
            <ElevatedCard hover={false} className="overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: T.navy }}>
                    {["Level", "Duration", "Requirements"].map(h => (
                      <th key={h} className="text-left p-4 font-semibold" style={{ color: "#fff" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {courseOptions.map((opt, i) => (
                    <tr
                      key={i}
                      style={{
                        background: i % 2 === 0 ? T.white : T.surface,
                        borderBottom: `1px solid ${T.surfaceAlt}`,
                      }}
                    >
                      <td className="p-4 font-semibold" style={{ color: T.navyMid }}>{opt.level}</td>
                      <td className="p-4" style={{ color: T.navyMid }}>{opt.duration}</td>
                      <td className="p-4" style={{ color: T.muted }}>{opt.requirements}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ElevatedCard>
          </Section>
        )}

        {/* ── Specializations ── */}
        {specializations?.length > 0 && (
          <Section>
            <SectionLabel>Fields</SectionLabel>
            <GoldHeading>Popular Specializations</GoldHeading>
            <div className="flex flex-wrap gap-3">
              {specializations.map((spec, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: T.gold + "15",
                    color: T.navyMid,
                    border: `1px solid ${T.gold}35`,
                  }}
                >
                  <GraduationCap className="w-3.5 h-3.5" style={{ color: T.gold }} />
                  {spec}
                </span>
              ))}
            </div>
          </Section>
        )}

        {/* ── Eligibility ── */}
        {eligibility?.length > 0 && (
          <Section alt>
            <SectionLabel>Requirements</SectionLabel>
            <GoldHeading>Eligibility Criteria</GoldHeading>
            <div className="grid md:grid-cols-2 gap-3">
              {eligibility.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl"
                  style={{ border: `1px solid ${T.surfaceAlt}` }}>
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: T.gold }} />
                  <span className="text-sm" style={{ color: T.navyMid }}>{item}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ── Documents ── */}
        {documents?.length > 0 && (
          <Section>
            <SectionLabel>Checklist</SectionLabel>
            <GoldHeading>Documents Required</GoldHeading>
            <div className="grid md:grid-cols-2 gap-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl"
                  style={{ background: T.surface, border: `1px solid ${T.surfaceAlt}` }}>
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: T.navy, color: T.gold }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm" style={{ color: T.navyMid }}>{doc}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ── Admission Process — Timeline ── */}
        {admissionProcess?.length > 0 && (
          <Section alt>
            <SectionLabel>Journey</SectionLabel>
            <GoldHeading>Admission Process</GoldHeading>
            <div className="relative">
              {/* vertical line */}
              <div
                className="absolute left-5 top-4 bottom-4 w-px hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${T.gold}, ${T.gold}22)` }}
              />
              <div className="space-y-4">
                {admissionProcess.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 md:pl-14 relative">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0
                                 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2"
                      style={{ background: T.navy, color: "#fff", border: `2px solid ${T.gold}` }}
                    >
                      {i + 1}
                    </span>
                    <div className="p-4 bg-white rounded-xl flex-1"
                      style={{ border: `1px solid ${T.surfaceAlt}` }}>
                      <p className="text-sm" style={{ color: T.navyMid }}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* ── Hostel ── */}
        {hostelFacilities && (
          <Section>
            <SectionLabel>Accommodation</SectionLabel>
            <GoldHeading>Hostel Facilities</GoldHeading>
            <ElevatedCard hover={false} className="p-6">
              <p className="text-sm leading-relaxed" style={{ color: T.muted }}>{hostelFacilities}</p>
            </ElevatedCard>
          </Section>
        )}

        {/* ── Cost of Living ── */}
        {costOfLiving && (
          <Section alt>
            <SectionLabel>Budget</SectionLabel>
            <GoldHeading>Cost of Living</GoldHeading>
            <p className="text-sm leading-relaxed" style={{ color: T.muted }}>{costOfLiving}</p>
          </Section>
        )}

        {/* ── Visa ── */}
        {visaProcess && (
          <Section>
            <div
              className="rounded-2xl p-8 border-l-4"
              style={{ background: T.surface, borderLeftColor: T.gold }}
            >
              <SectionLabel>Documentation</SectionLabel>
              <GoldHeading>Student Visa Process</GoldHeading>
              <p className="text-sm leading-relaxed" style={{ color: T.muted }}>{visaProcess}</p>
            </div>
          </Section>
        )}

        {/* ── Curriculum ── */}
        {curriculum && (
          <Section alt>
            <SectionLabel>Academics</SectionLabel>
            <GoldHeading>{programType} Curriculum</GoldHeading>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Pre-Clinical", data: curriculum.preClinical },
                { title: "Para-Clinical", data: curriculum.paraClinical },
                { title: "Clinical", data: curriculum.clinical },
              ].filter(c => c.data?.length).map(col => (
                <ElevatedCard key={col.title} className="overflow-hidden" hover={false}>
                  <div className="p-3" style={{ background: T.navy }}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-center" style={{ color: "#fff" }}>
                      {col.title}
                    </p>
                  </div>
                  <ul className="p-4 space-y-1.5">
                    {col.data.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs" style={{ color: T.muted }}>
                        <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: T.gold }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </ElevatedCard>
              ))}
            </div>
          </Section>
        )}

        {/* ── Scholarships ── */}
        {scholarships?.length > 0 && (
          <Section>
            <SectionLabel>Funding</SectionLabel>
            <GoldHeading>Scholarships & Financial Aid</GoldHeading>
            <div className="grid md:grid-cols-2 gap-4">
              {scholarships.map((s, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: T.gold + "0C", border: `1px solid ${T.gold}30` }}>
                  <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: T.gold }} />
                  <span className="text-sm" style={{ color: T.navyMid }}>{s}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* ── Career Opportunities ── */}
        {careerOpportunities && (
          <Section alt>
            <SectionLabel>Outcomes</SectionLabel>
            <GoldHeading>Career Opportunities</GoldHeading>
            <p className="text-sm leading-relaxed" style={{ color: T.muted }}>{careerOpportunities}</p>
          </Section>
        )}

        {/* ── Universities ── */}
        <Section>
          <SectionLabel>Network</SectionLabel>
          <GoldHeading center size="2xl">
            Partner Universities in {country}
          </GoldHeading>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {universities.map((uni, i) => {
              const logoUrl = uni.logo || getUniversityLogo(uni.name, uni.website);
              const Tag = uni.website ? "a" : "div";
              const tagProps = uni.website
                ? { href: uni.website, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <ElevatedCard key={i} className="group overflow-hidden">
                  <Tag {...tagProps} className="block p-5 text-center">
                    <div
                      className="w-16 h-16 mx-auto mb-3 rounded-xl overflow-hidden flex items-center justify-center"
                      style={{ background: T.surface, border: `1px solid ${T.surfaceAlt}` }}
                    >
                      {logoUrl
                        ? <img src={logoUrl} alt={uni.name} className="w-full h-full object-cover" />
                        : <Building className="w-7 h-7" style={{ color: T.muted }} />
                      }
                    </div>
                    <p className="font-semibold text-xs leading-tight" style={{ color: T.navyMid }}>
                      {uni.name}
                    </p>
                    {uni.website && (
                      <span
                        className="inline-flex items-center gap-1 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: T.gold }}
                      >
                        Visit <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </Tag>
                </ElevatedCard>
              );
            })}
          </div>
        </Section>

        {/* ── FAQs ── */}
        {faqs?.length > 0 && (
          <Section alt>
            <SectionLabel>Support</SectionLabel>
            <GoldHeading center>Frequently Asked Questions</GoldHeading>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} index={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Section>
        )}

        {/* ── Explore Countries ── */}
        {exploreCountries?.length > 0 && (
          <Section>
            <SectionLabel>Destinations</SectionLabel>
            <GoldHeading center>Explore Other Countries</GoldHeading>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {exploreCountries.map((item, i) => {
                // Derive ISO country code from flag emoji (each flag emoji = 2 regional indicator letters)
                const countryCode = item.countryCode ||
                  (item.flag
                    ? [...item.flag].map(c => String.fromCharCode(c.codePointAt(0) - 127397)).join("").toLowerCase()
                    : null);
                const flagSrc = countryCode
                  ? `https://flagcdn.com/32x24/${countryCode}.png`
                  : null;

                return (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-center gap-3 p-4 rounded-xl transition-all group"
                    style={{ background: T.surface, border: `1px solid ${T.surfaceAlt}` }}
                    onMouseEnter={e => Object.assign(e.currentTarget.style, {
                      background: T.gold + "10",
                      borderColor: T.gold + "44",
                    })}
                    onMouseLeave={e => Object.assign(e.currentTarget.style, {
                      background: T.surface,
                      borderColor: T.surfaceAlt,
                    })}
                  >
                    <span
                      className="flex-shrink-0 w-8 h-6 rounded overflow-hidden flex items-center justify-center"
                      style={{ background: T.surfaceAlt }}
                    >
                      {flagSrc
                        ? <img
                            src={flagSrc}
                            alt={`${item.name} flag`}
                            width={32}
                            height={24}
                            className="w-full h-full object-cover"
                          />
                        : <Globe className="w-4 h-4" style={{ color: T.muted }} />
                      }
                    </span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: T.navyMid }}>{item.name}</p>
                      <p className="text-xs" style={{ color: T.muted }}>Study {programType}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </Section>
        )}

        {/* ── CTA Banner ── */}
        <section
          className="rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${T.navy}, #1E3558)` }}
        >
          {/* decorative gold orb */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: T.gold }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-5 pointer-events-none"
            style={{ background: T.gold }}
          />

          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: T.gold }}>
            Your Future Awaits
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#fff" }}>
            Ready to Begin Your {programType} Journey?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            Connect with GVK Edutech today and take the first step toward a successful global career.
          </p>
          {ctaButtons(true, true)}
        </section>

      </div>
    </PageLayout>
  );
};