import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CollegePredictor } from "@/components/CollegePredictor";
import { Benefits } from "@/components/Benefits";
import { Countries } from "@/components/Countries";
import { Services } from "@/components/Services";
import { Scholarship } from "@/components/Scholarship";
import { WhyBest } from "@/components/WhyBest";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VideoTestimonials } from "@/components/VideoTestimonials";

export const metadata = {
  title: "GVK EduTech | MBBS Abroad for Indian Students - Top Medical Universities 2026",
  description: "Expert MBBS abroad guidance for Indian students. Low-cost medical universities in Russia, Georgia, Kyrgyzstan, Kazakhstan. 5000+ doctors placed. Free counseling.",
  keywords: [
    "MBBS abroad for Indian students",
    "study medicine abroad",
    "MBBS in Russia for Indian students",
    "MBBS in Georgia for Indian students",
    "low cost MBBS abroad",
    "medical education abroad",
    "Masters abroad programs",
    "NMC approved MBBS abroad",
    "cheap MBBS abroad for Indian students",
    "MBBS abroad consultancy",
    "study abroad after 12th",
    "medical university abroad",
    "MBBS in Kyrgyzstan for Indian students",
    "MBBS in Kazakhstan for Indian students",
  ],
  openGraph: {
    title: "GVK EduTech | MBBS Abroad for Indian Students",
    description: "Expert MBBS abroad guidance for Indian students. Low-cost medical universities in Russia, Georgia, Kyrgyzstan, Kazakhstan. 5000+ doctors placed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GVK EduTech - Medical Education Abroad" }],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CollegePredictor />
        <Benefits />
        <Countries />
        <Services />
        <Scholarship />
        <VideoTestimonials />
        <WhyBest />
        <Founder />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}