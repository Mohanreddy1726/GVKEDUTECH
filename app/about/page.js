"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, MessageCircle, Phone, Award, BookOpen, ShieldCheck, MapPin, GraduationCap, Settings, Monitor, Code2, Smartphone, Palette, Layout, Search, Megaphone, Video, Globe, Crown, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   BRAND COLORS
───────────────────────────────────────────── */
const BLUE = "#253775";
const RED = "#FF0008";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const regionalDirectors = [
  { name: "Mrs. Reena Kamal", city: "Hyderabad (Head Office)", qualification: "B.Com, MBA", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Reena.png?updatedAt=1776335169935" },
  { name: "Mrs. Geetha Rajesh", city: "Warangal", qualification: "MA, B.Sc, B.Ed", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/geeta.png?updatedAt=1776335170035" },
  { name: "Mr. Kiran Kumar", city: "Visakhapatnam", qualification: "M.Sc, M.A, B.Ed", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/kiran.png?updatedAt=1776335169934" },
  { name: "Dr. Siva Sai Varanasi", city: "Vijayawada", qualification: "MBBS", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/regional%20directors/regional%20directors/vijaywada.png?updatedAt=1778135548450" },
  { name: "Mr. Nandu", city: "Karimnagar", qualification: "B.Sc", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/nandu.png?updatedAt=1776335169859" },
  { name: "Mr. Amarnath Reddy", city: "Nellore", qualification: "M.Sc Biotechnology", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/NELLORE.jpeg" },
  { name: "Mrs. Rajeswari Reddy", city: "Nellore", qualification: "M.Sc Organic Chemistry", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/12x18-4.jpg%20(1).jpeg" },
  { name: "Mrs. Shoba Rani", city: "Suryapet", qualification: "B.A", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/shobarani.png?updatedAt=1776335169676" },
  { name: "Mrs. Aarathi Sukumar Reddy", city: "Chennai", qualification: "M.Sc Biotechnology", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/regional%20directors/regional%20directors/chennai.jpeg" },
  { name: "Mr. Aluvala Madhu", city: "Tirupati", qualification: "B.Sc(B.Z.C), B.P.Ed", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/regional%20directors/regional%20directors/tirupathi.jpeg" },
  { name: "Mr. Venkanna", city: "Nalgonda", qualification: "M.A, M.Ed", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/regional%20directors/regional%20directors/nalgonda.jpeg" },
  { name: "Mr. Chandan Singh", city: "Bangalore", qualification: "MBA", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/chandan.png?updatedAt=1776335169838" },
];

const operationalTeam = [
  { name: "Mr. Bala Gangadhar", qualification: "B.Tech", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/WhatsApp%20Image%202026-04-30%20at%2010.56.06%20AM.jpeg" },
  { name: "Mrs. Vandana", qualification: "M.A, B.Ed", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Vandama%20mam%20img.jpeg" },
  { name: "Mr. Hanok Srikar", qualification: "B.Com, LLB", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/DSC02875.JPG.jpeg" },
  { name: "Mr. Shivam", qualification: "MBBS", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Shivam%20img.jpeg" },
  { name: "Mrs. Padma", qualification: "B.Com", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/padma.png?updatedAt=1776335169846" },
  { name: "Mr. Subbi Reddy", qualification: "M.Sc Zoology", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/subbireddy.png?updatedAt=1776335169616" },
  { name: "Mr. Praveen", qualification: "B.Com", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/WhatsApp%20Image%202026-05-07%20at%204.06.40%20PM%20(1).jpeg" },
  { name: "Mr. Murali", qualification: "M.Tech", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/WhatsApp%20Image%202026-05-07%20at%204.06.40%20PM.jpeg" },
];

const itTeam = [
  { name: "Mr. Mohan Reddy", qualification: "B.Tech", role: "Full Stack Developer", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/CamScanner_04-21-2022_06.21__1_-removebg-preview.png", isHead: true },
  { name: "Mr. Rakesh", qualification: "B.Tech", role: "Video Editor", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/WhatsApp%20Image%202026-05-07%20at%204.43.36%20PM.jpeg", isHead: false },
  { name: "Mr. Shiva", qualification: "B.Tech", role: "UI/UX Designer", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Shiva%20imag.jpeg", isHead: false },
  { name: "Mr. Siddhartha", qualification: "BBA", role: "Digital Marketing", image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/IMG_9061.jpg", isHead: false },
];

const itServices = [
  { label: "Web Development", icon: Code2, color: "#3B82F6", bg: "#EFF6FF" },
  { label: "App Development", icon: Smartphone, color: "#8B5CF6", bg: "#F5F3FF" },
  { label: "Graphic Designing", icon: Palette, color: "#EC4899", bg: "#FDF2F8" },
  { label: "UI/UX Design", icon: Layout, color: "#F59E0B", bg: "#FFFBEB" },
  { label: "SEO Optimization", icon: Search, color: "#10B981", bg: "#ECFDF5" },
  { label: "Digital Marketing", icon: Megaphone, color: "#EF4444", bg: "#FEF2F2" },
  { label: "Video Editing", icon: Video, color: "#6366F1", bg: "#EEF2FF" },
  { label: "Social Media", icon: Globe, color: "#0EA5E9", bg: "#F0F9FF" },
];

const certificates = [
  {
    title: "Certificate of Representation",
    issuer: "Kokshetau State University, Kazakhstan",
    year: "2026",
    desc: "Appointed as the official representative for student admissions in India, facilitating access to quality medical education abroad.",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Certificates/KGU%20Certificate%20(1)%20DRGVK_page-0001.jpg",
    badge: { bg: "#DBEAFE", color: "#1D4ED8" },
  },
  {
    title: "Trade Licence Certificate",
    issuer: "Greater Hyderabad Muncipal Corporation",
    year: "2025",
    desc: "Licensed to operate as an overseas education consultancy, adhering to all regulatory requirements for student counseling and international placements.",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Certificates/Trade%20License%20Certificatemas_page-0001.jpg",
    badge: { bg: "#DCFCE7", color: "#15803D" },
  },
  {
    title: "Letter Of Appointment as VICE DEAN",
    issuer: "Caspian International School of Medicine, Kazakhstan",
    year: "2020",
    desc: "Appointed as Vice Dean for International Student Affairs, responsible for overseeing admissions, student welfare, and academic coordination for Indian students at Caspian University.",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Certificates/Caspian_page-0001.jpg",
    badge: { bg: "#F3E8FF", color: "#7C3AED" },
  },
  {
    title: "Certificate of Partnership",
    issuer: "Caspian International School of Medicine, Kazakhstan",
    year: "2020",
    desc: "Recognized as an official partner for student recruitment and counseling, facilitating access to quality medical education for Indian students at Caspian University.",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Certificates/WhatsApp%20Image%202026-05-13%20at%2010.38.49%20AM.jpeg",
    badge: { bg: "#FFEDD5", color: "#C2410C" },
  },
];

const whyChooseUs = [
  "Expert Guidance for MBBS & Masters Abroad: We are recognized among the top overseas education consultants, offering end-to-end support for MBBS admissions, scholarships, and Master's programs.",
  "100+ Partner Universities & Accredited Programs: Our strong network with globally ranked medical and technical universities ensures students secure seats in NMC/WHO-approved colleges.",
  "Visa & Scholarship Assistance: From documentation to visa processing, our experts streamline the journey. We also help students secure education loans and scholarships.",
  "Post-Admission Support: Beyond admission, we assist with accommodation, travel, and career counseling, ensuring a smooth transition abroad.",
];

const coreValues = [
  { title: "Integrity", description: "Ethical counseling with zero hidden costs" },
  { title: "Excellence", description: "Partnerships with top global universities" },
  { title: "Support", description: "End-to-end assistance, even after landing abroad" },
  { title: "Innovation", description: "Leveraging technology for seamless admissions" },
];

const mediaPartners = [
  { name: "TV9 Telugu", type: "News Channel", abbr: "TV9", fg: "#fff", bg: "#C62828", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/image_2026-05-11_170136744.png" },
  { name: "NTV Telugu", type: "News Channel", abbr: "NTV", fg: "#fff", bg: "#1565C0", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/96abd072-fea7-4cd2-ab1b-eefcd3ab016d.png" },
  { name: "ETV Telugu", type: "News & Entertainment", abbr: "ETV", fg: "#fff", bg: "#2E7D32", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/7938e1bb-aa41-43b8-bc22-97b30a18e12a.png" },
  { name: "ABN Andhra Jyothi", type: "News Channel", abbr: "ABN", fg: "#fff", bg: "#E65100", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/1e03efc2-47a6-4690-ba12-2856564fb74d.png" },
  { name: "TV5 News", type: "News Channel", abbr: "TV5", fg: "#fff", bg: "#00695C", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/e054848a-5a17-4c78-89a7-b8c80eb2188f.png" },
  { name: "HMTV", type: "News Channel", abbr: "HMT", fg: "#fff", bg: "#AD1457", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/1d91b451-0414-48d9-b92a-4a975816e4f4.png" },
  { name: "V6 News", type: "News Channel", abbr: "V6", fg: "#fff", bg: "#4527A0", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/5db8a9cd-23d4-46e1-9d2b-b131ba02a265.png" },
  { name: "Eenadu", type: "Print & Digital", abbr: "ENA", fg: "#fff", bg: "#BF360C", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/85b5365d-6f24-40cd-b73d-6c20d14e347d.png" },
  { name: "Deccan Chronicle", type: "English Daily", abbr: "DC", fg: "#fff", bg: "#33691E", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/6edff3b7-f498-48cf-a10c-d011c1ea7cc3.png" },
  { name: "The Hindu", type: "English Daily", abbr: "TH", fg: "#fff", bg: "#880E4F", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/d1d95538-8de0-4c8b-bb52-62a76b365e1f.png" },
  { name: "Times of India", type: "English Daily", abbr: "TOI", fg: "#fff", bg: "#B71C1C", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/84be2e0a-50f1-4e57-8764-a8674c20d6e1.png" },
  { name: "Namaste Telangana", type: "Telugu Daily", abbr: "NT", fg: "#fff", bg: "#006064", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Media%20logos/image_2026-05-11_172555909.png" },
];

const accreditations = [
  { icon: "🌍", name: "WHO", fullName: "World Health Organization", desc: "Partner medical colleges are listed in the WHO World Directory of Medical Schools, ensuring global recognition of your degree.", badge: { bg: "#DCFCE7", color: "#15803D" }, glow: "rgba(34,197,94,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160526023.png" },
  { icon: "🏫", name: "Belgian Edu Council", fullName: "Belgian Education Council", desc: "Recognized by the Belgian Education Council for upholding quality standards in international student placements and education consulting.", badge: { bg: "#FEF9C3", color: "#A16207" }, glow: "rgba(234,179,8,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160538761.png" },
  { icon: "🌐", name: "INQAAHE", fullName: "International Network for Quality Assurance Agencies in Higher Education", desc: "Member of INQAAHE – the global network connecting quality assurance bodies across higher education institutions worldwide.", badge: { bg: "#DBEAFE", color: "#1D4ED8" }, glow: "rgba(59,130,246,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160550182.png" },
  { icon: "🌏", name: "APQN", fullName: "Asia Pacific Quality Network", desc: "Affiliated with APQN, promoting quality assurance practices in higher education across the Asia Pacific region.", badge: { bg: "#EDE9FE", color: "#7C3AED" }, glow: "rgba(124,58,237,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160602105.png" },
  { icon: "📋", name: "WDMS", fullName: "World Directory of Medical Schools", desc: "All partner MBBS universities are listed in the FAIMER World Directory of Medical Schools – the gold standard for verifying medical school credentials globally.", badge: { bg: "#FFEDD5", color: "#C2410C" }, glow: "rgba(249,115,22,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160613296.png" },
  { icon: "🎓", name: "ORPHEUS / AMEE", fullName: "ORPHEUS & Association for Medical Education in Europe", desc: "Partner institutions hold ORPHEUS accreditation and align with AMEE standards – Europe's leading medical education quality frameworks.", badge: { bg: "#FCE7F3", color: "#BE185D" }, glow: "rgba(236,72,153,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160627194.png" },
  { icon: "🏛️", name: "MCI", fullName: "Medical Council of India", desc: "Partner universities are recognized by the erstwhile Medical Council of India, the statutory body regulating medical education in India.", badge: { bg: "#CCFBF1", color: "#0F766E" }, glow: "rgba(20,184,166,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_172639953.png" },
  { icon: "⚕️", name: "NMC", fullName: "National Medical Commission", desc: "All partner MBBS universities hold NMC recognition – mandatory for Indian students to practice medicine in India after returning.", badge: { bg: "#FEE2E2", color: "#B91C1C" }, glow: "rgba(239,68,68,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_172348372.png" },
  { icon: "🇺🇸", name: "USMLE", fullName: "United States Medical Licensing Examination", desc: "Graduates from our partner colleges are eligible to appear for USMLE – the pathway to practicing medicine and securing residency in the United States.", badge: { bg: "#DBEAFE", color: "#1E40AF" }, glow: "rgba(30,64,175,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160637558.png" },
  { icon: "🇬🇧", name: "PLAB", fullName: "Professional and Linguistic Assessments Board (UK)", desc: "Our MBBS graduates are eligible for PLAB – the route to medical practice and GMC registration in the United Kingdom.", badge: { bg: "#EDE9FE", color: "#6D28D9" }, glow: "rgba(109,40,217,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160648313.png" },
  { icon: "🏥", name: "Egypt MoHE", fullName: "The Kingdom of UF Medical Sciences – Egypt", desc: "Recognized by Egyptian medical education authorities, our partner institutions in Egypt maintain high academic and clinical training standards.", badge: { bg: "#FEF3C7", color: "#92400E" }, glow: "rgba(146,64,14,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160700237.png" },
  { icon: "🤝", name: "IFMSA", fullName: "International Federation of Medical Students' Associations", desc: "Our partner medical universities are associated with IFMSA – the world's largest independent medical student organization, active in 140+ countries.", badge: { bg: "#DCFCE7", color: "#166534" }, glow: "rgba(22,101,52,0.18)", logo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Accredation%20Logos/image_2026-05-11_160715123.png" },
];

/* ─────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────── */

/**
 * FramedPhoto — now accepts an optional `hoveredPhoto` prop.
 * When provided, it cross-fades from the default photo to the hovered one.
 */
function FramedPhoto({ src, alt, flip }) {

  return (
    <div className={`relative flex ${flip ? "justify-end" : "justify-start"} items-center`}>
      <span
        className="absolute z-10 pointer-events-none"
        style={{
          top: "-14px",
          right: flip ? "auto" : "-14px",
          left: flip ? "-14px" : "auto",
          width: "55%", height: "55%",
          borderTop: "4px solid hsl(var(--primary))",
          borderRight: flip ? "none" : "4px solid hsl(var(--primary))",
          borderLeft: flip ? "4px solid hsl(var(--primary))" : "none",
          borderRadius: flip ? "12px 0 0 0" : "0 12px 0 0",
        }}
      />
      <span
        className="absolute z-10 pointer-events-none"
        style={{
          bottom: "-14px",
          left: flip ? "auto" : "-14px",
          right: flip ? "-14px" : "auto",
          width: "55%", height: "55%",
          borderBottom: "4px solid hsl(var(--accent))",
          borderLeft: flip ? "none" : "4px solid hsl(var(--accent))",
          borderRight: flip ? "4px solid hsl(var(--accent))" : "none",
          borderRadius: flip ? "0 0 12px 0" : "0 0 0 12px",
        }}
      />
      <div
        className="photo-frame relative overflow-hidden rounded-2xl"
        style={{
          width: "clamp(220px, 28vw, 340px)", aspectRatio: "3/4", padding: "6px",
          background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--accent)/0.15))",
          boxShadow: "0 25px 60px -10px hsl(var(--primary)/0.35), 0 10px 30px -5px hsl(var(--accent)/0.2)",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
          style={{ display: "block" }}
        />
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.08) 0%, transparent 50%, hsl(var(--accent)/0.08) 100%)" }}
        />
      </div>
    </div>
  );
}

/**
 * TabbedContent — generic tabbed layout.
 * Optionally accepts `onAchievementHover` callback used only in the Achievements tab.
 */
function TabbedContent({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex gap-3 mb-6 flex-wrap">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              active === i
                ? "bg-gradient-to-r from-[#253775] to-[#FF0008] text-white border-transparent shadow-md scale-105"
                : "border-border text-muted-foreground hover:border-[#253775]/50 hover:text-[#253775]"
              }`}
            style={active === i ? { background: `linear-gradient(90deg, ${BLUE}, ${RED})` } : {}}
          >
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content-enter" key={active}>{tabs[active].content}</div>
    </div>
  );
}

/**
 * AchievementBadge — like AwardBadge but also fires hover callbacks
 * so the parent frame can swap the photo.
 */
function AchievementBadge({ title, year, body }) {
  return (
    <div
      className="flex gap-4 items-start p-4 rounded-xl border border-border hover:border-accent/50 transition-colors cursor-default"
      style={{ background: "linear-gradient(135deg, hsl(var(--accent)/0.04), transparent)" }}
    >
      <div
        className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--accent)/0.15))" }}
      >
        <Award className="w-5 h-5 text-accent" />
      </div>
      <div>
        <p className="font-bold text-foreground text-sm">{title}</p>
        <p className="text-accent text-xs font-medium">{year}</p>
        <p className="text-muted-foreground text-xs mt-1">{body}</p>
      </div>
    </div>
  );
}

function CertificateModal({ cert, index, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="relative flex flex-col rounded-2xl overflow-hidden w-full"
        style={{
          maxWidth: "780px",
          maxHeight: "90vh",
          background: "hsl(var(--card))",
          boxShadow: "0 32px 80px -12px rgba(0,0,0,0.6)",
          animation: "modal-pop 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: "1px solid hsl(var(--border))" }}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: cert.badge.bg }}
            >
              <CheckCircle className="w-4 h-4" style={{ color: cert.badge.color }} />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-foreground text-sm leading-snug truncate">{cert.title}</p>
              <p className="text-muted-foreground text-xs truncate">{cert.issuer}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 ml-4 flex-shrink-0">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-md"
              style={{ background: cert.badge.bg, color: cert.badge.color }}
            >
              {cert.year}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-muted"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Image area */}
        <div
          className="relative flex-1 overflow-hidden flex items-center justify-center"
          style={{ background: "hsl(var(--muted)/0.3)", minHeight: "300px" }}
        >
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              maxWidth: "100%",
              maxHeight: "70vh",
              objectFit: "contain",
              display: "block",
            }}
          />
          {/* Prev / Next arrows */}
          {total > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                style={{ background: "rgba(0,0,0,0.55)", color: "#fff", backdropFilter: "blur(4px)" }}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                style={{ background: "rgba(0,0,0,0.55)", color: "#fff", backdropFilter: "blur(4px)" }}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Description */}
        {cert.desc && (
          <div
            className="px-6 py-4 flex-shrink-0"
            style={{ borderTop: "1px solid hsl(var(--border))" }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed">{cert.desc}</p>
          </div>
        )}

        {/* Bottom dot indicator */}
        {total > 1 && (
          <div
            className="flex items-center justify-center gap-2 py-3 flex-shrink-0"
            style={{ borderTop: "1px solid hsl(var(--border))" }}
          >
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "20px" : "6px",
                  height: "6px",
                  background: i === index ? cert.badge.color : "hsl(var(--border))",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 max-w-xs mx-auto mb-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/40" />
      <div className="w-2 h-2 rounded-full bg-primary" />
      <div className="w-3 h-3 rounded-full bg-accent" />
      <div className="w-2 h-2 rounded-full bg-primary" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}

function MediaCard({ p }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center gap-3 rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
      style={{ width: "148px", padding: "16px 10px", background: "hsl(var(--card))" }}
    >
      <div
        className="w-full h-12 rounded-xl flex items-center justify-center overflow-hidden"
        style={{ background: imgOk ? "#fff" : p.bg, padding: "4px" }}
      >
        {imgOk ? (
          <img
            src={p.logo}
            alt={p.name}
            className="max-h-full max-w-full scale-220 object-contain"
            onError={() => setImgOk(false)}
          />
        ) : (
          <span className="font-black text-base tracking-tight select-none" style={{ color: p.fg }}>
            {p.abbr}
          </span>
        )}
      </div>
      <div className="text-center">
        <p className="font-bold text-foreground text-xs leading-tight">{p.name}</p>
        <p className="text-muted-foreground text-xs mt-0.5">{p.type}</p>
      </div>
    </div>
  );
}

function MediaCarousel({ items }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const SPEED = 0.6;
  const doubled = [...items, ...items];

  useEffect(() => {
    function step() {
      if (trackRef.current && !pausedRef.current) {
        posRef.current += SPEED;
        const halfW = trackRef.current.scrollWidth / 2;
        if (posRef.current >= halfW) posRef.current = 0;
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="relative overflow-hidden py-2"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />
      <div ref={trackRef} className="flex gap-4 will-change-transform" style={{ width: "max-content" }}>
        {doubled.map((p, i) => <MediaCard key={i} p={p} />)}
      </div>
    </div>
  );
}

function AccredLogo({ logo, icon, name }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="w-full h-full flex items-center justify-center">
      {imgOk ? (
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full scale-200 object-contain"
          style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
          onError={() => setImgOk(false)}
        />
      ) : (
        <span style={{ fontSize: "3rem", lineHeight: 1 }}>{icon}</span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

const AboutPage = () => {
  /* Per-section hovered achievement photo state — removed */
  const [selectedCertIndex, setSelectedCertIndex] = useState(null);

  const openCert  = (i) => setSelectedCertIndex(i);
  const closeCert = () => setSelectedCertIndex(null);
  const prevCert  = () => setSelectedCertIndex(i => (i - 1 + certificates.length) % certificates.length);
  const nextCert  = () => setSelectedCertIndex(i => (i + 1) % certificates.length);

  /* ── Achievement data (with optional achievement photos) ── */
  const founderAchievements = [
    { title: "Best Doctor Award – Telangana (6 Times Consecutive)", year: "2016-2021", body: "Recognized consecutively for 6 years as the Best Doctor in Telangana for outstanding contributions to medical education and patient care." },
    { title: "Best Foreign Medical Graduate Mentor Award", year: "2023", body: "Recognized by the Indo-Russia Alumni Medical Network for exceptional mentoring of students pursuing MBBS in Russia and Eastern Europe." },
    { title: "Excellence in Healthcare Education Leadership", year: "2025", body: "Awarded by the Telangana State Medical Education Forum for 15+ years of dedication to accessible overseas medical education for students from Andhra Pradesh & Telangana." },
  ];

  const vidyaAchievements = [
    { title: "Appointed as Vice Dean for International Affairs of India– Caspian University", year: "2021", body: "Appointed as Vice Dean for International Affairs of India at Caspian University, Kazakhstan." },
    { title: "Young Entrepreneur Awardee - Dubai", year: "2022", body: "Recognized for outstanding entrepreneurship in the education consultancy sector at a prestigious ceremony in Dubai." },
    { title: "Partner Appreciation Award - New Delhi", year: "2023", body: "Honored by international university partners for excellence in student placement and service quality in New Delhi." },
    { title: "G-20 Summit Global Icon Award - Sri Lanka", year: "2024", body: "Awarded for contributions to international education and student welfare at the G-20 Summit in Sri Lanka." },
    { title: "Excellence in Healthcare Award", year: "2026", body: "Recognized by Global Change Makers for outstanding contributions to healthcare education and student mentorship." },
    { title: "Arise Excellence Award - Telangana", year: "2026", body: "Prestigious award acknowledging excellence in guiding students toward successful medical careers in Telangana." },
    { title: "Young Leadership Award - Mumbai", year: "2026", body: "Awarded in Mumbai for demonstrating exceptional leadership in the overseas education consultancy industry." },
    { title: "UN Conference Speaker - Bangkok", year: "2026", body: "Invited as keynote speaker at United Nations conference in Bangkok to discuss global education mobility." },
  ];

  const vinodAchievements = [
    { title: "London Global Excellence Award - UK", year: "2024", body: "Recognized for excellence in international education consulting at a prestigious ceremony in London, UK." },
    { title: "Governor's Recognition - Telangana", year: "2023", body: "Honored by the Governor of Telangana for outstanding contributions to student education and career guidance." },
    { title: "Global Change Makers Award", year: "2026", body: "Awarded for transformative impact on student lives through global education opportunities." },
    { title: "UN Conference Speaker - Bangkok", year: "2026", body: "Featured speaker at United Nations conference in Bangkok on international higher education and student mobility." },
  ];

  return (
    <PageLayout>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-8px) rotate(0.5deg); }
          66%       { transform: translateY(-4px) rotate(-0.5deg); }
        }
        @keyframes shimmer-in {
          from { opacity: 0; transform: scale(0.96) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes tab-fade {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop-in {
          from { opacity: 0; transform: scale(0.88) translateY(14px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .photo-frame       { animation: float 6s ease-in-out infinite, shimmer-in 0.8s ease both; }
        .tab-content-enter { animation: tab-fade 0.3s ease both; }
        .accred-card       { animation: pop-in 0.5s ease both; }
        .accred-card:nth-child(1)  { animation-delay: 0.04s; }
        .accred-card:nth-child(2)  { animation-delay: 0.08s; }
        .accred-card:nth-child(3)  { animation-delay: 0.12s; }
        .accred-card:nth-child(4)  { animation-delay: 0.16s; }
        .accred-card:nth-child(5)  { animation-delay: 0.20s; }
        .accred-card:nth-child(6)  { animation-delay: 0.24s; }
        .accred-card:nth-child(7)  { animation-delay: 0.28s; }
        .accred-card:nth-child(8)  { animation-delay: 0.32s; }
        .accred-card:nth-child(9)  { animation-delay: 0.36s; }
        .accred-card:nth-child(10) { animation-delay: 0.40s; }
        .accred-card:nth-child(11) { animation-delay: 0.44s; }
        .accred-card:nth-child(12) { animation-delay: 0.48s; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <PageHeader
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <div className="container mx-auto px-4 py-16">

        {/* ── Introduction ── */}
        <section className="mb-24">
          <div className="text-center max-w-6xl mx-auto">
            <ColorfulHeading text="Welcome to GVK EduTech" className="mb-6 justify-center" size="3xl" />
            <SectionDivider />
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-6">
            Welcome to GVK EduTech – Your Trusted Partner for Global Education Opportunities. As one of the best study abroad consultants, we specialize in guiding students toward premier MBBS abroad programs and Masters degrees in top-ranked universities worldwide. With a commitment to excellence, transparency, and personalized mentorship, we turn academic dreams into reality.
          </p>
        </section>

        {/* ── Founder's Message ── */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <ColorfulHeading text="Founder's Message" className="justify-center mb-3" size="3xl" />
            <SectionDivider />
            <p className="text-muted-foreground mt-4 text-sm tracking-widest uppercase font-medium">
              Empowering Dreams Through Global Education
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo frame — reacts to hovered achievement */}
            <div className="flex justify-center lg:justify-start">
              <FramedPhoto
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/Directors/IMG_0029.PNG"
                alt="Dr. G. VIJAY KUMAR – Founder"
                flip={false}
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.12), hsl(var(--accent)/0.12))", color: "hsl(var(--accent))", border: "1px solid hsl(var(--accent)/0.25)" }}>
                Founder
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">Dr. G. VIJAY KUMAR (GVK)</h3>
              <p className="text-muted-foreground text-sm mb-6 font-medium">MBBS (Osmania University) · MS Ophthalmology  (Osmania University)</p>

              {/* Tabbed content with Message + Achievements */}
              <TabbedContent
                tabs={[
                  {
                    label: "Message",
                    icon: <BookOpen className="w-4 h-4" />,
                    content: (
                      <div className="relative pl-6 border-l-2 border-[#253775]/30 space-y-4">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full" style={{ background: BLUE }} />
                        <p className="text-muted-foreground leading-relaxed">
                          As a medical professional who walked the same path, I understand the dreams and challenges Indian students face when pursuing MBBS abroad. My own journey from India to becoming a doctor inspired me to bridge the gap between aspiring medical students and world-class universities.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          GVK EduTech was founded on the belief that every deserving student deserves access to quality medical education. We provide end-to-end support—from university selection to visa processing and post-arrival assistance—ensuring your dream of becoming a doctor becomes reality.
                        </p>
                      </div>
                    ),
                  },
                  {
                    label: "Achievements",
                    icon: <Award className="w-4 h-4" />,
                    content: (
                      <div className="space-y-3">
                        {founderAchievements.map((ach, i) => (
                          <AchievementBadge key={i} title={ach.title} year={ach.year} body={ach.body} />
                        ))}
                      </div>
                    ),
                  },
                ]}
              />

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[["15+", "Years"], ["5000+", "Students"], ["100+", "Universities"]].map(([num, label]) => (
                  <div key={label} className="text-center p-3 rounded-xl" style={{ background: "hsl(var(--primary)/0.07)" }}>
                    <p className="text-2xl font-bold text-primary">{num}</p>
                    <p className="text-muted-foreground text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Director MBBS ── */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <ColorfulHeading text="Director's Message" className="justify-center mb-3" size="3xl" />
            <SectionDivider />
            <p className="text-muted-foreground mt-4 text-sm tracking-widest uppercase font-medium">Vice-Dean · MBBS Programs</p>
          </div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.12), hsl(var(--accent)/0.12))", color: "hsl(var(--accent))", border: "1px solid hsl(var(--accent)/0.25)" }}>
                Director &amp; Vice-Dean
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">Dr. G. Vidya Kumar (GVK)</h3>
              <p className="text-muted-foreground text-sm mb-6 font-medium">MBBS (Russia) · MPH (India)</p>
              <TabbedContent
                tabs={[
                  {
                    label: "Message",
                    icon: <BookOpen className="w-4 h-4" />,
                    content: (
                      <div className="relative pl-6 border-l-2 border-[#253775]/30 space-y-4">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full" style={{ background: BLUE }} />
                        <p className="text-muted-foreground leading-relaxed">As a foreign medical graduate who successfully completed MBBS in Russia, I personally understand the challenges students face—new curricula, cultural adjustments, and financial planning. This drives my commitment to guide every student through their journey.</p>
                        <p className="text-muted-foreground leading-relaxed">At GVK EduTech, we offer 24/7 expert counseling to help students and parents navigate the entire process. From university selection to post-arrival support, my team and I are dedicated to turning dreams of becoming doctors into reality.</p>
                      </div>
                    ),
                  },
                  {
                    label: "Achievements",
                    icon: <Award className="w-4 h-4" />,
                    content: (
                      <div className="space-y-3">
                        {vidyaAchievements.map((ach, i) => (
                          <AchievementBadge key={i} title={ach.title} year={ach.year} body={ach.body} />
                        ))}
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <FramedPhoto
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/Directors/IMG_0025.PNG"
                alt="Dr. G. Vidya Kumar"
                flip={true}
              />
            </div>
          </div>
        </section>

        {/* ── Director Masters ── */}
        <section className="mb-28">
          <div className="text-center mb-14">
            <ColorfulHeading text="Director's Message" className="justify-center mb-3" size="3xl" />
            <SectionDivider />
            <p className="text-muted-foreground mt-4 text-sm tracking-widest uppercase font-medium">CEO · Masters &amp; Global Programs</p>
          </div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <FramedPhoto
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/Directors/IMG_0027.PNG"
                alt="Dr. G. Vinod Kumar"
                flip={false}
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.12), hsl(var(--accent)/0.12))", color: "hsl(var(--accent))", border: "1px solid hsl(var(--accent)/0.25)" }}>
                Director &amp; CEO
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">Dr. G. Vinod Kumar (GVK)</h3>
              <p className="text-muted-foreground text-sm mb-6 font-medium">MBA (UK) · Ph.D (USA)</p>
              <TabbedContent
                tabs={[
                  {
                    label: "Message",
                    icon: <BookOpen className="w-4 h-4" />,
                    content: (
                      <div className="relative pl-6 border-l-2 border-[#253775]/30 space-y-4">
                        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full" style={{ background: BLUE }} />
                        <p className="text-muted-foreground leading-relaxed">Holding an MBA from the UK and a Ph.D from the USA, I've personally experienced how international education transforms careers and lives. This insight drives my work at GVK EduTech to expand Masters and postgraduate opportunities for Indian students.</p>
                        <p className="text-muted-foreground leading-relaxed">We combine cutting-edge technology, strong industry partnerships, and our extensive global alumni network to ensure students secure admission and thrive academically and professionally on the world stage.</p>
                      </div>
                    ),
                  },
                  {
                    label: "Achievements",
                    icon: <Award className="w-4 h-4" />,
                    content: (
                      <div className="space-y-3">
                        {vinodAchievements.map((ach, i) => (
                          <AchievementBadge key={i} title={ach.title} year={ach.year} body={ach.body} />
                        ))}
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── Media Partners Carousel ── */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <ColorfulHeading text="Media Partners" className="justify-center mb-3" size="3xl" />
            <SectionDivider />
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Trusted and featured by leading media houses across Hyderabad, Telangana &amp; Andhra Pradesh
            </p>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden py-8"
            style={{
              background: "linear-gradient(160deg, hsl(var(--primary)/0.04) 0%, hsl(var(--accent)/0.04) 100%)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent 5%, hsl(var(--primary)) 40%, hsl(var(--accent)) 60%, transparent 95%)" }} />

            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">Featured In</span>
            </div>

            <MediaCarousel items={mediaPartners} />

            <p className="text-center text-muted-foreground/60 text-xs mt-5">
              Hover to pause &nbsp;·&nbsp; {mediaPartners.length} media partners
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent 5%, hsl(var(--accent)) 40%, hsl(var(--primary)) 60%, transparent 95%)" }} />
          </div>
        </section>

        {/* ── Certificate Modal ── */}
        {selectedCertIndex !== null && (
          <CertificateModal
            cert={certificates[selectedCertIndex]}
            index={selectedCertIndex}
            total={certificates.length}
            onClose={closeCert}
            onPrev={prevCert}
            onNext={nextCert}
          />
        )}

        {/* ── Certifications ── */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <ColorfulHeading text="Certifications" className="justify-center mb-3" size="3xl" />
            <SectionDivider />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Proudly recognized by leading national and international bodies for excellence in overseas education consulting
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Top row — 3 vertical certificates side by side */}
            <div className="grid grid-cols-3 gap-6 mb-6">
              {certificates.slice(0, 3).map((cert, i) => (
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    border: "1px solid hsl(var(--border))",
                    background: "hsl(var(--card))",
                    boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)",
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                  onClick={() => openCert(i)}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 40px -8px rgba(0,0,0,0.18)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px -2px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  {/* Top accent */}
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${cert.badge.color}, ${cert.badge.color}55)` }} />
                  {/* Portrait image */}
                  <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Zoom hint overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(0,0,0,0.28)" }}
                    >
                      <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-xs font-semibold" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>
                        <ZoomIn className="w-3.5 h-3.5" />
                        Click to view
                      </div>
                    </div>
                  </div>
                  {/* Footer */}
                  <div className="px-4 py-3" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                    <p className="font-bold text-foreground text-xs leading-snug truncate">{cert.title}</p>
                    <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{cert.desc}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-muted-foreground text-xs truncate mr-2">{cert.issuer}</p>
                      <span className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-md" style={{ background: cert.badge.bg, color: cert.badge.color }}>{cert.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row — 1 horizontal certificate centered */}
            <div className="flex justify-center">
              <div
                className="group relative rounded-xl overflow-hidden cursor-pointer w-full"
                style={{
                  border: "1px solid hsl(var(--border))",
                  background: "hsl(var(--card))",
                  boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  maxWidth: "520px",
                }}
                onClick={() => openCert(3)}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 40px -8px rgba(0,0,0,0.18)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 12px -2px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Top accent */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${certificates[3].badge.color}, ${certificates[3].badge.color}55)` }} />
                {/* Landscape image */}
                <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={certificates[3].image}
                    alt={certificates[3].title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Zoom hint overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,0,0,0.28)" }}
                  >
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-xs font-semibold" style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}>
                      <ZoomIn className="w-3.5 h-3.5" />
                      Click to view
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="px-5 py-3" style={{ borderTop: "1px solid hsl(var(--border))" }}>
                  <p className="font-bold text-foreground text-sm leading-snug truncate">{certificates[3].title}</p>
                  <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{certificates[3].desc}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-muted-foreground text-xs truncate mr-2">{certificates[3].issuer}</p>
                    <span className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-md" style={{ background: certificates[3].badge.bg, color: certificates[3].badge.color }}>{certificates[3].year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Accreditations ── */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <ColorfulHeading text="Accreditations" className="justify-center mb-3" size="3xl" />
            <SectionDivider />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              GVK EduTech and all partner universities hold internationally recognized accreditations, ensuring your degree is valid and respected worldwide.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div
              className="flex items-center justify-center gap-3 mb-10 py-3 px-6 rounded-2xl w-fit mx-auto"
              style={{
                background: "linear-gradient(90deg, hsl(var(--primary)/0.08), hsl(var(--accent)/0.08))",
                border: "1px solid hsl(var(--primary)/0.2)",
              }}
            >
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-semibold text-foreground">
                All partner institutions are globally accredited &amp; government approved
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {accreditations.map((item, i) => (
                <div
                  key={i}
                  className="accred-card group relative overflow-hidden rounded-2xl border border-border hover:border-accent/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default flex flex-col"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${item.glow} 0%, transparent 70%)` }}
                  />
                  <div
                    className="relative flex items-center justify-center overflow-hidden"
                    style={{
                      background: "linear-gradient(160deg, #ffffff 60%, hsl(var(--muted)/0.45) 100%)",
                      height: "130px",
                      padding: "20px 24px",
                      borderBottom: "1px solid hsl(var(--border)/0.6)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(ellipse at 50% 60%, ${item.glow} 0%, transparent 65%)` }}
                    />
                    <div
                      className="absolute top-3 right-3 w-2 h-2 rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"
                      style={{ background: item.badge.color }}
                    />
                    <div className="relative z-10 w-full h-full">
                      <AccredLogo logo={item.logo} icon={item.icon} name={item.name} />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-4 text-center">
                    <span
                      className="inline-block text-xs font-black px-3 py-1 rounded-full tracking-wide"
                      style={{ background: item.badge.bg, color: item.badge.color }}
                    >
                      {item.name}
                    </span>
                    <p className="font-semibold text-foreground text-xs leading-snug">{item.fullName}</p>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 border-t border-border/50"
                    style={{ background: "hsl(var(--muted)/0.35)" }}
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground font-medium">Verified &amp; Active</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground/60 text-xs mt-8 max-w-2xl mx-auto leading-relaxed">
              * Accreditation status is subject to the individual university. Students are advised to verify recognition with the respective regulatory body before enrollment.
            </p>
          </div>
        </section>

        {/* ── Regional Directors ── */}
        <section className="mb-24">
          <div className="text-center mb-14">
            <ColorfulHeading text="Regional Directors" className="justify-center mb-3" size="3xl" />
            <SectionDivider />
            <p className="text-muted-foreground mt-4 text-sm max-w-xl mx-auto">
              Our regional leaders driving excellence in overseas education counseling across India
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {regionalDirectors.map((director, index) => (
              <div key={index} className="group relative cursor-default" style={{ animationDelay: `${index * 0.05}s` }}>
                <div
                  className="relative overflow-hidden rounded-3xl border border-border/60 hover:border-primary/30 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.25)] transition-all duration-500 pt-10 pb-5 px-4 text-center"
                  style={{ background: "hsl(var(--card))" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-24 -skew-y-3 origin-top-left scale-110 transition-all duration-500 group-hover:h-28"
                    style={{ background: "linear-gradient(120deg, hsl(var(--primary)/0.18) 0%, hsl(var(--accent)/0.14) 100%)" }}
                  />
                  <div className="relative z-10 flex justify-center mb-3">
                    <div
                      className="relative w-20 h-20 rounded-full group-hover:scale-110 transition-transform duration-500"
                      style={{
                        padding: "3px",
                        background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
                        boxShadow: "0 8px 32px -4px hsl(var(--primary)/0.35)",
                      }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden" style={{ padding: "2px", background: "hsl(var(--card))" }}>
                        <div className="w-full h-full rounded-full overflow-hidden">
                          {director.image ? (
                            <img src={director.image} alt={director.name} className="w-full h-full object-cover object-top" />
                          ) : (
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-2xl">👤</div>
                          )}
                        </div>
                      </div>
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: "conic-gradient(from 0deg, hsl(var(--primary)/0.6), hsl(var(--accent)/0.6), hsl(var(--primary)/0.6))",
                          animation: "spin 3s linear infinite",
                          padding: "2px",
                          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), white 0)",
                          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), white 0)",
                        }}
                      />
                    </div>
                  </div>
                  <p className="relative z-10 font-bold text-foreground text-sm leading-tight mb-1 px-1">{director.name}</p>
                  <div className="relative z-10 flex items-center justify-center gap-1 mb-3">
                    <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                    <span className="text-accent text-xs font-semibold truncate">{director.city}</span>
                  </div>
                  <div
                    className="relative z-10 flex items-center justify-center gap-1.5 rounded-xl py-1.5 px-3 mx-auto"
                    style={{ background: "hsl(var(--primary)/0.07)", border: "1px solid hsl(var(--primary)/0.14)" }}
                  >
                    <GraduationCap className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-primary text-xs font-medium leading-tight">{director.qualification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Operational Team ── */}
        <section className="mb-24">
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-14 lg:px-14"
            style={{
              background: "linear-gradient(140deg, hsl(var(--primary)/0.05) 0%, hsl(var(--accent)/0.07) 100%)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 opacity-[0.04] pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-56 h-56 opacity-[0.04] pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }} />
            <div className="text-center mb-12 relative z-10">
              <ColorfulHeading text="Operational Team" className="justify-center mb-3" size="3xl" />
              <SectionDivider />
              <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto">
                The backbone of GVK EduTech — dedicated professionals powering daily operations
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto relative z-10">
              {operationalTeam.map((member, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-border/60 hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ background: "hsl(var(--card)/0.9)", backdropFilter: "blur(8px)" }}
                >
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                      style={{ boxShadow: "0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--accent)/0.3)" }}
                    >
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        <div className="w-full h-full bg-accent/10 flex items-center justify-center text-xl">👤</div>
                      )}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card bg-green-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-foreground text-sm leading-snug truncate">{member.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Settings className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      <p className="text-muted-foreground text-xs truncate">{member.qualification}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IT Team ── */}
        <section className="mb-24">
          <div
            className="relative rounded-3xl overflow-hidden px-8 py-14 lg:px-14"
            style={{
              background: "linear-gradient(140deg, hsl(var(--accent)/0.05) 0%, hsl(var(--primary)/0.07) 100%)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <div className="absolute top-0 left-0 w-72 h-72 opacity-[0.04] pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 right-0 w-56 h-56 opacity-[0.04] pointer-events-none"
              style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }} />

            {/* Heading */}
            <div className="text-center mb-12 relative z-10">
              <ColorfulHeading text="IT Team" className="justify-center mb-3" size="3xl" />
              <SectionDivider />
              <p className="text-muted-foreground mt-4 text-sm max-w-lg mx-auto">
                Our technology experts building the digital infrastructure behind GVK EduTech
              </p>
            </div>

            {/* ── Hierarchy layout ── */}
            <div className="relative z-10 max-w-4xl mx-auto mb-14">

              {/* Top row — IT Head (Mohan Reddy) centered */}
              <div className="flex justify-center mb-4">
                {itTeam.filter(m => m.isHead).map((member, index) => (
                  <div key={index} className="relative group">
                    {/* Crown badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black shadow-lg"
                        style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))", color: "#fff" }}
                      >
                        <Crown className="w-3 h-3" />
                        IT Head
                      </div>
                    </div>
                    <div
                      className="flex flex-col items-center gap-3 p-6 rounded-3xl border-2 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                      style={{
                        background: "hsl(var(--card)/0.95)",
                        backdropFilter: "blur(12px)",
                        borderColor: "hsl(var(--primary)/0.5)",
                        width: "200px",
                        boxShadow: "0 0 40px -8px hsl(var(--primary)/0.25)",
                      }}
                    >
                      <div
                        className="relative w-20 h-20 rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                        style={{ boxShadow: "0 0 0 3px hsl(var(--background)), 0 0 0 5px hsl(var(--primary)/0.4)" }}
                      >
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-foreground text-sm leading-snug">{member.name}</p>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <Monitor className="w-3 h-3 text-muted-foreground" />
                          <p className="text-muted-foreground text-xs">{member.qualification}</p>
                        </div>
                      </div>
                      {/* Role floating tag */}
                      <div
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-md"
                        style={{ background: "hsl(var(--primary))", color: "#fff" }}
                      >
                        {member.role}
                      </div>
                    </div>

                    {/* Connector line down */}
                    <div className="flex justify-center mt-6">
                      <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, hsl(var(--primary)/0.6), hsl(var(--accent)/0.4))" }} />
                    </div>
                    {/* Horizontal connector */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0" style={{ top: "calc(100% + 14px)", width: "340px", height: "1px", background: "linear-gradient(90deg, transparent, hsl(var(--accent)/0.5), transparent)" }} />
                  </div>
                ))}
              </div>

              {/* Bottom row — remaining 3 members */}
              <div className="flex flex-wrap justify-center gap-5 mt-2">
                {itTeam.filter(m => !m.isHead).map((member, index) => {
                  const tagColors = [
                    { bg: "hsl(var(--accent))", text: "#fff" },
                    { bg: "#8B5CF6", text: "#fff" },
                    { bg: "#10B981", text: "#fff" },
                  ];
                  const tc = tagColors[index % tagColors.length];
                  return (
                    <div key={index} className="relative group">
                      <div
                        className="flex flex-col items-center gap-3 p-5 rounded-2xl border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        style={{
                          background: "hsl(var(--card)/0.9)",
                          backdropFilter: "blur(8px)",
                          borderColor: "hsl(var(--border))",
                          width: "160px",
                        }}
                      >
                        <div
                          className="relative w-16 h-16 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
                          style={{ boxShadow: `0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--primary)/0.25)` }}
                        >
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-foreground text-xs leading-snug">{member.name}</p>
                          <div className="flex items-center justify-center gap-1 mt-1">
                            <Monitor className="w-3 h-3 text-muted-foreground" />
                            <p className="text-muted-foreground text-xs">{member.qualification}</p>
                          </div>
                        </div>
                        {/* Role floating tag */}
                        <div
                          className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-md"
                          style={{ background: tc.bg, color: tc.text }}
                        >
                          {member.role}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── What We Do ── */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">What We Do</h3>
                <p className="text-muted-foreground text-sm">End-to-end digital services powering GVK EduTech's online presence</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {itServices.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={i}
                      className="group flex items-center gap-3 p-3.5 rounded-2xl border border-border hover:border-transparent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                      style={{ background: "hsl(var(--card)/0.9)" }}
                    >
                      <div
                        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ background: svc.bg }}
                      >
                        <Icon className="w-4 h-4" style={{ color: svc.color }} />
                      </div>
                      <span className="text-foreground text-xs font-semibold leading-tight">{svc.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="mb-20">
          <ColorfulHeading text="Why Choose GVK EduTech?" className="text-center mb-12" size="3xl" />
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">Empower students with ethical, affordable, and high-quality overseas education consulting.</p>
              </CardContent>
            </Card>
            <Card className="border-border bg-gradient-to-br from-accent/5 to-accent/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">Become the most trusted study abroad advisor for Indian students pursuing global careers.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="mb-20">
          <ColorfulHeading text="Our Core Values" className="text-center mb-12" size="3xl" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-border text-center hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ── Success Stats CTA ── */}
        <section className="mb-20 bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-foreground mb-8">Join Thousands of Successful Students</h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              GVK EduTech has helped 5000+ students fulfill their dreams of studying in the USA, UK, Europe, and Asia. Whether you seek an affordable MBBS abroad or a specialized Masters program, we are your gateway to global education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+abroad." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  FREE Counseling Session
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <a href="tel:+919010060000">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 90100 60000
                </a>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
};

export default AboutPage;