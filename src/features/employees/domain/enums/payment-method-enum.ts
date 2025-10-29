/**
 * Employee domain enums module
 *
 * @module features/employees/domain/enums/payment-method-enum
 */

/**
 * Payment method for employee salary
 *
 * Feature-level domain enum for employee payment methods.
 */
export enum PaymentMethod {
  Transfer = 0,
  Cash = 1,
  Dispatch = 2,
}

/**
 * UI labels for PaymentMethod enum
 *
 * Maps enum values to display labels for form selects and UI components.
 */
export const PaymentMethodLabels = {
  [PaymentMethod.Transfer]: 'Bank Transfer',
  [PaymentMethod.Cash]: 'Cash',
  [PaymentMethod.Dispatch]: 'Postal Dispatch',
} as const satisfies Record<PaymentMethod, string>;
