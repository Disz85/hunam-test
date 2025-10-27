import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { employeeService } from '@/api/employees';
import { ErrorAlert } from '@/components/ui/error/error-alert';
import { PageSpinner } from '@/components/ui/loading/page-spinner';
import { getErrorMessage } from '@/lib/error-messages';

import { mapEmployeeDtoToFormData } from '../../domain/mappers/employee-mapper';
import { employeeQueryKeys } from '../../domain/query-keys/employee-query-keys';
import { useEmployee } from '../../hooks/use-employee';
import {
  type CreateEmployeeFormData,
  createEmployeeSchema,
} from '../../schemas/create-employee-schema';
import { EmployeeFormContent } from './employee-form-content';

/**
 * Props for the main EmployeeForm component
 */
type EmployeeFormProps = {
  initialData?: Partial<CreateEmployeeFormData>;
  isEdit?: boolean;
  employeeId?: number;
};

/**
 * Employee form component for create/edit operations
 *
 * Handles form submission, validation, and conditional field rendering
 */
export const EmployeeForm = ({
  initialData,
  isEdit = false,
  employeeId,
}: EmployeeFormProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: employee,
    isLoading: isLoadingEmployee,
    error: employeeError,
  } = useEmployee(isEdit ? employeeId : undefined);

  // Memoize form values to prevent unnecessary re-renders
  const formValues = useMemo(
    () => (isEdit && employee ? mapEmployeeDtoToFormData(employee) : undefined),
    [isEdit, employee]
  );

  const form = useForm<CreateEmployeeFormData>({
    resolver: zodResolver(createEmployeeSchema),
    defaultValues: initialData,
    values: formValues,
  });

  const { handleSubmit, watch } = form;

  const paymentMethod = watch('paymentMethod');

  const mutation = useMutation({
    mutationFn: async (data: CreateEmployeeFormData) => {
      if (isEdit && employeeId !== undefined) {
        return employeeService.update(employeeId, data);
      }
      return employeeService.create(data);
    },
    onSuccess: () => {
      // Invalidate all employee queries (both lists and details)
      void queryClient.invalidateQueries({
        queryKey: employeeQueryKeys.all,
      });
      void navigate({ to: '/admin/employees' });
    },
  });

  const onSubmit = async (data: CreateEmployeeFormData) => {
    try {
      await mutation.mutateAsync(data);
    } catch (_error) {
      // Error handling is done in mutation
    }
  };

  // Show loading spinner while fetching employee data
  if (isEdit && isLoadingEmployee) {
    return <PageSpinner />;
  }

  // Determine error message
  const errorMessage = employeeError
    ? 'Failed to load employee data. Please try again.'
    : mutation.error
      ? getErrorMessage(mutation.error)
      : undefined;

  return (
    <main className="mx-auto">
      {errorMessage && (
        <div className="mb-6">
          <ErrorAlert message={errorMessage} />
        </div>
      )}

      <FormProvider {...form}>
        <EmployeeFormContent
          paymentMethod={paymentMethod}
          onSubmit={e => {
            void handleSubmit(onSubmit)(e);
          }}
          isLoading={mutation.isPending}
          isEdit={isEdit}
        />
      </FormProvider>
    </main>
  );
};
