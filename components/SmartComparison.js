"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Building2,
  ArrowRight,
  ArrowLeft,
  Check,
  X,
  Star,
  CheckCircle2,
  AlertCircle,
  Info,
  Search,
  Download,
  MessageCircle,
  Trophy,
  Sparkles,
  Shield,
} from "lucide-react";

// ===================== DATA =====================

const COURSE_TYPES = ["MBBS", "Masters"];

// Course-aware partner data. Each entry exposes:
//   - rich display fields used by both country & university comparisons
//   - universities[] = top 10 colleges from the partner-universities map
//
// Country list mirrors the website's MBBS/Masters offerings (see
// app/partner-universities/page.js for the authoritative partner list).
const PARTNER_DATA = {
  MBBS: {
    Nepal: {
      code: "np",
      flag: "🇳🇵",
      duration: "5 years",
      tuitionRange: "$4,000 – $6,000",
      totalCost: "$28,000 – $40,000",
      medium: "English",
      nmcWho: "NMC & WHO",
      fmgePassRate: 35,
      climate: "Varied",
      languageBarrier: "Low",
      indianFood: "Excellent",
      safetyIndex: 7.5,
      eligibility: "NEET 150+",
      hostelQuality: 4,
      scholarship: "Limited",
      universities: [
        "Birat Medical College (KU), Biratnagar",
        "B & C Medical College (KU), Birtamod",
        "Chitwan Medical College (TU), Bharatpur",
        "College of Medical Science (KU), Bharatpur",
        "Devdaha Medical College (KU), Butwal",
        "Gandaki Medical College (TU), Pokhara",
        "Janaki Medical College (TU), Janakpur",
        "Kathmandu Medical College (KU), Kathmandu",
        "Kathmandu University (KUSMS), Dhulikhel",
        "Karnali Academy of Health Science, Karnali",
      ],
    },
    Georgia: {
      code: "ge",
      flag: "🇬🇪",
      duration: "6 years",
      tuitionRange: "$4,000 – $6,500",
      totalCost: "$30,000 – $45,000",
      medium: "English",
      nmcWho: "NMC & WHO",
      fmgePassRate: 41,
      climate: "Mild",
      languageBarrier: "Low",
      indianFood: "Good",
      safetyIndex: 8.4,
      eligibility: "NEET 200+",
      hostelQuality: 4,
      scholarship: "Limited",
      universities: [
        "Akaki Tsereteli State University",
        "Alte University School of Medicine",
        "Avicenna - Batumi Medical University",
        "Batumi Shota Rustaveli State University",
        "BAU International University",
        "Caucasus International University (CIU)",
        "Caucasus University (CU)",
        "Central University of Europe, Kutaisi",
        "David Tvildiani Medical University (DTMU)",
        "European University (EU)",
      ],
    },
    Kyrgyzstan: {
      code: "kg",
      flag: "🇰🇬",
      duration: "5 years",
      tuitionRange: "$2,800 – $4,500",
      totalCost: "$18,000 – $28,000",
      medium: "English",
      nmcWho: "NMC & WHO",
      fmgePassRate: 28,
      climate: "Cold",
      languageBarrier: "Low",
      indianFood: "Moderate",
      safetyIndex: 7.0,
      eligibility: "NEET 170+",
      hostelQuality: 3,
      scholarship: "Available",
      universities: [
        "IHSM Central Campus",
        "IHSM Issyk-Kul Campus",
        "International Medical University",
        "Jalal-Abad State University",
        "Kyrgyz National University",
        "Kyrgyz-Russian Slavic University",
        "Kyrgyz State Medical Academy",
        "Osh International Medical University",
        "Osh State University",
        "S. Tentishev Asian Medical Institute",
      ],
    },
    Russia: {
      code: "ru",
      flag: "🇷🇺",
      duration: "6 years",
      tuitionRange: "$3,500 – $7,000",
      totalCost: "$28,000 – $45,000",
      medium: "English / Bilingual",
      nmcWho: "NMC & WHO",
      fmgePassRate: 32,
      climate: "Cold",
      languageBarrier: "Medium",
      indianFood: "Good",
      safetyIndex: 7.8,
      eligibility: "NEET 220+",
      hostelQuality: 4,
      scholarship: "Available",
      universities: [
        "Bashkir State Medical University",
        "Crimean Federal University (CFU)",
        "Far Eastern Federal University (FEFU)",
        "First Moscow State Medical University",
        "Kazan Federal University (KFU)",
        "Kazan State Medical University",
        "Lomonosov Moscow State University",
        "People's Friendship University RUDN",
        "Pirogov Russian National Research Medical University",
        "Volgograd State Medical University",
      ],
    },
    Kazakhstan: {
      code: "kz",
      flag: "🇰🇿",
      duration: "5 years",
      tuitionRange: "$3,200 – $5,000",
      totalCost: "$22,000 – $32,000",
      medium: "English",
      nmcWho: "NMC & WHO",
      fmgePassRate: 29,
      climate: "Cold",
      languageBarrier: "Low",
      indianFood: "Moderate",
      safetyIndex: 7.4,
      eligibility: "NEET 200+",
      hostelQuality: 3,
      scholarship: "Available",
      universities: [
        "Al-Farabi Kazakh National University",
        "Asfendiyarov Kazakh National University",
        "Astana Medical University",
        "Caspian International School of Medicine",
        "Karaganda Medical University",
        "Kazakh National Medical University (KazNMU)",
        "Kazakh-Russian Medical University",
        "Kokshetau State University",
        "Semey Medical University",
        "South Kazakhstan Medical Academy",
      ],
    },
    Uzbekistan: {
      code: "uz",
      flag: "🇺🇿",
      duration: "5 years",
      tuitionRange: "$2,800 – $4,200",
      totalCost: "$18,000 – $26,000",
      medium: "English",
      nmcWho: "NMC & WHO",
      fmgePassRate: 27,
      climate: "Continental",
      languageBarrier: "Low",
      indianFood: "Moderate",
      safetyIndex: 7.5,
      eligibility: "NEET 160+",
      hostelQuality: 3,
      scholarship: "Available",
      universities: [
        "Andijan State Medical Institute",
        "Asia International University",
        "Bukhara State Medical Institute",
        "Fergana Medical Institute of Public Health",
        "Karakalpakstan Medical Institute",
        "Namangan State University",
        "Samarkand State Medical University",
        "Tashkent Medical Academy, Tashkent",
        "Tashkent Pediatric Medical Institute",
        "Tashkent State Dental Institute",
      ],
    },
    Vietnam: {
      code: "vn",
      flag: "🇻🇳",
      duration: "6 years",
      tuitionRange: "$3,500 – $6,000",
      totalCost: "$25,000 – $38,000",
      medium: "English / Bilingual",
      nmcWho: "NMC & WHO",
      fmgePassRate: 31,
      climate: "Tropical",
      languageBarrier: "Low",
      indianFood: "Good",
      safetyIndex: 7.6,
      eligibility: "NEET 200+",
      hostelQuality: 4,
      scholarship: "Limited",
      universities: [
        "Hanoi Medical University (HMU)",
        "University of Medicine and Pharmacy at HCMC",
        "Hue University of Medicine and Pharmacy",
        "Can Tho University of Medicine and Pharmacy",
        "Thai Nguyen University of Medicine and Pharmacy",
        "Hai Phong University of Medicine and Pharmacy",
        "Pham Ngoc Thach University of Medicine",
      ],
    },
  },
  Masters: {
    "United Kingdom": {
      code: "gb",
      flag: "🇬🇧",
      duration: "1 year",
      tuitionRange: "£15,000 – £25,000",
      totalCost: "£25,000 – £45,000",
      medium: "English",
      nmcWho: "Globally Recognised",
      fmgePassRate: null,
      climate: "Mild",
      languageBarrier: "None",
      indianFood: "Excellent",
      safetyIndex: 8.6,
      eligibility: "Bachelor's degree + IELTS 6.5",
      hostelQuality: 4,
      scholarship: "Available",
      universities: [
        "University of Manchester",
        "University of Glasgow",
        "University of Leeds",
        "University of Birmingham",
        "University of Nottingham",
        "University of Sheffield",
        "Newcastle University",
        "Queen Mary University of London",
        "University of Liverpool",
        "University of Bristol",
      ],
    },
    USA: {
      code: "us",
      flag: "🇺🇸",
      duration: "2 years",
      tuitionRange: "$25,000 – $45,000",
      totalCost: "$50,000 – $90,000",
      medium: "English",
      nmcWho: "Globally Recognised",
      fmgePassRate: null,
      climate: "Varied",
      languageBarrier: "None",
      indianFood: "Excellent",
      safetyIndex: 7.9,
      eligibility: "Bachelor's + GRE/GMAT + IELTS 6.5+",
      hostelQuality: 4,
      scholarship: "Available",
      universities: [
        "Johns Hopkins University",
        "Arizona State University",
        "University of California",
        "University of South Florida",
        "Drexel University",
        "University of Delaware",
        "George Mason University",
        "Colorado State University",
        "University of Illinois at Chicago",
        "Ohio University",
      ],
    },
    Australia: {
      code: "au",
      flag: "🇦🇺",
      duration: "2 years",
      tuitionRange: "AUD 30,000 – 50,000",
      totalCost: "AUD 60,000 – 100,000",
      medium: "English",
      nmcWho: "Globally Recognised",
      fmgePassRate: null,
      climate: "Mild",
      languageBarrier: "None",
      indianFood: "Excellent",
      safetyIndex: 9.1,
      eligibility: "Bachelor's + IELTS 6.5+",
      hostelQuality: 4,
      scholarship: "Available",
      universities: [
        "The University of New South Wales",
        "Monash University",
        "The University of Queensland",
        "University of Western Australia",
        "The University of Adelaide",
        "University of Technology Sydney",
        "Macquarie University",
        "RMIT University",
        "University of Wollongong",
        "Deakin University",
      ],
    },
    Canada: {
      code: "ca",
      flag: "🇨🇦",
      duration: "2 years",
      tuitionRange: "CAD 20,000 – 40,000",
      totalCost: "CAD 40,000 – 80,000",
      medium: "English",
      nmcWho: "Globally Recognised",
      fmgePassRate: null,
      climate: "Cold",
      languageBarrier: "None",
      indianFood: "Excellent",
      safetyIndex: 9.0,
      eligibility: "Bachelor's + IELTS 6.5+",
      hostelQuality: 4,
      scholarship: "Available",
      universities: [
        "McGill University's School of Continuing Studies",
        "Simon Fraser University",
        "University of Waterloo",
        "University of Calgary",
        "Queen's University",
        "University of Manitoba",
        "Dalhousie University",
        "Toronto Metropolitan University",
        "University of Victoria",
        "York University",
      ],
    },
    Germany: {
      code: "de",
      flag: "🇩🇪",
      duration: "2 years",
      tuitionRange: "€0 – €20,000",
      totalCost: "€15,000 – €35,000",
      medium: "English / German",
      nmcWho: "Globally Recognised",
      fmgePassRate: null,
      climate: "Cold",
      languageBarrier: "Low",
      indianFood: "Moderate",
      safetyIndex: 8.5,
      eligibility: "Bachelor's + IELTS 6.5+",
      hostelQuality: 3,
      scholarship: "Available",
      universities: [
        "Technical University of Munich (TUM)",
        "IU International University of Applied Sciences",
        "Berlin School of Business & Innovation (BSBI)",
        "University of Applied Sciences Europe (UE)",
        "SRH Hochschule Heidelberg",
        "SRH Hochschule Berlin",
        "ISM International School of Management GmbH",
        "GISMA Business School",
        "Arden University",
        "EU Business School",
      ],
    },
    "Rest of Europe": {
      code: "eu",
      flag: "🇪🇺",
      duration: "1–2 years",
      tuitionRange: "€10,000 – €20,000",
      totalCost: "€20,000 – €40,000",
      medium: "English / Local",
      nmcWho: "Globally Recognised",
      fmgePassRate: null,
      climate: "Varied",
      languageBarrier: "Low",
      indianFood: "Moderate",
      safetyIndex: 8.3,
      eligibility: "Bachelor's + IELTS 6.0+",
      hostelQuality: 4,
      scholarship: "Available",
      universities: [
        "Domus Academy - Milan, Italy",
        "Campus Spain - Madrid, Spain",
        "Bella Vista - Zurich, Switzerland",
        "Istituto Europeo di Design - Rome, Italy",
        "Business and Hotel Management School – BHMS - Lucerne, Switzerland",
        "Hochschule Fresenius University of Applied Science - Berlin, Germany",
      ],
    },
  },
};

// Country comparison parameters
const countryParams = [
  { key: "duration", label: "Total Duration", lowerBetter: false },
  { key: "tuitionRange", label: "Tuition Fee", lowerBetter: true, format: "fee" },
  { key: "totalCost", label: "Total Cost (Total)", lowerBetter: true, format: "fee" },
  { key: "medium", label: "Medium of Instruction", lowerBetter: false },
  { key: "nmcWho", label: "Recognition", lowerBetter: false, format: "badge" },
  { key: "fmgePassRate", label: "FMGE / NEXT Pass Rate", lowerBetter: false, format: "percentNullable" },
  { key: "climate", label: "Climate", lowerBetter: false },
  { key: "languageBarrier", label: "Language Barrier", lowerBetter: true, format: "barrier" },
  { key: "indianFood", label: "Indian Food Availability", lowerBetter: false },
  { key: "safetyIndex", label: "Safety Index", lowerBetter: false, format: "number" },
  { key: "eligibility", label: "Eligibility", lowerBetter: false },
  { key: "hostelQuality", label: "Hostel Quality", lowerBetter: false, format: "stars" },
  { key: "scholarship", label: "Scholarship Available", lowerBetter: false, format: "badge" },
  { key: "_universityCount", label: "Partner Universities Listed", lowerBetter: false, format: "number" },
];

// University comparison parameters — driven by the country's rich metadata
// (selected universities inherit country-level stats since each individual
// college entry only carries { name, country }).
const universityParams = [
  { key: "country", label: "Country", lowerBetter: false },
  { key: "duration", label: "Programme Duration", lowerBetter: false },
  { key: "tuitionRange", label: "Tuition Fee", lowerBetter: true, format: "fee" },
  { key: "totalCost", label: "Total Cost", lowerBetter: true, format: "fee" },
  { key: "medium", label: "Medium of Instruction", lowerBetter: false },
  { key: "nmcWho", label: "Recognition", lowerBetter: false, format: "badge" },
  { key: "fmgePassRate", label: "FMGE / NEXT Pass Rate", lowerBetter: false, format: "percentNullable" },
  { key: "languageBarrier", label: "Language Barrier", lowerBetter: true, format: "barrier" },
  { key: "indianFood", label: "Indian Food", lowerBetter: false },
  { key: "safetyIndex", label: "Safety Index", lowerBetter: false, format: "number" },
  { key: "eligibility", label: "Eligibility", lowerBetter: false },
  { key: "hostelQuality", label: "Hostel Quality", lowerBetter: false, format: "stars" },
  { key: "scholarship", label: "Scholarship Available", lowerBetter: false, format: "badge" },
];

// ===================== HELPER FUNCTIONS =====================

function parseFee(value) {
  if (value === null || value === undefined || value === "") return Infinity;
  if (typeof value === "number") return value;
  const numbers = String(value).match(/\d+/g);
  if (!numbers || numbers.length === 0) return Infinity;
  const max = parseInt(numbers[numbers.length - 1], 10);
  return max;
}

function parseBarrier(value) {
  const map = { Low: 1, Medium: 2, High: 3 };
  return map[value] ?? 99;
}

function parseRank(value) {
  if (!value || value === "—") return Infinity;
  const num = parseInt(String(value).replace(/,/g, ""), 10);
  return isNaN(num) ? Infinity : num;
}

function getValueForCompare(item, param, type) {
  if (param.key === "_universityCount") {
    return Array.isArray(item.universities) ? item.universities.length : 0;
  }
  const raw = item[param.key];
  if (raw === null || raw === undefined) return null;
  if (param.format === "fee" || param.key === "totalCost" || param.key === "tuitionRange") return parseFee(raw);
  if (param.format === "barrier") return parseBarrier(raw);
  if (param.format === "rank") return parseRank(raw);
  if (param.format === "percent" || param.format === "percentNullable") {
    if (param.format === "percentNullable" && raw === null) return null;
    return typeof raw === "number" ? raw : parseFloat(raw) || 0;
  }
  if (param.format === "number") return typeof raw === "number" ? raw : parseFloat(raw) || 0;
  if (typeof raw === "boolean") return raw ? 1 : 0;
  if (param.key === "hostelQuality") return raw;
  return String(raw);
}

function pickBestIndex(items, param) {
  if (!items || items.length < 2) return -1;
  if (param.format === "medium" || param.format === "badge" || param.format === "barrier" || param.key === "climate" || param.key === "eligibility" || param.key === "country" || param.key === "established" || param.key === "campus" || param.key === "hostelType" || param.key === "neet") {
    return -1;
  }
  const values = items.map((item) => getValueForCompare(item, param));
  const filtered = values.map((v, i) => ({ v, i })).filter(({ v }) => v !== null && v !== undefined && !Number.isNaN(v));
  if (filtered.length < 2) return -1;
  let bestIdx = filtered[0].i;
  let bestVal = filtered[0].v;
  for (let j = 1; j < filtered.length; j++) {
    const { v, i } = filtered[j];
    if (param.lowerBetter) {
      if (v < bestVal) { bestVal = v; bestIdx = i; }
    } else {
      if (v > bestVal) { bestVal = v; bestIdx = i; }
    }
  }
  if (bestVal === Infinity || bestVal === 0) return -1;
  return bestIdx;
}

function pickWinner(items, type) {
  const params = type === "countries" ? countryParams : universityParams;
  const scores = items.map(() => 0);
  items.forEach((_, idx) => {
    params.forEach((p) => {
      if (pickBestIndex(items, p) === idx) scores[idx] += 1;
    });
  });
  let best = 0;
  for (let i = 1; i < scores.length; i++) if (scores[i] > scores[best]) best = i;
  return best;
}

// ===================== PROGRESS BAR =====================

function ProgressSteps({ current }) {
  const steps = [
    { id: 1, label: "Your Details" },
    { id: 2, label: "Choose What to Compare" },
    { id: 3, label: "Compare Results" },
  ];
  return (
    <div className="flex items-center justify-center gap-0 mb-8 select-none">
      {steps.map((s, i) => (
        <div key={s.id} className="flex items-center">
          <div className="flex flex-col items-center min-w-[110px]">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-2 ${
                current > s.id
                  ? "bg-accent text-accent-foreground border-accent"
                  : current === s.id
                  ? "bg-white text-accent border-accent ring-4 ring-accent/15"
                  : "bg-muted text-muted-foreground border-border"
              }`}
            >
              {current > s.id ? <Check className="w-5 h-5" /> : s.id}
            </div>
            <span className={`text-xs mt-2 font-semibold text-center transition-colors ${current >= s.id ? "text-accent" : "text-muted-foreground"}`}>
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`h-1 w-12 sm:w-20 -mt-5 rounded-full transition-all duration-500 ${current > s.id ? "bg-accent" : "bg-border"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

// ===================== MAIN COMPONENT =====================

export const SmartComparison = () => {
  const [step, setStep] = useState(1);
  const [leadData, setLeadData] = useState({ name: "", phone: "", courseType: "" });
  const [comparisonType, setComparisonType] = useState(null); // "countries" | "universities"
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(""), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  // Course-aware country list — only MBBS-eligible or Masters-eligible destinations
  const courseCountries = useMemo(() => {
    if (!leadData.courseType) return {};
    return PARTNER_DATA[leadData.courseType] || {};
  }, [leadData.courseType]);

  // For universities, derive the dropdown list from the chosen countries.
  // Top 10 per country, deduped by name.
  const universitiesForCourse = useMemo(() => {
    const list = [];
    const seen = new Set();
    if (comparisonType === "universities") {
      const sourceCountries = selectedCountries.length > 0
        ? selectedCountries
        : Object.keys(courseCountries);
      sourceCountries.forEach((c) => {
        const countryData = courseCountries[c];
        if (!countryData) return;
        countryData.universities.slice(0, 10).forEach((name) => {
          if (seen.has(name)) return;
          seen.add(name);
          list.push({ name, country: c });
        });
      });
    }
    return list;
  }, [comparisonType, selectedCountries, courseCountries]);

  const validateLead = () => {
    const newErrors = {};
    if (!leadData.name.trim()) newErrors.name = "Please enter your full name";
    if (!leadData.phone.trim()) newErrors.phone = "Please enter your phone number";
    else if (!/^\+?\d[\d\s-]{8,15}$/.test(leadData.phone.trim())) newErrors.phone = "Please enter a valid phone number (10 digits)";
    if (!leadData.courseType) newErrors.courseType = "Please select a course type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleStartComparing = () => {
    if (!validateLead()) return;
    setSelectedCountries([]);
    setSelectedUniversities([]);
    setComparisonType(null);
    setStep(2);
  };

  const handleCourseChange = (next) => {
    setLeadData({ ...leadData, courseType: next });
    setSelectedCountries([]);
    setSelectedUniversities([]);
    setComparisonType(null);
    setStep(1);
  };

  const toggleCountry = (name) => {
    if (selectedCountries.includes(name)) {
      setSelectedCountries(selectedCountries.filter((c) => c !== name));
    } else {
      if (selectedCountries.length >= 4) { setToast("Max 4 selections allowed"); return; }
      setSelectedCountries([...selectedCountries, name]);
    }
  };

  const toggleUniversity = (entry) => {
    const key = entry.name;
    if (selectedUniversities.includes(key)) {
      setSelectedUniversities(selectedUniversities.filter((u) => u !== key));
    } else {
      if (selectedUniversities.length >= 4) { setToast("Max 4 selections allowed"); return; }
      setSelectedUniversities([...selectedUniversities, key]);
    }
  };

  const filteredUniversities = useMemo(() => {
    if (!searchQuery.trim()) return universitiesForCourse;
    const q = searchQuery.toLowerCase();
    return universitiesForCourse.filter((u) => u.name.toLowerCase().includes(q) || u.country.toLowerCase().includes(q));
  }, [searchQuery, universitiesForCourse]);

  // Country comparison rows — merge country metadata + name
  const selectedCountryData = selectedCountries.map((c) => ({
    name: c,
    ...courseCountries[c],
  }));

  // University comparison rows — each university inherits its country's rich metadata
  const selectedUniversityData = selectedUniversities.map((name) => {
    const entry = universitiesForCourse.find((u) => u.name === name);
    const country = entry ? entry.country : "";
    return {
      name,
      country,
      ...(courseCountries[country] || {}),
    };
  });

  const items = comparisonType === "countries" ? selectedCountryData : selectedUniversityData;
  const params = comparisonType === "countries" ? countryParams : universityParams;
  const winnerIndex = step === 3 && items.length >= 2 ? pickWinner(items, comparisonType) : -1;

  const handleCompareNow = async () => {
    const sel = comparisonType === "countries" ? selectedCountries : selectedUniversities;
    if (sel.length < 2) return;
    setStep(3);
    try {
      await fetch("/api/smart-comparison", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadData.name,
          phone: leadData.phone,
          courseType: leadData.courseType,
          comparisonType,
          selectedItems: sel,
          itemCount: sel.length,
        }),
      });
    } catch (err) {
      console.error("Smart comparison save failed:", err);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hi, I'm ${leadData.name}. I'm interested in ${leadData.courseType}. I just compared ${comparisonType === "countries" ? "countries" : "universities"} (${(comparisonType === "countries" ? selectedCountries : selectedUniversities).join(", ")}). Please guide me further. Phone: ${leadData.phone}.`;
    window.open(`https://api.whatsapp.com/send/?phone=919010060000&text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleDownloadPDF = async () => {
    try {
      setToast("Generating PDF...");
      const { jsPDF } = await import("jspdf");
      const autoTable = (await import("jspdf-autotable")).default;
      const doc = new jsPDF({ orientation: items.length > 2 ? "landscape" : "portrait", unit: "pt", format: "a4" });
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const titleColor = [33, 41, 70];
      const subColor = [90, 113, 144];

      // Fetch both logos as base64 (so the PDF works offline after first download)
      let headerLogoDataUrl = null;   // Wide horizontal logo for the page header
      let squareLogoDataUrl = null;   // Square "brothers" logo for the watermark
      try {
        const headerLogoUrl = "https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK-LOGO.png?updatedAt=1776492281541";
        const squareLogoUrl = "https://ik.imagekit.io/abhobz66j/GVK%20Images/logo.jpg?updatedAt=1776492281519";

        const toDataUrl = async (url) => {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`fetch ${url} → ${res.status}`);
          const blob = await res.blob();
          return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        };

        const [headerRes, squareRes] = await Promise.allSettled([
          toDataUrl(headerLogoUrl),
          toDataUrl(squareLogoUrl),
        ]);
        if (headerRes.status === "fulfilled") headerLogoDataUrl = headerRes.value;
        if (squareRes.status === "fulfilled") squareLogoDataUrl = squareRes.value;
      } catch (logoErr) {
        console.warn("Logo fetch failed, continuing without logo:", logoErr);
      }

      // Header logo: wide GVK-LOGO at 120pt wide (~5.4:1 aspect)
      const HEADER_LOGO_W = 120;
      const HEADER_LOGO_H = HEADER_LOGO_W / (1083 / 199);
      // Square "brothers" logo: 180x180 source, used as a centered watermark
      const SQUARE_SIZE_RATIO = 0.7; // of the shorter page dimension

      // Header — wide logo top-left, branding top-right
      if (headerLogoDataUrl) {
        doc.addImage(headerLogoDataUrl, "PNG", 40, 30, HEADER_LOGO_W, HEADER_LOGO_H);
      }
      doc.setFontSize(10);
      doc.setTextColor(...subColor);
      doc.text("gvkedutech.com", pageW - 40, 50, { align: "right" });
      doc.setDrawColor(...titleColor);
      doc.setLineWidth(0.8);
      doc.line(40, 80, pageW - 40, 80);

      doc.setFontSize(18);
      doc.setTextColor(...titleColor);
      doc.text("Smart Comparison", 40, 105);

      doc.setFontSize(13);
      doc.setTextColor(...titleColor);
      doc.text(comparisonType === "countries" ? "Countries Comparison" : "Universities Comparison", 40, 124);

      doc.setFontSize(10);
      doc.setTextColor(...subColor);
      doc.text(`Course: ${leadData.courseType}    Name: ${leadData.name}    Phone: ${leadData.phone}`, 40, 142);
      doc.text(`Generated: ${new Date().toLocaleDateString("en-IN")}`, 40, 157);

      const head = [["Parameter", ...items.map((i) => (i.code ? `[${i.code.toUpperCase()}] ` : "") + i.name)]];
      const body = params.map((p) => [p.label, ...items.map((item) => formatPdfCell(item, p, comparisonType))]);

      autoTable(doc, {
        startY: 175,
        head,
        body,
        styles: { fontSize: 9, cellPadding: 5, overflow: "linebreak", valign: "middle" },
        headStyles: { fillColor: titleColor, textColor: 255, fontStyle: "bold" },
        alternateRowStyles: { fillColor: [245, 247, 250] },
        columnStyles: { 0: { fontStyle: "bold", cellWidth: 130, fillColor: [241, 245, 249] } },
        margin: { left: 40, right: 40, top: 60 },
        tableWidth: pageW - 80,
        // Re-draw the watermark + page header on every page autoTable draws
        didDrawPage: (data) => {
          if (squareLogoDataUrl) {
            // Big centered square watermark — sized to SQUARE_SIZE_RATIO of the smaller page side
            const shortSide = Math.min(pageW, pageH);
            const wmSize = shortSide * SQUARE_SIZE_RATIO;
            const wmX = (pageW - wmSize) / 2;
            const wmY = (pageH - wmSize) / 2;
            doc.saveGraphicsState();
            try {
              const gState = doc.GState({ opacity: 0.1 });
              doc.setGState(gState);
            } catch {
              /* older jsPDF without GState — skip opacity */
            }
            doc.addImage(squareLogoDataUrl, "JPEG", wmX, wmY, wmSize, wmSize, "watermark");
            doc.restoreGraphicsState();
          }

          // Repeat small header logo on continuation pages
          if (data.pageNumber > 1 && headerLogoDataUrl) {
            doc.addImage(headerLogoDataUrl, "PNG", 40, 20, HEADER_LOGO_W, HEADER_LOGO_H);
            doc.setFontSize(9);
            doc.setTextColor(...subColor);
            doc.text("gvkedutech.com", pageW - 40, 40, { align: "right" });
            doc.setDrawColor(...titleColor);
            doc.setLineWidth(0.5);
            doc.line(40, 50, pageW - 40, 50);
          }
        },
      });

      if (winnerIndex >= 0) {
        const finalY = doc.lastAutoTable.finalY || 175;
        doc.setFontSize(13);
        doc.setTextColor(200, 36, 58);
        const tag = items[winnerIndex].code ? `[${items[winnerIndex].code.toUpperCase()}] ` : "";
        doc.text(`Recommended: ${tag}${items[winnerIndex].name}`, 40, finalY + 30);
        doc.setFontSize(9);
        doc.setTextColor(...subColor);
        doc.text("Based on overall scoring across all comparison parameters.", 40, finalY + 46);
      }

      const filename = `gvkedutech-comparison-${comparisonType}-${Date.now()}.pdf`;
      doc.save(filename);
      setToast(`PDF downloaded: ${filename}`);
    } catch (e) {
      console.error("PDF generation failed:", e);
      setToast("PDF generation failed — please try again");
    }
  };

  return (
    <div className="bg-card border-2 border-primary/20 rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Smart Comparison Tool</h3>
            <p className="text-xs text-white/80">Compare countries & universities side-by-side</p>
          </div>
        </div>
        <Shield className="w-6 h-6 text-white/60" />
      </div>

      {/* Toast */}
      {toast && (
        <div className="bg-accent/10 border-b border-accent/20 text-accent text-sm font-medium text-center py-2.5 px-4 animate-fade-in">
          {toast.startsWith("PDF downloaded") ? `✓ ${toast}` : `⚠️ ${toast}`}
        </div>
      )}

      <div className="p-6 sm:p-8">
        <ProgressSteps current={step} />

        {/* Animated step container */}
        <div key={step} className="animate-slide-in-right">
          {step === 1 && (
            <StepLeadForm
              data={leadData}
              setData={(next) => {
                if (typeof next === "function") {
                  setLeadData((prev) => {
                    const updated = next(prev);
                    if (updated.courseType !== prev.courseType) {
                      setSelectedCountries([]);
                      setSelectedUniversities([]);
                      setComparisonType(null);
                    }
                    return updated;
                  });
                } else {
                  if (next.courseType !== leadData.courseType) {
                    setSelectedCountries([]);
                    setSelectedUniversities([]);
                    setComparisonType(null);
                  }
                  setLeadData(next);
                }
              }}
              errors={errors}
              onSubmit={handleStartComparing}
            />
          )}
          {step === 2 && (
            <StepChooseType
              courseType={leadData.courseType}
              courseCountries={courseCountries}
              comparisonType={comparisonType}
              setComparisonType={setComparisonType}
              selectedCountries={selectedCountries}
              toggleCountry={toggleCountry}
              selectedUniversities={selectedUniversities}
              toggleUniversity={toggleUniversity}
              universitiesList={filteredUniversities}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onCompare={handleCompareNow}
              onBack={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <StepResults
              items={items}
              params={params}
              type={comparisonType}
              winnerIndex={winnerIndex}
              onBack={() => setStep(2)}
              onWhatsApp={handleWhatsApp}
              onDownloadPDF={handleDownloadPDF}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// ===================== STEP 1 — LEAD FORM =====================

function StepLeadForm({ data, setData, errors, onSubmit }) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-card border border-primary/15 rounded-2xl p-8 shadow-sm">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-foreground">Let&apos;s Personalize Your Comparison</h4>
          <p className="text-sm text-muted-foreground mt-1">Just a few quick details to begin.</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Full Name</label>
            <Input
              placeholder="e.g. Rohan Sharma"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className={`h-12 border-2 focus:border-accent ${errors.name ? "border-destructive" : "border-border"}`}
            />
            {errors.name && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-muted border-2 border-r-0 border-border rounded-l-lg text-sm font-semibold text-foreground">
                🇮🇳 +91
              </span>
              <Input
                type="tel"
                placeholder="98765 43210"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className={`h-12 border-2 rounded-l-none focus:border-accent ${errors.phone ? "border-destructive" : "border-border"}`}
              />
            </div>
            {errors.phone && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Course Type</label>
            <div className="grid grid-cols-2 gap-3">
              {COURSE_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setData({ ...data, courseType: type })}
                  className={`h-14 rounded-xl border-2 font-bold text-base transition-all duration-200 ${
                    data.courseType === type
                      ? "bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/30 scale-[1.02]"
                      : "bg-card text-foreground border-border hover:border-accent/50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            {errors.courseType && <p className="text-xs text-destructive mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.courseType}</p>}
          </div>

          <Button onClick={onSubmit} variant="accent" size="xl" className="w-full group text-base mt-2">
            Start Comparing
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ===================== STEP 2 — CHOOSE TYPE & ITEMS =====================

function StepChooseType({
  courseCountries,
  comparisonType,
  setComparisonType,
  selectedCountries,
  toggleCountry,
  selectedUniversities,
  toggleUniversity,
  searchQuery,
  setSearchQuery,
  universitiesList,
  onCompare,
  onBack,
}) {
  const selectedCount = comparisonType === "countries" ? selectedCountries.length : comparisonType === "universities" ? selectedUniversities.length : 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Button onClick={onBack} variant="ghost" size="sm" className="text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <div className="text-sm text-muted-foreground">
          Selected: <span className="font-bold text-accent">{selectedCount}/4</span>
        </div>
      </div>

      {!comparisonType && (
        <div className="grid md:grid-cols-2 gap-5">
          <TypeCard
            icon={<Globe className="w-10 h-10" />}
            title="Compare Countries"
            subtitle="Compare medical education across countries — fees, duration, eligibility, recognition"
            accent="accent"
            onClick={() => setComparisonType("countries")}
            active={comparisonType === "countries"}
          />
          <TypeCard
            icon={<Building2 className="w-10 h-10" />}
            title="Compare Universities"
            subtitle="Compare specific universities head-to-head — rankings, fees, hostel, MCI/NMC status"
            accent="highlight"
            onClick={() => setComparisonType("universities")}
            active={comparisonType === "universities"}
          />
        </div>
      )}

      {comparisonType === "countries" && (
        <div className="space-y-5 animate-slide-in-right">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              Select up to 4 countries
            </h4>
            <Button variant="ghost" size="sm" onClick={() => setComparisonType(null)} className="text-muted-foreground">Change</Button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {Object.keys(courseCountries).map((c) => {
              const selected = selectedCountries.includes(c);
              return (
                <button
                  key={c}
                  onClick={() => toggleCountry(c)}
                  className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border-2 font-semibold text-sm transition-all duration-200 ${
                    selected
                      ? "bg-accent text-accent-foreground border-accent shadow-md scale-[1.02]"
                      : "bg-card text-foreground border-border hover:border-accent/50 hover:scale-[1.02]"
                  }`}
                >
                  <span className={`fi fi-${courseCountries[c].code} text-base rounded-sm overflow-hidden`} style={{ width: "1.25rem", height: "1rem" }}></span>
                  <span>{c}</span>
                  {selected && <Check className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          {selectedCountries.length >= 2 && (
            <div className="flex justify-center pt-3">
              <Button onClick={onCompare} variant="accent" size="lg" className="group px-8">
                Compare Now ({selectedCountries.length})
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
          {selectedCountries.length === 1 && (
            <p className="text-center text-sm text-accent font-medium">Select at least one more to compare.</p>
          )}
        </div>
      )}

      {comparisonType === "universities" && (
        <div className="space-y-5 animate-slide-in-right">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Building2 className="w-5 h-5 text-highlight" />
              Select up to 4 universities
            </h4>
            <Button variant="ghost" size="sm" onClick={() => setComparisonType(null)} className="text-muted-foreground">Change</Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search universities or countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 border-2 border-border focus:border-highlight"
            />
          </div>

          <div className="max-h-96 overflow-y-auto pr-1 space-y-2">
            {universitiesList.map((u) => {
              const selected = selectedUniversities.includes(u.name);
              const countryData = courseCountries[u.country];
              return (
                <button
                  key={u.name}
                  onClick={() => toggleUniversity(u)}
                  className={`w-full text-left p-3 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
                    selected
                      ? "bg-highlight/10 border-highlight shadow-sm"
                      : "bg-card border-border hover:border-highlight/50"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${selected ? "bg-highlight text-highlight-foreground" : "bg-muted overflow-hidden"}`}>
                    {selected ? <Check className="w-4 h-4" /> : (countryData ? <span className={`fi fi-${countryData.code} rounded-sm`} style={{ fontSize: "1.25rem", lineHeight: "1" }}></span> : "🎓")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-foreground truncate">{u.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {u.country} · {countryData ? countryData.duration : "—"} · {countryData ? countryData.tuitionRange : "—"}
                    </p>
                  </div>
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 ${selected ? "bg-highlight border-highlight" : "border-border"}`}>
                    {selected && <Check className="w-3 h-3 text-highlight-foreground" />}
                  </div>
                </button>
              );
            })}
            {universitiesList.length === 0 && (
              <p className="text-center text-sm text-muted-foreground py-8">No universities match your search.</p>
            )}
          </div>

          {selectedUniversities.length >= 2 && (
            <div className="flex justify-center pt-3">
              <Button onClick={onCompare} className="bg-highlight hover:bg-highlight/90 text-highlight-foreground group px-8" size="lg">
                Compare Now ({selectedUniversities.length})
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
          {selectedUniversities.length === 1 && (
            <p className="text-center text-sm text-accent font-medium">Select at least one more to compare.</p>
          )}
        </div>
      )}
    </div>
  );
}

function TypeCard({ icon, title, subtitle, accent, onClick }) {
  const accentMap = {
    accent: { ring: "hover:border-accent", iconBg: "bg-accent/10", iconText: "text-accent", shadow: "hover:shadow-accent/30" },
    highlight: { ring: "hover:border-highlight", iconBg: "bg-highlight/10", iconText: "text-highlight", shadow: "hover:shadow-highlight/30" },
  };
  const a = accentMap[accent];
  return (
    <button
      onClick={onClick}
      className={`group text-left p-7 bg-card border-2 border-border rounded-2xl ${a.ring} ${a.shadow} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
    >
      <div className={`w-16 h-16 rounded-2xl ${a.iconBg} ${a.iconText} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
      <div className={`mt-5 inline-flex items-center gap-1.5 font-semibold text-sm ${a.iconText}`}>
        Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}

// ===================== STEP 3 — RESULTS =====================

function StepResults({ items, params, type, winnerIndex, onBack, onWhatsApp, onDownloadPDF }) {
  const [showBest, setShowBest] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBest(true), 350);
    return () => clearTimeout(t);
  }, []);

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No items selected.</p>
        <Button onClick={onBack} variant="outline" className="mt-4">Go Back</Button>
      </div>
    );
  }

  const accentPalette = ["primary", "highlight", "accent", "secondary"];
  const accentClass = {
    primary: { bg: "bg-primary", light: "bg-primary/5", text: "text-primary", border: "border-primary/20" },
    highlight: { bg: "bg-highlight", light: "bg-highlight/5", text: "text-highlight", border: "border-highlight/20" },
    accent: { bg: "bg-accent", light: "bg-accent/5", text: "text-accent", border: "border-accent/20" },
    secondary: { bg: "bg-secondary", light: "bg-secondary/5", text: "text-secondary", border: "border-secondary/20" },
  };

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Button onClick={onBack} variant="ghost" size="sm" className="text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Modify Selection
        </Button>
        <Badge variant="secondary" className="bg-accent/10 text-accent border border-accent/20">
          {items.length} {type === "countries" ? "Countries" : "Universities"} Compared
        </Badge>
      </div>

      {/* Winner card */}
      {items.length >= 2 && winnerIndex >= 0 && (
        <div className={`relative overflow-hidden rounded-2xl border-2 ${accentClass[accentPalette[winnerIndex]].border} bg-gradient-to-br from-accent/5 via-highlight/5 to-primary/5 p-5 sm:p-6`}>
          <div className="absolute top-3 right-3">
            <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
              <Trophy className="w-3.5 h-3.5" /> WINNER
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shrink-0">
              <Trophy className="w-7 h-7 text-accent-foreground" />
            </div>
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wide">Our Recommendation</p>
              <h4 className="text-2xl font-bold text-foreground mt-0.5 flex items-center gap-2">
                {type === "countries" && (
                  <span className={`fi fi-${items[winnerIndex].code} rounded shadow-sm`} style={{ fontSize: "1.75rem", lineHeight: "1" }}></span>
                )}
                {items[winnerIndex].name}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                Based on overall scoring across {params.length} parameters, this option stands out as the best overall value.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Comparison table */}
      <div className="bg-card rounded-2xl border-2 border-border overflow-hidden shadow-sm">
        {/* Sticky header row */}
        <div className="grid border-b-2 border-border bg-muted/40" style={{ gridTemplateColumns: `220px repeat(${items.length}, minmax(180px, 1fr))` }}>
          <div className="p-4 font-bold text-foreground text-sm border-r border-border">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-muted-foreground" />
              Parameters
            </div>
          </div>
          {items.map((item, idx) => {
            const a = accentClass[accentPalette[idx]];
            const isWinner = winnerIndex === idx;
            return (
              <div key={idx} className={`p-4 border-r border-border last:border-r-0 ${isWinner ? a.light : ""}`}>
                <div className={`${a.bg} text-white rounded-xl p-3 text-center relative shadow-md`}>
                  {type === "countries" ? (
                    <>
                      <div className="mb-1 flex justify-center">
                        <span className={`fi fi-${item.code} rounded shadow-sm`} style={{ fontSize: "2.25rem", lineHeight: "1" }}></span>
                      </div>
                      <p className="font-bold text-sm leading-tight">{item.name}</p>
                    </>
                  ) : (
                    <>
                      <div className="mb-1 flex justify-center">
                        <span className={`fi fi-${item.code} rounded shadow-sm`} style={{ fontSize: "2.25rem", lineHeight: "1" }}></span>
                      </div>
                      <p className="font-bold text-xs leading-tight line-clamp-2 min-h-[2.5rem]">{item.name}</p>
                      <p className="text-[10px] opacity-90 mt-0.5">{item.country}</p>
                    </>
                  )}
                  {isWinner && (
                    <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-7 h-7 flex items-center justify-center shadow-lg">
                      <Trophy className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rows */}
        <div>
          {params.map((p, rowIdx) => {
            const bestIdx = pickBestIndex(items, p);
            return (
              <div
                key={p.key}
                className={`grid border-b border-border last:border-b-0 transition-colors ${rowIdx % 2 === 1 ? "bg-muted/30" : "bg-card"}`}
                style={{ gridTemplateColumns: `220px repeat(${items.length}, minmax(180px, 1fr))` }}
              >
                <div className="p-3.5 text-sm font-semibold text-muted-foreground border-r border-border flex items-center">
                  {p.label}
                </div>
                {items.map((item, idx) => {
                  const isBest = bestIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 text-sm border-r border-border last:border-r-0 transition-all duration-300 ${
                        isBest && showBest ? "bg-accent/10 ring-1 ring-accent/30 ring-inset" : ""
                      }`}
                    >
                      <div className={`flex items-center gap-2 ${isBest && showBest ? "font-bold text-accent" : "text-foreground"}`}>
                        <span className="flex-1 min-w-0">{renderValue(item, p, type)}</span>
                        {isBest && showBest && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-accent bg-accent/15 px-2 py-0.5 rounded-full shrink-0 animate-fade-in">
                            <CheckCircle2 className="w-3 h-3" /> BEST
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid sm:grid-cols-2 gap-3">
        <Button onClick={onDownloadPDF} variant="outline" size="lg" className="border-2 border-primary/30 text-foreground hover:bg-primary/5 group">
          <Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" />
          Download Comparison PDF
        </Button>
        <Button onClick={onWhatsApp} size="lg" className="bg-[#25D366] hover:bg-[#1DA851] text-white group">
          <MessageCircle className="w-5 h-5 mr-2" />
          Talk to a Counsellor
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

function renderValue(item, param, type) {
  if (param.key === "_universityCount") {
    const n = Array.isArray(item.universities) ? item.universities.length : 0;
    return <span className="font-semibold">{n}</span>;
  }
  const v = item[param.key];
  if (v === null || v === undefined) {
    return <span className="text-muted-foreground italic">N/A</span>;
  }
  if (param.format === "stars") {
    return (
      <span className="inline-flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < v ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`} />
        ))}
      </span>
    );
  }
  if (param.format === "yesno") {
    return v ? (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-bold">
        <Check className="w-3 h-3" /> Yes
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-bold">
        <X className="w-3 h-3" /> No
      </span>
    );
  }
  if (param.format === "percent" || param.format === "percentNullable") {
    if (v === null || v === undefined) {
      return <span className="text-muted-foreground italic">N/A</span>;
    }
    return <span className="font-semibold">{v}%</span>;
  }
  if (param.format === "usd") {
    return <span className="font-semibold">${(v || 0).toLocaleString()}</span>;
  }
  if (param.format === "number") {
    return <span className="font-semibold">{(v || 0).toLocaleString()}</span>;
  }
  if (param.format === "fee") {
    return (
      <span className="font-semibold">
        {v} <span className="text-xs text-muted-foreground font-normal">/year</span>
      </span>
    );
  }
  if (param.format === "barrier") {
    const colors = { Low: "bg-accent/10 text-accent", Medium: "bg-highlight/10 text-highlight", High: "bg-muted text-muted-foreground" };
    return <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${colors[v] || "bg-muted text-foreground"}`}>{v}</span>;
  }
  if (param.format === "badge") {
    const isPositive = typeof v === "string" && (v.toLowerCase().includes("available") || v.toLowerCase().includes("excellent"));
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold ${isPositive ? "bg-accent/10 text-accent" : "bg-highlight/10 text-highlight"}`}>
        {v}
      </span>
    );
  }
  return <span>{v}</span>;
}

function formatPdfCell(item, param, type) {
  if (param.key === "_universityCount") {
    return Array.isArray(item.universities) ? String(item.universities.length) : "0";
  }
  const v = item[param.key];
  if (v === null || v === undefined || v === "") return "N/A";
  if (param.format === "percent" || param.format === "percentNullable") {
    return v === null || v === undefined ? "N/A" : `${v}%`;
  }
  if (param.format === "stars") {
    return `${v} / 5`;
  }
  if (param.format === "fee") {
    return String(v);
  }
  if (param.format === "number") {
    return typeof v === "number" ? String(v) : String(v);
  }
  if (param.format === "barrier" || param.format === "badge") {
    return String(v);
  }
  if (typeof v === "number") return String(v);
  return String(v);
}

export default SmartComparison;
