import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in Australia for Indian Students 2026 | Masters in Australia",
  description: "Pursue your Masters in Australia at top-ranked universities. Post-study work visa up to 4 years, scholarships. Complete admission guide for international students.",
  keywords: [
    "Masters in Australia",
    "study Masters in Australia",
    "Australia universities",
    "student visa Australia",
    "post-study work visa Australia",
    "scholarships for Indian students",
    "cost of living in Australia",
    "international students Australia",
    "English language requirements Australia",
    "part-time jobs Australia",
    "work opportunities Australia",
    "top universities Australia",
    "Indian students Australia",
    "Australia Masters admission",
    "Australian graduate visa",
  ],
  openGraph: {
    title: "Study Masters in Australia for Indian Students | GVK EduTech",
    description: "Study Masters in Australia at top-ranked universities with post-study work visa and scholarships.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Australia for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const AustraliaPage = () => {
  return (
    <CountryPageTemplate
      country="Australia"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142106384.png?updatedAt=1778748733242"
      customHeading={`Study in Australia for Indian Students ${currentYear}`}
      introduction="Australia is a top destination for international students seeking a Master's degree, offering world-class education, vibrant student life, and stunning natural landscapes. With globally recognized universities, industry-driven programs, and pathways to permanent residency, studying in Australia opens doors to a bright future. The country provides excellent post-study work opportunities and a safe, multicultural environment. Australian universities welcome Indian students with various scholarship options."
      whyChoose={[
        "Globally Recognized Degrees: Universities ranked in QS top 100 worldwide",
        "Post-Study Work Visa: Up to 4 years to gain work experience and PR pathway",
        "Work While Studying: Up to 48 hours per fortnight during semester",
        "Research Excellence: Cutting-edge facilities in all major disciplines",
        "Safe & Multicultural: Welcoming environment for international students",
        "Beautiful Lifestyle: Excellent work-life balance with stunning landscapes",
        "Pathway to PR: Clear immigration pathways for skilled graduates",
        "Part-Time Opportunities: Vibrant job market for international students",
      ]}
      gvkAdvantages={[
        "Free personalized counseling",
        "University shortlisting based on profile & budget",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Post-arrival support & accommodation help",
      ]}
      courseOptions={[
        { level: "Postgraduate (MS)", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.0+ (no band below 5.5)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 6.5+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–4 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees (MSc)", cost: "AUD 25,000 – 50,000/year" },
        { category: "Tuition Fees (MBA)", cost: "AUD 40,000 – 70,000/year" },
        { category: "Living Expenses", cost: "AUD 15,000 – 25,000/year" },
        { category: "Health Insurance (OSHC)", cost: "AUD 500 – 1,500/year" },
        { category: "Total (Approximate)", cost: "AUD 40,000 – 80,000/year" },
      ]}
      costOfLiving="The cost of living in Australia for Indian students varies by city. Sydney and Melbourne are the most expensive, with monthly expenses around AUD 2,000-2,500, while cities like Adelaide, Brisbane, or Perth offer more affordable options at AUD 1,500-2,000 per month. This includes accommodation, food, transportation, and miscellaneous expenses. Part-time jobs in Australia pay AUD 20-30/hour, helping manage living costs."
      specializations={[
        "Computer Science, AI & Data Science",
        "Engineering (Civil, Mechanical, Electrical)",
        "Environmental Science & Sustainability",
        "Biotechnology & Life Sciences",
        "Business Analytics, Finance & Management",
        "Public Health & Healthcare",
        "Media, Design & Communication",
        "Cyber Security",
        "Nursing & Healthcare",
        "Hospitality & Tourism",
      ]}
      scholarships={[
        "Australia Awards Scholarships (Full funding for Indian students)",
        "Research Training Program (RTP)",
        "University Merit-based Scholarships",
        "Destination Australia Scholarships",
        "University-specific Grants",
        "External Scholarship Programs",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 55-60% marks from recognized university",
        "English language proficiency: IELTS 6.0+ (no band below 5.5) or equivalent (TOEFL, PTE)",
        "GMAT score (required for MBA and some programs)",
        "Statement of Purpose (SOP) highlighting academic goals",
        "Letters of Recommendation (2-3 from professors or employers)",
        "Valid passport and student visa for Australia",
        "Proof of financial capacity for tuition and living expenses",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from Australian university",
        "English language proficiency test scores (IELTS/TOEFL/PTE)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Academic transcripts and certificates",
        "Proof of funds for Australian student visa",
        "Financial documents (bank statements)",
        "Passport-sized photographs",
        "Australian student visa application form",
      ]}
      admissionProcess={[
        "Research and select Australian universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL/PTE)",
        "Write a compelling Statement of Purpose",
        "Apply to selected Australian universities through their online portal",
        "Wait for admission decision and receive offer letter",
        "Accept the offer and pay deposit to secure admission",
        "Apply for Australian Student Visa (Subclass 500)",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to Australia",
      ]}
      visaProcess="The Australian student visa process for Indian students requires an offer letter from a CRICOS-registered institution. You must prove genuine temporary entrant (GTE) intention and financial capacity. The visa typically takes 4-6 weeks to process. You can work up to 48 hours per fortnight during term and unlimited hours during breaks. Overseas Student Health Cover (OSHC) is mandatory for the entire course duration."
      partTimeWork="International students in Australia can work up to 48 hours per fortnight during semester and unlimited hours during breaks. Part-time jobs in Australia pay AUD 20-30/hour. Popular work opportunities include retail, hospitality, tutoring, and campus jobs. The Australian Graduate Visa (subclass 485) allows you to work 2-4 years after completing your Masters degree, providing excellent post-study work opportunities in Australia."
      careerOpportunities="Australia offers excellent career opportunities for international students. With strong industry connections and the post-study work visa allowing up to 4 years, you can gain valuable experience. Popular sectors include IT, engineering, healthcare, finance, and mining. Average starting salaries range from AUD 55,000-80,000 per year. The pathway to permanent residency through skilled migration is also attractive for Indian students."
      universities={[
        { name: "University of Melbourne", website: "https://unimelb.edu.au" },
        { name: "Australian National University (ANU)", website: "https://anu.edu.au" },
        { name: "University of Sydney", website: "https://sydney.edu.au" },
        { name: "University of New South Wales (UNSW)", website: "https://unsw.edu.au" },
        { name: "University of Queensland", website: "https://uq.edu.au" },
        { name: "Monash University", website: "https://monash.edu" },
        { name: "University of Adelaide", website: "https://adelaide.edu.au" },
        { name: "University of Technology Sydney (UTS)", website: "https://uts.edu.au" },
      ]}
      programStructure={{
        duration: "1-2 Years (varies by program)",
        medium: "English",
        details: "Australian Master's programs include coursework and research components. Post-study work visa up to 4 years available.",
      }}
      faqs={[
        { question: "Can Indian students study in Australia without IELTS?", answer: "Yes, some Australian universities accept alternative English language tests like TOEFL, PTE Academic, or Duolingo. Additionally, if you have studied in English-medium institutions, you may be exempt from IELTS requirements. However, most universities still prefer IELTS scores for Indian students." },
        { question: "What is the cost of studying in Australia?", answer: "The cost of studying in Australia for Indian students includes tuition fees (AUD 25,000-50,000/year) and living expenses (AUD 15,000-25,000/year). Total cost ranges from AUD 40,000-80,000 annually. MBA programs cost more (AUD 40,000-70,000/year). Scholarships for Indian students can reduce this burden." },
        { question: "Can students work while studying in Australia?", answer: "Yes, international students on Australian student visa can work up to 48 hours per fortnight during semester and unlimited hours during holidays. Part-time jobs in Australia pay AUD 20-30/hour, helping manage living costs while studying." },
        { question: "How long is a Masters degree in Australia?", answer: "Master's programs in Australia typically take 1-2 years to complete. Coursework Masters usually take 1-2 years, while research-based Masters may take 2 years. This varies by program and university." },
        { question: "What is the Australian Graduate Visa?", answer: "The Australian Graduate Visa (subclass 485) allows international students to work in Australia for 2-4 years after completing their Master's degree. The duration depends on your qualification - Master's by coursework gets 2 years, Master's by research gets 3-4 years." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in Australia include Australia Awards Scholarships, Research Training Program (RTP), university merit awards, and Destination Australia Scholarships. Many Australian universities offer financial aid for international students. GVK Edutech can help you find and apply for relevant scholarships." },
      ]}
    />
  );
};

export default AustraliaPage;