import type { AuditLogEntry } from "@commerceos/shared/domain/audit-log.types";
import type { CustomerSegment } from "@/modules/customers/domain/customers.types";

export type DiscountType = "percentage" | "fixed_amount" | "free_shipping";

export interface DiscountRule {
  minimumSpend: number;
  eligibleSegments: CustomerSegment[];
  eligibleCategories: string[];
}

export interface Discount {
  id: string;
  code: string;
  type: DiscountType;
  value: number;
  active: boolean;
  usageCount: number;
  startDate: string;
  endDate: string;
  rules: DiscountRule;
  activityHistory?: AuditLogEntry[];
}
