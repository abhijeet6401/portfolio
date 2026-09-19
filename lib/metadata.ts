import { Metadata } from "next";

export const siteBaseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://abhijeetkumar.dev";

export function generatePageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteBaseUrl}${path}`;
  const fullTitle = `${title} · Abhijeet Kumar`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteBaseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Abhijeet Kumar · Product Builder",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhijeet Kumar",
    jobTitle: "Product Builder",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IIT Kharagpur",
    },
    knowsAbout: [
      "Product Management",
      "Operations Strategy",
      "Business Analytics",
      "Quantitative Modeling",
      "Artificial Intelligence Applications",
    ],
    url: siteBaseUrl,
  };
}

export function getBreadcrumbJsonLd(items: Array<{ name: string; item: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${siteBaseUrl}${item.item}`,
    })),
  };
}
