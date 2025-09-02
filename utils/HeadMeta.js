import { WEBSITE_URL } from "@/env";

export function generatePageMetadata(pageData) {
  if (!pageData) return {};

  // Base metadata
  const baseMetadata = {
    title: `${pageData.title} | Optigo Apps`,
    description: pageData.description || "",
    keywords: pageData.keywords || "",
    authors: [{ name: "Optigo Apps" }],
    robots: { index: true, follow: true, nocache: true },
    alternates: { canonical: pageData.url || WEBSITE_URL },
    metadataBase: new URL(WEBSITE_URL),
    icons: { icon: "/favicon.ico" },
    openGraph: {
      title: `${pageData.title} | Optigo Apps`,
      description: pageData.description || "",
      url: pageData.url || WEBSITE_URL,
      siteName: "Optigo Apps",
      type: "website",
      locale: "en_IN",
      images: pageData.image
        ? [
          {
            url: pageData.image,
            width: 1200,
            height: 630,
            alt: `${pageData.title} - Optigo Apps`,
          },
        ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageData.title} | Optigo Apps`,
      description: pageData.description || "",
      images: pageData.image ? [pageData.image] : [],
      creator: "@OptigoApps",
    },
    additionalScripts: [], // Placeholder for structured data
  };

  // JSON-LD for FAQ pages
  if (pageData.type === "faqs" && Array.isArray(pageData.faqs)) {
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pageData.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    baseMetadata.additionalScripts.push({
      type: "application/ld+json",
      json: faqStructuredData,
    });
  }

  // Future: add structured data for products, blog posts, articles, etc.
  // Example: JSON-LD for articles, breadcrumbs, products, events, etc.

  return baseMetadata;
}
