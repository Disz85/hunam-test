import { Education } from '../enums/education-enum';
import { PaymentMethod } from '../enums/payment-method-enum';
import { Sex } from '../enums/sex-enum';

/**
 * Default values for employee form fields
 *
 * Centralized constants to avoid magic numbers and ensure consistency
 */
export const EMPLOYEE_DEFAULTS = {
  sex: Sex.Unknown,
  education: Education.Elementary,
  paymentMethod: PaymentMethod.Transfer,
  salary: 200000, // Minimum salary from requirements (200k-500k HUF)
} as const;
