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
import { validateEmail, validatePhone, validateDOB } from "@/utils/validation";

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
    programType: "mbbs",
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
    englishExam: "",
    englishScore: "",
    caste: "",
    percentage: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate email
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
      newErrors.email = emailValidation.message;
    }

    // Validate phone
    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.valid) {
      newErrors.phone = phoneValidation.message;
    }

    // Validate DOB - must be 18+
    const dobValidation = validateDOB(formData.dob);
    if (!dobValidation.valid) {
      newErrors.dob = dobValidation.message;
    }

    // Required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father's name is required";
    }
    if (!formData.motherName.trim()) {
      newErrors.motherName = "Mother's name is required";
    }
    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.country) {
      newErrors.country = "Please select a country";
    }
    if (!formData.passportStatus) {
      newErrors.passportStatus = "Please select passport status";
    }
    if (!formData.caste) {
      newErrors.caste = "Please select caste";
    }

    // MBBS specific - NEET required
    if (formData.programType === "mbbs" && !formData.neetScore) {
      newErrors.neetScore = "NEET score is required for MBBS";
    }

    // Masters specific - English exam optional but if selected, score required
    if (formData.programType === "masters" && formData.englishExam && !formData.englishScore) {
      newErrors.englishScore = "Please enter your score";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
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
*Program Type: ${formData.programType === "mbbs" ? "MBBS (Medical)" : "Masters"}*

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
${formData.programType === "mbbs" ? `NEET Score: ${formData.neetScore || "N/A"}` : `English Exam: ${formData.englishExam ? `${formData.englishExam.toUpperCase()} - ${formData.englishScore}` : "Not provided"}`}
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
          programType: "mbbs",
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
          englishExam: "",
          englishScore: "",
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
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && <p className="text-destructive text-sm">{errors.fullName}</p>}
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
                        className={errors.fatherName ? "border-destructive" : ""}
                      />
                      {errors.fatherName && <p className="text-destructive text-sm">{errors.fatherName}</p>}
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
                        className={errors.motherName ? "border-destructive" : ""}
                      />
                      {errors.motherName && <p className="text-destructive text-sm">{errors.motherName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("gender", value)}
                      >
                        <SelectTrigger className={errors.gender ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.gender && <p className="text-destructive text-sm">{errors.gender}</p>}
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
                        className={errors.dob ? "border-destructive" : ""}
                        max="2008-12-31"
                      />
                      {errors.dob && <p className="text-destructive text-sm">{errors.dob}</p>}
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
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
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
                      className={errors.address ? "border-destructive" : ""}
                    />
                    {errors.address && <p className="text-destructive text-sm">{errors.address}</p>}
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                    Academic Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="programType">Program Type *</Label>
                      <Select
                        onValueChange={(value) => {
                          handleSelectChange("programType", value);
                          setFormData((prev) => ({ ...prev, programType: value, neetScore: "", englishExam: "", englishScore: "" }));
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mbbs">MBBS (Medical)</SelectItem>
                          <SelectItem value="masters">Masters</SelectItem>
                        </SelectContent>
                      </Select>
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
                          {formData.programType === "mbbs" ? (
                            <>
                              <SelectItem value="kyrgyzstan">Kyrgyzstan</SelectItem>
                              <SelectItem value="georgia">Georgia</SelectItem>
                              <SelectItem value="kazakhstan">Kazakhstan</SelectItem>
                              <SelectItem value="uzbekistan">Uzbekistan</SelectItem>
                              <SelectItem value="russia">Russia</SelectItem>
                              <SelectItem value="vietnam">Vietnam</SelectItem>
                              <SelectItem value="nepal">Nepal</SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem value="usa">USA</SelectItem>
                              <SelectItem value="uk">UK</SelectItem>
                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="europe">Europe</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="ireland">Ireland</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                      {errors.country && <p className="text-destructive text-sm">{errors.country}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="passportStatus">Passport Status *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("passportStatus", value)}
                      >
                        <SelectTrigger className={errors.passportStatus ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select passport status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="issued">Issued</SelectItem>
                          <SelectItem value="applied">Applied</SelectItem>
                          <SelectItem value="not-applied">Not Applied</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.passportStatus && <p className="text-destructive text-sm">{errors.passportStatus}</p>}
                    </div>

                    {formData.programType === "mbbs" ? (
                      <div className="space-y-2">
                        <Label htmlFor="neetScore">NEET Score *</Label>
                        <Input
                          id="neetScore"
                          name="neetScore"
                          type="number"
                          min="0"
                          max="720"
                          value={formData.neetScore}
                          onChange={handleInputChange}
                          placeholder="Enter your NEET score"
                          className={errors.neetScore ? "border-destructive" : ""}
                        />
                        {errors.neetScore && <p className="text-destructive text-sm">{errors.neetScore}</p>}
                      </div>
                    ) : (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="englishExam">English Exam (Optional)</Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("englishExam", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select exam (if any)" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ielts">IELTS</SelectItem>
                              <SelectItem value="toefl">TOEFL</SelectItem>
                              <SelectItem value="gre">GRE</SelectItem>
                              <SelectItem value="pte">PTE</SelectItem>
                              <SelectItem value="duolingo">Duolingo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {formData.englishExam && (
                          <div className="space-y-2">
                            <Label htmlFor="englishScore">{formData.englishExam.toUpperCase()} Score *</Label>
                            <Input
                              id="englishScore"
                              name="englishScore"
                              type="number"
                              value={formData.englishScore}
                              onChange={handleInputChange}
                              placeholder={`Enter your ${formData.englishExam.toUpperCase()} score`}
                              className={errors.englishScore ? "border-destructive" : ""}
                            />
                            {errors.englishScore && <p className="text-destructive text-sm">{errors.englishScore}</p>}
                          </div>
                        )}
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="caste">Caste *</Label>
                      <Select
                        onValueChange={(value) => handleSelectChange("caste", value)}
                      >
                        <SelectTrigger className={errors.caste ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select your caste" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oc">OC</SelectItem>
                          <SelectItem value="bc">BC</SelectItem>
                          <SelectItem value="st">ST</SelectItem>
                          <SelectItem value="sc">SC</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.caste && <p className="text-destructive text-sm">{errors.caste}</p>}
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
