import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Georgia 2026 - Top Medical Universities | GVK EduTech",
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
      heroImage="https://gvkedutech.com/site/assets/images/countries/georgia-01.jpg"
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
        { name: "Akaki Tsereteli State University" },
        { name: "Alte University School of Medicine" },
        { name: "Avicenna - Batumi Medical University" },
        { name: "Batumi Shota Rustaveli State University" },
        { name: "BAU International University" },
        { name: "Caucasus International University (CIU)" },
        { name: "Caucasus University (CU)" },
        { name: "Central University of Europe, Kutaisi" },
        { name: "Central University of Europe, Tbilisi" },
        { name: "David Tvildiani Medical University (DTMU)" },
        { name: "East European University (EEU)" },
        { name: "East-West University (EWU)" },
        { name: "European University (EU)" },
        { name: "Geomedi University" },
        { name: "Georgian American University (GAU)" },
        { name: "Georgian National University (SEU)" },
        { name: "Grigol Robakidze University" },
        { name: "International Black Sea University" },
        { name: "Ilia State University" },
        { name: "Ivane Javakhishvili Tbilisi State University" },
        { name: "New Vision University" },
        { name: "Petre Shotadze Tbilisi Medical Academy" },
        { name: "Tbilisi State Medical University (TSMU)" },
        { name: "University of Georgia (UG)" },
      ]}
    />
  );
};

export default GeorgiaPage;
