import { enableMocking } from "@commerceos/shared/mocks/browser";
import { AppProviders } from "@commerceos/shared/providers/app-providers";
import { createStandaloneRouter } from "@commerceos/shared/router/standalone";
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "@commerceos/authentication/providers/auth-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "@commerceos/shared/styles/globals.css";
import OrderDetailPage from "./screens/orders.detail";
import OrdersPage from "./screens/orders.index";

const router = createStandaloneRouter([
	{ path: "/orders", component: OrdersPage },
	{ path: "/orders/$orderId", component: OrderDetailPage },
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
