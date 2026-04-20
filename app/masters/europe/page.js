import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in Europe 2026 - Top Universities | GVK EduTech",
  description: "Pursue your Masters degree in Europe at top-ranked universities. Affordable fees, world-class research, Schengen visa benefits. Apply for Europe Masters now.",
  keywords: ["Masters in Europe", "study Masters Europe", "Europe university admission", "Masters degree Europe", "Schengen visa"],
  openGraph: {
    title: "Study Masters in Europe | GVK EduTech",
    description: "Study Masters in Europe at top-ranked universities with affordable fees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Europe" }],
  },
};

const EuropePage = () => {
  return (
    <CountryPageTemplate
      country="Europe"
      programType="Masters"
      heroImage="https://gvkedutech.com/site/assets/images/countries/europeeemastergvkk.jpg"
      introduction="Europe is a global hub for higher education, known for its academic excellence, cutting-edge research, and cultural richness. Whether you're looking to study in Germany's innovation-driven institutes, France's business schools, or the tech-savvy universities of the Netherlands and Sweden, Europe offers something for every aspiring student. And with GVK Edutech as your trusted study abroad partner, you can navigate your journey confidently—from application to arrival."
      whyChoose={[
        "Top-Ranked Universities: Over 400 universities in the QS World University Rankings",
        "English-Taught Programs: Thousands of MS programs available in English",
        "Affordable or Free Tuition: Germany, Norway, Finland offer zero or low tuition fees",
        "Post-Study Work Visas: 1–2 years of work opportunities (Germany: 18 months, Ireland: 2 years)",
        "Multicultural Exposure: Highly inclusive, international environment",
        "World-Class Research & Innovation: Access to European R&D projects and funding",
        "Easy Visa & Immigration Pathways: Streamlined processes with PR options",
        "Freedom to Travel: Travel freely across 27+ Schengen countries",
        "Excellent Quality of Life: High rankings for healthcare, safety, infrastructure",
        "Flexible Intakes: Multiple admissions intakes (Fall, Spring, Summer)",
      ]}
      gvkAdvantages={[
        "Personalized University & Program Selection",
        "SOP, LOR, Resume & Application Guidance",
        "Visa Counseling & Financial Planning",
        "Scholarship Assistance & Fee Waiver Support",
        "Pre-departure Briefings & Travel Help",
        "Post-Arrival Support & Accommodation Tips",
      ]}
      courseOptions={[
        { level: "Bachelor's (Undergraduate)", duration: "3–4 years", requirements: "12th Grade, IELTS 6.0 (or as per country/institution)" },
        { level: "MS / MSc (Postgraduate)", duration: "1–2 years", requirements: "Bachelor's Degree, IELTS 6.5 (or TOEFL/PTE equivalents)" },
        { level: "MBA / Executive Master's", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years experience, IELTS 6.5+, GMAT (if required)" },
      ]}
      specializations={[
        "Artificial Intelligence & Machine Learning",
        "Data Science & Big Data",
        "Cybersecurity & Information Systems",
        "Software Engineering",
        "Automotive & Mechanical Engineering",
        "Robotics & Embedded Systems",
        "Environmental Engineering & Sustainability",
        "Renewable Energy & Green Tech",
        "International Business & Global Marketing",
        "Financial Engineering & Banking",
        "Healthcare & Public Health",
        "Molecular Biology, Biotechnology & Biomedical Science",
        "Design, Architecture & Urban Studies",
        "Supply Chain & Logistics",
        "Tourism & Hospitality Management",
      ]}
      scholarships={[
        "Erasmus+ Scholarships – Full or partial funding for joint programs",
        "DAAD (Germany) – Highly competitive scholarships for Indian students",
        "French Government & Eiffel Scholarships – For science, business, law students",
        "Swedish Institute Scholarships – Covers full tuition + living costs",
        "Netherlands Orange Tulip & Holland Scholarships – For academic achievers",
        "University-Specific Grants – Merit-based or need-based awards",
        "Industry Sponsorships – From companies seeking skilled graduates",
      ]}
      universities={[
        { name: "ETH Zurich (Switzerland)" },
        { name: "University of Amsterdam (Netherlands)" },
        { name: "Technical University of Munich (Germany)" },
        { name: "Sciences Po (France)" },
        { name: "Charles University – Prague" },
        { name: "Semmelweis University – Budapest" },
        { name: "University of Pécs" },
        { name: "Rīga Stradiņš University" },
      ]}
    />
  );
};

export default EuropePage;
