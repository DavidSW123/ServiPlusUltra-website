import type { Metadata } from "next";
import {
  Brush,
  DoorOpen,
  Hammer,
  PackageOpen,
  Sofa,
  Wrench,
} from "lucide-react";
import { CtaBanner } from "@/components/home/CtaBanner";
import { FaqSection } from "@/components/home/FaqSection";
import { Sectors } from "@/components/home/Sectors";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceFeatures, type Feature } from "@/components/service/ServiceFeatures";
import { ServiceHero } from "@/components/service/ServiceHero";

export const metadata: Metadata = {
  title: "Servicio manitas y pequeñas reparaciones del hogar",
  description:
    "Servicio manitas a domicilio en Madrid y Barcelona. Pequeñas reparaciones del hogar, montaje de muebles, fijaciones, remates de obra y arreglos del día a día.",
};

const features: Feature[] = [
  {
    icon: DoorOpen,
    title: "Puertas, ventanas y cerraduras",
    description:
      "Puertas que rozan, no cierran o hacen ruido. Ajustes, cambios de bisagras, pequeños arreglos de carpintería y mejoras en cerraduras.",
    bullets: ["Ajustes y reparaciones", "Bombines y cerraduras", "Mosquiteras y persianas"],
  },
  {
    icon: PackageOpen,
    title: "Montaje de muebles",
    description:
      "IKEA, Maisons du Monde, El Corte Inglés o ese armario que llegó en 9 cajas. Lo montamos, lo dejamos firme y nos llevamos los embalajes.",
    bullets: ["Armarios completos", "Estanterías y librerías", "Mesas, sofás y camas"],
  },
  {
    icon: Wrench,
    title: "Pequeñas fontanerías",
    description:
      "Grifos que gotean, sifones que se atascan, latiguillos viejos, cambios de cisterna o mecanismos de WC.",
    bullets: ["Grifos monomando y termostáticos", "Mecanismos de cisterna", "Pequeñas fugas visibles"],
  },
  {
    icon: Hammer,
    title: "Anclajes y fijaciones",
    description:
      "Colgar TVs, cuadros, estanterías pesadas, espejos grandes y todo lo que tienes apoyado en el suelo desde hace meses.",
    bullets: ["Tornillería y tacos adecuados", "Niveles correctos", "Sin destrozos en pared"],
  },
  {
    icon: Brush,
    title: "Pequeños remates y obra menor",
    description:
      "Esos arreglos que dejó la última reforma a medias: silicona, masilla, pintura puntual, alicatado de algún azulejo o ajuste de rodapié.",
    bullets: ["Resilicona de baños y cocinas", "Masilla y pintura puntual", "Reparación de azulejos sueltos"],
  },
  {
    icon: Sofa,
    title: "Esa lista que nunca acaba",
    description:
      "Tienes una libreta o una nota en el móvil con 7 cosas pendientes. Vamos en una sola visita y las dejamos hechas.",
    bullets: ["Coordinas todo en una visita", "Sin tener que pedir varias citas", "Sin pequeñas chapuzas"],
  },
];

const manitasFaq = [
  {
    q: "¿Hacéis solo arreglos pequeños o también algo más grande?",
    a: "Lo nuestro son los pequeños arreglos del día a día y los remates. Si vemos que algo necesita un especialista (por ejemplo una obra mayor), te lo decimos y te orientamos.",
  },
  {
    q: "¿Compráis vosotros el material o lo pongo yo?",
    a: "Lo que prefieras. Podemos llevar nosotros tornillería, silicona y consumibles habituales, o usar el material que ya tengas. Para piezas concretas, te avisamos antes para que apruebes el coste.",
  },
  {
    q: "¿Cómo cobráis los pequeños arreglos?",
    a: "Por visita y por tiempo, o por trabajo cerrado cuando se puede. Te lo decimos siempre antes de empezar para que no haya sorpresas.",
  },
  {
    q: "¿Puedo juntar varios arreglos en una visita?",
    a: "Es lo que te recomendamos. Manda una lista por WhatsApp con fotos y nos organizamos para verlo todo en una sola visita.",
  },
  {
    q: "¿Trabajáis para inmobiliarias y administradores?",
    a: "Sí. Hacemos puestas a punto entre inquilinos, remates de pisos para venta o alquiler y mantenimiento puntual de comunidades.",
  },
];

export default function ManitasPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Servicio · Manitas"
        title={
          <>
            Eso que <span className="text-ultra-gradient">nunca llega a hacerse</span>, lo dejamos hecho hoy
          </>
        }
        description="Pequeñas reparaciones del hogar, montaje de muebles, fijaciones, remates de obra menor y todos esos arreglos que se acumulan. Una sola visita, una lista terminada y sin chapuzas."
        highlights={[
          "Una visita, lista entera",
          "Material y herramientas profesionales",
          "Sin manchas ni roturas en pared",
          "Para hogares, comunidades e inmobiliarias",
        ]}
        ctaPrimaryLabel="Pedir cita"
      />
      <TrustBar />

      <ServiceFeatures
        eyebrow="Qué hacemos"
        title={<>Lo que hace falta para que tu casa funcione bien</>}
        subtitle="No vendemos reformas imposibles ni hacemos obras grandes. Hacemos lo que de verdad se acumula: pequeños arreglos, ajustes y remates."
        features={features}
      />

      <Sectors />

      <FaqSection items={manitasFaq} />

      <CtaBanner
        title="¿Tienes una lista de arreglos pendientes?"
        subtitle="Mándanosla por WhatsApp con fotos. La revisamos, te damos una orientación de tiempo y precio y vamos en una sola visita a dejarla hecha."
      />
    </>
  );
}
