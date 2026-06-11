import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study in USA for Indian Students 2026 | Masters in USA",
  description: "Pursue your Masters in USA at top US universities. STEM OPT up to 3 years, world-class research. Complete admission guide for international students.",
  keywords: [
    "Masters in USA",
    "study Masters in USA",
    "USA universities",
    "student visa USA",
    "STEM OPT",
    "scholarships for Indian students",
    "cost of living in USA",
    "international students USA",
    "English language requirements USA",
    "part-time jobs USA",
    "work opportunities USA",
    "top universities USA",
    "Indian students USA",
    "USA Masters admission",
    "post-study work visa USA",
  ],
  openGraph: {
    title: "Study Masters in USA for Indian Students | GVK EduTech",
    description: "Study Masters in USA at top universities with STEM OPT and scholarships for Indian students.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Masters in USA for Indian Students" }],
  },
};

const currentYear = new Date().getFullYear();

const USAPage = () => {
  return (
    <CountryPageTemplate
      country="USA"
      programType="Masters"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/85eb56eb-ba7e-4dfa-b0c9-d23f708d5433.png"
      customHeading={`Study in USA for Indian Students ${currentYear}`}
      introduction="The USA remains the #1 global destination for international students pursuing a Master's degree. Home to Ivy League institutions and world-renowned research universities, the US offers unparalleled academic excellence, cutting-edge technology, and exceptional career pathways. With STEM OPT extending up to 3 years post-graduation, students gain valuable work experience while building a global professional network. US universities welcome Indian students with competitive programs across various disciplines."
      whyChoose={[
        "World-Class Universities: MIT, Stanford, Harvard, and 4,000+ institutions in QS rankings",
        "STEM OPT Benefit: Work up to 3 years after graduation in your field",
        "Research Excellence: Access to Nobel-winning labs and innovation hubs like Silicon Valley",
        "Diverse Program Options: 1-year accelerated to 2-year comprehensive programs",
        "Strong Career Outcomes: On-campus recruitment from Fortune 500 companies",
        "Cultural Diversity: Thriving international community with robust support systems",
        "Flexible Admissions: GRE/GMAT-optional at many universities",
        "Part-Time Work: On-campus jobs and CPT opportunities during studies",
      ]}
      gvkAdvantages={[
        "Free personalized counseling",
        "University shortlisting based on profile & budget",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Travel, accommodation, and insurance support",
      ]}
      courseOptions={[
        { level: "Postgraduate (MS)", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 5.5+ / TOEFL 90+, GRE/GMAT (varies by university)" },
        { level: "MBA", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.5+, GMAT, 2+ years work experience" },
        { level: "Research Programs (PhD)", duration: "3–5 years", requirements: "Master's degree, research proposal, IELTS 7.0+, GRE" },
      ]}
      feeStructure={[
        { category: "Tuition Fees (MSc)", cost: "$25,000 – $50,000/year" },
        { category: "Tuition Fees (MBA)", cost: "$40,000 – $80,000/year" },
        { category: "Living Expenses", cost: "$12,000 – $20,000/year" },
        { category: "Health Insurance", cost: "$1,500 – $2,500/year" },
        { category: "Total (Approximate)", cost: "$40,000 – $75,000/year" },
      ]}
      costOfLiving="The cost of living in USA for Indian students varies significantly by city. Major metropolitan areas like New York, San Francisco, and Boston are more expensive with monthly expenses ranging from $2,000-3,000, while cities like Indianapolis, Columbus, or Raleigh offer more affordable options at $1,000-1,500 per month. This includes accommodation, food, transportation, and miscellaneous expenses. Part-time jobs in USA through on-campus work or CPT can help supplement your income."
      specializations={[
        "Computer Science & AI/ML",
        "Data Science & Business Analytics",
        "Cybersecurity",
        "Electrical & Electronics Engineering",
        "Mechanical Engineering",
        "Robotics & Automation",
        "Finance & Business Analytics",
        "Healthcare & Public Health",
        "Environmental Engineering",
        "Data Engineering",
        "Cloud Computing",
      ]}
      scholarships={[
        "Fulbright Scholarship (Full funding for Indian students)",
        "Global Graduate Merit Scholarships",
        "University-specific Merit Awards",
        "Research & Teaching Assistantships",
        "STEM Field Grants",
        "External Fellowships (Aga Khan, Inlaks Shivdasani)",
      ]}
      eligibility={[
        "Bachelor's degree with minimum 55-60% marks from recognized university",
        "English language proficiency: IELTS 5.5+ or TOEFL 90+ or equivalent",
        "GRE/GMAT score (required at some universities, optional at others)",
        "Statement of Purpose (SOP) highlighting academic and career goals",
        "Letters of Recommendation (2-3 from professors or employers)",
        "Valid passport and student visa for USA",
        "Proof of financial ability to cover tuition and living expenses",
      ]}
      documents={[
        "Valid passport (minimum 6 months validity)",
        "Acceptance letter from USA university",
        "English language proficiency test scores (IELTS/TOEFL/GRE/GMAT)",
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (2-3)",
        "Academic transcripts and certificates",
        "Proof of funds for USA student visa",
        "Financial documents (bank statements)",
        "Passport-sized photographs",
        "USA student visa application form (DS-160)",
      ]}
      admissionProcess={[
        "Research and select USA universities based on your program of interest",
        "Check eligibility criteria and prepare required documents",
        "Take English language proficiency tests (IELTS/TOEFL) and GRE/GMAT if required",
        "Write a compelling Statement of Purpose",
        "Apply to selected USA universities through their online portal",
        "Wait for admission decision and receive offer letter",
        "Accept the offer and pay deposit to secure admission",
        "Apply for USA Student Visa (F-1)",
        "Book accommodation and prepare for travel",
        "Attend pre-departure orientation and fly to USA",
      ]}
      visaProcess="The USA student visa process for Indian students involves receiving an I-20 form from your SEVP-certified university. You must prove financial capacity to cover at least the first year of expenses. The visa interview is crucial - be prepared to explain your study plans and post-graduation intentions. Processing times vary. After arrival, you can apply for Social Security Number and work on-campus. CPT (Curricular Practical Training) allows off-campus work in your field of study."
      partTimeWork="International students in USA can work on-campus up to 20 hours per week during the academic term. Curricular Practical Training (CPT) allows off-campus work related to your field of study after completing one academic year. Optional Practical Training (OPT) allows work in your field for up to 12 months (extendable to 36 months for STEM students). This post-study work opportunity in USA makes it highly attractive for Indian students."
      careerOpportunities="The USA offers exceptional career opportunities for international students. With Fortune 500 companies recruiting on campus and STEM OPT allowing up to 3 years of work experience, you can build a successful career. Top sectors include IT, finance, healthcare, engineering, and consulting. Average starting salaries range from $50,000-80,000 per year, with significant growth potential in major US cities."
      universities={[
        { name: "Harvard University", website: "https://harvard.edu" },
        { name: "Massachusetts Institute of Technology (MIT)", website: "https://mit.edu" },
        { name: "Stanford University", website: "https://stanford.edu" },
        { name: "University of California, Berkeley", website: "https://berkeley.edu" },
        { name: "Arizona State University", website: "https://asu.edu" },
        { name: "Northeastern University", website: "https://northeastern.edu" },
        { name: "University of Texas at Austin", website: "https://utexas.edu" },
        { name: "University of South Florida", website: "https://usf.edu" },
      ]}
      programStructure={{
        duration: "1-2 Years (varies by program)",
        medium: "English",
        details: "USA Master's programs offer flexibility with coursework and research options. STEM programs eligible for 3-year OPT.",
      }}
      faqs={[
        { question: "Can Indian students study in USA without IELTS?", answer: "Yes, many USA universities accept alternative English language tests like TOEFL, PTE Academic, or Duolingo. Some universities also offer conditional admission without English test scores. However, most top US universities prefer IELTS or TOEFL scores for Indian students." },
        { question: "What is the cost of studying in USA?", answer: "The cost of studying in USA for Indian students includes tuition fees ($25,000-50,000/year) and living expenses ($12,000-20,000/year). Total cost ranges from $40,000-75,000 annually. MBA programs cost more ($40,000-80,000/year). Scholarships for Indian students can significantly reduce this burden." },
        { question: "Can students work while studying in USA?", answer: "Yes, international students on F-1 visa can work on-campus up to 20 hours/week during term. CPT allows off-campus work related to your field after one academic year. STEM OPT extends work authorization to 3 years after graduation." },
        { question: "How long is a Masters degree in USA?", answer: "Master's programs in USA typically take 1-2 years to complete. Some accelerated programs can be completed in 1 year, while research-oriented programs may take 2 years. This varies by program and university." },
        { question: "What is STEM OPT in USA?", answer: "STEM OPT (Optional Practical Training) allows graduates with STEM degrees to work in USA for up to 3 years after graduation. This is an extension of the standard 12-month OPT. You must work in a job related to your STEM field." },
        { question: "Are scholarships available for Indian students?", answer: "Yes, scholarships for Indian students in USA include Fulbright Scholarship, Global Graduate Merit Scholarships, university-specific awards, and research/teaching assistantships. Many US universities offer financial aid for international students. GVK Edutech can help you find and apply for relevant scholarships." },
      ]}
      exploreCountries={[
        { name: "UK", link: "/masters/uk", flag: "🇬🇧" },
        { name: "Australia", link: "/masters/australia", flag: "🇦🇺" },
        { name: "Canada", link: "/masters/canada", flag: "🇨🇦" },
        { name: "Germany", link: "/masters/germany", flag: "🇩🇪" },
        { name: "Ireland", link: "/masters/ireland", flag: "🇮🇪" },
        { name: "New Zealand", link: "/masters/newzealand", flag: "🇳🇿" },
      ]}
    />
  );
};

export default USAPage;