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
      introduction="Australia is one of the top destinations for international students seeking to pursue a Master of Science (MS) degree. Renowned for its world-class education, vibrant student life, and stunning natural beauty, Australia is not just a place to study—it's a place to thrive. With cutting-edge research, industry-driven programs, and pathways to permanent residency, studying in Australia opens doors to a brighter future. GVK Edutech is here to guide you on every step of this exciting journey!"
      whyChoose={[
        "Top-Notch Education: Home to world's highest-ranking universities with focus on research and innovation",
        "Global Recognition: Australian degrees are respected by employers worldwide",
        "Work While You Study: Work up to 40 hours per fortnight during semester",
        "Post-Study Work Visa: Up to 4 years for practical experience and PR pathway",
        "Safe, Friendly, and Multicultural Environment",
        "Stunning Quality of Life with great work-life balance",
      ]}
      gvkAdvantages={[
        "Expert Guidance",
        "Free Counseling",
        "Application Support",
        "Pre-Departure Assistance",
        "Fast-Track Applications",
        "Guided Documentation",
      ]}
      courseOptions={[
        { level: "Undergraduate Degree", duration: "3–4 years", requirements: "Completion of 12th Grade, IELTS 6.0 overall (no band less than 5.5)" },
        { level: "Postgraduate Diploma / Master's (MS)", duration: "1–2 years", requirements: "Recognized bachelor's degree, IELTS 6.5 overall (no band less than 6.0)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years work experience, IELTS 6.5, GMAT/GRE" },
      ]}
      specializations={[
        "Computer Science, AI, Data Science, Machine Learning, Cybersecurity",
        "Civil, Mechanical, Electrical, and Chemical Engineering",
        "Environmental Science, Renewable Energy, Climate Change",
        "Biotechnology & Life Sciences",
        "Business Analytics, Finance, Marketing, Management",
        "Public Health, Nursing, Biomedical Science",
        "Robotics & Automation",
        "Digital Media, Design, Communication",
      ]}
      scholarships={[
        "University-Specific Scholarships: Merit-based scholarships for international students",
        "Government Scholarships: Australia Awards and Research Training Program (RTP)",
        "External Scholarships: Private organizations and international bodies",
        "Work and Study Support: Part-time work opportunities",
      ]}
      universities={[
        { name: "University of Melbourne" },
        { name: "Australian National University (ANU)" },
        { name: "University of Sydney" },
        { name: "University of New South Wales (UNSW Sydney)" },
        { name: "University of Queensland" },
        { name: "Monash University" },
        { name: "University of Adelaide" },
        { name: "University of Technology Sydney (UTS)" },
      ]}
    />
  );
};

export default AustraliaPage;
