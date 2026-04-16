"use client";

import Image from "next/image";
import { Home, Code, Layers, Users, Phone } from "lucide-react";
import { Socials } from "@/components/ui/socials";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { AppDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

const iconMap = {
  home: Home,
  code: Code,
  layers: Layers,
  users: Users,
  phone: Phone,
};

type NavbarProps = {
  locale: Locale;
  dictionary: AppDictionary;
};

export function Navbar({ locale, dictionary }: NavbarProps) {
  const navigation = dictionary.navbar.items.map((item) => ({
    ...item,
    url: `#${item.key}`,
    icon: iconMap[item.icon],
  }));
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
  }, [navigation]);

  return (
    <>
      <header className="py-2 fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-border-secondary hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Desktop Menu */}
          <nav
            className="hidden justify-between lg:flex"
            role="navigation"
            aria-label={dictionary.navbar.ariaLabel}
          >
            <div className="flex items-center gap-6">
              <a
                href="#home"
                className="flex items-center gap-3"
                aria-label={dictionary.navbar.logoAriaLabel}
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
                {navigation.map((item) => {
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
              <LanguageSwitcher
                locale={locale}
                ariaLabel={dictionary.navbar.languageLabel}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass backdrop-blur-md border-t border-border-secondary"
        role="navigation"
        aria-label={dictionary.navbar.mobileAriaLabel}
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
