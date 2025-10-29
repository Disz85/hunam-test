/**
 * Base service module
 *
 * @module api/base-service
 */

import type { AxiosInstance } from 'axios';

import { ApiError } from '@/api/errors/api-error';

/**
 * BaseService
 *
 * Abstract base class for all API services providing centralized error handling.
 * Converts Axios errors into typed ApiError instances for consistent error management.
 *
 * @abstract
 *
 * @example
 * ```typescript
 * class EmployeeService extends BaseService {
 *   constructor() {
 *     super(apiClient);
 *   }
 *
 *   async getAll() {
 *     return this.handle(async () => {
 *       const response = await this.httpClient.get('/employees');
 *       return response.data;
 *     });
 *   }
 * }
 * ```
 */
export abstract class BaseService {
  /**
   * @param {AxiosInstance} httpClient - The configured Axios instance
   */
  protected constructor(protected readonly httpClient: AxiosInstance) {}

  /**
   * Wrap an async service call with unified Axios -> ApiError mapping
   *
   * Ensures consistent error handling across all service methods.
   * Automatically converts Axios errors to ApiError instances.
   *
   * @template T - Return type of the async operation
   * @param {() => Promise<T>} fn - Async function to execute
   * @returns {Promise<T>} Result of the async operation
   * @throws {ApiError} If the operation fails with an Axios error
   * @throws {Error} If the operation fails with a non-Axios error
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
