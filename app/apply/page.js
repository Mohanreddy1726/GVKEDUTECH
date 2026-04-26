"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle, Phone } from "lucide-react";

const countries = [
  "Kyrgyzstan",
  "Georgia",
  "Kazakhstan",
  "Uzbekistan",
  "Russia",
  "Vietnam",
];

const ApplyPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    passportStatus: "",
    neetScore: "",
    caste: "",
    percentage: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
*New Application from GVK Edutech Website*

*Personal Details:*
Name: ${formData.fullName}
Father's Name: ${formData.fatherName}
Mother's Name: ${formData.motherName}
Gender: ${formData.gender}
Date of Birth: ${formData.dob}

*Contact Details:*
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

*Academic Details:*
Country Preference: ${formData.country}
Passport Status: ${formData.passportStatus}
NEET Score: ${formData.neetScore}
Caste: ${formData.caste}
12th Percentage (PCB): ${formData.percentage}%

*Message:*
${formData.message || "N/A"}
    `.trim();

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const whatsappUrl = `https://api.whatsapp.com/send/?phone=919010060000&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");

      if (res.ok) {
        toast({
          title: "Application Submitted Successfully!",
          description: "Our team will contact you shortly. Redirecting to WhatsApp...",
          variant: "success",
        });
        setFormData({
          fullName: "",
          fatherName: "",
          motherName: "",
          gender: "",
          dob: "",
          email: "",
          phone: "",
          address: "",
          country: "",
          passportStatus: "",
          neetScore: "",
          caste: "",
          percentage: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Apply Online"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Apply Online" },
        ]}
      />

      <div className="container mx-auto px-4 py-16">
        {/* Disclaimer */}
        <section className="max-w-4xl mx-auto mb-12">
          <Card className="border-accent/30 bg-accent/5">
            <CardContent className="p-6">
              <h3 className="font-bold text-foreground mb-2">
                📋 Disclaimer / Legal Notice
              </h3>
              <p className="text-muted-foreground text-sm">
                By submitting this form, you agree to share your information with GVK Edutech
                for the purpose of receiving guidance and assistance with your study abroad
                application. Your data will be handled in accordance with our privacy policy.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Application Form */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-8">Application Form</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Personal Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fatherName">Father&apos;s Name *</Label>
                      <Input
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter father's name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motherName">Mother&apos;s Name *</Label>
                      <Input
                        id="motherName"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter mother's name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("gender", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Contact Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your complete address"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Academic Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country You Want To Apply For *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("country", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country.toLowerCase()}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="passportStatus">Passport Status *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("passportStatus", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select passport status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="issued">Issued</SelectItem>
                          <SelectItem value="applied">Applied</SelectItem>
                          <SelectItem value="not-applied">Not Applied</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="neetScore">NEET Score *</Label>
                      <Input
                        id="neetScore"
                        name="neetScore"
                        value={formData.neetScore}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your NEET score"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="caste">Caste *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("caste", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your caste" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oc">OC</SelectItem>
                          <SelectItem value="bc">BC</SelectItem>
                          <SelectItem value="st">ST</SelectItem>
                          <SelectItem value="sc">SC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="percentage">
                        Avg Percentage(%) in Class 12 (Physics, Chemistry & Biology)
                      </Label>
                      <Input
                        id="percentage"
                        name="percentage"
                        type="number"
                        min="0"
                        max="100"
                        value={formData.percentage}
                        onChange={handleInputChange}
                        placeholder="Enter percentage"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any additional information you'd like to share..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button type="submit" variant="accent" size="lg" className="flex-1 md:flex-none" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    asChild
                  >
                    <a
                      href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi%2C+I+need+help+with+my+application."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Need Help?
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto mt-12">
          <Card className="border-border bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Have Questions? We&apos;re Here to Help!
              </h3>
              <p className="text-muted-foreground mb-6">
                Our expert counselors are available to assist you with any queries regarding
                admissions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="accent"
                  asChild
                >
                  <a
                    href="https://api.whatsapp.com/send/?phone=919010060000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+919010060000">
                    <Phone className="w-5 h-5 mr-2" />
                    +91 90100 60000
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
};

export default ApplyPage;
