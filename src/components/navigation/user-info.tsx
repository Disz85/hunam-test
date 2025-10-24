import type { useAuth } from '@/features/auth/hooks/use-auth';

type UserInfoProps = {
  currentUser: ReturnType<typeof useAuth>['currentUser'];
};

/**
 * User info component
 *
 * Displays current user information in navigation
 */
export const UserInfo = ({ currentUser }: UserInfoProps) => {
  return (
    <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
      <p className="text-sm font-medium text-gray-900">
        {currentUser?.username || 'User'}
      </p>
      <p className="text-xs text-gray-500">Logged in</p>
    </div>
  );
};
