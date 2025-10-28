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

  function extractTranslationInfo(key: string): {
    translationKey: string;
    namespace: string;
  } {
    const [namespace, ...keyParts] = key.split('.');
    const translationKey = keyParts.join('.');

    const nsMap: Record<string, string> = {
      errors: 'errors',
      auth: 'auth',
      employees: 'employees',
      common: 'common',
    };

    return {
      translationKey,
      namespace: nsMap[namespace] || 'common',
    };
  }

  const displayMessage = (() => {
    if (!message.includes('.')) return message;
    const { translationKey, namespace } = extractTranslationInfo(message);
    return t(translationKey, { ns: namespace });
  })();

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
