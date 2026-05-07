/**
 * Variables de entorno para Sanity.
 *
 * El Studio se monta en /studio. Las queries del frontend usan estas
 * variables. Si no están configuradas, las páginas siguen funcionando
 * con el contenido fallback de `lib/site-config.ts`.
 */

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-28";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Falta NEXT_PUBLIC_SANITY_DATASET en .env.local",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Falta NEXT_PUBLIC_SANITY_PROJECT_ID en .env.local",
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === "") {
    // En build/dev sin Sanity configurado, devolvemos un placeholder seguro.
    // Las queries fallarán con gracia y los componentes mostrarán fallback.
    return "" as unknown as T;
  }
  return v;
}
