import { forwardRef } from 'react';
import InputMask from 'react-input-mask';

import { cn } from '@/lib/cn';

type MaskType = 'phone' | 'bankAccount';

/**
 * Mask patterns for different input types
 */
const MASK_PATTERNS: Record<MaskType, string> = {
  phone: '+36 99 999 9999',
  bankAccount: '99999999-99999999-99999999',
};

type FormMaskedInputProps = Omit<
  React.ComponentProps<typeof InputMask>,
  'mask'
> & {
  maskType: MaskType;
};

/**
 * Masked Input Component
 *
 * Provides automatic formatting for specific input types:
 * - phone: Hungarian phone numbers (+36 XX XXX XXXX)
 * - bankAccount: Hungarian bank account (XXXXXXXX-XXXXXXXX-XXXXXXXX)
 *
 * Uses react-input-mask for masking functionality.
 *
 * @example
 * ```tsx
 * <FormMaskedInput
 *   maskType="phone"
 *   placeholder="+36 20 123 4567"
 *   {...register('phone')}
 * />
 * ```
 */
export const FormMaskedInput = forwardRef<
  HTMLInputElement,
  FormMaskedInputProps
>(({ maskType, className, ...props }, ref) => {
  return (
    <InputMask mask={MASK_PATTERNS[maskType]} maskChar={null} {...props}>
      {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
        <input
          {...inputProps}
          ref={ref}
          className={cn(
            'block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6',
            className
          )}
        />
      )}
    </InputMask>
  );
});

FormMaskedInput.displayName = 'FormMaskedInput';
