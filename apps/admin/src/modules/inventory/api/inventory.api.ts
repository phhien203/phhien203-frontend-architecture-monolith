import { apiClient } from "@commerceos/shared/api/client";
import type { InventoryItem } from "@/types";

export function fetchInventory() {
  return apiClient.get<InventoryItem[]>("/api/inventory");
}

export function updateInventory(
  itemId: string,
  payload: Partial<InventoryItem>,
) {
  return apiClient.patch<InventoryItem>(`/api/inventory/${itemId}`, payload);
}
