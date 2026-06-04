import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Kazakhstan 2026 | Top Medical Universities",
  description: "Study MBBS in Kazakhstan at NMC/WHO approved universities. Affordable fees, English medium, modern infrastructure. Apply for MBBS in Kazakhstan now.",
  keywords: ["MBBS in Kazakhstan", "study MBBS Kazakhstan", "Kazakhstan medical university", "MBBS abroad Kazakhstan"],
  openGraph: {
    title: "Study MBBS in Kazakhstan | GVK EduTech",
    description: "Study MBBS in Kazakhstan at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Kazakhstan" }],
  },
};

const KazakhstanPage = () => {
  return (
    <CountryPageTemplate
      country="Kazakhstan"
      programType="MBBS"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114652294.png?updatedAt=1778825819983"
      introduction="Kazakhstan is now a leading destination for Indian students aspiring to pursue MBBS abroad. With internationally recognized universities, cost-effective education, English-medium instruction, and substantial clinical training, Kazakhstan offers an ideal environment for aspiring medical professionals. At GVK Edutech, we provide end-to-end support, ensuring a smooth, transparent, and reliable admission journey."
      whyChoose={[
        "Affordable Tuition: A budget-friendly option compared to Indian private medical colleges",
        "Global Recognition: Degrees recognized by NMC, WHO, and FAIMER",
        "English-Medium Instruction: All major universities offer MBBS programs in English",
        "High-Quality Medical Education: Modern infrastructure and well-qualified faculty",
        "Safe and Student-Centric Environment: Peaceful and culturally adaptive for Indian students",
      ]}
      gvkAdvantages={[
        "No Donation or Capitation Fees",
        "Assistance with Loan & Documentation",
        "Indian Hostels Managed by GVK",
        "Daily Indian Meals by Certified Chefs",
        "Exceptional FMGE Pass Rate",
        "24/7 Student & Parent Support",
        "Mentorship by Dr. Vidya Kumar Gundala",
      ]}
      programStructure={{
        duration: "6 Years (5 Years Academic + 1 Year Internship)",
        medium: "English (Some universities offer bilingual modules)",
        details: "Clinical Training begins from the 2nd year with hospital rotations under senior doctors",
      }}
      feeStructure={[
        { category: "Tuition Fees", cost: "Approx. $3,000 – $5,000/year (₹2.5 – ₹4 lakh/year)" },
        { category: "Living Expenses", cost: "Approx. $300 – $500/month (₹25,000 – ₹40,000/month)" },
        { category: "Total Program Cost (6 Years)", cost: "Approx. $18,000 – $25,000 (₹15 – ₹20 lakh)" },
      ]}
      eligibility={[
        "Minimum 70% in Physics, Chemistry, and Biology at the 12th-grade level",
        "Qualified NEET Scorecard (valid for the admission year)",
        "Applicant should be 17 years old or older at the time of admission",
      ]}
      documents={[
        "12th Grade Mark Sheet",
        "NEET Scorecard",
        "Valid Passport",
        "Aadhar Card",
        "PAN Card",
        "Passport-Sized Photographs",
      ]}
      curriculum={{
        preClinical: ["Anatomy", "Biochemistry", "Physiology"],
        paraClinical: ["Microbiology", "Pharmacology", "Pathology", "Forensic Medicine"],
        clinical: ["Internal Medicine", "Surgery", "Paediatrics", "Gynaecology", "Psychiatry", "Dermatology", "Radiology"],
      }}
      universities={[
        { name: "Al-Farabi Kazakh National University", website: "https://farabi.university/?lang=en", logo: "https://farabi.university/front/assets/img/icons/logonew1.png" },
        { name: "Asfendiyarov Kazakh National University", website: "https://kaznmu.in", logo: "https://kaznmu.in/images/logo.png" },
        { name: "Caspian International School of Medicine", website: "https://caspianuniversity.com", logo: "https://caspianuniversity.com/assets/img/logo-top.webp" },
        { name: "Karaganda Medical University", website: "https://qmu.edu.kz/en/", logo: "https://qmu.edu.kz/local/templates/university/images/logo.png" },
        { name: "Kazakh-Russian Medical University", website: "https://www.rmcedu.com/mbbs-abroad/mbbs-in-kazakhstan/kazakh-russian-medical-university/", logo: "https://www.rmcedu.com/_next/image/?url=%2Flogo.png&w=256&q=75" },
        { name: "Astana Medical University", website: "https://www.astanamedicaluniversity.com", logo: "https://www.astanamedicaluniversity.com/wp-content/uploads/2018/08/astana-logo.png" },
        { name: "Semey Medical University", website: "https://smu.edu.kz/en/", logo: "https://smu.edu.kz/wp-content/uploads/2025/06/new130new-logo.png" },
        { name: "Kokshetau State University", website: "https://kokshetau.edu.kz", logo: "https://via.placeholder.com/128x128/8e24aa/ffffff?text=KSU" },
      ]}
      faqs={[
        { question: "Is your MBBS degree from Kazakhstan valid worldwide and approved in India?", answer: "Yes, all degrees are accredited by NMC, WHO, and FAIMER. Graduates are eligible for FMGE/NExT in India and can work globally." },
        { question: "What are the eligibility criteria?", answer: "Students must have a minimum of 70% in PCB (12th Grade), a valid NEET scorecard, and be at least 17 years old." },
        { question: "Is Indian food and secure accommodation available?", answer: "Yes. GVK Edutech manages its hostels and offers daily Indian meals prepared by certified Indian chefs." },
        { question: "What documents are needed for admission?", answer: "12th Mark Sheet, NEET Scorecard, Passport, Aadhar Card, PAN Card, and Passport-size Photographs. No bank statement or NOC is required." },
      ]}
    />
  );
};

export default KazakhstanPage;
