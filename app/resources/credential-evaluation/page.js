import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileCheck, BookOpen, Award, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "WES Credential Evaluation | GVK EduTech",
  description: "Learn about WES credential evaluation for foreign medical degrees. Understand the process, requirements, and why credential evaluation is important for Indian students studying abroad.",
  keywords: ["WES credential evaluation", "foreign degree evaluation", "credential evaluation for MBBS abroad", "WES India", "educational credential evaluation"],
};

export default function CredentialEvaluationPage() {
  const wesBenefits = [
    {
      title: "Degree Equivalence",
      description: "WES evaluates and certifies that your foreign degree is equivalent to the Canadian or US educational standards.",
    },
    {
      title: "Career Opportunities",
      description: "Many employers and licensing boards require WES evaluation for foreign-trained professionals seeking employment.",
    },
    {
      title: "Higher Education",
      description: "WES evaluation is often required for admission to postgraduate programs in North America.",
    },
    {
      title: "Immigration Support",
      description: "WES reports are frequently used in immigration applications to demonstrate educational qualifications.",
    },
  ];

  const evaluationTypes = [
    {
      type: "Document-by-Document Evaluation",
      description: "Evaluates each educational document separately, providing an individual assessment for each degree, diploma, or certificate.",
      turnaround: "5-7 business days",
    },
    {
      type: "Comprehensive Evaluation",
      description: "A complete evaluation of all educational documents including an equivalent US or Canadian degree and GPA calculation.",
      turnaround: "7-10 business days",
    },
  ];

  const requiredDocs = [
    "Academic transcripts (all years)",
    "Degree certificate or provisional degree",
    "Mark sheets or grade cards",
    "Certificate of enrollment (if currently studying)",
    "Translation of documents (if not in English)",
    "Copy of passport or government-issued ID",
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Credential Evaluation Services"
        subtitle="Understanding WES and other credential evaluation processes"
        breadcrumb="Resources / Credential Evaluation"
      />

      {/* Hero Section */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
                <FileCheck className="w-4 h-4" />
                Education Verification
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                WES Credential <span className="text-accent">Evaluation</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Credential evaluation is a critical step for Indian students who have completed their MBBS abroad and wish to pursue further studies, employment, or immigration to North America. WES (World Education Services) is one of the most widely recognized credential evaluation services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <a href="https://www.wes.org/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit WES Official Website
                  </a>
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Get Guidance
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://ik.imagekit.io/abhobz66j/GVK%20Images/GVK%20Images/Blog%20Images/study-abroad-MBBS.webp"
                alt="WES Credential Evaluation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What is WES */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What is Credential Evaluation?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Credential evaluation is the process of evaluating and confirming the authenticity and equivalence of educational documents obtained from foreign institutions. For MBBS graduates from countries like Russia, Georgia, Nepal, and Kyrgyzstan, WES evaluation helps licensing authorities and employers understand the value of their degree.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {wesBenefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2 text-center">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Types */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Types of WES Evaluations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the evaluation type that best suits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {evaluationTypes.map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl text-foreground mb-4">{item.type}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-2 text-accent font-medium">
                    <Clock className="w-5 h-5" />
                    <span>Turnaround: {item.turnaround}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Required Documents
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Prepare the following documents before starting your WES evaluation process. All documents should be in original language along with certified English translations.
              </p>
              <div className="space-y-3">
                {requiredDocs.map((doc, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <span className="text-foreground font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">GVK EduTech Support</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We assist students with complete documentation support including transcript procurement, translation services, and WES application guidance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Complete application assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Document procurement help</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">Translation services</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button variant="accent" size="lg" className="w-full">
                  Get Professional Help
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Need Help with Credential Evaluation?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our experts can guide you through the entire WES evaluation process and help with documentation.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
