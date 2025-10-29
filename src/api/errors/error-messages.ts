/**
 * Error messages module
 *
 * @module api/errors/error-messages
 */

/**
 * Error message mapping for backend error IDs
 *
 * Provides user-friendly error messages based on backend error IDs.
 * Maps technical error IDs to readable, actionable messages.
 */

import { ApiError } from './api-error';

/**
 * Error ID to message mapping
 *
 * Based on backend error IDs from swagger documentation.
 * Maps technical backend error IDs to user-friendly messages.
 */
const ERROR_MESSAGE_MAP: Record<string, string> = {
  // Employee errors
  'Employee.EmailAlreadyExists': 'An employee with this email already exists.',
  'Employee.NotFound': 'Employee not found.',
  'Employee.InvalidEmail': 'Invalid email address.',
  'Employee.InvalidSalary': 'Salary must be between 200,000 and 500,000 HUF.',
  'Employee.MissingRequiredField': 'One or more required fields are missing.',
  'Employee.InvalidPaymentMethod': 'Invalid payment method configuration.',

  // Authentication errors
  'Auth.InvalidCredentials': 'Invalid username or password.',
  'Auth.Unauthorized': 'You are not authorized to perform this action.',
  'Auth.SessionExpired': 'Your session has expired. Please log in again.',

  // Generic errors
  'Validation.Error': 'Please check the form for errors.',
  'Server.Error': 'An unexpected error occurred. Please try again.',
};

/**
 * Get user-friendly error message from API error
 *
 * Attempts to map the error to a user-friendly message based on error ID.
 * Falls back to the error's message or a generic error message.
 *
 * @param {unknown} error - The error object (ApiError or unknown)
 * @returns {string} User-friendly error message
 *
 * @example
 * ```typescript
 * import { getErrorMessage } from '@/api/errors/error-messages';
 *
 * try {
 *   await apiCall();
 * } catch (error) {
 *   const message = getErrorMessage(error);
 *   console.error(message);
 * }
 * ```
 */
export const getErrorMessage = (error: unknown): string => {
  // If it's an ApiError, check for specific error ID
  if (error instanceof ApiError && error.errorId) {
    const mappedMessage = ERROR_MESSAGE_MAP[error.errorId];
    if (mappedMessage) {
      return mappedMessage;
    }
  }

  // Fallback to error message from ApiError
  if (error instanceof ApiError) {
    return error.message || 'An unexpected error occurred.';
  }

  // Fallback to generic message from ApiError utilities
  return ApiError.getMessage(error);
};

/**
 * Check if error is a specific error ID
 *
 * @param {unknown} error - The error object
 * @param {string} errorId - The error ID to check for
 * @returns {boolean} True if error matches the error ID
 *
 * @example
 * ```typescript
 * import { isErrorId } from '@/api/errors/error-messages';
 *
 * if (isErrorId(error, 'Employee.EmailAlreadyExists')) {
 *   // Handle email already exists error
 * }
 * ```
 */
export const isErrorId = (error: unknown, errorId: string): boolean => {
  return error instanceof ApiError && error.errorId === errorId;
};
