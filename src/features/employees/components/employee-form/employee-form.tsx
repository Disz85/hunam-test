import { Button } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { FormProvider, useForm, type UseFormReturn } from 'react-hook-form';

import { employeeService } from '@/api/employees';
import { ErrorAlert } from '@/components/ui/error/error-alert';
import { FormButton } from '@/components/ui/form/form-button';

import {
  type CreateEmployeeFormData,
  createEmployeeSchema,
} from '../../schemas/create-employee-schema';
import { AddressSection } from './sections/address-section';
import { PaymentSection } from './sections/payment-section';
import { PersonalInfoSection } from './sections/personal-info-section';

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

  const form: UseFormReturn<CreateEmployeeFormData> =
    useForm<CreateEmployeeFormData>({
      resolver: zodResolver(createEmployeeSchema),
      defaultValues: initialData,
    });

  const { handleSubmit, watch } = form;

  const paymentMethod = watch('paymentMethod');

  const mutation = useMutation({
    mutationFn: async (data: CreateEmployeeFormData) => {
      if (isEdit && employeeId) {
        return employeeService.update(employeeId, data);
      }
      return employeeService.create(data);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['employees'] });
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

  const handleCancel = () => {
    void navigate({ to: '/admin/employees' });
  };

  return (
    <main className="mx-auto max-w-2xl">
      <article className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div className="px-4 py-6 sm:p-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {mutation.error && (
              <div className="col-span-full">
                <ErrorAlert message={mutation.error.message} />
              </div>
            )}

            <FormProvider {...form}>
              <EmployeeFormContent
                paymentMethod={paymentMethod}
                onSubmit={e => {
                  void handleSubmit(onSubmit)(e);
                }}
                onCancel={handleCancel}
                isLoading={mutation.isPending}
                isEdit={isEdit}
              />
            </FormProvider>
          </div>
        </div>
      </article>
    </main>
  );
};

type EmployeeFormContentProps = {
  paymentMethod: number | undefined;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  isLoading: boolean;
  isEdit: boolean;
};

const EmployeeFormContent = ({
  paymentMethod,
  onSubmit,
  onCancel,
  isLoading,
  isEdit,
}: EmployeeFormContentProps) => (
  <form onSubmit={onSubmit} className="col-span-full space-y-8">
    <PersonalInfoSection />
    <AddressSection />
    <PaymentSection paymentMethod={paymentMethod} />
    <EmployeeFormActions
      onCancel={onCancel}
      isLoading={isLoading}
      isEdit={isEdit}
    />
  </form>
);

type EmployeeFormActionsProps = {
  onCancel: () => void;
  isLoading: boolean;
  isEdit: boolean;
};

const EmployeeFormActions = ({
  onCancel,
  isLoading,
  isEdit,
}: EmployeeFormActionsProps) => (
  <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 pt-6">
    <Button
      type="button"
      onClick={onCancel}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      Cancel
    </Button>
    <FormButton type="submit" isLoading={isLoading} disabled={isLoading}>
      {isEdit ? 'Update Employee' : 'Create Employee'}
    </FormButton>
  </div>
);
