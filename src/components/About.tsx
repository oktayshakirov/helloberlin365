import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Über uns</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Heart className="h-6 w-6 text-[#9e0031]" />
                Unsere Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 leading-relaxed">
                Wir helfen Unternehmen dabei, ihre digitale Präsenz zu stärken
                und ihre Marke durch innovative Lösungen und professionelle
                Fotografie zu präsentieren.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-6 w-6 text-[#9e0031]" />
                Unser Team
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-[#9e0031] text-white">
                    MM
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold">Max Mustermann</p>
                  <p className="text-white/80 text-sm">Kreativdirektor</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-[#9e0031] text-white">
                    AS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold">Anna Schmidt</p>
                  <p className="text-white/80 text-sm">Lead Entwicklerin</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-[#9e0031] text-white">
                    TW
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white font-semibold">Tom Weber</p>
                  <p className="text-white/80 text-sm">Fotograf</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="text-white flex items-center justify-center gap-2">
                <Zap className="h-6 w-6 text-[#9e0031]" />
                Unsere Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 text-center mb-6">
                Wir verwenden die neuesten Technologien für optimale Ergebnisse.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Next.js", icon: "⚛️" },
                  { name: "TypeScript", icon: "📘" },
                  { name: "Figma", icon: "🎨" },
                  { name: "Adobe CC", icon: "🖼️" },
                  { name: "Tailwind CSS", icon: "🎯" },
                  { name: "React", icon: "⚡" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Git", icon: "📝" },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="text-center p-4 glass-card rounded-lg"
                  >
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <p className="text-white font-medium">{tool.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
