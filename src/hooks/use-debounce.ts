/**
 * Custom React hooks module
 *
 * @module hooks/use-debounce
 */

import { useEffect, useState } from 'react';

/**
 * Custom hook for debouncing values
 *
 * Delays the update of a value until after a specified delay has passed.
 * Useful for reducing API calls or expensive operations triggered by user input.
 *
 * @template T - Type of the value to debounce
 * @param {T} value - The value to debounce
 * @param {number} delay - Delay in milliseconds before updating the debounced value
 * @returns {T} The debounced value
 *
 * @example
 * ```tsx
 * import { useDebounce } from '@/hooks/use-debounce';
 *
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 *
 * useEffect(() => {
 *   // This will only run after 300ms of no changes to searchTerm
 *   performSearch(debouncedSearchTerm);
 * }, [debouncedSearchTerm]);
 * ```
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
