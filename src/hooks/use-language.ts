import { useTranslation } from 'react-i18next';

import i18n from '@/config/language-config';

/**
 * Language codes supported by the application
 */
export type LanguageCode = 'en' | 'hu';

/**
 * Language configuration
 */
export const LANGUAGES: Record<
  LanguageCode,
  { code: LanguageCode; label: string; nativeLabel: string }
> = {
  en: {
    code: 'en',
    label: 'English',
    nativeLabel: 'English',
  },
  hu: {
    code: 'hu',
    label: 'Hungarian',
    nativeLabel: 'Magyar',
  },
};

/**
 * Custom hook for language management
 *
 * Provides language switching functionality and current language state
 *
 * @example
 * ```tsx
 * const { currentLanguage, changeLanguage, t } = useLanguage();
 *
 * return (
 *   <button onClick={() => changeLanguage('hu')}>
 *     Switch to Hungarian
 *   </button>
 * );
 * ```
 */
export const useLanguage = () => {
  const { i18n: i18nInstance, t } = useTranslation();

  const currentLanguage = i18nInstance.language as LanguageCode;

  const changeLanguage = async (lng: LanguageCode) => {
    await i18n.changeLanguage(lng);
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
  };
};
