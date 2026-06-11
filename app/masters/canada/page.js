import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in Canada for Indian Students 2026 | Masters in Canada",
  description: "Pursue your Masters in Canada at globally recognized institutions. PGWP up to 3 years, PR pathway. Complete admission guide for international students.",
  keywords: [
    "Masters in Canada",
    "study Masters in Canada",
    "Canada universities",
    "student visa Canada",
    "PGWP Canada",
    "scholarships for Indian students",
    "cost of living in Canada",
    "international students Canada",
    "English language requirements Canada",
    "part-time jobs Canada",
    "work opportunities Canada",
    "top universities Canada",
    "Indian students Canada",
    "Canada Masters admission",
    "post-graduation work permit Canada",
  ],
  openGraph: {
    title: "Study Masters in Canada for Indian Students | GVK EduTech",
    description: "Study Masters in Canada with post-graduation work permit and PR pathway for Indian students.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Canada for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const CanadaPage = () => {
  return (
    <CountryPageTemplate
      country="Canada"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114258828.png?updatedAt=1778825585001"
      customHeading={`Study in Canada for Indian Students ${currentYear}`}
      introduction="Canada has emerged as one of the most sought-after destinations for international students seeking a Master's degree. With its world-class universities, affordable education, and generous post-graduation work permits, Canada offers an excellent pathway to permanent residency. The country's welcoming culture and safety make it ideal for Indian students. Canadian universities provide diverse programs with excellent research opportunities."
      whyChoose={[
        "Post-Graduation Work Permit (PGWP): Work up to 3 years after graduation",
        "Permanent Residency Pathway: Easy transition from student to PR status",
        "World-Class Education: Universities like Toronto, UBC, McGill ranked globally",
        "Affordable Education: Lower tuition costs compared to USA & UK",
        "Co-op Programs: Gain real work experience during studies",
        "Safe & Welcoming: One of the safest countries for international students",
        "Diverse Culture: Multicultural society with strong Indian community",
        "Part-Time Work: Work up to 20 hours/week during studies",
      ]}
      gvkAdvantages={[
        "200+ University Partners",
        "Free personalized counseling",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Post-arrival support",
      ]}
      courseOptions={[
        { level: "Master's (MSc/MA)", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.5+ (no band below 6.0)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 7.0+, GMAT" },
        { level: "Graduate Diploma", duration: "1 year", requirements: "Bachelor's degree, IELTS 6.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees (MSc/MA)", cost: "CAD 15,000 – 35,000/year" },
        { category: "Tuition Fees (MBA)", cost: "CAD 30,000 – 60,000/year" },
        { category: "Living Expenses", cost: "CAD 10,000 – 15,000/year" },
        { category: "Health Insurance", cost: "CAD 600 – 1,000/year" },
        { category: "Total (Approximate)", cost: "CAD 25,000 – 50,000/year" },
      ]}
      costOfLiving="The cost of living in Canada for Indian students varies by city. Toronto and Vancouver are the most expensive, with monthly expenses around CAD 1,800-2,500, while cities like Montreal, Winnipeg, or Halifax offer more affordable options at CAD 1,200-1,800 per month. This includes accommodation, food, transportation, and miscellaneous expenses. Part-time jobs in Canada pay CAD 15-25/hour, helping manage living costs."
      specializations={[
        "Computer Science & AI",
        "Data Science & Business Analytics",
        "Finance & Accounting",
        "Engineering (All Specializations)",
        "Healthcare & Public Health",
        "Environmental Science",
        "Education & Teaching",
        "Cybersecurity",
        "Cloud Computing",
        "Digital Media & Gaming",
      ]}
      scholarships={[
        "Vanier Canada Graduate Scholarships (Full funding)",
        "Canada Graduate Scholarships (CGS)",
        "University-Specific Merit Awards",
        "Provincial Nominee Programs",
        "Indian Student Assistance Program",
        "External Fellowships",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 60% marks from recognized university",
        "English language proficiency: IELTS 6.5+ (no band below 6.0) or equivalent (TOEFL, PTE)",
        "GMAT/GRE score (required for MBA and some programs)",
        "Statement of Purpose (SOP) highlighting academic goals",
        "Letters of Recommendation (2-3 from professors or employers)",
        "Valid passport and student visa for Canada",
        "Proof of financial capacity for tuition and living expenses",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from Canadian university",
        "English language proficiency test scores (IELTS/TOEFL/PTE)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Academic transcripts and certificates",
        "Proof of funds for Canadian student visa",
        "Financial documents (bank statements)",
        "Passport-sized photographs",
        "Canadian student visa application form",
      ]}
      admissionProcess={[
        "Research and select Canadian universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL/PTE)",
        "Take GMAT/GRE if required for your program",
        "Write a compelling Statement of Purpose",
        "Apply to selected Canadian universities through their online portal",
        "Wait for admission decision and receive offer letter",
        "Accept the offer and pay deposit to secure admission",
        "Apply for Canadian Student Visa",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to Canada",
      ]}
      visaProcess="The Canadian student visa process for Indian students requires an acceptance letter from a Designated Learning Institution (DLI). You must prove financial capacity and genuine student intentions. Processing times vary. You can work up to 20 hours/week during term and full-time during breaks. Post-graduation, you can apply for PGWP to work in Canada for up to 3 years."
      partTimeWork="International students in Canada can work up to 20 hours per week during the academic term and full-time during holidays (30-40 hours/week). Part-time jobs in Canada pay CAD 15-25/hour. Popular work opportunities include retail, hospitality, tutoring, campus jobs, and co-op positions. The Post-Graduation Work Permit (PGWP) allows you to work 1-3 years after completing your Masters degree."
      careerOpportunities="Canada offers excellent career opportunities for international students. With strong industry connections and the PGWP allowing up to 3 years of work experience, you can build a successful career. Popular sectors include IT, finance, healthcare, engineering, and natural resources. Average starting salaries range from CAD 45,000-70,000 per year. The Express Entry and Provincial Nominee Programs (PNP) make it easier to transition to permanent residency for Indian students."
      universities={[
        { name: "University of Toronto", website: "https://utoronto.ca" },
        { name: "University of British Columbia", website: "https://ubc.ca" },
        { name: "McGill University", website: "https://mcgill.ca" },
        { name: "University of Alberta", website: "https://ualberta.ca" },
        { name: "University of Waterloo", website: "https://uwaterloo.ca" },
        { name: "Western University", website: "https://westernu.ca" },
        { name: "Queen's University", website: "https://queensu.ca" },
        { name: "Simon Fraser University", website: "https://sfu.ca" },
      ]}
      programStructure={{
        duration: "1-2 Years (varies by program)",
        medium: "English",
        details: "Canadian Master's programs offer co-op and research options. PGWP allows work for up to 3 years post-graduation.",
      }}
      faqs={[
        { question: "Can Indian students study in Canada without IELTS?", answer: "Some Canadian universities accept alternative English language tests like TOEFL, PTE Academic, or Duolingo. However, IELTS is the most widely accepted. Some universities may also exempt students who have completed previous education in English. Check specific university requirements." },
        { question: "What is the cost of studying in Canada?", answer: "The cost of studying in Canada for Indian students includes tuition fees (CAD 15,000-35,000/year) and living expenses (CAD 10,000-15,000/year). Total cost ranges from CAD 25,000-50,000 annually. MBA programs cost more (CAD 30,000-60,000/year). Scholarships can reduce this burden." },
        { question: "Can students work while studying in Canada?", answer: "Yes, international students on Canadian student visa can work up to 20 hours/week during term and full-time during holidays. Part-time jobs in Canada pay CAD 15-25/hour. Co-op programs also provide valuable work experience during studies." },
        { question: "How long is a Masters degree in Canada?", answer: "Master's programs in Canada typically take 1-2 years to complete. Coursework-based Masters usually take 1-2 years, while research-based Masters (thesis) may take 2 years. This varies by program and university." },
        { question: "What is the Post-Graduation Work Permit (PGWP)?", answer: "The PGWP allows graduates to work in Canada for up to 3 years, depending on the program length. It's an open work permit allowing you to work for any employer. This is an excellent pathway to gain Canadian work experience and potentially apply for permanent residency." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in Canada include Vanier Canada Graduate Scholarships, Canada Graduate Scholarships (CGS), university-specific merit awards, and Provincial Nominee Programs. Many Canadian universities offer financial aid for international students. GVK Edutech can help you find and apply." },
      ]}
      exploreCountries={[
        { name: "UK", link: "/masters/uk", flag: "🇬🇧" },
        { name: "USA", link: "/masters/usa", flag: "🇺🇸" },
        { name: "Australia", link: "/masters/australia", flag: "🇦🇺" },
        { name: "Germany", link: "/masters/germany", flag: "🇩🇪" },
        { name: "Ireland", link: "/masters/ireland", flag: "🇮🇪" },
        { name: "New Zealand", link: "/masters/newzealand", flag: "🇳🇿" },
      ]}
    />
  );
};

export default CanadaPage;