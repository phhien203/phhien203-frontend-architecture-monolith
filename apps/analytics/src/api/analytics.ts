import { apiClient } from "@commerceos/shared/api/client";
import type { AnalyticsOverview } from "../domain/analytics.types";

export function fetchAnalyticsOverview() {
	return apiClient.get<AnalyticsOverview>("/api/analytics/overview");
}
