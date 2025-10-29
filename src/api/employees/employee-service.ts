/**
 * Employee service module
 *
 * @module api/employees/employee-service
 */

import type { AxiosInstance } from 'axios';

import { BaseService } from '@/api/base-service';

import type {
  CreateEmployeeRequest,
  EmployeeDto,
  EmployeeDtoPagination,
  GetApiEmployeesParams,
} from '../__generated__/api.schemas';

/**
 * Employee service for CRUD operations
 *
 * Handles all employee-related API operations including:
 * - Listing employees with pagination and filters
 * - Retrieving individual employee details
 * - Creating new employees
 * - Updating existing employees
 * - Deleting employees
 *
 * @example
 * ```typescript
 * import { EmployeeService } from '@/api/employees/employee-service';
 * import { apiClient } from '@/api';
 *
 * const employeeService = new EmployeeService(apiClient);
 *
 * // Get all employees with filters
 * const employees = await employeeService.getAll({
 *   page: 1,
 *   pageSize: 10,
 *   search: 'John',
 *   sortBy: 'name',
 *   sortDirection: 'asc'
 * });
 *
 * // Create employee
 * const newEmployee = await employeeService.create({
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   // ... other fields
 * });
 * ```
 */
export class EmployeeService extends BaseService {
  /**
   * @param {AxiosInstance} httpClient - The configured Axios instance
   */
  constructor(httpClient: AxiosInstance) {
    super(httpClient);
  }

  /**
   * Get all employees with optional filters
   *
   * Retrieves a paginated list of employees with optional search and sorting.
   *
   * @param {GetApiEmployeesParams} [params] - Optional query parameters for filtering and pagination
   * @returns {Promise<EmployeeDtoPagination>} Paginated employee data
   * @throws {ApiError} If the request fails
   */
  public async getAll(
    params?: GetApiEmployeesParams
  ): Promise<EmployeeDtoPagination> {
    return this.handle(async () => {
      const response = await this.httpClient.get<EmployeeDtoPagination>(
        '/api/employees',
        { params }
      );
      return response.data;
    });
  }

  /**
   * Get single employee by ID
   *
   * Retrieves detailed information about a specific employee.
   *
   * @param {number} id - Employee ID
   * @returns {Promise<EmployeeDto>} Employee details
   * @throws {ApiError} If employee not found or request fails
   */
  public async getById(id: number): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.get<EmployeeDto>(
        `/api/employees/${id}`
      );
      return response.data;
    });
  }

  /**
   * Create new employee
   *
   * Creates a new employee with the provided data.
   *
   * @param {CreateEmployeeRequest} data - Employee data to create
   * @returns {Promise<EmployeeDto>} Created employee data
   * @throws {ApiError} If validation fails or request fails
   */
  public async create(data: CreateEmployeeRequest): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.post<EmployeeDto>(
        '/api/employees',
        data
      );
      return response.data;
    });
  }

  /**
   * Update existing employee
   *
   * Updates an employee with new data.
   *
   * @param {number} id - Employee ID to update
   * @param {CreateEmployeeRequest} data - Updated employee data
   * @returns {Promise<EmployeeDto>} Updated employee data
   * @throws {ApiError} If employee not found, validation fails, or request fails
   */
  public async update(
    id: number,
    data: CreateEmployeeRequest
  ): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.put<EmployeeDto>(
        `/api/employees/${id}`,
        data
      );
      return response.data;
    });
  }

  /**
   * Delete employee
   *
   * Permanently deletes an employee.
   *
   * @param {number} id - Employee ID to delete
   * @returns {Promise<EmployeeDto>} Deleted employee data
   * @throws {ApiError} If employee not found or request fails
   */
  public async delete(id: number): Promise<EmployeeDto> {
    return this.handle(async () => {
      const response = await this.httpClient.delete<EmployeeDto>(
        `/api/employees/${id}`
      );
      return response.data;
    });
  }
}
