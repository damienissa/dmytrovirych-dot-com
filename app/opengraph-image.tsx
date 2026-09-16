import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { audit, call, siteConfig } from "@/lib/site";

export const alt = `${audit.name} by ${siteConfig.name} — find out where AI actually pays off in your business`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time into a static PNG. The photograph is read off disk
 * and inlined, so there is no network fetch during the build.
 *
 * Satori (which powers next/og) needs an explicit `display: flex` on any
 * element with more than one child, and has no `object-position`, so the
 * photograph is sized and offset by hand to frame the ridgeline.
 */
export default function OpengraphImage() {
  const photo = readFileSync(
    join(process.cwd(), "public/images/mountain-desk.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#121311",
          position: "relative",
        }}
      >
        {/* Portrait source, cropped to the ridgeline band. */}
        <img
          alt=""
          src={photoSrc}
          width={1200}
          height={1600}
          style={{ position: "absolute", top: -240, left: 0 }}
        />
        {/* Same two scrims as the hero: one lifts the type off the sky,
            one keeps the foot readable. */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to top, rgba(18,19,17,0.95) 0%, rgba(18,19,17,0.74) 26%, rgba(18,19,17,0.20) 58%, rgba(18,19,17,0.46) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(18,19,17,0.72) 0%, rgba(18,19,17,0.42) 38%, rgba(18,19,17,0.06) 72%, rgba(18,19,17,0) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "0 72px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 4.4,
              textTransform: "uppercase",
              color: "#C9A87C",
            }}
          >
            {audit.name}
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.04,
              letterSpacing: -3,
              color: "#F2F1EC",
              maxWidth: 900,
            }}
          >
            Find out where AI actually pays off.
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 27,
              color: "rgba(242,241,236,0.76)",
              maxWidth: 820,
            }}
          >
            {`${audit.duration} · scored opportunity map · ROI per opportunity · 90-day roadmap`}
          </div>

          <div
            style={{
              marginTop: 42,
              paddingTop: 28,
              borderTop: "1px solid rgba(242,241,236,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 27, fontWeight: 600, color: "#F2F1EC" }}>
                {siteConfig.name}
              </div>
              <div
                style={{ fontSize: 22, color: "rgba(242,241,236,0.6)", marginTop: 5 }}
              >
                dmytrovirych.com
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px 30px",
                fontSize: 24,
                fontWeight: 600,
                color: "#121311",
                background: "#F2F1EC",
                borderRadius: 2,
              }}
            >
              {`Starts with a ${call.priceLabel} call`}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
