import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study Masters in Australia 2026 - Top Universities | GVK EduTech",
  description: "Pursue your Masters degree in Australia at top-ranked universities. Post-study work visa, research excellence, vibrant student life. Apply for Australia Masters now.",
  keywords: ["Masters in Australia", "study Masters Australia", "Australia university admission", "Masters degree Australia", "post-study work visa Australia"],
  openGraph: {
    title: "Study Masters in Australia | GVK EduTech",
    description: "Study Masters in Australia at top-ranked universities with post-study work options.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in Australia" }],
  },
};

const AustraliaPage = () => {
  return (
    <CountryPageTemplate
      country="Australia"
      programType="Masters"
      heroImage="https://gvkedutech.com/site/assets/images/masters/countries/australia.jpg"
      introduction="Australia is a top destination for international students seeking a Master's degree, offering world-class education, vibrant student life, and stunning natural landscapes. With globally recognized universities, industry-driven programs, and pathways to permanent residency, studying in Australia opens doors to a bright future. The country provides excellent post-study work opportunities and a safe, multicultural environment."
      whyChoose={[
        "Globally Recognized Degrees: Universities ranked in QS top 100 worldwide",
        "Post-Study Work Visa: Up to 4 years to gain work experience and PR pathway",
        "Work While Studying: Up to 48 hours per fortnight during semester",
        "Research Excellence: Cutting-edge facilities in all major disciplines",
        "Safe & Multicultural: Welcoming environment for international students",
        "Beautiful Lifestyle: Excellent work-life balance with stunning landscapes",
        "Pathway to PR: Clear immigration pathways for skilled graduates",
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
        { level: "Postgraduate (MS)", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.5+ (no band below 6.0)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 6.5+, GMAT" },
        { level: "Research Programs (PhD)", duration: "3–4 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      feeStructure={[
        { category: "Tuition Fees", cost: "AUD 25,000 – 50,000/year" },
        { category: "Living Expenses", cost: "AUD 15,000 – 25,000/year" },
        { category: "Health Insurance (OSHC)", cost: "AUD 500 – 1,500/year" },
        { category: "Total (Approximate)", cost: "AUD 40,000 – 80,000/year" },
      ]}
      specializations={[
        "Computer Science, AI & Data Science",
        "Engineering (Civil, Mechanical, Electrical)",
        "Environmental Science & Sustainability",
        "Biotechnology & Life Sciences",
        "Business Analytics, Finance & Management",
        "Public Health & Healthcare",
        "Media, Design & Communication",
      ]}
      scholarships={[
        "Australia Awards Scholarships",
        "Research Training Program (RTP)",
        "University Merit-based Scholarships",
        "Destination Australia Scholarships",
        "Part-time Work Opportunities",
      ]}
      universities={[
        { name: "University of Melbourne" },
        { name: "Australian National University (ANU)" },
        { name: "University of Sydney" },
        { name: "University of New South Wales (UNSW)" },
        { name: "University of Queensland" },
        { name: "Monash University" },
        { name: "University of Adelaide" },
        { name: "University of Technology Sydney (UTS)" },
      ]}
    />
  );
};

export default AustraliaPage;
