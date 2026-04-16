"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  ariaLabel: string;
  className?: string;
  menuAlign?: "left" | "right";
};

const localeOptions: Array<{ value: Locale; label: string; icon: string }> = [
  { value: "de", label: "Deutsch", icon: "/images/de.png" },
  { value: "en", label: "English", icon: "/images/en.png" },
];

export function LanguageSwitcher({
  locale,
  ariaLabel,
  className,
  menuAlign = "right",
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const activeLocale = localeOptions.find((option) => option.value === locale);

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash || "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleLocaleChange = (value: Locale) => {
    document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=31536000; samesite=lax`;
    window.location.href = `/${value}${currentHash}`;
  };

  const menuAlignClass = menuAlign === "left" ? "left-0" : "right-0";

  return (
    <div className={`relative ${className ?? ""}`} ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-md border border-border-primary bg-surface-primary px-3 py-2 text-sm font-semibold text-text-primary hover:text-primary transition-colors"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
      >
        {activeLocale && (
          <Image
            src={activeLocale.icon}
            alt={activeLocale.label}
            width={20}
            height={20}
            className="h-5 w-5 rounded-full object-cover"
          />
        )}
        <span>{activeLocale?.label ?? locale.toUpperCase()}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className={`absolute ${menuAlignClass} mt-2 w-44 rounded-md border border-border-primary bg-gray-200 shadow-lg z-50 p-1`}
          role="menu"
        >
          {localeOptions.map((option) => (
            <button
              type="button"
              key={option.value}
              onClick={() => {
                setIsOpen(false);
                handleLocaleChange(option.value);
              }}
              className={`w-full flex items-center gap-2 rounded px-2 py-2 text-sm text-left ${
                locale === option.value
                  ? "bg-surface-secondary text-text-primary font-bold"
                  : "text-text-primary hover:bg-surface-secondary"
              }`}
              role="menuitem"
            >
              <Image
                src={option.icon}
                alt={option.label}
                width={20}
                height={20}
                className="h-5 w-5 rounded-full object-cover"
              />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
