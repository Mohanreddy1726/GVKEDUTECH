"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, CheckCircle, GraduationCap, ChevronDown, MessageCircle, Phone, Search, X } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import "flag-icons/css/flag-icons.min.css";

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

// export const metadata = {
//   title: "Partner Universities | Top Medical Universities",
//   description: "Explore our network of 300+ partner universities worldwide for MBBS and Masters programs.",
//   keywords: ["partner universities", "MBBS universities abroad", "study abroad universities"],
//   openGraph: {
//     title: "Partner Universities | GVK EduTech",
//     description: "300+ partner universities worldwide offering MBBS and Masters programs.",
//     images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GVK EduTech Partner Universities" }],
//   },
// };

const universityData = {
  nepal:       { name: "Nepal",           flag: "np", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop",        category: "MBBS", universities: ["Birat Medical College (KU), Biratnagar","B & C Medical College (KU), Birtamod","Chitwan Medical College (TU), Bharatpur","College of Medical Science (KU), Bharatpur","Devdaha Medical College (KU), Butwal","Gandaki Medical College (TU), Pokhara","Janaki Medical College (TU), Janakpur","Kathmandu Medical College (KU), Kathmandu","Kathmandu University (KUSMS), Dhulikhel","Karnali Academy of Health Science, Karnali","KIST Medical College (TU), Kathmandu","Lumbini Medical College (KU), Palpa","Manipal College of Medical Science (KU), Pokhara","National Medical College (TU), Birgunj","Nepal Medical College (KU), Kathmandu","Nepalgunj Medical College (KU), Nepalgunj","Nobel Medical College (KU), Biratnagar","Universal Medical College (TU), Bhairahawa"] },
  georgia:     { name: "Georgia",         flag: "ge", image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&auto=format&fit=crop",        category: "MBBS", universities: ["Akaki Tsereteli State University","Alte University School of Medicine","Avicenna - Batumi Medical University","Batumi Shota Rustaveli State University","BAU International University","Caucasus International University (CIU)","Caucasus University (CU)","Central University of Europe, Kutaisi","Central University of Europe, Tbilisi","David Tvildiani Medical University (DTMU)","East European University (EEU)","East-West University (EWU)","European University (EU)","Geomedi University","Georgian American University (GAU)","Georgian National University (SEU)","Grigol Robakidze University","International Black Sea University","Ilia State University","Ivane Javakhishvili Tbilisi State University","New Vision University","Petre Shotadze Tbilisi Medical Academy","Tbilisi State Medical University (TSMU)","University of Georgia (UG)"] },
  kyrgyzstan:  { name: "Kyrgyzstan",      flag: "kg", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",        category: "MBBS", universities: ["IHSM Central Campus","IHSM Issyk-Kul Campus","International Medical University","Jalal-Abad State University","Kyrgyz National University","Kyrgyz-Russian Slavic University","Kyrgyz State Medical Academy","Osh International Medical University","Osh State University","S. Tentishev Asian Medical Institute","University Of South Asia"] },
  russia:      { name: "Russia",          flag: "ru", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&auto=format&fit=crop",        category: "MBBS", universities: ["Altai State Medical University","Amur State Medical Academy","Astrakhan State Medical University","Bashkir State Medical University","Chita State Medical Academy","Chuvash State University","Crimean Federal University (CFU)","Dagestan State Medical University","Far Eastern Federal University (FEFU)","First Moscow State Medical University","Immanuel Kant Baltic Federal University","Ingush State University","Irkutsk State Medical University","Ivanovo State Medical University","Izhevsk State Medical Academy (ISMA)","Kabardino-Balkarian State University","Kadyrov Chechen State University","Kazan Federal University (KFU)","Kazan State Medical University","Kemerovo State Medical University","Kemerovo State University","Kirov State Medical University","Krasnoyarsk State Medical University","Kuban State Medical University","Kursk State Medical University","Lobachevsky State University","Lomonosov Moscow State University","Mari State University","Maykop State University","Murmansk Arctic State University","N.P. Ogarev Mordovia State University","North Caucasian State Academy (NCSA)","North Ossetian State Medical Academy","North-Western State Medical University","Northern State Medical University","Novosibirsk State University","Omsk State Medical University","Orel State University","Orenburg State Medical University","Pacific State Medical University","Penza State University","People's Friendship University \"RUDN\"","Perm State Medical University","Petrozavodsk State University","Pirogov Russian National Research Medical University","Privolzhsky Research Medical University","Rostov State Medical University","Ryazan State Medical University","Samara State Medical University","Saratov State Medical University","Siberian State Medical University","Smolensk State Medical University","South-Ural State Medical University","Stavropol State Medical University","Surgut State University","Tambov State University","Tula State University","Tver State Medical University","Tyumen State Medical University","Ulyanovsk State University","Ural State Medical University","Volgograd State Medical University","Voronezh State Medical University","Yaroslavl State Medical University"] },
  uzbekistan:  { name: "Uzbekistan",      flag: "uz", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=800&auto=format&fit=crop",        category: "MBBS", universities: ["Asia International University","Andijan State Medical Institute","Bukhara State Medical Institute","Fergana Medical Institute of Public Health","Karakalpakstan Medical Institute","Namangan State University","Samarkand State Medical University","Tashkent Medical Academy, Tashkent","Tashkent Medical Academy, Chirchiq","Tashkent Medical Academy, Termez","Tashkent Medical Academy, Urgench","Tashkent Pediatric Medical Institute","Tashkent State Dental Institute"] },
  kazakhstan:  { name: "Kazakhstan",      flag: "kz", image: "https://images.unsplash.com/photo-1625657799852-3d2bd008a050?w=800&auto=format&fit=crop",        category: "MBBS", universities: ["Al-Farabi Kazakh National University","Asfendiyarov Kazakh National University","Caspian International School of Medicine","Karaganda Medical University","Kazakh-Russian Medical University","Astana Medical University","Semey Medical University","Kokshetau State University","South Kazakhstan Medical Academy","West Kazakhstan Medical University","Kazakh National Medical University (KazNMU)"] },
  vietnam:     { name: "Vietnam",         flag: "vn", image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&auto=format&fit=crop",            category: "MBBS", universities: ["Hanoi Medical University (HMU)","University of Medicine and Pharmacy at HCMC","Hue University of Medicine and Pharmacy","Can Tho University of Medicine and Pharmacy","Thai Nguyen University of Medicine and Pharmacy","Hai Phong University of Medicine and Pharmacy","Pham Ngoc Thach University of Medicine"] },
  uk:          { name: "United Kingdom",  flag: "gb", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop",        category: "Masters", universities: ["Bangor University","Coventry University","De Montfort University","University of Roehampton","University of East London","University of Greenwich","Hertfordshire University","University of Gloucestershire","Ravensbourne University London","Solent University","Teesside University","University of East Anglia","Cardiff Metropolitan University","Heriot Watt University","Nottingham Trent University","Swansea University","University of Wolverhampton","University of Chester","BPP University","Birmingham City University","University of Bradford","Northumbria University London","Manchester Metropolitan University","University of Manchester","Wrexham Glyndwr University","Sheffield Hallam University","Brunel University London","University of Westminster","University of Bristol","University of Leeds","University of Glasgow","Durham University","University of Southampton","University of Birmingham","University of Nottingham","University of Sheffield","Newcastle University","Lancaster University","Queen Mary University of London","University of Bath","The University of Exeter","Cardiff University","University of York","University of Liverpool","Cranfield University","Queens University Belfast","University of Aberdeen","Loughborough University","University of Sussex","University of Surrey","University of Leicester","University of Strathclyde"] },
  usa:         { name: "USA",             flag: "us", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&auto=format&fit=crop",        category: "Masters", universities: ["Saint Louis University","Webster University","Arkansas State University","University of Memphis","University of Findlay","Wichita State University","University of Missouri St. Louis","Southern New Hampshire","Sacred Heart University","South East Missouri University","SUNY Buffalo State College","New Jersey Institute of Technology","San Jose State University","University of North Texas","University of New Haven","University of Albany SUNY","Baylor University","Marquette University","University of South Dakota","University of Cincinnati","Johns Hopkins University","Arizona State University","University of California","University of South Florida","Drexel University","University of Delaware","Miami University","University of Wisconsin","George Mason University","Montclair State University","Colorado State University","Oregon State University","University of Illinois at Chicago","The University of Alabama","Claremont Graduate University","Auburn University","University of Utah","Ohio University","University of Kansas","University of Oklahoma","University of Maryland","University of Tennessee"] },
  australia:   { name: "Australia",       flag: "au", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop",        category: "Masters", universities: ["The University of New South Wales","Monash University","The University of Queensland","University of Western Australia","The University of Adelaide","University of Technology Sydney","Macquarie University","RMIT University","University of Wollongong","The University of Newcastle","Queensland University of Technology","Deakin University","La Trobe University","Griffith University","Swinburne University of Technology","Western Sydney University","University of Tasmania","University of South Australia","Flinders University","Charles Darwin University","James Cook University","CQUniversity Australia","Australian Catholic University","Torrens University","Victoria University","University of Canberra","University of the Sunshine Coast","Kaplan Business School","Le Cordon Bleu","International College of Management Sydney"] },
  canada:      { name: "Canada",          flag: "ca", image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&auto=format&fit=crop",        category: "Masters", universities: ["York College","Brock University","Royal Roads University","Saskatchewan Colleges","Wilfrid Laurier University","Fairleigh Dickinson University","McGill University's School of Continuing Studies","University of Lethbridge","Simon Fraser University","University of Waterloo","Lakehead University","University of Calgary","Queen's University","University of Winnipeg","University of Manitoba","Dalhousie University","University of Prince Edward Island","Toronto Metropolitan University","University of Victoria","Acadia University","Vancouver Island University","York University","St. Francis Xavier University","St. Thomas University","University of Guelph","University of Northern British Columbia","University Canada West","University of Windsor","Thompson Rivers University","New York Institute of Technology","Memorial University of Newfoundland","Trent University","Cape Breton University","George Brown College","Sheridan College","Seneca Polytechnic"] },
  germany:     { name: "Germany",         flag: "de", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&auto=format&fit=crop",        category: "Masters", universities: ["IU International University of Applied Sciences","Berlin School of Business & Innovation (BSBI)","University of Applied Sciences Europe (UE)","SRH Hochschule Heidelberg","SRH Hochschule Berlin","SRH Hochschule Hamburg","SRH Hochschule Dresden","SRH Hochschule Nordrhein-Westfalen","ISM International School of Management GmbH","Steinbeis University","Eurasia Institute","Arden University","EU Business School","GISMA Business School","New European College","Technical University of Munich (TUM)"] },
  europe:      { name: "Rest of Europe",  flag: "eu", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop",        category: "Masters", universities: ["Domus Academy - Milan, Italy","Campus Spain - Madrid, Spain","Bella Vista - Zurich, Switzerland","Istituto Europeo di Design - Rome, Italy","Business and Hotel Management School – BHMS - Lucerne, Switzerland","Hochschule Fresenius University of Applied Science - Berlin, Germany"] },
};

const totalCount = Object.values(universityData).reduce((s, c) => s + c.universities.length, 0);

const pageStyles = (
  <style>{`
    .uni-eyebrow {
      display: inline-flex; align-items: center; gap: 0.5rem;
      font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;
      text-transform: uppercase; color: ${T.red}; margin-bottom: 0.75rem;
    }
    .uni-eyebrow::before {
      content: ''; display: block; width: 1.5rem; height: 2px;
      background: ${T.red}; border-radius: 2px;
    }
    .uni-rule {
      display: block; width: 3rem; height: 3px;
      background: linear-gradient(to right, ${T.red}, ${T.redLight});
      border-radius: 2px; margin-top: 0.5rem;
    }
    .tab-btn {
      padding: 0.5rem 1.25rem; border-radius: 2rem; font-size: 0.8rem;
      font-weight: 600; border: 1.5px solid ${T.surfaceAlt};
      cursor: pointer; transition: all 0.2s ease;
      background: ${T.white}; color: ${T.muted};
    }
    .tab-btn:hover { border-color: ${T.red}55; color: ${T.navyMid}; }
    .tab-btn.active {
      background: ${T.red}; color: ${T.white};
      border-color: ${T.red};
      box-shadow: 0 4px 12px ${T.red}44;
    }
    .search-input {
      width: 100%; height: 2.75rem; border-radius: 0.75rem;
      border: 1.5px solid ${T.surfaceAlt}; padding: 0 1rem 0 2.75rem;
      font-size: 0.875rem; color: ${T.navyMid}; background: ${T.white};
      outline: none; transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .search-input:focus {
      border-color: ${T.red}; box-shadow: 0 0 0 3px ${T.red}16;
    }
    .country-accordion {
      background: ${T.white}; border-radius: 1rem;
      border: 1px solid ${T.surfaceAlt}; overflow: hidden;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    .country-accordion.open {
      border-color: ${T.red}44;
      box-shadow: 0 4px 20px rgba(200,36,58,0.1);
    }
    .accordion-trigger {
      width: 100%; display: flex; align-items: center;
      gap: 1rem; padding: 1.25rem 1.5rem;
      cursor: pointer; background: none; border: none; text-align: left;
      transition: background 0.15s ease;
    }
    .accordion-trigger:hover { background: ${T.surface}; }
    .chevron { transition: transform 0.25s ease; flex-shrink: 0; }
    .chevron.open { transform: rotate(180deg); }
    .accordion-body {
      overflow: hidden;
      transition: max-height 0.35s ease, opacity 0.25s ease;
      max-height: 0; opacity: 0;
    }
    .accordion-body.open { opacity: 1; }
    .uni-chip {
      display: flex; align-items: flex-start; gap: 0.5rem;
      padding: 0.625rem 0.75rem; border-radius: 0.625rem;
      background: ${T.surface}; border: 1px solid ${T.surfaceAlt};
      transition: border-color 0.15s ease, background 0.15s ease;
      font-size: 0.78rem; color: ${T.navyMid};
    }
    .uni-chip:hover { border-color: ${T.red}44; background: ${T.red}06; }
    .cat-badge-mbbs {
      padding: 0.2rem 0.65rem; border-radius: 2rem;
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
      text-transform: uppercase; flex-shrink: 0;
      background: ${T.red}16; color: ${T.red};
    }
    .cat-badge-masters {
      padding: 0.2rem 0.65rem; border-radius: 2rem;
      font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em;
      text-transform: uppercase; flex-shrink: 0;
      background: ${T.navy}16; color: ${T.navyMid};
    }
    .search-hit {
      background: #FFF3A8;
      color: ${T.navy};
      border-radius: 3px;
      padding: 0 2px;
      font-weight: 700;
      box-shadow: 0 0 0 1px #F2C94C;
    }
  `}</style>
);

/* ── Highlight matched substring ── */
const Highlight = ({ text, q }) => {
  if (!q) return <>{text}</>;
  const query = q.trim();
  if (!query) return <>{text}</>;
  const lower = text.toLowerCase();
  const ql = query.toLowerCase();
  const parts = [];
  let i = 0;
  let idx = lower.indexOf(ql, i);
  let key = 0;
  while (idx !== -1) {
    if (idx > i) parts.push(<span key={key++}>{text.slice(i, idx)}</span>);
    parts.push(
      <mark key={key++} className="search-hit">
        {text.slice(idx, idx + ql.length)}
      </mark>
    );
    i = idx + ql.length;
    idx = lower.indexOf(ql, i);
  }
  if (i < text.length) parts.push(<span key={key++}>{text.slice(i)}</span>);
  return <>{parts}</>;
};

/* ── Accordion item ── */
const CountryAccordion = ({ country, defaultOpen = false, search = "" }) => {
  const q = search.trim().toLowerCase();
  const countryNameMatches = q && country.name.toLowerCase().includes(q);
  const matchedUnis = q
    ? country.universities.filter(u => u.toLowerCase().includes(q))
    : country.universities;
  const visibleUnis = q && !countryNameMatches ? matchedUnis : country.universities;

  // Auto-open the accordion when a search is active and we have matches
  const [open, setOpen] = useState(defaultOpen || (q && visibleUnis.length > 0));

  return (
    <div className={`country-accordion ${open ? "open" : ""}`}>
      <button className="accordion-trigger" onClick={() => setOpen(o => !o)}>
        {/* Flag thumbnail */}
        <div
          className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center"
          style={{ background: T.surfaceAlt }}
        >
          <img src={country.image} alt={country.name}
            className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <span
            className={`fi fi-${country.flag} relative z-10`}
            style={{ fontSize: "1.75rem", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.35))" }}
          />
        </div>

        {/* Name + count */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-base" style={{ color: T.navyMid }}>
              <Highlight text={country.name} q={search} />
            </h3>
            <span className={country.category === "MBBS" ? "cat-badge-mbbs" : "cat-badge-masters"}>
              {country.category}
            </span>
          </div>
          <p className="text-xs mt-0.5" style={{ color: T.muted }}>
            {q && !countryNameMatches && matchedUnis.length > 0
              ? `${matchedUnis.length} of ${country.universities.length} match`
              : `${country.universities.length} Partner ${country.universities.length === 1 ? "University" : "Universities"}`}
          </p>
        </div>

        {/* Chevron */}
        <ChevronDown
          className={`chevron w-5 h-5 ${open ? "open" : ""}`}
          style={{ color: open ? T.red : T.muted }}
        />
      </button>

      {/* Body — height driven by JS ref for smooth animation */}
      <div
        className={`accordion-body ${open ? "open" : ""}`}
        style={{ maxHeight: open ? `${visibleUnis.length * 60 + 48}px` : "0" }}
      >
        {visibleUnis.length === 0 ? (
          <div
            className="px-6 py-6 text-center text-sm"
            style={{ color: T.muted, borderTop: `1px solid ${T.surfaceAlt}` }}
          >
            No universities match "<strong style={{ color: T.navyMid }}>{search}</strong>" in {country.name}.
          </div>
        ) : (
        <div
          className="px-5 pb-5 pt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-2"
          style={{ borderTop: `1px solid ${T.surfaceAlt}` }}
        >
          {visibleUnis.map((uni, i) => {
            // Hardcoded detail-page overrides (mirror TSMU pattern)
            const isTSMU = uni.includes("Tbilisi State Medical University");
            const isKSMA = uni.includes("Kyrgyz State Medical Academy");
            const isGreenwich = uni === "University of Greenwich";
            if (isTSMU) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/tbilisi-state-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            if (isKSMA) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/kyrgyz-state-medical-academy"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            if (isGreenwich) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-greenwich"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Manchester specific page
            const isManchester = uni === "University of Manchester";
            if (isManchester) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-manchester"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Southampton specific page
            const isSouthampton = uni === "University of Southampton";
            if (isSouthampton) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-southampton"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // KazNMU specific page
            const isKazNMU = uni.includes("Kazakh National Medical University");
            if (isKazNMU) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/kazakh-national-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Perm State Medical University specific page
            const isPerm = uni === "Perm State Medical University";
            if (isPerm) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/perm-state-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Orenburg State Medical University specific page
            const isOrenburg = uni === "Orenburg State Medical University";
            if (isOrenburg) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/orenburg-state-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Astana Medical University specific page
            const isAstana = uni.includes("Astana Medical University");
            if (isAstana) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/astana-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // TUM specific page
            const isTUM = uni.includes("Technical University of Munich");
            if (isTUM) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/technical-university-of-munich"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Batumi Shota Rustaveli State University specific page
            const isBSU = uni.includes("Batumi Shota Rustaveli State University");
            if (isBSU) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/batumi-shota-rustaveli-state-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Osh State University specific page
            const isOSU = uni.includes("Osh State University");
            if (isOSU) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/osh-state-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Samarkand State Medical University specific page
            const isSSMU = uni.includes("Samarkand State Medical University");
            if (isSSMU) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/samarkand-state-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Bukhara State Medical Institute specific page
            const isBSMI = uni.includes("Bukhara State Medical Institute");
            if (isBSMI) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/bukhara-state-medical-institute"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Andijan State Medical Institute specific page
            const isASMI = uni.includes("Andijan State Medical Institute");
            if (isASMI) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/andijan-state-medical-institute"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Bashkir State Medical University specific page
            const isBSMU = uni === "Bashkir State Medical University";
            if (isBSMU) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/bashkir-state-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Pirogov Russian National Research Medical University specific page
            const isPirogov = uni === "Pirogov Russian National Research Medical University";
            if (isPirogov) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/pirogov-russian-national-medical-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Kazan Federal University specific page
            const isKFU = uni.includes("Kazan Federal University");
            if (isKFU) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/kazan-federal-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Tashkent Medical Academy specific page
            const isTMA = uni.includes("Tashkent Medical Academy");
            if (isTMA) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/tashkent-medical-academy"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Birmingham specific page
            const isBirmingham = uni === "University of Birmingham";
            if (isBirmingham) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-birmingham"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Leeds specific page
            const isLeeds = uni === "University of Leeds";
            if (isLeeds) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-leeds"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Glasgow specific page
            const isGlasgow = uni === "University of Glasgow";
            if (isGlasgow) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-glasgow"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Liverpool specific page
            const isLiverpool = uni === "University of Liverpool";
            if (isLiverpool) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-liverpool"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Nottingham specific page
            const isNottingham = uni === "University of Nottingham";
            if (isNottingham) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-nottingham"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Queen Mary University of London specific page
            const isQMUL = uni === "Queen Mary University of London";
            if (isQMUL) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/queen-mary-university-of-london"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // Teesside University specific page
            const isTeesside = uni === "Teesside University";
            if (isTeesside) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/teesside-university"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Sheffield specific page
            const isSheffield = uni === "University of Sheffield";
            if (isSheffield) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-sheffield"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of York specific page
            const isYork = uni === "University of York";
            if (isYork) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-york"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Exeter specific page
            const isExeter = uni === "The University of Exeter";
            if (isExeter) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-exeter"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // University of Bristol specific page
            const isBristol = uni === "University of Bristol";
            if (isBristol) {
              return (
                <Link
                  key={i}
                  href="/partner-universities/university-of-bristol"
                  className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
                >
                  <CheckCircle
                    className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                    style={{ color: T.red }}
                  />
                  <span className="leading-snug"><Highlight text={uni} q={search} /></span>
                </Link>
              );
            }
            // For MBBS countries, link to partner-universities/[country-slug]
            const countrySlug = Object.keys(universityData).find(key => universityData[key].name === country.name);
            return (
              <Link
                key={i}
                href={`/partner-universities/${countrySlug}`}
                className="uni-chip cursor-pointer hover:border-red-500 hover:bg-red-50"
              >
                <CheckCircle
                  className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                  style={{ color: T.red }}
                />
                <span className="leading-snug"><Highlight text={uni} q={search} /></span>
              </Link>
            );
          })}
        </div>
        )}
      </div>
    </div>
  );
};

/* ── Page ── */
const PartnerUniversitiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return Object.entries(universityData).filter(([, c]) => {
      const matchesFilter = activeFilter === "All" || c.category === activeFilter;
      const q = search.trim().toLowerCase();
      const matchesSearch = !q
        || c.name.toLowerCase().includes(q)
        || c.universities.some(u => u.toLowerCase().includes(q));
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <PageLayout>
      {pageStyles}

      <PageHeader
        title="Partner Universities"
        subtitle="Explore Your Dream Universities Worldwide"
        breadcrumb="Partner Universities"
      />

      {/* ── Stats Bar ── */}
      <div style={{ background: T.navy }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: `${totalCount}+`, label: "Partner Universities" },
              { value: "13",            label: "Countries" },
              { value: "MBBS & Masters",label: "Programs" },
              { value: "100%",          label: "NMC / QS Vetted" },
            ].map((s, i) => (
              <div key={i} className="py-5 px-4 text-center">
                <p className="text-xl font-bold" style={{ color: T.red }}>{s.value}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Introduction ── */}
      <section className="py-16" style={{ background: T.surface }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="uni-eyebrow" style={{ justifyContent: "center" }}>Our Network</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: T.navyMid }}>
            Your Gateway to Elite<br />
            <span style={{ color: T.red }}>Universities Worldwide</span>
          </h2>
          <span className="uni-rule mx-auto" />
          <p className="mt-5 text-base leading-relaxed" style={{ color: T.muted }}>
            Selecting the right university is a pivotal decision that shapes your future. At GVK
            Edutech, our carefully curated network spans prestigious institutions across premier
            destinations — each offering exceptional programs, groundbreaking research opportunities,
            and enriching campus experiences.
          </p>
        </div>
      </section>

      {/* ── Universities List ── */}
      <section className="py-16" style={{ background: T.white }}>
        <div className="container mx-auto px-4 max-w-5xl">

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
            {/* Filter tabs */}
            <div className="flex gap-2 flex-wrap">
              {["All", "MBBS", "Masters"].map(f => (
                <button
                  key={f}
                  className={`tab-btn ${activeFilter === f ? "active" : ""}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                  <span className="ml-1.5 opacity-70 text-xs">
                    ({f === "All"
                      ? Object.keys(universityData).length
                      : Object.values(universityData).filter(c => c.category === f).length})
                  </span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                style={{ color: T.muted }}
              />
              <input
                className="search-input"
                placeholder="Search country or university…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setSearch("")}
                  style={{ color: T.muted }}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="text-xs mb-5" style={{ color: T.muted }}>
            Showing <strong style={{ color: T.navyMid }}>{filtered.length}</strong> countr{filtered.length === 1 ? "y" : "ies"}
            {search && <> matching "<strong style={{ color: T.red }}>{search}</strong>"</>}
          </p>

          {/* Accordion list */}
          {filtered.length > 0 ? (
            <div className="space-y-3">
              {filtered.map(([key, country], i) => (
                <CountryAccordion key={key} country={country} defaultOpen={i === 0 && !search} search={search} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <GraduationCap className="w-12 h-12 mx-auto mb-3" style={{ color: T.surfaceAlt }} />
              <p className="font-semibold" style={{ color: T.navyMid }}>No results found</p>
              <p className="text-sm mt-1" style={{ color: T.muted }}>
                Try a different search term or filter.
              </p>
              <button
                className="mt-4 text-sm font-semibold hover:underline"
                style={{ color: T.red }}
                onClick={() => { setSearch(""); setActiveFilter("All"); }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${T.navy} 0%, #1E3558 100%)` }}
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: T.red }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-5 pointer-events-none"
          style={{ background: T.red }} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: T.redLight }}>
            Take the Next Step
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Apply to Your Dream University?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
            Our experienced counselors will identify the perfect university tailored to your
            academic profile, financial considerations, and career aspirations.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: `linear-gradient(135deg, ${T.red}, ${T.redDark})`,
                color: T.white,
                boxShadow: `0 4px 16px ${T.red}55`,
              }}
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+want+to+know+more+about+partner+universities."
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "rgba(255,255,255,0.1)", color: T.white,
                border: "1px solid rgba(255,255,255,0.25)",
              }}
            >
              <MessageCircle className="w-4 h-4" /> Get Free Counseling
            </a>
            <a
              href="tel:+919010060000"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "transparent", color: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PartnerUniversitiesPage;