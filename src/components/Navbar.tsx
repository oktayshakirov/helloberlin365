import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-text-primary">
              Hello Berlin 365
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-text-primary hover:text-primary transition-colors"
            >
              Startseite
            </a>
            <a
              href="#services"
              className="text-text-primary hover:text-primary transition-colors"
            >
              Dienstleistungen
            </a>
            <a
              href="#pricing"
              className="text-text-primary hover:text-primary transition-colors"
            >
              Preise
            </a>
            <a
              href="#about"
              className="text-text-primary hover:text-primary transition-colors"
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="text-text-primary hover:text-primary transition-colors"
            >
              Kontakt
            </a>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
}
