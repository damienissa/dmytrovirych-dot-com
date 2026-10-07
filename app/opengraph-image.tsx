import { readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { ImageResponse } from "next/og";
import { products, siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
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
 * Generated at build time into a static PNG: the page header in miniature,
 * with the product icons in a row underneath.
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
          justifyContent: "center",
          padding: "0 86px",
          background: "#f5f4f4",
          color: "#111",
        }}
      >
        <img
          alt=""
          src={inline("/images/avatar.jpg")}
          width={150}
          height={150}
          style={{ borderRadius: 75 }}
        />
        <div
          style={{
            marginTop: 30,
            fontSize: 128,
            fontWeight: 700,
            letterSpacing: -7,
            lineHeight: 1,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 20, fontSize: 34, color: "#444" }}>
          {siteConfig.tagline}
        </div>
        <div style={{ marginTop: 44, display: "flex", gap: 16 }}>
          {products.map((p) => (
            <img
              key={p.slug}
              alt=""
              src={inline(p.icon)}
              width={64}
              height={64}
              style={{ borderRadius: 15 }}
            />
          ))}
        </div>
      </div>
    ),
    size
  );
}
