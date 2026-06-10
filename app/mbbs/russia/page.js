import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "MBBS in Russia for Indian Students 2026 | Top NMC Approved Universities",
  description: "Study MBBS in Russia at NMC/WHO approved medical universities. Affordable fees starting from ₹15 lakh, English medium, world-class infrastructure. Apply now for 2026 batch.",
  keywords: [
    "MBBS in Russia",
    "MBBS in Russia fees",
    "study MBBS in Russia",
    "MBBS in Russia for Indian students",
    "medical universities in Russia",
    "NMC approved universities in Russia",
    "MBBS abroad Russia",
    "Russia medical university fees",
    "study medicine in Russia",
  ],
  openGraph: {
    title: "MBBS in Russia for Indian Students | GVK EduTech",
    description: "Study MBBS in Russia at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Russia" }],
  },
};

const RussiaPage = () => {
  return (
    <CountryPageTemplate
      country="Russia"
      programType="MBBS"
      customHeading="MBBS in Russia for Indian Students 2026"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142244856.png?updatedAt=1778748810968"
      introduction="Russia has established itself as a premier destination for Indian students seeking world-class medical education. As the largest country in the world, Russia offers access to some of the oldest and most prestigious medical universities with cutting-edge infrastructure and advanced medical research facilities. Russian medical universities are recognized by NMC, WHO, FAIMER, and other international medical bodies, making the MBBS degree valid for practice in India and globally. The country provides affordable MBBS fees compared to private medical colleges in India, with English-medium instruction and comprehensive clinical training."
      whyChoose={[
        "World-Class Government Universities: Most medical universities are prestigious government institutions",
        "NMC/WHO/FAIMER Recognized: Degrees accepted for medical practice in India and globally",
        "English Medium: MBBS programs entirely in English for international students",
        "Advanced Infrastructure: State-of-the-art hospitals and research laboratories",
        "Affordable Fees: Cost-effective education compared to Indian private medical colleges",
        "Simple Visa Process: Straightforward student visa application process",
        "High FMGE Pass Rate: Excellent track record in medical licensing exams",
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
        medium: "English (with Russian language training for clinical practice)",
        details: "Clinical training begins from the 2nd year with hospital rotations under senior doctors. Students get hands-on experience in affiliated hospitals.",
      }}
      feeStructure={[
        { category: "Tuition Fees (Per Year)", cost: "$3,500 – $6,000 (₹3 – ₹5 lakh)" },
        { category: "Living Expenses (Per Month)", cost: "$300 – $500 (₹25,000 – ₹40,000)" },
        { category: "Total Program Cost (6 Years)", cost: "$25,000 – $40,000 (₹20 – ₹35 lakh)" },
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
      costOfLiving="The cost of living in Russia is affordable for Indian students. Monthly expenses including accommodation, food, transportation, and personal needs range from $250-$400 (₹20,000-₹35,000). International SIM cards and internet are readily available. Public transportation including metro in major cities is economical. Shopping for daily needs and Indian groceries is convenient near university areas."
      visaProcess="Indian students require a student visa to study MBBS in Russia. The process involves: receiving admission letter from the university, submitting visa application with required documents including passport, admission letter, financial proof, and medical certificates. GVK Edutech assists with the complete visa documentation process. Processing time is typically 2-4 weeks."
      careerOpportunities="After completing MBBS in Russia, graduates have diverse career paths: practice medicine in India after clearing FMGE/NExT, pursue postgraduate studies (MD/MS) in Russia, USA, UK, or other countries, work in hospitals in Russia or Gulf countries, appear for USMLE (USA) or PLAB (UK) for global practice, join medical research institutions, or work in healthcare NGOs. The global recognition of Russian medical degrees opens doors to opportunities worldwide."
      climateInfo="Russia has a diverse climate ranging from temperate to arctic. Summer temperatures can reach 35-40°C in some regions, while winters can be extremely cold reaching -30°C to -40°C in northern areas. Most university cities have moderate climates suitable for Indian students."
      universities={[
        { name: "Immanuel Kant Baltic Federal University", website: "https://kantiana.ru" },
        { name: "Kazan Federal University (KFU)", website: "https://kpfu.ru" },
        { name: "Krasnoyarsk State Medical University", website: "https://krasgmu.ru" },
        { name: "Kuban State Medical University", website: "https://ksma.ru" },
        { name: "Lobachevsky State University", website: "https://unn.ru" },
        { name: "Lomonosov Moscow State University", website: "https://msu.ru" },
        { name: "First Moscow State Medical University", website: "https://mxsm.ru" },
        { name: "Saint Petersburg State Medical University", website: "https://spmu.ru" },
      ]}
      faqs={[
        { question: "Is MBBS in Russia valid in India?", answer: "Yes, MBBS degree from Russia is valid in India. All universities are NMC approved, and graduates are eligible to practice in India after clearing the FMGE/NExT exam. The degree is also recognized by WHO, FAIMER, and medical councils of many countries." },
        { question: "What is the fee structure for MBBS in Russia?", answer: "The total MBBS fees in Russia range from ₹20-35 lakh for the entire 6-year program. Annual tuition fees are approximately $3,500-$6,000 (₹3-5 lakh). Living expenses are additional at around ₹25,000-40,000 per month." },
        { question: "Is NEET mandatory for MBBS in Russia?", answer: "Yes, NEET is mandatory for Indian students seeking admission to MBBS in Russia. A valid NEET scorecard for the current admission year is required as per NMC guidelines for Indian students planning to practice in India after graduation." },
        { question: "How long is MBBS in Russia?", answer: "MBBS in Russia is a 6-year program consisting of 5 years of academic study and 1 year of mandatory internship. Clinical training starts from the second year with hospital rotations." },
        { question: "Is IELTS required for MBBS in Russia?", answer: "No, IELTS is not required for MBBS in Russia. The entire MBBS program is conducted in English medium. However, basic English proficiency is expected for effective learning." },
      ]}
    />
  );
};

export default RussiaPage;
