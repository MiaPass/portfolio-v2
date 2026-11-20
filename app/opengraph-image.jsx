import { ImageResponse } from "next/og";

export const alt = "Mia Passalia, Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #2a2438 0%, #1e1a28 55%, #2e2640 100%)",
          color: "#fafafa",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            color: "#a991f7",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
            Mia Passalia
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#c9bdd6",
              fontFamily: "system-ui, sans-serif",
              maxWidth: 820,
              lineHeight: 1.3,
            }}
          >
            Frontend Developer. Paneles, sitios y apps web de punta a punta.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#a991f7",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          passalia.ianina@gmail.com
        </div>
      </div>
    ),
    { ...size },
  );
}
