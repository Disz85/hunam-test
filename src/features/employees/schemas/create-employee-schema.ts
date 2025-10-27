import { z } from 'zod';

import { Education } from '@/features/employees/domain/enums/education-enum';
import { PaymentMethod } from '@/features/employees/domain/enums/payment-method-enum';
import { Sex } from '@/features/employees/domain/enums/sex-enum';

/**
 * Employee form validation schema
 *
 * Validates employee data with conditional fields based on PaymentMethod
 * Note: Error messages use i18n keys, actual translations happen in form components
 */
export const createEmployeeSchema = z
  .object({
    // Personal Information
    email: z.string().email('errors.invalidEmail').min(1, 'errors.required'),
    firstName: z.string().min(1, 'errors.required'),
    lastName: z.string().min(1, 'errors.required'),
    dateOfBirth: z.string().min(1, 'errors.required'),
    placeOfBirth: z.string().min(1, 'errors.required'),
    mothersFirstName: z.string().min(1, 'errors.required'),
    mothersLastName: z.string().min(1, 'errors.required'),
    phone: z.string().min(1, 'errors.invalidPhone'),
    sex: z.nativeEnum(Sex, { message: 'errors.required' }),
    education: z.nativeEnum(Education, { message: 'errors.required' }),

    // Address Information
    country: z.string().min(1, 'errors.required'),
    zipCode: z.string().min(1, 'errors.required'),
    parcelNumber: z.string().optional(),
    city: z.string().min(1, 'errors.required'),
    administrativeArea: z.string().optional(),
    administrativeAreaType: z.string().optional(),
    houseNumber: z.string().min(1, 'errors.required'),
    building: z.string().optional(),
    staircase: z.string().optional(),
    floor: z.string().optional(),
    door: z.string().optional(),

    // Payment Information
    paymentMethod: z.nativeEnum(PaymentMethod, {
      message: 'errors.required',
    }),
    salary: z
      .number()
      .min(200000, 'errors.salaryMin')
      .max(500000, 'errors.salaryMax'),

    // Conditional fields
    bankAccountNumber: z.string().optional(),
    moneyDispatchAddress: z.string().optional(),
    cashPaymentDay: z.number().min(1).max(31).optional(),
  })
  .refine(
    data => {
      // Transfer requires bankAccountNumber
      if (data.paymentMethod === PaymentMethod.Transfer) {
        return data.bankAccountNumber && data.bankAccountNumber.length > 0;
      }
      return true;
    },
    {
      message: 'errors.bankAccountRequired',
      path: ['bankAccountNumber'],
    }
  )
  .refine(
    data => {
      // Cash requires cashPaymentDay
      if (data.paymentMethod === PaymentMethod.Cash) {
        return (
          data.cashPaymentDay !== undefined && data.cashPaymentDay !== null
        );
      }
      return true;
    },
    {
      message: 'errors.cashPaymentDayRequired',
      path: ['cashPaymentDay'],
    }
  )
  .refine(
    data => {
      // Dispatch requires moneyDispatchAddress
      if (data.paymentMethod === PaymentMethod.Dispatch) {
        return (
          data.moneyDispatchAddress && data.moneyDispatchAddress.length > 0
        );
      }
      return true;
    },
    {
      message: 'errors.moneyDispatchAddressRequired',
      path: ['moneyDispatchAddress'],
    }
  );

export type CreateEmployeeFormData = z.infer<typeof createEmployeeSchema>;
