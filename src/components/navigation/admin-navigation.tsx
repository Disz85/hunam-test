import type { NavigationItem } from '@/config/navigation-config';
import type { useAuth } from '@/features/auth/hooks/use-auth';

import { LogoutButton } from './logout-button';
import { NavigationItems } from './navigation-items';
import { UserInfo } from './user-info';

type NavigationMenuProps = {
  navigation: NavigationItem[];
  currentUser: ReturnType<typeof useAuth>['currentUser'];
  isLoading: boolean;
  onLogout: () => void;
  onNavigate?: () => void;
};

/**
 * Admin navigation component
 *
 * Main navigation wrapper that combines navigation items, user info, and logout
 */
export const AdminNavigation = ({
  navigation,
  currentUser,
  isLoading,
  onLogout,
  onNavigate,
}: NavigationMenuProps) => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul className="flex flex-1 flex-col gap-y-1">
        <li>
          <NavigationItems navigation={navigation} onNavigate={onNavigate} />
        </li>
        <li className="mt-auto">
          <UserInfo currentUser={currentUser} />
          <LogoutButton isLoading={isLoading} onLogout={onLogout} />
        </li>
      </ul>
    </nav>
  );
};
