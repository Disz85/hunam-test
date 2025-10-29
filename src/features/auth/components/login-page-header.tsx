/**
 * Authentication components module
 *
 * @module features/auth/components/login-page-header
 */

import { useTranslation } from 'react-i18next';

/**
 * Login page header component
 *
 * Displays the application name and sign-in subtitle.
 * Fully responsive with text balancing for better readability.
 *
 * @example
 * ```tsx
 * import { LoginPageHeader } from '@/features/auth/components/login-page-header';
 *
 * <LoginPageHeader />
 * ```
 */
export const LoginPageHeader = () => {
  const { t } = useTranslation('common');

  return (
    <header className="mx-auto max-w-2xl text-center">
      <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        {t('appName')}
      </h1>
      <p className="mt-2 text-lg/8 text-gray-600">{t('signIn')}</p>
    </header>
  );
};
