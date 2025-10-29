/**
 * Employee domain enums module
 *
 * @module features/employees/domain/enums/sex-enum
 */

/**
 * Employee sex/gender enum
 *
 * Feature-level domain enum for employee gender/sex information.
 */
export enum Sex {
  Female = 0,
  Male = 1,
  Unknown = 2,
}

/**
 * UI labels for Sex enum
 *
 * Maps enum values to display labels for form selects and UI components.
 */
export const SexLabels = {
  [Sex.Female]: 'Female',
  [Sex.Male]: 'Male',
  [Sex.Unknown]: 'Unknown',
} as const satisfies Record<Sex, string>;
