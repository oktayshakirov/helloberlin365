import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">Hello Berlin 365</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-[#9e0031] transition-colors"
            >
              Startseite
            </a>
            <a
              href="#services"
              className="text-white hover:text-[#9e0031] transition-colors"
            >
              Dienstleistungen
            </a>
            <a
              href="#pricing"
              className="text-white hover:text-[#9e0031] transition-colors"
            >
              Preise
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#9e0031] transition-colors"
            >
              Über uns
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#9e0031] transition-colors"
            >
              Kontakt
            </a>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
