/**
 * Employee sex/gender enum (feature domain)
 */
export enum Sex {
  Female = 0,
  Male = 1,
  Unknown = 2,
}

/**
 * UI labels for Sex enum
 */
export const SexLabels = {
  [Sex.Female]: 'Female',
  [Sex.Male]: 'Male',
  [Sex.Unknown]: 'Unknown',
} as const satisfies Record<Sex, string>;
