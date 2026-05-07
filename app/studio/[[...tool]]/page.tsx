"use client";

/**
 * Sanity Studio se monta aquí — accesible en /studio.
 *
 * Si NEXT_PUBLIC_SANITY_PROJECT_ID no está configurado, mostramos un
 * mensaje de bienvenida con instrucciones en lugar de romper.
 */

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          background: "#0F172A",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 520, textAlign: "center" }}>
          <h1 style={{ fontSize: 24, margin: 0, fontWeight: 700 }}>
            Sanity Studio · Pendiente de conectar
          </h1>
          <p style={{ marginTop: 12, fontSize: 14, opacity: 0.85, lineHeight: 1.6 }}>
            Para activar el panel de administración:
          </p>
          <ol
            style={{
              marginTop: 16,
              textAlign: "left",
              fontSize: 14,
              opacity: 0.85,
              lineHeight: 1.7,
            }}
          >
            <li>
              Crea un proyecto en{" "}
              <a
                href="https://www.sanity.io/manage"
                style={{ color: "#38BDF8" }}
                target="_blank"
                rel="noreferrer"
              >
                sanity.io/manage
              </a>
            </li>
            <li>
              Copia <code style={{ color: "#FBBF24" }}>projectId</code> y{" "}
              <code style={{ color: "#FBBF24" }}>dataset</code>
            </li>
            <li>
              Añade al archivo <code style={{ color: "#FBBF24" }}>.env.local</code>:
              <pre
                style={{
                  marginTop: 8,
                  padding: 12,
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  fontSize: 12,
                  overflow: "auto",
                }}
              >
                {`NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id
NEXT_PUBLIC_SANITY_DATASET=production`}
              </pre>
            </li>
            <li>Reinicia el servidor de desarrollo.</li>
          </ol>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
