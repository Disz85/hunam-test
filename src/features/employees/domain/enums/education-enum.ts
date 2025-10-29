/**
 * Employee domain enums module
 *
 * @module features/employees/domain/enums/education-enum
 */

/**
 * Employee education level enum
 *
 * Feature-level domain enum for employee education levels.
 */
export enum Education {
  Elementary = 0,
  VocationalSchool = 1,
  ApprenticeshipSchool = 2,
  VocationalSecondarySchool = 3,
  HighSchool = 4,
  College = 5,
  University = 6,
  Other = 7,
}

/**
 * Labels for Education enum
 *
 * Maps enum values to display labels for form selects and UI components.
 */
export const EducationLabels = {
  [Education.Elementary]: 'Elementary School',
  [Education.VocationalSchool]: 'Vocational School',
  [Education.ApprenticeshipSchool]: 'Apprenticeship School',
  [Education.VocationalSecondarySchool]: 'Vocational Secondary School',
  [Education.HighSchool]: 'High School',
  [Education.College]: 'College',
  [Education.University]: 'University',
  [Education.Other]: 'Other',
} as const satisfies Record<Education, string>;
