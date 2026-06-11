import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in Ireland for Indian Students 2026 | Masters in Ireland",
  description: "Pursue your Masters in Ireland at leading European institutions. English-speaking, tech hub, stay-back up to 2 years. Complete admission guide for international students.",
  keywords: [
    "Masters in Ireland",
    "study Masters in Ireland",
    "Ireland universities",
    "student visa Ireland",
    "third level graduate scheme Ireland",
    "scholarships for Indian students",
    "cost of living in Ireland",
    "international students Ireland",
    "English language requirements Ireland",
    "part-time jobs Ireland",
    "work opportunities Ireland",
    "top universities Ireland",
    "Indian students Ireland",
    "Ireland Masters admission",
    "post-study work visa Ireland",
  ],
  openGraph: {
    title: "Study Masters in Ireland for Indian Students | GVK EduTech",
    description: "Study Masters in Ireland with stay-back options and tech industry opportunities for Indian students.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Ireland for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const IrelandPage = () => {
  return (
    <CountryPageTemplate
      country="Ireland"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114053196.png?updatedAt=1778825459744"
      customHeading={`Study in Ireland for Indian Students ${currentYear}`}
      introduction="Ireland has become a premier destination for Master's studies, particularly in technology and business. Home to multinational tech giants like Google, Apple, and Microsoft, Ireland offers excellent career opportunities. The country's English-speaking environment, combined with the Third Level Graduate Scheme allowing stay-back up to 2 years, makes it ideal for Indian students. Irish universities provide world-class education with strong research focus."
      whyChoose={[
        "Tech Hub of Europe: Home to Google, Apple, Microsoft, and 1,000+ MNCs",
        "Stay Back Option: Work up to 2 years after graduation under Third Level Graduate Scheme",
        "English-Speaking: No language barrier for Indian students",
        "World-Class Universities: Trinity College Dublin, UCD ranked globally",
        "Research Excellence: Strong focus on innovation and technology",
        "Safe & Friendly: One of the most welcoming countries in Europe",
        "Gateway to Europe: Travel easily across the Schengen area",
        "Part-Time Work: Work up to 20 hours/week during studies",
      ]}
      gvkAdvantages={[
        "150+ University Partners",
        "Free personalized counseling",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Post-arrival support",
      ]}
      courseOptions={[
        { level: "Master's (MSc/MA)", duration: "1 year", requirements: "Bachelor's degree, IELTS 6.5+ (no band below 6.0)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 7.0+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–4 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees (MSc)", cost: "€10,000 – 25,000/year" },
        { category: "Tuition Fees (MBA)", cost: "€25,000 – 45,000/year" },
        { category: "Living Expenses", cost: "€8,000 – 12,000/year" },
        { category: "Health Insurance", cost: "€500 – 1,000/year" },
        { category: "Total (Approximate)", cost: "€18,000 – 38,000/year" },
      ]}
      costOfLiving="The cost of living in Ireland for Indian students varies by city. Dublin is the most expensive, with monthly expenses around €1,200-1,500, while cities like Galway, Cork, or Limerick offer more affordable options at €900-1,200 per month. This includes accommodation, food, transportation, and miscellaneous expenses. Part-time jobs in Ireland pay €10-15/hour, helping manage living costs."
      specializations={[
        "Computer Science & Software Engineering",
        "Data Science & Analytics",
        "Finance & FinTech",
        "Biotechnology & Life Sciences",
        "Business & Management",
        "Engineering (All Specializations)",
        "Marketing & Digital Media",
        "Cybersecurity",
        "Artificial Intelligence",
        "Cloud Computing",
      ]}
      scholarships={[
        "Irish Government Scholarships",
        "Trinity College Dublin Global Excellence Scholarships",
        "University-Specific Merit Awards",
        "Chevening Scholarships (for UK citizens)",
        "Industry-Sponsored Scholarships",
        "Fellowship Programs",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 55-60% marks from recognized university",
        "English language proficiency: IELTS 6.5+ (no band below 6.0) or equivalent (TOEFL, PTE)",
        "GMAT/GRE score (required for MBA and some programs)",
        "Statement of Purpose (SOP) highlighting academic goals",
        "Letters of Recommendation (2-3 from professors or employers)",
        "Valid passport and student visa for Ireland",
        "Proof of financial capacity for tuition and living expenses",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from Irish university",
        "English language proficiency test scores (IELTS/TOEFL/PTE)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Academic transcripts and certificates",
        "Proof of funds for Irish student visa",
        "Financial documents (bank statements)",
        "Passport-sized photographs",
        "Irish student visa application form",
      ]}
      admissionProcess={[
        "Research and select Irish universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL/PTE)",
        "Write a compelling Statement of Purpose",
        "Apply to selected Irish universities through their online portal",
        "Wait for admission decision and receive offer letter",
        "Accept the offer and pay deposit to secure admission",
        "Apply for Irish Student Visa",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to Ireland",
      ]}
      visaProcess="The Irish student visa process for Indian students requires an acceptance letter from a recognized institution. You must prove financial capacity (€7,000-10,000 for living expenses). Processing takes 4-8 weeks. You can work up to 20 hours/week during term and 40 hours/week during holidays. The Third Level Graduate Scheme allows you to stay and work for up to 2 years after graduation."
      partTimeWork="International students in Ireland can work up to 20 hours per week during term and 40 hours per week during holidays. Part-time jobs in Ireland pay €10-15/hour. Popular work opportunities include retail, hospitality, tutoring, and campus jobs. The Third Level Graduate Scheme allows you to work full-time for 2 years after completing your Masters degree."
      careerOpportunities="Ireland offers excellent career opportunities for international students, especially in technology and finance. With major tech companies like Google, Apple, and Microsoft based in Ireland, job prospects are strong. Average starting salaries range from €35,000-50,000 per year. The 2-year post-study work visa (Third Level Graduate Scheme) allows you to gain valuable work experience in Ireland."
      universities={[
        { name: "Trinity College Dublin", website: "https://tcd.ie" },
        { name: "University College Dublin", website: "https://ucd.ie" },
        { name: "National University of Ireland Galway", website: "https://nuigalway.ie" },
        { name: "University College Cork", website: "https://ucc.ie" },
        { name: "Dublin City University", website: "https://dcu.ie" },
        { name: "Technological University Dublin", website: "https://tudublin.ie" },
        { name: "Maynooth University", website: "https://mu.ie" },
        { name: "RCSI University of Medicine", website: "https://rcsi.com", isMedical: true },
      ]}
      programStructure={{
        duration: "1 Year (MSc), 1-2 Years (MBA)",
        medium: "English",
        details: "Irish Master's programs are typically 1 year (12 months). Tech hub with excellent job opportunities post-graduation.",
      }}
      faqs={[
        { question: "Can Indian students study in Ireland without IELTS?", answer: "Some Irish universities accept alternative English language tests like TOEFL, PTE Academic, or Duolingo. However, IELTS is the most widely accepted. Check specific university requirements. Some universities may also accept students who have completed previous education in English." },
        { question: "What is the cost of studying in Ireland?", answer: "The cost of studying in Ireland for Indian students includes tuition fees (€10,000-25,000/year) and living expenses (€8,000-12,000/year). Total cost ranges from €18,000-38,000 annually. MBA programs cost more (€25,000-45,000/year). Scholarships can reduce this burden." },
        { question: "Can students work while studying in Ireland?", answer: "Yes, international students on Irish student visa can work up to 20 hours/week during term and 40 hours/week during holidays. Part-time jobs in Ireland pay €10-15/hour. This helps manage living costs while studying in Ireland." },
        { question: "How long is a Masters degree in Ireland?", answer: "Master's programs in Ireland typically take 1 year to complete (12 months). Some specialized programs like MBA may take 1-2 years. This is a shorter duration compared to many other countries, saving both time and money." },
        { question: "What is the Third Level Graduate Scheme?", answer: "Ireland's Third Level Graduate Scheme allows international students to stay and work in Ireland for up to 2 years after completing their Master's degree. You can work for any employer during this period. This is an excellent opportunity to gain work experience in Ireland." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in Ireland include Irish Government Scholarships, Trinity College Dublin Global Excellence Scholarships, and university-specific merit awards. Many Irish universities offer financial aid for international students. GVK Edutech can help you find and apply for relevant scholarships." },
      ]}
      exploreCountries={[
        { name: "UK", link: "/masters/uk", flag: "🇬🇧" },
        { name: "USA", link: "/masters/usa", flag: "🇺🇸" },
        { name: "Australia", link: "/masters/australia", flag: "🇦🇺" },
        { name: "Canada", link: "/masters/canada", flag: "🇨🇦" },
        { name: "Germany", link: "/masters/germany", flag: "🇩🇪" },
        { name: "New Zealand", link: "/masters/newzealand", flag: "🇳🇿" },
      ]}
    />
  );
};

export default IrelandPage;