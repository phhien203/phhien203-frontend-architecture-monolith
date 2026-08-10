import { Navigate, Outlet, useRouterState } from "@tanstack/react-router";

import { AppShell } from "@/app/shell/app-shell";
import { useAuth } from "@/modules/authentication/providers/use-auth";
import { LoadingState } from "@/shared/components/feedback/loading-state";
import { getViewPermissionForPath } from "@/shared/lib/user-permissions";

export function RootComponent() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const { isLoading, isAuthenticated, hasPermission, getFallbackPath } =
    useAuth();

  if (isLoading) {
    return <LoadingState label="Loading account session..." />;
  }

  if (!isAuthenticated) {
    return pathname === "/login" ? <Outlet /> : <Navigate to="/login" />;
  }

  if (pathname === "/login") {
    return <Navigate to={getFallbackPath()} />;
  }

  const requiredPermission = getViewPermissionForPath(pathname);
  if (!hasPermission(requiredPermission)) {
    return <Navigate to={getFallbackPath()} />;
  }

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}

export function NotFoundComponent() {
  return <div className="rounded-lg border bg-card p-8">Page not found.</div>;
}
