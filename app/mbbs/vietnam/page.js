import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "MBBS in Vietnam for Indian Students 2026 | NMC Approved Universities",
  description: "Study MBBS in Vietnam at NMC/WHO approved medical universities. Affordable fees starting from ₹15 lakh, English medium, direct admission. Apply now for 2026 batch.",
  keywords: [
    "MBBS in Vietnam",
    "MBBS in Vietnam fees",
    "study MBBS in Vietnam",
    "MBBS in Vietnam for Indian students",
    "medical universities in Vietnam",
    "NMC approved universities in Vietnam",
    "MBBS abroad Vietnam",
    "Vietnam medical university fees",
    "study medicine in Vietnam",
  ],
  openGraph: {
    title: "MBBS in Vietnam for Indian Students | GVK EduTech",
    description: "Study MBBS in Vietnam at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Vietnam" }],
  },
};

const VietnamPage = () => {
  return (
    <CountryPageTemplate
      country="Vietnam"
      programType="MBBS"
      customHeading="MBBS in Vietnam for Indian Students 2026"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114910639.png?updatedAt=1778825958215"
      introduction="Vietnam is rapidly establishing itself as a distinguished hub for medical education, offering Indian students a compelling blend of academic excellence, affordability, and international recognition. With state-of-the-art infrastructure, English-medium programs, and a curriculum aligned with global medical standards, Vietnam presents an ideal environment for aspiring healthcare professionals. Vietnamese medical universities are recognized by NMC, WHO, and FAIMER, making the MBBS degree valid for practice in India and globally. The country offers excellent clinical exposure and a unique opportunity to learn tropical medicine, which is highly valuable for Indian students."
      whyChoose={[
        "Affordable MBBS Fees: Cost-effective education compared to Indian private medical colleges",
        "NMC/WHO/FAIMER Recognized: Degrees accepted for medical practice in India and globally",
        "English Medium: MBBS programs available in English in select universities",
        "World-Class Clinical Exposure: Modern hospitals with extensive practical training",
        "Cultural Similarities: Proximity to India with similar Asian culture",
        "Tropical Medicine Focus: Unique learning opportunity for tropical diseases",
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
        medium: "English (Available in Select Universities)",
        details: "Clinical training begins from the 2nd year with hospital rotations under senior doctors. Students get hands-on experience in affiliated hospitals including exposure to tropical medicine.",
      }}
      feeStructure={[
        { category: "Tuition Fees (Per Year)", cost: "$3,000 – $4,500 (₹2.5 – ₹3.8 lakh)" },
        { category: "Living Expenses (Per Month)", cost: "$250 – $400 (₹20,000 – ₹33,000)" },
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
      costOfLiving="The cost of living in Vietnam is affordable for Indian students. Monthly expenses including accommodation, food, transportation, and personal needs range from $200-$350 (₹17,000-₹30,000). International SIM cards and internet are readily available. Public transportation is economical. Shopping for daily needs and Indian groceries is convenient near university areas."
      visaProcess="Indian students require a student visa to study MBBS in Vietnam. The process involves: receiving admission letter from the university, submitting visa application with required documents including passport, admission letter, financial proof, and medical certificates. GVK Edutech assists with the complete visa documentation process. Processing time is typically 2-4 weeks."
      careerOpportunities="After completing MBBS in Vietnam, graduates have diverse career paths: practice medicine in India after clearing FMGE/NExT, pursue postgraduate studies (MD/MS) in Vietnam, USA, UK, or other countries, work in hospitals in Vietnam or Gulf countries, appear for USMLE (USA) or PLAB (UK) for global practice, join medical research institutions specializing in tropical medicine, or work in healthcare NGOs. The global recognition of Vietnamese medical degrees opens doors to opportunities worldwide."
      curriculum={{
        preClinical: ["Anatomy", "Physiology", "Biochemistry"],
        paraClinical: ["Pathology", "Microbiology", "Pharmacology", "Forensic Medicine"],
        clinical: ["Medicine", "Surgery", "OB-GYN", "Paediatrics", "Psychiatry", "Radiology"],
      }}
      universities={[
        { name: "Hanoi Medical University (HMU)", website: "https://hmu.edu.vn", logo: "https://hmu.edu.vn/assets/img/Logoo.png" },
        { name: "University of Medicine and Pharmacy at HCMC", website: "https://ump.edu.vn" },
        { name: "Hue University of Medicine and Pharmacy", website: "https://old.huemed-univ.edu.vn/en/", logo: "https://old.huemed-univ.edu.vn/en/images/logo.png" },
        { name: "Can Tho University of Medicine and Pharmacy", website: "https://ctump.edu.vn", logo: "https://media.ctump.edu.vn/Media/1_TH1076/FolderFunc/202403/Images/logo-ctump-headee-20240325094834-e.png" },
        { name: "Thai Nguyen University of Medicine and Pharmacy", website: "https://en.tump.edu.vn", logo: "https://en.tump.edu.vn/public/frontend/images/logo.png" },
        { name: "Hai Phong University of Medicine and Pharmacy", website: "https://hpmu.edu.vn", logo: "https://hpmu.edu.vn/hpmu/images/hpmu_1.png" },
        { name: "Pham Ngoc Thach University of Medicine", website: "https://pnt.edu.vn", logo: "https://pnt.edu.vn/Resources/Images/Subdomain/HomePage/logo/logo.png" },
      ]}
      faqs={[
        { question: "Is MBBS in Vietnam valid in India?", answer: "Yes, MBBS degree from Vietnam is valid in India. All partner universities are NMC approved, and graduates are eligible to practice in India after clearing the FMGE/NExT exam. The degree is also recognized by WHO, FAIMER, and medical councils of many countries." },
        { question: "What is the fee structure for MBBS in Vietnam?", answer: "The total MBBS fees in Vietnam range from ₹15-20 lakh for the entire 6-year program. Annual tuition fees are approximately $3,000-$4,500 (₹2.5-3.8 lakh). Living expenses are additional at around ₹20,000-33,000 per month." },
        { question: "Is NEET mandatory for MBBS in Vietnam?", answer: "Yes, NEET is mandatory for Indian students seeking admission to MBBS in Vietnam. A valid NEET scorecard for the current admission year is required as per NMC guidelines for Indian students planning to practice in India after graduation." },
        { question: "How long is MBBS in Vietnam?", answer: "MBBS in Vietnam is a 6-year program consisting of 5 years of academic study and 1 year of mandatory internship. Clinical training starts from the second year with hospital rotations." },
        { question: "Is IELTS required for MBBS in Vietnam?", answer: "No, IELTS is not required for MBBS in Vietnam. The MBBS program is conducted in English medium in partner universities. However, basic English proficiency is expected for effective learning." },
      ]}
      exploreCountries={[
        { name: "Kazakhstan", link: "/mbbs/kazakhstan", flag: "🇰🇿" },
        { name: "Georgia", link: "/mbbs/georgia", flag: "🇬🇪" },
        { name: "Russia", link: "/mbbs/russia", flag: "🇷🇺" },
        { name: "Kyrgyzstan", link: "/mbbs/kyrgyzstan", flag: "🇰🇬" },
        { name: "Nepal", link: "/mbbs/nepal", flag: "🇳🇵" },
        { name: "Uzbekistan", link: "/mbbs/uzbekistan", flag: "🇺🇿" },
      ]}
    />
  );
};

export default VietnamPage;
