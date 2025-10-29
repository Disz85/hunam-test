/**
 * Query provider module
 *
 * @module providers/query-provider
 */

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactNode } from 'react';

import { queryClient } from '../config/query-client-config';

/**
 * Query provider component props
 */
type QueryProviderProps = {
  /** Child components to wrap */
  children: ReactNode;
};

/**
 * React Query Provider wrapper component
 *
 * Provides TanStack Query functionality to the entire application.
 * Includes React Query Devtools in development mode for debugging.
 *
 * @param {QueryProviderProps} props - Component props
 * @param {ReactNode} props.children - Child components
 *
 * @example
 * ```tsx
 * import { QueryProvider } from '@/providers/query-provider';
 *
 * function App() {
 *   return (
 *     <QueryProvider>
 *       <YourApp />
 *     </QueryProvider>
 *   );
 * }
 * ```
 */
export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
