import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Camera, Printer, Palette } from "lucide-react";
import type { AppDictionary } from "@/i18n/dictionaries/types";

interface OfferingPlan {
  title: string;
  features: string[];
  isPopular: boolean;
  description: string;
}

function OfferingCard({
  plan,
  dictionary,
}: {
  plan: OfferingPlan;
  dictionary: AppDictionary;
}) {
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
          {dictionary.offerings.popular}
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-text-primary">
          {plan.title}
        </CardTitle>
        <p className="text-sm text-text-secondary mb-3">{plan.description}</p>
        <p className="text-sm font-medium text-primary">
          {dictionary.offerings.customOffer}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              {feature === "" ? (
                <div className="h-px bg-border-secondary flex-grow my-2"></div>
              ) : feature.startsWith(dictionary.offerings.categoryLabels.branding) ? (
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              ) : feature.startsWith(dictionary.offerings.categoryLabels.website) ? (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              ) : feature.startsWith(dictionary.offerings.categoryLabels.drone) ? (
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-text-primary text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              ) : feature.startsWith(dictionary.offerings.categoryLabels.print) ? (
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

type OfferingsProps = {
  dictionary: AppDictionary;
};

export function Offerings({ dictionary }: OfferingsProps) {
  const offeringPlans: OfferingPlan[] = dictionary.offerings.plans.map(
    (plan, index) => ({
      ...plan,
      isPopular: index === 1,
    })
  );

  return (
    <section id="angebote" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            {dictionary.offerings.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {dictionary.offerings.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offeringPlans.map((plan, index) => (
            <OfferingCard key={index} plan={plan} dictionary={dictionary} />
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto space-y-3">
          <p className="text-text-secondary leading-relaxed">
            {dictionary.offerings.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
