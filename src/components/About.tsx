import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Users, Globe, Linkedin, Instagram } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-primary mb-4">
            Über uns
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-text-primary flex items-center justify-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Unsere Philosophie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-secondary leading-relaxed text-lg">
                Wir glauben, dass eine Webseite mehr ist als nur ein Werkzeug –
                sie ist das digitale Zuhause Ihrer Marke. Ein solches Zuhause
                braucht beides: ein starkes Fundament, das Stabilität gibt, und
                eine Seele, die es mit Leben füllt.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg mt-4">
                Unsere Philosophie vereint genau das. Durch die Verbindung von
                präziser Programmierung und kreativer Fotografie schaffen wir
                digitale Erlebnisse, die technisch überzeugen und sich echt
                anfühlen – für einen Markenauftritt mit Charakter.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-text-primary flex items-center justify-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Unser Team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <Avatar className="h-20 w-20 flex-shrink-0">
                    <AvatarImage
                      src="/images/avatar-oktay.jpg"
                      alt="Oktay Shakirov"
                    />
                    <AvatarFallback className="bg-primary text-text-primary">
                      OS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left max-w-xs">
                    <div className="mb-3">
                      <p className="text-text-primary font-semibold text-lg">
                        Oktay Shakirov
                      </p>
                      <p className="text-text-secondary">Softwareentwickler</p>
                    </div>
                    <div className="flex justify-center sm:justify-start space-x-3">
                      <a
                        href="https://oktayshakirov.com/"
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/oktayshakirov"
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/oktay.shakirov/"
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <Avatar className="h-20 w-20 flex-shrink-0">
                    <AvatarImage
                      src="/images/avatar-mustafa.jpg"
                      alt="Mustafa Mustafov"
                    />
                    <AvatarFallback className="bg-primary text-text-primary">
                      MM
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left max-w-xs">
                    <div className="mb-3">
                      <p className="text-text-primary font-semibold text-lg">
                        Mustafa Mustafov
                      </p>
                      <p className="text-text-secondary">Forograf</p>
                    </div>
                    <div className="flex justify-center sm:justify-start space-x-3">
                      <a
                        href="https://musiphotography.myportfolio.com/"
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/mustafa-mustafov-345aa0336/"
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/musiphotography/"
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-secondary">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                  <Avatar className="h-20 w-20 flex-shrink-0 bg-surface-secondary border-2 border-dashed border-border-secondary">
                    <AvatarFallback className="bg-surface-secondary text-text-secondary text-2xl">
                      ?
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-3">
                      <p className="text-text-primary font-semibold text-lg">
                        Das könnte Sie sein!
                      </p>
                      <p className="text-text-secondary">
                        Unser Team sucht Verstärkung
                      </p>
                    </div>
                    <p className="text-text-secondary text-sm">
                      Haben Sie Lust, Teil unseres wachsenden Teams zu werden?
                      Wir suchen talentierte Menschen. Kontaktieren Sie uns!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
