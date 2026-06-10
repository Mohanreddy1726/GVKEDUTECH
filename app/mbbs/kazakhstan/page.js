import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "MBBS in Kazakhstan for Indian Students 2026 | Top NMC Approved Universities",
  description: "Study MBBS in Kazakhstan at NMC approved medical universities. Affordable fees starting from ₹15 lakh, English medium, direct admission. Apply now for 2026 batch.",
  keywords: [
    "MBBS in Kazakhstan",
    "MBBS in Kazakhstan fees",
    "study MBBS in Kazakhstan",
    "MBBS in Kazakhstan for Indian students",
    "medical universities in Kazakhstan",
    "NMC approved universities in Kazakhstan",
    "MBBS abroad Kazakhstan",
    "Kazakhstan medical college fees",
    "study medicine in Kazakhstan",
  ],
  openGraph: {
    title: "MBBS in Kazakhstan for Indian Students | GVK EduTech",
    description: "Study MBBS in Kazakhstan at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Kazakhstan" }],
  },
};

const KazakhstanPage = () => {
  return (
    <CountryPageTemplate
      country="Kazakhstan"
      programType="MBBS"
      customHeading="MBBS in Kazakhstan for Indian Students 2026"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114652294.png?updatedAt=1778825819983"
      introduction="Kazakhstan has emerged as a leading destination for Indian students seeking quality medical education abroad. With NMC-approved universities, affordable MBBS fees, English-medium instruction, and world-class infrastructure, Kazakhstan offers an excellent pathway for aspiring doctors. The country provides globally recognized medical degrees that enable graduates to practice in India after clearing FMGE/NExT or pursue careers worldwide. At GVK Edutech, we provide comprehensive end-to-end support including university selection, admission processing, visa assistance, and post-arrival services ensuring a smooth and successful MBBS journey in Kazakhstan."
      whyChoose={[
        "Affordable MBBS Fees: Cost-effective education compared to Indian private medical colleges",
        "NMC/WHO/FAIMER Recognized: Degrees accepted for medical practice in India and globally",
        "English Medium: Entire MBBS program taught in English with bilingual support",
        "Modern Infrastructure: State-of-the-art hospitals and advanced medical labs",
        "Safe for Indian Students: Welcoming environment with strong India-Kazakhstan relations",
        "No Donation Required: Transparent admission process without capitation fees",
        "Excellent FMGE Pass Rate: High success rate in medical licensing exams",
      ]}
      gvkAdvantages={[
        "No Donation or Capitation Fees",
        "Assistance with Education Loan & Documentation",
        "Indian Hostels Managed by GVK Team",
        "Daily Indian Meals by Certified Chefs",
        "Exceptional FMGE Pass Rate",
        "24/7 Student & Parent Support",
        "Mentorship by Dr. Vidya Kumar Gundala",
        "Airport Pickup & University Orientation",
      ]}
      programStructure={{
        duration: "6 Years (5 Years Academic + 1 Year Internship)",
        medium: "English (with optional bilingual modules for clinical practice)",
        details: "Clinical training begins from the 2nd year with hospital rotations under senior doctors. Students get hands-on experience in affiliated hospitals.",
      }}
      feeStructure={[
        { category: "Tuition Fees (Per Year)", cost: "$3,000 – $5,000 (₹2.5 – ₹4 lakh)" },
        { category: "Living Expenses (Per Month)", cost: "$300 – $500 (₹25,000 – ₹40,000)" },
        { category: "Total Program Cost (6 Years)", cost: "$18,000 – $25,000 (₹15 – ₹20 lakh)" },
      ]}
      eligibility={[
        "Minimum 70% aggregate in Physics, Chemistry, and Biology at 12th-grade level",
        "Valid NEET Scorecard (mandatory for admission year)",
        "Minimum 17 years old at the time of admission",
        "Good health condition with medical fitness certificate",
        "Clean criminal background record",
      ]}
      documents={[
        "12th Grade Mark Sheet & Passing Certificate",
        "NEET Scorecard (current year)",
        "Valid International Passport (min 18 months validity)",
        "Aadhar Card (for Indian students)",
        "PAN Card",
        "Passport-Sized Photographs (10 copies with white background)",
        "Medical Fitness Certificate",
        "Police Clearance Certificate",
      ]}
      admissionProcess={[
        "Submit application form with academic documents",
        "Receive admission letter from selected university",
        "Pay initial tuition fee to secure admission",
        "Apply for student visa (GVK assists with documentation)",
        "Receive visa approval and travel itinerary",
        "Airport pickup and university orientation",
        "Begin MBBS program",
      ]}
      hostelFacilities="GVK Edutech provides dedicated Indian hostels with round-the-clock security. Rooms are available on twin-sharing and triple-sharing basis with attached bathrooms. Indian meals are prepared daily by certified Indian chefs ensuring proper nutrition for students. Common areas for study and recreation are available. The hostels are located within campus premises or near the university for convenience and safety."
      costOfLiving="The cost of living in Kazakhstan is affordable for Indian students. Monthly expenses including accommodation, food, transportation, and personal needs range from $250-$400 (₹20,000-₹35,000). International SIM cards and internet are readily available. Public transportation including metro in major cities is economical. Shopping for daily needs and Indian groceries is convenient near university areas."
      visaProcess="Indian students require a student visa (M-visa) to study MBBS in Kazakhstan. The process involves: receiving admission letter from the university, submitting visa application with required documents including passport, admission letter, financial proof, and medical certificates. GVK Edutech assists with the complete visa documentation process. Processing time is typically 2-4 weeks. Students must maintain valid visa status throughout their study period."
      careerOpportunities="After completing MBBS in Kazakhstan, graduates have diverse career paths: practice medicine in India after clearing FMGE/NExT, pursue postgraduate studies (MD/MS) in Kazakhstan, USA, UK, or other countries, work in hospitals in Kazakhstan or Gulf countries, appear for USMLE (USA) or PLAB (UK) for global practice, join medical research institutions, or work in healthcare NGOs. The global recognition of Kazakhstan medical degrees opens doors to opportunities worldwide."
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
        { question: "Is MBBS in Kazakhstan valid in India?", answer: "Yes, MBBS degree from Kazakhstan is valid in India. All universities are NMC approved, and graduates are eligible to practice in India after clearing the FMGE/NExT exam. The degree is also recognized by WHO, FAIMER, and medical councils of many countries." },
        { question: "What is the fee structure for MBBS in Kazakhstan?", answer: "The total MBBS fees in Kazakhstan range from ₹15-20 lakh for the entire 6-year program. Annual tuition fees are approximately $3,000-$5,000 (₹2.5-4 lakh). Living expenses are additional at around ₹25,000-40,000 per month." },
        { question: "Is NEET mandatory for MBBS in Kazakhstan?", answer: "Yes, NEET is mandatory for Indian students seeking admission to MBBS in Kazakhstan. A valid NEET scorecard for the current admission year is required as per NMC guidelines for Indian students planning to practice in India after graduation." },
        { question: "How long is MBBS in Kazakhstan?", answer: "MBBS in Kazakhstan is a 6-year program consisting of 5 years of academic study and 1 year of mandatory internship. Clinical training starts from the second year with hospital rotations." },
        { question: "Is IELTS required for MBBS in Kazakhstan?", answer: "No, IELTS is not required for MBBS in Kazakhstan. The entire MBBS program is conducted in English medium. However, basic English proficiency is expected for effective learning." },
      ]}
    />
  );
};

export default KazakhstanPage;
