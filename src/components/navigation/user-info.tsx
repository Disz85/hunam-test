import { useTranslation } from 'react-i18next';

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
  const { t: tCommon } = useTranslation('common');
  const { t: tAuth } = useTranslation('auth');

  return (
    <div className="mb-3 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
      <p className="text-sm font-medium text-gray-900">
        {currentUser?.username || tCommon('user')}
      </p>
      <p className="text-xs text-gray-500">{tAuth('loggedIn')}</p>
    </div>
  );
};
