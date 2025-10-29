/**
 * Employee API module
 *
 * @module api/employees
 */

/**
 * Employee API module
 *
 * Provides employee CRUD services and types.
 * Exports both the service class and a pre-configured instance.
 *
 * Note: Domain enums (Education, PaymentMethod, Sex) are located in the feature layer
 * for UI usage with label mappings.
 */
import { apiClient } from '../api-client';
import { EmployeeService } from './employee-service';

/**
 * Service class for dependency injection
 *
 * Use this when you need to inject a custom HTTP client for testing or special use cases.
 */
export { EmployeeService } from './employee-service';

/**
 * Pre-configured service instance (recommended for standard use)
 *
 * Ready-to-use instance with the default apiClient configuration.
 */
export const employeeService = new EmployeeService(apiClient);

/**
 * Employee-related types
 *
 * Exports EmployeeDto, CreateEmployeeRequest, EmployeeDtoPagination,
 * and GetApiEmployeesParams types from generated schemas.
 */
export type * from './employee-types';
