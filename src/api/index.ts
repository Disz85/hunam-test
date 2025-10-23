/**
 * API module - Public API for all backend communication
 *
 * This module provides a clean, feature-based API layer organized by backend sections:
 * - Authentication API (login, logout, current user)
 * - Employee API (CRUD operations, enums, types)
 *
 * @example
 * ```typescript
 * import { authService, employeeService, EmployeeDto, Sex } from '@/api';
 *
 * // Authentication
 * await authService.login({ username, password });
 *
 * // Employees
 * const employees = await employeeService.getAll();
 * ```
 */

/**
 * HTTP Client
 */
export { ApiClient, apiClient } from './api-client';

/**
 * Authentication API Section
 * - Service class & pre-configured instance
 * - Types: LoginRequest, UserDto
 */
export * from './auth';

/**
 * Employee API Section
 * - Service class & pre-configured instance
 * - Enums: Education, PaymentMethod, Sex (with labels)
 * - Types: EmployeeDto, CreateEmployeeRequest, etc.
 */
export * from './employees';

/**
 * Shared error types
 */
export type { ObjectAppError } from './__generated__/api.schemas';
