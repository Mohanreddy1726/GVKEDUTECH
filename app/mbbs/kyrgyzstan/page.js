import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Kyrgyzstan 2026 - Top Medical Universities | GVK EduTech",
  description: "Study MBBS in Kyrgyzstan at NMC/WHO approved universities. Affordable fees, English medium, clinical training from 2nd year. Apply for MBBS in Kyrgyzstan now.",
  keywords: ["MBBS in Kyrgyzstan", "study MBBS Kyrgyzstan", "Kyrgyzstan medical university", "MBBS abroad Kyrgyzstan", "cheap MBBS abroad"],
  openGraph: {
    title: "Study MBBS in Kyrgyzstan | GVK EduTech",
    description: "Study MBBS in Kyrgyzstan at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Kyrgyzstan" }],
  },
};

const KyrgyzstanPage = () => {
  return (
    <CountryPageTemplate
      country="Kyrgyzstan"
      programType="MBBS"
      heroImage="https://gvkedutech.com/site/assets/images/countries/kyrgyzstan-01.png"
      introduction="For Indian students aspiring to become doctors, Kyrgyzstan is quickly becoming a leading destination for quality medical education abroad. With globally recognized universities, English-medium instruction, and hands-on clinical training, Kyrgyzstan offers a comprehensive MBBS program at a cost significantly lower than private medical colleges in India. It's an ideal blend of affordability, academic excellence, and global recognition — making it a smart choice for the doctors of tomorrow."
      whyChoose={[
        "Affordable Tuition: Study medicine at a fraction of Indian private college fees",
        "NMC & WHO Recognition: Degrees valid for FMGE/NExT and international practice",
        "English-Medium Programs: Study without the need to learn a new language",
        "Hands-On Hospital Exposure: Clinical training starts as early as the 2nd year",
        "Safe, Supportive Environment: Ideal for Indian students adapting abroad",
      ]}
      gvkAdvantages={[
        "No capitation fees or donations",
        "High FMGE pass rates among graduates",
        "Indian hostels and meals managed by GVK",
        "Economical living with Indian cultural comfort",
        "Official tie-ups with top medical universities",
        "End-to-end admission and visa support",
      ]}
      programStructure={{
        duration: "5 years academics + 1-year internship",
        medium: "English (with bilingual options in some universities)",
      }}
      feeStructure={[
        { category: "Tuition Fee", cost: "Approx. $2,500 – $4,000/year (₹2 – ₹3.5 lakh/year)" },
        { category: "Living Expenses", cost: "Approx. $250 – $400/month (₹20,000 – ₹33,000/month)" },
        { category: "Total Program Cost", cost: "Approx. $15,000 – $22,000 (₹12 – ₹18 lakh approx.)" },
      ]}
      eligibility={[
        "Minimum 70% in 12th Grade (PCB subjects)",
        "NEET qualified (current academic year)",
        "Applicants must be 17 or above on the calendar date of admission",
      ]}
      documents={[
        "12th Grade Mark Sheet",
        "NEET Scorecard",
        "Aadhar Card",
        "PAN Card",
        "Valid Passport",
        "Passport-size Photographs",
      ]}
      curriculum={{
        preClinical: ["Anatomy", "Physiology", "Biochemistry"],
        paraClinical: ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine"],
        clinical: ["General Medicine", "Surgery", "Paediatrics", "OBG", "Psychiatry", "Radiology", "Ophthalmology", "Orthopaedics", "Dermatology"],
      }}
      universities={[
        { name: "International School of Medicine" },
        { name: "KYRGYZ State Medical Academy" },
        { name: "Asian Medical Institute" },
        { name: "Kyrgyz State Medical Academy" },
        { name: "Osh State University" },
        { name: "Jalal-Abad State University" },
      ]}
      faqs={[
        { question: "Is MBBS from Kyrgyzstan valid in India?", answer: "Yes. The degree is valid for FMGE/NExT and global practice. Universities are approved by NMC, WHO, and FAIMER." },
        { question: "What is the eligibility to apply?", answer: "70% in PCB (Class 12), a valid NEET score, and minimum 17 years of age." },
        { question: "Are food and accommodation provided?", answer: "Yes, GVK Edutech offers secure hostels and home-style Indian food for students." },
        { question: "What documents do I need for admission?", answer: "12th Mark Sheet, NEET Scorecard, Aadhar Card, PAN Card, Passport, and Passport-size Photos." },
      ]}
    />
  );
};

export default KyrgyzstanPage;
