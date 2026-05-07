/**
 * Layout aislado para /studio — Sanity Studio se monta a pantalla completa
 * y NO debe usar el header/footer de la web.
 */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div data-sanity-studio>{children}</div>;
}

export const metadata = {
  robots: { index: false, follow: false },
};
