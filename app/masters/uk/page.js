import { CountryPageTemplate } from "@/components/CountryPageTemplate";

const UKPage = () => {
  return (
    <CountryPageTemplate
      country="United Kingdom"
      programType="Masters"
      heroImage="https://gvkedutech.com/site/assets/images/countries/UK-University.jpg"
      introduction="Indian students can pursue a Master of Medicine (MMed) or related postgraduate degrees in the UK, which offer advanced clinical and research training. These degrees are ideal for medical graduates seeking specialisation, academic careers, or leadership roles in healthcare. The UK boasts a robust medical system and prestigious institutions, making it a desirable destination for postgraduate studies."
      whyChoose={[
        "Eligibility: Recognized medical degree (MBBS or equivalent) usually required",
        "Language Proficiency: IELTS 6.5-7.5 overall or TOEFL/PTE Academic",
        "Tuition Fees: £10,300 to £35,000 per year depending on program",
        "Course Duration: Typically 1-2 years full-time; part-time options available",
        "Scholarships available: University, Chevening, Commonwealth, and others",
      ]}
      gvkAdvantages={[
        "250+ University Partners",
        "Expert guidance on GMC registration",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "End-to-end application support",
      ]}
      courseOptions={[
        { level: "Postgraduate Diploma / Master's", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.5+, relevant experience" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, 2+ years experience, IELTS 6.5+, GMAT" },
        { level: "PhD / Research Programs", duration: "3–4 years", requirements: "Master's degree, research proposal, IELTS 7.0+" },
      ]}
      specializations={[
        "Clinical Research & Clinical Practice",
        "Medical Education",
        "Health Leadership",
        "Public Health",
        "Molecular Medicine",
        "Surgical Science",
        "Global Health Policy",
        "Clinical Neuroscience",
      ]}
      scholarships={[
        "University-Specific Scholarships",
        "Chevening Scholarships",
        "Commonwealth Scholarships",
        "GREAT Scholarships",
        "Research Council Funding",
      ]}
      universities={[
        { name: "Middlesex University London" },
        { name: "University of Hertfordshire" },
        { name: "Heriot Watt University" },
        { name: "University of Worcester" },
        { name: "Anglia Ruskin University" },
        { name: "London South Bank University" },
        { name: "University of Dundee" },
        { name: "Cardiff Metropolitan University" },
      ]}
    />
  );
};

export default UKPage;
