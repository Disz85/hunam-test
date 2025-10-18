/**
 * Payment method for employee salary
 */
export enum PaymentMethod {
  Transfer = 0,
  Cash = 1,
  Dispatch = 2,
}

/**
 * Labels for PaymentMethod enum (for UI display in dropdowns and tables)
 * Used for conditional form fields based on payment method selection
 * @example
 * ```typescript
 * <select onChange={(e) => setPaymentMethod(Number(e.target.value))}>
 *   {Object.entries(PaymentMethodLabels).map(([value, label]) => (
 *     <option key={value} value={value}>{label}</option>
 *   ))}
 * </select>
 * ```
 */
export const PaymentMethodLabels = {
  [PaymentMethod.Transfer]: 'Bank Transfer',
  [PaymentMethod.Cash]: 'Cash',
  [PaymentMethod.Dispatch]: 'Postal Dispatch',
} as const satisfies Record<PaymentMethod, string>;
