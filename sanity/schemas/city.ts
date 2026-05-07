import { defineField, defineType } from "sanity";

export const city = defineType({
  name: "city",
  title: "Ciudades",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "eta",
      title: "Compromiso de tiempo",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "zones",
      title: "Zonas/barrios cubiertos",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "heroImage",
      title: "Imagen destacada",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "faq",
      title: "Preguntas frecuentes específicas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", type: "string", title: "Pregunta" },
            { name: "a", type: "text", title: "Respuesta", rows: 4 },
          ],
          preview: { select: { title: "q" } },
        },
      ],
    }),
  ],
});
