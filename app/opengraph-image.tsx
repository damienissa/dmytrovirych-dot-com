import { ImageResponse } from "next/og";
import { audit, call, siteConfig } from "@/lib/site";

export const alt = `${audit.name} by ${siteConfig.name} — find out where AI actually pays off in your business`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time into a static PNG, so there is no runtime cost and
 * no font fetch at request time. Satori (which powers next/og) needs explicit
 * `display: flex` on any element with more than one child.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07070b",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Accent glows */}
        <div
          style={{
            position: "absolute",
            top: -220,
            left: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: "#4f46e5",
            opacity: 0.35,
            filter: "blur(160px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            right: -140,
            width: 540,
            height: 540,
            borderRadius: 9999,
            background: "#06b6d4",
            opacity: 0.26,
            filter: "blur(160px)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#818cf8",
          }}
        >
          {audit.name}
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 8,
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#ececf1",
              maxWidth: 940,
            }}
          >
            Find out where AI actually pays off in your business.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#9a9aa8",
              maxWidth: 880,
            }}
          >
            {`${audit.duration} · scored opportunity map · ROI per opportunity · 90-day roadmap`}
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: "#ececf1" }}>
              {siteConfig.name}
            </div>
            <div style={{ fontSize: 24, color: "#9a9aa8", marginTop: 6 }}>
              dmytrovirych.com
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: 999,
              padding: "16px 32px",
              fontSize: 26,
              fontWeight: 700,
              color: "#07070b",
              background: "linear-gradient(120deg, #6366f1, #22d3ee)",
            }}
          >
            {`Starts with a ${call.priceLabel} call`}
          </div>
        </div>
      </div>
    ),
    size
  );
}
