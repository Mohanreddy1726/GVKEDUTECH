"use client";

import {
  ArrowRight, Play, GraduationCap, Globe, Award, Stethoscope,
  Calculator, ChevronLeft, ChevronRight, MapPin, CheckCircle,
  Users, TrendingUp, BookOpen, Star, Zap, Shield,
  Trophy, Medal, Crown, Mic
} from "lucide-react";

const AWARD_ICONS = { Trophy, Medal, Award, Star, Globe, Crown, Mic, World: Globe };
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { useState, useEffect, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────────
   BRAND COLORS  — same on every slide
   Red  : #FF0008   Red Dark  : #A80005
   Blue : #253775   Blue Dark : #162248
───────────────────────────────────────────────────────────── */
const RED       = "#FF0008";
const RED_DARK  = "#A80005";
const BLUE      = "#253775";
const BLUE_DARK = "#162248";
const RED_GLOW  = "rgba(255,0,8,0.22)";
const BLUE_GLOW = "rgba(37,55,117,0.30)";

/* shared dark background — same for both slides */
const BG = "linear-gradient(140deg,#08010a 0%,#0e0316 40%,#010614 100%)";

const slides = [
  {
    id: "mbbs",
    tag: "MBBS Abroad",
    headline: ["Your Path to", "Becoming a", "Global Doctor"],
    hl: 2,                             /* which line gets the RED accent */
    sub: "Study MBBS at NMC/WHO-approved universities across Russia, Kazakhstan & Europe — zero donation, English medium, complete support from day one.",
    photo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Directors/IMG_0025.PNG",
    photoName: "Dr. G. Vidya Kumar (GVK)",
    photoRole: "Vice-Dean · MBBS Programs",
    photoQuote: "Every student deserves world-class medical education. We make it possible.",
    features: ["NMC / WHO Approved", "No Donation Fee", "English Medium", "Hostel Included"],
    countries: [
      { flag: "ru", label: "Russia" },
      { flag: "kz", label: "Kazakhstan" },
      { flag: "ge", label: "Georgia" },
      { flag: "np", label: "Nepal" },
      { flag: "uz", label: "Uzbekisthan" },
    ],
    centerCards: [
      { icon: Shield,     label: "Recognition",    value: "NMC / WHO",    accent: RED  },
      { icon: Users,      label: "Students Placed", value: "5000+",        accent: BLUE },
      { icon: TrendingUp, label: "Visa Success",    value: "98%",          accent: RED  },
      { icon: BookOpen,   label: "Program",         value: "MBBS / MD",    accent: BLUE },
    ],
    ticker: [
      "Russia · 6 Years · ₹20–30L Total",
      "Kazakhstan · 5 Years · ₹22–28L Total",
      "Georgia · 6 Years · ₹25–32L Total",
      "Nepal · 6 Years · ₹20–25L Total",
      "Uzbekisthan · 5 Years · ₹18–24L Total",
    ],
    awards: [
      { icon: "Trophy",  title: "Young Entrepreneur",        sub: "Dubai · 2022",       accent: RED,  pos: "tl" },
      { icon: "Medal",   title: "Partner Appreciation",      sub: "New Delhi · 2023",   accent: BLUE, pos: "tr" },
      { icon: "World",   title: "G-20 Global Icon",          sub: "Sri Lanka · 2024",   accent: RED,  pos: "bl" },
      { icon: "Award",   title: "Arise Excellence Award",    sub: "Hyderabad · 2026",   accent: BLUE, pos: "br" },
    ],
  },
  {
    id: "masters",
    tag: "Masters Abroad",
    headline: ["Elevate Your", "Career with a", "Global Masters"],
    hl: 2,
    sub: "Pursue MBA, MS and postgraduate programs at top-ranked universities in the UK, USA, Europe & Asia — scholarship guidance and visa support at every step.",
    photo: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Directors/IMG_0027.PNG",
    photoName: "Dr. G. Vinod Kumar (GVK) ",
    photoRole: "CEO · Masters & Global Programs",
    photoQuote: "International education transformed my life. Let it transform yours too.",
    features: ["Scholarship Support", "100+ Universities", "IELTS / GRE Help", "Visa Guidance"],
    countries: [
      { flag: "gb", label: "UK" },
      { flag: "us", label: "USA" },
      { flag: "de", label: "Germany" },
      { flag: "au", label: "Australia" },
      { flag: "ca", label: "Canada" },
    ],
    centerCards: [
      { icon: Star,       label: "Rankings",       value: "QS Top 200",   accent: RED  },
      { icon: Globe,      label: "Countries",      value: "20+ Nations",  accent: BLUE },
      { icon: Zap,        label: "Intake",         value: "Jan & Sep",    accent: RED  },
      { icon: Award,      label: "Scholarships",   value: "Up to 50%",    accent: BLUE },
    ],
    ticker: [
      "MBA · UK · 1–2 Years",
      "MS Computer Science · USA · 2 Years",
      "M.Sc · Germany · Free Tuition",
      "MBA · Australia · 1.5 Years",
    ],
    awards: [
      { icon: "Crown",   title: "London Global Award",       sub: "London · 2024",      accent: RED,  pos: "tl" },
      { icon: "Star",    title: "Governor's Awardee",        sub: "Telangana · 2025",   accent: BLUE, pos: "tr" },
      { icon: "Globe",   title: "Global Change Makers",      sub: "International · 2026", accent: RED, pos: "bl" },
      { icon: "Mic",     title: "UN Conference Speaker",     sub: "Bangkok · 2026",     accent: BLUE, pos: "br" },
    ],
  },
];

/* all branches */
const branches = [
  { label: "Hyderabad",     href: "/branches/hyderabad",      flag: "in" },
  { label: "Warangal",      href: "/branches/warangal",       flag: "in" },
  { label: "Karimnagar",    href: "/branches/karimnagar",     flag: "in" },
  { label: "Chennai",       href: "/branches/chennai",        flag: "in" },
  { label: "Vijayawada",    href: "/branches/vijayawada",     flag: "in" },
  { label: "Nalgonda",      href: "/branches/nalgonda",       flag: "in" },
  { label: "Bangalore",     href: "/branches/bangalore",      flag: "in" },
  { label: "Visakhapatnam", href: "/branches/visakhapatnam",  flag: "in" },
  { label: "Suryapet",      href: "/branches/suryapet",       flag: "in" },
  { label: "Nellore",       href: "/branches/nellore",        flag: "in" },
  { label: "Tirupati",      href: "/branches/tirupati",       flag: "in" },
];

function useInterval(fn, delay, paused) {
  const saved = useRef(fn);
  useEffect(() => { saved.current = fn; }, [fn]);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay, paused]);
}

/* ══════════════════════════════════════════════════════════ */
export const Hero = () => {
  const [active,   setActive]   = useState(0);
  const [animKey,  setAnimKey]  = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [progress, setProgress] = useState(0);
  const [tickIdx,  setTickIdx]  = useState(0);

  const DURATION = 4000; /* 4 seconds per slide */

  const yr      = new Date().getFullYear();
  const admYear = `${yr}-${yr + 1}`;

  const goTo = useCallback((idx) => {
    setActive(idx);
    setAnimKey(k => k + 1);
    setProgress(0);
    setTickIdx(0);
  }, []);

  const goNext = useCallback(() => goTo((active + 1) % slides.length), [active, goTo]);
  const goPrev = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo]);

  /* auto advance */
  useInterval(goNext, DURATION, paused);

  /* progress bar */
  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const t0 = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(((now - t0) / DURATION) * 100, 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, paused]);

  /* ticker */
  useInterval(() => setTickIdx(i => (i + 1) % slides[active].ticker.length), 2200, false);

  const scrollTo = (tab) => {
    const el = document.getElementById("college-predictor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => window.dispatchEvent(new CustomEvent("switch-predictor-tab", { detail: tab })), 500);
    }
  };

  const s = slides[active];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── KEYFRAMES ── */}
      <style>{`
        @keyframes hfu   { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes hfi   { from{opacity:0} to{opacity:1} }
        @keyframes hsi   { from{opacity:0;transform:scale(0.94) translateY(12px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes hflt  { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-11px) rotate(.7deg)} }
        @keyframes hshm  { 0%{transform:translateX(-140%)} 100%{transform:translateX(290%)} }
        @keyframes hspin { to{transform:rotate(360deg)} }
        @keyframes htick { 0%{opacity:0;transform:translateY(8px)} 15%,85%{opacity:1;transform:translateY(0)} 100%{opacity:0;transform:translateY(-8px)} }
        @keyframes hpop  { 0%{opacity:0;transform:scale(0.86) translateY(10px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes hline { 0%{width:0} 100%{width:60%} }
        @keyframes aw-tl { from{opacity:0;transform:translate(-16px,-12px)} to{opacity:1;transform:translate(0,0)} }
        @keyframes aw-tr { from{opacity:0;transform:translate(16px,-12px)} to{opacity:1;transform:translate(0,0)} }
        @keyframes aw-bl { from{opacity:0;transform:translate(-16px,12px)} to{opacity:1;transform:translate(0,0)} }
        @keyframes aw-br { from{opacity:0;transform:translate(16px,12px)} to{opacity:1;transform:translate(0,0)} }
        @keyframes aw-bob-a { 0%,100%{transform:translateY(0) rotate(-1.2deg)} 50%{transform:translateY(-9px) rotate(1deg)} }
        @keyframes aw-bob-b { 0%,100%{transform:translateY(0) rotate(1deg)} 50%{transform:translateY(-7px) rotate(-1.5deg)} }
        @keyframes aw-bob-c { 0%,100%{transform:translateY(0) rotate(-0.6deg)} 50%{transform:translateY(-11px) rotate(0.9deg)} }
        @keyframes aw-bob-d { 0%,100%{transform:translateY(0) rotate(1.3deg)} 50%{transform:translateY(-8px) rotate(-0.7deg)} }
        .hfu  { animation: hfu  0.6s cubic-bezier(.22,1,.36,1) both; }
        .hfi  { animation: hfi  0.45s ease both; }
        .hsi  { animation: hsi  0.65s cubic-bezier(.22,1,.36,1) both; }
        .hflt { animation: hflt 8s ease-in-out infinite; }
        .hpop { animation: hpop 0.5s cubic-bezier(.22,1,.36,1) both; }
        .htick-anim { animation: htick 2.1s ease both; }
        .aw-badge { position:absolute; display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:14px; backdrop-filter:blur(14px); z-index:20; pointer-events:none; min-width:158px; max-width:195px; }
       .aw-tl { top:-42px; left:-62px; animation: aw-tl .55s cubic-bezier(.22,1,.36,1) both, aw-bob-a 6s ease-in-out infinite; }
.aw-tr { top:-42px; right:-62px; animation: aw-tr .55s cubic-bezier(.22,1,.36,1) .14s both, aw-bob-b 7s ease-in-out infinite; }
.aw-bl { bottom:-48px; left:-62px; animation: aw-bl .55s cubic-bezier(.22,1,.36,1) .28s both, aw-bob-c 5.5s ease-in-out infinite; }
.aw-br { bottom:-48px; right:-62px; animation: aw-br .55s cubic-bezier(.22,1,.36,1) .42s both, aw-bob-d 6.5s ease-in-out infinite; }
      `}</style>

      {/* ── SHARED DARK BACKGROUND ── */}
      <div className="absolute inset-0" style={{ background: BG }} />

      {/* ── AMBIENT GLOWS — red top-right, blue bottom-left, always ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Red glow — top right */}
        <div className="absolute rounded-full blur-[130px]"
          style={{ width:"55vw", height:"55vw", top:"-15%", right:"-8%", background: RED_GLOW, opacity:.55 }} />
        {/* Blue glow — bottom left */}
        <div className="absolute rounded-full blur-[110px]"
          style={{ width:"45vw", height:"45vw", bottom:"-12%", left:"-6%", background: BLUE_GLOW, opacity:.55 }} />
        {/* Subtle center glow */}
        <div className="absolute rounded-full blur-[90px]"
          style={{ width:"28vw", height:"35vw", top:"22%", left:"36%", background: BLUE_GLOW, opacity:.12 }} />
        {/* Grid lines — red tint */}
        <div className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `linear-gradient(${RED}88 1px,transparent 1px),linear-gradient(90deg,${BLUE}88 1px,transparent 1px)`,
            backgroundSize: "56px 56px",
          }} />
        {/* Diagonal accent stripe */}
        <div className="absolute pointer-events-none"
          style={{
            top: 0, right: "25%", width: "2px", height: "100%",
            background: `linear-gradient(to bottom, transparent 0%, ${RED}40 30%, ${BLUE}40 70%, transparent 100%)`,
            transform: "rotate(12deg) scaleY(1.3)",
          }} />
      </div>

      {/* ── CONTENT ── */}
      <div className="container mx-auto px-4 pt-44 pb-4 relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px_340px] gap-6 xl:gap-8 items-start">

          {/* ════════════════════════════
              COL 1 — TEXT
          ════════════════════════════ */}
          <div className="space-y-4 order-1 pt-4">

            {/* Admission + slide tag badges */}
            <div key={`b-${animKey}`} className="hfi flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase"
                style={{ background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.12)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Admissions Open {admYear}
              </span>
              {/* Tag uses RED for MBBS, BLUE for Masters */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase"
                style={{
                  background: active === 0 ? RED : BLUE,
                  color: "#fff",
                  boxShadow: active === 0
                    ? `0 4px 18px -4px ${RED_GLOW}`
                    : `0 4px 18px -4px ${BLUE_GLOW}`,
                }}>
                {s.tag}
              </span>
            </div>

            {/* Headline — line[hl] in RED, rest white */}
            <div key={`h-${animKey}`}>
              {s.headline.map((line, i) => (
                <h1 key={i} className="hfu font-black leading-[1.06] tracking-tight"
                  style={{
                    fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)",
                    animationDelay: `${i * 0.08}s`,
                    color: i === s.hl ? RED : "#fff",
                    textShadow: i === s.hl ? `0 0 50px ${RED_GLOW}` : "none",
                  }}>
                  {line}
                </h1>
              ))}
            </div>

            {/* Animated underline — red to blue */}
            <div key={`ul-${animKey}`}
              className="h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg,${RED},${BLUE},transparent)`,
                animation: "hline 0.8s 0.28s cubic-bezier(.22,1,.36,1) forwards",
                width: 0,
              }} />

            {/* Sub-text */}
            <p key={`s-${animKey}`} className="hfu text-white/60 leading-relaxed max-w-md"
              style={{ fontSize:"clamp(0.87rem,1.3vw,1rem)", animationDelay:"0.24s" }}>
              {s.sub}
            </p>

            {/* Feature pills — red border */}
            <div key={`f-${animKey}`} className="hfu flex flex-wrap gap-2" style={{ animationDelay:"0.30s" }}>
              {s.features.map((f, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
                  style={{ background:"rgba(255,255,255,0.05)", color:"#fff", border:`1px solid ${RED}45` }}>
                  <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: RED }} />
                  {f}
                </span>
              ))}
            </div>

            {/* Countries — blue tint */}
            <div key={`c-${animKey}`} className="hfu flex flex-wrap gap-2" style={{ animationDelay:"0.34s" }}>
              {s.countries.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.55)", border:`1px solid ${BLUE}40` }}>
                  <span className={`fi fi-${c.flag}`} style={{ fontSize: "13px" }} />
                  {c.label}
                </span>
              ))}
            </div>

            {/* AI Tool buttons */}
            <div key={`t-${animKey}`} className="hfu flex flex-wrap gap-3" style={{ animationDelay:"0.38s" }}>
              {/* College Predictor — RED */}
              <button onClick={() => scrollTo("predictor")}
                className="group relative flex items-center gap-2.5 px-5 py-3 rounded-2xl text-white font-bold text-sm overflow-hidden transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{ background:`linear-gradient(135deg,${RED},${RED_DARK})`, boxShadow:`0 8px 28px -6px ${RED_GLOW}`, border:`1px solid ${RED}60` }}>
                <span className="absolute inset-y-0 w-1/2 -skew-x-12 pointer-events-none"
                  style={{ background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)", animation:"hshm 2.8s ease-in-out infinite" }} />
                <span className="relative w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-3.5 h-3.5" />
                </span>
                <span className="relative text-left">
                  <span className="block text-[9px] text-white/60 font-medium leading-none mb-0.5">AI Powered</span>
                  <span className="block text-sm leading-none">College Predictor</span>
                </span>
                <ArrowRight className="relative w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Budget Calculator — BLUE */}
              <button onClick={() => scrollTo("budget")}
                className="group flex items-center gap-2.5 px-5 py-3 rounded-2xl text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{ background:`linear-gradient(135deg,${BLUE},${BLUE_DARK})`, boxShadow:`0 8px 28px -6px ${BLUE_GLOW}`, border:`1px solid ${BLUE}60` }}>
                <span className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-3.5 h-3.5" />
                </span>
                <span className="text-left">
                  <span className="block text-[9px] text-white/60 font-medium leading-none mb-0.5">Smart Tool</span>
                  <span className="block text-sm leading-none">Budget Calculator</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Primary CTAs */}
            <div key={`p-${animKey}`} className="hfu flex flex-wrap gap-3" style={{ animationDelay:"0.44s" }}>
              {/* Begin — RED */}
              <Link href="/apply"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{ background:`linear-gradient(135deg,${RED},${RED_DARK})`, boxShadow:`0 10px 32px -8px ${RED_GLOW}` }}>
                Begin Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              {/* Watch — ghost */}
              <Link href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.14)", backdropFilter:"blur(8px)" }}>
                <Play className="w-4 h-4" />
                Watch Success Stories
              </Link>
            </div>

            {/* ALL Branches */}
            <div key={`br-${animKey}`} className="hfu" style={{ animationDelay:"0.50s",maxWidth:"430px" }}>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: RED }} />
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color:"rgba(255,255,255,0.35)" }}>
                  Our Branches
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {branches.map((b, i) => (
                  <Link key={b.label} href={b.href}>
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-semibold cursor-pointer transition-all duration-200 hover:bg-white/15 hover:text-white"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.45)",
                        border: `1px solid ${i % 2 === 0 ? RED : BLUE}30`,
                      }}
                    >
                      <span className={`fi fi-${b.flag} mr-1`} />
                      {b.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ════════════════════════════
              COL 2 — CENTER PANEL
          ════════════════════════════ */}
          <div className="order-2 flex flex-col gap-3 pt-10">

            {/* Live ticker */}
            <div key={`tk-${animKey}`} className="hfi rounded-2xl overflow-hidden"
              style={{ background:"rgba(255,255,255,0.04)", border:`1px solid rgba(255,255,255,0.08)`, backdropFilter:"blur(10px)" }}>
              <div className="px-4 py-2 flex items-center gap-2"
                style={{ borderBottom:"1px solid rgba(255,255,255,0.06)", background:`linear-gradient(90deg,${RED}18,${BLUE}18)` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: RED }} />
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Live Fee Updates</span>
              </div>
              <div className="px-4 py-3 h-10 overflow-hidden relative">
                <p key={`tk-${tickIdx}-${animKey}`}
                  className="htick-anim text-white/80 text-xs font-semibold absolute inset-x-4">
                  📍 {s.ticker[tickIdx]}
                </p>
              </div>
            </div>

            {/* 2×2 stat cards — alternating red / blue */}
            <div className="grid grid-cols-2 gap-2.5">
              {s.centerCards.map((card, i) => {
                const Icon = card.icon;
                const ac   = card.accent;
                const gl   = ac === RED ? RED_GLOW : BLUE_GLOW;
                return (
                  <div key={`${animKey}-${i}`} className="hpop rounded-2xl p-4 flex flex-col gap-2"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${ac}35`,
                      backdropFilter: "blur(10px)",
                      animationDelay: `${i * 0.07}s`,
                      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)`,
                    }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background:`${ac}20`, border:`1px solid ${ac}40` }}>
                      <Icon className="w-4 h-4" style={{ color: ac }} />
                    </div>
                    <p className="text-white font-extrabold text-lg leading-none">{card.value}</p>
                    <p className="text-[11px] font-medium leading-tight" style={{ color:"rgba(255,255,255,0.45)" }}>{card.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Red-blue divider */}
            <div className="h-px w-full"
              style={{ background:`linear-gradient(90deg,transparent,${RED}55,${BLUE}55,transparent)` }} />

            {/* Trust strip */}
            <div className="rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", backdropFilter:"blur(10px)" }}>
              <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background:`linear-gradient(135deg,${RED}30,${BLUE}30)`, border:`1px solid rgba(255,255,255,0.1)` }}>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-tight">Govt. Approved & Trusted</p>
                <p className="text-[10px] mt-0.5" style={{ color:"rgba(255,255,255,0.38)" }}>NMC · WHO · MCI Recognized</p>
              </div>
            </div>

            {/* Free counseling CTA strip — red→blue gradient */}
            <Link href="/apply"
              className="group rounded-2xl px-4 py-3 flex items-center justify-between transition-all duration-200 hover:-translate-y-0.5"
              style={{ background:`linear-gradient(135deg,${RED}25,${BLUE}25)`, border:`1px solid rgba(255,255,255,0.09)` }}>
              <div>
                <p className="text-white text-xs font-extrabold">Free Counseling Session</p>
                <p className="text-[10px] mt-0.5" style={{ color:"rgba(255,255,255,0.42)" }}>Talk to an expert today — No fees</p>
              </div>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-3"
                style={{ background:`linear-gradient(135deg,${RED},${BLUE})` }}>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* 15 years badge */}
            <div className="rounded-2xl px-4 py-3 flex items-center gap-3"
              style={{ background:`linear-gradient(135deg,${BLUE}20,${RED}20)`, border:`1px solid ${BLUE}35` }}>
              <div className="flex-shrink-0 text-center">
                <p className="font-black text-2xl leading-none" style={{ color: RED }}>15+</p>
                <p className="text-[9px] font-bold text-white/40 leading-tight mt-0.5">YEARS</p>
              </div>
              <div className="w-px h-8 bg-white/10 flex-shrink-0" />
              <div>
                <p className="text-white text-xs font-bold">Trusted Experience</p>
                <p className="text-[10px] mt-0.5" style={{ color:"rgba(255,255,255,0.40)" }}>
                  Leading overseas education consultancy since {yr - 15}
                </p>
              </div>
            </div>
          </div>

          {/* ════════════════════════════
              COL 3 — PHOTO CARD
          ════════════════════════════ */}
          <div className="relative flex flex-col items-center gap-3 order-3 pt-12">

            <div className="relative w-full max-w-[320px]">
              {/* Outer glow — red + blue */}
              <div className="absolute -inset-4 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 30% 30%, ${RED_GLOW} 0%, transparent 55%),
                               radial-gradient(ellipse at 70% 70%, ${BLUE_GLOW} 0%, transparent 55%)`,
                  filter: "blur(20px)",
                }} />
              {/* Spinning conic — red + blue */}
              <div className="absolute -inset-[2px] rounded-3xl pointer-events-none"
                style={{
                  background: `conic-gradient(from 0deg, ${RED} 0%, transparent 30%, ${BLUE} 50%, transparent 80%, ${RED} 100%)`,
                  opacity: .32,
                  animation: "hspin 12s linear infinite",
                }} />

              {/* ── FLOATING AWARD BADGES ── */}
              {s.awards.map((aw) => {
                const Icon = AWARD_ICONS[aw.icon] || Award;
                const isRed = aw.accent === RED;
                const glow  = isRed ? RED_GLOW : BLUE_GLOW;
                return (
                  <div
                    key={`${animKey}-${aw.pos}`}
                    className={`aw-badge aw-${aw.pos}`}
                    style={{
                      background: `linear-gradient(135deg, rgba(14,10,26,0.96) 0%, ${aw.accent}18 100%)`,
                      border: `1.5px solid ${aw.accent}70`,
                      boxShadow: `0 0 0 1px ${aw.accent}20, 0 8px 32px ${glow}, 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)`,
                    }}
                  >
                    {/* Icon circle with stronger glow */}
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${aw.accent}28`,
                        border: `1.5px solid ${aw.accent}55`,
                        boxShadow: `0 0 12px ${aw.accent}40`,
                      }}
                    >
                      <Icon className="w-4.5 h-4.5" style={{ color: aw.accent, width: "18px", height: "18px" }} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-extrabold leading-tight" style={{ fontSize: "11px" }}>{aw.title}</p>
                      <p
  className="font-semibold leading-tight mt-1 text-white"
  style={{
    fontSize: "10px",
    opacity: 0.82
  }}
>
  {aw.sub}
</p>
                    </div>
                  </div>
                );
              })}

              {/* Card */}
              <div key={`card-${animKey}`} className="hsi relative rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(10,8,18,0.85)",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 40px 80px -20px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.07)`,
                }}>

                {/* Red→Blue top bar */}
                <div className="h-1.5 w-full"
                  style={{ background:`linear-gradient(90deg,${RED},${BLUE})` }} />

                {/* Photo */}
                <div className="relative overflow-hidden hflt" style={{ aspectRatio:"3/4" }}>
                  <img src={s.photo} alt={s.photoName}
                    className="w-full h-full object-cover object-top transition-opacity duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 pointer-events-none"
                    style={{ background:"linear-gradient(to top,rgba(6,4,14,0.97) 0%,transparent 100%)" }} />
                  {/* Program badge — RED for MBBS, BLUE for Masters */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold"
                    style={{
                      background: active === 0 ? RED : BLUE,
                      color: "#fff",
                      boxShadow: active === 0 ? `0 4px 16px -4px ${RED_GLOW}` : `0 4px 16px -4px ${BLUE_GLOW}`,
                    }}>
                    {s.tag}
                  </div>
                  {/* Verified badge */}
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.18)", backdropFilter:"blur(8px)" }}>
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                {/* Name + quote */}
                <div className="px-4 py-4 relative z-10">
                  <p className="font-extrabold text-white text-sm leading-tight">{s.photoName}</p>
                  {/* Role in RED for MBBS, BLUE for Masters */}
                  <p className="text-[11px] font-semibold mt-0.5 mb-2.5"
                    style={{ color: active === 0 ? RED : BLUE }}>
                    {s.photoRole}
                  </p>
                  <blockquote className="text-[11px] text-white/48 leading-relaxed italic border-l-2 pl-2.5"
                    style={{ borderColor: active === 0 ? RED : BLUE }}>
                    "{s.photoQuote}"
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Stats row — alternating red/blue icons */}
            {/* <div className="grid grid-cols-3 gap-1.5 w-full max-w-[320px]">
              {[
                { n:"5000+", l:"Students",  icon: GraduationCap, ac: RED  },
                { n:"15+",   l:"Years",     icon: Award,         ac: BLUE },
                { n:"98%",   l:"Visa Rate", icon: Globe,         ac: RED  },
              ].map((st, i) => (
                <div key={i} className="hfu flex flex-col items-center gap-1 py-2.5 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${st.ac}28`,
                    backdropFilter: "blur(8px)",
                    animationDelay: `${0.1 + i * 0.07}s`,
                  }}>
                  <st.icon className="w-3.5 h-3.5" style={{ color: st.ac }} />
                  <span className="font-extrabold text-white text-sm leading-none">{st.n}</span>
                  <span className="text-[9px] leading-tight" style={{ color:"rgba(255,255,255,0.38)" }}>{st.l}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* ══ CAROUSEL CONTROLS ══ */}
        <div className="flex items-center justify-center gap-5 mt-15 pb-2">
          <button onClick={goPrev} aria-label="Previous"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background:"rgba(255,255,255,0.07)", border:`1px solid ${RED}40` }}>
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            {slides.map((sl, i) => (
              <button key={sl.id} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                className="relative overflow-hidden rounded-full transition-all duration-500"
                style={{
                  height: "6px",
                  width: i === active ? "56px" : "6px",
                  background: i === active
                    ? (i === 0 ? RED : BLUE)
                    : "rgba(255,255,255,0.18)",
                }}>
                {i === active && (
                  <span className="absolute inset-y-0 left-0 rounded-full"
                    style={{ width:`${progress}%`, background:"rgba(255,255,255,0.45)", transition:"width .1s linear" }} />
                )}
              </button>
            ))}
          </div>

          <button onClick={goNext} aria-label="Next"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background:"rgba(255,255,255,0.07)", border:`1px solid ${BLUE}40` }}>
            <ChevronRight className="w-5 h-5" />
          </button>

          <span className="hidden sm:flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase">
            <span style={{ color: RED }}>MBBS</span>
            <span style={{ color:"rgba(255,255,255,0.2)" }}>·</span>
            <span style={{ color: BLUE }}>MASTERS</span>
          </span>
        </div>
      </div>

      {/* ── Wave divider ── */}
      <div className="absolute bottom-[-1px] left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block" }}>
          <path d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 56C1200 56 1320 56 1380 56L1440 56V80H0Z"
            fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};