import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in UK for Indian Students 2026 | Masters in UK",
  description: "Pursue your Masters in UK at top UK universities. 1-year programs, graduate route visa, scholarships for Indian students. Complete admission guide for international students.",
  keywords: [
    "Masters in UK",
    "study Masters in UK",
    "UK universities",
    "student visa UK",
    "graduate route visa",
    "scholarships for Indian students",
    "cost of living in UK",
    "international students UK",
    "English language requirements UK",
    "part-time jobs in UK",
    "work opportunities UK",
    "top universities UK",
    "Indian students UK",
    "UK Masters admission",
    "post-study work visa UK",
  ],
  openGraph: {
    title: "Study Masters in UK for Indian Students | GVK EduTech",
    description: "Study Masters in UK at prestigious universities with graduate route visa and scholarships for Indian students.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in UK for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const UKPage = () => {
  return (
    <CountryPageTemplate
      country="United Kingdom"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_112850461.png?updatedAt=1778824739608"
      customHeading={`Study in UK for Indian Students ${currentYear}`}
      introduction="The United Kingdom is home to some of the world's oldest and most prestigious universities, offering Master's programs that are globally recognized and highly valued by employers. With the iconic 1-year Master's format, you can earn a world-class degree in less time and at a lower cost than many other countries. The Graduate Route visa allows you to work in the UK for up to 2 years post-graduation. UK universities welcome Indian students with open arms, offering diverse programs across top UK universities."
      whyChoose={[
        "World-Class UK Universities: Oxford, Cambridge, Imperial, and 150+ QS-ranked institutions",
        "1-Year Master's Programs: Save time and money with intensive, comprehensive courses",
        "Graduate Route Visa: Work up to 2 years in the UK after graduation",
        "Global Recognition: UK degrees are respected by employers worldwide",
        "Research Excellence: Access to pioneering research facilities and funding",
        "Cultural Hub: Experience British heritage while studying in a global city",
        "Strong Alumni Network: Connect with influential professionals across industries",
        "Part-Time Work Opportunities: Students can work up to 20 hours/week during studies",
      ]}
      gvkAdvantages={[
        "250+ University Partners",
        "Free personalized counseling",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Post-arrival support",
      ]}
      courseOptions={[
        { level: "Master's (MSc/MA)", duration: "1 year", requirements: "Bachelor's degree, IELTS 5.5+ (no band below 6.0) or equivalent" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 6.5+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–4 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees (MSc/MA)", cost: "£12,000 – 35,000/year" },
        { category: "Tuition Fees (MBA)", cost: "£20,000 – 50,000/year" },
        { category: "Living Expenses", cost: "£12,000 – 18,000/year" },
        { category: "Health Insurance (IHS)", cost: "£470 – 1,000/year" },
        { category: "Total (Approximate)", cost: "£25,000 – 55,000/year" },
      ]}
      costOfLiving="The cost of living in UK for Indian students varies by city. London is the most expensive, with monthly expenses around £1,500-2,000, while other cities like Manchester, Birmingham, or Edinburgh offer more affordable options at £1,000-1,500 per month. This includes accommodation, food, transportation, and miscellaneous expenses. Part-time jobs in UK can help supplement your income."
      specializations={[
        "Computer Science & Artificial Intelligence",
        "Data Science & Business Analytics",
        "Finance, Accounting & Economics",
        "Engineering (Mechanical, Electrical, Civil)",
        "Marketing & International Business",
        "Public Health & Healthcare Management",
        "Environmental Science & Sustainability",
        "Education & Teaching",
        "Law and Legal Studies",
        "Architecture and Design",
      ]}
      scholarships={[
        "Chevening Scholarships (Full funding for outstanding Indian students)",
        "Commonwealth Scholarships (For master's programs)",
        "GREAT Scholarships (UK government scholarships)",
        "University-Specific Merit Awards (Up to 50% tuition waiver)",
        "Research Council Funding (For PhD and research programs)",
        "Tata Scholarships (For Indian students at UK universities)",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 55% marks from recognized university",
        "English language proficiency: IELTS 6.0-6.5 (no band below 5.5-6.0) or equivalent (TOEFL, PTE)",
        "GMAT/GRE score (required for MBA and some programs at top UK universities)",
        "Statement of Purpose (SOP) highlighting academic goals",
        "Letters of Recommendation (2-3 from professors or employers)",
        "Valid passport and student visa for UK",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from UK university",
        "English language proficiency test scores (IELTS/TOEFL/PTE)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Academic transcripts and certificates",
        "Proof of funds for UK student visa",
        "Financial documents (bank statements)",
        "Passport-sized photographs",
        "UK student visa application form",
      ]}
      admissionProcess={[
        "Research and select UK universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL/PTE)",
        "Write a compelling Statement of Purpose",
        "Apply to selected UK universities through their online portal",
        "Wait for admission decision and receive offer letter",
        "Accept the offer and pay deposit to secure admission",
        "Apply for UK Student Visa (Tier 4)",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to UK",
      ]}
      visaProcess="The UK student visa process for Indian students involves several steps. First, receive an offer letter from a licensed Tier 4 sponsor. Then, prove English language proficiency and financial capacity. The visa application requires showing funds for tuition and living expenses (approximately £1,334/month for London). The Immigration Health Surcharge (IHS) is mandatory. Processing time is typically 3 weeks. After arrival, you can work up to 20 hours/week during term and full-time during holidays."
      partTimeWork="International students in UK can work up to 20 hours per week during term time and full-time during holidays. Part-time jobs in UK pay approximately £10-15 per hour. Popular work opportunities include retail, hospitality, tutoring, and campus jobs. The Graduate Route visa allows you to work full-time for 2 years after completing your Masters degree. This post-study work visa UK enables you to gain valuable work experience in UK."
      careerOpportunities="The UK offers excellent career opportunities for international students. Top UK universities have strong industry connections, and the Graduate Route visa allows you to work in UK for up to 2 years post-graduation. Popular sectors for Indian students include IT, finance, healthcare, engineering, and consulting. Average starting salaries range from £25,000-40,000 per year, with opportunities for career growth in London and other major UK cities."
      programStructure={{
        duration: "1 Year (Masters by Coursework), 2 Years (Masters by Research)",
        medium: "English",
        details: "UK Master's programs are intensive and globally recognized. Research programs require a dissertation/thesis.",
      }}
      universities={[
        { name: "University of Oxford", website: "https://ox.ac.uk", logo: "https://www.ox.ac.uk/themes/custom/numiko/dist/oxford-logo-DzIWfeXH.svg" },
        { name: "University of Cambridge", website: "https://cam.ac.uk", logo: "https://www.cam.ac.uk/sites/all/themes/fresh/images/interface/cambridge_university2.svg" },
        { name: "Imperial College London", website: "https://imperial.ac.uk" },
        { name: "University College London (UCL)", website: "https://ucl.ac.uk" },
        { name: "London School of Economics (LSE)", website: "https://lse.ac.uk" },
        { name: "University of Edinburgh", website: "https://www.ed.ac.uk", logo: "https://www.ed.ac.uk/themes/upstream/wpp_theme/images/logo.png" },
        { name: "University of Manchester", website: "https://manchester.ac.uk" },
        { name: "King's College London", website: "https://kcl.ac.uk" },
      ]}
      faqs={[
        { question: "Can Indian students study in UK without IELTS?", answer: "Yes, some UK universities accept alternative English language tests like TOEFL, PTE Academic, or Duolingo. Additionally, if you have studied in English-medium institutions, you may be exempt from IELTS requirements. However, most top UK universities still prefer IELTS scores for Indian students." },
        { question: "What is the cost of studying in UK?", answer: "The cost of studying in UK for Indian students includes tuition fees (£12,000-35,000/year) and living expenses (£12,000-18,000/year). Total cost ranges from £25,000-55,000 annually. Scholarships for Indian students can significantly reduce this burden. MBA programs cost more (£20,000-50,000/year)." },
        { question: "Can students work while studying in UK?", answer: "Yes, international students on a UK student visa can work up to 20 hours per week during term time and full-time during holidays. Part-time jobs in UK pay £10-15/hour. This helps manage living costs while studying in UK." },
        { question: "How long is a Masters degree in UK?", answer: "Most Master's programs in UK are 1 year long (12 months), making it a quick path to a world-class degree. Some specialized programs like MBA may take 1-2 years. This is shorter than programs in other countries, saving both time and money." },
        { question: "What is the UK Graduate Route Visa?", answer: "The UK Graduate Route Visa (formerly PSW - Post Study Work Visa) allows international students to work in UK for 2 years after completing their Master's degree. You can work at any skill level and switch to a skilled worker visa if eligible. This is a great opportunity for Indian students to gain work experience in UK." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in UK include Chevening Scholarships, Commonwealth Scholarships, GREAT Scholarships, and university-specific merit awards. Many UK universities offer financial aid for Indian students. GVK Edutech can help you find and apply for relevant scholarships." },
      ]}
    />
  );
};

export default UKPage;
