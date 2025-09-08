import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Camera, Printer, Palette } from "lucide-react";

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  salePrice?: string;
  currencySymbol?: string;
  description?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Hello Start",
    price: "1999",
    salePrice: "1099",
    currencySymbol: "€",
    description: "Ihr professioneller Start im Web.",
    features: [
      "Webseite",
      "One-Pager (1 Startseite, bis zu 5 Sektionen)",
      "2 rechtliche Seiten (Impressum & Datenschutz)",
      "Responsives Design für alle Endgeräte",
      "Individuelles Design",
      "Domain & Hosting inklusive (1 Jahr)",
      "Keyword-Recherche & -Optimierung",
      "Technische SEO & Pagespeed-Optimierung",
      "Einsprachigkeit (z. B. nur DE)",
      "Fotografie",
      "15 Fotos (Produkte oder Location)",
      "Bildbearbeitung & Weboptimierung",
      "Print & Medien",
      "100 Visitenkarten (Design & Druck)",
    ],
  },
  {
    title: "Hello Pro",
    price: "2999",
    salePrice: "1799",
    currencySymbol: "€",
    isPopular: true,
    description: "Mehr Details für mehr Wachstum.",
    features: [
      "Webseite",
      "Startseite + bis zu 4 gestaltete Unterseiten",
      "2 rechtliche Seiten (Impressum & Datenschutz)",
      "Responsives Design für alle Endgeräte",
      "Individuelles Webdesign",
      "Domain & Hosting inklusive (1 Jahr)",
      "Keyword-Recherche & -Optimierung",
      "Technische SEO & Pagespeed-Optimierung",
      "Einsprachigkeit (z. B. nur DE)",
      "Fotografie",
      "40 Fotos (Produkte & Location)",
      "Bildbearbeitung & Weboptimierung",
      "Print & Medien",
      "250 Visitenkarten (Design & Druck)",
      "Flyer oder Preislisten (Design)",
    ],
  },
  {
    title: "Hello VIP",
    price: "4899",
    salePrice: "2999",
    currencySymbol: "€",
    description: "Die Premium-Lösung für Ihre Marke.",
    features: [
      "Webseite",
      "Startseite + bis zu 7 gestaltete Unterseiten",
      "Alle notwendigen rechtlichen Seiten",
      "Responsives Design für alle Endgeräte",
      "Individuelles Premium-Webdesign",
      "Domain & Hosting inklusive (1 Jahr)",
      "Keyword-Recherche & -Optimierung",
      "Technische SEO & Pagespeed-Optimierung",
      "Mehrsprachigkeit (z. B. DE/EN/TR)",
      "Fotografie",
      "100 Fotos (Produkte, Location, Team & Portraits)",
      "Bildbearbeitung & Weboptimierung",
      "Print & Medien",
      "500 Visitenkarten (Design & Druck)",
      "Flyer oder Preislisten (Design & Druck)",
    ],
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card
      className={`relative glass-card transition-all duration-300 hover:scale-105 ${
        plan.isPopular ? "border-primary/50 " : "border-border-secondary"
      }`}
    >
      {plan.isPopular && (
        <Badge
          variant="secondary"
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 border-0"
        >
          🔥 Am beliebtesten
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-text-primary">
          {plan.title}
        </CardTitle>
        {plan.description && (
          <p className="text-sm text-text-secondary mb-2">{plan.description}</p>
        )}
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold text-primary">
            {plan.currencySymbol}
            {plan.salePrice}
          </span>
          <span className="text-xl text-text-tertiary line-through">
            {plan.currencySymbol}
            {plan.price}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              {feature === "" ? (
                <div className="h-px bg-border-secondary flex-grow my-2"></div>
              ) : feature.startsWith("Branding & Design") ? (
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              ) : feature.startsWith("Webseite") ? (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              ) : feature.startsWith("Fotografie") ? (
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              ) : feature.startsWith("Print & Medien") ? (
                <div className="flex items-center gap-2">
                  <Printer className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              ) : (
                <>
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm">{feature}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Transparente Preise
          </h2>
          <p className="text-xl text-text-secondary">
            Transparente Preise für Webdesign, Fotografie und Printdesign in
            Berlin - für jeden Bedarf das richtige Paket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
