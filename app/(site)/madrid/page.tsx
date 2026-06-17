import type { Metadata } from "next";
import { Hammer, Snowflake, Zap } from "lucide-react";
import { CityHero } from "@/components/city/CityHero";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Sectors } from "@/components/home/Sectors";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceFeatures, type Feature } from "@/components/service/ServiceFeatures";

export const metadata: Metadata = {
  title: "Servicio técnico a domicilio en Madrid",
  description:
    "Multiservicios premium en Madrid. Electricidad, climatización y reparaciones del hogar a domicilio en Madrid ciudad y área metropolitana. Técnicos cualificados.",
};

const madridZones = [
  "Centro",
  "Salamanca",
  "Chamberí",
  "Chamartín",
  "Tetuán",
  "Retiro",
  "Arganzuela",
  "Moncloa",
  "Latina",
  "Carabanchel",
  "Usera",
  "Hortaleza",
  "Pozuelo de Alarcón",
  "Las Rozas",
  "Alcobendas",
  "Majadahonda",
  "San Sebastián de los Reyes",
  "Boadilla del Monte",
];

const features: Feature[] = [
  {
    icon: Zap,
    title: "Electricistas en Madrid",
    description:
      "Averías eléctricas, cuadros, mecanismos, iluminación y mejoras de seguridad para vivienda, comunidad o negocio.",
    bullets: ["Diagnóstico claro", "Material profesional", "Garantía por escrito"],
  },
  {
    icon: Snowflake,
    title: "Climatización en Madrid",
    description:
      "Instalación, mantenimiento y reparación de aire acondicionado, bombas de calor y ventilación.",
    bullets: ["Splits y multi-splits", "Mantenimiento preventivo", "Detección de fugas"],
  },
  {
    icon: Hammer,
    title: "Manitas en Madrid",
    description:
      "Pequeñas reparaciones del hogar, montaje de muebles, fijaciones, remates de obra y arreglos del día a día.",
    bullets: ["Una visita, lista entera", "Sin chapuzas", "Hogares y comunidades"],
  },
];

const madridFaq = [
  {
    q: "¿En qué zonas de Madrid trabajáis?",
    a: "Cubrimos Madrid ciudad (todos los distritos) y los principales municipios del área metropolitana: Pozuelo, Las Rozas, Alcobendas, Majadahonda, San Sebastián de los Reyes, Boadilla y alrededores. Si tu zona no aparece, escríbenos: vamos ampliando cobertura según la demanda.",
  },
  {
    q: "¿Cuánto tardáis en venir en Madrid?",
    a: "Depende de la franja horaria, la zona y la carga de trabajo del día. Te damos siempre una estimación honesta desde la primera llamada para que tú decidas con la información en la mano.",
  },
  {
    q: "¿Trabajáis con comunidades de vecinos en Madrid?",
    a: "Sí. Coordinamos con administradores y presidentes de comunidad. Facturación clara, presupuestos por escrito y trato profesional para todo el portal.",
  },
  {
    q: "¿Hacéis emergencias 24h en Madrid?",
    a: "Damos atención prioritaria a urgencias en horario laboral ampliado. Fuera de ese horario, valoramos cada caso. No vendemos un 24/7 imposible — preferimos llegar a tiempo de verdad cuando podemos.",
  },
];

export default function MadridPage() {
  return (
    <>
      <CityHero
        city="Madrid"
        title={
          <>
            Servicio técnico a domicilio en{" "}
            <span className="relative inline-block"><span className="relative z-10">Madrid</span><span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden /></span> y área metropolitana
          </>
        }
        description="Electricidad, climatización y reparaciones del hogar para Madrid ciudad y los principales municipios. Hogares, comunidades, comercios y oficinas — con la misma transparencia y cuidado en cada visita."
        zones={madridZones}
        eta="Buscamos contigo el horario más realista posible. Si la urgencia lo requiere y podemos, acortamos al máximo los tiempos."
      />
      <TrustBar />

      <ServiceFeatures
        eyebrow="Servicios en Madrid"
        title={
          <>
            Tres especialidades, un solo equipo de{" "}
            <span className="relative inline-block"><span className="relative z-10">confianza</span><span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden /></span> en Madrid
          </>
        }
        subtitle="Trabajamos con la misma calidad en todos los distritos de Madrid y municipios del área metropolitana. Te vemos, te escuchamos y te damos solución."
        features={features}
      />

      <ProcessSteps />
      <Sectors />
      <FaqSection items={madridFaq} />

      <CtaBanner
        title="¿Necesitas un técnico en Madrid?"
        subtitle="Llámanos o escríbenos por WhatsApp. Te decimos al momento si podemos ayudarte y en qué plazo."
      />
    </>
  );
}
