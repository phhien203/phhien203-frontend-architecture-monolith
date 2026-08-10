import { enableMocking } from "@commerceos/shared/mocks/browser";
import { AppProviders } from "@commerceos/shared/providers/app-providers";
import { createStandaloneRouter } from "@commerceos/shared/router/standalone";
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "commerceos-admin/authentication/providers/auth-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "@commerceos/shared/styles/globals.css";
import InventoryPage from "./screens/inventory.index";

const router = createStandaloneRouter([
	{ path: "/inventory", component: InventoryPage },
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
