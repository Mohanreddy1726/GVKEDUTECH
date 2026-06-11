import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in Europe for Indian Students 2026 | Masters in Europe",
  description: "Pursue your Masters in Europe at top-ranked universities. Affordable fees, English-taught programs, Schengen benefits. Complete admission guide for international students.",
  keywords: [
    "Masters in Europe",
    "study Masters in Europe",
    "Europe universities",
    "student visa Europe",
    "Schengen visa",
    "scholarships for Indian students",
    "cost of living in Europe",
    "international students Europe",
    "English language requirements Europe",
    "part-time jobs Europe",
    "work opportunities Europe",
    "top universities Europe",
    "Indian students Europe",
    "Europe Masters admission",
    "post-study work visa Europe",
  ],
  openGraph: {
    title: "Study Masters in Europe for Indian Students | GVK EduTech",
    description: "Study Masters in Europe at top-ranked universities with affordable fees and English-taught programs.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Europe for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const EuropePage = () => {
  return (
    <CountryPageTemplate
      country="Europe"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142139625.png?updatedAt=1778748734818"
      customHeading={`Study in Europe for Indian Students ${currentYear}`}
      introduction="Europe offers incredible diversity for international students seeking a Master's degree. From France's prestigious business schools to Switzerland's cutting-edge research institutions, Netherlands' tech-savvy universities to Sweden's innovative programs, Europe has something for every aspirant. With affordable tuition in many countries and access to the Schengen area, studying in Europe provides exceptional value and global career opportunities. European universities welcome Indian students with various scholarship options."
      whyChoose={[
        "Diverse Destinations: France, Netherlands, Sweden, Ireland, Switzerland, and more",
        "Affordable Education: Many countries offer low or no tuition fees",
        "English-Taught Programs: Thousands of programs available across Europe",
        "Post-Study Work Visas: 1–2 years work permits in Ireland, Netherlands, Sweden",
        "Schengen Access: Travel freely across 27 European countries",
        "World-Class Research: Access to EU-funded research projects and innovation hubs",
        "Cultural Experience: Immerse in rich history, art, and diverse cultures",
        "Central Location: Gateway to explore multiple countries during studies",
        "Part-Time Work: Work options vary by country (typically 20 hours/week)",
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
      costOfLiving="The cost of living in Europe for Indian students varies significantly by country and city. Countries like Switzerland, Norway, and Denmark are most expensive with monthly expenses around €1,500-2,000, while countries like Poland, Hungary, and Czech Republic offer more affordable options at €600-1,000 per month. Western European countries like France, Netherlands, and Germany fall in between at €1,000-1,500 per month."
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
        "Tourism & Hospitality Management",
        "Aerospace Engineering",
        "Marine Engineering",
      ]}
      scholarships={[
        "Erasmus+ Scholarships (Full funding for EU programs)",
        "French Government & Eiffel Scholarships",
        "Swedish Institute Scholarships",
        "Netherlands Orange Tulip & Holland Scholarships",
        "Ireland Government Scholarships",
        "University-Specific Merit Awards",
        "Switzerland Excellence Scholarships",
        "Polish Government Scholarships",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 55-60% marks from recognized university",
        "English language proficiency: IELTS 5.5+ or TOEFL/PTE equivalent (varies by country)",
        "GMAT/GRE score (required for MBA and some programs)",
        "Statement of Purpose (SOP) highlighting academic goals",
        "Letters of Recommendation (2-3 from professors or employers)",
        "Valid passport and student visa for respective European country",
        "Proof of financial capacity for tuition and living expenses",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from European university",
        "English language proficiency test scores (IELTS/TOEFL/PTE)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Academic transcripts and certificates",
        "Proof of funds for student visa",
        "Financial documents (bank statements)",
        "Passport-sized photographs",
        "Student visa application form (Schengen or national)",
      ]}
      admissionProcess={[
        "Research and select European countries and universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL/PTE)",
        "Take GMAT/GRE if required for your program",
        "Write a compelling Statement of Purpose",
        "Apply to selected European universities through their online portal or uni-assist",
        "Wait for admission decision and receive offer letter",
        "Accept the offer and pay deposit to secure admission",
        "Apply for student visa (Schengen or national)",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to Europe",
      ]}
      visaProcess="The European student visa process varies by country. For Schengen countries, you apply for a national student visa after acceptance. You must prove financial capacity and genuine study intentions. Processing times vary by country (4-12 weeks). After arrival, you need to register with local authorities and obtain a residence permit. The Schengen area allows free travel across 27 European countries."
      partTimeWork="International students in Europe can typically work 20 hours/week during term (varies by country). Part-time jobs pay €8-15/hour in Western Europe and €5-10/hour in Eastern Europe. Popular work opportunities include retail, hospitality, tutoring, and campus jobs. Post-study work visas of 1-2 years are available in Ireland, Netherlands, Sweden, and other countries."
      careerOpportunities="Europe offers excellent career opportunities for international students. With strong industry connections across various sectors, you can build a successful career. Popular sectors include IT, finance, engineering, healthcare, and research. Average starting salaries range from €35,000-60,000 per year in Western Europe. Post-study work visas in countries like Ireland, Netherlands, and Sweden allow you to work 1-2 years after graduation."
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
      programStructure={{
        duration: "1-2 Years (varies by country and program)",
        medium: "English (some programs require local language)",
        details: "European Master's programs offer diverse options across 27 Schengen countries. Tuition-free in many countries.",
      }}
      faqs={[
        { question: "Can Indian students study in Europe without IELTS?", answer: "Some European universities accept alternative English language tests like TOEFL, PTE Academic, or Duolingo. Some countries also offer programs taught in English without strict IELTS requirements. However, requirements vary by university and country. Check specific program requirements." },
        { question: "What is the cost of studying in Europe?", answer: "The cost of studying in Europe for Indian students varies significantly by country. Tuition ranges from €0 (in Germany, Norway, Austria) to €20,000/year. Living expenses range from €8,000-15,000/year. Total cost is approximately €10,000-35,000 annually. Eastern European countries are more affordable." },
        { question: "Can students work while studying in Europe?", answer: "Yes, international students in Europe can typically work 20 hours/week during term (varies by country). Part-time jobs in Europe pay €8-15/hour in Western Europe and €5-10/hour in Eastern Europe. This helps manage living expenses while studying." },
        { question: "How long is a Masters degree in Europe?", answer: "Master's programs in Europe typically take 1-2 years to complete. Most programs are 1-2 years (2-4 semesters). This varies by program, country, and university. Some intensive programs can be completed in 1 year." },
        { question: "Can I travel across Europe with a student visa?", answer: "Yes, the Schengen area allows free movement across 27 European countries with a valid student residence permit. This includes countries like France, Germany, Netherlands, Sweden, Italy, Spain, and many more. You can explore multiple countries during your studies." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in Europe include Erasmus+ Scholarships (full funding), French Government & Eiffel Scholarships, Swedish Institute Scholarships, Netherlands Orange Tulip & Holland Scholarships, and university-specific merit awards. Many European countries offer financial aid. GVK Edutech can help you find and apply." },
      ]}
      exploreCountries={[
        { name: "UK", link: "/masters/uk", flag: "🇬🇧" },
        { name: "USA", link: "/masters/usa", flag: "🇺🇸" },
        { name: "Australia", link: "/masters/australia", flag: "🇦🇺" },
        { name: "Canada", link: "/masters/canada", flag: "🇨🇦" },
        { name: "Germany", link: "/masters/germany", flag: "🇩🇪" },
        { name: "Ireland", link: "/masters/ireland", flag: "🇮🇪" },
      ]}
    />
  );
};

export default EuropePage;