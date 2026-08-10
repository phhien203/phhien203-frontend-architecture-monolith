import { apiClient } from "@commerceos/shared/api/client";
import type { DashboardSummary } from "@commerceos/shared/domain/commerce/dashboard.types";

export function fetchDashboardSummary() {
  return apiClient.get<DashboardSummary>("/api/dashboard/summary");
}
