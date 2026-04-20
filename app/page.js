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
  title: "GVK EduTech - Your Gateway to Medical Education Abroad",
  description: "GVK EduTech is your trusted partner for MBBS and Masters programs at leading global universities. 15+ years of excellence in international education consultancy. Start your journey today!",
  keywords: ["MBBS abroad", "medical education abroad", "study medicine abroad", "Masters abroad", "education consultancy India", "overseas education"],
  openGraph: {
    title: "GVK EduTech - Your Gateway to Medical Education Abroad",
    description: "Your trusted partner for MBBS and Masters programs at leading global universities. 15+ years of excellence.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GVK EduTech" }],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
      <Footer />
      <WhatsAppButton />
    </div>
  );
}