"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, ExternalLink, User, Building2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { validateEmail, validatePhone } from "@/utils/validation";

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

const offices = [
  {
    city: "Hyderabad", type: "Head Office",
    address: "3rd Floor, Shiva sai Commercial Building, Shivam X Road, Vidya Nagar Opp: Reliance Digital, Hyderabad, Telangana, Pin: 500044",
    phones: ["+91 8331077770", "+91 9010060000"],
    mapLink: "https://maps.app.goo.gl/HSBuYGWVxe46562SA",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-06-10_150932810.png",
    monument: "Charminar",
    regionalDirector: "Mrs. Reena Kamal", qualification: "B.Com, MBA",
  },
  {
    city: "Warangal", type: "Regional Office",
    address: "3rd Floor S.V arcade, opp: Suprabha Hotel, Nakkalagutta, Hanamkonda, Warangal, Telangana, Pincode: 506001",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/hjC7b2FAPNQYTr3k8",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/warangal-thousand-pillar-temple.jpg?updatedAt=1776492282027",
    monument: "Thousand Pillar Temple",
    regionalDirector: "Mrs. Geetha Rejesh", qualification: "MA, B.Sc, B.Ed",
  },
  {
    city: "Karimnagar", type: "Regional Office",
    address: "2nd Floor, Radhakrishna nivas, Opp: PVP mall, Labbipet, Karimnagar",
    phones: ["+91 9951343362", "+91 9704511943"],
    mapLink: "https://www.google.com/maps/place/GVK+EDUTECH+SERVICES",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/karimnagar-elgandal-fort.jpg?updatedAt=1776492281954",
    monument: "Elgandal Fort",
    regionalDirector: "Mr. Nandu", qualification: "B.Sc",
  },
  {
    city: "Chennai", type: "Regional Office",
    address: "Ground floor, Rajathi Street, Cholan Nagar, Madambakam, Chennai, Pincode: 600073",
    phones: ["+91 7997994778", "+91 7997994779"],
    mapLink: "https://goo.gl/maps/chennai",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-06-11_105545555.png",
    monument: "Marina Beach Lighthouse",
    regionalDirector: "Mrs. Aarathi Sukumar Reddy", qualification: "M.Sc Biotechnology",
  },
  {
    city: "Vijayawada", type: "Regional Office",
    address: "2nd Floor, Radhakrishna nivas, Opp: PVP mall, Labbipet, Beside Malabar lane, Vijayawada, Andhra Pradesh, Pincode: 520002",
    phones: ["+91 8886661875", "+91 8464077770"],
    mapLink: "https://maps.app.goo.gl/kHAdjoyymQoupSie6",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/vijayawada-kanaka-durga-temple.jpg?updatedAt=1776492282159",
    monument: "Kanaka Durga Temple",
    regionalDirector: "Dr. Siva Sai Varanasi", qualification: "MBBS",
  },
  {
    city: "Nalgonda", type: "Regional Office",
    address: "Ground floor, Nalgonda",
    phones: ["+91 9966112050", "+91 8886669981"],
    mapLink: "https://goo.gl/maps/nalgonda",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/nalgonda-nagarjuna-sagar.jpg?updatedAt=1776492281884",
    monument: "Nagarjuna Sagar Dam",
    regionalDirector: "Mr. Venkanna", qualification: "M.A, M.Ed",
  },
  {
    city: "Bangalore", type: "Regional Office",
    address: "2nd floor, new bel road, chikkamaranahalli, near MS Ramaiah medical college, Bangalore, Pincode: 560094",
    phones: ["+91 8147533806", "+91 7676167469"],
    mapLink: "https://goo.gl/maps/bangalore",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/bangalore-vidhana-soudha.jpg?updatedAt=1776492281129",
    monument: "Vidhana Soudha",
    regionalDirector: "Mr. Chandan Singh", qualification: "MBA",
  },
  {
    city: "Visakhapatnam", type: "Regional Office",
    address: "3rd floor, Sujatha nagar, Near 80 feet road, Sai sampath residence, Vishakapatnam",
    phones: ["+91 8886661874", "+91 8501077770"],
    mapLink: "https://maps.app.goo.gl/K2wemTdSKxPvSWDz8",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/visakhapatnam-kailasagiri.jpg?updatedAt=1776492281959",
    monument: "Kailasagiri",
    regionalDirector: "Mr. Kiran Kumar", qualification: "M.Sc, M.A, B.Ed",
  },
  {
    city: "Suryapet", type: "Regional Office",
    address: "Suryapet, Telangana",
    phones: ["+91 9949200740", "+91 7729077770"],
    mapLink: "https://goo.gl/maps/suryapet",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115307375.png",
    monument: "Kuntala Falls",
    regionalDirector: "Mrs. Shoba Rani", qualification: "B.A",
  },
  {
    city: "Nellore", type: "Regional Office",
    address: "Nellore, Andhra Pradesh",
    phones: ["+91 8886669980", "+91 8465077770"],
    mapLink: "https://goo.gl/maps/nellore",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115237409.png",
    monument: "Srisailam Dam",
    regionalDirector: "Mr. Amarnath Reddy & Mrs. Rajeswari Reddy", qualification: "M.Sc Biotechnology & M.Sc Organic Chemistry",
  },
  {
    city: "Tirupati", type: "Regional Office",
    address: "Tirupati, Andhra Pradesh",
    phones: ["+91 9494289424", "+91 9000492589"],
    mapLink: "https://goo.gl/maps/tirupati",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115255252.png",
    monument: "Tirumala Temple",
    regionalDirector: "Mr. Aluvala Madhu", qualification: "B.Sc(B.Z.C), B.P.Ed",
  },
];

const quickContacts = [
  { icon: Phone, label: "Call Us",     value: "+91 9010060000 / +91 8886661877", href: "tel:+919010060000" },
  { icon: Mail,  label: "Email Us",    value: "info@gvkedutech.com",             href: "mailto:info@gvkedutech.com" },
  { icon: Clock, label: "Office Hours",value: "Mon – Sat: 9:00 AM – 7:00 PM",   href: null },
];

/* ── inline styles ── */
const pageStyles = (
  <style>{`
    .contact-eyebrow {
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
    .contact-eyebrow::before {
      content: '';
      display: block;
      width: 1.5rem;
      height: 2px;
      background: ${T.red};
      border-radius: 2px;
    }
    .contact-rule {
      display: block;
      width: 3rem;
      height: 3px;
      background: linear-gradient(to right, ${T.red}, ${T.redLight});
      border-radius: 2px;
      margin-top: 0.5rem;
    }
    .office-card {
      background: ${T.white};
      border-radius: 1.125rem;
      border: 1px solid ${T.surfaceAlt};
      overflow: hidden;
      transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
    }
    .office-card:hover {
      box-shadow: 0 12px 32px rgba(15,27,45,0.1);
      transform: translateY(-3px);
      border-color: ${T.red}44;
    }
    .office-card .card-img {
      transition: transform 0.5s ease;
    }
    .office-card:hover .card-img {
      transform: scale(1.06);
    }
    .form-input {
      width: 100%;
      height: 3rem;
      border-radius: 0.75rem;
      border: 1.5px solid ${T.surfaceAlt};
      padding: 0 1rem;
      font-size: 0.875rem;
      color: ${T.navyMid};
      background: ${T.white};
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .form-input:focus {
      border-color: ${T.red};
      box-shadow: 0 0 0 3px ${T.red}18;
    }
    .form-input.error {
      border-color: #e53e3e;
    }
    .form-textarea {
      width: 100%;
      min-height: 8rem;
      border-radius: 0.75rem;
      border: 1.5px solid ${T.surfaceAlt};
      padding: 0.875rem 1rem;
      font-size: 0.875rem;
      color: ${T.navyMid};
      background: ${T.white};
      outline: none;
      resize: vertical;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .form-textarea:focus {
      border-color: ${T.red};
      box-shadow: 0 0 0 3px ${T.red}18;
    }
    .submit-btn {
      width: 100%;
      padding: 0.875rem 1.5rem;
      border-radius: 0.875rem;
      font-weight: 700;
      font-size: 0.9rem;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: opacity 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
      background: linear-gradient(135deg, ${T.red}, ${T.redDark});
      color: ${T.white};
      box-shadow: 0 4px 16px ${T.red}44;
    }
    .submit-btn:hover:not(:disabled) {
      opacity: 0.92;
      transform: translateY(-1px);
      box-shadow: 0 6px 20px ${T.red}55;
    }
    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `}</style>
);

const ContactPage = () => {
  const [formData, setFormData]   = useState({ name: "", email: "", phone: "", message: "", website: "" });
  const [errors, setErrors]       = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) return;

    const newErrors = {};
    const emailV = validateEmail(formData.email);
    const phoneV = validatePhone(formData.phone);
    if (!formData.name.trim())  newErrors.name  = "Please enter your name";
    if (!emailV.valid)          newErrors.email = emailV.message;
    if (!phoneV.valid)          newErrors.phone = phoneV.message;

    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setErrors({});
    setIsSubmitting(true);

    const msg = `Hi, I'm ${formData.name}. ${formData.message}. Contact: ${formData.phone}, Email: ${formData.email}`;
    window.open(`https://api.whatsapp.com/send/?phone=919010060000&text=${encodeURIComponent(msg)}`, "_blank");

    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1000);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const headOffice  = offices.find(o => o.type === "Head Office");
  const branchOffices = offices.filter(o => o.type !== "Head Office");

  return (
    <PageLayout>
      {pageStyles}

      <PageHeader
        title="Contact Us"
        subtitle="Connect with our expert counselors for personalized guidance"
        breadcrumb="Contact Us"
      />

      {/* ── Quick Contact Bar ── */}
      <div style={{ background: T.navy }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {quickContacts.map((item, i) => (
              <div key={i} className="py-5 px-6 flex items-center justify-center gap-3">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: T.red + "25" }}
                >
                  <item.icon className="w-4 h-4" style={{ color: T.red }} />
                </span>
                <div>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-sm font-semibold text-white hover:underline">{item.value}</a>
                    : <p className="text-sm font-semibold text-white">{item.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Head Office Hero ── */}
      {headOffice && (
        <section className="py-16" style={{ background: T.surface }}>
          <div className="container mx-auto px-4">
            <div className="contact-eyebrow" style={{ justifyContent: "flex-start" }}>
              Head Office
            </div>
            <div
              className="rounded-2xl overflow-hidden grid lg:grid-cols-2"
              style={{ boxShadow: "0 8px 40px rgba(15,27,45,0.12)", border: `1px solid ${T.surfaceAlt}` }}
            >
              {/* Image side */}
              <div className="relative h-64 lg:h-auto min-h-[280px] overflow-hidden">
                <Image
                  src={headOffice.image}
                  alt={headOffice.monument}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, transparent 50%, rgba(15,27,45,0.15))" }}
                />
                <div className="absolute bottom-5 left-5">
                  <span
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full"
                    style={{ background: T.red, color: T.white }}
                  >
                    Head Office
                  </span>
                </div>
              </div>

              {/* Info side */}
              <div className="p-8 lg:p-10 bg-white flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-1" style={{ color: T.navyMid }}>
                  {headOffice.city}
                </h2>
                <span className="contact-rule mb-6" />

                {/* Director badge */}
                <div
                  className="flex items-center gap-3 p-4 rounded-xl mb-6"
                  style={{ background: T.red + "0C", border: `1px solid ${T.red}22` }}
                >
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: T.red + "18" }}
                  >
                    <User className="w-5 h-5" style={{ color: T.red }} />
                  </span>
                  <div>
                    <p className="text-xs" style={{ color: T.muted }}>Director</p>
                    <p className="font-bold text-sm" style={{ color: T.navyMid }}>{headOffice.regionalDirector}</p>
                    <p className="text-xs" style={{ color: T.red }}>{headOffice.qualification}</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: T.red }} />
                    <p style={{ color: T.muted }}>{headOffice.address}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: T.red }} />
                    <div className="flex flex-col gap-0.5">
                      {headOffice.phones.map((p, i) => (
                        <a key={i} href={`tel:${p.replace(/\s/g, "")}`}
                          className="font-semibold hover:underline" style={{ color: T.red }}>
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={headOffice.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold self-start"
                  style={{ background: T.red, color: T.white, boxShadow: `0 4px 12px ${T.red}44` }}
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Regional Offices ── */}
      <section className="py-20" style={{ background: T.white }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="contact-eyebrow" style={{ justifyContent: "center" }}>Our Network</p>
            <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
              Regional Offices Across India
            </h2>
            <span className="contact-rule mx-auto" />
            <p className="mt-4 text-sm max-w-xl mx-auto" style={{ color: T.muted }}>
              Visit any of our conveniently located offices for personalized counseling and
              comprehensive guidance on your study abroad journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {branchOffices.map((office, index) => (
              <Link key={index} href="/branches" className="office-card block">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={office.image}
                    alt={`${office.monument} – ${office.city}`}
                    fill
                    className="object-cover card-img"
                  />
                  {/* gradient */}
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(15,27,45,0.65) 0%, transparent 55%)" }}
                  />
                  {/* city name overlay */}
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-lg font-bold text-white leading-tight">{office.city}</h3>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>{office.monument}</p>
                  </div>
                  {/* badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-0.5 text-xs font-bold rounded-full"
                      style={{ background: T.navyMid, color: T.white }}
                    >
                      Regional
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  {/* Director */}
                  <div
                    className="flex items-center gap-2.5 p-3 rounded-xl mb-4"
                    style={{ background: T.surface, border: `1px solid ${T.surfaceAlt}` }}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: T.red + "16" }}
                    >
                      <User className="w-3.5 h-3.5" style={{ color: T.red }} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs" style={{ color: T.muted }}>Regional Director</p>
                      <p className="font-semibold text-xs truncate" style={{ color: T.navyMid }}>
                        {office.regionalDirector}
                      </p>
                      <p className="text-xs" style={{ color: T.red }}>{office.qualification}</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 mb-3">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: T.muted }} />
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: T.muted }}>
                      {office.address}
                    </p>
                  </div>

                  {/* Phones */}
                  <div className="flex items-start gap-2.5 mb-4">
                    <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: T.red }} />
                    <div className="flex flex-col gap-0.5">
                      {office.phones.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-xs font-semibold hover:underline"
                          style={{ color: T.red }}
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: `1px solid ${T.surfaceAlt}` }}
                  >
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: T.navyMid }}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Directions
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold"
                      style={{ color: T.red }}
                    >
                      View Details
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-20" style={{ background: T.surface }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">

            {/* Section header */}
            <div className="text-center mb-10">
              <p className="contact-eyebrow" style={{ justifyContent: "center" }}>Get In Touch</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: T.navyMid }}>
                Send Us a Message
              </h2>
              <span className="contact-rule mx-auto" />
              <p className="mt-3 text-sm" style={{ color: T.muted }}>
                Fill in the form below and we'll connect you on WhatsApp instantly.
              </p>
            </div>

            {/* Form card */}
            <div
              className="bg-white rounded-2xl p-8 md:p-10"
              style={{ boxShadow: "0 4px 24px rgba(15,27,45,0.08)", border: `1px solid ${T.surfaceAlt}` }}
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: T.red + "14" }}
                  >
                    <MessageCircle className="w-8 h-8" style={{ color: T.red }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: T.navyMid }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: T.muted }}>
                    WhatsApp has opened — our counselors will respond shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", message: "", website: "" }); }}
                    className="mt-6 text-sm font-semibold hover:underline"
                    style={{ color: T.red }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* honeypot */}
                  <input type="text" name="website" value={formData.website}
                    onChange={e => setFormData({ ...formData, website: e.target.value })}
                    tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: T.navyMid }}>
                        Full Name <span style={{ color: T.red }}>*</span>
                      </label>
                      <input
                        className={`form-input ${errors.name ? "error" : ""}`}
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={e => handleChange("name", e.target.value)}
                        aria-required="true"
                      />
                      {errors.name && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors.name}</p>}
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: T.navyMid }}>
                        Email Address <span style={{ color: T.red }}>*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-input ${errors.email ? "error" : ""}`}
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={e => handleChange("email", e.target.value)}
                        aria-required="true"
                      />
                      {errors.email && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: T.navyMid }}>
                      Phone Number <span style={{ color: T.red }}>*</span>
                    </label>
                    <input
                      type="tel"
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={e => handleChange("phone", e.target.value)}
                      aria-required="true"
                    />
                    {errors.phone && <p className="text-xs mt-1" style={{ color: "#e53e3e" }}>{errors.phone}</p>}
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: T.navyMid }}>
                      Message
                    </label>
                    <textarea
                      className="form-textarea"
                      placeholder="Share your study abroad aspirations with us..."
                      value={formData.message}
                      onChange={e => handleChange("message", e.target.value)}
                    />
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting
                      ? "Opening WhatsApp…"
                      : <><MessageCircle className="w-4 h-4" /> Send Message via WhatsApp</>
                    }
                  </button>

                  <p className="text-xs text-center mt-3" style={{ color: T.muted }}>
                    Clicking Send will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)` }}
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: T.red }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-5 pointer-events-none"
          style={{ background: T.red }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: T.redLight }}>
            Ready to Begin?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Start Your Study Abroad Journey Today
          </h2>
          <p className="mb-8 max-w-lg mx-auto text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
            Our expert counselors are available Mon–Sat, 9 AM–7 PM. Reach out through
            any channel — we're here to help.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+919010060000"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`, color: T.white, boxShadow: `0 4px 14px ${T.red}55` }}
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "rgba(255,255,255,0.1)", color: T.white, border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a
              href="mailto:info@gvkedutech.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ background: "transparent", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;