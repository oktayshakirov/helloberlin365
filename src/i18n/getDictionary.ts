import { deDictionary } from "@/i18n/dictionaries/de";
import { enDictionary } from "@/i18n/dictionaries/en";
import type { AppDictionary } from "@/i18n/dictionaries/types";
import { defaultLocale, type Locale } from "@/i18n/config";

const dictionaries: Record<Locale, AppDictionary> = {
  de: deDictionary,
  en: enDictionary,
};

export function getDictionary(locale: Locale): AppDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
