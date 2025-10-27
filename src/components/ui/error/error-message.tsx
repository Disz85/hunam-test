import { Description } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

/**
 * ErrorMessage props
 */
type ErrorMessageProps = {
  message: string;
  id?: string;
};

/**
 * ErrorMessage component
 *
 * Displays error message with icon
 * Automatically translates i18n keys if the message starts with 'errors.', 'form.', etc.
 */
export const ErrorMessage = ({ message, id }: ErrorMessageProps) => {
  const { t } = useTranslation();

  // Check if message is an i18n key (contains a dot and starts with namespace prefixes)
  const isI18nKey = message.includes('.');

  // Translate if it's an i18n key, otherwise use the message as-is
  const displayMessage = isI18nKey
    ? t(message, { ns: getNamespace(message) })
    : message;

  // Helper to determine namespace from message key
  function getNamespace(key: string): string {
    if (key.startsWith('errors.')) return 'errors';
    if (key.startsWith('auth.')) return 'auth';
    if (key.startsWith('employees.')) return 'employees';
    return 'common'; // fallback to default namespace
  }

  return (
    <Description
      id={id}
      className="mt-2 flex items-center text-sm text-red-600"
      role="alert"
    >
      <ExclamationCircleIcon className="mr-1 h-4 w-4" aria-hidden="true" />
      {displayMessage}
    </Description>
  );
};
