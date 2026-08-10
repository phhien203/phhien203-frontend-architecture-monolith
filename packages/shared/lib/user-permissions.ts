import type { PermissionKey } from "@/types";

export const VIEW_PERMISSION_BY_PATH: Array<{
  prefix: string;
  permission: PermissionKey;
}> = [
  { prefix: "/profile", permission: "dashboard.view" },
  {
    prefix: "/users/roles-permissions",
    permission: "settings.permissions.manage",
  },
  { prefix: "/users", permission: "settings.users.manage" },
  { prefix: "/settings", permission: "settings.view" },
  { prefix: "/analytics", permission: "analytics.view" },
  { prefix: "/discounts", permission: "discounts.view" },
  { prefix: "/customers", permission: "customers.view" },
  { prefix: "/orders", permission: "orders.view" },
  { prefix: "/inventory", permission: "inventory.view" },
  { prefix: "/catalog/new", permission: "catalog.edit" },
  { prefix: "/catalog", permission: "catalog.view" },
  { prefix: "/", permission: "dashboard.view" },
];

export const ORDERED_APP_PATHS = VIEW_PERMISSION_BY_PATH.map(
  (entry) => entry.prefix,
);

export function getViewPermissionForPath(pathname: string) {
  return (
    VIEW_PERMISSION_BY_PATH.find(
      (entry) => entry.prefix === "/" || pathname.startsWith(entry.prefix),
    )?.permission ?? "dashboard.view"
  );
}
