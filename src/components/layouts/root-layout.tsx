import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

/**
 * Root layout component
 *
 * Wraps all pages with router outlet and dev tools
 */
export const RootLayout = () => {
  return (
    <>
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools position="bottom-left" />}
    </>
  );
};
