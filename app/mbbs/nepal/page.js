import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "MBBS in Nepal for Indian Students 2026 | NMC Approved Medical Colleges",
  description: "Study MBBS in Nepal at NMC/WHO approved medical universities. Affordable fees, English medium, cultural proximity to India. Apply now for 2026 batch.",
  keywords: [
    "MBBS in Nepal",
    "MBBS in Nepal fees",
    "study MBBS in Nepal",
    "MBBS in Nepal for Indian students",
    "medical universities in Nepal",
    "NMC approved universities in Nepal",
    "MBBS abroad Nepal",
    "Nepal medical college fees",
    "study medicine in Nepal",
  ],
  openGraph: {
    title: "MBBS in Nepal for Indian Students | GVK EduTech",
    description: "Study MBBS in Nepal at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Nepal" }],
  },
};

const NepalPage = () => {
  return (
    <CountryPageTemplate
      country="Nepal"
      programType="MBBS"
      customHeading="MBBS in Nepal for Indian Students 2026"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142225739.png?updatedAt=1778748808091"
      introduction="Nepal has emerged as a preferred destination for Indian students seeking quality medical education at affordable costs. With its geographical proximity to India, cultural similarities, and English-medium MBBS programs recognized by NMC and WHO, Nepal offers an ideal environment for aspiring doctors. The country features modern medical colleges equipped with state-of-the-art infrastructure and extensive clinical training opportunities. Students can easily travel between India and Nepal with no timezone difference, making it convenient for families to visit. Nepal provides globally recognized medical degrees that enable graduates to practice in India after clearing FMGE/NExT or pursue careers worldwide."
      whyChoose={[
        "Geographical Proximity: Easy travel between India and Nepal with no timezone difference",
        "Cultural Similarities: Shared cultural heritage makes adaptation easier for Indian students",
        "Affordable MBBS Fees: Cost-effective MBBS programs compared to private colleges in India",
        "NMC/WHO Recognized: Degrees valid for FMGE/NExT and international practice",
        "English Medium Instruction: All major universities offer MBBS in English",
        "Safe Environment: Nepal is known for its peaceful and student-friendly atmosphere",
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
        duration: "5.5 Years (4.5 Years Academic + 1 Year Internship)",
        medium: "English (with Nepali language support during clinical rotations)",
        details: "Clinical training begins from the 3rd year with hospital rotations under senior doctors. Students get hands-on experience in affiliated hospitals.",
      }}
      feeStructure={[
        { category: "Tuition Fees (Total Course)", cost: "₹30 – 50 Lakh" },
        { category: "Living Expenses (Total)", cost: "₹10 – 15 Lakh" },
        { category: "Total Program Cost", cost: "₹40 – 65 Lakh" },
      ]}
      eligibility={[
        "Minimum 50% aggregate in Physics, Chemistry, and Biology at 12th-grade level (40% for reserved categories)",
        "Valid NEET Scorecard (mandatory for admission year)",
        "Minimum 17 years old at the time of admission",
        "Good health condition with medical fitness certificate",
        "Clean criminal background record",
      ]}
      documents={[
        "12th Grade Mark Sheet & Passing Certificate",
        "NEET Scorecard (current year)",
        "Valid Passport",
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
        "Apply for visa (Indian students can enter Nepal with valid ID, visa on arrival)",
        "Receive visa approval and travel itinerary",
        "Airport pickup and university orientation",
        "Begin MBBS program",
      ]}
      hostelFacilities="GVK Edutech provides dedicated Indian hostels with round-the-clock security. Rooms are available on twin-sharing and triple-sharing basis with attached bathrooms. Indian meals are prepared daily by certified Indian chefs ensuring proper nutrition for students. Common areas for study and recreation are available. The hostels are located within campus premises or near the university for convenience and safety."
      costOfLiving="The cost of living in Nepal is affordable for Indian students. Monthly expenses including accommodation, food, transportation, and personal needs range from ₹15,000-₹30,000. International SIM cards and internet are readily available. Public transportation is economical. Shopping for daily needs and Indian groceries is convenient near university areas."
      visaProcess="Indian students do not require a visa to enter Nepal. A valid Indian passport or Aadhar card is sufficient for travel to Nepal. For longer stay and university admission, students need to register with the Foreigners Registration Office within the specified period. GVK Edutech assists with all documentation and registration processes."
      careerOpportunities="After completing MBBS in Nepal, graduates have diverse career paths: practice medicine in India after clearing FMGE/NExT, pursue postgraduate studies (MD/MS) in Nepal, India, USA, UK, or other countries, work in hospitals in Nepal or India, appear for USMLE (USA) or PLAB (UK) for global practice, join medical research institutions, or work in healthcare NGOs. The global recognition of Nepalese medical degrees opens doors to opportunities worldwide."
      curriculum={{
        preClinical: ["Anatomy", "Physiology", "Biochemistry"],
        paraClinical: ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine"],
        clinical: ["General Medicine", "Surgery", "Pediatrics", "OBG", "Psychiatry", "Radiology", "Orthopedics"],
      }}
      universities={[
        { name: "Birat Medical College (KU), Biratnagar", website: "https://biratmedicalcollege.edu.np", logo: "https://biratmedicalcollege.edu.np/wp-content/uploads/2023/09/bmc-logo.png" },
        { name: "B & C Medical College (KU), Birtamod", website: "https://bncmedicalcollege.edu.np", logo: "https://bncmedicalcollege.edu.np/assets/bnc%20logo.png" },
        { name: "Chitwan Medical College (TU), Bharatpur", website: "https://cmc.edu.np" },
        { name: "College of Medical Science (KU), Bharatpur", website: "https://cmsnepal.edu.np", logo: "https://cmsnepal.edu.np/wp-content/uploads/2025/01/cms-logo-new.jpeg" },
        { name: "Devdaha Medical College (KU), Butwal", website: "https://devdahamedicalcollege.edu.np" },
        { name: "Gandaki Medical College (TU), Pokhara", website: "https://gmc.edu.np", logo: "https://gmc.edu.np/images/frontend/logo.png" },
        { name: "Janaki Medical College (TU), Janakpur", website: "https://janakimedicalcollege.edu.np" },
        { name: "Kathmandu Medical College (KU), Kathmandu", website: "https://kmc.edu.np" },
      ]}
      faqs={[
        { question: "Is MBBS in Nepal valid in India?", answer: "Yes, MBBS degree from Nepal is valid in India. All universities are NMC approved, and graduates are eligible to practice in India after clearing the FMGE/NExT exam. The degree is also recognized by WHO, FAIMER, and medical councils of many countries." },
        { question: "What is the fee structure for MBBS in Nepal?", answer: "The total MBBS fees in Nepal range from ₹40-65 lakh for the entire 5.5-year program. Annual tuition fees vary from ₹6-10 lakh. Living expenses are additional at around ₹15,000-30,000 per month." },
        { question: "Is NEET mandatory for MBBS in Nepal?", answer: "Yes, NEET is mandatory for Indian students seeking admission to MBBS in Nepal. A valid NEET scorecard for the current admission year is required as per NMC guidelines for Indian students planning to practice in India after graduation." },
        { question: "How long is MBBS in Nepal?", answer: "MBBS in Nepal is a 5.5-year program consisting of 4.5 years of academic study and 1 year of mandatory internship. Clinical training starts from the third year with hospital rotations." },
        { question: "Is IELTS required for MBBS in Nepal?", answer: "No, IELTS is not required for MBBS in Nepal. The entire MBBS program is conducted in English medium. However, basic English proficiency is expected for effective learning." },
      ]}
      exploreCountries={[
        { name: "Kazakhstan", link: "/mbbs/kazakhstan", flag: "🇰🇿" },
        { name: "Georgia", link: "/mbbs/georgia", flag: "🇬🇪" },
        { name: "Russia", link: "/mbbs/russia", flag: "🇷🇺" },
        { name: "Kyrgyzstan", link: "/mbbs/kyrgyzstan", flag: "🇰🇬" },
        { name: "Uzbekistan", link: "/mbbs/uzbekistan", flag: "🇺🇿" },
        { name: "Vietnam", link: "/mbbs/vietnam", flag: "🇻🇳" },
      ]}
    />
  );
};

export default NepalPage;