"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, CheckCircle, GraduationCap, Building } from "lucide-react";

export const CountryPageTemplate = ({
  country,
  programType,
  heroImage,
  introduction,
  whyChoose,
  advantages,
  gvkAdvantages,
  programStructure,
  feeStructure,
  eligibility,
  documents,
  curriculum,
  universities,
  faqs,
  climateInfo,
  careerOpportunities,
  courseOptions,
  specializations,
  scholarships,
}) => {
  const whatsappLink = programType === "MBBS"
    ? "https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+am+interested+in+studying+MBBS+in+" + country + ".+Please+guide+me."
    : "https://api.whatsapp.com/send/?phone=918886661877&text=Hello%2C+I+am+interested+in+Masters+programs+in+" + country + ".";

  return (
    <PageLayout>
      <PageHeader
        title={country}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: programType === "MBBS" ? "MBBS Abroad" : "Masters Abroad" },
          { label: country }
        ]}
        backgroundImage={heroImage}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {programType === "MBBS" ? `Study MBBS in ${country}` : `Pursue Your ${programType} in ${country}`}
            </h2>
            <p className="text-muted-foreground leading-relaxed">{introduction}</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Expert
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+919010060000">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose {country} for Your {programType}?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((reason, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Climate Info (if available) */}
        {climateInfo && (
          <section className="mb-16 section-muted rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Climate Information</h2>
            <p className="text-muted-foreground leading-relaxed">{climateInfo}</p>
          </section>
        )}

        {/* Advantages Section */}
        {advantages && advantages.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Advantages of {programType} in {country}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <span className="text-accent font-bold">{String(index + 1).padStart(2, '0')}.</span>
                  <p className="text-foreground">{advantage.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* GVK Advantages */}
        {gvkAdvantages && gvkAdvantages.length > 0 && (
          <section className="mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              GVK Edutech Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gvkAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{advantage}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Program Structure */}
        {programStructure && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Program Structure</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground text-sm">Duration</p>
                    <p className="text-foreground font-medium">{programStructure.duration}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Medium of Instruction</p>
                    <p className="text-foreground font-medium">{programStructure.medium}</p>
                  </div>
                </div>
                {programStructure.details && (
                  <p className="mt-4 text-muted-foreground">{programStructure.details}</p>
                )}
              </CardContent>
            </Card>
          </section>
        )}

        {/* Fee Structure */}
        {feeStructure && feeStructure.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Fee Structure</h2>
            <Card className="border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Category</th>
                      <th className="text-left p-4 font-semibold text-foreground">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4 text-foreground">{fee.category}</td>
                        <td className="p-4 text-foreground">{fee.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>
        )}

        {/* Course Options Table */}
        {courseOptions && courseOptions.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Course Options & Requirements</h2>
            <Card className="border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold text-foreground">Level</th>
                      <th className="text-left p-4 font-semibold text-foreground">Duration</th>
                      <th className="text-left p-4 font-semibold text-foreground">Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseOptions.map((option, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4 text-foreground font-medium">{option.level}</td>
                        <td className="p-4 text-foreground">{option.duration}</td>
                        <td className="p-4 text-muted-foreground">{option.requirements}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </section>
        )}

        {/* Specializations */}
        {specializations && specializations.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Popular Specializations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {specializations.map((spec, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span className="text-foreground text-sm">{spec}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Eligibility */}
        {eligibility && eligibility.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility Criteria</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Documents Required */}
        {documents && documents.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Documents Required</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <ol className="space-y-2">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium text-accent">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{doc}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Curriculum */}
        {curriculum && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">{programType} Curriculum</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {curriculum.preClinical && (
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Pre-Clinical Subjects</h3>
                    <ul className="space-y-2">
                      {curriculum.preClinical.map((subject, index) => (
                        <li key={index} className="text-muted-foreground text-sm">{subject}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              {curriculum.paraClinical && (
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Para-Clinical Subjects</h3>
                    <ul className="space-y-2">
                      {curriculum.paraClinical.map((subject, index) => (
                        <li key={index} className="text-muted-foreground text-sm">{subject}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
              {curriculum.clinical && (
                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Clinical Subjects</h3>
                    <ul className="space-y-2">
                      {curriculum.clinical.map((subject, index) => (
                        <li key={index} className="text-muted-foreground text-sm">{subject}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>
        )}

        {/* Scholarships */}
        {scholarships && scholarships.length > 0 && (
          <section className="mb-16 bg-gradient-to-br from-accent/5 to-highlight/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Scholarships & Financial Aid</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-accent">🎓</span>
                  <span className="text-foreground">{scholarship}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Career Opportunities */}
        {careerOpportunities && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Career Opportunities</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">{careerOpportunities}</p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Universities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Partner Universities in {country}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center group-hover:bg-accent/10 transition-smooth">
                    <Building className="w-10 h-10 text-muted-foreground group-hover:text-accent transition-smooth" />
                  </div>
                  <h3 className="font-semibold text-foreground">{university.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        {faqs && faqs.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary to-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Begin Your {programType} Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Connect with us today and take the first step toward a successful global career with GVK Edutech.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Expert
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="tel:+919010060000">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 90100 60000
              </a>
            </Button>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};
