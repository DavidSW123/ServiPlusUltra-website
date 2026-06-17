import type { Metadata } from "next";
import { Hammer, Snowflake, Zap } from "lucide-react";
import { CityHero } from "@/components/city/CityHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Sectors } from "@/components/home/Sectors";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceFeatures, type Feature } from "@/components/service/ServiceFeatures";
import { ServiceUrgencies } from "@/components/service/ServiceUrgencies";

export const metadata: Metadata = {
  title: "Servicio técnico a domicilio en Barcelona",
  description:
    "Multiservicios premium en Barcelona. Electricidad, climatización y reparaciones del hogar a domicilio. Compromiso de llegada en menos de 4 horas en urgencias.",
};

const barcelonaZones = [
  "Eixample",
  "Gràcia",
  "Sarrià-Sant Gervasi",
  "Les Corts",
  "Sant Martí",
  "Ciutat Vella",
  "Horta-Guinardó",
  "Nou Barris",
  "Sant Andreu",
  "Sants-Montjuïc",
  "L'Hospitalet de Llobregat",
  "Badalona",
  "Sant Cugat del Vallès",
  "Esplugues de Llobregat",
  "Cornellà",
  "Sant Adrià de Besòs",
  "Castelldefels",
  "Sitges",
];

const features: Feature[] = [
  {
    icon: Zap,
    title: "Electricistas en Barcelona",
    description:
      "Averías eléctricas, cuadros, mecanismos, iluminación y mejoras de seguridad. Servicio rápido en toda la ciudad.",
    bullets: ["Diagnóstico claro", "Material profesional", "Garantía por escrito"],
  },
  {
    icon: Snowflake,
    title: "Climatización en Barcelona",
    description:
      "Instalación, mantenimiento y reparación de aire acondicionado, bombas de calor y ventilación residencial y comercial.",
    bullets: ["Splits y multi-splits", "Mantenimiento preventivo", "Detección de fugas y recarga"],
  },
  {
    icon: Hammer,
    title: "Manitas en Barcelona",
    description:
      "Pequeñas reparaciones del hogar, montaje de muebles, fijaciones, remates de obra y arreglos del día a día.",
    bullets: ["Una visita, lista entera", "Sin chapuzas", "Hogares y comunidades"],
  },
];

const barcelonaFaq = [
  {
    q: "¿En qué zonas de Barcelona trabajáis?",
    a: "Barcelona ciudad (todos los distritos) y los principales municipios del área metropolitana: L'Hospitalet, Badalona, Sant Cugat, Esplugues, Cornellà, Sant Adrià, Castelldefels, Sitges, etc. Si tu zona no aparece, escríbenos.",
  },
  {
    q: "¿Cuál es vuestro tiempo de respuesta en Barcelona?",
    a: "En Barcelona nos comprometemos, siempre que haya técnico disponible, a acudir en menos de 4 horas para urgencias. Para servicios programados, te damos cita en las franjas que mejor te convengan.",
  },
  {
    q: "¿Trabajáis con comunidades de vecinos en Barcelona?",
    a: "Sí. Coordinamos con administradores y presidentes. Facturación clara, presupuestos por escrito y trato profesional para todo el portal.",
  },
  {
    q: "¿Tenéis cobertura en l'Hospitalet, Badalona o Sant Cugat?",
    a: "Sí, son zonas habituales para nosotros. Si te queda algo más lejos, llámanos y vemos si podemos cuadrarlo. Estamos ampliando cobertura.",
  },
  {
    q: "¿Me podéis ayudar si no hablo español?",
    a: "Atendemos en español, catalán e inglés básico. Si necesitas otro idioma, dínoslo y buscamos la mejor manera de entendernos.",
  },
];

export default function BarcelonaPage() {
  return (
    <>
      <CityHero
        city="Barcelona"
        title={
          <>
            Servicio técnico a domicilio en{" "}
            <span className="relative inline-block"><span className="relative z-10">Barcelona</span><span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden /></span> y área metropolitana
          </>
        }
        description="Electricidad, climatización y reparaciones del hogar para Barcelona ciudad y municipios cercanos. Damos prioridad a las urgencias y trabajamos con la misma transparencia para particulares, comunidades y negocios."
        zones={barcelonaZones}
        eta="Compromiso de llegada en menos de 4 horas para urgencias en Barcelona ciudad y zona metropolitana, sujeto a disponibilidad de técnico."
      />
      <TrustBar />

      <ServiceFeatures
        eyebrow="Servicios en Barcelona"
        title={
          <>
            Lo que <span className="relative inline-block"><span className="relative z-10">de verdad necesitas</span><span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden /></span> en Barcelona
          </>
        }
        subtitle="Trabajamos con la misma calidad y rapidez en todos los distritos de Barcelona y municipios del área metropolitana."
        features={features}
      />

      <ServiceUrgencies />

      <ProcessSteps />
      <Sectors />
      <FaqSection items={barcelonaFaq} />

      <CtaBanner
        title="¿Necesitas un técnico en Barcelona?"
        subtitle="Llámanos o escríbenos por WhatsApp con fotos de lo que ocurre. Te decimos al momento si podemos llegar en menos de 4 horas."
      />
    </>
  );
}
