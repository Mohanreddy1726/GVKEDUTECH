import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in Europe 2026 | Affordable Education",
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
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142139625.png?updatedAt=1778748734818"
      introduction="Europe offers incredible diversity for international students seeking a Master's degree. From France's prestigious business schools to Switzerland's cutting-edge research institutions, Netherlands' tech-savvy universities to Sweden's innovative programs, Europe has something for every aspirant. With affordable tuition in many countries and access to the Schengen area, studying in Europe provides exceptional value and global career opportunities."
      whyChoose={[
        "Diverse Destinations: France, Netherlands, Sweden, Ireland, Switzerland, and more",
        "Affordable Education: Many countries offer low or no tuition fees",
        "English-Taught Programs: Thousands of programs available across Europe",
        "Post-Study Work Visas: 1–2 years work permits in Ireland, Netherlands, Sweden",
        "Schengen Access: Travel freely across 27 European countries",
        "World-Class Research: Access to EU-funded research projects and innovation hubs",
        "Cultural Experience: Immerse in rich history, art, and diverse cultures",
        "Central Location: Gateway to explore multiple countries during studies",
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
        { level: "Master's (MSc/MA)", duration: "1–2 years", requirements: "Bachelor's Degree, IELTS 5.5+ (or TOEFL/PTE)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years experience, IELTS 5.5+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–5 years", requirements: "Master's degree, research proposal, IELTS 6.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees", cost: "€0 – 20,000/year (varies by country)" },
        { category: "Living Expenses", cost: "€8,000 – 15,000/year" },
        { category: "Health Insurance", cost: "€500 – 1,500/year" },
        { category: "Total (Approximate)", cost: "€10,000 – 35,000/year" },
      ]}
      specializations={[
        "Artificial Intelligence & Machine Learning",
        "Data Science & Business Analytics",
        "Cybersecurity & Information Systems",
        "International Business & Marketing",
        "Finance & Economics",
        "Sustainable Energy & Environmental Engineering",
        "Biotechnology & Life Sciences",
        "Design, Architecture & Urban Planning",
        "European Studies & International Relations",
        " Tourism & Hospitality Management",
      ]}
      scholarships={[
        "Erasmus+ Scholarships",
        "French Government & Eiffel Scholarships",
        "Swedish Institute Scholarships",
        "Netherlands Orange Tulip & Holland Scholarships",
        "Ireland Government Scholarships",
        "University-Specific Merit Awards",
        "Industry Sponsorships",
      ]}
      universities={[
        { name: "ETH Zurich (Switzerland)", website: "https://ethz.ch" },
        { name: "University of Amsterdam (Netherlands)", website: "https://uva.nl" },
        { name: "Sciences Po (France)", website: "https://sciencespo.fr" },
        { name: "Uppsala University (Sweden)", website: "https://uu.se" },
        { name: "Trinity College Dublin (Ireland)", website: "https://tcd.ie" },
        { name: "Charles University (Czech Republic)", website: "https://cuni.cz" },
        { name: "University of Pécs (Hungary)", website: "https://pte.hu" },
        { name: "University of Bologna (Italy)", website: "https://unibo.it" },
      ]}
      faqs={[
        { question: "Which countries offer affordable Masters in Europe?", answer: "Countries like Germany, Norway, Austria, and Czech Republic offer low or no tuition fees for international students." },
        { question: "Can I travel across Europe with a student visa?", answer: "Yes, the Schengen area allows free movement across 27 European countries with a valid student residence permit." },
        { question: "What is the cost of Masters in Europe?", answer: "Tuition fees range from €0-20,000/year. Total cost including living expenses is approximately €10,000-35,000/year." },
        { question: "Can I work after Masters in Europe?", answer: "Many countries offer 1-2 years post-study work permits. Ireland, Netherlands, and Sweden are particularly welcoming." },
      ]}
    />
  );
};

export default EuropePage;
