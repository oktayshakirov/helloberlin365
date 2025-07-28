import { Card, CardContent } from "@/components/ui/card";
import {
  Scissors,
  Car,
  Utensils,
  Building2,
  Sparkles,
  Briefcase,
} from "lucide-react";

interface TargetCustomer {
  title: string;
  icon: React.ReactNode;
}

const customers: TargetCustomer[] = [
  {
    title: "Influencer",
    icon: <Sparkles className="h-8 w-8 text-[#9e0031]" />,
  },
  {
    title: "Friseure",
    icon: <Scissors className="h-8 w-8 text-[#9e0031]" />,
  },
  {
    title: "Startups",
    icon: <Building2 className="h-8 w-8 text-[#9e0031]" />,
  },
  {
    title: "Autohäuser",
    icon: <Car className="h-8 w-8 text-[#9e0031]" />,
  },
  {
    title: "Gastronomie",
    icon: <Utensils className="h-8 w-8 text-[#9e0031]" />,
  },
  {
    title: "Makler",
    icon: <Briefcase className="h-8 w-8 text-[#9e0031]" />,
  },
];

export function TargetCustomers() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Unsere Zielgruppen
          </h2>
          <p className="text-xl text-white/80">
            Wir unterstützen verschiedene Branchen mit maßgeschneiderten
            Lösungen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {customers.map((customer, index) => (
            <Card
              key={index}
              className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                <div className="text-[#9e0031]">{customer.icon}</div>
                <h3 className="text-white font-semibold text-sm md:text-base">
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
