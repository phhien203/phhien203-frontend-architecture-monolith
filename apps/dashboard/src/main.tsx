import DashboardPage from "@commerceos/dashboard/screens/dashboard.index";
import { enableMocking } from "@commerceos/shared/mocks/browser";
import { AppProviders } from "@commerceos/shared/providers/app-providers";
import { createStandaloneRouter } from "@commerceos/shared/router/standalone";
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "commerceos-admin/authentication/providers/auth-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "@commerceos/shared/styles/globals.css";

const router = createStandaloneRouter([
	{ path: "/", component: DashboardPage },
	{ path: "/dashboard", component: DashboardPage },
]);

void enableMocking().then(() => {
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>
			<AppProviders>
				<AuthProvider>
					<RouterProvider router={router} />
				</AuthProvider>
			</AppProviders>
		</React.StrictMode>,
	);
});
