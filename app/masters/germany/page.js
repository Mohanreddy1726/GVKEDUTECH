import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in Germany 2026 - Top Universities | GVK EduTech",
  description: "Pursue your Masters degree in Germany at world-class universities. Academic excellence, cutting-edge research, often tuition-free. Apply for Germany Masters now.",
  keywords: ["Masters in Germany", "study Masters Germany", "Germany university admission", "Masters degree Germany", "free education Germany"],
  openGraph: {
    title: "Study Masters in Germany | GVK EduTech",
    description: "Study Masters in Germany at world-class universities with research excellence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Germany" }],
  },
};

const GermanyPage = () => {
  return (
    <CountryPageTemplate
      country="Germany"
      programType="Masters"
      heroImage="https://gvkedutech.com/site/assets/images/countries/GermanyMASTERS.jpg"
      introduction="Germany is a global leader in higher education, known for its academic excellence, cutting-edge research, andtuition-free or low-cost programs at public universities. With a strong economy and innovation ecosystem, Germany offers international students excellent post-study work opportunities and access to the entire Schengen area. Study at world-renowned technical universities and benefit from Germany's engineering and technology expertise."
      whyChoose={[
        "Tuition-Free Education: Most public universities charge no tuition fees",
        "Top-Ranked Universities: Technical University of Munich, Heidelberg, RWTH Aachen in QS rankings",
        "English-Taught Programs: Thousands of Master's programs available in English",
        "Post-Study Work Visa: 18 months to find a job after graduation",
        "Research Excellence: Access to world-class R&D facilities and funding",
        "Strong Economy: Gateway to Europe with leading multinational companies",
        "Schengen Access: Travel freely across 27 European countries",
        "High Quality of Life: Excellent healthcare, safety, and infrastructure",
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
        { level: "Master's (MSc/MA)", duration: "1–2 years", requirements: "Bachelor's Degree, IELTS 6.5+ (or TOEFL/PTE)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years experience, IELTS 6.5+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–5 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees", cost: "€0 – 3,000/semester (public universities)" },
        { category: "Living Expenses", cost: "€10,000 – 12,000/year" },
        { category: "Semester Contribution", cost: "€150 – 350/semester" },
        { category: "Total (Approximate)", cost: "€10,000 – 15,000/year" },
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
        "International Business & Marketing",
        "Finance & Banking",
      ]}
      scholarships={[
        "DAAD Scholarships",
        "Deutschland Stipendium",
        "University-Specific Grants",
        "Erasmus+ Scholarships",
        "Industry Sponsorships",
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
