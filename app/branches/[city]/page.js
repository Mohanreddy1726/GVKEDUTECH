"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ArrowLeft, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";


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
    mapLink: "https://maps.app.goo.gl/kHAdjoyymQoupSie6",
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

const BranchPage = () => {
  const params = useParams();
  const citySlug = params.city;

  const office = offices.find(
    (o) => o.city.toLowerCase() === citySlug.toLowerCase()
  );

  if (!office) {
    return (
      <PageLayout>
        <PageHeader title="Branch Not Found" breadcrumb="Branches" />
        <section className="py-16 section-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Branch Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The requested branch could not be found.
            </p>
            <Button asChild>
              <Link href="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Contact
              </Link>
            </Button>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHeader
        title={office.city}
        subtitle={office.type}
        backgroundImage={office.image}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: office.city },
        ]}
      />

      {/* Branch Overview */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Office Image */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={office.image}
                alt={office.monument}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded-full">
                  {office.type}
                </span>
              </div>
            </div>

            {/* Office Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {office.city} Office
                </h2>
                <p className="text-muted-foreground">
                  Visit us at our {office.type.toLowerCase()} for personalized counseling and guidance
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Address</p>
                      <p className="text-foreground font-medium">{office.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <div className="space-y-1">
                        {office.phones.map((phone, idx) => (
                          <a
                            key={idx}
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="text-foreground font-medium hover:text-accent transition-colors block"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Working Hours</p>
                      <p className="text-foreground font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-foreground font-medium">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-4">
                <Button asChild variant="accent" size="lg">
                  <a href={office.mapLink} target="_blank" rel="noopener noreferrer">
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <a href={`https://api.whatsapp.com/send/?phone=919010060000&text=Hi, I'm interested in GVK Edutech ${office.city} office. Please guide me.`}>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Services at {office.city} Office
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our {office.city} team provides comprehensive study abroad services to help you achieve your dreams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Free Career Counseling",
              "University Selection Guidance",
              "Application Support",
              "Visa Assistance",
              "Pre-Departure Briefing",
              "Post-Arrival Support",
            ].map((service, index) => (
              <Card key={index} className="border-border hover:border-accent transition-all">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent to-accent/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Visit {office.city} Office Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Our expert counselors are ready to help you with your study abroad journey. Walk in or schedule an appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="xl" className="group">
              <Link href="/apply">
                Apply Now
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </Link>
            </Button>
            <Button asChild size="xl" className="bg-white text-accent hover:bg-white/90 font-semibold">
              <a href={`tel:+919010060000`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* All Branches Grid */}
      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">All Branches</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((o, index) => (
              <Link
                key={index}
                href={`/branches/${o.city.toLowerCase()}`}
                className={`p-4 rounded-xl border transition-all flex items-center gap-3 ${
                  o.city.toLowerCase() === citySlug.toLowerCase()
                    ? "border-accent bg-accent/10"
                    : "border-border bg-card hover:border-accent"
                }`}
              >
                <span className={`fi fi-${getFlagForCity(o.city)} text-xl`}></span>
                <div>
                  <p className="font-medium text-foreground">{o.city}</p>
                  <p className="text-xs text-muted-foreground">{o.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/contact">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Contact
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

function getFlagForCity(city) {
  const flags = {
    hyderabad: "in", warangal: "in", karimnagar: "in", khammam: "in",
    vijayawada: "in", vishakapatnam: "in", bangalore: "in", chennai: "in",
    delhi: "in", mahabubnagar: "in", nalgonda: "in", nizamabad: "in"
  };
  return flags[city.toLowerCase()] || "in";
}

export default BranchPage;
