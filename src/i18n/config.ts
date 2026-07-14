export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

// Short labels for the in-nav language switcher.
export const langLabels: Record<Lang, string> = {
  en: 'EN',
  es: 'ES',
};

// BCP-47 tags for <html lang> and hreflang.
export const htmlLang: Record<Lang, string> = {
  en: 'en-US',
  es: 'es-ES',
};
