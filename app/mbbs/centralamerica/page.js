import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "MBBS in Central America for Indian Students 2026 | Emerging NMC-Listed Destination",
  description: "Explore MBBS in Central America for Indian students — English-medium programs, affordable fees, and emerging NMC-listed medical universities. Admissions open for 2026 batch.",
  keywords: [
    "MBBS in Central America",
    "MBBS in Central America for Indian students",
    "study MBBS in Central America",
    "Central America medical universities",
    "MBBS abroad Central America",
    "affordable MBBS Central America",
    "NMC approved universities Central America",
    "English medium MBBS Central America",
  ],
  openGraph: {
    title: "MBBS in Central America for Indian Students | GVK EduTech",
    description: "Emerging MBBS destination in Central America — English-medium programs, affordable fees, NMC-recognised pathway for Indian students.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Central America" }],
  },
};

const CentralAmericaPage = () => {
  return (
    <CountryPageTemplate
      country="Central America"
      programType="MBBS"
      customHeading="MBBS in Central America for Indian Students 2026"
      heroImage="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1600&auto=format&fit=crop"
      introduction="Central America is fast emerging as a new MBBS destination for Indian students seeking affordable, English-medium medical education in a tropical setting. With universities in Belize, Guyana-bordering regions, and the Caribbean basin offering NMC-recognised programs, students get a globally accepted MBBS degree at a fraction of the cost of private Indian colleges. The region offers a welcoming multicultural environment, modern teaching hospitals, and clinical exposure to a wide range of medical cases — preparing graduates for FMGE/NExT in India or postgraduate opportunities worldwide."
      whyChoose={[
        "Affordable MBBS Fees: Total program cost ₹18–28 lakh — significantly lower than Indian private colleges",
        "English Medium: Entire MBBS program taught in English",
        "NMC / WHO Pathway: Select universities listed with NMC and recognised by WHO",
        "Tropical Clinical Exposure: Diverse case-mix across tropical and infectious medicine",
        "Safe, Welcoming Region: Stable democracies with established Indian student communities",
        "No Donation / Capitation: Transparent fee structure",
        "Cultural Diversity: Spanish, English, and Creole-speaking host countries for a global experience",
      ]}
      gvkAdvantages={[
        "No Donation or Capitation Fees",
        "End-to-end Admission & Documentation Support",
        "Assistance with Education Loan Processing",
        "Indian Hostel & Mess Arrangements",
        "Dedicated FMGE / NExT Coaching Tie-ups",
        "24/7 Student & Parent Support Helpline",
        "Mentorship by Dr. Vidya Kumar Gundala",
        "Airport Pickup & University Orientation",
      ]}
      programStructure={{
        duration: "5–6 Years (4.5–5 Years Academic + 1 Year Internship)",
        medium: "English (with basic local-language modules for clinical practice)",
        details: "Pre-clinical sciences are covered in the first two years, followed by para-clinical and clinical rotations in affiliated teaching hospitals from year three onwards. Students gain hands-on experience across internal medicine, surgery, paediatrics, and community health.",
      }}
      feeStructure={[
        { category: "Tuition Fees (Per Year)", cost: "$3,000 – $5,000 (₹2.5 – ₹4 lakh)" },
        { category: "Living Expenses (Per Month)", cost: "$300 – $500 (₹25,000 – ₹40,000)" },
        { category: "Total Program Cost (5–6 Years)", cost: "$18,000 – $32,000 (₹18 – ₹28 lakh)" },
      ]}
      eligibility={[
        "Minimum 60% aggregate in Physics, Chemistry, and Biology at 12th-grade level",
        "Valid NEET Scorecard (mandatory for Indian students)",
        "Minimum 17 years old at the time of admission",
        "Good health condition with medical fitness certificate",
        "Clean criminal background record",
        "Basic English proficiency (no IELTS required for most universities)",
      ]}
      documents={[
        "12th Grade Mark Sheet & Passing Certificate",
        "NEET Scorecard (current year)",
        "Valid International Passport (min 18 months validity)",
        "Aadhar Card",
        "PAN Card",
        "Passport-Sized Photographs (10 copies with white background)",
        "Medical Fitness Certificate",
        "Police Clearance Certificate",
      ]}
      admissionProcess={[
        "Submit application form with academic documents to GVK",
        "Receive admission shortlist from partner universities",
        "Pay initial tuition fee to confirm admission",
        "Apply for student visa (GVK handles full documentation)",
        "Receive visa approval and book travel",
        "Airport pickup and on-ground orientation",
        "Begin MBBS program",
      ]}
      hostelFacilities="GVK Edutech arranges dedicated accommodation options with round-the-clock security. Rooms are available on twin-sharing and triple-sharing basis with attached bathrooms. Indian meals are available either through on-campus mess tie-ups or nearby Indian restaurants. Common areas for study and recreation are provided. Hostels are located close to the university campus for safety and convenience."
      costOfLiving="The cost of living in Central America is affordable for Indian students. Monthly expenses including accommodation, food, transportation, and personal needs range from $250–$450 (₹20,000–₹38,000). Local markets, public transport, and Indian grocery stores are widely available. Internet and mobile connectivity are reliable across university towns."
      visaProcess="Indian students require a student visa to study MBBS in Central America. The process involves: receiving an admission letter from the partner university, submitting a visa application with required documents (passport, admission letter, financial proof, medical certificates). GVK Edutech provides complete visa documentation support. Processing time is typically 3–5 weeks depending on the host country."
      careerOpportunities="After completing MBBS in Central America, graduates have diverse career paths: practise medicine in India after clearing FMGE/NExT, pursue postgraduate studies (MD/MS) in the USA, UK, or other countries, work in hospitals across the Caribbean and Latin America, appear for USMLE (USA) or PLAB (UK) for global practice, join medical research institutions, or work with international healthcare NGOs. The international recognition of the degree opens doors across multiple continents."
      climateInfo="Central America has a tropical climate with warm temperatures year-round (24–32°C). The region experiences a distinct wet and dry season rather than the four-season cycle. The climate is generally pleasant and similar in feel to many parts of India, making it comfortable for Indian students."
      universities={[
        { name: "Bridgetown International University (BIU), Barbados", website: "https://biu.edu.bb", logo: "" },
        { name: "Central American Health Sciences University (Belize)", website: "https://cahsu.edu.bz", logo: "" },
        { name: "Washington University of Health and Sciences (Belize)", website: "https://wuhs.edu", logo: "" },
        { name: "Medical University of the Americas (Belize / Nevis)", website: "https://mua.edu", logo: "" },
        { name: "International American University College of Medicine", website: "https://iau.edu", logo: "" },
      ]}
      faqs={[
        { question: "Is MBBS in Central America valid in India?", answer: "Yes, MBBS degrees from NMC-recognised universities in Central America are valid in India. Graduates are eligible to practise in India after clearing the FMGE/NExT exam. Confirm NMC recognition for the specific university before applying." },
        { question: "What is the fee structure for MBBS in Central America?", answer: "Total MBBS fees for the entire 5–6 year program range from ₹18–28 lakh. Annual tuition fees are approximately $3,000–$5,000 (₹2.5–₹4 lakh). Living expenses are additional at around ₹25,000–₹40,000 per month." },
        { question: "Is NEET mandatory for MBBS in Central America?", answer: "Yes, NEET is mandatory for Indian students seeking admission to MBBS abroad as per NMC guidelines. A valid NEET scorecard for the current admission year is required." },
        { question: "How long is MBBS in Central America?", answer: "MBBS in Central America is typically a 5–6 year program consisting of 4.5–5 years of academic study and a 1-year mandatory internship. Clinical training begins from the third year." },
        { question: "Is IELTS required for MBBS in Central America?", answer: "No, IELTS is not required for most MBBS programs in Central America. The entire curriculum is delivered in English. Basic conversational English is sufficient for daily life and clinical practice." },
        { question: "Is Central America safe for Indian students?", answer: "Yes, university towns in Belize and neighbouring Central American countries have established Indian student communities and are considered safe. GVK provides 24/7 support and on-ground orientation to help students settle in quickly." },
      ]}
      exploreCountries={[
        { name: "Georgia", link: "/mbbs/georgia", flag: "🇬🇪" },
        { name: "Russia", link: "/mbbs/russia", flag: "🇷🇺" },
        { name: "Kyrgyzstan", link: "/mbbs/kyrgyzstan", flag: "🇰🇬" },
        { name: "Kazakhstan", link: "/mbbs/kazakhstan", flag: "🇰🇿" },
        { name: "Nepal", link: "/mbbs/nepal", flag: "🇳🇵" },
        { name: "Uzbekistan", link: "/mbbs/uzbekistan", flag: "🇺🇿" },
        { name: "Vietnam", link: "/mbbs/vietnam", flag: "🇻🇳" },
      ]}
    />
  );
};

export default CentralAmericaPage;
