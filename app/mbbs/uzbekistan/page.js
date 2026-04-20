import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Uzbekistan 2026 - Top Medical Universities | GVK EduTech",
  description: "Study MBBS in Uzbekistan at affordable fees. NMC/WHO approved, English medium, quality education. Apply for MBBS in Uzbekistan now.",
  keywords: ["MBBS in Uzbekistan", "study MBBS Uzbekistan", "Uzbekistan medical university", "MBBS abroad Uzbekistan"],
  openGraph: {
    title: "Study MBBS in Uzbekistan | GVK EduTech",
    description: "Study MBBS in Uzbekistan at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Uzbekistan" }],
  },
};

const UzbekistanPage = () => {
  return (
    <CountryPageTemplate
      country="Uzbekistan"
      programType="MBBS"
      heroImage="https://gvkedutech.com/site/assets/images/countries/uzbekistan.jpg"
      introduction="Uzbekistan is a nation in Central Asia. It is encircled by five landlocked nations: Kazakhstan toward the north; Kyrgyzstan toward the upper east; Tajikistan toward the southeast; Afghanistan toward the south and Turkmenistan toward the south-west. The capital and biggest city of Uzbekistan is Tashkent."
      climateInfo="The atmosphere in Uzbekistan broadly relates to the German climate conditions. It is cool, wet and a couple of pleasant late spring months are also occurring. A while of the year it is warm to hot at temperatures consistently over 25 degrees centigrade, at times up to 37 degrees. The best opportunity for venturing out is from May to September."
      whyChoose={[
        "Uzbekistan is a social and chronicled nation that offers an interesting climate for study",
        "Well developed and advantageous transportation framework",
        "MBBS at reasonable charge rates (around 14-15 lacs total)",
        "Easy admission procedure with no entrance exams",
        "Globally recognized degrees - practice anywhere in the world",
        "Universities recognized by WHO and Medical Councils of India, America, and Australia",
      ]}
      advantages={[
        { text: "Uzbekistan is a social and chronicled nation that offers an interesting climate for study." },
        { text: "Uzbekistan has very much evolved and advantageous transportation framework." },
        { text: "Uzbekistan is offering MBBS at reasonable charge rates. The expense is around 14-15 lacs including educational expenses, lodging charges, and other everyday costs." },
        { text: "Getting confirmation in MBBS in Uzbekistan is exceptionally simple as there is no compelling reason to breeze through any passage assessment." },
        { text: "The MBBS moves on from Uzbekistan are perceived everywhere in the world." },
        { text: "The colleges of Uzbekistan are perceived by the WHO and Medical Councils of India, America, and Australia." },
        { text: "The school personnel in Universities are very much qualified and specialists in their fields." },
        { text: "Global understudy discovers excellent training while at the same time seeking after MBBS in Uzbekistan." },
        { text: "The understudies can pick to remain in college inns or lease a loft." },
        { text: "The lodgings of the Universities are well-outfitted with the most recent offices." },
        { text: "Separate lodging for young ladies and young men are given on the University grounds." },
        { text: "For the help of Indian understudies, colleges have Indian food wreck." },
      ]}
      careerOpportunities="Students who are eligible can check the postgraduate options after acquiring the MBBS degree from Uzbekistan. Indian students can check the eligibility criteria for doing PG courses from India also from foreign Universities after getting the MBBS degree from Uzbekistan University. On completion of the course from MCI approved University in Uzbekistan, Indian students can practice in India. If you're keen on Uzbekistan and need to settle here, you can practice in Uzbekistan after completing your MBBS course."
      universities={[
        { name: "East European University" },
        { name: "Georgian American University" },
        { name: "Tashkent Medical Academy" },
        { name: "Samarkand State Medical University" },
      ]}
    />
  );
};

export default UzbekistanPage;
