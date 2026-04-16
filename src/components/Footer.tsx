import { Glow } from "@/components/ui/glow";
import { Socials } from "@/components/ui/socials";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { AppDictionary } from "@/i18n/dictionaries/types";
import type { Locale } from "@/i18n/config";

type FooterProps = {
  locale: Locale;
  dictionary: AppDictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
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
              {dictionary.footer.slogan}
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              {dictionary.footer.linksTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {dictionary.navbar.items[1]?.title}
                </a>
              </li>
              <li>
                <a
                  href="#angebote"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {dictionary.navbar.items[2]?.title}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {dictionary.navbar.items[3]?.title}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {dictionary.navbar.items[4]?.title}
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">
              {dictionary.footer.followTitle}
            </h4>
            <Socials />
            <h4 className="text-lg font-semibold text-text-primary">
              {dictionary.navbar.languageLabel}
            </h4>
            <LanguageSwitcher
              locale={locale}
              ariaLabel={dictionary.navbar.languageLabel}
              menuAlign="left"
            />
          </div>
        </div>
        <div className="border-t border-border-secondary mt-8 pt-8 text-center">
          <p className="text-text-tertiary text-sm">
            {dictionary.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
