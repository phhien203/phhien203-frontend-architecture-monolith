import { enableMocking } from "@commerceos/shared/mocks/browser";
import { AppProviders } from "@commerceos/shared/providers/app-providers";
import { createStandaloneRouter } from "@commerceos/shared/router/standalone";
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "@commerceos/authentication/providers/auth-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "@commerceos/shared/styles/globals.css";
import DiscountDetailPage from "./screens/discounts.detail";
import DiscountsPage from "./screens/discounts.index";
import NewDiscountPage from "./screens/discounts.new";

const router = createStandaloneRouter([
	{ path: "/discounts", component: DiscountsPage },
	{ path: "/discounts/new", component: NewDiscountPage },
	{ path: "/discounts/$discountId", component: DiscountDetailPage },
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
