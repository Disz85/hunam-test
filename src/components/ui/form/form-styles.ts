/**
 * Shared form styles and constants
 *
 * Centralized styling for all form input components to ensure consistency
 */

/**
 * Base form input styles - used by all form controls (Input, Select, Textarea)
 */
export const FORM_BASE_STYLES =
  'block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2';

/**
 * Error state styles for form inputs
 */
export const FORM_ERROR_STYLES = 'outline-red-300 focus:outline-red-500';

/**
 * Default/valid state styles for form inputs
 */
export const FORM_DEFAULT_STYLES = 'outline-gray-300 focus:outline-indigo-600';

/**
 * Placeholder text styles
 */
export const FORM_PLACEHOLDER_STYLES = 'placeholder:text-gray-400';

/**
 * Helper function to get error state classes
 */
export const getFormErrorClasses = (hasError: boolean): string => {
  return hasError ? FORM_ERROR_STYLES : FORM_DEFAULT_STYLES;
};
