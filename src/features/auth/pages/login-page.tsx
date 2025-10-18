import { Button, Description, Field, Input, Label } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  type LoginFormData,
  loginSchema,
  useLoginMutation,
} from '@/features/auth';

/**
 * Login page component
 *
 */
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useLoginMutation();

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  return (
    <main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Employee Management
        </h1>
        <p className="mt-2 text-lg/8 text-gray-600">Sign in to your account</p>
      </header>

      <section className="mx-auto mt-16 max-w-xl sm:mt-20">
        <form
          onSubmit={e => {
            void handleSubmit(onSubmit)(e);
          }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <Field>
              <Label className="block text-sm/6 font-semibold text-gray-900">
                Username
              </Label>
              <div className="mt-2.5">
                <Input
                  type="text"
                  autoComplete="username"
                  className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 ${
                    errors.username
                      ? 'outline-1 -outline-offset-1 outline-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500'
                      : 'outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                  }`}
                  {...register('username')}
                />
                {errors.username && (
                  <Description className="mt-2 flex items-center text-sm text-red-600">
                    <ExclamationCircleIcon className="mr-1 h-4 w-4" />
                    {errors.username.message}
                  </Description>
                )}
              </div>
            </Field>

            {/* Password Field */}
            <Field>
              <Label className="block text-sm/6 font-semibold text-gray-900">
                Password
              </Label>
              <div className="mt-2.5">
                <Input
                  type="password"
                  autoComplete="current-password"
                  className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 ${
                    errors.password
                      ? 'outline-1 -outline-offset-1 outline-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-500'
                      : 'outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600'
                  }`}
                  {...register('password')}
                />
                {errors.password && (
                  <Description className="mt-2 flex items-center text-sm text-red-600">
                    <ExclamationCircleIcon className="mr-1 h-4 w-4" />
                    {errors.password.message}
                  </Description>
                )}
              </div>
            </Field>

            {loginMutation.isError && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      Login failed. Please check your credentials and try again.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <Button
              type="submit"
              disabled={loginMutation.isPending}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-400"
            >
              {loginMutation.isPending && (
                <ArrowPathIcon className="h-5 w-5 animate-spin" />
              )}
              {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};
