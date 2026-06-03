import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in Canada 2026 | Premium Education | GVK EduTech",
  description: "Pursue your Masters degree in Canada at globally recognized institutions. Post-graduation work permit, PR pathway, and world-class education. Apply now.",
  keywords: ["Masters in Canada", "study Masters Canada", "Canada university admission", "Masters degree Canada", "PGWP Canada"],
  openGraph: {
    title: "Study Masters in Canada | GVK EduTech",
    description: "Study Masters in Canada with post-graduation work permit and PR pathway.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Canada" }],
  },
};

const CanadaPage = () => {
  return (
    <CountryPageTemplate
      country="Canada"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114258828.png?updatedAt=1778825585001"
      introduction="Canada has emerged as one of the most sought-after destinations for international students seeking a Master's degree. With its world-class universities, affordable education, and generous post-graduation work permits, Canada offers an excellent pathway to permanent residency. The country's welcoming culture and safety make it ideal for Indian students."
      whyChoose={[
        "Post-Graduation Work Permit (PGWP): Work up to 3 years after graduation",
        "Permanent Residency Pathway: Easy transition from student to PR status",
        "World-Class Education: Universities like Toronto, UBC, McGill ranked globally",
        "Affordable Education: Lower tuition costs compared to USA & UK",
        "Co-op Programs: Gain real work experience during studies",
        "Safe & Welcoming: One of the safest countries for international students",
        "Diverse Culture: Multicultural society with strong Indian community",
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
        { category: "Tuition Fees", cost: "CAD 15,000 – 35,000/year" },
        { category: "Living Expenses", cost: "CAD 10,000 – 15,000/year" },
        { category: "Health Insurance", cost: "CAD 600 – 1,000/year" },
        { category: "Total (Approximate)", cost: "CAD 25,000 – 50,000/year" },
      ]}
      specializations={[
        "Computer Science & AI",
        "Data Science & Business Analytics",
        "Finance & Accounting",
        "Engineering (All Specializations)",
        "Healthcare & Public Health",
        "Environmental Science",
        "Education & Teaching",
      ]}
      scholarships={[
        "Vanier Canada Graduate Scholarships",
        "Canada Graduate Scholarships (CGS)",
        "University-Specific Merit Awards",
        "Provincial Nominee Programs",
        "Indian Student Assistance Program",
      ]}
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
      faqs={[
        { question: "What is the cost of Masters in Canada?", answer: "Tuition fees range from CAD 15,000-35,000/year. Total cost including living expenses is approximately CAD 25,000-50,000/year." },
        { question: "Can I get PR after Masters in Canada?", answer: "Yes, Canada offers excellent PR pathways. PGWP holders can apply for permanent residency through Express Entry or Provincial Nominee Programs." },
        { question: "What is the Post-Graduation Work Permit (PGWP)?", answer: "PGWP allows graduates to work in Canada for up to 3 years, depending on the program length." },
        { question: "What are the English language requirements?", answer: "Most universities require IELTS 6.5+ (no band below 6.0) for postgraduate programs." },
      ]}
    />
  );
};

export default CanadaPage;