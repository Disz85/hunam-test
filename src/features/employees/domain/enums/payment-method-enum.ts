/**
 * Payment method for employee salary (feature domain)
 */
export enum PaymentMethod {
  Transfer = 0,
  Cash = 1,
  Dispatch = 2,
}

/**
 * UI labels for PaymentMethod enum
 */
export const PaymentMethodLabels = {
  [PaymentMethod.Transfer]: 'Bank Transfer',
  [PaymentMethod.Cash]: 'Cash',
  [PaymentMethod.Dispatch]: 'Postal Dispatch',
} as const satisfies Record<PaymentMethod, string>;
