import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in New Zealand for Indian Students 2026 | Masters in New Zealand",
  description: "Pursue your Masters in New Zealand at world-class institutions. Post-study work visa up to 3 years, safe environment. Complete admission guide for international students.",
  keywords: [
    "Masters in New Zealand",
    "study Masters in New Zealand",
    "New Zealand universities",
    "student visa New Zealand",
    "post-study work visa New Zealand",
    "scholarships for Indian students",
    "cost of living in New Zealand",
    "international students New Zealand",
    "English language requirements New Zealand",
    "part-time jobs New Zealand",
    "work opportunities New Zealand",
    "top universities New Zealand",
    "Indian students New Zealand",
    "New Zealand Masters admission",
    "New Zealand graduate visa",
  ],
  openGraph: {
    title: "Study Masters in New Zealand for Indian Students | GVK EduTech",
    description: "Study Masters in New Zealand with post-study work visa and safe environment for Indian students.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in New Zealand for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const NewZealandPage = () => {
  return (
    <CountryPageTemplate
      country="New Zealand"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_113045327.png?updatedAt=1778824851891"
      customHeading={`Study in New Zealand for Indian Students ${currentYear}`}
      introduction="New Zealand offers a unique blend of world-class education and an unbeatable lifestyle. With its stunning natural beauty, safe environment, and welcoming people, New Zealand is an ideal destination for Indian students. The country's post-study work visa allows you to work for up to 3 years, providing excellent opportunities to gain international experience. New Zealand universities provide diverse programs with excellent research opportunities."
      whyChoose={[
        "Post-Study Work Visa: Work up to 3 years after graduation",
        "Safe Destination: One of the safest countries in the world",
        "World-Class Education: Universities like Auckland, Otago ranked globally",
        "Work While Study: Part-time work allowed (20 hours/week)",
        "Pathway to Residency: Clear pathways to permanent residency",
        "Natural Beauty: Experience stunning landscapes and outdoor activities",
        "Quality of Life: High standard of living with affordable costs",
        "English-Speaking: No language barrier for Indian students",
      ]}
      gvkAdvantages={[
        "100+ University Partners",
        "Free personalized counseling",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Post-arrival support",
      ]}
      courseOptions={[
        { level: "Master's (MSc/MA)", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.5+ (no band below 6.0)" },
        { level: "MBA", duration: "1–1.5 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 6.5+" },
        { level: "Research Programs (PhD)", duration: "3–4 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees (MSc)", cost: "NZD 25,000 – 40,000/year" },
        { category: "Tuition Fees (MBA)", cost: "NZD 35,000 – 55,000/year" },
        { category: "Living Expenses", cost: "NZD 12,000 – 18,000/year" },
        { category: "Health Insurance", cost: "NZD 500 – 800/year" },
        { category: "Total (Approximate)", cost: "NZD 37,000 – 58,000/year" },
      ]}
      costOfLiving="The cost of living in New Zealand for Indian students is relatively affordable. Auckland is the most expensive, with monthly expenses around NZD 1,800-2,200, while cities like Wellington, Christchurch, or Dunedin offer more affordable options at NZD 1,400-1,800 per month. This includes accommodation, food, transportation, and miscellaneous expenses. Part-time jobs in New Zealand pay NZD 18-25/hour."
      specializations={[
        "Computer Science & Information Technology",
        "Data Science & Analytics",
        "Business & Management",
        "Engineering (All Specializations)",
        "Healthcare & Nursing",
        "Environmental Science",
        "Agriculture & Food Science",
        "Cybersecurity",
        "Tourism & Hospitality",
        "Marine Biology",
      ]}
      scholarships={[
        "New Zealand International Scholarships (Full funding)",
        "University of Auckland Scholarships",
        "Victoria University of Wellington Scholarships",
        "Commonwealth Scholarships",
        "Research Council Funding",
        "University-specific Merit Awards",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 55-60% marks from recognized university",
        "English language proficiency: IELTS 6.5+ (no band below 6.0) or equivalent (TOEFL, PTE)",
        "Statement of Purpose (SOP) highlighting academic goals",
        "Letters of Recommendation (2-3 from professors or employers)",
        "Valid passport and student visa for New Zealand",
        "Proof of financial capacity for tuition and living expenses",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from New Zealand university",
        "English language proficiency test scores (IELTS/TOEFL/PTE)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Academic transcripts and certificates",
        "Proof of funds for New Zealand student visa",
        "Financial documents (bank statements)",
        "Passport-sized photographs",
        "New Zealand student visa application form",
      ]}
      admissionProcess={[
        "Research and select New Zealand universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL/PTE)",
        "Write a compelling Statement of Purpose",
        "Apply to selected New Zealand universities through their online portal",
        "Wait for admission decision and receive offer letter",
        "Accept the offer and pay deposit to secure admission",
        "Apply for New Zealand Student Visa",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to New Zealand",
      ]}
      visaProcess="The New Zealand student visa process for Indian students requires an acceptance letter from a NZQA-registered institution. You must prove financial capacity for tuition and living expenses. Processing takes 4-6 weeks. You can work up to 20 hours/week during term and full-time during holidays. The post-study work visa allows you to work 1-3 years after graduation."
      partTimeWork="International students in New Zealand can work up to 20 hours per week during the academic term and full-time during holidays. Part-time jobs in New Zealand pay NZD 18-25/hour. Popular work opportunities include retail, hospitality, tutoring, and campus jobs. The post-study work visa allows you to work 1-3 years after completing your Masters degree."
      careerOpportunities="New Zealand offers excellent career opportunities for international students. With strong industry connections and the post-study work visa allowing up to 3 years, you can gain valuable experience. Popular sectors include IT, agriculture, tourism, healthcare, and construction. Average starting salaries range from NZD 50,000-70,000 per year. The skilled migration pathway makes it easier to transition to permanent residency for Indian students."
      universities={[
        { name: "University of Auckland", website: "https://auckland.ac.nz" },
        { name: "University of Otago", website: "https://otago.ac.nz" },
        { name: "Victoria University of Wellington", website: "https://wellington.ac.nz" },
        { name: "University of Canterbury", website: "https://canterbury.ac.nz" },
        { name: "Auckland University of Technology", website: "https://aut.ac.nz" },
        { name: "Massey University", website: "https://massey.ac.nz" },
        { name: "Lincoln University", website: "https://lincoln.ac.nz" },
        { name: "University of Waikato", website: "https://waikato.ac.nz" },
      ]}
      programStructure={{
        duration: "1-2 Years (varies by program)",
        medium: "English",
        details: "New Zealand Master's programs offer research and coursework options. Post-study work visa up to 3 years available.",
      }}
      faqs={[
        { question: "Can Indian students study in New Zealand without IELTS?", answer: "Some New Zealand universities accept alternative English language tests like TOEFL, PTE Academic, or Duolingo. However, IELTS is the most widely accepted. Some universities may also exempt students who have completed previous education in English. Check specific university requirements." },
        { question: "What is the cost of studying in New Zealand?", answer: "The cost of studying in New Zealand for Indian students includes tuition fees (NZD 25,000-40,000/year) and living expenses (NZD 12,000-18,000/year). Total cost ranges from NZD 37,000-58,000 annually. MBA programs cost more (NZD 35,000-55,000/year). Scholarships can reduce this burden." },
        { question: "Can students work while studying in New Zealand?", answer: "Yes, international students on New Zealand student visa can work up to 20 hours/week during term and full-time during holidays. Part-time jobs in New Zealand pay NZD 18-25/hour. This helps manage living costs while studying." },
        { question: "How long is a Masters degree in New Zealand?", answer: "Master's programs in New Zealand typically take 1-2 years to complete. Coursework-based Masters usually take 1-2 years, while research-based Masters may take 1-2 years. This varies by program and university." },
        { question: "What is the post-study work visa in New Zealand?", answer: "New Zealand's post-study work visa allows international students to work in New Zealand for 1-3 years after completing their Master's degree. The duration depends on your qualification and the institution. This is an excellent opportunity to gain work experience." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in New Zealand include New Zealand International Scholarships (full funding), University of Auckland Scholarships, Victoria University of Wellington Scholarships, and university-specific merit awards. Many New Zealand universities offer financial aid. GVK Edutech can help you find and apply." },
      ]}
    />
  );
};

export default NewZealandPage;