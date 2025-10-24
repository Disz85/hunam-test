import { z } from 'zod';

import { Education } from '@/features/employees/domain/enums/education-enum';
import { PaymentMethod } from '@/features/employees/domain/enums/payment-method-enum';
import { Sex } from '@/features/employees/domain/enums/sex-enum';

/**
 * Employee form validation schema
 *
 * Validates employee data with conditional fields based on PaymentMethod
 */
export const createEmployeeSchema = z
  .object({
    // Personal Information
    email: z
      .string()
      .email('Invalid email address')
      .min(1, 'Email is required'),
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    dateOfBirth: z.string().min(1, 'Date of birth is required'),
    placeOfBirth: z.string().min(1, 'Place of birth is required'),
    mothersFirstName: z.string().min(1, "Mother's first name is required"),
    mothersLastName: z.string().min(1, "Mother's last name is required"),
    phone: z.string().min(1, 'Phone number is required'),
    sex: z.nativeEnum(Sex, { message: 'Sex is required' }),
    education: z.nativeEnum(Education, { message: 'Education is required' }),

    // Address Information
    country: z.string().min(1, 'Country is required'),
    zipCode: z.string().min(1, 'ZIP code is required'),
    parcelNumber: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    administrativeArea: z.string().optional(),
    administrativeAreaType: z.string().optional(),
    houseNumber: z.string().min(1, 'House number is required'),
    building: z.string().optional(),
    staircase: z.string().optional(),
    floor: z.string().optional(),
    door: z.string().optional(),

    // Payment Information
    paymentMethod: z.nativeEnum(PaymentMethod, {
      message: 'Payment method is required',
    }),
    salary: z
      .number()
      .min(200000, 'Salary must be at least 200,000 HUF')
      .max(500000, 'Salary must not exceed 500,000 HUF'),

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
      message: 'Bank account number is required for transfer payment',
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
      message: 'Cash payment day is required for cash payment',
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
      message: 'Money dispatch address is required for dispatch payment',
      path: ['moneyDispatchAddress'],
    }
  );

export type CreateEmployeeFormData = z.infer<typeof createEmployeeSchema>;
