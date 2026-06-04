import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in UK 2026 | World-Class Education",
  description: "Pursue your Masters degree in UK at prestigious institutions. 1-year programs, global recognition, graduate route visa. Apply for UK Masters now.",
  keywords: ["Masters in UK", "study Masters UK", "UK university admission", "Masters degree UK", "graduate route visa UK"],
  openGraph: {
    title: "Study Masters in UK | GVK EduTech",
    description: "Study Masters in UK at prestigious institutions with graduate route visa.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in UK" }],
  },
};

const UKPage = () => {
  return (
    <CountryPageTemplate
      country="United Kingdom"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_112850461.png?updatedAt=1778824739608"
      introduction="The United Kingdom is home to some of the world's oldest and most prestigious universities, offering Master's programs that are globally recognized and highly valued by employers. With the iconic 1-year Master's format, you can earn a world-class degree in less time and at a lower cost than many other countries. The Graduate Route visa allows you to work in the UK for up to 2 years post-graduation."
      whyChoose={[
        "World-Class Universities: Oxford, Cambridge, Imperial, and 150+ QS-ranked institutions",
        "1-Year Master's Programs: Save time and money with intensive, comprehensive courses",
        "Graduate Route Visa: Work up to 2 years in the UK after graduation",
        "Global Recognition: UK degrees are respected by employers worldwide",
        "Research Excellence: Access to pioneering research facilities and funding",
        "Cultural Hub: Experience British heritage while studying in a global city",
        "Strong Alumni Network: Connect with influential professionals across industries",
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
        { level: "Master's (MSc/MA)", duration: "1 year", requirements: "Bachelor's degree, IELTS 5.5+ (no band below 6.0)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 6.5+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–4 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees", cost: "£12,000 – 35,000/year" },
        { category: "Living Expenses", cost: "£12,000 – 18,000/year" },
        { category: "Health Insurance (IHS)", cost: "£470 – 1,000/year" },
        { category: "Total (Approximate)", cost: "£25,000 – 55,000/year" },
      ]}
      specializations={[
        "Computer Science & Artificial Intelligence",
        "Data Science & Business Analytics",
        "Finance, Accounting & Economics",
        "Engineering (Mechanical, Electrical, Civil)",
        "Marketing & International Business",
        "Public Health & Healthcare Management",
        "Environmental Science & Sustainability",
        "Education & Teaching",
      ]}
      scholarships={[
        "Chevening Scholarships",
        "Commonwealth Scholarships",
        "GREAT Scholarships",
        "University-Specific Merit Awards",
        "Research Council Funding",
      ]}
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
        { question: "What is the cost of Masters in UK?", answer: "Tuition fees range from £12,000-35,000/year. Total cost including living expenses is approximately £25,000-55,000/year." },
        { question: "Can I work after Masters in UK?", answer: "Yes, the Graduate Route visa allows you to work in the UK for up to 2 years after graduation." },
        { question: "How long is a Masters program in UK?", answer: "Most Master's programs in the UK are 1 year long, making it a quick path to a world-class degree." },
        { question: "What are the English language requirements?", answer: "Most universities require IELTS 5.5+ (no band below 6.0) for postgraduate programs." },
      ]}
    />
  );
};

export default UKPage;
