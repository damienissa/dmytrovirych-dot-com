import { readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { ImageResponse } from "next/og";
import { products, siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}. ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

/** Read a file from public/ and inline it, so the build makes no fetches. */
function inline(publicPath: string) {
  const file = readFileSync(join(process.cwd(), "public", publicPath));
  return `data:${MIME[extname(publicPath)]};base64,${file.toString("base64")}`;
}

/**
 * Generated at build time into a static PNG: the page's hero in miniature,
 * with the product icons lined up like a Dock.
 *
 * Satori (which powers next/og) needs an explicit `display: flex` on any
 * element with more than one child.
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
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f7",
          color: "#1d1d1f",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <img
            alt=""
            src={inline("/images/avatar.jpg")}
            width={64}
            height={64}
            style={{ borderRadius: 32 }}
          />
          <div style={{ fontSize: 30, fontWeight: 600, color: "#6e6e73" }}>
            {`${siteConfig.name} · ${siteConfig.role}`}
          </div>
        </div>
        <div
          style={{
            marginTop: 26,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -3.5,
            lineHeight: 1.04,
            textAlign: "center",
          }}
        >
          <div>Small software.</div>
          <div>Made with care.</div>
        </div>

        <div
          style={{
            marginTop: 56,
            display: "flex",
            gap: 22,
            padding: "18px 24px",
            borderRadius: 32,
            background: "rgba(255,255,255,0.8)",
            border: "1px solid #e5e5ea",
            boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
          }}
        >
          {products.map((p) => (
            <img
              key={p.slug}
              alt=""
              src={inline(p.icon)}
              width={84}
              height={84}
              style={{ borderRadius: 19 }}
            />
          ))}
        </div>
      </div>
    ),
    size
  );
}
