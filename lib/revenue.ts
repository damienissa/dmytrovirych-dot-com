export async function fetchPaddleRevenue(): Promise<number> {
  const apiKey = process.env.PADDLE_API_KEY;
  if (!apiKey) return 0;

  try {
    const res = await fetch(
      "https://api.paddle.com/subscriptions?status=active&include=recurring_transaction_details",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) return 0;

    const data = await res.json();
    const subscriptions = data.data ?? [];

    let mrr = 0;
    for (const sub of subscriptions) {
      const amount = parseFloat(sub.recurring_transaction_details?.totals?.total ?? "0");
      const interval = sub.billing_cycle?.interval ?? "month";
      if (interval === "year") {
        mrr += amount / 12;
      } else {
        mrr += amount;
      }
    }

    return Math.round(mrr / 100);
  } catch {
    return 0;
  }
}

export async function fetchRevenueCatRevenue(): Promise<number> {
  const apiKey = process.env.REVENUECAT_API_KEY;
  const projectId = process.env.REVENUECAT_PROJECT_ID;
  if (!apiKey || !projectId) return 0;

  try {
    const res = await fetch(
      `https://api.revenuecat.com/v2/projects/${projectId}/metrics/overview`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) return 0;

    const data = await res.json();
    const metrics: { id: string; value: number }[] = data.metrics ?? [];
    const mrrMetric = metrics.find((m) => m.id === "mrr");
    return Math.round(mrrMetric?.value ?? 0);
  } catch {
    return 0;
  }
}
