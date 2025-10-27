import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon, LanguageIcon } from '@heroicons/react/24/solid';

import { Button } from '@/components/ui/button/button';
import { LANGUAGES, useLanguage } from '@/hooks/use-language';

/**
 * Language Switcher Component
 *
 * Displays a dropdown menu to switch between supported languages
 * Uses Headless UI Menu for proper accessibility and transitions
 */
export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const currentLang = LANGUAGES[currentLanguage];

  const handleLanguageChange = (code: typeof currentLanguage) => {
    void changeLanguage(code);
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex cursor-pointer items-center gap-x-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
        <LanguageIcon className="size-5" aria-hidden="true" />
        <span className="hidden sm:inline">{currentLang.nativeLabel}</span>
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.values(LANGUAGES).map(lang => {
              const isActive = currentLanguage === lang.code;
              return (
                <Menu.Item key={lang.code as string}>
                  {({ active }) => (
                    <Button
                      onClick={() => handleLanguageChange(lang.code)}
                      variant="secondary"
                      size="sm"
                      className={`${
                        active || isActive
                          ? 'bg-indigo-50 text-indigo-600 ring-indigo-200'
                          : 'bg-white text-gray-700 ring-0'
                      } w-full justify-start shadow-none hover:bg-indigo-50 hover:text-indigo-600`}
                    >
                      {isActive && (
                        <GlobeAltIcon className="size-4" aria-hidden="true" />
                      )}
                      {lang.nativeLabel}
                    </Button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
