import Script from "next/script";
import type { AppDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

type SEOSchemaProps = {
  dictionary: AppDictionary;
  locale: Locale;
};

export function SEOSchema({ dictionary, locale }: SEOSchemaProps) {
  const localeRootUrl = `https://helloberlin365.com/${locale}`;
  const inLanguage = dictionary.metadata.ogLocale.replace("_", "-");

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${localeRootUrl}/#organization`,
    name: "Hello Berlin 365",
    alternateName: dictionary.seoSchema.alternateName,
    description: dictionary.seoSchema.description,
    url: localeRootUrl,
    inLanguage,
    email: "info@helloberlin365.com",
    foundingDate: "2025",
    areaServed: {
      "@type": "City",
      name: "Berlin",
      addressCountry: "DE",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "52.5200",
        longitude: "13.4050",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dictionary.seoSchema.catalogName,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: dictionary.seoSchema.services[0].name,
            description: dictionary.seoSchema.services[0].description,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: dictionary.seoSchema.services[1].name,
            description: dictionary.seoSchema.services[1].description,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: dictionary.seoSchema.services[2].name,
            description: dictionary.seoSchema.services[2].description,
          },
        },
      ],
    },
    employee: [
      {
        "@type": "Person",
        name: "Oktay Shakirov",
        jobTitle: dictionary.seoSchema.employeeJobTitle,
        url: "https://oktayshakirov.com/",
        sameAs: [
          "https://www.linkedin.com/in/oktayshakirov",
          "https://www.instagram.com/oktay.shakirov/",
        ],
      },
    ],
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
