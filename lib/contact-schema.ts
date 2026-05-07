import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indica tu nombre").max(80, "Demasiado largo"),
  phone: z
    .string()
    .trim()
    .min(6, "Teléfono no válido")
    .max(30, "Teléfono no válido")
    .regex(/^[0-9+\-\s().]+$/, "Teléfono no válido"),
  email: z.string().trim().email("Email no válido").optional().or(z.literal("")),
  city: z.enum(["madrid", "barcelona", "otra"], {
    errorMap: () => ({ message: "Selecciona una ciudad" }),
  }),
  service: z.enum(["electricidad", "climatizacion", "manitas", "otro"], {
    errorMap: () => ({ message: "Selecciona un servicio" }),
  }),
  urgency: z.enum(["urgente", "esta-semana", "puedo-esperar"]).default("puedo-esperar"),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más (mínimo 10 caracteres)")
    .max(2000, "Demasiado largo"),
  consent: z
    .union([z.literal("on"), z.literal(true), z.boolean()])
    .refine((v) => v === "on" || v === true, "Debes aceptar la política de privacidad"),
  // Honeypot anti-spam — debe quedar vacío
  website: z.string().max(0, "spam detected").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const cityLabels: Record<string, string> = {
  madrid: "Madrid",
  barcelona: "Barcelona",
  otra: "Otra zona",
};

export const serviceLabels: Record<string, string> = {
  electricidad: "Electricidad",
  climatizacion: "Climatización",
  manitas: "Reparaciones / manitas",
  otro: "Otro / no estoy seguro",
};

export const urgencyLabels: Record<string, string> = {
  urgente: "Urgente — necesito hoy",
  "esta-semana": "Esta semana",
  "puedo-esperar": "Puedo esperar",
};
