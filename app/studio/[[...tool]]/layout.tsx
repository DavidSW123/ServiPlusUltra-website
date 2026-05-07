/**
 * Layout interno del Sanity Studio — exporta metadata específica
 * (viewport y título del Studio) sin mezclar el chrome del sitio.
 */

export { metadata, viewport } from "next-sanity/studio";

export default function StudioToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
