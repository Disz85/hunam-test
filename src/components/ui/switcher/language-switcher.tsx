import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { GlobeAltIcon, LanguageIcon } from '@heroicons/react/24/solid';

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
    <div className="relative">
      <Menu>
        <MenuButton className="flex cursor-pointer items-center gap-x-2 rounded-md px-3 py-2 text-sm font-semibold text-gray-700 data-hover:bg-gray-100">
          <LanguageIcon className="size-5" aria-hidden="true" />
          <span className="hidden sm:inline">{currentLang.nativeLabel}</span>
        </MenuButton>

        <MenuItems
          anchor="bottom end"
          className="z-50 w-40 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
          {Object.values(LANGUAGES).map(lang => {
            const isActive = currentLanguage === lang.code;
            return (
              <MenuItem key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`group flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'bg-white text-gray-700'
                  } data-focus:bg-indigo-50 data-hover:bg-indigo-50 data-hover:text-indigo-600`}
                >
                  <GlobeAltIcon
                    className={`size-4 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`}
                    aria-hidden="true"
                  />
                  {lang.nativeLabel}
                </button>
              </MenuItem>
            );
          })}
        </MenuItems>
      </Menu>
    </div>
  );
};
