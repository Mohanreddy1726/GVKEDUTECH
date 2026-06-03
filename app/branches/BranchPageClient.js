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
    address: "No:14, 2nd Floor, B Block, ABO Junction, GST Road, Chromepet, Chennai, Tamil Nadu, Pincode: 600044",
    phones: ["+91 8754435016", "+91 7907757770"],
    mapLink: "https://goo.gl/maps/chennai",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/chennai-marina-beach.jpg?updatedAt=1776492281356",
    monument: "Marina Beach",
    regionalDirector: "Mrs. Vandana",
    qualification: "M.Com, MBA"
  },
  {
    city: "Nellore",
    type: "Regional Office",
    address: "2nd Floor, Above Reliance Digital, Brindavan Complex, Near Gunaseema, Nellore, Andhra Pradesh, Pincode: 524001",
    phones: ["+91 8309966661", "+91 7997527770"],
    mapLink: "https://goo.gl/maps/nelore",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Nellore.jpeg",
    monument: "Sri Venkateswara Swami Devasthanam",
    regionalDirector: "Mr. Nandu",
    qualification: "B.Tech, MBA"
  },
  {
    city: "Vijayawada",
    type: "Regional Office",
    address: "2nd Floor,Above Metro Shoes, Near Benz Circle, MG Road, Vijayawada, Andhra Pradesh, Pincode: 520010",
    phones: ["+91 9182667770", "+91 9100757770"],
    mapLink: "https://goo.gl/maps/vijayawada",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Vijayawada.jpg",
    monument: "Prakasam Barrage",
    regionalDirector: "Mr. Rajesh",
    qualification: "M.Com, MBA"
  },
  {
    city: "Tirupati",
    type: "Regional Office",
    address: "2nd Floor, Near Railway Station, Tirupati, Andhra Pradesh, Pincode: 517501",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/tirupati",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Tirupati.jpg",
    monument: "Tirumala Temple",
    regionalDirector: "Mrs. Lakshmi",
    qualification: "M.Sc, B.Ed"
  },
  {
    city: "Suryapet",
    type: "Regional Office",
    address: "2nd Floor, opp: Bus Stand, Suryapet, Telangana, Pincode: 508213",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/suryapet",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Suryapet.jpg",
    monument: "Kcheck Suray Mandir",
    regionalDirector: "Mr. Shobarani",
    qualification: "B.Com, MBA"
  },
  {
    city: "Visakhapatnam",
    type: "Regional Office",
    address: "2nd Floor, Dwaraka Nagar, Near Big Bazaar, Visakhapatnam, Andhra Pradesh, Pincode: 530016",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/visakhapatnam",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/visakhapatnam.jpg",
    monument: "Kailasagiri",
    regionalDirector: "Mr. Srinivas",
    qualification: "M.Com, MBA"
  },
  {
    city: "Nalgonda",
    type: "Regional Office",
    address: "2nd Floor, Opp: Police Station, Nalgonda, Telangana, Pincode: 508001",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/nalgonda",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Nalgonda.jpg",
    monument: "Nalgonda Fort",
    regionalDirector: "Mr. Ramesh",
    qualification: "B.Sc, B.Ed"
  },
  {
    city: "Karimnagar",
    type: "Regional Office",
    address: "2nd Floor, Savitha Apartment, Opposite: Bus Stand, Karimnagar, Telangana, Pincode: 505001",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://www.google.com/maps/place/GVK+EDUTECH+SERVICES+-+Best+MBBS+Consultancy+in+Karimnagar+%7C+MBBS+in+Abroad+%7C+Best+Overseas+Educational+Consultancy/@18.4372006,79.1240267,1220m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bccd9ea035775b3:0xdb03b029ee1e7138!8m2!3d18.4372006!4d79.1240267!16s%2Fg%2F11ydr3jw8q?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D",
    image: "https://ik.imagekit.io/abhobz66j/GVK%20Images/Karimnagar.jpg",
    monument: "Elgandal Fort",
    regionalDirector: "Mr. Shiva",
    qualification: "B.Com, MBA"
  }
];

const BranchPageClient = () => {
  const params = useParams();
  const city = params?.city || "hyderabad";

  const office = offices.find(
    (o) => o.city.toLowerCase() === city.toLowerCase()
  );

  if (!office) {
    return <notFound />;
  }

  return (
    <PageLayout>
      <PageHeader
        title={`GVK EduTech ${office.city}`}
        subtitle={office.type}
        breadcrumb={`Branches / ${office.city}`}
      />

      <section className="py-16 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={office.image}
                alt={office.monument}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white/80 text-sm">{office.monument}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {office.type}
                </Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  GVK EduTech {office.city}
                </h2>
                <p className="text-muted-foreground flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  {office.address}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {office.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {phone}
                  </a>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi, I am interested in studying abroad. Please guide me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-accent hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>

              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Regional Director
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">
                        {office.regionalDirector?.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{office.regionalDirector}</p>
                      <p className="text-sm text-muted-foreground">
                        {office.qualification}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our Other Branch Offices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices
              .filter((o) => o.city.toLowerCase() !== city.toLowerCase())
              .slice(0, 6)
              .map((o) => (
                <Link
                  key={o.city}
                  href={`/branches/${o.city.toLowerCase()}`}
                  className="group block"
                >
                  <Card className="overflow-hidden hover:border-accent transition-colors">
                    <div className="relative h-40">
                      <Image
                        src={o.image}
                        alt={o.city}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold group-hover:text-accent transition-colors">
                        {o.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {o.type}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

function Badge({ children, variant = "default" }) {
  const variantClasses = {
    default: "bg-accent text-accent-foreground",
    secondary: "bg-muted text-muted-foreground",
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}

export default BranchPageClient;