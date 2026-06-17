import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ServiPlusUltra — Multiservicios en Madrid y Barcelona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#2D52F5",
          color: "#FFF8EE",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#FFD43B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1A1A1A",
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>ServiPlusUltra</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 70, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Reformas, urgencias y todo lo demás.
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#FFD43B" }}>
            Electricidad · Climatización · Reparaciones
          </div>
          <div style={{ fontSize: 28, color: "#DCE5FF" }}>Madrid · Barcelona</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
