import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { useAuth } from "@/modules/authentication/providers/use-auth";
import {
  DiscountForm,
  type DiscountFormValues,
} from "@/modules/discounts/components/discount-form";
import { ActivityHistoryCard } from "@/shared/components/activity-history-card";
import { LoadingState } from "@/shared/components/feedback/loading-state";
import { PageHeader } from "@/shared/components/page-header";
import { Button } from "@/shared/ui/button";
import type { Discount } from "@/types";

import { fetchDiscount, updateDiscount } from "../api/discounts";
import {
  normalizeDiscountValues,
  serializeDiscountValues,
} from "../utils/discounts";

export default function DiscountDetailPage() {
  const { hasPermission } = useAuth();
  const { discountId } = useParams({ from: "/discounts/$discountId" });
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["discounts", discountId],
    queryFn: () => fetchDiscount(discountId),
  });
  const [initialValues, setInitialValues] = useState<
    DiscountFormValues | undefined
  >(undefined);

  useEffect(() => {
    if (data) setInitialValues(normalizeDiscountValues(data));
  }, [data]);

  const mutation = useMutation({
    mutationFn: (payload: Partial<Discount>) =>
      updateDiscount(discountId, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["discounts"] });
      await queryClient.invalidateQueries({
        queryKey: ["discounts", discountId],
      });
      await queryClient.invalidateQueries({
        queryKey: ["dashboard", "summary"],
      });
    },
  });

  if (isLoading || !initialValues) {
    return <LoadingState label="Loading discount..." />;
  }

  return (
    <section className="space-y-6">
      <PageHeader
        title={data?.code ?? "Discount"}
        description="Edit placeholder promotion details."
        actions={
          <Link to="/discounts">
            <Button variant="outline">Back to discounts</Button>
          </Link>
        }
      />
      <DiscountForm
        disabled={!hasPermission("discounts.manage")}
        submitLabel={mutation.isPending ? "Saving..." : "Save discount"}
        initialValues={initialValues}
        onSubmit={async (values) => {
          await mutation.mutateAsync(serializeDiscountValues(values));
        }}
      />
      <ActivityHistoryCard entries={data?.activityHistory} />
    </section>
  );
}
