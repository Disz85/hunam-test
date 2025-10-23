/**
 * API Error utilities for structured error handling
 *
 * Provides a simple, type-safe approach to handling API errors
 * with zero unsafe type casting.
 */

import { AxiosError } from 'axios';

import type { ObjectAppError } from '@/api';

/**
 * Custom API Error class
 *
 * Represents an HTTP API error with structured backend information.
 * All utilities are contained within this class as static methods.
 */
export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errorId?: string;
  public readonly errorDetails?: ObjectAppError;

  constructor(
    message: string,
    statusCode: number,
    errorId?: string,
    errorDetails?: ObjectAppError
  ) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.errorId = errorId;
    this.errorDetails = errorDetails;
  }

  /**
   * Type guard to check if data is a valid ObjectAppError
   */
  private static isObjectAppError(data: unknown): data is ObjectAppError {
    if (typeof data !== 'object' || data === null) {
      return false;
    }

    const obj = data as Record<string, unknown>;
    return 'message' in obj && typeof obj.message === 'string';
  }

  /**
   * Extract backend error from Axios response (type-safe)
   */
  private static extractBackendError(
    error: AxiosError
  ): ObjectAppError | undefined {
    const data = error.response?.data;
    return this.isObjectAppError(data) ? data : undefined;
  }

  /**
   * Create ApiError from AxiosError (type-safe transformation)
   */
  public static fromAxiosError(error: AxiosError): ApiError {
    const statusCode = error.response?.status ?? 500;
    const backendError = this.extractBackendError(error);
    const message = backendError?.message ?? error.message;

    return new ApiError(
      message,
      statusCode,
      backendError?.id ?? undefined,
      backendError
    );
  }

  /**
   * Extract error message from any error type (type-safe)
   */
  public static getMessage(error: unknown): string {
    if (this.isAxiosError(error)) {
      const backendError = this.extractBackendError(error);
      return backendError?.message ?? error.message;
    }

    if (error instanceof Error) {
      return error.message;
    }

    if (typeof error === 'string') {
      return error;
    }

    return 'An unknown error occurred';
  }

  /**
   * Check if error is an AxiosError
   */
  public static isAxiosError(error: unknown): error is AxiosError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'isAxiosError' in error &&
      error.isAxiosError === true
    );
  }

  /**
   * Check if error is specific HTTP status code
   */
  public static isStatus(error: unknown, statusCode: number): boolean {
    if (this.isAxiosError(error)) {
      return error.response?.status === statusCode;
    }
    if (error instanceof ApiError) {
      return error.statusCode === statusCode;
    }
    return false;
  }

  /**
   * Common HTTP status checks
   */
  public static isNotFound(error: unknown): boolean {
    return this.isStatus(error, 404);
  }

  public static isUnauthorized(error: unknown): boolean {
    return this.isStatus(error, 401);
  }

  public static isBadRequest(error: unknown): boolean {
    return this.isStatus(error, 400);
  }

  public static isConflict(error: unknown): boolean {
    return this.isStatus(error, 409);
  }

  public static isServerError(error: unknown): boolean {
    if (this.isAxiosError(error)) {
      const status = error.response?.status ?? 0;
      return status >= 500 && status < 600;
    }
    if (error instanceof ApiError) {
      return error.statusCode >= 500 && error.statusCode < 600;
    }
    return false;
  }
}
