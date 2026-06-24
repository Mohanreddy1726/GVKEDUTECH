"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Stethoscope,
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Check,
  CheckCircle2,
  Lightbulb,
  Plane,
  GraduationCap,
  Award,
  AlertTriangle,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import { validatePhone } from "@/utils/validation";

// ===================== DATA =====================
// Mirror of partner-universities / smart-comparison MBBS + Masters catalog.
// Structured so it can be swapped for an API call later without touching the UI.

const MBBS_COUNTRIES = [
  { name: "Philippines",  code: "ph", cost: 2800000, duration: 6,   fmgeRate: 45, riskScore: 35, foodRating: 4, languageBarrier: "Low",    nmcRecognized: true },
  { name: "Russia",       code: "ru", cost: 3200000, duration: 6,   fmgeRate: 38, riskScore: 42, foodRating: 3, languageBarrier: "Medium", nmcRecognized: true },
  { name: "Georgia",      code: "ge", cost: 2500000, duration: 6,   fmgeRate: 41, riskScore: 30, foodRating: 4, languageBarrier: "Low",    nmcRecognized: true },
  { name: "Kyrgyzstan",   code: "kg", cost: 1800000, duration: 6,   fmgeRate: 35, riskScore: 38, foodRating: 3, languageBarrier: "Low",    nmcRecognized: true },
  { name: "Kazakhstan",   code: "kz", cost: 2200000, duration: 6,   fmgeRate: 37, riskScore: 36, foodRating: 3, languageBarrier: "Low",    nmcRecognized: true },
  { name: "Bangladesh",   code: "bd", cost: 2000000, duration: 5.5, fmgeRate: 52, riskScore: 28, foodRating: 5, languageBarrier: "Low",    nmcRecognized: true },
  { name: "China",        code: "cn", cost: 3500000, duration: 6,   fmgeRate: 32, riskScore: 50, foodRating: 4, languageBarrier: "Medium", nmcRecognized: true },
  { name: "Egypt",        code: "eg", cost: 2100000, duration: 6,   fmgeRate: 43, riskScore: 33, foodRating: 3, languageBarrier: "Medium", nmcRecognized: true },
  { name: "Ukraine",      code: "ua", cost: 2600000, duration: 6,   fmgeRate: 40, riskScore: 65, foodRating: 3, languageBarrier: "Medium", nmcRecognized: true },
  { name: "Uzbekistan",   code: "uz", cost: 1900000, duration: 6,   fmgeRate: 36, riskScore: 32, foodRating: 3, languageBarrier: "Low",    nmcRecognized: true },
];

const MASTERS_COUNTRIES = [
  { name: "UK",            code: "gb", cost: 3500000, duration: 1.5, recognitionPct: 90, riskScore: 20, foodRating: 4, languageBarrier: "Low",    visaRoute: "Skilled Worker" },
  { name: "USA",           code: "us", cost: 6000000, duration: 2,   recognitionPct: 95, riskScore: 18, foodRating: 4, languageBarrier: "Low",    visaRoute: "H1B/OPT" },
  { name: "Germany",       code: "de", cost: 1200000, duration: 2,   recognitionPct: 88, riskScore: 15, foodRating: 3, languageBarrier: "Medium", visaRoute: "Job Seeker" },
  { name: "Australia",     code: "au", cost: 4500000, duration: 1.5, recognitionPct: 85, riskScore: 20, foodRating: 4, languageBarrier: "Low",    visaRoute: "PR pathway" },
  { name: "Canada",        code: "ca", cost: 4000000, duration: 2,   recognitionPct: 87, riskScore: 18, foodRating: 4, languageBarrier: "Low",    visaRoute: "Express Entry" },
  { name: "Ireland",       code: "ie", cost: 3000000, duration: 1,   recognitionPct: 82, riskScore: 18, foodRating: 3, languageBarrier: "Low",    visaRoute: "Critical Skills" },
  { name: "Netherlands",   code: "nl", cost: 2500000, duration: 2,   recognitionPct: 84, riskScore: 16, foodRating: 3, languageBarrier: "Medium", visaRoute: "Highly Skilled" },
  { name: "New Zealand",   code: "nz", cost: 3200000, duration: 1.5, recognitionPct: 80, riskScore: 20, foodRating: 3, languageBarrier: "Low",    visaRoute: "Skilled Migrant" },
  { name: "Singapore",     code: "sg", cost: 3800000, duration: 1,   recognitionPct: 88, riskScore: 15, foodRating: 5, languageBarrier: "Low",    visaRoute: "EP/S Pass" },
  { name: "UAE",           code: "ae", cost: 2800000, duration: 1.5, recognitionPct: 75, riskScore: 22, foodRating: 5, languageBarrier: "Low",    visaRoute: "Golden Visa" },
];

const MBBS_SPECIALTIES = {
  "General Medicine": { startingSalary: 800000, peakSalary: 2500000 },
  "Surgery":          { startingSalary: 1200000, peakSalary: 5000000 },
  "Paediatrics":      { startingSalary: 900000, peakSalary: 3000000 },
  "Radiology":        { startingSalary: 1500000, peakSalary: 6000000 },
  "Dermatology":      { startingSalary: 1800000, peakSalary: 8000000 },
  "Orthopaedics":     { startingSalary: 1400000, peakSalary: 6000000 },
  "Psychiatry":       { startingSalary: 700000, peakSalary: 2500000 },
  "Anaesthesia":      { startingSalary: 1100000, peakSalary: 4000000 },
};

const MASTERS_SPECIALIZATIONS = {
  "MBA (General / Strategy / Finance)":      { startingSalary: 1200000, peakSalary: 4500000 },
  "MS Data Science / Analytics":             { startingSalary: 1400000, peakSalary: 5500000 },
  "MS Artificial Intelligence / ML":         { startingSalary: 1500000, peakSalary: 6000000 },
  "MS Computer Science":                     { startingSalary: 1300000, peakSalary: 5500000 },
  "MS Business Analytics":                   { startingSalary: 1200000, peakSalary: 4800000 },
  "MS Information Technology / Systems":     { startingSalary: 1100000, peakSalary: 4200000 },
  "MS Marketing / Digital Marketing":        { startingSalary: 1000000, peakSalary: 3800000 },
  "MS Project Management":                   { startingSalary: 1100000, peakSalary: 4000000 },
  "MS Supply Chain Management":              { startingSalary: 1100000, peakSalary: 4000000 },
  "MS Financial Engineering / FinTech":      { startingSalary: 1400000, peakSalary: 5500000 },
};

const BUDGET_OPTIONS = [
  { label: "Under ₹15L", value: 1500000 },
  { label: "₹15–25L",    value: 2500000 },
  { label: "₹25–40L",    value: 4000000 },
  { label: "₹40–60L",    value: 6000000 },
  { label: "₹60L+",      value: 9000000 },
];

const WORK_EXPERIENCE_OPTIONS = ["Fresher", "1–2 years", "3–5 years", "5+ years"];

// ===================== HELPERS =====================

function formatLakh(amount) {
  if (!amount && amount !== 0) return "—";
  const lakh = amount / 100000;
  if (lakh >= 100) return `₹${(lakh / 100).toFixed(1)}Cr`;
  return `₹${lakh.toFixed(1)}L`;
}

function getRiskBand(score) {
  if (score < 30) return { label: "Low risk", bg: "bg-red-50",  text: "text-red-700",    border: "border-red-200" };
  if (score < 50) return { label: "Medium risk", bg: "bg-primary/10", text: "text-primary", border: "border-primary/30" };
  return { label: "High risk", bg: "bg-red-600", text: "text-white", border: "border-red-700" };
}

function getBarLevel(score) {
  if (score < 30) return { label: "Low",    bg: "bg-primary",  text: "text-primary" };
  if (score < 55) return { label: "Medium", bg: "bg-blue-500", text: "text-blue-600" };
  return { label: "High", bg: "bg-red-600", text: "text-red-700" };
}

function languageBarrierScore(level) {
  if (level === "Low") return 10;
  if (level === "Medium") return 40;
  return 75;
}

function buildTimeline(courseType, country, specialty, duration, fmge, recog, visa, start, peak) {
  if (courseType === "MBBS") {
    return [
      { year: "Yr 1",                     title: `Depart for ${country.name}`,                desc: "Begin MBBS. Orientation and pre-clinical sciences.", tone: "travel" },
      { year: `Yr 2–${duration - 1}`,     title: "Clinical rotations",                          desc: "Hospital postings across all major departments.",     tone: "milestone" },
      { year: `Yr ${duration}`,           title: "Graduation",                                  desc: "Receive MBBS degree. Apply for NMC provisional registration.", tone: "milestone" },
      { year: `Yr ${duration + 1}`,       title: "FMGE/NEXT attempt",                           desc: `${fmge}% clear first attempt. 1–2 attempts typical.`, tone: "exam" },
      { year: `Yr ${duration + 1}–${duration + 2}`, title: "Compulsory internship",               desc: "12-month rotating internship in India.",              tone: "milestone" },
      { year: `Yr ${duration + 3}`,       title: "NEET-PG entrance",                            desc: `Crack NEET-PG for ${specialty} residency.`,            tone: "exam" },
      { year: `Yr ${duration + 4}–${duration + 6}`, title: "PG residency (MD/MS)",                desc: "3-year residency. Stipend ~₹80K/month.",              tone: "milestone" },
      { year: `Yr ${duration + 7}+`,      title: "Independent specialist",                      desc: `₹${(start / 100000).toFixed(0)}–₹${(peak / 100000).toFixed(0)}L/yr as ${specialty}.`, tone: "milestone" },
    ];
  }
  return [
    { year: "Month 1–3",                 title: "Applications & visa",                            desc: `Apply to universities in ${country.name}. SOP, LORs, scores.`, tone: "travel" },
    { year: "Month 4–6",                 title: `Depart for ${country.name}`,                     desc: `Begin Masters in ${specialty}.`,                       tone: "travel" },
    { year: "Semester 1–2",              title: "Core coursework",                                desc: "Research methodology, electives, thesis proposal.",    tone: "milestone" },
    { year: "Final semester",            title: "Dissertation / thesis",                          desc: "Submit and defend research. Industry project.",        tone: "exam" },
    { year: `Yr ${duration}`,            title: "Graduation",                                     desc: `Receive Masters degree. ${recog}% globally recognised.`, tone: "milestone" },
    { year: `Yr ${duration + 1}`,        title: "Career / PR pathway",                            desc: `${visa} route. Many stay back 1–3 years.`,             tone: "milestone" },
    { year: `Yr ${duration + 2}+`,       title: "Career growth",                                  desc: `₹${(start / 100000).toFixed(0)}–₹${(peak / 100000).toFixed(0)}L/yr in ${specialty}.`, tone: "milestone" },
  ];
}

function buildRoiData(courseType, totalCost, start, peak, duration) {
  const earnStart = courseType === "MBBS" ? duration + 3 : duration + 1;
  const totalYears = courseType === "MBBS" ? 13 : 8;
  const annualCost = totalCost / Math.max(duration, 1);
  const totalCostLakh = totalCost / 100000;

  const labels = [];
  const investment = [];
  const earnings = [];
  for (let y = 1; y <= totalYears; y++) {
    labels.push(`Yr ${y}`);
    investment.push(y <= duration ? +(annualCost * y / 100000).toFixed(1) : +totalCostLakh.toFixed(1));
    if (y < earnStart) {
      earnings.push(0);
    } else {
      const t = Math.min(y - earnStart, 7);
      const ratio = start + ((peak - start) * (t / 7));
      const cumulative = ratio * (y - earnStart + 1);
      earnings.push(+(cumulative / 100000).toFixed(1));
    }
  }
  return { labels, investment, earnings };
}

// ===================== MAIN COMPONENT =====================

export const ROIPlanner = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  // Step 1
  const [courseType, setCourseType] = useState("MBBS");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [neetScore, setNeetScore] = useState(500);
  const [cgpa, setCgpa] = useState(70);
  const [workExperience, setWorkExperience] = useState("Fresher");
  const [budget, setBudget] = useState(1500000);
  const [errors, setErrors] = useState({});

  // Step 2
  const [country, setCountry] = useState(null);
  const [specialty, setSpecialty] = useState(null);

  // Step 3
  const [activeReportTab, setActiveReportTab] = useState("timeline");

  const leadSubmittedRef = useRef(false);

  // Defaults when course changes
  useEffect(() => {
    const list = courseType === "MBBS" ? Object.keys(MBBS_SPECIALTIES) : Object.keys(MASTERS_SPECIALIZATIONS);
    if (!specialty || !list.includes(specialty)) {
      setSpecialty(list[0]);
    }
    setCountry(null);
  }, [courseType]); // eslint-disable-line react-hooks/exhaustive-deps

  const validateStep1 = () => {
    const next = {};
    if (!name.trim()) next.name = "Please enter your full name";
    const ph = validatePhone(phone);
    if (!ph.valid) next.phone = ph.message;
    if (courseType === "Masters" && cgpa < 50) next.cgpa = "MBBS percentage must be at least 50%";
    return next;
  };

  const handleContinue = () => {
    const errs = validateStep1();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setDirection(1);
    setStep(2);
  };

  const handleGenerate = () => {
    if (!country || !specialty) return;
    setDirection(1);
    setStep(3);
  };

  // Fire lead capture once the report renders
  useEffect(() => {
    if (step !== 3 || leadSubmittedRef.current) return;
    leadSubmittedRef.current = true;
    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      courseType,
      country: country?.name || "",
      specialisation: specialty,
      budget,
      toolName: "roi_planner",
    };
    if (courseType === "MBBS") payload.neetScore = neetScore;
    else {
      payload.cgpa = cgpa;
      payload.workExperience = workExperience;
    }
    fetch("/api/roi-planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error("ROI Planner lead capture failed:", err));
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  // Derived report data
  const report = useMemo(() => {
    if (step !== 3 || !country || !specialty) return null;
    const specMap = courseType === "MBBS" ? MBBS_SPECIALTIES : MASTERS_SPECIALIZATIONS;
    const { startingSalary, peakSalary } = specMap[specialty];
    const totalInvestment = Math.round(country.cost * 1.15); // tuition + ~15% living buffer
    const totalInvestmentLakh = totalInvestment / 100000;
    const breakEven = courseType === "MBBS" ? country.duration + 4 : Math.ceil(country.duration) + 2;

    const fmge = courseType === "MBBS" ? country.fmgeRate : null;
    const recog = courseType === "Masters" ? country.recognitionPct : null;

    const timeline = buildTimeline(courseType, country, specialty, country.duration, fmge, recog, country.visaRoute, startingSalary, peakSalary);
    const roi = buildRoiData(courseType, country.cost, startingSalary, peakSalary, country.duration);

    return {
      totalInvestment,
      totalInvestmentLakh,
      breakEven,
      startingSalary,
      peakSalary,
      fmge,
      recog,
      timeline,
      roi,
      risk: getRiskBand(country.riskScore),
    };
  }, [step, country, specialty, courseType]);

  return (
    <div className="bg-card border-2 border-primary/20 rounded-3xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0B3D7A] via-primary to-[#C8102E] px-8 py-5 flex items-center gap-3 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
        <TrendingUp className="w-7 h-7 text-white relative z-10" />
        <h3 className="text-xl font-bold text-white relative z-10">ROI &amp; Career Timeline Planner</h3>
      </div>

      <div className="p-6 sm:p-8 space-y-6">
        <ProgressBar step={step} />

        <div className="overflow-hidden">
          <div
            key={step}
            className="transition-transform duration-300 ease-out"
            style={{
              animation: direction > 0 ? "roiSlideInRight 0.25s ease-out" : "roiSlideInLeft 0.25s ease-out",
            }}
          >
            {step === 1 && (
              <Step1
                courseType={courseType} setCourseType={setCourseType}
                name={name} setName={(v) => { setName(v); setErrors({ ...errors, name: "" }); }}
                phone={phone} setPhone={(v) => { setPhone(v); setErrors({ ...errors, phone: "" }); }}
                neetScore={neetScore} setNeetScore={setNeetScore}
                cgpa={cgpa} setCgpa={setCgpa}
                workExperience={workExperience} setWorkExperience={setWorkExperience}
                budget={budget} setBudget={setBudget}
                errors={errors}
                onContinue={handleContinue}
              />
            )}
            {step === 2 && (
              <Step2
                courseType={courseType}
                country={country} setCountry={setCountry}
                specialty={specialty} setSpecialty={setSpecialty}
                onBack={() => { setDirection(-1); setStep(1); }}
                onGenerate={handleGenerate}
              />
            )}
            {step === 3 && report && (
              <Step3
                courseType={courseType}
                country={country}
                specialty={specialty}
                neetScore={neetScore}
                cgpa={cgpa}
                workExperience={workExperience}
                budget={budget}
                name={name}
                report={report}
                activeReportTab={activeReportTab}
                setActiveReportTab={setActiveReportTab}
                onBack={() => { setDirection(-1); setStep(2); }}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes roiSlideInRight {
          from { transform: translateX(20px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes roiSlideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </div>
  );
};

// ===================== PROGRESS BAR =====================

function ProgressBar({ step }) {
  const steps = ["Your Details", "Choose Path", "ROI Report"];
  return (
    <div className="flex items-center justify-between gap-1 bg-secondary/40 rounded-full p-2 max-w-2xl mx-auto">
      {steps.map((label, i) => {
        const idx = i + 1;
        const isCompleted = idx < step;
        const isCurrent = idx === step;
        const isLast = i === steps.length - 1;
        return (
          <div key={label} className="flex-1 flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-full">
            <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              isCompleted ? "bg-primary text-primary-foreground" :
              isCurrent ? "border-2 border-primary text-primary bg-card" :
              "bg-muted text-muted-foreground"
            }`}>
              {isCompleted ? <Check className="w-3.5 h-3.5" /> : idx}
            </div>
            <span className={`text-xs sm:text-sm font-semibold hidden sm:inline ${
              isCurrent ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
            }`}>{label}</span>
            {!isLast && (
              <div className={`flex-1 h-px mx-1 transition-colors duration-300 ${isCompleted ? "bg-primary" : "bg-border"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ===================== STEP 1 =====================

function Step1({
  courseType, setCourseType,
  name, setName, phone, setPhone,
  neetScore, setNeetScore, cgpa, setCgpa,
  workExperience, setWorkExperience,
  budget, setBudget, errors, onContinue,
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-6">
      {/* Course toggle */}
      <div className="grid sm:grid-cols-2 gap-4">
        <CourseToggleCard
          active={courseType === "MBBS"}
          onClick={() => setCourseType("MBBS")}
          icon={<Stethoscope className="w-8 h-8" />}
          label="MBBS Abroad"
          sublabel="5.5–6 year program"
        />
        <CourseToggleCard
          active={courseType === "Masters"}
          onClick={() => setCourseType("Masters")}
          icon={<BookOpen className="w-8 h-8" />}
          label="Masters Abroad"
          sublabel="1–2 year program"
        />
      </div>

      {/* Name + phone */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
          <Input placeholder="Arjun Sharma" value={name} onChange={(e) => setName(e.target.value)} className={`h-12 border-border/50 focus:border-primary ${errors.name ? "border-red-500" : ""}`} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
          <div className={`flex h-12 rounded-md border bg-card overflow-hidden ${errors.phone ? "border-red-500" : "border-border/50"} focus-within:border-primary`}>
            <span className="px-3 flex items-center text-sm font-semibold text-muted-foreground bg-muted/40 border-r border-border/50">+91</span>
            <input
              type="tel"
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="flex-1 bg-transparent px-3 text-sm outline-none"
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Conditional fields */}
      {courseType === "MBBS" ? (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-foreground">NEET Score</label>
            <span className="text-sm font-bold text-primary">{neetScore}</span>
          </div>
          <Slider value={[neetScore]} onValueChange={(v) => setNeetScore(v[0])} min={300} max={720} step={5} />
          <div className="flex justify-between text-xs text-muted-foreground mt-2"><span>300</span><span>720</span></div>
        </div>
      ) : (
        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-semibold text-foreground">MBBS Percentage / CGPA</label>
              <span className="text-sm font-bold text-primary">{cgpa}%</span>
            </div>
            <Slider value={[cgpa]} onValueChange={(v) => setCgpa(v[0])} min={50} max={100} step={1} />
            <div className="flex justify-between text-xs text-muted-foreground mt-2"><span>50%</span><span>100%</span></div>
            {errors.cgpa && <p className="text-red-500 text-xs mt-1">{errors.cgpa}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Work Experience</label>
            <div className="flex flex-wrap gap-2">
              {WORK_EXPERIENCE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setWorkExperience(opt)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-150 ${
                    workExperience === opt
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-foreground border-border hover:border-primary/60"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Budget</label>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((opt) => (
            <button
              key={opt.label}
              type="button"
              onClick={() => setBudget(opt.value)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-150 ${
                budget === opt.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/60"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <Button type="button" onClick={onContinue} size="xl" className="w-full group">
        Continue
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}

function CourseToggleCard({ active, onClick, icon, label, sublabel }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border-2 transition-all duration-150 hover:border-primary/60 ${
        active ? "border-primary bg-primary/5" : "border-border bg-card"
      }`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
        {icon}
      </div>
      <div className="text-base font-bold text-foreground">{label}</div>
      <div className="text-xs text-muted-foreground">{sublabel}</div>
    </button>
  );
}

// ===================== STEP 2 =====================

function Step2({ courseType, country, setCountry, specialty, setSpecialty, onBack, onGenerate }) {
  const countries = courseType === "MBBS" ? MBBS_COUNTRIES : MASTERS_COUNTRIES;
  const specMap = courseType === "MBBS" ? MBBS_SPECIALTIES : MASTERS_SPECIALIZATIONS;
  const title = courseType === "MBBS" ? "Choose your destination country" : "Choose where to study Masters";
  const subtitle = courseType === "MBBS"
    ? "Select a country to tailor your MBBS ROI report"
    : "Select a country for your Masters ROI report";

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-2xl font-bold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>

      {/* Country grid */}
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
        {countries.map((c) => {
          const selected = country?.name === c.name;
          const rate = courseType === "MBBS" ? c.fmgeRate : c.recognitionPct;
          const rateGood = rate >= (courseType === "MBBS" ? 45 : 85);
          return (
            <button
              key={c.name}
              type="button"
              onClick={() => setCountry(c)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all duration-150 text-center ${
                selected ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"
              }`}
            >
              <img
                src={`https://flagcdn.com/w80/${c.code}.png`}
                srcSet={`https://flagcdn.com/w160/${c.code}.png 2x`}
                alt={`${c.name} flag`}
                width={40}
                height={28}
                className="w-10 h-7 object-cover rounded-sm shadow-sm"
                loading="lazy"
              />
              <span className="text-xs font-bold text-foreground">{c.name}</span>
              <span className="text-[11px] text-muted-foreground">~₹{Math.round(c.cost / 100000)}L total</span>
              <span className={`text-[11px] font-semibold ${rateGood ? "text-primary" : "text-red-600"}`}>
                {courseType === "MBBS" ? "FMGE" : "Recogn"} {rate}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Specialisation pills */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          {courseType === "MBBS" ? "Target specialty after PG" : "Masters specialisation"}
        </label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(specMap).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSpecialty(s)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-150 ${
                specialty === s
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary/60"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="sm:w-auto">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <Button type="button" size="lg" onClick={onGenerate} disabled={!country || !specialty} className="flex-1 group">
          Generate my ROI report
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

// ===================== STEP 3 =====================

function Step3({
  courseType, country, specialty, neetScore, cgpa, workExperience, budget, name, report,
  activeReportTab, setActiveReportTab, onBack,
}) {
  const {
    totalInvestment, totalInvestmentLakh, breakEven,
    startingSalary, peakSalary, fmge, recog, timeline, roi, risk,
  } = report;

  const handleWhatsApp = () => {
    const msg = `Hi, I just used the ROI Planner. I'm interested in ${courseType} in ${country.name} for ${specialty}. My budget is ₹${Math.round(budget / 100000)}L. Please guide me.`;
    const phoneNumber = courseType === "Masters" ? "918886661877" : "919010060000";
    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(msg)}`, "_blank");
  };

  const subline = courseType === "MBBS"
    ? `${country.name} · ${specialty} · NEET ${neetScore}`
    : `${country.name} · ${specialty} · MBBS ${cgpa}%`;

  return (
    <div className="space-y-6">
      {/* Report header */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl border ${risk.border} ${risk.bg}`}>
        <div>
          <h4 className="text-base font-bold text-foreground">
            {name ? `${name}'s` : "Your"} {courseType} ROI Report
          </h4>
          <p className="text-xs text-foreground/70 mt-1">{subline}</p>
        </div>
        <span className={`self-start sm:self-auto text-xs font-bold px-3 py-1.5 rounded-full border ${risk.border} ${risk.text}`}>
          {risk.label}
        </span>
      </div>

      {/* Metrics grid */}
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}>
        <Metric label="Total Investment" value={`₹${totalInvestmentLakh.toFixed(0)}L`} />
        <Metric label="Break-even" value={`Yr ${breakEven}`} />
        <Metric label="Starting Salary" value={`${formatLakh(startingSalary)}/yr`} />
        <Metric label="Peak Earning" value={`${formatLakh(peakSalary)}/yr`} />
        <Metric
          label={courseType === "MBBS" ? "FMGE Pass Rate" : "Degree Recognition"}
          value={`${courseType === "MBBS" ? fmge : recog}%`}
        />
        <Metric label="Duration" value={`${country.duration} yrs`} />
      </div>

      {/* Tabs */}
      <div className="bg-secondary/40 rounded-2xl p-1.5">
        <div className="flex flex-wrap gap-1">
          {[
            { id: "timeline", label: "Timeline",    icon: <Plane className="w-3.5 h-3.5" /> },
            { id: "peers",    label: "Peer Outcomes", icon: <GraduationCap className="w-3.5 h-3.5" /> },
            { id: "risk",     label: "Risk Analysis", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
            { id: "chart",    label: "ROI Chart",     icon: <TrendingUp className="w-3.5 h-3.5" /> },
          ].map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveReportTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-150 ${
                activeReportTab === t.id
                  ? "bg-card text-foreground border border-border shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.icon}{t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div>
        {activeReportTab === "timeline" && <TimelineTab steps={timeline} />}
        {activeReportTab === "peers"    && <PeersTab courseType={courseType} country={country} fmge={fmge} recog={recog} />}
        {activeReportTab === "risk"     && <RiskTab courseType={courseType} country={country} fmge={fmge} recog={recog} />}
        {activeReportTab === "chart"    && <RoiChartTab data={roi} />}
      </div>

      {/* Counsellor recommendation */}
      <div className="bg-primary/5 border border-primary/30 rounded-2xl p-5 flex gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-bold text-primary">Counsellor&apos;s recommendation</p>
          <p className="text-sm text-foreground/80 mt-1 leading-relaxed">
            Based on your profile — {courseType === "MBBS" ? `NEET ${neetScore}` : `MBBS ${cgpa}%`}
            {courseType === "Masters" ? `, ${workExperience}` : ""}, budget ₹{Math.round(budget / 100000)}L, and target specialisation {specialty} — {country.name} is a {risk.label.toLowerCase().replace(" risk", "")} choice.{" "}
            {country.cost <= budget
              ? `Your budget comfortably covers the ~₹${Math.round(country.cost / 100000)}L course fee.`
              : `Note: this country's fee (~₹${Math.round(country.cost / 100000)}L) is above your stated budget — scholarships may help bridge the gap.`}{" "}
            You can expect to reach {courseType === "MBBS" ? "independent practice" : "a senior career"} by year {breakEven - 1}. Speak to a counsellor to explore the best universities in {country.name} for your profile.
          </p>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="grid sm:grid-cols-2 gap-3">
        <Button type="button" variant="outline" size="lg" onClick={onBack} className="group">
          <ArrowLeft className="w-4 h-4 mr-2" /> Change path
        </Button>
        <Button
          type="button"
          size="lg"
          onClick={handleWhatsApp}
          className="bg-red-600 hover:bg-red-700 text-white group border-red-600"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Talk to counsellor
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="bg-secondary/40 rounded-2xl p-4">
      <p className="text-[11px] text-muted-foreground uppercase tracking-wide font-semibold">{label}</p>
      <p className="text-lg font-bold text-foreground mt-1">{value}</p>
    </div>
  );
}

// ===================== TIMELINE =====================

function TimelineTab({ steps }) {
  const toneStyles = {
    travel:    { bg: "bg-primary",      text: "text-primary-foreground", icon: <Plane className="w-3.5 h-3.5" /> },
    milestone: { bg: "bg-blue-600",     text: "text-white",              icon: <Award className="w-3.5 h-3.5" /> },
    exam:      { bg: "bg-red-600",      text: "text-white",              icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
  };
  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6">
      <ol className="space-y-5">
        {steps.map((s, i) => {
          const t = toneStyles[s.tone] || toneStyles.milestone;
          return (
            <li key={i} className="relative flex gap-4">
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-[30px] h-[30px] rounded-full ${t.bg} ${t.text} flex items-center justify-center`}>
                  {t.icon}
                </div>
                {i < steps.length - 1 && <div className="flex-1 w-px bg-border mt-1" style={{ minHeight: "24px" }} />}
              </div>
              <div className="pb-2">
                <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wide">{s.year}</p>
                <p className="text-sm font-bold text-foreground mt-0.5">{s.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// ===================== PEER OUTCOMES =====================

function PeersTab({ courseType, country, fmge, recog }) {
  const clamp = (n) => Math.max(0, Math.min(100, Math.round(n)));
  const firstAttempt = clamp(fmge * 0.9);
  const secondAttempt = clamp(fmge * 0.45);
  const didNotPractice = 5;
  const clearedAfterMany = clamp(100 - firstAttempt - secondAttempt - didNotPractice);

  const rows = courseType === "MBBS"
    ? [
        { label: "Cleared FMGE (1st attempt)", value: firstAttempt,        color: "bg-primary" },
        { label: "Cleared in 2nd attempt",     value: secondAttempt,       color: "bg-blue-500" },
        { label: "Cleared after 3+ attempts",  value: clearedAfterMany,    color: "bg-red-400" },
        { label: "Did not practice medicine",  value: didNotPractice,      color: "bg-red-600" },
      ]
    : [
        { label: "Got job in destination country",  value: clamp(recog * 0.55),        color: "bg-primary" },
        { label: "Returned to India, senior roles", value: clamp(recog * 0.25),        color: "bg-blue-500" },
        { label: "Switched to different field",     value: clamp((100 - recog) * 0.6), color: "bg-red-400" },
        { label: "Underemployed / still searching", value: clamp((100 - recog) * 0.4), color: "bg-red-600" },
      ];

  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-3">
      <p className="text-sm text-muted-foreground">
        Out of 100 students who chose {courseType} in {country?.name || "this destination"}
      </p>
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-3">
          <div className="min-w-[160px] sm:min-w-[200px] text-xs sm:text-sm text-foreground font-medium">{r.label}</div>
          <div className="flex-1 h-[18px] bg-secondary/50 rounded-full overflow-hidden">
            <div
              className={`h-full ${r.color} rounded-full transition-all duration-500 ease-out flex items-center justify-end px-2 text-[10px] font-bold text-white`}
              style={{ width: `${Math.max(r.value, 6)}%` }}
            >
              {r.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ===================== RISK ANALYSIS =====================

function RiskTab({ courseType, country, fmge, recog }) {
  const langScore = languageBarrierScore(country.languageBarrier);
  const foodScore = Math.max(0, 30 - (country.foodRating * 5));

  const rows = courseType === "MBBS"
    ? [
        { label: "NMC recognition",     score: country.nmcRecognized ? 10 : 80 },
        { label: "FMGE difficulty",     score: 100 - fmge },
        { label: "Language barrier",    score: langScore },
        { label: "Political stability", score: country.riskScore },
        { label: "Indian food access",  score: foodScore },
      ]
    : [
        { label: "Degree recognition",  score: 100 - recog },
        { label: "Language barrier",    score: langScore },
        { label: "Political stability", score: country.riskScore },
        { label: "Visa / stay-back ease", score: Math.min(100, country.riskScore + 10) },
        { label: "Indian food access",  score: foodScore },
      ];

  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6 space-y-4">
      {rows.map((r) => {
        const lvl = getBarLevel(r.score);
        return (
          <div key={r.label} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-foreground">{r.label}</span>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${lvl.bg} text-white`}>{lvl.label}</span>
            </div>
            <div className="h-[7px] bg-secondary/50 rounded-full overflow-hidden">
              <div
                className={`h-full ${lvl.bg} rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${Math.max(r.score, 4)}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ===================== ROI CHART (inline SVG) =====================

function RoiChartTab({ data }) {
  const { labels, investment, earnings } = data;
  const maxVal = Math.max(...investment, ...earnings, 1);
  const niceMax = Math.ceil(maxVal / 10) * 10 || 10;

  // Chart geometry
  const width = 720;
  const height = 240;
  const padL = 40;
  const padR = 12;
  const padT = 12;
  const padB = 28;
  const plotW = width - padL - padR;
  const plotH = height - padT - padB;

  const n = labels.length;
  const slotW = plotW / n;
  const barW = Math.min(14, slotW * 0.32);
  const groupGap = 4;

  const yTickCount = 4;
  const yTicks = Array.from({ length: yTickCount + 1 }, (_, i) => (niceMax / yTickCount) * i);

  const yFor = (v) => padT + plotH - (v / niceMax) * plotH;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 sm:p-6">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Cumulative investment vs cumulative earnings by year"
        className="w-full"
        style={{ height: "240px" }}
      >
        {/* Y-axis gridlines + labels */}
        {yTicks.map((t, i) => (
          <g key={i}>
            <line
              x1={padL}
              x2={width - padR}
              y1={yFor(t)}
              y2={yFor(t)}
              stroke="currentColor"
              strokeOpacity={i === 0 ? 0.3 : 0.08}
              strokeWidth={1}
            />
            <text
              x={padL - 6}
              y={yFor(t) + 3}
              textAnchor="end"
              fontSize="10"
              fill="currentColor"
              opacity="0.55"
            >
              ₹{t.toFixed(0)}L
            </text>
          </g>
        ))}

        {/* Bars */}
        {labels.map((label, i) => {
          const cx = padL + slotW * i + slotW / 2;
          const inv = investment[i] || 0;
          const earn = earnings[i] || 0;
          const invY = yFor(inv);
          const earnY = yFor(earn);
          const invH = padT + plotH - invY;
          const earnH = padT + plotH - earnY;
          return (
            <g key={label}>
              {/* Investment bar (blue) */}
              {invH > 0 && (
                <rect
                  x={cx - barW - groupGap / 2}
                  y={invY}
                  width={barW}
                  height={invH}
                  fill="#185FA5"
                  rx="2"
                >
                  <title>{`Yr ${i + 1} · Investment ₹${inv.toFixed(1)}L`}</title>
                </rect>
              )}
              {/* Earnings bar (red) */}
              {earnH > 0 && (
                <rect
                  x={cx + groupGap / 2}
                  y={earnY}
                  width={barW}
                  height={earnH}
                  fill="#C8102E"
                  rx="2"
                >
                  <title>{`Yr ${i + 1} · Earnings ₹${earn.toFixed(1)}L`}</title>
                </rect>
              )}
              {/* X label */}
              <text
                x={cx}
                y={height - 10}
                textAnchor="middle"
                fontSize="9"
                fill="currentColor"
                opacity="0.6"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Custom legend */}
      <div className="flex items-center justify-center gap-6 mt-4 text-xs sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#185FA5] rounded-sm" />
          Cumulative investment
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#C8102E] rounded-sm" />
          Cumulative earnings
        </span>
      </div>
      <p className="text-[10px] text-muted-foreground text-center mt-2">Y-axis in ₹ Lakhs</p>
    </div>
  );
}

export default ROIPlanner;