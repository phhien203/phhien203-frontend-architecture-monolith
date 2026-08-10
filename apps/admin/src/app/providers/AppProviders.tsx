import { AuthProvider } from "@commerceos/authentication/providers/auth-provider";
import { AppProviders as SharedAppProviders } from "@commerceos/shared/providers/app-providers";
import type { PropsWithChildren } from "react";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <SharedAppProviders>
      <AuthProvider>{children}</AuthProvider>
    </SharedAppProviders>
  );
}
