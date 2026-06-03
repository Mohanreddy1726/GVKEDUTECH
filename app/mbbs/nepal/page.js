import { CountryPageTemplate } from "@/components/CountryPageTemplate";

export const metadata = {
  title: "Study MBBS in Nepal 2026 | Budget-Friendly Option | GVK EduTech",
  description: "Study MBBS in Nepal at NMC/WHO approved universities. Affordable fees, English medium, cultural proximity. Apply for MBBS in Nepal now.",
  keywords: ["MBBS in Nepal", "study MBBS Nepal", "Nepal medical university", "MBBS abroad Nepal"],
  openGraph: {
    title: "Study MBBS in Nepal | GVK EduTech",
    description: "Study MBBS in Nepal at affordable fees with NMC/WHO approved degrees.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MBBS in Nepal" }],
  },
};

const NepalPage = () => {
  return (
    <CountryPageTemplate
      country="Nepal"
      programType="MBBS"
      heroImage="https://ik.imagekit.io/abhobz66j/GVK%20Images/MBBS%20and%20MASTERS/image_2026-05-14_142225739.png?updatedAt=1778748808091"
      introduction="Nepal has emerged as a preferred destination for Indian students seeking quality medical education at affordable costs. With its geographical proximity to India, cultural similarities, and English-medium MBBS programs recognized by NMC and WHO, Nepal offers an ideal environment for aspiring doctors. The country features modern medical colleges equipped with state-of-the-art infrastructure and extensive clinical training opportunities."
      whyChoose={[
        "Geographical Proximity: Easy travel between India and Nepal with no timezone difference",
        "Cultural Similarities: Shared cultural heritage makes adaptation easier for Indian students",
        "Affordable Education: Cost-effective MBBS programs compared to private colleges in India",
        "NMC & WHO Recognized: Degrees valid for FMGE/NExT and international practice",
        "English Medium Instruction: All major universities offer MBBS in English",
        "Safe Environment: Nepal is known for its peaceful and student-friendly atmosphere",
      ]}
      gvkAdvantages={[
        "No Donation or Capitation Fees",
        "Assistance with Documentation & Visa",
        "Indian Food & Hostel Services by GVK",
        "High FMGE/NExT Pass Rate",
        "24/7 Student & Parent Support",
        "End-to-End Admission Support",
      ]}
      programStructure={{
        duration: "4.5 Years (Academic) + 1 Year (Internship)",
        medium: "English (with Nepali language support during clinical rotations)",
      }}
      feeStructure={[
        { category: "Tuition Fee", cost: "Approx. ₹30-50 Lakh (Total Course)" },
        { category: "Living Expenses", cost: "Approx. ₹10-15 Lakh (Total)" },
        { category: "Total Program Cost", cost: "Approx. ₹40-65 Lakh" },
      ]}
      eligibility={[
        "Minimum 50% in Physics, Chemistry, and Biology at the 12th-grade level",
        "Qualified NEET Scorecard (valid for the admission year)",
        "Applicant should be 17 years old or older at the time of admission",
      ]}
      documents={[
        "12th Grade Mark Sheet",
        "NEET Scorecard",
        "Valid Passport",
        "Aadhar Card",
        "PAN Card",
        "Passport-Sized Photographs",
      ]}
      curriculum={{
        preClinical: ["Anatomy", "Physiology", "Biochemistry"],
        paraClinical: ["Pathology", "Pharmacology", "Microbiology", "Forensic Medicine"],
        clinical: ["General Medicine", "Surgery", "Pediatrics", "OBG", "Psychiatry", "Radiology", "Orthopedics"],
      }}
      universities={[
        { name: "Birat Medical College (KU), Biratnagar", website: "https://biratmedicalcollege.edu.np", logo: "https://biratmedicalcollege.edu.np/wp-content/uploads/2023/09/bmc-logo.png" },
        { name: "B & C Medical College (KU), Birtamod", website: "https://bncmedicalcollege.edu.np", logo: "https://bncmedicalcollege.edu.np/assets/bnc%20logo.png" },
        { name: "Chitwan Medical College (TU), Bharatpur", website: "https://cmc.edu.np", logo: "https://www.mbbsadmissionabroad.in/uploads/img/icon/mbbs-logo.webp" },
        { name: "College of Medical Science (KU), Bharatpur", website: "https://www.mbbsadmissionabroad.in/chitwan-medical-college", logo: "https://cmsnepal.edu.np/wp-content/uploads/2025/01/cms-logo-new.jpeg" },
        { name: "Devdaha Medical College (KU), Butwal", website: "https://devdahamedicalcollege.edu.np", logo: "https://backend.devdahamedicalcollege.edu.np/DMC%20LOGO-eb0edb.png" },
        { name: "Gandaki Medical College (TU), Pokhara", website: "https://gmc.edu.np", logo: "https://gmc.edu.np/images/frontend/logo.png" },
        { name: "Janaki Medical College (TU), Janakpur", website: "https://janakimedicalcollege.edu.np", logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NzU3Nzc3Nzc3Nzc3Nzc3N//AABEIABwAHAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAFBgcCA//EACsQAAEDAgQEBQUAAAAAAAAAAAECAxEEIQAFEjEiQVFxE5GhweEGFCNh8P/EABcBAQEBAQAAAAAAAAAAAAAAAAMBAgD/xAAeEQACAgICAwAAAAAAAAAAAAABAgARAxIxcRMhIv/aAAwDAQACEQMRAD8As2Y1qKJnUrc2Fv7y+SBaVZm+tSlVNO1BMIKlbcto9R87+oWEuNLeUogsaDAE8Jke6sT7ORULrWiK6s41aVJDgASDF0wN+18G2Qhwi9+4i49lLSj0uYrFQWXxwRIUSD+txuMFZwk5Cwap1hp6ofWWxr1uaSdIAN/MDscOLBJp2iqdRQJnrGOxZPIm0mRNGqDs9bRUI8PSQtIC9fICeu1r78ieuFCsypNW4hwKBCYUVNpB1GBEyRyt7nFDcabdjxG0LjbUkHGF0lO4oqUygk7mN++F+TyJkMw4MVcspUAh3T4qGW5W2lQ4Y9DIty53JuG44x9uwI/C3bbhFsdcQ1VCSyTZn//Z" },
        { name: "Kathmandu Medical College (KU), Kathmandu", website: "https://kmc.edu.np", logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEk0lEQVR4AZWXU4DlWBCGs08zz8vXfV7bNsa2bdu2rXaPPdOa7r5j27Y99+be8NS3YyWdzv5PSSFVp079lXO0JwBKAPWBdYDOy5AiX7wi8coEokAEqAOU1B7ilafB3wJyAEUAPFEkwEyKzFc9jvXW4+CUBHIJA/ELFJRFULUkR6CEBtTxW7kELE1dOYaxejxmRmOs5V0xsyagrp14rA69CgXU14BIcMDn3iwDM28CiVllsFKqYM76E3dVJ8zkcsTTK2Pnz0Jsy9/Xv5fWaUAUgGA3UC5m7iislU1x5lVDZVRGrWqPWtkKlV4Vtaw1ifEVSKwcBspFwlRB0DVCwt6xCiOjLvaiBqg13eFwJs7iZpirusPlTfdl3XAzqmItbYl9IN8TrChoXnZ56yUIxvxW2JlVcRZWg+hR5MZmzCUNsLPag3UZ9NNIVmvU6nYkZtQHUcWzA9C8Fj7Nfu8q1rJ2uKnlkEPpoK6jTi4jOu137vb/BvvIElA3kWOLUUvqYcz4E7l7JVQNNI9avKWQy4cxkv9Fkv6Fi+vBvo6zvh/21mE4m0dhFo4DuQVXtuCmliY2/GvcK8dfqqr4JCJoQghcP4O1qCEqpQxyOhvULczISIykCuhp5XF2zwB1Fy5EkPlVcbJ7oe77+FDAsxdaKNa6NkZqTazUP1Drh2CfzsfK70S05dvEOr2HldcPjLPItom4C+pgptUAM04YaEi4oWdljcJZ3Agn9V/MBTWwc7pgZdbDus9/fdjPqF3TUEub4+Z1xl6bjIQjAZpvYPH6yp2rREfWJNbvJxJzKpNIaoazP5mbLV7jVpXXMVKqEb1fjfjQSkjsRuhxrr0slQAf9/QBrOmNiS/vxaletYjNa82dUb9wckh5Ygt7Y42ogDp1ABBCQfwqEGR9n452ZnPuTmlAVlI6SQMnkDRoCosmpnJl0A/YGd1RZ/Z5/cJtgRT7f5f4Xcxp9bBzhuFERhFfNw1r/0KMgjEkFvRGH1wD98algLEuHrn2v/6/ykFO78BYPBRnazLOmuGoDeNxt6fi5E+FmyfBir007oO/rHm7z98Q28A6u411i+dTsKqASFYu+7etY9/GCAXLClm9OIfVS5dxe082cvEQKOX5kBTVhKH64PIB3ENp3Dueh34/EX3tbBI5w4llj+Hu/UloXjmEfmoTVs4g1KHl3gTC0tA/EYFTG3H2zEeMGIjg7F9xn5bfEB34Cdah1U+X6F46hHMkG2yj6GPUY5EEJxB8zBLHID6nKvEx/yKmHoLE/mrNayrhEjF1rJRmJAa8i1w68FK9vKtF/Ied5tFIiJQE0G+ij/8XK2sIxtZ54ZnvZYHXQcI4OxZmVl/0Ad/j7C8MKHzweNHCp+x9tLbPJdrtY0S/gwQ7BbJAl+KcxD9/e90MYi3fR50/5GsqxR/JohqwLvg8LIiPQgBrz3Lu9foCbCPwTiBFfz2iAfUDr2QBTeKe3kli5F9gG8VT0EsBBdR5fCmVXN8ih2kpKx4QSwhAjkDJ5y+nucGVCIfAfRcA1ONYb2nPAygJ1AUiAtHwl83Q0AXWPd7yEtpj/AfgjwTDWQnNygAAAABJRU5ErkJggg==" },
      ]}
      faqs={[
        { question: "Is MBBS from Nepal valid in India?", answer: "Yes. Degrees from NMC/WHO approved Nepalese medical universities are valid in India. Graduates can appear for FMGE/NExT and practice in India or globally." },
        { question: "What are the eligibility criteria?", answer: "Students must have a minimum of 50% in PCB (40% for reserved categories), a valid NEET scorecard, and be at least 17 years old." },
        { question: "Is Indian food available in Nepal?", answer: "Yes. GVK Edutech provides Indian food mess facilities at partner institutions, and many hostels offer Indian cuisine." },
        { question: "What documents are needed for admission?", answer: "12th Mark Sheet, NEET Scorecard, Passport, Aadhar Card, PAN Card, and Passport-size Photographs." },
      ]}
    />
  );
};

export default NepalPage;