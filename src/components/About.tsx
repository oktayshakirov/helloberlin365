import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";
import type { AppDictionary } from "@/i18n/dictionaries/types";

type AboutProps = {
  dictionary: AppDictionary;
};

export function About({ dictionary }: AboutProps) {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            {dictionary.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-text-primary flex items-center justify-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                {dictionary.about.philosophyTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary leading-relaxed text-lg">
                {dictionary.about.philosophyParagraphs[0]}
              </p>
              <p className="text-text-secondary leading-relaxed text-lg mt-4">
                {dictionary.about.philosophyParagraphs[1]}
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-text-primary flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                {dictionary.about.processTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-text-secondary text-lg leading-relaxed">
                {dictionary.about.processItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
