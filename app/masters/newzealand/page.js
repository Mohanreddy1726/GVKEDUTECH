import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in New Zealand 2026 | Work & Study Option | GVK EduTech",
  description: "Pursue your Masters degree in New Zealand at world-class institutions. Post-study work visa, safe environment, and quality education. Apply now.",
  keywords: ["Masters in New Zealand", "study Masters New Zealand", "New Zealand university admission", "Masters degree New Zealand", "New Zealand post-study visa"],
  openGraph: {
    title: "Study Masters in New Zealand | GVK EduTech",
    description: "Study Masters in New Zealand with post-study work visa and safe environment.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in New Zealand" }],
  },
};

const NewZealandPage = () => {
  return (
    <CountryPageTemplate
      country="New Zealand"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_113045327.png?updatedAt=1778824851891"
      introduction="New Zealand offers a unique blend of world-class education and an unbeatable lifestyle. With its stunning natural beauty, safe environment, and welcoming people, New Zealand is an ideal destination for Indian students. The country's post-study work visa allows you to work for up to 3 years, providing excellent opportunities to gain international experience."
      whyChoose={[
        "Post-Study Work Visa: Work up to 3 years after graduation",
        "Safe Destination: One of the safest countries in the world",
        "World-Class Education: Universities like Auckland, Otago ranked globally",
        "Work While Study: Part-time work allowed (20 hours/week)",
        "Pathway to Residency: Clear pathways to permanent residency",
        "Natural Beauty: Experience stunning landscapes and outdoor activities",
        "Quality of Life: High standard of living with affordable costs",
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
        { category: "Tuition Fees", cost: "NZD 25,000 – 40,000/year" },
        { category: "Living Expenses", cost: "NZD 12,000 – 18,000/year" },
        { category: "Health Insurance", cost: "NZD 500 – 800/year" },
        { category: "Total (Approximate)", cost: "NZD 37,000 – 58,000/year" },
      ]}
      specializations={[
        "Computer Science & Information Technology",
        "Data Science & Analytics",
        "Business & Management",
        "Engineering (All Specializations)",
        "Healthcare & Nursing",
        "Environmental Science",
        "Agriculture & Food Science",
      ]}
      scholarships={[
        "New Zealand International Scholarships",
        "University of Auckland Scholarships",
        "Victoria University of Wellington Scholarships",
        "Commonwealth Scholarships",
        "Research Council Funding",
      ]}
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
      faqs={[
        { question: "What is the cost of Masters in New Zealand?", answer: "Tuition fees range from NZD 25,000-40,000/year. Total cost including living expenses is approximately NZD 37,000-58,000/year." },
        { question: "Can I work after Masters in New Zealand?", answer: "Yes, the post-study work visa allows you to work for up to 3 years after graduation." },
        { question: "Is New Zealand safe for international students?", answer: "Yes, New Zealand is one of the safest countries in the world with a welcoming environment." },
        { question: "What are the English language requirements?", answer: "Most universities require IELTS 6.5+ (no band below 6.0) for postgraduate programs." },
      ]}
    />
  );
};

export default NewZealandPage;