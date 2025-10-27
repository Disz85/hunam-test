import { LanguageSwitcher } from '@/components/ui/switcher/language-switcher';

import { DecorativeBackground } from '../components/decorative-background';
import { LoginForm } from '../components/login-form';
import { LoginPageHeader } from '../components/login-page-header';

/**
 * Login page component
 *
 * Displays the login form with decorative background
 */
export const LoginPage = () => {
  return (
    <main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute right-2 top-2 sm:right-6 sm:top-6">
        <LanguageSwitcher />
      </div>
      <DecorativeBackground />
      <LoginPageHeader />
      <section className="mx-auto mt-16 max-w-xl sm:mt-20">
        <LoginForm />
      </section>
    </main>
  );
};
