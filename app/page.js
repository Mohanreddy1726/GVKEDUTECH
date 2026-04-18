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