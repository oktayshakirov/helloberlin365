import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  salePrice?: string;
  currencySymbol?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Hello Start",
    price: "1599",
    salePrice: "1099",
    currencySymbol: "€",
    features: [
      "One-Pager, 1 Startseite",
      "2 Textseiten (Rechtliches)",
      "Optimiert auf allen Endgeräten",
      "Inklusive Domain und Hosting",
      "Inklusive Design",
      "Visitenkarten",
      "Werbeflyer",
      "Keyword-Recherche und -Optimierung",
      "Technische SEO / Optimierung und Pagespeed",
      "15 Fotos",
      "Product oder Locationfotos",
    ],
  },
  {
    title: "Hello Pro",
    price: "2499",
    salePrice: "1799",
    currencySymbol: "€",
    isPopular: true,
    features: [
      "1 Startseite",
      "Mehrere gestaltete Unterseiten",
      "Optimiert auf allen Endgeräten",
      "Inklusive Domain und Hosting",
      "Inklusive Design",
      "Visitenkarten",
      "Werbeflyer",
      "Keyword-Recherche und -Optimierung",
      "Technische SEO / Optimierung und Pagespeed",
      "50 Fotos",
      "Locationfotos",
      "Produktfotos",
    ],
  },
  {
    title: "Hello VIP",
    price: "3999",
    salePrice: "2999",
    currencySymbol: "€",
    features: [
      "1 Startseite",
      "Unterseiten auf Wunsch",
      "Optimiert auf allen Endgeräten",
      "Inklusive Domain und Hosting",
      "Inklusive Design",
      "Visitenkarten",
      "Werbeflyer",
      "Keyword-Recherche und -Optimierung",
      "Technische SEO / Optimierung und Pagespeed",
      "100 Fotos",
      "Locationfotos",
      "Produktfotos",
      "Einzelne Personenfotos",
      "Team/Gruppen Fotografie",
      "Erstellung von Social Media Profilen",
    ],
  },
];

function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <Card
      className={`relative glass-card transition-all duration-300 hover:scale-105 ${
        plan.isPopular
          ? "border-[#9e0031]/50 shadow-[0_0_20px_rgba(158,0,49,0.3)]"
          : "border-white/10"
      }`}
    >
      {plan.isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#9e0031] text-white border-0">
          Am beliebtesten
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-white">
          {plan.title}
        </CardTitle>
        <div className="flex items-center justify-center gap-2">
          <span className="text-3xl font-bold text-[#9e0031]">
            {plan.currencySymbol}
            {plan.salePrice}
          </span>
          <span className="text-xl text-white/60 line-through">
            {plan.currencySymbol}
            {plan.price}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="h-5 w-5 text-[#9e0031] flex-shrink-0" />
              <span className="text-white text-sm">{feature}</span>
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
          <h2 className="text-4xl font-bold text-white mb-4">Unsere Preise</h2>
          <p className="text-xl text-white/80">
            Transparente Preise für jeden Bedarf
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
