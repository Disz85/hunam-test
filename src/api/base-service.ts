import type { AxiosInstance } from 'axios';

import { ApiError } from '@/lib/api-error';

/**
 * BaseService
 *
 * Shared base for API services. Centralizes error handling by
 * converting Axios errors into typed ApiError instances.
 */
export abstract class BaseService {
  protected constructor(protected readonly httpClient: AxiosInstance) {}

  /**
   * Wrap an async service call with unified Axios -> ApiError mapping.
   * Keeps service methods concise and error handling consistent.
   */
  protected async handle<T>(fn: () => Promise<T>): Promise<T> {
    try {
      return await fn();
    } catch (error: unknown) {
      if (ApiError.isAxiosError(error)) {
        throw ApiError.fromAxiosError(error);
      }
      throw error;
    }
  }
}
