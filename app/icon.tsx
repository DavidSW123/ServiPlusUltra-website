import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon provisional (monograma sobre cobalto). Sustituible por el logo
// del león en versión cuadrada cuando exista como icono.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2D52F5",
          color: "#FFD43B",
          fontSize: 44,
          fontWeight: 800,
          fontFamily: "sans-serif",
          borderRadius: 14,
        }}
      >
        S
      </div>
    ),
    { ...size },
  );
}
