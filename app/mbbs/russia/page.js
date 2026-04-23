import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Russia 2026 - Top Medical Universities | GVK EduTech",
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
      heroImage="https://gvkedutech.com/site/assets/images/countries/russia-01.jpg"
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
        { name: "Altai State Medical University" },
        { name: "Amur State Medical Academy" },
        { name: "Astrakhan State Medical University" },
        { name: "Bashkir State Medical University" },
        { name: "Chita State Medical Academy" },
        { name: "Chuvash State University" },
        { name: "Crimean Federal University (CFU)" },
        { name: "Dagestan State Medical University" },
        { name: "Far Eastern Federal University (FEFU)" },
        { name: "First Moscow State Medical University" },
        { name: "Immanuel Kant Baltic Federal University" },
        { name: "Ingush State University" },
        { name: "Irkutsk State Medical University" },
        { name: "Ivanovo State Medical University" },
        { name: "Izhevsk State Medical Academy (ISMA)" },
        { name: "Kabardino-Balkarian State University" },
        { name: "Kadyrov Chechen State University" },
        { name: "Kazan Federal University (KFU)" },
        { name: "Kazan State Medical University" },
        { name: "Kemerovo State Medical University" },
        { name: "Kemerovo State University" },
        { name: "Kirov State Medical University" },
        { name: "Krasnoyarsk State Medical University" },
        { name: "Kuban State Medical University" },
        { name: "Kursk State Medical University" },
        { name: "Lobachevsky State University" },
        { name: "Lomonosov Moscow State University" },
        { name: "Mari State University" },
        { name: "Maykop State University" },
        { name: "Murmansk Arctic State University" },
        { name: "National Nuclear Research University \"MEPhI\" (Moscow Branch)" },
        { name: "National Nuclear Research University \"MEPhI\" (Obninsk Branch)" },
        { name: "N.P. Ogarev Mordovia State University" },
        { name: "North Caucasian State Academy (NCSA)" },
        { name: "North Ossetian State Medical Academy" },
        { name: "North-Western State Medical University" },
        { name: "Northern State Medical University" },
        { name: "Novosibirsk State University" },
        { name: "Omsk State Medical University" },
        { name: "Orel State University" },
        { name: "Orenburg State Medical University" },
        { name: "Pacific State Medical University" },
        { name: "Penza State University" },
        { name: "People's Friendship University \"RUDN\"" },
        { name: "Perm State Medical University" },
        { name: "Petrozavodsk State University" },
        { name: "Pirogov Russian National Research Medical University" },
        { name: "Pitirim Sorokin Syktyvkar State University" },
        { name: "Privolzhsky Research Medical University" },
        { name: "Pskov State University" },
        { name: "Rostov State Medical University" },
        { name: "Ryazan State Medical University" },
        { name: "Saint Petersburg State University of Veterinary Medicine" },
        { name: "Samara State Medical University" },
        { name: "Saratov State Medical University" },
        { name: "Sevastopol State University" },
        { name: "Siberian State Medical University" },
        { name: "Smolensk State Medical University" },
        { name: "South-Ural State Medical University" },
        { name: "Stavropol State Medical University" },
        { name: "Surgut State University" },
        { name: "Synergy University" },
        { name: "Tambov State University" },
        { name: "Tula State University" },
        { name: "Tver State Medical University" },
        { name: "Tyumen State Medical University" },
        { name: "Ulyanovsk State University" },
        { name: "Ural State Medical University" },
        { name: "Volgograd State Medical University" },
        { name: "Voronezh State Medical University" },
        { name: "Yaroslav-the-Wise Novgorod State University" },
        { name: "Yaroslavl State Medical University" },
      ]}
    />
  );
};

export default RussiaPage;
