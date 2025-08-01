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

interface TargetCustomer {
  title: string;
  icon: React.ReactNode;
}

const customers: TargetCustomer[] = [
  {
    title: "Influencer",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    title: "Friseure",
    icon: <Scissors className="h-8 w-8 text-primary" />,
  },
  {
    title: "Startups",
    icon: <Building2 className="h-8 w-8 text-primary" />,
  },
  {
    title: "Autohäuser",
    icon: <Car className="h-8 w-8 text-primary" />,
  },
  {
    title: "Gastronomie",
    icon: <Utensils className="h-8 w-8 text-primary" />,
  },
  {
    title: "Makler",
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    title: "Sport",
    icon: <Dumbbell className="h-8 w-8 text-primary" />,
  },
  {
    title: "Anwälte",
    icon: <Scale className="h-8 w-8 text-primary" />,
  },
  {
    title: "Transporte",
    icon: <Truck className="h-8 w-8 text-primary" />,
  },
  {
    title: "Kosmetik",
    icon: <Heart className="h-8 w-8 text-primary" />,
  },
];

export function Customers() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Unsere Zielgruppen
          </h2>
          <p className="text-xl text-text-secondary">
            Wir unterstützen verschiedene Branchen mit maßgeschneiderten
            Lösungen
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {customers.map((customer, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="text-primary">{customer.icon}</div>
                <h3 className="text-text-primary font-semibold text-sm md:text-base">
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
