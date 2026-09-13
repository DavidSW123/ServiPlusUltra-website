import type { Metadata } from "next";
import {
  Bath,
  Building2,
  Home,
  PaintRoller,
  Store,
  Users,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Sectors } from "@/components/home/Sectors";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceFeatures, type Feature } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";

export const metadata: Metadata = {
  title: "Reformas y obras en Madrid y Barcelona",
  description:
    "Reformas integrales y obra para particulares, comunidades y constructoras en Madrid y Barcelona. Desde una reforma de baño a la obra completa de un local o vivienda. Presupuesto y plazos por escrito.",
  alternates: { canonical: "/reformas" },
};

const features: Feature[] = [
  {
    icon: Home,
    title: "Reforma integral de vivienda",
    description:
      "Reformamos tu casa entera o por fases: distribución, instalaciones, suelos, pintura y acabados. Un solo interlocutor coordina todos los gremios.",
    bullets: ["Proyecto y planificación", "Todos los gremios coordinados", "Plazo y precio por escrito"],
  },
  {
    icon: Bath,
    title: "Baños y cocinas",
    description:
      "Las reformas que más cambian el día a día. Fontanería, electricidad, alicatado, mobiliario y electrodomésticos, dejándolo todo funcionando y limpio.",
    bullets: ["Cambio completo o parcial", "Fontanería y electricidad al día", "Acabados cuidados"],
  },
  {
    icon: Store,
    title: "Locales y oficinas",
    description:
      "Acondicionamiento y reforma de locales comerciales, oficinas y hostelería. Trabajamos con tus plazos de apertura para que pierdas el menor tiempo posible.",
    bullets: ["Adecuación de local comercial", "Instalaciones y normativa", "Coordinación con tu actividad"],
  },
  {
    icon: Building2,
    title: "Obra para constructoras y promotoras",
    description:
      "Ejecutamos obra y subcontrata de gremios (electricidad, fontanería, climatización, albañilería) para constructoras y promotoras, con la seriedad que exige un B2B.",
    bullets: ["Equipo propio y coordinación de oficios", "Certificados y boletines cuando aplica", "Facturación y plazos claros"],
  },
  {
    icon: Users,
    title: "Comunidades e inmobiliarias",
    description:
      "Rehabilitación de zonas comunes, puestas a punto entre inquilinos y remates de pisos para venta o alquiler. Trato directo con administradores y presidentes.",
    bullets: ["Zonas comunes y portales", "Pisos listos para vender o alquilar", "Presupuestos para comunidad"],
  },
  {
    icon: PaintRoller,
    title: "Albañilería, pladur y acabados",
    description:
      "Tabiquería, pladur, alicatados, solados, pintura y todos los remates que dejan una obra terminada de verdad, no a medias.",
    bullets: ["Tabiques y falsos techos", "Alicatado y solado", "Pintura y acabados finales"],
  },
];

const reformasFaq = [
  {
    q: "¿Hacéis reformas integrales completas o solo arreglos?",
    a: "Hacemos todos los alcances: desde una reforma de baño hasta la obra completa de una vivienda o un local. Coordinamos todos los gremios y te damos un solo interlocutor. Para los arreglos pequeños del día a día tenemos además el servicio de manitas.",
  },
  {
    q: "¿Trabajáis para constructoras y promotoras?",
    a: "Sí. Ejecutamos obra y subcontrata de gremios para constructoras, promotoras e inmobiliarias, con equipo propio, coordinación de oficios, facturación clara y los certificados o boletines que requiera cada trabajo.",
  },
  {
    q: "¿Dais presupuesto cerrado?",
    a: "En cuanto vemos el alcance real (visita o proyecto), te damos un presupuesto cerrado y por escrito, con materiales, mano de obra y plazo. Si durante la obra aparece algo imprevisto, te lo comunicamos y lo aprobamos contigo antes de seguir.",
  },
  {
    q: "¿Os encargáis de licencias y permisos?",
    a: "Te orientamos sobre qué permisos necesita tu reforma y coordinamos la documentación técnica cuando hace falta. Nuestro objetivo es que no tengas que ir persiguiendo trámites por tu cuenta.",
  },
  {
    q: "¿Qué plazos y garantía tengo?",
    a: "El plazo va por escrito en el presupuesto y lo respetamos. Damos 12 meses de garantía* en la mano de obra, además de la garantía del fabricante en los materiales y equipos instalados.",
  },
  {
    q: "¿En qué zonas hacéis reformas?",
    a: "Madrid y Barcelona, ciudad y área metropolitana. Para obras de mayor envergadura valoramos también municipios cercanos. Cuéntanos dónde es y lo confirmamos.",
  },
];

export default function ReformasPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Reformas y obras"
        title={
          <>
            Reformas y obras, <span className="text-copper-400">de principio a fin.</span>
          </>
        }
        description="Desde una reforma de baño hasta la obra completa de una vivienda o un local. Para particulares, comunidades y constructoras en Madrid y Barcelona. Un solo equipo coordina todos los gremios, con presupuesto y plazos por escrito."
        highlights={[
          "Todos los alcances: de pequeña a gran obra",
          "Proyecto y gremios coordinados",
          "Presupuesto cerrado por escrito",
          "Particulares · Comunidades · Constructoras",
        ]}
        ctaPrimaryLabel="Pedir presupuesto de obra"
      />
      <TrustBar />

      <ServiceFeatures
        eyebrow="Qué hacemos"
        title={
          <>
            De un baño a una obra completa, <span className="text-cobalt-600">bien hecha</span>
          </>
        }
        subtitle="Reforma de vivienda, baños y cocinas, locales, obra para constructoras y rehabilitación de comunidades. El alcance lo pones tú; la coordinación la ponemos nosotros."
        features={features}
      />

      <ProcessSteps />

      <Sectors />

      <FaqSection items={reformasFaq} />

      <CtaBanner
        title="¿Tienes una reforma u obra en mente?"
        subtitle="Cuéntanos qué quieres hacer y dónde. Si nos mandas fotos o planos por WhatsApp, afinamos mucho más la primera orientación de precio y plazo."
      />
    </>
  );
}
