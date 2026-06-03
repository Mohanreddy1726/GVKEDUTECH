"use client";

import { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ColorfulHeading } from "@/components/ColorfulHeading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircle, Phone } from "lucide-react";
import { validatePhone } from "@/utils/validation";

export const metadata = {
  title: "Apply for MBBS Abroad | Free Admission Assistance | GVK EduTech",
  alternates: {
    canonical: "/apply",
  },
};

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
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.valid) {
      newErrors.phone = phoneValidation.message;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    const message = `
*New Application from GVK Edutech Website*

*Personal Details:*
Name: ${formData.fullName}
Father's Name: ${formData.fatherName || "Not provided"}

*Contact Details:*
Phone: ${formData.phone}

*Country Preference:*
${formData.country}

*Message:*
${formData.message || "Not provided"}
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
          phone: "",
          country: "",
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

      <div className="container mx-auto px-4 py-16 max-w-4xl mx-auto">
        <section className="mb-12">
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

        <section className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <ColorfulHeading text="Application Form" className="mb-8" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
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
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && <p className="text-destructive text-sm">{errors.fullName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fatherName">Father&apos;s Name</Label>
                      <Input
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        placeholder="Enter father's name"
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
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country You Want To Apply For *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("country", value)}
                      >
                        <SelectTrigger className={errors.country ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kyrgyzstan">Kyrgyzstan</SelectItem>
                          <SelectItem value="georgia">Georgia</SelectItem>
                          <SelectItem value="kazakhstan">Kazakhstan</SelectItem>
                          <SelectItem value="uzbekistan">Uzbekistan</SelectItem>
                          <SelectItem value="russia">Russia</SelectItem>
                          <SelectItem value="vietnam">Vietnam</SelectItem>
                          <SelectItem value="nepal">Nepal</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.country && <p className="text-destructive text-sm">{errors.country}</p>}
                    </div>
                  </div>

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
                </div>

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
                    +91 9010060000
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