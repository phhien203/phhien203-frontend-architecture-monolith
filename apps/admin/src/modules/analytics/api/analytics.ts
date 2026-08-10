import { apiClient } from "@/shared/api/client";
import type { AnalyticsOverview } from "@/types";

export function fetchAnalyticsOverview() {
  return apiClient.get<AnalyticsOverview>("/api/analytics/overview");
}
