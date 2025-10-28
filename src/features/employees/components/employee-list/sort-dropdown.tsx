import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/cn';

type SortDropdownProps = {
  currentOrderBy: string;
  onSortChange: (orderBy: string) => void;
};

const SORT_CONFIG = [
  { id: 'default', key: 'default', value: '' },
  { id: 'firstName-asc', key: 'firstNameAsc', value: 'FirstName-asc' },
  { id: 'firstName-desc', key: 'firstNameDesc', value: 'FirstName-desc' },
  { id: 'lastName-asc', key: 'lastNameAsc', value: 'LastName-asc' },
  { id: 'lastName-desc', key: 'lastNameDesc', value: 'LastName-desc' },
  { id: 'email-asc', key: 'emailAsc', value: 'Email-asc' },
  { id: 'email-desc', key: 'emailDesc', value: 'Email-desc' },
] as const;

// Style constants
const BUTTON_CLASSES =
  'flex items-center gap-2 rounded-md border border-gray-300 bg-white px-2 py-2 sm:px-3 sm:py-2 text-sm font-medium text-gray-700 data-hover:bg-gray-50';
const MENU_ITEMS_CLASS =
  'z-50 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5';
const MENU_ITEM_CLASS =
  'group flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm data-focus:bg-gray-100';

/**
 * Get sort icon based on sort direction
 */
const getSortIcon = (value: string, className = 'size-5'): React.ReactNode => {
  if (value.endsWith('-asc')) {
    return <ChevronUpIcon className={className} aria-hidden="true" />;
  }
  if (value.endsWith('-desc')) {
    return <ChevronDownIcon className={className} aria-hidden="true" />;
  }
  return (
    <ArrowsUpDownIcon
      className={cn(className, 'text-gray-400')}
      aria-hidden="true"
    />
  );
};

/**
 * Sort dropdown component
 *
 * Provides sorting options for the employee table with visual icons
 */
export const SortDropdown = ({
  currentOrderBy,
  onSortChange,
}: SortDropdownProps) => {
  const { t } = useTranslation('employees');

  // Memoize translated sort options
  const sortOptions = useMemo(
    () =>
      SORT_CONFIG.map(option => ({
        id: option.id,
        label: t(`sort.${option.key}`),
        value: option.value,
      })),
    [t]
  );

  // Find current option or default
  const currentOption =
    sortOptions.find(opt => opt.value === currentOrderBy) || sortOptions[0];

  const currentIcon = currentOption.value ? (
    <span className="text-indigo-600">{getSortIcon(currentOption.value)}</span>
  ) : (
    getSortIcon(currentOption.value)
  );

  return (
    <div className="relative">
      <Menu>
        <MenuButton className={BUTTON_CLASSES}>
          {currentIcon}
          <span className="hidden lg:inline">{currentOption.label}</span>
        </MenuButton>

        <MenuItems anchor="bottom end" className={MENU_ITEMS_CLASS}>
          {sortOptions.map(option => (
            <MenuItem key={option.id}>
              <button
                onClick={() => onSortChange(option.value)}
                className={MENU_ITEM_CLASS}
              >
                <span className="text-gray-400">
                  {getSortIcon(option.value, 'size-4')}
                </span>
                <span className="flex-1 text-left">{option.label}</span>
                {currentOrderBy === option.value && (
                  <span className="text-indigo-600">✓</span>
                )}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
