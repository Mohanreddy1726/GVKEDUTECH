"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { validateEmail, validatePhone } from "@/utils/validation";


const offices = [
  {
    city: "Hyderabad",
    type: "Head Office",
    address: "3rd Floor, Shiva sai Commercial Building, Shivam X Road, Vidya Nagar Opp: Reliance Digital, Hyderabad, Telangana, Pin: 500044",
    phones: ["+91 8331 077770", "888666 1876"],
    mapLink: "https://maps.app.goo.gl/HSBuYGWVxe46562SA",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/hyderabad-charminar.jpg?updatedAt=1776492282091",
    monument: "Charminar"
  },
  {
    city: "Warangal",
    type: "Regional Office",
    address: "3rd Floor S.V arcade, opp: Suprabha Hotel, Nakkalagutta, Hanamkonda, Warangal, Telangana, Pincode: 506001",
    phones: ["+91 7287 077770", "888666 1877"],
    mapLink: "https://maps.app.goo.gl/hjC7b2FAPNQYTr3k8",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/warangal-thousand-pillar-temple.jpg?updatedAt=1776492282027",
    monument: "Thousand Pillar Temple"
  },
  {
    city: "Karimnagar",
    type: "Regional Office",
    address: "2nd Floor, Radhakrishna nivas, Opp: PVP mall, Labbipet, Karimnagar",
    phones: ["+91 8499 077770", "888666 2442"],
    mapLink: "https://www.google.com/maps/place/GVK+EDUTECH+SERVICES+-+Best+MBBS+Consultancy+in+Karimnagar+%7C+MBBS+in+Abroad+%7C+Best+Overseas+Educational+Consultancy/@18.4372006,79.1240267,1220m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bccd9ea035775b3:0xdb03b029ee1e7138!8m2!3d18.4372006!4d79.1240267!16s%2Fg%2F11ydr3jw8q?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/karimnagar-elgandal-fort.jpg?updatedAt=1776492281954",
    monument: "Elgandal Fort"
  },
  {
    city: "Khammam",
    type: "Regional Office",
    address: "2nd Floor, Radhakrishna nivas, Opp: PVP mall, Labbipet, Khammam",
    phones: ["+91 7036 077770", "888666 1441"],
    mapLink: "https://goo.gl/maps/khammam",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/khammam-fort.jpg?updatedAt=1776492282078",
    monument: "Khammam Fort"
  },
  {
    city: "Vijayawada",
    type: "Regional Office",
    address: "2nd Floor, Radhakrishna nivas, Opp: PVP mall, Labbipet, Beside Malabar lane, Vijayawada, Andhra Pradesh, Pincode: 520002",
    phones: ["+91 8464 077770", "888666 1875"],
    mapLink: "https://maps.app.goo.gl/kHAdjoyymQoupSie6",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/vijayawada-kanaka-durga-temple.jpg?updatedAt=1776492282159",
    monument: "Kanaka Durga Temple"
  },
  {
    city: "Vishakapatnam",
    type: "Regional Office",
    address: "3rd floor, Sujatha nagar, Near 80 feet road, Sai sampath residence, Vishakapatnam",
    phones: ["+91 8501 077770", "888666 1874"],
    mapLink: "https://maps.app.goo.gl/K2wemTdSKxPvSWDz8",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/visakhapatnam-kailasagiri.jpg?updatedAt=1776492281959",
    monument: "Kailasagiri"
  },
  {
    city: "Bangalore",
    type: "Regional Office",
    address: "2nd floor, new bel road, chikkamaranahalli, near MS Ramaiah medical college, Bangalore, Pincode: 560094",
    phones: ["+91 7204 821775", "888 666 9980"],
    mapLink: "https://goo.gl/maps/bangalore",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/bangalore-vidhana-soudha.jpg?updatedAt=1776492281129",
    monument: "Vidhana Soudha"
  },
  {
    city: "Chennai",
    type: "Regional Office",
    address: "Ground floor, Rajathi Street, Cholan Nagar, Madambakam, Chennai, Pincode: 600073",
    phones: ["+91 6369 828113", "958 120 0958"],
    mapLink: "https://goo.gl/maps/chennai",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/chennai-lighthouse.jpg?updatedAt=1776492281253",
    monument: "Marina Beach Lighthouse"
  },
  {
    city: "Delhi",
    type: "Regional Office",
    address: "Ground floor, Delhi NCR",
    phones: ["+91 79827 20433", "97182 13653"],
    mapLink: "https://goo.gl/maps/delhi",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/delhi-india-gate.jpg?updatedAt=1776492281269",
    monument: "India Gate"
  },
  {
    city: "Mahabubnagar",
    type: "Regional Office",
    address: "Ground floor, Mahabubnagar",
    phones: ["+91 70957 16338", "95506 40306"],
    mapLink: "https://goo.gl/maps/mahabubnagar",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/mahabubnagar-pillalamarri.jpg?updatedAt=1776492282139",
    monument: "Pillalamarri Banyan Tree"
  },
  {
    city: "Nalgonda",
    type: "Regional Office",
    address: "Ground floor, Nalgonda",
    phones: ["+91 7729 077770", "7729 077770"],
    mapLink: "https://goo.gl/maps/nalgonda",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/nalgonda-nagarjuna-sagar.jpg?updatedAt=1776492281884",
    monument: "Nagarjuna Sagar Dam"
  },
  {
    city: "Nizamabad",
    type: "Regional Office",
    address: "Ground floor, Nizamabad",
    phones: ["+91 83095 23891", "95506 40306"],
    mapLink: "https://goo.gl/maps/nizamabad",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/nizamabad-fort.jpg?updatedAt=1776492281955",
    monument: "Nizamabad Fort"
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.website) return;

    // Validate fields
    const newErrors = {};
    const emailValidation = validateEmail(formData.email);
    const phoneValidation = validatePhone(formData.phone);

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!emailValidation.valid) {
      newErrors.email = emailValidation.message;
    }
    if (!phoneValidation.valid) {
      newErrors.phone = phoneValidation.message;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const whatsappMessage = `Hi, I'm ${formData.name}. ${formData.message}. Contact: ${formData.phone}, Email: ${formData.email}`;
    window.open(
      `https://api.whatsapp.com/send/?phone=919885852424&text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    setTimeout(() => setIsSubmitting(false), 1000);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Contact Us"
        subtitle="Connect with our expert counselors for personalized guidance"
        breadcrumb="Contact Us"
      />

      {/* Contact Info Bar */}
      <section className="py-8 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+91 9010060000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>info@gvkedutech.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices Grid */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold tracking-wide uppercase text-sm">
              Our Locations
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
              Regional Offices Across India
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Visit any of our conveniently located offices for personalized counseling and comprehensive guidance on your study abroad journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border hover:border-accent transition-all duration-300 bg-card"
              >
                {/* City Image with Monument */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={office.image}
                    alt={`${office.monument} - ${office.city}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      office.type === "Head Office"
                        ? "bg-accent text-white"
                        : "bg-primary/20 text-primary"
                    }`}>
                      {office.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {office.city}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground line-clamp-2">{office.address}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        {office.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="hover:text-accent transition-colors block"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <a
                      href={office.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent font-medium text-sm hover:underline"
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      View on Maps
                    </a>
                    <Link
                      href={`/branches/${office.city.toLowerCase()}`}
                      className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold tracking-wide uppercase text-sm">
                Get In Touch
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2">
                Send Us a Message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot field - hidden from users, only bots will fill it */}
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
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="contact-name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`h-12 ${errors.name ? "border-destructive focus:border-destructive" : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`h-12 ${errors.email ? "border-destructive focus:border-destructive" : ""}`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="contact-phone"
                  required
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`h-12 ${errors.phone ? "border-destructive focus:border-destructive" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Share your study abroad aspirations with us..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="min-h-32"
                />
              </div>
              <Button
                type="submit"
                variant="accent"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message via WhatsApp"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;