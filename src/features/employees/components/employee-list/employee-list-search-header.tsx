import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ResponsiveActionButton } from '@/components/ui/button/responsive-action-button';
import { FormInput } from '@/components/ui/form/form-input';
import { useDebounce } from '@/hooks/use-debounce';

import { SortDropdown } from './sort-dropdown';

type EmployeeListSearchHeaderProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  orderBy: string;
  onOrderByChange: (orderBy: string) => void;
};

/**
 * Employee list search header component
 *
 * Contains search input, sort dropdown, and create button
 */
export const EmployeeListSearchHeader = ({
  searchValue,
  onSearchChange,
  orderBy,
  onOrderByChange,
}: EmployeeListSearchHeaderProps) => {
  const { t } = useTranslation('employees');
  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState(searchValue);

  // Store onSearchChange in ref to avoid dependency issues
  const onSearchChangeRef = useRef(onSearchChange);
  onSearchChangeRef.current = onSearchChange;

  // Debounce the search input
  const debouncedSearch = useDebounce(localSearch, 300);

  // Trigger search when debounced value changes
  useEffect(() => {
    if (debouncedSearch !== searchValue) {
      onSearchChangeRef.current(debouncedSearch);
    }
  }, [debouncedSearch, searchValue]);

  // Sync local state when searchValue changes from outside
  useEffect(() => {
    setLocalSearch(searchValue);
  }, [searchValue]);

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSearchChange(localSearch);
    },
    [localSearch, onSearchChange]
  );

  const handleCreateClick = useCallback(() => {
    void navigate({ to: '/admin/employees/new' });
  }, [navigate]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearch(e.target.value);
    },
    []
  );

  return (
    <div className="flex w-full items-center justify-between gap-x-4">
      <div className="flex flex-1 items-center gap-x-2">
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-lg">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="size-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <FormInput
              type="search"
              value={localSearch}
              onChange={handleInputChange}
              placeholder={t('search')}
              className="pl-10"
            />
          </div>
        </form>

        <SortDropdown currentOrderBy={orderBy} onSortChange={onOrderByChange} />
      </div>

      <ResponsiveActionButton
        type="button"
        icon={PlusIcon}
        onClick={handleCreateClick}
        aria-label={t('newEmployee')}
      >
        {t('newEmployee')}
      </ResponsiveActionButton>
    </div>
  );
};
