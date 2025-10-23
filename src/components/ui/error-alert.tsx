import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

/**
 * ErrorAlert props
 */
type ErrorAlertProps = {
  message: string;
};

/**
 * ErrorAlert component
 *
 * Displays error alert with background and icon
 */
export const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="rounded-md bg-red-50 p-4" role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationCircleIcon
            className="h-5 w-5 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-red-800">{message}</p>
        </div>
      </div>
    </div>
  );
};
