import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { FormInput } from '@/components/ui/form-input';
import { ResponsiveActionButton } from '@/components/ui/responsive-action-button';

type EmployeeListHeaderProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

/**
 * Employee list header component
 *
 * Contains search input and create button
 */
export const EmployeeListHeader = ({
  searchValue,
  onSearchChange,
}: EmployeeListHeaderProps) => {
  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState(searchValue);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(localSearch);
  };

  const handleCreateClick = () => {
    void navigate({ to: '/admin/employees/new' });
  };

  return (
    <>
      <div className="flex w-full items-center justify-between gap-x-4">
        <form onSubmit={handleSearchSubmit} className="flex-1 max-w-lg">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                className="size-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <FormInput
              type="text"
              value={localSearch}
              onChange={e => setLocalSearch(e.target.value)}
              placeholder="Search employees..."
              className="pl-10"
            />
          </div>
        </form>

        <ResponsiveActionButton
          type="button"
          icon={PlusIcon}
          onClick={handleCreateClick}
          aria-label="New Employee"
        >
          New Employee
        </ResponsiveActionButton>
      </div>
    </>
  );
};
