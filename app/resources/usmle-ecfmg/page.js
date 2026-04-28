import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Stethoscope, BookOpen, GraduationCap, Globe, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "USMLE & ECFMG Certification | GVK EduTech",
  description: "Learn about USMLE exam, ECFMG certification, and how Indian MBBS graduates can practice medicine in the USA. Complete guide for international medical graduates.",
  keywords: ["USMLE", "ECFMG", "USMLE exam for Indian students", "practice medicine USA", "international medical graduate USA", "USMLE preparation abroad"],
};

export default function USMLEECFmgPage() {
  const usmleSteps = [
    {
      step: "Step 1 - Basic Science",
      description: "Tests knowledge of basic medical sciences including anatomy, biochemistry, pharmacology, and pathology.",
      format: "Multiple-choice, computer-based",
      duration: "8 hours",
    },
    {
      step: "Step 2 CK - Clinical Knowledge",
      description: "Assesses clinical knowledge including internal medicine, surgery, pediatrics, and psychiatry.",
      format: "Multiple-choice, computer-based",
      duration: "9 hours",
    },
    {
      step: "Step 3 - Applied Sciences",
      description: "Tests ability to apply medical knowledge in patient care without supervision.",
      format: "Multiple-choice + case simulations",
      duration: "2 days",
    },
  ];

  const eligibilityRequirements = [
    "Graduation from WHO-listed medical school",
    "ECFMG certification requirement",
    "Valid passport and identification",
    "English language proficiency (TOEFL if required)",
    "Clean record with medical licensing authority",
  ];

  const benefits = [
    {
      title: "Practice in the USA",
      description: "ECFMG certification is the first step to obtaining a medical license in the United States.",
    },
    {
      title: "Globally Recognized",
      description: "USMLE scores are recognized by medical boards in multiple countries worldwide.",
    },
    {
      title: "Residency Opportunities",
      description: "USMLE is required for entering residency programs in the USA.",
    },
    {
      title: "Higher Earning Potential",
      description: "US-qualified doctors often have access to higher salaries and better career prospects.",
    },
  ];

  return (
    <PageLayout>
      <PageHeader
        title="USMLE & ECFMG Certification"
        subtitle="Your pathway to practicing medicine in the United States"
        breadcrumb="Resources / USMLE & ECFMG"
      />

      {/* Hero Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                USA Medical Licensing
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                USMLE & <span className="text-primary">ECFMG</span> Guide
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The United States Medical Licensing Examination (USMLE) is a three-step examination program for medical licensure in the USA. ECFMG (Educational Commission for Foreign Medical Graduates) certifies international medical graduates for entry into US residency programs and medical practice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" asChild>
                  <a href="https://www.ecfmg.org/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit ECFMG Official
                  </a>
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get Expert Guidance
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK%20Images/Blog%20Images/study-abroad-MBBS.webp"
                alt="USMLE ECFMG Guide"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* USMLE Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The USMLE Three-Step Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding each step of the USMLE examination process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {usmleSteps.map((step, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all relative">
                <CardContent className="p-8">
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-4 mt-4">{step.step}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-foreground">Format: {step.format}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-foreground">Duration: {step.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Pursue USMLE?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For MBBS graduates from abroad, clearing USMLE opens doors to world-class healthcare careers in the USA and other countries that recognize the credential.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Stethoscope className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Eligibility Requirements</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To be eligible for ECFMG certification and USMLE examinations, candidates must meet the following requirements:
              </p>
              <ul className="space-y-4 mb-8">
                {eligibilityRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="w-full">
                  Start Your USMLE Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              USMLE Preparation Tips
            </h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Successful USMLE preparation requires strategic planning and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Start Early</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Begin preparation during your MBBS course. FirstAid and Pathoma are essential resources.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Practice Questions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  UWorld question bank is considered the gold standard. Practice extensively.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Join Study Groups</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connect with other aspirants. Online forums and study groups provide valuable support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Dreaming of Practicing in the USA?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            GVK EduTech provides guidance for students aspiring to clear USMLE. We help connect you with the right resources and preparation materials.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get USMLE Guidance
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
