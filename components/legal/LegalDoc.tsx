import type { ReactNode } from "react";
import { FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { LegalDocContent } from "@/lib/legal-content";

/** Convierte URLs sueltas en enlaces clicables dentro de un texto. */
function linkify(text: string): ReactNode[] {
  const parts = text.split(/(https?:\/\/[^\s|]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="break-words font-semibold text-brand-700 underline underline-offset-2 hover:text-coral-600"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/** Renderiza un cuerpo de texto: párrafos separados por línea en blanco y listas con "- ". */
function renderBody(body: string): ReactNode[] {
  return body.split("\n\n").map((block, i) => {
    const lines = block.split("\n");
    const isList = lines.length > 0 && lines.every((l) => l.trim().startsWith("- "));

    if (isList) {
      return (
        <ul key={i} className="my-4 space-y-2">
          {lines.map((line, j) => (
            <li key={j} className="flex gap-2.5 text-ink-700">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
              <span className="leading-relaxed">{linkify(line.replace(/^-\s+/, ""))}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="my-3 leading-relaxed text-ink-700">
        {linkify(block)}
      </p>
    );
  });
}

export function LegalDoc({ doc }: { doc: LegalDocContent }) {
  return (
    <>
      {/* Cabecera */}
      <section className="border-b-2 border-ink-900 bg-cream-100">
        <Container className="py-12 sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink-900 bg-sun-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink-900 shadow-sticker">
            <FileText className="h-3.5 w-3.5" />
            Información legal
          </span>
          <h1 className="mt-5 font-display text-display-md text-ink-900 sm:text-display-lg">
            {doc.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-ink-700">{doc.intro}</p>
          <p className="mt-5 text-xs font-bold uppercase tracking-wider text-ink-500">
            Última actualización: {doc.updated}
          </p>
        </Container>
      </section>

      {/* Cuerpo */}
      <section className="bg-cream-50">
        <Container className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl">
            {doc.sections.map((section, i) => (
              <div
                key={i}
                className="border-b border-ink-200 py-6 first:pt-0 last:border-b-0 last:pb-0"
              >
                <h2 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-2 text-sm sm:text-[15px]">{renderBody(section.body)}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
