import { Card, CardContent } from "@/components/ui/card";
import {
  Scissors,
  Car,
  Utensils,
  Building2,
  Sparkles,
  Briefcase,
  Dumbbell,
  Scale,
  Truck,
  Heart,
} from "lucide-react";
import type { AppDictionary } from "@/i18n/dictionaries/types";

const customerIcons = [
  Sparkles,
  Scissors,
  Building2,
  Car,
  Utensils,
  Briefcase,
  Dumbbell,
  Scale,
  Truck,
  Heart,
];

type CustomersProps = {
  dictionary: AppDictionary;
};

export function Customers({ dictionary }: CustomersProps) {
  const customers = dictionary.customers.labels.map((title, index) => {
    const Icon = customerIcons[index];
    return {
      title,
      icon: Icon ? <Icon className="h-8 w-8 text-primary" /> : null,
    };
  });

  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-2 md:mb-4">
            {dictionary.customers.title}
          </h2>
          <p className="text-xl text-text-secondary">
            {dictionary.customers.description}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
          {customers.map((customer, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center p-3 md:p-6 text-center space-y-2 md:space-y-4">
                <div className="text-primary">{customer.icon}</div>
                <h3 className="text-text-primary font-semibold text-xs md:text-sm lg:text-base">
                  {customer.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
