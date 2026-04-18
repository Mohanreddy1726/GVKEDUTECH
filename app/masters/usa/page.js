import { CountryPageTemplate } from "@/components/CountryPageTemplate";

const USAPage = () => {
  return (
    <CountryPageTemplate
      country="USA"
      programType="Masters"
      heroImage="https://gvkedutech.com/site/assets/images/countries/usamastersspg.jpg"
      introduction="The USA remains the #1 destination for international students aiming to pursue a Master's (MS) degree. Its global reputation for academic excellence, technological advancement, and career opportunities makes it the preferred choice for aspiring professionals across the world."
      whyChoose={[
        "Globally Ranked Universities: Over 4,000 institutions, many in the top 100 globally (MIT, Stanford, Harvard, UC Berkeley)",
        "STEM OPT Advantage: STEM graduates can work up to 3 years post-graduation",
        "World-Class Research Facilities: Access to leading-edge labs and tech incubators",
        "Excellent Career Outcomes: Strong links with global employers, on-campus recruitment",
        "Global Network: Build worldwide professional network through alumni associations",
        "Innovation Ecosystem: Access to Silicon Valley, Boston Tech Hub, Austin Startup Scene",
        "Cultural Diversity: Welcoming society with robust international student support",
      ]}
      gvkAdvantages={[
        "Free personalised counselling",
        "University shortlisting based on profile & budget",
        "End-to-end application support (SOP, LOR, documentation)",
        "Visa guidance & mock interviews",
        "Pre-departure orientation",
        "Travel, accommodation, and insurance support",
      ]}
      courseOptions={[
        { level: "Undergraduate", duration: "4 years", requirements: "Minimum 60% in 12th Grade, IELTS 6.0–6.5 / TOEFL 80+, SAT (optional)" },
        { level: "Postgraduate (MS)", duration: "1–2 years", requirements: "Bachelor's degree, IELTS 6.5+ / TOEFL 90+, GRE/GMAT varies" },
        { level: "MBA", duration: "2 years", requirements: "Bachelor's degree, IELTS 6.5+, GMAT, 2+ years experience preferred" },
      ]}
      feeStructure={[
        { category: "Tuition Fees", cost: "$20,000 – $45,000/year" },
        { category: "Living Expenses", cost: "$10,000 – $18,000/year" },
        { category: "Health Insurance", cost: "$800 – $2,000/year" },
        { category: "Total (approximate)", cost: "$30,000 – $60,000/year" },
      ]}
      specializations={[
        "Computer Science",
        "Artificial Intelligence & Machine Learning",
        "Data Science & Business Analytics",
        "Cybersecurity",
        "Electrical & Electronics Engineering",
        "Mechanical Engineering",
        "Robotics & Mechatronics",
        "Pharmaceutical Sciences & Biotechnology",
        "Environmental Engineering",
        "Public Health & Health Informatics",
      ]}
      scholarships={[
        "Fulbright & Global UGRAD Scholarships",
        "University-specific merit-based scholarships",
        "Research Assistantships (RA) & Teaching Assistantships (TA)",
        "Graduate Fellowships",
        "On-campus part-time jobs (20 hrs/week during term)",
      ]}
      universities={[
        { name: "Harvard University" },
        { name: "Massachusetts Institute of Technology (MIT)" },
        { name: "Stanford University" },
        { name: "University of California, Berkeley" },
        { name: "Arizona State University" },
        { name: "Northeastern University" },
        { name: "University of Texas at San Antonio" },
        { name: "University of South Florida" },
      ]}
    />
  );
};

export default USAPage;
