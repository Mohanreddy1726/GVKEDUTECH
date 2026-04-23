import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Nepal 2026 - Top Medical Universities | GVK EduTech",
  description: "Study MBBS in Nepal at NMC/WHO approved universities. Affordable fees, English medium, cultural proximity. Apply for MBBS in Nepal now.",
  keywords: ["MBBS in Nepal", "study MBBS Nepal", "Nepal medical university", "MBBS abroad Nepal"],
  openGraph: {
    title: "Study MBBS in Nepal | GVK EduTech",
    description: "Study MBBS in Nepal at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Nepal" }],
  },
};

const NepalPage = () => {
  return (
    <CountryPageTemplate
      country="Nepal"
      programType="MBBS"
      heroImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&auto=format&fit=crop"
      introduction="Nepal has emerged as a preferred destination for Indian students seeking quality medical education at affordable costs. With its geographical proximity to India, cultural similarities, and English-medium MBBS programs recognized by NMC and WHO, Nepal offers an ideal environment for aspiring doctors. The country features modern medical colleges equipped with state-of-the-art infrastructure and extensive clinical training opportunities."
      whyChoose={[
        "Geographical Proximity: Easy travel between India and Nepal with no timezone difference",
        "Cultural Similarities: Shared cultural heritage makes adaptation easier for Indian students",
        "Affordable Education: Cost-effective MBBS programs compared to private colleges in India",
        "NMC & WHO Recognized: Degrees valid for FMGE/NExT and international practice",
        "English Medium Instruction: All major universities offer MBBS in English",
        "Safe Environment: Nepal is known for its peaceful and student-friendly atmosphere",
      ]}
      gvkAdvantages={[
        "No Donation or Capitation Fees",
        "Assistance with Documentation & Visa",
        "Indian Food & Hostel Services by GVK",
        "High FMGE/NExT Pass Rate",
        "24/7 Student & Parent Support",
        "End-to-End Admission Support",
      ]}
      programStructure={{
        duration: "4.5 Years (Academic) + 1 Year (Internship)",
        medium: "English (with Nepali language support during clinical rotations)",
      }}
      feeStructure={[
        { category: "Tuition Fee", cost: "Approx. ₹30-50 Lakh (Total Course)" },
        { category: "Living Expenses", cost: "Approx. ₹10-15 Lakh (Total)" },
        { category: "Total Program Cost", cost: "Approx. ₹40-65 Lakh" },
      ]}
      eligibility={[
        "Minimum 50% in Physics, Chemistry, and Biology at the 12th-grade level",
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
        preClinical: ["Anatomy", "Physiology", "Biochemistry"],
        paraClinical: ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine"],
        clinical: ["General Medicine", "Surgery", "Pediatrics", "OBG", "Psychiatry", "Radiology", "Orthopedics"],
      }}
      universities={[
        { name: "Birat Medical College (KU), Biratnagar" },
        { name: "B & C Medical College (KU), Birtamod" },
        { name: "Chitwan Medical College (TU), Bharatpur" },
        { name: "College of Medical Science (KU), Bharatpur" },
        { name: "Devdaha Medical College (KU), Butwal" },
        { name: "Gandaki Medical College (TU), Pokhara" },
        { name: "Janaki Medical College (TU), Janakpur" },
        { name: "Kathmandu Medical College (KU), Kathmandu" },
        { name: "Kathmandu University (KUSMS), Dhulikhel" },
        { name: "Karnali Academy of Health Science, Karnali" },
        { name: "KIST Medical College (TU), Kathmandu" },
        { name: "Lumbini Medical College (KU), Palpa" },
        { name: "Manipal College of Medical Science (KU), Pokhara" },
        { name: "National Medical College (TU), Birgunj" },
        { name: "Nepal Medical College (KU), Kathmandu" },
        { name: "Nepalgunj Medical College (KU), Nepalgunj" },
        { name: "Nobel Medical College (KU), Biratnagar" },
        { name: "Universal Medical College (TU), Bhairahawa" },
      ]}
      faqs={[
        { question: "Is MBBS from Nepal valid in India?", answer: "Yes. Degrees from NMC/WHO approved Nepalese medical universities are valid in India. Graduates can appear for FMGE/NExT and practice in India or globally." },
        { question: "What are the eligibility criteria?", answer: "Students must have a minimum of 50% in PCB (40% for reserved categories), a valid NEET scorecard, and be at least 17 years old." },
        { question: "Is Indian food available in Nepal?", answer: "Yes. GVK Edutech provides Indian food mess facilities at partner institutions, and many hostels offer Indian cuisine." },
        { question: "What documents are needed for admission?", answer: "12th Mark Sheet, NEET Scorecard, Passport, Aadhar Card, PAN Card, and Passport-size Photographs." },
      ]}
    />
  );
};

export default NepalPage;