/**
 * Employee domain constants module
 *
 * @module features/employees/domain/constants/employee-defaults
 */

import { Education } from '../enums/education-enum';
import { PaymentMethod } from '../enums/payment-method-enum';
import { Sex } from '../enums/sex-enum';

/**
 * Default values for employee form fields
 *
 * Centralized constants to avoid magic numbers and ensure consistency.
 * Used in forms and mappers for default field values.
 *
 * @example
 * ```typescript
 * import { EMPLOYEE_DEFAULTS } from '@/features/employees/domain/constants/employee-defaults';
 *
 * const defaultEmployee = {
 *   sex: EMPLOYEE_DEFAULTS.sex,
 *   education: EMPLOYEE_DEFAULTS.education,
 *   paymentMethod: EMPLOYEE_DEFAULTS.paymentMethod,
 *   salary: EMPLOYEE_DEFAULTS.salary,
 * };
 * ```
 */
export const EMPLOYEE_DEFAULTS = {
  sex: Sex.Unknown,
  education: Education.Elementary,
  paymentMethod: PaymentMethod.Transfer,
  salary: 200000, // Minimum salary from requirements (200k-500k HUF)
} as const;
