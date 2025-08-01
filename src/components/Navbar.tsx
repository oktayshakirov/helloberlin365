"use client";

import Image from "next/image";
import { Home, Code, DollarSign, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Socials } from "@/components/ui/socials";
import { useEffect, useState } from "react";

const navigation = [
  {
    title: "Startseite",
    url: "#home",
    ariaLabel: "Zur Startseite navigieren",
    icon: Home,
  },
  {
    title: "Services",
    url: "#services",
    ariaLabel: "Zu unsere Services navigieren",
    icon: Code,
  },
  {
    title: "Preise",
    url: "#pricing",
    ariaLabel: "Zu unseren Preisen navigieren",
    icon: DollarSign,
  },
  {
    title: "Über uns",
    url: "#about",
    ariaLabel: "Mehr über uns erfahren",
    icon: Users,
  },
  {
    title: "Kontakt",
    url: "#contact",
    ariaLabel: "Kontakt aufnehmen",
    icon: Phone,
  },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.url.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="py-2 fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-border-secondary hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Desktop Menu */}
          <nav
            className="hidden justify-between lg:flex"
            role="navigation"
            aria-label="Hauptnavigation"
          >
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="flex items-center gap-3"
                aria-label="Zur Startseite"
              >
                <Image
                  src="/images/logo.png"
                  alt="Hello Berlin 365 Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  priority
                />
              </a>
            </div>

            <div className="flex items-center">
              <ul className="flex space-x-8 list-none">
                {navigation
                  .filter((item) => item.title !== "Kontakt")
                  .map((item) => {
                    const sectionId = item.url.replace("#", "");
                    const isActive = activeSection === sectionId;

                    return (
                      <li key={item.title}>
                        <a
                          href={item.url}
                          className={`transition-colors text-base font-bold tracking-wide flex items-center gap-2 py-2 relative group ${
                            isActive
                              ? "text-secondary"
                              : "text-text-primary hover:text-primary"
                          }`}
                          aria-label={item.ariaLabel}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.title}
                          <span
                            className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          ></span>
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <Socials className="hidden lg:flex" />
              {navigation
                .filter((item) => item.title === "Kontakt")
                .map((item) => (
                  <Button key={item.title} asChild size="lg" className="gap-2">
                    <a href={item.url} aria-label={item.ariaLabel}>
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </a>
                  </Button>
                ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass backdrop-blur-md border-t border-border-secondary"
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-around py-3 list-none">
            {navigation.map((item) => {
              const sectionId = item.url.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.title}>
                  <a
                    href={item.url}
                    className={`flex flex-col items-center gap-1 transition-colors text-xs font-bold tracking-wide ${
                      isActive
                        ? "text-secondary"
                        : "text-text-primary hover:text-primary"
                    }`}
                    aria-label={item.ariaLabel}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-center">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
