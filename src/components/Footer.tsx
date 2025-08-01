import { Glow } from "@/components/ui/glow";
import { Socials } from "@/components/ui/socials";

export function Footer() {
  return (
    <footer className="glass backdrop-blur-md border-t border-border-secondary relative overflow-hidden">
      <Glow variant="footer" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pb-20 md:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-text-primary">
              Hello Berlin 365
            </h3>
            <p className="text-text-secondary text-sm">
              Your Brand. Our Mission. Every Day.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Schnelllinks
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Preise
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              Folgen Sie uns
            </h4>
            <Socials />
          </div>
        </div>
        <div className="border-t border-border-secondary mt-8 pt-8 text-center">
          <p className="text-text-tertiary text-sm">
            © 2025 Hello Berlin 365. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
