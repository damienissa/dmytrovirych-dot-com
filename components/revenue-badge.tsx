"use client";

import { useEffect, useState } from "react";

export function RevenueBadge({ revenueKey, revenueSource }: { revenueKey: string; revenueSource: string }) {
  const [amount, setAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(revenueSource !== "none");

  useEffect(() => {
    if (revenueSource === "none") return;

    fetch("/api/revenue")
      .then((res) => res.json())
      .then((data) => {
        setAmount(data[revenueKey] ?? 0);
      })
      .catch(() => {
        setAmount(0);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [revenueKey, revenueSource]);

  if (revenueSource === "none") {
    return (
      <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
        Waitlist
      </span>
    );
  }

  if (loading) {
    return (
      <span className="inline-flex h-5 w-16 animate-pulse rounded-full bg-zinc-100" />
    );
  }

  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
      ${amount?.toLocaleString()}/mo
    </span>
  );
}
