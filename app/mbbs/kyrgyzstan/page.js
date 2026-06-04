import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Kyrgyzstan 2026 | Low Cost MBBS",
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
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142254461.png?updatedAt=1778748810723"
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
        { name: "IHSM Central Campus", website: "https://ism.edu.kg", logo: "https://static.tildacdn.one/tild3636-3838-4231-a632-613135383739/EN.svg" },
        { name: "IHSM Issyk-Kul Campus", website: "https://ism.edu.kg", logo: "https://static.tildacdn.one/tild3636-3838-4231-a632-613135383739/EN.svg" },
        { name: "International Medical University", website: "https://imu.edu.kg", logo: "https://imu.edu.kg/uploads/settings/17677111306185.svg" },
        { name: "Jalal-Abad State University", website: "https://jasu.kg/wp-content/uploads/2021/04/jasu-logo-mobile.png" },
        { name: "Kyrgyz National University", website: "https://www.knu.kg/ky/", logo: "https://instagram.fhyd2-2.fna.fbcdn.net/v/t51.82787-19/612245460_17907743706303839_438176025564613691_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby44MDkuYzIifQ&_nc_ht=instagram.fhyd2-2.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gHkonC9PVvFTQ-Gx78cFAAEn9qalMgC3AKbQfMcn9nlKx0smnvt9ix9Gc-o6tKTKxgxOrrLIVbZ8wDvAugSVkUh&_nc_ohc=RdsZ6fD4VZAQ7kNvwGozCuC&_nc_gid=ZNmSYUb0kmvxMzdNp40Wvg&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Af_orufU1hkVqc7bmCEzKWlVdFPflKh1Hn0wSox16jMPAQ&oe=6A25F1D2&_nc_sid=8b3546" },
        { name: "Kyrgyz-Russian Slavic University", website: "https://krsmu.edu.kg", logo: "https://static.tildacdn.one/tild3636-3838-4231-a632-613135383739/EN.svg" },
        { name: "Kyrgyz State Medical Academy", website: "https://ksma.edu.kg", logo: "https://ksma.edu.kg/images/icons/kgma_logo.png?v=2" },
        { name: "Osh International Medical University", website: "https://oimu.kg/en", logo: "https://oimu.kg/imf/assets/img/logo/logo_1.png" },
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
