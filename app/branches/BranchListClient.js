"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Building2,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const offices = [
  {
    city: "Hyderabad",
    type: "Head Office",
    address:
      "3rd Floor, Shiva sai Commercial Building, Shivam X Road, Vidya Nagar Opp: Reliance Digital, Hyderabad, Telangana, Pin: 500044",
    phones: ["+91 8331077770", "+91 9010060000"],
    mapLink: "https://maps.app.goo.gl/HSBuYGWVxe46562SA",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/hyderabad-charminar.jpg",
    monument: "Charminar",
  },
  {
    city: "Warangal",
    type: "Regional Office",
    address:
      "3rd Floor S.V arcade, opp: Suprabha Hotel, Nakkalagutta, Hanamkonda, Warangal, Telangana, Pincode: 506001",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/hjC7b2FAPNQYTr3k8",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/warangal-thousand-pillar-temple.jpg",
    monument: "Thousand Pillar Temple",
  },
  {
    city: "Bangalore",
    type: "Regional Office",
    address:
      "2nd floor, new bel road, chikkamaranahalli, near MS Ramaiah medical college, Bangalore, Pincode: 560094",
    phones: ["+91 8147533806", "+91 7676167469"],
    mapLink: "https://goo.gl/maps/bangalore",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/bangalore-vidhana-soudha.jpg",
    monument: "Vidhana Soudha",
  },
  {
    city: "Chennai",
    type: "Regional Office",
    address:
      "No:14, 2nd Floor, B Block, ABO Junction, GST Road, Chromepet, Chennai, Tamil Nadu, Pincode: 600044",
    phones: ["+91 8754435016", "+91 7907757770"],
    mapLink: "https://goo.gl/maps/chennai",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/chennai-lighthouse.jpg?updatedAt=1776492281253",
    monument: "Marina Beach",
  },
  {
    city: "Nellore",
    type: "Regional Office",
    address:
      "2nd Floor, Above Reliance Digital, Brindavan Complex, Near Gunaseema, Nellore, Andhra Pradesh, Pincode: 524001",
    phones: ["+91 8309966661", "+91 7997527770"],
    mapLink: "https://goo.gl/maps/nelore",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115237409.png?updatedAt=1778134962035",
    monument: "Sri Venkateswara Swami Devasthanam",
  },
  {
    city: "Vijayawada",
    type: "Regional Office",
    address:
      "2nd Floor,Above Metro Shoes, Near Benz Circle, MG Road, Vijayawada, Andhra Pradesh, Pincode: 520010",
    phones: ["+91 9182667770", "+91 9100757770"],
    mapLink: "https://goo.gl/maps/vijayawada",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/vijayawada-kanaka-durga-temple.jpg?updatedAt=1776492282159",
    monument: "Prakasam Barrage",
  },
  {
    city: "Tirupati",
    type: "Regional Office",
    address:
      "2nd Floor, Near Railway Station, Tirupati, Andhra Pradesh, Pincode: 517501",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/tirupati",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115255252.png?updatedAt=1778134982235",
    monument: "Tirumala Temple",
  },
  {
    city: "Suryapet",
    type: "Regional Office",
    address:
      "2nd Floor, opp: Bus Stand, Suryapet, Telangana, Pincode: 508213",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/suryapet",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/image_2026-05-07_115307375.png?updatedAt=1778134994086",
    monument: "Kcheck Suray Mandir",
  },
  {
    city: "Visakhapatnam",
    type: "Regional Office",
    address:
      "2nd Floor, Dwaraka Nagar, Near Big Bazaar, Visakhapatnam, Andhra Pradesh, Pincode: 530016",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/visakhapatnam",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/visakhapatnam-kailasagiri.jpg?updatedAt=1776492283059",
    monument: "Kailasagiri",
  },
  {
    city: "Nalgonda",
    type: "Regional Office",
    address:
      "2nd Floor, Opp: Police Station, Nalgonda, Telangana, Pincode: 508001",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink: "https://maps.app.goo.gl/nalgonda",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/nalgonda-nagarjuna-sagar.jpg?updatedAt=1776492281884",
    monument: "Nalgonda Fort",
  },
  {
    city: "Karimnagar",
    type: "Regional Office",
    address:
      "2nd Floor, Savitha Apartment, Opposite: Bus Stand, Karimnagar, Telangana, Pincode: 505001",
    phones: ["+91 7287077770", "+91 9505520297"],
    mapLink:
      "https://www.google.com/maps/place/GVK+EDUTECH+SERVICES+-+Best+MBBS+Consultancy+in+Karimnagar",
    image:
      "https://ik.imagekit.io/abhobz66j/GVK%20Images/karimnagar-elgandal-fort.jpg?updatedAt=1776492281954",
    monument: "Elgandal Fort",
  },
];

function Badge({ children, variant = "default" }) {
  const styles = {
    default:
      "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] border-transparent",
    head: "bg-amber-100 text-amber-800 border-amber-200",
    regional: "bg-sky-100 text-sky-800 border-sky-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase border ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function BranchCard({ office }) {
  const isHead = office.type === "Head Office";
  return (
    <Link
      href={`/branches/${office.city.toLowerCase()}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[hsl(var(--accent))]"
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={office.image}
          alt={office.monument}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant={isHead ? "head" : "regional"}>
            {isHead ? (
              <Building2 className="w-3 h-3" />
            ) : (
              <MapPin className="w-3 h-3" />
            )}
            {office.type}
          </Badge>
        </div>
        <ArrowUpRight className="absolute top-3 right-3 w-4 h-4 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      <div className="flex-1 p-4 space-y-1">
        <h3 className="font-semibold text-base text-foreground group-hover:text-[hsl(var(--accent))] transition-colors leading-tight">
          {office.city}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {office.address}
        </p>
      </div>

      <div className="px-4 pb-4 flex items-center justify-between border-t border-border/50 pt-3 mt-auto">
        <div className="flex items-center gap-1.5">
          <Phone className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {office.phones[0]}
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--accent))] transition-colors" />
      </div>
    </Link>
  );
}

export default function BranchListClient() {
  return (
    <PageLayout>
      <PageHeader
        title="Our Branch Offices"
        subtitle="Visit us for free counseling"
        breadcrumb="Home / Branches"
      />

      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {offices.map((office) => (
              <BranchCard key={office.city} office={office} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}