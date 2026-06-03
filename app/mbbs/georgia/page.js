import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Georgia 2026 | Affordable Medical Education | GVK EduTech",
  description: "Study MBBS in Georgia at WHO/NMC approved medical universities. Affordable fees, English medium education, no donation required. Apply for MBBS in Georgia now.",
  keywords: ["MBBS in Georgia", "study MBBS Georgia", "Georgia medical university", "MBBS abroad Georgia", "MBBS Tbilisi"],
  openGraph: {
    title: "Study MBBS in Georgia | GVK EduTech",
    description: "Study MBBS in Georgia at top-ranked medical universities with affordable fees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Georgia" }],
  },
};

const GeorgiaPage = () => {
  return (
    <CountryPageTemplate
      country="Georgia"
      programType="MBBS"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142235537.png?updatedAt=1778748810531"
      introduction="The capital of Georgia is Tbilisi (Tiflis). The climatic condition is quite pleasant due to the presence of the Black Sea and the large Mountain range. The students can be stress-free because of the suitable environment and resulting quality education with the encouragement of social skills and pleasant personality. The country has a rich historical aspect and was home to several independent kingdoms during classical times."
      climateInfo="The atmosphere of Georgia is a muggy subtropical atmosphere with a large portion of the state having short, gentle winters and long, sweltering summers. The Atlantic Ocean on the east bank of Georgia and the slope nation in the north affect the state's atmosphere. Summer daytime temperatures in Georgia often outperform 95 °F (35 °C)."
      whyChoose={[
        "Georgian universities have fewer fees",
        "IELTS/TOEFL not required at all",
        "Very amicable environment for the students",
        "Affordable place to live with monthly expenses",
        "Georgia includes one of the lowest crime rates in the world",
        "WHO/MCI approved medical universities",
      ]}
      advantages={[
        { text: "Georgian universities have fewer fees." },
        { text: "IELTS/TOEFL not required at all." },
        { text: "Very amicable environment for the students." },
        { text: "Affordable place to live with the monthly expenses." },
        { text: "Georgia includes the most reduced crime percentages in nations on the planet." },
        { text: "WHO/MCI approved medical universities." },
        { text: "No donation required." },
        { text: "Easy admission procedure." },
        { text: "Options are given to the students to pay fees in two installments." },
        { text: "Best salary packages are given to the students." },
        { text: "No tuition fees for last year's course." },
      ]}
      careerOpportunities="Away from the admission processes in India, seeking quality education in Georgia is easy where you get an opportunity to learn the most. Georgia is equipped with cutting-edge technology which gives students all the practical knowledge. A degree from the recognized University can be highly useful for your growth of the career you always dreamt of."
      universities={[
        { name: "Akaki Tsereteli State University", website: "https://atsu.edu.ge", logo: "https://atsu.edu.ge/assets/images/logo_loading.png" },
        { name: "Alte University School of Medicine", website: "https://alte.edu.ge", logo: "https://alte.edu.ge/_next/static/media/white-logo.4d7e8794.svg" },
        { name: "Avicenna - Batumi Medical University", website: "https://avicenna.edu.ge", logo: "https://www.avicenna.edu.ge/images/logo-ge.png" },
        { name: "Batumi Shota Rustaveli State University", website: "https://bsu.edu.ge", logo: "https://bsu.edu.ge/images/logo.png" },
        { name: "BAU International University", website: "https://bau.edu.ge", logo: "https://bau.edu.ge/wp-content/uploads/2024/07/logo.png" },
        { name: "Caucasus International University (CIU)", website: "https://ciu.edu.ge", logo: "https://admin.ciu.edu.ge/uploads/ciu_logo_dfbc4c5b14.svg" },
        { name: "Caucasus University (CU)", website: "https://cu.edu.ge", logo: "https://cu.edu.ge/files/gallery/2024/SLIDER/For%20Web%20-.png" },
        { name: "Central University of Europe, Kutaisi", website: "https://cue.edu.ge", logo: "https://cue.edu.ge/wp-content/uploads/2024/10/logo-cue.png" },
      ]}
      faqs={[
        { question: "Is MBBS from Georgia valid in India?", answer: "Yes. Degrees from NMC/WHO approved Georgian medical universities are valid in India. Graduates can appear for FMGE/NExT and practice." },
        { question: "Is IELTS required for MBBS in Georgia?", answer: "No, most Georgian universities do not require IELTS or TOEFL for admission to MBBS programs." },
        { question: "What is the cost of MBBS in Georgia?", answer: "The total cost ranges from ₹18-35 lakhs, which is significantly lower than private medical colleges in India." },
        { question: "What is the duration of MBBS in Georgia?", answer: "The MBBS program in Georgia typically lasts 6 years including clinical training." },
      ]}
    />
  );
};

export default GeorgiaPage;
