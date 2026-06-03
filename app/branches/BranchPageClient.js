"use client";

import { PageLayout } from "@/components/PageLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  User,
  ArrowUpRight,
  ChevronRight,
  Building2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

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
    regionalDirector: "Mrs. Reena Kamal",
    qualification: "B.Com, MBA",
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
    regionalDirector: "Mrs. Geetha Rejesh",
    qualification: "MA, B.Sc, B.Ed",
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
    regionalDirector: "Mr. Chandan Singh",
    qualification: "MBA",
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
    regionalDirector: "Mrs. Vandana",
    qualification: "M.Com, MBA",
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
    regionalDirector: "Mr. Nandu",
    qualification: "B.Tech, MBA",
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
    regionalDirector: "Mr. Rajesh",
    qualification: "M.Com, MBA",
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
    regionalDirector: "Mrs. Lakshmi",
    qualification: "M.Sc, B.Ed",
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
    regionalDirector: "Mr. Shobarani",
    qualification: "B.Com, MBA",
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
    regionalDirector: "Mr. Srinivas",
    qualification: "M.Com, MBA",
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
    regionalDirector: "Mr. Ramesh",
    qualification: "B.Sc, B.Ed",
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
    regionalDirector: "Mr. Shiva",
    qualification: "B.Com, MBA",
  },
];

/* ─── tiny helpers ─── */
function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/* ─── Badge ─── */
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

/* ─── InfoRow ─── */
function InfoRow({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3 text-sm text-muted-foreground">
      <Icon className="w-4 h-4 mt-0.5 shrink-0 text-[hsl(var(--accent))]" />
      <span>{children}</span>
    </div>
  );
}

/* ─── BranchCard (other offices) ─── */
function BranchCard({ office, currentCity }) {
  const isHead = office.type === "Head Office";
  return (
    <Link
      href={`/branches/${office.city.toLowerCase()}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[hsl(var(--accent))]"
    >
      {/* image */}
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

      {/* content */}
      <div className="flex-1 p-4 space-y-1">
        <h3 className="font-semibold text-base text-foreground group-hover:text-[hsl(var(--accent))] transition-colors leading-tight">
          {office.city}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {office.address}
        </p>
      </div>

      {/* footer */}
      <div className="px-4 pb-4 flex items-center justify-between border-t border-border/50 pt-3 mt-auto">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-[hsl(var(--accent))]/10 flex items-center justify-center text-[10px] font-bold text-[hsl(var(--accent))]">
            {initials(office.regionalDirector)}
          </div>
          <span className="text-xs text-muted-foreground truncate max-w-[120px]">
            {office.regionalDirector}
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-[hsl(var(--accent))] transition-colors" />
      </div>
    </Link>
  );
}

/* ─── Main component ─── */
const BranchPageClient = ({ city }) => {
  const currentCity = city?.toLowerCase() || "hyderabad";

  const office = offices.find(
    (o) => o.city.toLowerCase() === currentCity.toLowerCase()
  );

  if (!office) return notFound();

  const isHead = office.type === "Head Office";
  const otherOffices = offices.filter(
    (o) => o.city.toLowerCase() !== currentCity.toLowerCase()
  );

  return (
    <PageLayout>
      <PageHeader
        title={`GVK EduTech ${office.city}`}
        subtitle={office.type}
        breadcrumb={`Branches / ${office.city}`}
      />

      {/* ── Hero section ── */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* LEFT: image — spans 3 cols */}
            <div className="lg:col-span-3 space-y-4">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={office.image}
                  alt={office.monument}
                  fill
                  priority
                  className="object-cover"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                {/* type badge top-left */}
                <div className="absolute top-5 left-5">
                  <Badge variant={isHead ? "head" : "regional"}>
                    {isHead ? (
                      <Building2 className="w-3 h-3" />
                    ) : (
                      <MapPin className="w-3 h-3" />
                    )}
                    {office.type}
                  </Badge>
                </div>

                {/* monument name bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-medium text-white/60 uppercase tracking-widest mb-1">
                    Landmark
                  </p>
                  <p className="text-white text-xl font-semibold leading-tight">
                    {office.monument}
                  </p>
                </div>
              </div>

              {/* Hours strip */}
              <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-border bg-muted/30">
                <Clock className="w-4 h-4 text-[hsl(var(--accent))] shrink-0" />
                <div>
                  <span className="text-sm font-medium text-foreground">
                    Office Hours
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    Monday – Saturday: 9:00 AM – 7:00 PM
                  </span>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open Now
                </span>
              </div>
            </div>

            {/* RIGHT: details — spans 2 cols */}
            <div className="lg:col-span-2 space-y-6">

              {/* heading */}
              <div>
                <h2 className="text-3xl font-bold text-foreground leading-tight mb-3">
                  GVK EduTech<br />
                  <span className="text-[hsl(var(--accent))]">{office.city}</span>
                </h2>
                <InfoRow icon={MapPin}>{office.address}</InfoRow>
              </div>

              {/* divider */}
              <div className="border-t border-border" />

              {/* phones */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Contact Numbers
                </p>
                <div className="flex flex-col gap-2">
                  {office.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card hover:border-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/5 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/10 flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5 text-[hsl(var(--accent))]" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">
                        {phone}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-150 shadow-md shadow-[hsl(var(--accent))]/20"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions on Maps
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-70" />
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=919010060000&text=Hi, I am interested in studying abroad. Please guide me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-border bg-card font-semibold text-sm hover:border-green-500 hover:text-green-700 hover:bg-green-50 active:scale-[0.98] transition-all duration-150"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* divider */}
              <div className="border-t border-border" />

              {/* Regional Director */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Regional Director
                </p>
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))]/20 to-[hsl(var(--accent))]/5 flex items-center justify-center text-lg font-bold text-[hsl(var(--accent))] shrink-0 border border-[hsl(var(--accent))]/20">
                    {initials(office.regionalDirector)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm leading-tight">
                      {office.regionalDirector}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {office.qualification}
                    </p>
                    <p className="text-xs text-[hsl(var(--accent))] font-medium mt-1">
                      {office.type}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Branches ── */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* section header */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--accent))] mb-2">
                Our Network
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                Other Branch Offices
              </h2>
            </div>
            <Link
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {otherOffices.slice(0, 8).map((o) => (
              <BranchCard key={o.city} office={o} currentCity={currentCity} />
            ))}
          </div>

          {/* mobile "view all" */}
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium hover:border-[hsl(var(--accent))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              View all offices
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BranchPageClient;