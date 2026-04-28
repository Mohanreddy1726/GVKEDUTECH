import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, CheckCircle, AlertCircle, FileText, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "NMC Guidelines for MBBS Abroad | GVK EduTech",
  description: "Official NMC guidelines for Indian students studying MBBS abroad. Understand eligibility criteria, return service obligation, and requirements for practicing in India after overseas medical education.",
  keywords: ["NMC guidelines MBBS abroad", "NMC international medical graduate", "MBBS abroad India rules", "NMC act foreign medical degree", "MBBS abroad eligibility India"],
};

export default function NMCGuidelinesPage() {
  const nmcKeyPoints = [
    {
      title: "Minimum Eligibility Criteria",
      description: "Student must qualify NEET exam and have 50% aggregate in Physics, Chemistry, and Biology (40% for reserved categories).",
    },
    {
      title: "Duration Requirement",
      description: "The MBBS course abroad must be of minimum duration of 4.5 years followed by 1 year of internship (if not completed as part of the course).",
    },
    {
      title: "Approved Countries",
      description: "Only students from countries where the medical degree is recognized by NMC and who appear in the WHO World Directory of Medical Schools.",
    },
    {
      title: "Return Service Obligation",
      description: "Students must return to India after completing the course and may need to serve in rural areas as per government requirements.",
    },
    {
      title: "Screening Test",
      description: "All Indian citizens with foreign medical degrees must pass the National Exit Test (NExT) to practice medicine in India.",
    },
    {
      title: "Documentation",
      description: "Students must obtain an Eligibility Certificate from NMC before admission and keep all documents of the foreign medical institution.",
    },
  ];

  const requiredDocuments = [
    "NEET Scorecard",
    "Admit Card",
    "Passport",
    "Valid Student Visa",
    "Admission Letter from Foreign University",
    "Equivalence Certificate from NMC",
    "Academic Transcripts",
    "Internship Completion Certificate",
  ];

  return (
    <PageLayout>
      <PageHeader
        title="NMC Guidelines for MBBS Abroad"
        subtitle="Essential guidelines for Indian students planning to study medicine abroad"
        breadcrumb="Resources / NMC Guidelines"
      />

      {/* Hero Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Official Government Resource
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Understanding NMC Guidelines for <span className="text-accent">MBBS Abroad</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The National Medical Commission (NMC) has established clear guidelines for Indian students aspiring to pursue MBBS abroad. Understanding these regulations is crucial for a smooth transition back to India for medical practice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <a href="https://www.nmc.org.in/international-corner/nmc-act/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Official NMC Website
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
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/study-abroad-MBBS.webp"
                alt="NMC Guidelines for MBBS Abroad"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <p className="font-semibold text-foreground text-sm">
                      Important: All students must appear for NEET before applying abroad
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key NMC Guidelines
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Familiarize yourself with these essential regulations before embarking on your MBBS journey abroad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {nmcKeyPoints.map((point, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Required Documents
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ensure you have all the necessary documentation before applying to a foreign medical university. NMC may request these at any stage of verification.
              </p>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                    <FileText className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Important Notice</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Students who have obtained admission to foreign medical universities on or after the date of publication of these guidelines without obtaining an Eligibility Certificate from NMC will not be eligible to appear in the screening test.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg text-foreground mb-2">GVK EduTech Assistance</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We help students obtain the NMC Eligibility Certificate and guide them through the entire documentation process for a hassle-free experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Confused About NMC Guidelines?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our experts at GVK EduTech have helped 5000+ students navigate NMC requirements. Get personalized guidance for your MBBS abroad journey.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Book Free Counseling Session
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
