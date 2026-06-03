import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Russia 2026 | NMC-Approved Universities | GVK EduTech",
  description: "Study MBBS in Russia at top-ranked universities. Affordable fees, NMC/WHO approved, advanced labs. Apply for MBBS in Russia now.",
  keywords: ["MBBS in Russia", "study MBBS Russia", "Russia medical university", "MBBS abroad Russia"],
  openGraph: {
    title: "Study MBBS in Russia | GVK EduTech",
    description: "Study MBBS in Russia at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Russia" }],
  },
};

const RussiaPage = () => {
  return (
    <CountryPageTemplate
      country="Russia"
      programType="MBBS"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142244856.png?updatedAt=1778748810968"
      introduction="Russia is the largest country within the world, the ninth-most populous country, also because of the most populous country in Europe. Russia, a country that stretches over an enormous expanse of eastern Europe and northern Asia. Russia may be a land of superlatives for and faraway from the world's largest country, it covers nearly twice the territory of Canada, the second largest."
      climateInfo="A past of wars and insurgency pushed the nation to advance in innovation and clinical necessities. The topographically huge regions of the nation show record outrageous temperatures in summer at a boiling 45°C to a freezing -70°C too. Russia has consistently stepped up as one of the most dynamic nations working and picking up knowledge in space."
      whyChoose={[
        "Most colleges are Government Universities of Russia",
        "Simple Visa Process",
        "High Caliber of instruction leading to superior MCI screening test results",
        "Exclusive standard of living",
        "WHO confirmed medical programs",
        "Low accommodation and educational expenses",
      ]}
      advantages={[
        { text: "The vast majority of the colleges are Government Universities of Russia." },
        { text: "Simple Visa Process." },
        { text: "High Caliber of instruction which prompts superior outcomes in MCI screening tests." },
        { text: "The exclusive requirement of living." },
        { text: "WHO confirmed compositions." },
        { text: "Low inn and educational expenses." },
        { text: "Hassle-free affirmation measure." },
        { text: "No need for any test." },
      ]}
      careerOpportunities="Emergency clinic Management - After finishing MBBS from Russia, the understudies can choose a postgraduate course in the emergency clinic on the board. MBBS graduates can join various exploration associations for seeking employment in research-situated chances. Government occupations - MBBS specialists can seek employment in government just as private areas in any nation of the world. The understudies can select finishing specialization programs in their particular fields and join emergency clinics as Specialists."
      universities={[
        { name: "Immanuel Kant Baltic Federal University", website: "https://kantiana.ru" },
        { name: "Ingush State University", website: "https://inggu.ru" },
        { name: "Kadyrov Chechen State University", website: "https://csu.ru" },
        { name: "Kazan Federal University (KFU)", website: "https://kpfu.ru" },
        { name: "Krasnoyarsk State Medical University", website: "https://krasgmu.ru" },
        { name: "Kuban State Medical University", website: "https://ksma.ru" },
        { name: "Lobachevsky State University", website: "https://unn.ru" },
        { name: "Lomonosov Moscow State University", website: "https://msu.ru" },
      ]}
      faqs={[
        { question: "Is MBBS from Russia valid in India?", answer: "Yes. Degrees from NMC/WHO approved Russian medical universities are valid in India. Graduates can appear for FMGE/NExT and practice." },
        { question: "What is the cost of MBBS in Russia?", answer: "The total cost ranges from ₹15-40 lakhs depending on the university, which is lower than private Indian medical colleges." },
        { question: "Is MBBS in Russia taught in English?", answer: "Yes, most Russian universities offer MBBS programs entirely in English for international students." },
        { question: "What is the duration of MBBS in Russia?", answer: "The MBBS program in Russia typically lasts 6 years including clinical training." },
      ]}
    />
  );
};

export default RussiaPage;
