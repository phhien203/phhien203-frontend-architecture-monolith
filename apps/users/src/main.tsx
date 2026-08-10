import { enableMocking } from "@commerceos/shared/mocks/browser";
import { AppProviders } from "@commerceos/shared/providers/app-providers";
import { createStandaloneRouter } from "@commerceos/shared/router/standalone";
import { RouterProvider } from "@tanstack/react-router";
import { AuthProvider } from "@commerceos/authentication/providers/auth-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import "@commerceos/shared/styles/globals.css";
import ProfilePage from "./screens/profile/profile.index";
import RolesPermissionsPage from "./screens/users/roles-permissions";
import UserDetailPage from "./screens/users/users.detail";
import UsersPage from "./screens/users/users.index";

const router = createStandaloneRouter([
	{ path: "/profile", component: ProfilePage },
	{ path: "/users", component: UsersPage },
	{ path: "/users/$userId", component: UserDetailPage },
	{ path: "/users/roles-permissions", component: RolesPermissionsPage },
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
