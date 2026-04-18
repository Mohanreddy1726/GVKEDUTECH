import { CountryPageTemplate } from "@/components/CountryPageTemplate";

const VietnamPage = () => {
  return (
    <CountryPageTemplate
      country="Vietnam"
      programType="MBBS"
      heroImage="https://gvkedutech.com/site/assets/images/countries/Vietnam.png"
      introduction="Vietnam is rapidly establishing itself as a distinguished hub for medical education, offering Indian students a compelling blend of academic excellence, affordability, and international recognition. With state-of-the-art infrastructure, English-medium programs, and a curriculum aligned with global medical standards, Vietnam presents an ideal environment for aspiring healthcare professionals."
      whyChoose={[
        "Affordable Tuition & Living Costs",
        "NMC & WHO-Recognized Universities",
        "English-Medium Instruction",
        "World-Class Clinical Exposure",
        "Cultural Similarities & Proximity to India",
      ]}
      gvkAdvantages={[
        "No Donation or Capitation Fee",
        "Modern Medical Campus Facilities",
        "Indian Food & Hostel Services by GVK Edutech",
        "Familiar Cuisine & Traditions",
        "High Success Rate in FMGE/NExT Exams",
        "Official Partnerships with Vietnam's Best Universities",
        "24/7 support for students and families",
      ]}
      programStructure={{
        duration: "Six years: 5 in academics, 1 in internship",
        medium: "English (Available in Select Universities)",
      }}
      feeStructure={[
        { category: "Tuition Fee", cost: "Approx. $3,000 – $4,500/year (₹2.5 – ₹3.8 lakh/year)" },
        { category: "Living Expenses", cost: "Approx. $250 – $400/month (₹20,000 – ₹33,000/month)" },
        { category: "Total 5-Year Cost", cost: "Approx. $18,000 – $25,000 (₹15 – ₹20 lakh total)" },
      ]}
      eligibility={[
        "Minimum 70% in PCB subjects in 12th grade exams",
        "NEET Qualification Required",
        "Must be 17 years old or older at the time of admission",
      ]}
      documents={[
        "12th Grade Mark Sheet",
        "NEET Scorecard",
        "Aadhar Card",
        "PAN Card",
        "Valid Passport",
        "Passport-Size Photos",
      ]}
      curriculum={{
        preClinical: ["Anatomy", "Physiology", "Biochemistry"],
        paraClinical: ["Pathology", "Microbiology", "Pharmacology", "Forensic Medicine"],
        clinical: ["Medicine", "Surgery", "OB-GYN", "Paediatrics", "Psychiatry", "Radiology"],
      }}
      universities={[
        { name: "Hanoi Medical University (HMU)" },
        { name: "University of Medicine and Pharmacy at HCMC" },
        { name: "Hue University of Medicine and Pharmacy" },
        { name: "Can Tho University of Medicine and Pharmacy" },
        { name: "Thai Nguyen University of Medicine and Pharmacy" },
        { name: "Hai Phong University of Medicine and Pharmacy" },
        { name: "Pham Ngoc Thach University of Medicine" },
      ]}
      faqs={[
        { question: "Is a medical degree from Vietnam recognised in India and abroad?", answer: "Yes. MBBS degrees from Vietnamese universities partnered with GVK Edutech are recognised by the NMC, WHO, and FAIMER. Graduates are eligible to appear for FMGE/NExT in India and can practice globally." },
        { question: "Is Vietnam a safe and student-friendly country for Indians?", answer: "Yes. Vietnam is a peaceful country with a welcoming environment. GVK Edutech provides secure hostel accommodation and ongoing local support to ensure students' safety and comfort." },
        { question: "Do Indian students get familiar food and a place to stay in Vietnam?", answer: "Absolutely. GVK Edutech offers exclusive Indian food and dedicated hostel facilities near campuses, creating a familiar and supportive environment for students." },
        { question: "What is the total cost of studying MBBS in Vietnam?", answer: "The total estimated cost for the entire course (including tuition and living expenses) ranges from $18,000 to $25,000 (₹15–₹20 lakh approx.)." },
      ]}
    />
  );
};

export default VietnamPage;
