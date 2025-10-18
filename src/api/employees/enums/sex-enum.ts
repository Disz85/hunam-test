/**
 * Employee sex/gender enum
 */
export enum Sex {
  Female = 0,
  Male = 1,
  Unknown = 2,
}

/**
 * Labels for Sex enum (for UI display in dropdowns and tables)
 * @example
 * ```typescript
 * <option value={Sex.Female}>{SexLabels[Sex.Female]}</option>
 * ```
 */
export const SexLabels = {
  [Sex.Female]: 'Female',
  [Sex.Male]: 'Male',
  [Sex.Unknown]: 'Unknown',
} as const satisfies Record<Sex, string>;
