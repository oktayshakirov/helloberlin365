import { FeatureSteps } from "@/components/ui/carousel";
import type { AppDictionary } from "@/i18n/dictionaries/types";

type ServicesProps = {
  dictionary: AppDictionary;
};

export function Services({ dictionary }: ServicesProps) {
  return (
    <section id="services" className="py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <FeatureSteps
          features={dictionary.services.features}
          title={dictionary.services.title}
          description={dictionary.services.description}
          className="bg-transparent"
        />
      </div>
    </section>
  );
}
