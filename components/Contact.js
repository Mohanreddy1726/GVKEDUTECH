"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { validateEmail, validatePhone } from "@/utils/validation";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot field
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.valid) {
      newErrors.email = emailValidation.message;
    }

    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.valid) {
      newErrors.phone = phoneValidation.message;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.website) {
      return;
    }

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Our team will get back to you within 24 hours.",
          variant: "success",
        });
        setFormData({ name: "", email: "", phone: "", message: "", website: "" });
        setErrors({});
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
    <section id="contact" className="py-24 section-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold tracking-wide uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your journey? Get in touch with our expert counselors today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot - hidden from users, only bots will fill */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div>
                <Input
                  id="contact-home-name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`h-12 rounded-xl ${errors.name ? "border-red-500" : ""}`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  id="contact-home-email"
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`h-12 rounded-xl ${errors.email ? "border-red-500" : ""}`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <Input
                  id="contact-home-phone"
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`h-12 rounded-xl ${errors.phone ? "border-red-500" : ""}`}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Textarea
                  id="contact-home-message"
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full group" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:+919010060000" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Call Us</p>
                    <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                      +91 90100 60000
                    </p>
                  </div>
                </a>

                <a href="mailto:info@gvkedutech.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Email Us</p>
                    <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                      info@gvkedutech.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm mb-1">Our Offices</p>
                    <p className="font-semibold">
                      <a  className="hover:text-accent transition-colors">Hyderabad</a> | <a className="hover:text-accent transition-colors">Warangal</a> | <a className="hover:text-accent transition-colors">Vijayawada</a> | <a  className="hover:text-accent transition-colors">Visakhapatnam</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://api.whatsapp.com/send/?phone=919885852424&text=Hi%2C+I+am+interested+in+studying+abroad.+Please+guide+me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#25D366] rounded-2xl text-white card-hover group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                {/* <MessageCircle className="w-7 h-7" /> */}
                <Image src="https://ik.imagekit.io/abhobz66j/GVK%20Images/whatsappLogoIcon.webp?updatedAt=1776492281833" alt="WhatsappLogo" width={75} height={70} />
              </div>
              <div className="flex-1">
                <p className="text-white/80 text-sm mb-1">Chat with us on</p>
                <p className="text-xl font-bold">WhatsApp</p>
              </div>
              <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};