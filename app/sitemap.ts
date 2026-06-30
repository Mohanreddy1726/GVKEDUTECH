import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gvkedutech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastModified = now.toISOString();

  // Helper for cleaner entries
  const entry = (
    route,
    { changeFrequency = "weekly" as const, priority = 0.7 } = {}
  ) => ({
    url: `${BASE_URL}${route}`,
    lastModified,
    changeFrequency,
    priority,
  });

  // ── Top-priority core pages ────────────────────────────
  const corePages = [
    "",                  // Home
    "/about",
    "/contact",
    "/apply",
    "/partner-universities",
    "/mbbs",
    "/masters",
  ].map((route) => entry(route, { priority: route === "" ? 1 : 0.9 }));

  // ── Mid-priority marketing & info pages ─────────────────
  const marketingPages = [
    "/services",
    "/gallery",
    "/blog",
    "/branches",
    "/disclaimer",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => entry(route, { priority: 0.8 }));

  // ── Resources / guides ─────────────────────────────────
  const resourcesPages = [
    "/resources/credential-evaluation",
    "/resources/nmc-guidelines",
    "/resources/usmle-ecfmg",
    "/resources/who-recognition",
  ].map((route) => entry(route, { priority: 0.8 }));

  // ── MBBS country pages ─────────────────────────────────
  const mbbsPages = [
    "/mbbs/georgia",
    "/mbbs/kazakhstan",
    "/mbbs/kyrgyzstan",
    "/mbbs/nepal",
    "/mbbs/russia",
    "/mbbs/uzbekistan",
    "/mbbs/vietnam",
  ].map((route) => entry(route, { priority: 0.7 }));

  // ── Masters country pages ──────────────────────────────
  const mastersPages = [
    "/masters/australia",
    "/masters/canada",
    "/masters/europe",
    "/masters/germany",
    "/masters/ireland",
    "/masters/newzealand",
    "/masters/uk",
    "/masters/usa",
  ].map((route) => entry(route, { priority: 0.7 }));

  // ── Branch pages (real, existing routes) ───────────────
  const branchPages = [
    "/branches/bangalore",
    "/branches/chennai",
    "/branches/hyderabad",
    "/branches/karimnagar",
    "/branches/nalgonda",
    "/branches/nellore",
    "/branches/suryapet",
    "/branches/tirupati",
    "/branches/vijayawada",
    "/branches/visakhapatnam",
    "/branches/warangal",
  ].map((route) => entry(route, { priority: 0.6 }));

  // ── Hardcoded partner-university detail pages ──────────
  const partnerUniversityPages = [
    "/partner-universities/tbilisi-state-medical-university",
    "/partner-universities/kyrgyz-state-medical-academy",
    "/partner-universities/university-of-greenwich",
    "/partner-universities/kazakh-national-medical-university",
    "/partner-universities/technical-university-of-munich",
    "/partner-universities/batumi-shota-rustaveli-state-university",
    "/partner-universities/university-of-manchester",
    "/partner-universities/osh-state-university",
    "/partner-universities/university-of-birmingham",
    "/partner-universities/samarkand-state-medical-university",
    "/partner-universities/university-of-leeds",
    "/partner-universities/bukhara-state-medical-institute",
    "/partner-universities/university-of-glasgow",
    "/partner-universities/andijan-state-medical-institute",
    "/partner-universities/university-of-liverpool",
    "/partner-universities/teesside-university",
    "/partner-universities/tashkent-medical-academy",
    "/partner-universities/university-of-nottingham",
    "/partner-universities/astana-medical-university",
    "/partner-universities/university-of-sheffield",
    "/partner-universities/perm-state-medical-university",
    "/partner-universities/orenburg-state-medical-university",
    "/partner-universities/university-of-york",
    "/partner-universities/university-of-southampton",
    "/partner-universities/bashkir-state-medical-university",
    "/partner-universities/university-of-bristol",
    "/partner-universities/pirogov-russian-national-medical-university",
    "/partner-universities/university-of-exeter",
  ].map((route) => entry(route, { priority: 0.7 }));

  return [
    ...corePages,
    ...marketingPages,
    ...resourcesPages,
    ...mbbsPages,
    ...mastersPages,
    ...branchPages,
    ...partnerUniversityPages,
  ];
}

export const dynamic = "force-static";
