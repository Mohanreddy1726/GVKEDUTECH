"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 rounded-xl"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] rounded-xl resize-none"
                />
              </div>
              <Button type="submit" variant="accent" size="lg" className="w-full group">
                Send Message
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
                      Hyderabad | Warangal | Vijayawada | Visakhapatnam
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