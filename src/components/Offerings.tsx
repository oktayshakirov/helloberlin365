import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Camera, Printer, Palette } from "lucide-react";

interface OfferingPlan {
  title: string;
  features: string[];
  isPopular?: boolean;
  description?: string;
}

const offeringPlans: OfferingPlan[] = [
  {
    title: "Einstieg",
    description:
      "Schnell online sichtbar – ideal für den ersten professionellen Auftritt.",
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
      "Drohnenfoto & Drohnenvideo",
      "15 Luftaufnahmen (Foto/Video, Location oder Objekt)",
      "Postproduktion & Weboptimierung",
      "Print & Medien",
      "100 Visitenkarten (Design & Druck)",
    ],
  },
  {
    title: "Wachstum",
    isPopular: true,
    description:
      "Mehr Inhalte und Reichweite – wenn Ihr Geschäft weiter wächst.",
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
      "Drohnenfoto & Drohnenvideo",
      "40 Luftaufnahmen (Foto/Video, Location & Objekt)",
      "Postproduktion & Weboptimierung",
      "Print & Medien",
      "250 Visitenkarten (Design & Druck)",
      "Flyer oder Preislisten (Design)",
    ],
  },
  {
    title: "Umfassend",
    description:
      "Maximale Präsenz – für Marken, die alles aus einem Guss wollen.",
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
      "Drohnenfoto & Drohnenvideo",
      "100 Luftaufnahmen (Foto/Video, Location, Objekt & Event)",
      "Postproduktion & Weboptimierung",
      "Print & Medien",
      "500 Visitenkarten (Design & Druck)",
      "Flyer oder Preislisten (Design & Druck)",
    ],
  },
];

function OfferingCard({ plan }: { plan: OfferingPlan }) {
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
          Beliebte Wahl
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-text-primary">
          {plan.title}
        </CardTitle>
        {plan.description && (
          <p className="text-sm text-text-secondary mb-3">{plan.description}</p>
        )}
        <p className="text-sm font-medium text-primary">
          Individuelles Angebot
        </p>
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
              ) : feature.startsWith("Drohnenfoto & Drohnenvideo") ? (
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

export function Offerings() {
  return (
    <section id="angebote" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Leistungen & Beispiel-Pakete
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Drei typische Umfänge. Wir stimmen Leistung und Budget in einem
            kurzen Gespräch ab und erstellen Ihr individuelles Angebot für Web,
            Mobile, Drohnenfoto & Drohnenvideo sowie Print in Berlin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offeringPlans.map((plan, index) => (
            <OfferingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto space-y-3">
          <p className="text-text-secondary leading-relaxed">
            Jedes Projekt ist anders: Kombinationen aus den Bereichen sind
            jederzeit möglich – auch mit kleinerem Budget oder schrittweiser
            Erweiterung. Sprechen Sie uns an, wir finden eine passende Lösung.
          </p>
        </div>
      </div>
    </section>
  );
}
