import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-custom border-t border-border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                  Dienstleistungen
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
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
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
