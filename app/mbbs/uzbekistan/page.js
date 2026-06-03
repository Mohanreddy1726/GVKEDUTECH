import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Uzbekistan 2026 | Top Medical Colleges | GVK EduTech",
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
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-15_114749638.png?updatedAt=1778825875602"
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
        { name: "Asia International University", website: "https://aiu.uz", logo: "https://aiu.uz/logo_aiu.svg" },
        { name: "Andijan State Medical Institute", website: "https://adti.uz", logo: "https://adti.uz/templates/adti/images/logo.png" },
        { name: "Bukhara State Medical Institute", website: "https://bukharasmi.com", logo: "https://bukharasmi.com/wp-content/uploads/2024/10/Bukhara-Medical-University-Logo-300x77-1.webp" },
        { name: "Fergana Medical Institute of Public Health", website: "https://fergana.uz", logo: "https://scontent.fhyd14-5.fna.fbcdn.net/v/t39.30808-1/474490802_1053742276782670_3531863839564651044_n.jpg?stp=c300.0.1448.1448a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=jBTuHHizFz4Q7kNvwEC9aTp&_nc_oc=Adp7z1fi6mTwQlrcX2FoOU3bEf9shHoepxzVQUv4Q_EhKp7985ucJXDmudu-JGIGfs53gPw9gCgFN-XNveZ_TqEw&_nc_zt=24&_nc_ht=scontent.fhyd14-5.fna&_nc_gid=mt4xfXloApSVQ36AkMxtyw&_nc_ss=7b2a8&oh=00_Af6gyFHAlvhnEQzRMRu1XZmHgKvWUhCz7AM65JU2UFjo_g&oe=6A0E389C" },
        { name: "Karakalpakstan Medical Institute", website: "https://kkmi.uz", logo: "https://kkmi.uz/wp-content/uploads/2024/06/cropped-logo_qmi_2-1.png" },
        { name: "Namangan State University", website: "https://namdu.uz", logo: "https://namdu.uz/media/settings/main/2024/02/01/logo-200x200.png" },
        { name: "Samarkand State Medical University", website: "https://samarkand.uz", logo: "https://samarkand.uz/templates/dreamzero/img/gerb-flag.png" },
        { name: "Tashkent Medical Academy", website: "https://tsmu.co.in", logo: "https://www.tsmu.co.in/assets/logo-DZCgxLn-.png" },
      ]}
      faqs={[
        { question: "Is MBBS from Uzbekistan valid in India?", answer: "Yes. Degrees from NMC/WHO approved Uzbek medical universities are valid in India. Graduates can appear for FMGE/NExT and practice." },
        { question: "What is the cost of MBBS in Uzbekistan?", answer: "The total cost ranges from ₹12-25 lakhs, making it one of the most affordable MBBS destinations abroad." },
        { question: "Is Indian food available in Uzbekistan?", answer: "Yes, most universities provide Indian mess facilities and vegetarian options for Indian students." },
        { question: "What is the duration of MBBS in Uzbekistan?", answer: "The MBBS program in Uzbekistan typically lasts 6 years including clinical training." },
      ]}
    />
  );
};

export default UzbekistanPage;
