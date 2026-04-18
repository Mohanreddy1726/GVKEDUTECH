import { CountryPageTemplate } from "@/components/CountryPageTemplate";

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
        { name: "Altai State Medical University-Barnaul" },
        { name: "Volgograd State Medical University-Volgograd" },
        { name: "Belgorod State University-Belgorod" },
        { name: "Syktyvkar State University-Syktyvkar" },
      ]}
    />
  );
};

export default RussiaPage;
