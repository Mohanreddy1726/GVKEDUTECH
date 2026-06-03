import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Vietnam 2026 | Asian Medical Destination | GVK EduTech",
  description: "Study MBBS in Vietnam at WHO listed universities. Affordable fees, clinical exposure, tropical medicine focus. Apply for MBBS in Vietnam now.",
  keywords: ["MBBS in Vietnam", "study MBBS Vietnam", "Vietnam medical university", "MBBS abroad Vietnam"],
  openGraph: {
    title: "Study MBBS in Vietnam | GVK EduTech",
    description: "Study MBBS in Vietnam at affordable fees with WHO listed degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Vietnam" }],
  },
};

const VietnamPage = () => {
  return (
    <CountryPageTemplate
      country="Vietnam"
      programType="MBBS"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114910639.png?updatedAt=1778825958215"
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
        { name: "Hanoi Medical University (HMU)", website: "https://hmu.edu.vn", logo: "https://hmu.edu.vn/assets/img/Logoo.png" },
        { name: "University of Medicine and Pharmacy at HCMC", website: "https://ump.edu.vn", logo: "https://scontent.fhyd14-3.fna.fbcdn.net/v/t39.30808-1/500656416_1758237908319198_3989486668577267209_n.png?stp=dst-png_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=xRWZjAeunMsQ7kNvwGOE-ay&_nc_oc=AdryYc5mRUH_dh8GrkXsFZMRtkZsOtu3NnHsIk-Rtht69hw88PkY_sQHuVD1o31szqipH2NrKa4VCvBu5TVOp7BK&_nc_zt=24&_nc_ht=scontent.fhyd14-3.fna&_nc_gid=70QkkKu88bYby8mqnhnzbw&_nc_ss=7b2a8&oh=00_Af6XvwEgTrhpZdoFvv-TxR5p7voVT3BrlV1pUZMX2MKt-w&oe=6A0E1B5E" },
        { name: "Hue University of Medicine and Pharmacy", website: "https://old.huemed-univ.edu.vn/en/", logo: "https://old.huemed-univ.edu.vn/en/images/logo.png" },
        { name: "Can Tho University of Medicine and Pharmacy", website: "https://ctump.edu.vn", logo: "https://media.ctump.edu.vn/Media/1_TH1076/FolderFunc/202403/Images/logo-ctump-headee-20240325094834-e.png" },
        { name: "Thai Nguyen University of Medicine and Pharmacy", website: "https://en.tump.edu.vn", logo: "https://en.tump.edu.vn/public/frontend/images/logo.png" },
        { name: "Hai Phong University of Medicine and Pharmacy", website: "https://hpmu.edu.vn", logo: "https://hpmu.edu.vn/hpmu/images/hpmu_1.png" },
        { name: "Pham Ngoc Thach University of Medicine", website: "https://pnt.edu.vn", logo: "https://pnt.edu.vn/Resources/Images/Subdomain/HomePage/logo/logo.png" },
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
