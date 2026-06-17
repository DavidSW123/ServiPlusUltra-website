import type { Metadata } from "next";
import {
  AlertTriangle,
  Cable,
  Lightbulb,
  Plug,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { Sectors } from "@/components/home/Sectors";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceFeatures, type Feature } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceUrgencies } from "@/components/service/ServiceUrgencies";

export const metadata: Metadata = {
  title: "Electricistas a domicilio en Madrid y Barcelona",
  description:
    "Electricistas autorizados a domicilio en Madrid y Barcelona. Averías, cuadros, mecanismos, iluminación y mejoras de seguridad. Diagnóstico claro y reparación duradera.",
};

const features: Feature[] = [
  {
    icon: AlertTriangle,
    title: "Averías y cortes de luz",
    description:
      "Saltan los diferenciales, un circuito deja de funcionar o una zona se queda sin luz. Localizamos el problema, lo reparamos y te explicamos qué ha pasado.",
    bullets: ["Diagnóstico con instrumentos", "Reparación duradera", "Informe claro de la causa"],
  },
  {
    icon: Plug,
    title: "Enchufes, mecanismos y puntos de luz",
    description:
      "Instalación y cambio de enchufes, interruptores, regletas, tomas de TV y datos, lámparas y apliques.",
    bullets: ["Sin cables colgando ni chapuzas", "Material de calidad", "Acabados limpios"],
  },
  {
    icon: ShieldCheck,
    title: "Cuadros eléctricos y seguridad",
    description:
      "Revisión y actualización de cuadros antiguos, instalación de protecciones diferenciales y magnetotérmicos.",
    bullets: ["Cumplimiento de normativa", "Protección de personas y equipos", "Mejor estabilidad"],
  },
  {
    icon: Lightbulb,
    title: "Iluminación a medida",
    description:
      "Diseño de iluminación para vivienda, comercio u oficina. LED de alta eficiencia, ambientes regulables y zonificación.",
    bullets: ["Reducción real del consumo", "Mejora del confort visual", "Diseño técnico + estético"],
  },
  {
    icon: Cable,
    title: "Instalaciones nuevas y reformas",
    description:
      "Tendido de circuitos para reformas, ampliación de instalaciones y cableado para electrodomésticos o equipos.",
    bullets: ["Coordinación con tu reforma", "Trazado limpio y documentado", "Pruebas finales"],
  },
  {
    icon: Zap,
    title: "Domótica y mejoras",
    description:
      "Instalación de tomas inteligentes, regulación de iluminación, persianas motorizadas y soluciones domóticas básicas.",
    bullets: ["Compatibles con apps habituales", "Sin obra siempre que se pueda", "Formación de uso"],
  },
];

const electricityFaq = [
  {
    q: "¿Sois electricistas autorizados?",
    a: "Trabajamos con técnicos cualificados y, en los trabajos que lo requieran, instalador autorizado. Si necesitas certificado o boletín eléctrico, te lo indicamos antes de empezar.",
  },
  {
    q: "¿Cuánto tardáis en venir a una avería eléctrica?",
    a: "Depende de la ciudad, la franja horaria y la carga de trabajo. En Barcelona, cuando hay técnico disponible, podemos llegar en menos de 4 horas. En Madrid y resto de servicios, te damos siempre una estimación honesta antes de que decidas.",
  },
  {
    q: "¿Podéis dar un precio cerrado por teléfono?",
    a: "En trabajos sencillos sí, pero en averías complejas necesitamos ver la instalación. Aun así, siempre te damos un rango orientativo antes de desplazarnos para que sepas por dónde se moverá el presupuesto.",
  },
  {
    q: "¿Trabajáis para hogares y para negocios?",
    a: "Sí. Atendemos viviendas particulares, comunidades de vecinos, comercios, oficinas e inmobiliarias. Si tienes una necesidad concreta, cuéntanos y vemos cómo encajarla.",
  },
  {
    q: "¿Y si la avería se repite tras la reparación?",
    a: "Damos garantía por escrito de los trabajos realizados. Si algo no termina de funcionar como debe, volvemos sin que tengas que volver a pagar el desplazamiento.",
  },
];

export default function ElectricidadPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Electricidad"
        title={
          <>
            Electricistas a domicilio que dan la cara en{" "}
            <span className="text-sun-400">Madrid y Barcelona</span>
          </>
        }
        description="Averías, cuadros, mecanismos, iluminación y mejoras de seguridad. Vamos a tu casa, comunidad o negocio, revisamos la instalación y te proponemos la solución más segura y razonable — sin sustos en la factura."
        highlights={[
          "Técnicos cualificados",
          "Material de primera marca",
          "Garantía por escrito",
          "Boletines y certificados cuando los necesites",
        ]}
        ctaPrimaryLabel="Llamar a un electricista"
      />
      <TrustBar />

      <ServiceFeatures
        eyebrow="Qué hacemos"
        title={
          <>
            Trabajos eléctricos completos, <span className="relative inline-block"><span className="relative z-10">sin chapuzas</span><span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-sun-400" aria-hidden /></span>
          </>
        }
        subtitle="Desde la avería puntual hasta la instalación completa de un local. Si algo no lo hacemos nosotros, te lo decimos antes de intentarlo."
        features={features}
      />

      <ServiceUrgencies />

      <Sectors />

      <FaqSection items={electricityFaq} />

      <CtaBanner
        title="¿Necesitas un electricista en Madrid o Barcelona?"
        subtitle="Llámanos, cuéntanos qué ocurre y te diremos cómo podemos ayudarte. Si nos mandas fotos por WhatsApp, podremos afinar aún más la respuesta."
      />
    </>
  );
}
