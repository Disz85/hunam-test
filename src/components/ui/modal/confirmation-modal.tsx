import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import type { ReactNode } from 'react';

import { Button } from '../button/button';

type ModalVariant = 'danger' | 'warning' | 'info' | 'success';

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string | ReactNode;
  confirmText?: string;
  cancelText?: string;
  variant?: ModalVariant;
  isLoading?: boolean;
  loadingText?: string;
};

const variantConfig = {
  danger: {
    icon: ExclamationTriangleIcon,
    iconBgClass: 'bg-red-100',
    iconClass: 'text-red-600',
    buttonVariant: 'danger' as const,
  },
  warning: {
    icon: ExclamationTriangleIcon,
    iconBgClass: 'bg-yellow-100',
    iconClass: 'text-yellow-600',
    buttonVariant: 'primary' as const,
  },
  info: {
    icon: InformationCircleIcon,
    iconBgClass: 'bg-blue-100',
    iconClass: 'text-blue-600',
    buttonVariant: 'primary' as const,
  },
  success: {
    icon: CheckCircleIcon,
    iconBgClass: 'bg-green-100',
    iconClass: 'text-green-600',
    buttonVariant: 'success' as const,
  },
};

/**
 * General confirmation modal component
 *
 * Can be used for deletion, logout, or any action requiring confirmation
 */
export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  isLoading = false,
  loadingText,
}: ConfirmationModalProps) => {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="sm:flex sm:items-start">
              <div
                className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${config.iconBgClass} sm:mx-0 sm:h-10 sm:w-10`}
              >
                <Icon
                  aria-hidden="true"
                  className={`h-6 w-6 ${config.iconClass}`}
                />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle
                  as="h3"
                  className="text-base font-semibold leading-6 text-gray-900"
                >
                  {title}
                </DialogTitle>
                <div className="mt-2">
                  {typeof description === 'string' ? (
                    <p className="text-sm text-gray-500">{description}</p>
                  ) : (
                    description
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <Button
                onClick={onConfirm}
                variant={config.buttonVariant}
                isLoading={isLoading}
                loadingText={loadingText}
                className="w-full sm:ml-3 sm:w-auto"
              >
                {confirmText}
              </Button>
              <Button
                onClick={onClose}
                variant="secondary"
                disabled={isLoading}
                className="mt-3 w-full sm:mt-0 sm:w-auto"
              >
                {cancelText}
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
