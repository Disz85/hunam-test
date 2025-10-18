import type { QueryClient } from '@tanstack/react-query';

/**
 * Router utility helpers for type-safe context access
 */
export class RouterHelpers {
  /**
   * Type guard to validate QueryClient at runtime
   */
  public static isQueryClient(value: unknown): value is QueryClient {
    return (
      typeof value === 'object' &&
      value !== null &&
      'ensureQueryData' in value &&
      typeof (value as QueryClient).ensureQueryData === 'function'
    );
  }

  /**
   * Helper to safely extract QueryClient from router context
   *
   * @throws {Error} If QueryClient is not available in router context
   */
  public static getQueryClient(context: {
    queryClient?: unknown;
  }): QueryClient {
    if (!this.isQueryClient(context.queryClient)) {
      throw new Error('QueryClient is not available in router context');
    }
    return context.queryClient;
  }

  /**
   * Type-safe helper to extract route params
   *
   * @throws {Error} If params are invalid
   */
  public static getRouteParams<T extends Record<string, unknown>>(
    params: unknown
  ): T {
    if (typeof params !== 'object' || params === null) {
      throw new Error('Invalid route params');
    }
    return params as T;
  }
}
