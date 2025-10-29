/**
 * Language configuration module
 *
 * @module config/language-config
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import authEn from '@/i18n/locales/en/auth.json';
import commonEn from '@/i18n/locales/en/common.json';
import employeesEn from '@/i18n/locales/en/employees.json';
import errorsEn from '@/i18n/locales/en/errors.json';
import authHu from '@/i18n/locales/hu/auth.json';
import commonHu from '@/i18n/locales/hu/common.json';
import employeesHu from '@/i18n/locales/hu/employees.json';
import errorsHu from '@/i18n/locales/hu/errors.json';

/**
 * i18next configuration
 *
 * Initializes i18next with react-i18next for React integration.
 * Supports multiple namespaces: common, auth, employees, errors.
 * Currently supports English (en) and Hungarian (hu) languages.
 *
 * @example
 * ```typescript
 * import i18n from '@/config/language-config';
 *
 * // Change language
 * await i18n.changeLanguage('hu');
 *
 * // Use in non-React code
 * const message = i18n.t('common.save');
 * ```
 */
void i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonEn,
      auth: authEn,
      employees: employeesEn,
      errors: errorsEn,
    },
    hu: {
      common: commonHu,
      auth: authHu,
      employees: employeesHu,
      errors: errorsHu,
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  defaultNS: 'common',
});

export default i18n;
