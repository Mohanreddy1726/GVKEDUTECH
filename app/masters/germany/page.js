import { CountryPageTemplate } from "@/components/CountryPageTemplate";

const GermanyPage = () => {
  return (
    <CountryPageTemplate
      country="Germany"
      programType="Masters"
      heroImage="https://gvkedutech.com/site/assets/images/countries/GermanyMASTERS.jpg"
      introduction="Germany is a global hub for higher education, known for its academic excellence, cutting-edge research, and cultural richness. Whether you're looking to study in Germany's innovation-driven institutes, the tech-savvy universities of the Netherlands and Sweden, Germany offers something for every aspiring student. And with GVK Edutech as your trusted study abroad partner, you can navigate your journey confidently—from application to arrival."
      whyChoose={[
        "Top-Ranked Universities: Over 400 universities in the QS World University Rankings",
        "English-Taught Programs: Thousands of MS programs available in English",
        "Affordable or Free Tuition: Germany offers zero or low tuition fees for international students",
        "Post-Study Work Visas: 18 months post-study work opportunity",
        "Multicultural Exposure: Highly inclusive, international environment",
        "World-Class Research & Innovation: Access to German R&D projects and funding",
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
        { level: "Bachelor's (Undergraduate)", duration: "3–4 years", requirements: "12th Grade, IELTS 6.0 (or as per institution)" },
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
        "DAAD Scholarships – Highly competitive scholarships for Indian students",
        "Erasmus+ Scholarships – Full or partial funding for joint programs",
        "Deutschland Stipendium – National merit-based scholarship",
        "University-Specific Grants – Merit-based or need-based awards",
        "Industry Sponsorships – From companies seeking skilled graduates in STEM",
      ]}
      universities={[
        { name: "Technical University of Munich" },
        { name: "LMU Munich" },
        { name: "Heidelberg University" },
        { name: "RWTH Aachen University" },
        { name: "Humboldt University of Berlin" },
        { name: "University of Freiburg" },
        { name: "University of Göttingen" },
        { name: "Karlsruhe Institute of Technology" },
      ]}
    />
  );
};

export default GermanyPage;
