import { Poppins, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { OrganizationSchema, ArticleSchema, WebSiteSchema } from "@/components/SEO";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gvkedutech.com";

export function generateMetadata(req) {
  const lastModified = new Date().toISOString();
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Best MBBS Abroad Consultancy in Hyderabad | GVK EduTech - Top Medical University Admissions 2026",
      template: "%s | GVK EduTech Hyderabad",
    },
    description: "Looking for the best MBBS abroad consultancy in Hyderabad? GVK EduTech offers expert guidance for MBBS in Russia, Georgia, Kyrgyzstan & more. 5000+ students placed. Free counseling. Call +91 9010060000",
    keywords: [
      "MBBS abroad consultancy in Hyderabad",
      "best MBBS abroad consultancy in Hyderabad",
      "MBBS in Hyderabad consultancy",
      "study MBBS abroad Hyderabad",
      "MBBS abroad for Indian students",
      "top MBBS abroad consultants Hyderabad",
      "MBBS in Russia for Indian students Hyderabad",
      "MBBS in Georgia for Indian students Hyderabad",
      "low cost MBBS abroad Hyderabad",
      "medical education abroad consultancy",
      "MBBS in Kyrgyzstan for Indian students",
      "study medicine abroad from Hyderabad",
      "NMC approved medical universities abroad",
      "MBBS abroad with scholarship Hyderabad",
      "MBBS abroad consultant near me",
      "overseas education consultancy Hyderabad",
      "study abroad consultancy Secunderabad",
      "medical university abroad for Indian students",
      "Masters abroad programs Hyderabad",
      "GVK EduTech Hyderabad",
    ],
    authors: [{ name: "Mohan reddy" }],
    creator: "Mohan reddy",
    publisher: "Mohan reddy",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: SITE_URL,
      siteName: "GVK EduTech - Best MBBS Abroad Consultancy in Hyderabad",
      title: "Best MBBS Abroad Consultancy in Hyderabad | GVK EduTech",
      description: "Top-rated MBBS abroad consultancy in Hyderabad. Expert guidance for MBBS in Russia, Georgia, Kyrgyzstan. 5000+ doctors placed. Free counseling available.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "GVK EduTech - Best MBBS Abroad Consultancy in Hyderabad",
        },
      ],
      updated_time: lastModified,
    },
    twitter: {
      card: "summary_large_image",
      title: "Best MBBS Abroad Consultancy in Hyderabad | GVK EduTech",
      description: "Top MBBS abroad consultancy in Hyderabad. Low-cost medical universities in Russia, Georgia, Kyrgyzstan. 5000+ doctors placed.",
      images: ["/og-image.png"],
      creator: "@gvkedutech",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxVideoPreview: -1,
        maxImagePreview: "large",
        maxSnippet: -1,
      },
    },
    verification: {
      google: "your-google-site-verification-token",
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <WebSiteSchema />
        <OrganizationSchema />
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}