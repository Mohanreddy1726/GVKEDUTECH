const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gvkedutech.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "GVK EduTech",
  description: "Expert MBBS abroad guidance for Indian students. 15+ years excellence in international medical education.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+91-9885852424",
  email: "info@gvkedutech.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Telangana",
    addressLocality: "Hyderabad",
  },
  sameAs: [
    "https://www.facebook.com/gvkedutech",
    "https://www.instagram.com/gvkedutech",
    "https://www.linkedin.com/company/gvkedutech",
    "https://twitter.com/gvkedutech",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GVK EduTech",
  url: SITE_URL,
  description: "Expert MBBS abroad guidance for Indian students. Low-cost medical universities in Russia, Georgia, Kyrgyzstan, Kazakhstan.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MBBS Abroad for Indian Students: Complete Guide 2026",
  description: "Everything Indian students need to know about studying MBBS abroad - costs, universities, eligibility, visa process.",
  author: { "@type": "Organization", name: "GVK EduTech" },
  publisher: { "@type": "Organization", name: "GVK EduTech" },
  datePublished: "2026-01-15",
  dateModified: new Date().toISOString(),
  image: `${SITE_URL}/og-image.png`,
};

export const organizationJsonLd = JSON.stringify(organizationSchema);
export const websiteJsonLd = JSON.stringify(websiteSchema);
export const articleJsonLd = JSON.stringify(articleSchema);

export function WebSiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: websiteJsonLd }}
    />
  );
}

export function ArticleSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: articleJsonLd }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: organizationJsonLd }}
    />
  );
}

export function BreadcrumbSchema({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
