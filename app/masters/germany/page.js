import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in Germany for Indian Students 2026 | Masters in Germany",
  description: "Pursue your Masters in Germany at world-class universities. Tuition-free education, English-taught programs. Complete admission guide for international students.",
  keywords: [
    "Masters in Germany",
    "study Masters in Germany",
    "Germany universities",
    "student visa Germany",
    "tuition-free Germany",
    "scholarships for Indian students",
    "cost of living in Germany",
    "international students Germany",
    "English language requirements Germany",
    "part-time jobs Germany",
    "work opportunities Germany",
    "top universities Germany",
    "Indian students Germany",
    "Germany Masters admission",
    "post-study work visa Germany",
  ],
  openGraph: {
    title: "Study Masters in Germany for Indian Students | GVK EduTech",
    description: "Study Masters in Germany at world-class universities with tuition-free education and scholarships.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Germany for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const GermanyPage = () => {
  return (
    <CountryPageTemplate
      country="Germany"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142156365.png?updatedAt=1778748734891"
      customHeading={`Study in Germany for Indian Students ${currentYear}`}
      introduction="Germany is a global leader in higher education, known for its academic excellence, cutting-edge research, and tuition-free or low-cost programs at public universities. With a strong economy and innovation ecosystem, Germany offers international students excellent post-study work opportunities and access to the entire Schengen area. Study at world-renowned technical universities and benefit from Germany's engineering and technology expertise. German universities welcome Indian students with various scholarship options."
      whyChoose={[
        "Tuition-Free Education: Most public universities charge no tuition fees",
        "Top-Ranked Universities: Technical University of Munich, Heidelberg, RWTH Aachen in QS rankings",
        "English-Taught Programs: Thousands of Master's programs available in English",
        "Post-Study Work Visa: 18 months to find a job after graduation",
        "Research Excellence: Access to world-class R&D facilities and funding",
        "Strong Economy: Gateway to Europe with leading multinational companies",
        "Schengen Access: Travel freely across 27 European countries",
        "High Quality of Life: Excellent healthcare, safety, and infrastructure",
        "Part-Time Work: Students can work 120 full days or 240 half days per year",
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
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years experience, IELTS 6.5+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–5 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees", cost: "€0 – 3,000/semester (public universities)" },
        { category: "Living Expenses", cost: "€10,000 – 12,000/year" },
        { category: "Semester Contribution", cost: "€150 – 350/semester" },
        { category: "Total (Approximate)", cost: "€10,000 – 15,000/year" },
      ]}
      costOfLiving="The cost of living in Germany for Indian students is relatively affordable. Major cities like Munich, Frankfurt, and Berlin are more expensive with monthly expenses around €1,000-1,200, while cities like Leipzig, Dresden, or Hanover offer more affordable options at €800-1,000 per month. This includes accommodation, food, transportation, and miscellaneous expenses. Part-time jobs in Germany pay €10-15/hour."
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
        "Electrical Engineering",
        "Chemical Engineering",
      ]}
      scholarships={[
        "DAAD Scholarships (Full funding for Indian students)",
        "Deutschland Stipendium",
        "University-Specific Grants",
        "Erasmus+ Scholarships",
        "Industry Sponsorships",
        " Konrad Adenauer Stiftung Scholarships",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 55-60% marks from recognized university",
        "English language proficiency: IELTS 5.5+ or TOEFL/PTE equivalent",
        "German language proficiency (for some programs, not required for English-taught)",
        "Statement of Purpose (SOP) highlighting academic goals",
        "Letters of Recommendation (2 from professors)",
        "Valid passport and student visa for Germany",
        "Proof of financial capacity (blocked account ~€11,904/year)",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from German university",
        "English language proficiency test scores (IELTS/TOEFL/PTE)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2)",
        "Academic transcripts and certificates",
        "Proof of funds (blocked account or financial guarantee)",
        "German student visa application form",
        "Passport-sized photographs",
        "Health insurance proof",
      ]}
      admissionProcess={[
        "Research and select German universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL/PTE)",
        "Write a compelling Statement of Purpose",
        "Apply to selected German universities through uni-assist or direct application",
        "Wait for admission decision and receive offer letter",
        "Open blocked account and prove financial capacity",
        "Apply for German Student Visa",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to Germany",
      ]}
      visaProcess="The German student visa process for Indian students requires an acceptance letter from a German university. You must prove financial capacity through a blocked account (~€11,904/year). The visa interview assesses your study intentions. Processing takes 4-8 weeks. After arrival, you need to register at the local foreigners' office (Ausländerbehörde) and obtain a residence permit."
      partTimeWork="International students in Germany can work 120 full days or 240 half days per year. Part-time jobs in Germany pay €10-15/hour. Popular work opportunities include student assistantships, tutor

ing, retail, and hospitality. After graduation, you can stay for 18 months to find a job (Job Seeker Visa). Once employed, you can apply for an EU Blue Card for highly skilled workers."
      careerOpportunities="Germany offers excellent career opportunities for international students. With a strong economy and major multinational companies, you can build a successful career in engineering, IT, finance, or research. Average starting salaries range from €45,000-60,000 per year. The 18-month post-study work visa allows you to find a job in your field. The EU Blue Card pathway makes it easier to stay long-term for Indian students."
      universities={[
        { name: "Technical University of Munich", website: "https://tum.de" },
        { name: "LMU Munich", website: "https://lmu.de" },
        { name: "Heidelberg University", website: "https://uni-heidelberg.de" },
        { name: "RWTH Aachen University", website: "https://rwth-aachen.de" },
        { name: "Humboldt University of Berlin", website: "https://hu-berlin.de" },
        { name: "University of Freiburg", website: "https://uni-freiburg.de" },
        { name: "University of Göttingen", website: "https://uni-goettingen.de" },
        { name: "Karlsruhe Institute of Technology", website: "https://kit.edu" },
      ]}
      programStructure={{
        duration: "1-2 Years (varies by program)",
        medium: "English (German needed for some programs)",
        details: "German universities offer tuition-free education at public institutions. Many English-taught programs available.",
      }}
      faqs={[
        { question: "Can Indian students study in Germany without IELTS?", answer: "Yes, some German universities accept alternative English language tests like TOEFL, PTE Academic. Some universities also accept Duolingo. However, many programs still prefer IELTS. For German-taught programs, you may need TestDaF or Goethe certificate instead of IELTS." },
        { question: "What is the cost of studying in Germany?", answer: "The cost of studying in Germany for Indian students is very affordable. Most public universities charge no tuition fees (€0-3,000/semester). Living expenses are €10,000-12,000/year. Total cost is approximately €10,000-15,000 annually, making Germany very cost-effective." },
        { question: "Can students work while studying in Germany?", answer: "Yes, international students in Germany can work 120 full days or 240 half days per year. Part-time jobs in Germany pay €10-15/hour. Student assistantships and tutoring are popular options. This helps manage living expenses while studying." },
        { question: "How long is a Masters degree in Germany?", answer: "Master's programs in Germany typically take 1-2 years to complete. Most Master's programs are 2 years (4 semesters). This varies by program and university. Some intensive programs can be completed in 1 year." },
        { question: "What is the post-study work visa in Germany?", answer: "Germany offers an 18-month post-study work visa (Job Seeker Visa) after completing your Master's degree. You can stay in Germany to look for a job. Once employed, you can apply for an EU Blue Card or regular work permit." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in Germany include DAAD Scholarships (full funding), Deutschland Stipendium, Erasmus+ Scholarships, and university-specific grants. Many German universities offer financial aid. GVK Edutech can help you find and apply for relevant scholarships." },
      ]}
      exploreCountries={[
        { name: "UK", link: "/masters/uk", flag: "🇬🇧" },
        { name: "USA", link: "/masters/usa", flag: "🇺🇸" },
        { name: "Australia", link: "/masters/australia", flag: "🇦🇺" },
        { name: "Canada", link: "/masters/canada", flag: "🇨🇦" },
        { name: "Ireland", link: "/masters/ireland", flag: "🇮🇪" },
        { name: "New Zealand", link: "/masters/newzealand", flag: "🇳🇿" },
      ]}
    />
  );
};

export default GermanyPage;