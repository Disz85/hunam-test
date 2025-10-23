import { Description } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

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
 */
export const ErrorMessage = ({ message, id }: ErrorMessageProps) => {
  return (
    <Description
      id={id}
      className="mt-2 flex items-center text-sm text-red-600"
      role="alert"
    >
      <ExclamationCircleIcon className="mr-1 h-4 w-4" aria-hidden="true" />
      {message}
    </Description>
  );
};
