import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in USA 2026 | Top Universities",
  description: "Pursue your Masters degree in USA at Ivy League and top-ranked universities. STEM OPT up to 3 years, world-class research facilities. Apply for USA Masters now.",
  keywords: ["Masters in USA", "study Masters in USA", "USA university admission", "Masters degree USA", "STEM OPT"],
  openGraph: {
    title: "Study Masters in USA | GVK EduTech",
    description: "Study Masters in USA at top-ranked universities with post-study work options.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in USA" }],
  },
};

const USAPage = () => {
  return (
    <CountryPageTemplate
      country="USA"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/85eb56eb-ba7e-4dfa-b0c9-d23f708d5433.png"
      introduction="The USA remains the #1 global destination for international students pursuing a Master's degree. Home to Ivy League institutions and world-renowned research universities, the US offers unparalleled academic excellence, cutting-edge technology, and exceptional career pathways. With STEM OPT extending up to 3 years post-graduation, students gain valuable work experience while building a global professional network."
      whyChoose={[
        "World-Class Universities: MIT, Stanford, Harvard, and 4,000+ institutions in QS rankings",
        "STEM OPT Benefit: Work up to 3 years after graduation in your field",
        "Research Excellence: Access to Nobel-winning labs and innovation hubs like Silicon Valley",
        "Diverse Program Options: 1-year accelerated to 2-year comprehensive programs",
        "Strong Career Outcomes: On-campus recruitment from Fortune 500 companies",
        "Cultural Diversity: Thriving international community with robust support systems",
        "Flexible Admissions: GRE/GMAT-optional at many universities",
      ]}
      gvkAdvantages={[
        "Free personalized counseling",
        "University shortlisting based on profile & budget",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Travel, accommodation, and insurance support",
      ]}
      courseOptions={[
        { level: "Postgraduate (MS)", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 5.5+ / TOEFL 90+, GRE/GMAT (varies by university)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.5+, GMAT, 2+ years work experience" },
        { level: "Research Programs (PhD)", duration: "3–5 years", requirements: "Master's degree, research proposal, IELTS 7.0+, GRE" },
      ]}
      feeStructure={[
        { category: "Tuition Fees", cost: "$25,000 – $50,000/year" },
        { category: "Living Expenses", cost: "$12,000 – $20,000/year" },
        { category: "Health Insurance", cost: "$1,500 – $2,500/year" },
        { category: "Total (Approximate)", cost: "$40,000 – $75,000/year" },
      ]}
      specializations={[
        "Computer Science & AI/ML",
        "Data Science & Business Analytics",
        "Cybersecurity",
        "Electrical & Electronics Engineering",
        "Mechanical Engineering",
        "Robotics & Automation",
        "Finance & Business Analytics",
        "Healthcare & Public Health",
        "Environmental Engineering",
      ]}
      scholarships={[
        "Fulbright Scholarship",
        "Global Graduate Merit Scholarships",
        "University-specific Merit Awards",
        "Research & Teaching Assistantships",
        "STEM Field Grants",
      ]}
      universities={[
        { name: "Harvard University", website: "https://harvard.edu" },
        { name: "Massachusetts Institute of Technology (MIT)", website: "https://mit.edu" },
        { name: "Stanford University", website: "https://stanford.edu" },
        { name: "University of California, Berkeley", website: "https://berkeley.edu" },
        { name: "Arizona State University", website: "https://asu.edu" },
        { name: "Northeastern University", website: "https://northeastern.edu" },
        { name: "University of Texas at Austin", website: "https://utexas.edu" },
        { name: "University of South Florida", website: "https://usf.edu" },
      ]}
      faqs={[
        { question: "What is the cost of Masters in USA?", answer: "Tuition fees range from $25,000-50,000/year. Total cost including living expenses is approximately $40,000-75,000/year." },
        { question: "What is STEM OPT?", answer: "STEM OPT (Optional Practical Training) allows STEM graduates to work in the US for up to 3 years after graduation." },
        { question: "Are GRE/GMAT scores required?", answer: "Many universities have made GRE/GMAT optional. However, top institutions may still recommend them." },
        { question: "What are the English language requirements?", answer: "Most universities require IELTS 5.5+ or TOEFL 90+ for postgraduate admission." },
      ]}
    />
  );
};

export default USAPage;
