/**
 * API module - Public API for all backend communication
 *
 * @module api
 */

/**
 * API module - Public API for all backend communication
 *
 * This module provides a clean, feature-based API layer organized by backend sections:
 * - Authentication API (login, logout, current user)
 * - Employee API (CRUD operations, enums, types)
 *
 * Exports pre-configured service instances and all related types.
 * All services extend BaseService for unified error handling.
 *
 * @example
 * ```typescript
 * import { authService, employeeService, EmployeeDto } from '@/api';
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
 *
 * Exports the singleton ApiClient class and pre-configured apiClient instance.
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
 * - Types: EmployeeDto, CreateEmployeeRequest, etc.
 */
export * from './employees';

/**
 * Shared error types from generated schemas
 */
export type { ObjectAppError } from './__generated__/api.schemas';
