import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-custom border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Hello Berlin 365</h3>
            <p className="text-white/80 text-sm">
              Ihre Marke. Unsere Mission. Jeden Tag.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Schnelllinks</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-[#9e0031] transition-colors"
                >
                  Dienstleistungen
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/80 hover:text-[#9e0031] transition-colors"
                >
                  Preise
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-[#9e0031] transition-colors"
                >
                  Über uns
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-[#9e0031] transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Folgen Sie uns</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/80 hover:text-[#9e0031] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#9e0031] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#9e0031] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-[#9e0031] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Hello Berlin 365. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
