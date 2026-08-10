import { AppProviders as SharedAppProviders } from "@commerceos/shared/providers/app-providers";
import type { PropsWithChildren } from "react";
import { AuthProvider } from "@/modules/authentication/providers/auth-provider";

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <SharedAppProviders>
      <AuthProvider>{children}</AuthProvider>
    </SharedAppProviders>
  );
}
