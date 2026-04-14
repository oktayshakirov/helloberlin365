import Script from "next/script";

export function SEOSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://helloberlin365.com/#organization",
    name: "Hello Berlin 365",
    alternateName:
      "Hello Berlin 365 - Webentwicklung, Drohnenfoto & Drohnenvideo",
    description:
      "Professionelle Webentwicklung, Drohnenfoto & Drohnenvideo und Printdesign Services in Berlin. Spezialisiert auf lokale Unternehmen und Startups.",
    url: "https://helloberlin365.com",
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
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Webdesign & Entwicklung",
            description:
              "Responsive Webseiten mit WordPress und individuellem Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drohnenfoto & Drohnenvideo",
            description:
              "Professionelle Luftaufnahmen und Drohnenvideos für Unternehmen, Immobilien und Events",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Printmedien Design",
            description:
              "Visitenkarten, Flyer, Broschüren und Preislisten Design",
          },
        },
      ],
    },
    employee: [
      {
        "@type": "Person",
        name: "Oktay Shakirov",
        jobTitle: "Softwareentwickler",
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
