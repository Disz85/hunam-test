/**
 * Employee API module
 *
 * Provides employee CRUD services, enums, and types
 */
import { apiClient } from '../api-client';
import { EmployeeService } from './employee-service';

/**
 * Service class for dependency injection
 */
export { EmployeeService } from './employee-service';

/**
 * Pre-configured service instance (recommended for standard use)
 */
export const employeeService = new EmployeeService(apiClient);

// Domain enums moved to feature layer for UI usage

/**
 * Employee-related types
 */
export type * from './employee-types';
