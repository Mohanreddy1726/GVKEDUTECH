"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, ArrowLeft, MessageCircle, Star, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export function generateMetadata({ params }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return {
    title: `Study Abroad Consultancy in ${city} | GVK EduTech`,
    description: `GVK EduTech - Best study abroad consultancy in ${city}. Expert guidance for MBBS and Masters abroad. Contact our ${city} office for free counseling.`,
    keywords: [`study abroad consultancy ${city}`, `MBBS abroad ${city}`, `education consultancy ${city}`, `GVK EduTech ${city}`],
  };
}

const offices = [
  {
    city: "Hyderabad",
    type: "Head Office",
    address: "3rd Floor, Shiva sai Commercial Building, Shivam X Road, Vidya Nagar Opp: Reliance Digital, Hyderabad, Telangana, Pin: 500044",
    phones: ["+91 8331077770", "+91 9010060000"],
    mapLink: "https://maps.app.goo.gl/HSBuYGWVxe46562SA",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/hyderabad-charminar.jpg?updatedAt=1776492282091",
    monument: "Charminar",
    regionalDirector: "Mrs. Reena Kamal",
    qualification: "B.Com, MBA"
  },
  {
    city: "Warangal",
    type: "Regional Office",
    address: "3rd Floor S.V arcade, opp: Suprabha Hotel, Nakkalagutta, Hanamkonda, Warangal, Telangana, Pincode: 506001",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/hjC7b2FAPNQYTr3k8",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/warangal-thousand-pillar-temple.jpg?updatedAt=1776492282027",
    monument: "Thousand Pillar Temple",
    regionalDirector: "Mrs. Geetha Rejesh",
    qualification: "MA, B.Sc, B.Ed"
  },
  {
    city: "Bangalore",
    type: "Regional Office",
    address: "2nd floor, new bel road, chikkamaranahalli, near MS Ramaiah medical college, Bangalore, Pincode: 560094",
    phones: ["+91 8147533806", "+91 7676167469"],
    mapLink: "https://goo.gl/maps/bangalore",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/bangalore-vidhana-soudha.jpg?updatedAt=1776492281129",
    monument: "Vidhana Soudha",
    regionalDirector: "Mr. Chandan Singh",
    qualification: "MBA"
  },
  {
    city: "Chennai",
    type: "Regional Office",
    address: "Ground floor, Rajathi Street, Cholan Nagar, Madambakam, Chennai, Pincode: 600073",
    phones: ["+91 7997994778", "+91 7997994779"],
    mapLink: "https://goo.gl/maps/chennai",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/chennai-lighthouse.jpg?updatedAt=1776492281253",
    monument: "Marina Beach Lighthouse",
    regionalDirector: "Mrs. Aarathi Sukumar Reddy",
    qualification: "M.Sc Biotechnology"
  },
  {
    city: "Nellore",
    type: "Regional Office",
    address: "Nellore, Andhra Pradesh",
    phones: ["+91 8886669980", "+91 8465077770"],
    mapLink: "https://goo.gl/maps/nellore",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/nellore-srisailam.jpg?updatedAt=1776492282000",
    monument: "Srisailam Dam",
    regionalDirector: "Mr. Amarnath Reddy & Mrs. Rajeswari Reddy",
    qualification: "M.Sc Biotechnology & M.Sc Organic Chemistry"
  },
  {
    city: "Vijayawada",
    type: "Regional Office",
    address: "2nd Floor, Radhakrishna nivas, Opp: PVP mall, Labbipet, Beside Malabar lane, Vijayawada, Andhra Pradesh, Pincode: 520002",
    phones: ["+91 8886661875", "+91 8464077770"],
    mapLink: "https://maps.app.goo.gl/kHAdjoyymQoupSie6",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/vijayawada-kanaka-durga-temple.jpg?updatedAt=1776492282159",
    monument: "Kanaka Durga Temple",
    regionalDirector: "Dr. Siva Sai Varanasi",
    qualification: "MBBS"
  },
  {
    city: "Tirupati",
    type: "Regional Office",
    address: "Tirupati, Andhra Pradesh",
    phones: ["+91 9494289424", "+91 9000492589"],
    mapLink: "https://goo.gl/maps/tirupati",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/tirupati-tirumala.jpg?updatedAt=1776492281950",
    monument: "Tirumala Temple",
    regionalDirector: "Mr. Aluvala Madhu",
    qualification: "B.Sc(B.Z.C), B.P.Ed"
  },
  {
    city: "Suryapet",
    type: "Regional Office",
    address: "Suryapet, Telangana",
    phones: ["+91 9949200740", "+91 7729077770"],
    mapLink: "https://goo.gl/maps/suryapet",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/suryapet-kuntala-falls.jpg?updatedAt=1776492281980",
    monument: "Kuntala Falls",
    regionalDirector: "Mrs. Shoba Rani",
    qualification: "B.A"
  },
  {
    city: "Visakhapatnam",
    type: "Regional Office",
    address: "3rd floor, Sujatha nagar, Near 80 feet road, Sai sampath residence, Vishakapatnam",
    phones: ["+91 8886661874", "+91 8501077770"],
    mapLink: "https://maps.app.goo.gl/K2wemTdSKxPvSWDz8",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/visakhapatnam-kailasagiri.jpg?updatedAt=1776492281959",
    monument: "Kailasagiri",
    regionalDirector: "Mr. Kiran Kumar",
    qualification: "M.Sc, M.A, B.Ed"
  },
  {
    city: "Nalgonda",
    type: "Regional Office",
    address: "Ground floor, Nalgonda",
    phones: ["+91 9966112050", "+91 8886669981"],
    mapLink: "https://goo.gl/maps/nalgonda",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/nalgonda-nagarjuna-sagar.jpg?updatedAt=1776492281884",
    monument: "Nagarjuna Sagar Dam",
    regionalDirector: "Mr. Venkanna",
    qualification: "M.A, M.Ed"
  },
  {
    city: "Karimnagar",
    type: "Regional Office",
    address: "2nd Floor, Radhakrishna nivas, Opp: PVP mall, Labbipet, Karimnagar",
    phones: ["+91 9951343362", "+91 9704511943"],
    mapLink: "https://www.google.com/maps/place/GVK+EDUTECH+SERVICES+-+Best+MBBS+Consultancy+in+Karimnagar+%7C+MBBS+in+Abroad+%7C+Best+Overseas+Educational+Consultancy/@18.4372006,79.1240267,1220m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bccd9ea035775b3:0xdb03b029ee1e7138!8m2!3d18.4372006!4d79.1240267!16s%2Fg%2F11ydr3jw8q?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/karimnagar-elgandal-fort.jpg?updatedAt=1776492281954",
    monument: "Elgandal Fort",
    regionalDirector: "Mr. Nandu",
    qualification: "B.Sc"
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

              {/* Regional Director Info */}
              {office.regionalDirector && (
                <Card className="border-accent bg-gradient-to-r from-accent/5 to-accent/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                        <User className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Regional Director</p>
                        <p className="font-bold text-foreground text-lg">{office.regionalDirector}</p>
                        <p className="text-accent text-sm font-medium">{office.qualification}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

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
    hyderabad: "in", warangal: "in", bangalore: "in", chennai: "in",
    nellore: "in", vijayawada: "in", tirupati: "in", suryapet: "in",
    visakhapatnam: "in", nalgonda: "in", karimnagar: "in"
  };
  return flags[city.toLowerCase()] || "in";
}

export default BranchPage;