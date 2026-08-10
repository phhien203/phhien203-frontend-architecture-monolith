import { enableMocking } from "@commerceos/shared/mocks/browser";
import { AppProviders } from "@commerceos/shared/providers/app-providers";
import { createStandaloneRouter } from "@commerceos/shared/router/standalone";
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "commerceos-admin/authentication/providers/auth-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "@commerceos/shared/styles/globals.css";
import ProductDetailPage from "./screens/catalog.detail";
import CatalogPage from "./screens/catalog.index";
import NewProductPage from "./screens/catalog.new";

const router = createStandaloneRouter([
	{ path: "/catalog", component: CatalogPage },
	{ path: "/catalog/$productId", component: ProductDetailPage },
	{ path: "/catalog/new", component: NewProductPage },
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
