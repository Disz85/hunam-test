import type { EmployeeDto } from '@/api';

import type { CreateEmployeeFormData } from '../../schemas/create-employee-schema';
import { EMPLOYEE_DEFAULTS } from '../constants/employee-defaults';

/**
 * Maps EmployeeDto to CreateEmployeeFormData
 *
 * Transforms backend DTO to form-compatible data structure
 * Handles null/undefined values by converting to appropriate defaults
 */
export const mapEmployeeDtoToFormData = (
  employee: EmployeeDto
): CreateEmployeeFormData => {
  return {
    email: employee.email ?? '',
    firstName: employee.firstName ?? '',
    lastName: employee.lastName ?? '',
    dateOfBirth: employee.dateOfBirth ?? '',
    placeOfBirth: employee.placeOfBirth ?? '',
    mothersFirstName: employee.mothersFirstName ?? '',
    mothersLastName: employee.mothersLastName ?? '',
    phone: employee.phone ?? '',
    sex: employee.sex ?? EMPLOYEE_DEFAULTS.sex,
    education: employee.education ?? EMPLOYEE_DEFAULTS.education,
    country: employee.country ?? '',
    zipCode: employee.zipCode ?? '',
    parcelNumber: employee.parcelNumber ?? '',
    city: employee.city ?? '',
    administrativeArea: employee.administrativeArea ?? '',
    administrativeAreaType: employee.administrativeAreaType ?? '',
    houseNumber: employee.houseNumber ?? '',
    building: employee.building ?? '',
    staircase: employee.staircase ?? '',
    floor: employee.floor ?? '',
    door: employee.door ?? '',
    paymentMethod: employee.paymentMethod ?? EMPLOYEE_DEFAULTS.paymentMethod,
    salary: employee.salary ?? EMPLOYEE_DEFAULTS.salary,
    bankAccountNumber: employee.bankAccountNumber ?? '',
    moneyDispatchAddress: employee.moneyDispatchAddress ?? '',
    cashPaymentDay: employee.cashPaymentDay ?? undefined,
  };
};
