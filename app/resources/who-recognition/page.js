import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Shield, CheckCircle, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "WHO World Directory of Medical Schools | GVK EduTech",
  description: "Verify your medical university recognition through WHO World Directory of Medical Schools. Learn why WHO listing is crucial for NMC approval and international medical practice.",
  keywords: ["WHO World Directory of Medical Schools", "medical school recognition", "NMC approved universities abroad", "WHO listed medical universities", "international medical education verification"],
};

export default function WHORecognitionPage() {
  const whyWHO = [
    {
      title: "NMC Requirement",
      description: "The NMC mandates that foreign medical universities must be listed in the WHO World Directory for eligibility to practice in India.",
    },
    {
      title: "Global Recognition",
      description: "WHO listing confirms the university meets international standards for medical education and training.",
    },
    {
      title: "Career Opportunities",
      description: "A degree from WHO-recognized universities opens doors to medical practice in multiple countries worldwide.",
    },
    {
      title: " Licensing Exams",
      description: "Most international licensing exams (USMLE, PLAB, AMC) require graduates from WHO-recognized institutions.",
    },
  ];

  const searchSteps = [
    "Visit the WHO World Directory website",
    "Search for your university name or country",
    "Verify the medical school has 'Currently operational' status",
    "Check the foundation year and program duration",
    "Save the verification screenshot for NMC purposes",
  ];

  return (
    <PageLayout>
      <PageHeader
        title="WHO World Directory of Medical Schools"
        subtitle="Verify university recognition for global medical practice"
        breadcrumb="Resources / WHO Recognition"
      />

      {/* Hero Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                International Verification
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Why WHO Recognition <span className="text-primary">Matters</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The WHO World Directory of Medical Schools is the definitive international reference for verifying medical education institutions. It is essential for Indian students pursuing MBBS abroad to ensure their degree will be recognized upon returning to India.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg" asChild>
                  <a href="https://search.bvsalud.org/who/" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-5 h-5 mr-2" />
                    Search WHO Directory
                  </a>
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get Expert Help
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK%20Images/Blog%20Images/study-abroad-MBBS.webp"
                alt="WHO Medical School Recognition"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why WHO Matters */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why WHO Recognition is Essential
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding the importance of studying at a WHO-recognized medical university
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyWHO.map((item, index) => (
              <Card key={index} className="border-border hover:border-primary transition-all text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Search */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                How to Verify Your University
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Follow these steps to confirm your medical university is listed in the WHO World Directory of Medical Schools before starting your application process.
              </p>
              <div className="space-y-4">
                {searchSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground font-medium pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">GVK EduTech Advantage</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">We only partner with WHO & NMC approved universities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">Pre-verified university list for Indian students</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">Complete documentation support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">Post-admission guidance till practice</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/partner-universities">
                  <Button variant="primary" size="lg" className="w-full">
                    View Partner Universities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Not Sure About Your University?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let our experts verify your university credentials and guide you to only the best NMC & WHO-approved institutions.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Get Free University Verification
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
