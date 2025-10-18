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

/**
 * Employee-related enums with UI-friendly labels
 */
export { Education, EducationLabels } from './enums/education-enum';
export {
  PaymentMethod,
  PaymentMethodLabels,
} from './enums/payment-method-enum';
export { Sex, SexLabels } from './enums/sex-enum';

/**
 * Employee-related types
 */
export type * from './employee-types';
