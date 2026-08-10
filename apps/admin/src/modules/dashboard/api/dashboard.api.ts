import { apiClient } from "@commerceos/shared/api/client";
import type { DashboardSummary } from "@/types";

export function fetchDashboardSummary() {
  return apiClient.get<DashboardSummary>("/api/dashboard/summary");
}
