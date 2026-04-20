import { Poppins, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { OrganizationSchema } from "@/components/SEO";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.gvkedutech.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GVK EduTech - Your Gateway to Medical Education Abroad",
    template: "%s | GVK EduTech",
  },
  description: "GVK EduTech is your trusted partner for MBBS and Masters programs at leading global universities. 15+ years of excellence in international education consultancy.",
  keywords: ["MBBS abroad", "medical education", "study medicine abroad", "international medical degree", "MBBS in Russia", "MBBS in Georgia", "Masters abroad", "education consultancy"],
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
    title: "GVK EduTech - Your Gateway to Medical Education Abroad",
    description: "GVK EduTech is your trusted partner for MBBS and Masters programs at leading global universities. 15+ years of excellence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GVK EduTech - Medical Education Abroad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GVK EduTech - Your Gateway to Medical Education Abroad",
    description: "GVK EduTech is your trusted partner for MBBS and Masters programs at leading global universities.",
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter">
        <OrganizationSchema />
        {children}
        <Toaster />
      </body>
    </html>
  );
}