import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "MBBS in Georgia for Indian Students 2026 | Top NMC Approved Universities",
  description: "Study MBBS in Georgia at NMC/WHO approved medical universities. Affordable fees starting from ₹18 lakh, English medium, direct admission. Apply now for 2026 batch.",
  keywords: [
    "MBBS in Georgia",
    "MBBS in Georgia fees",
    "study MBBS in Georgia",
    "MBBS in Georgia for Indian students",
    "medical universities in Georgia",
    "NMC approved universities in Georgia",
    "MBBS abroad Georgia",
    "MBBS Tbilisi fees",
    "study medicine in Georgia",
  ],
  openGraph: {
    title: "MBBS in Georgia for Indian Students | GVK EduTech",
    description: "Study MBBS in Georgia at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Georgia" }],
  },
};

const GeorgiaPage = () => {
  return (
    <CountryPageTemplate
      country="Georgia"
      programType="MBBS"
      customHeading="MBBS in Georgia for Indian Students 2026"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142235537.png?updatedAt=1778748810531"
      introduction="Georgia has emerged as one of the most popular destinations for Indian students seeking quality medical education abroad. With its strategic location between Europe and Asia, world-class NMC-approved universities, and affordable MBBS fees, Georgia offers an excellent pathway for aspiring doctors. The country provides modern infrastructure, English-medium instruction, and globally recognized medical degrees that enable graduates to practice in India after clearing FMGE/NExT or pursue careers worldwide. Georgian medical universities are recognized by WHO, FAIMER, and medical councils of various countries, making it a trusted choice for MBBS education."
      whyChoose={[
        "Affordable MBBS Fees: Cost-effective education compared to Indian private medical colleges",
        "NMC/WHO/FAIMER Recognized: Degrees accepted for medical practice in India and globally",
        "No IELTS/TOEFL Required: Simple admission process for Indian students",
        "English Medium: Entire MBBS program taught in English",
        "Modern Infrastructure: State-of-the-art hospitals and advanced medical labs",
        "Safe Environment: One of the lowest crime rates in Europe",
        "No Donation Required: Transparent admission process without capitation fees",
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
        { category: "Tuition Fees (Per Year)", cost: "$3,500 – $5,500 (₹3 – ₹4.5 lakh)" },
        { category: "Living Expenses (Per Month)", cost: "$300 – $500 (₹25,000 – ₹40,000)" },
        { category: "Total Program Cost (6 Years)", cost: "$22,000 – $35,000 (₹18 – ₹30 lakh)" },
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
      costOfLiving="The cost of living in Georgia is affordable for Indian students. Monthly expenses including accommodation, food, transportation, and personal needs range from $250-$400 (₹20,000-₹35,000). International SIM cards and internet are readily available. Public transportation is economical. Shopping for daily needs and Indian groceries is convenient near university areas."
      visaProcess="Indian students require a student visa to study MBBS in Georgia. The process involves: receiving admission letter from the university, submitting visa application with required documents including passport, admission letter, financial proof, and medical certificates. GVK Edutech assists with the complete visa documentation process. Processing time is typically 2-4 weeks."
      careerOpportunities="After completing MBBS in Georgia, graduates have diverse career paths: practice medicine in India after clearing FMGE/NExT, pursue postgraduate studies (MD/MS) in Georgia, USA, UK, or other countries, work in hospitals in Georgia or Gulf countries, appear for USMLE (USA) or PLAB (UK) for global practice, join medical research institutions, or work in healthcare NGOs. The global recognition of Georgian medical degrees opens doors to opportunities worldwide."
      climateInfo="Georgia experiences a subtropical climate with mild winters and warm summers. Summer temperatures often exceed 35°C, while winters are short and gentle. The climate is generally pleasant and suitable for Indian students."
      universities={[
        { name: "Akaki Tsereteli State University", website: "https://atsu.edu.ge", logo: "https://atsu.edu.ge/assets/images/logo_loading.png" },
        { name: "Alte University School of Medicine", website: "https://alte.edu.ge", logo: "https://alte.edu.ge/_next/static/media/white-logo.4d7e8794.svg" },
        { name: "Avicenna - Batumi Medical University", website: "https://avicenna.edu.ge", logo: "https://www.avicenna.edu.ge/images/logo-ge.png" },
        { name: "Batumi Shota Rustaveli State University", website: "https://bsu.edu.ge", logo: "https://bsu.edu.ge/images/logo.png" },
        { name: "BAU International University", website: "https://bau.edu.ge", logo: "https://bau.edu.ge/wp-content/uploads/2024/07/logo.png" },
        { name: "Caucasus International University (CIU)", website: "https://ciu.edu.ge", logo: "https://admin.ciu.edu.ge/uploads/ciu_logo_dfbc4c5b14.svg" },
        { name: "Caucasus University (CU)", website: "https://cu.edu.ge", logo: "https://cu.edu.ge/files/gallery/2024/SLIDER/For%20Web%20-.png" },
        { name: "Central University of Europe, Kutaisi", website: "https://cue.edu.ge", logo: "https://cue.edu.ge/wp-content/uploads/2024/10/logo-cue.png" },
      ]}
      faqs={[
        { question: "Is MBBS in Georgia valid in India?", answer: "Yes, MBBS degree from Georgia is valid in India. All universities are NMC approved, and graduates are eligible to practice in India after clearing the FMGE/NExT exam. The degree is also recognized by WHO, FAIMER, and medical councils of many countries." },
        { question: "What is the fee structure for MBBS in Georgia?", answer: "The total MBBS fees in Georgia range from ₹18-30 lakh for the entire 6-year program. Annual tuition fees are approximately $3,500-$5,500 (₹3-4.5 lakh). Living expenses are additional at around ₹25,000-40,000 per month." },
        { question: "Is NEET mandatory for MBBS in Georgia?", answer: "Yes, NEET is mandatory for Indian students seeking admission to MBBS in Georgia. A valid NEET scorecard for the current admission year is required as per NMC guidelines for Indian students planning to practice in India after graduation." },
        { question: "How long is MBBS in Georgia?", answer: "MBBS in Georgia is a 6-year program consisting of 5 years of academic study and 1 year of mandatory internship. Clinical training starts from the second year with hospital rotations." },
        { question: "Is IELTS required for MBBS in Georgia?", answer: "No, IELTS is not required for MBBS in Georgia. The entire MBBS program is conducted in English medium. However, basic English proficiency is expected for effective learning." },
      ]}
      exploreCountries={[
        { name: "Kazakhstan", link: "/mbbs/kazakhstan", flag: "🇰🇿" },
        { name: "Russia", link: "/mbbs/russia", flag: "🇷🇺" },
        { name: "Kyrgyzstan", link: "/mbbs/kyrgyzstan", flag: "🇰🇬" },
        { name: "Nepal", link: "/mbbs/nepal", flag: "🇳🇵" },
        { name: "Uzbekistan", link: "/mbbs/uzbekistan", flag: "🇺🇿" },
        { name: "Vietnam", link: "/mbbs/vietnam", flag: "🇻🇳" },
      ]}
    />
  );
};

export default GeorgiaPage;
