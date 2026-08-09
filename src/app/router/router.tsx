import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import AnalyticsPage from "@/modules/analytics/screens/analytics.index";
import LoginPage from "@/modules/authentication/screens/login/login";
import ProductDetailPage from "@/modules/catalog/screens/catalog.detail";
import CatalogPage from "@/modules/catalog/screens/catalog.index";
import NewProductPage from "@/modules/catalog/screens/catalog.new";
import DiscountsDetailPage from "@/modules/discounts/screens/discounts.detail";
import DiscountsIndexPage from "@/modules/discounts/screens/discounts.index";
import DiscountsNewPage from "@/modules/discounts/screens/discounts.new";
import SettingsPage from "@/modules/settings/screens/settings.index";
import RolesPermissionsPage from "@/modules/users/screens/users/roles-permissions";
import UserDetailPage from "@/modules/users/screens/users/users.detail";
import UsersPage from "@/modules/users/screens/users/users.index";
import { NotFoundComponent, RootComponent } from "@/routes/__root";
import CustomerDetailPage from "@/routes/customers/$customerId";
import CustomersPage from "@/routes/customers/index";
import DashboardPage from "@/routes/index";
import InventoryPage from "@/routes/inventory/index";
import OrderDetailPage from "@/routes/orders/$orderId";
import OrdersPage from "@/routes/orders/index";
import ProfilePage from "@/routes/profile/index";

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
  component: DashboardPage,
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
  component: InventoryPage,
});

const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders",
  component: OrdersPage,
});

const orderDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/orders/$orderId",
  component: OrderDetailPage,
});

const customersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customers",
  component: CustomersPage,
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
