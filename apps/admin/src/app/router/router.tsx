import AnalyticsPage from "@commerceos/analytics/screens/analytics.index";
import ProductDetailPage from "@commerceos/catalog/screens/catalog.detail";
import CatalogPage from "@commerceos/catalog/screens/catalog.index";
import NewProductPage from "@commerceos/catalog/screens/catalog.new";
import CustomerDetailPage from "@commerceos/customers/screens/customers.detail";
import CustomersIndexPage from "@commerceos/customers/screens/customers.index";
import DashboardIndexPage from "@commerceos/dashboard/screens/dashboard.index";
import DiscountsDetailPage from "@commerceos/discounts/screens/discounts.detail";
import DiscountsIndexPage from "@commerceos/discounts/screens/discounts.index";
import DiscountsNewPage from "@commerceos/discounts/screens/discounts.new";
import InventoryIndexPage from "@commerceos/inventory/screens/inventory.index";
import OrdersDetailPage from "@commerceos/orders/screens/orders.detail";
import OrdersIndexPage from "@commerceos/orders/screens/orders.index";
import SettingsPage from "@commerceos/settings/screens/settings.index";
import ProfilePage from "@commerceos/users/screens/profile/profile.index";
import RolesPermissionsPage from "@commerceos/users/screens/users/roles-permissions";
import UserDetailPage from "@commerceos/users/screens/users/users.detail";
import UsersPage from "@commerceos/users/screens/users/users.index";
import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { NotFoundComponent, RootComponent } from "@/app/router/root";
import LoginPage from "@commerceos/authentication/screens/login/login";

export interface RouterContext {
  queryClient: QueryClient;
}

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardIndexPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const catalogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/catalog",
  component: CatalogPage,
});

const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/catalog/$productId",
  component: ProductDetailPage,
});

const newProductRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/catalog/new",
  component: NewProductPage,
});

const inventoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/inventory",
  component: InventoryIndexPage,
});

const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders",
  component: OrdersIndexPage,
});

const orderDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders/$orderId",
  component: OrdersDetailPage,
});

const customersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customers",
  component: CustomersIndexPage,
});

const customerDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customers/$customerId",
  component: CustomerDetailPage,
});

const discountsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/discounts",
  component: DiscountsIndexPage,
});

const newDiscountRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/discounts/new",
  component: DiscountsNewPage,
});

const discountDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/discounts/$discountId",
  component: DiscountsDetailPage,
});

const analyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/analytics",
  component: AnalyticsPage,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: UsersPage,
});

const userDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users/$userId",
  component: UserDetailPage,
});

const rolesPermissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users/roles-permissions",
  component: RolesPermissionsPage,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  catalogRoute,
  newProductRoute,
  productRoute,
  inventoryRoute,
  ordersRoute,
  orderDetailRoute,
  customersRoute,
  customerDetailRoute,
  discountsRoute,
  newDiscountRoute,
  discountDetailRoute,
  analyticsRoute,
  usersRoute,
  userDetailRoute,
  rolesPermissionsRoute,
  profileRoute,
  settingsRoute,
]);

export const router = createRouter({
  routeTree,
  context: {
    queryClient: new QueryClient(),
  },
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
	interface Register {
    router: typeof router;
  }
}
