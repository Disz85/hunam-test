/**
 * Utility functions module
 *
 * @module lib/cn
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function for merging Tailwind CSS classes
 *
 * Combines clsx for conditional class handling with tailwind-merge
 * to automatically resolve Tailwind CSS class conflicts.
 *
 * @param {...ClassValue[]} inputs - Class values to merge
 * @returns {string} Merged class string
 *
 * @example
 * ```typescript
 * import { cn } from '@/lib/cn';
 *
 * // Conditional classes
 * cn('px-2 py-1', isActive && 'bg-blue-500');
 *
 * // Conflict resolution (px-4 wins)
 * cn('px-2', 'px-4'); // 'px-4'
 *
 * // Multiple inputs
 * cn('base-class', condition && 'conditional-class', 'hover:bg-blue-600');
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
