/**
 * Language management hooks module
 *
 * @module hooks/use-language
 */

import { useTranslation } from 'react-i18next';

import i18n from '@/config/language-config';

/**
 * Language codes supported by the application
 */
export type LanguageCode = 'en' | 'hu';

/**
 * Language configuration
 *
 * Defines supported languages with their display labels.
 * Used in the language switcher component.
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
 * Provides language switching functionality and current language state.
 * Wraps i18next's useTranslation hook with language switching capabilities.
 *
 * @returns {Object} Language management utilities
 * @returns {LanguageCode} returns.currentLanguage - Current active language code
 * @returns {(lng: LanguageCode) => Promise<void>} returns.changeLanguage - Function to change language
 * @returns {(key: string, options?: any) => string} returns.t - Translation function
 *
 * @example
 * ```tsx
 * import { useLanguage } from '@/hooks/use-language';
 *
 * const { currentLanguage, changeLanguage, t } = useLanguage();
 *
 * // Change language
 * await changeLanguage('hu');
 *
 * // Use translation
 * const message = t('common.save');
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
