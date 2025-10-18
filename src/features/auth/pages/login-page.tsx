import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  type LoginFormData,
  loginSchema,
  useLoginMutation,
} from '@/features/auth';

/**
 * Login page component
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
    <div>
      <h1>Login</h1>
      <form
        onSubmit={e => {
          void handleSubmit(onSubmit)(e);
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" {...register('username')} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" disabled={loginMutation.isPending}>
          {loginMutation.isPending ? 'Logging in...' : 'Login'}
        </button>

        {loginMutation.isError && (
          <p>Login failed. Please check your credentials.</p>
        )}
      </form>
    </div>
  );
};
