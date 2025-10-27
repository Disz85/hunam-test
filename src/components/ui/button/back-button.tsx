import { Button } from '@headlessui/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/cn';

const BASE_BUTTON_CLASSES =
  'flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900 hover:text-gray-700';

/**
 * Back button component
 *
 * Navigates back to the employee list
 */
export const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  const handleBack = () => {
    void navigate({ to: '/admin/employees' });
  };

  return (
    <Button onClick={handleBack} className={cn(BASE_BUTTON_CLASSES)}>
      <ArrowLeftIcon className="size-5" aria-hidden="true" />
      <span>{t('back')}</span>
    </Button>
  );
};
