import type { Metadata } from "next";
import {
  Droplets,
  Filter,
  Flame,
  Snowflake,
  Wind,
  Wrench,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { Sectors } from "@/components/home/Sectors";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceFeatures, type Feature } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceUrgencies } from "@/components/service/ServiceUrgencies";

export const metadata: Metadata = {
  title: "Climatización y aire acondicionado en Madrid y Barcelona",
  description:
    "Instalación, mantenimiento y reparación de aire acondicionado, bombas de calor y ventilación en Madrid y Barcelona. Equipos eficientes y servicio honesto.",
};

const features: Feature[] = [
  {
    icon: Snowflake,
    title: "Instalación de aire acondicionado",
    description:
      "Splits, multi-splits y conductos para vivienda, comercio y oficina. Te ayudamos a elegir el equipo adecuado según superficie, orientación y uso.",
    bullets: ["Asesoría sin compromiso", "Marcas top y eficientes", "Acabados limpios y discretos"],
  },
  {
    icon: Wrench,
    title: "Reparación de averías",
    description:
      "Equipos que no enfrían, fugas de gas, errores en pantalla, ruidos extraños o pérdidas de eficiencia. Diagnóstico y reparación duradera.",
    bullets: ["Detección de fugas", "Recarga de gas", "Sustitución de componentes"],
  },
  {
    icon: Filter,
    title: "Mantenimiento y limpieza",
    description:
      "Limpieza de filtros, baterías y desagües. Revisión técnica para evitar averías, mejorar la calidad del aire y reducir consumo.",
    bullets: ["Plan anual recomendado", "Reduce el consumo eléctrico", "Mejora la calidad del aire"],
  },
  {
    icon: Flame,
    title: "Bombas de calor y aerotermia",
    description:
      "Instalación y mantenimiento de bombas de calor para climatización integral. Ideal para reducir factura y mejorar confort en cualquier estación.",
    bullets: ["Calor en invierno + frío en verano", "Eficiencia energética alta", "Compatible con energía solar"],
  },
  {
    icon: Wind,
    title: "Ventilación y renovación de aire",
    description:
      "Sistemas de ventilación y extracción para baños, cocinas, oficinas y locales. Aire siempre limpio sin perder confort térmico.",
    bullets: ["Reduce humedades", "Aire fresco constante", "Cumplimiento normativo"],
  },
  {
    icon: Droplets,
    title: "Calderas y agua caliente",
    description:
      "Mantenimiento, reparación y sustitución de calderas. Coordinamos también con técnicos de gas autorizados cuando lo requiera la instalación.",
    bullets: ["Diagnóstico previo", "Sustitución por modelos eficientes", "Coordinación con instalador de gas"],
  },
];

const climaFaq = [
  {
    q: "¿Cuánto cuesta instalar un aire acondicionado?",
    a: "Depende del tipo de equipo (split simple o multi-split), la longitud del tubo de obra y la complejidad de la instalación. Te damos un rango orientativo por teléfono y, tras la visita, un presupuesto cerrado.",
  },
  {
    q: "¿Hacéis mantenimiento preventivo?",
    a: "Sí. Recomendamos al menos una revisión al año (limpieza de filtros, baterías y desagües, comprobación de presiones). Los equipos que se mantienen consumen menos y duran muchos más años.",
  },
  {
    q: "¿Mi equipo pierde gas, qué hago?",
    a: "Llámanos sin tocar el equipo. Localizamos la fuga, la sellamos y recargamos el gas correspondiente. Si el equipo es muy antiguo, te diremos honestamente si compensa repararlo o sustituirlo.",
  },
  {
    q: "¿Trabajáis con bombas de calor y aerotermia?",
    a: "Sí. Instalamos y mantenemos bombas de calor para vivienda y pequeño terciario. Te explicamos las opciones y los plazos de amortización antes de que decidas.",
  },
  {
    q: "¿Qué garantía dais en una instalación nueva?",
    a: "Garantía del fabricante en el equipo y nuestra garantía por escrito en la mano de obra y la instalación. Si algo no va bien, volvemos sin coste de desplazamiento dentro del periodo de garantía.",
  },
];

export default function ClimatizacionPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Climatización"
        title={
          <>
            Frío en agosto, calor en enero. <span className="text-sun-400">Sin sufrir.</span>
          </>
        }
        description="Instalación, mantenimiento y reparación de aire acondicionado, bombas de calor y ventilación en Madrid y Barcelona. Te recomendamos lo que de verdad necesitas, no lo más caro del catálogo."
        highlights={[
          "Marcas top: Daikin, Mitsubishi, LG, Toshiba",
          "Splits, multi-splits y conductos",
          "Mantenimiento preventivo",
          "Detección de fugas y recarga de gas",
        ]}
        ctaPrimaryLabel="Pedir presupuesto"
      />
      <TrustBar />

      <ServiceFeatures
        eyebrow="Qué hacemos"
        title={
          <>
            Climatización integral para tu hogar o tu negocio
          </>
        }
        subtitle="Vivienda, comercio y oficina. Equipos eficientes, instalaciones limpias y mantenimiento que de verdad alarga la vida de tu equipo."
        features={features}
      />

      <ServiceUrgencies
        title="Si tu equipo se ha parado en plena ola de calor o frío"
        description="Damos prioridad a los equipos parados en momentos críticos del año. En Barcelona buscamos llegar en menos de 4 horas cuando hay técnico disponible. En Madrid coordinamos contigo el horario más realista posible."
      />

      <Sectors />

      <FaqSection items={climaFaq} />

      <CtaBanner
        title="¿Listo para tener un aire que funcione?"
        subtitle="Cuéntanos tu caso: superficie, equipo actual y qué notas. Te orientamos y, si lo prefieres, vamos a casa para hacer el presupuesto cerrado."
      />
    </>
  );
}
