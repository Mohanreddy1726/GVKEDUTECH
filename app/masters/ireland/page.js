import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in Ireland 2026 | Global Career Opportunities | GVK EduTech",
  description: "Pursue your Masters degree in Ireland at leading European institutions. English-speaking environment, tech hub, and stay-back options. Apply now.",
  keywords: ["Masters in Ireland", "study Masters Ireland", "Ireland university admission", "Masters degree Ireland", "Ireland stay back visa"],
  openGraph: {
    title: "Study Masters in Ireland | GVK EduTech",
    description: "Study Masters in Ireland with stay-back options and tech industry opportunities.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Ireland" }],
  },
};

const IrelandPage = () => {
  return (
    <CountryPageTemplate
      country="Ireland"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114053196.png?updatedAt=1778825459744"
      introduction="Ireland has become a premier destination for Master's studies, particularly in technology and business. Home to multinational tech giants like Google, Apple, and Microsoft, Ireland offers excellent career opportunities. The country's English-speaking environment, combined with the Third Level Graduate Scheme allowing stay-back up to 2 years, makes it ideal for Indian students."
      whyChoose={[
        "Tech Hub of Europe: Home to Google, Apple, Microsoft, and 1,000+ MNCs",
        "Stay Back Option: Work up to 2 years after graduation under Third Level Graduate Scheme",
        "English-Speaking: No language barrier for Indian students",
        "World-Class Universities: Trinity College Dublin, UCD ranked globally",
        "Research Excellence: Strong focus on innovation and technology",
        "Safe & Friendly: One of the most welcoming countries in Europe",
        "Gateway to Europe: Travel easily across the Schengen area",
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
        { category: "Tuition Fees", cost: "€10,000 – 25,000/year" },
        { category: "Living Expenses", cost: "€8,000 – 12,000/year" },
        { category: "Health Insurance", cost: "€500 – 1,000/year" },
        { category: "Total (Approximate)", cost: "€18,000 – 38,000/year" },
      ]}
      specializations={[
        "Computer Science & Software Engineering",
        "Data Science & Analytics",
        "Finance & FinTech",
        "Biotechnology & Life Sciences",
        "Business & Management",
        "Engineering (All Specializations)",
        "Marketing & Digital Media",
      ]}
      scholarships={[
        "Irish Government Scholarships",
        "Trinity College Dublin Global Excellence Scholarships",
        "University-Specific Merit Awards",
        "Chevening Scholarships (for UK citizens)",
        "Industry-Sponsored Scholarships",
      ]}
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
      faqs={[
        { question: "What is the cost of Masters in Ireland?", answer: "Tuition fees range from €10,000-25,000/year. Total cost including living expenses is approximately €18,000-38,000/year." },
        { question: "Can I work after Masters in Ireland?", answer: "Yes, the Third Level Graduate Scheme allows you to work up to 2 years after graduation." },
        { question: "Why is Ireland good for tech students?", answer: "Ireland is home to Google, Apple, Microsoft, and 1,000+ multinational companies, offering excellent job opportunities." },
        { question: "What are the English language requirements?", answer: "Most universities require IELTS 6.5+ (no band below 6.0) for postgraduate programs." },
      ]}
    />
  );
};

export default IrelandPage;