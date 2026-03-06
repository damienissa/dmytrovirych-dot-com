import { NextResponse } from "next/server";
import { fetchPaddleRevenue, fetchRevenueCatRevenue } from "@/lib/revenue";

export async function GET() {
  const [redirectly, safeorbit] = await Promise.all([
    fetchPaddleRevenue(),
    fetchRevenueCatRevenue(),
  ]);

  return NextResponse.json(
    { redirectly, safeorbit },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
      },
    }
  );
}
