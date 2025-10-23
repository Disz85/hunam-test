import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactNode } from 'react';

import { queryClient } from '../config/query-client-config';

type QueryProviderProps = {
  children: ReactNode;
};

/**
 * React Query Provider wrapper component
 *
 * Provides TanStack Query functionality to the entire application.
 * Includes React Query Devtools in development mode.
 */
export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
