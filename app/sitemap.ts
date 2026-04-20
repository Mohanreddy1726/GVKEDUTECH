import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gvkedutech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/apply",
    "/branches/delhi",
    "/branches/hyderabad",
    "/branches/mumbai",
    "/contact",
    "/gallery",
    "/masters",
    "/mbbs",
    "/partner-universities",
    "/services",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const mbbsPages = [
    "/mbbs/georgia",
    "/mbbs/kyrgyzstan",
    "/mbbs/russia",
    "/mbbs/kazakhstan",
    "/mbbs/uzbekistan",
    "/mbbs/vietnam",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const mastersPages = [
    "/masters/australia",
    "/masters/europe",
    "/masters/germany",
    "/masters/uk",
    "/masters/usa",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...mbbsPages, ...mastersPages];
}
