import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Ajustes globales",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Nombre del sitio",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      description: "Sube aquí el PNG con fondo transparente",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "phone",
      title: "Teléfono",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email de contacto",
      type: "string",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp (URL completa)",
      type: "url",
    }),
    defineField({
      name: "hours",
      title: "Horarios",
      type: "object",
      fields: [
        { name: "weekdays", type: "string", title: "Lunes-Viernes" },
        { name: "weekend", type: "string", title: "Fin de semana" },
        { name: "note", type: "string", title: "Nota adicional" },
      ],
    }),
    defineField({
      name: "social",
      title: "Redes sociales",
      type: "object",
      fields: [
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Ajustes globales" }),
  },
});
