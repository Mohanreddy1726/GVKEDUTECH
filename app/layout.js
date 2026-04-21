import { Poppins, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { OrganizationSchema, ArticleSchema, WebSiteSchema } from "@/components/SEO";
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
      default: "GVK EduTech | MBBS Abroad for Indian Students - Top Medical Universities 2026",
      template: "%s | GVK EduTech",
    },
    description: "Expert MBBS abroad guidance for Indian students. Low-cost medical universities in Russia, Georgia, Kyrgyzstan, Kazakhstan. 5000+ doctors placed. Free counseling.",
    keywords: [
      "MBBS abroad for Indian students",
      "study medicine abroad",
      "MBBS in Russia for Indian students",
      "MBBS in Georgia for Indian students",
      "low cost MBBS abroad",
      "medical education abroad",
      "Masters abroad programs",
      "international medical degree",
      "MBBS in Kyrgyzstan for Indian students",
      "study MBBS abroad consultancy",
      "overseas education for Indian students",
      "NMC approved medical universities abroad",
      "cheap MBBS abroad for Indian students",
      "MBBS abroad with scholarship",
      "medical university abroad for Indian students",
    ],
    authors: [{ name: "GVK EduTech" }],
    creator: "GVK EduTech",
    publisher: "GVK EduTech",
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
      locale: "en_US",
      url: SITE_URL,
      siteName: "GVK EduTech",
      title: "GVK EduTech | MBBS Abroad for Indian Students - Top Medical Universities 2026",
      description: "Expert MBBS abroad guidance for Indian students. Low-cost medical universities in Russia, Georgia, Kyrgyzstan, Kazakhstan. 5000+ doctors placed. Free counseling.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "GVK EduTech - Medical Education Abroad for Indian Students",
        },
      ],
      updated_time: lastModified,
    },
    twitter: {
      card: "summary_large_image",
      title: "GVK EduTech | MBBS Abroad for Indian Students",
      description: "Expert MBBS abroad guidance. Low-cost medical universities in Russia, Georgia, Kyrgyzstan. 5000+ doctors placed.",
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
      </body>
    </html>
  );
}