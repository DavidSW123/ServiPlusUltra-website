import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Servicios",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline corto",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descripción larga",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "heroImage",
      title: "Imagen destacada (hero)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "highlights",
      title: "Highlights (chips bajo el hero)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "features",
      title: "Servicios detallados",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Título" },
            { name: "description", type: "text", title: "Descripción", rows: 3 },
            {
              name: "bullets",
              type: "array",
              title: "Puntos clave",
              of: [{ type: "string" }],
            },
            {
              name: "icon",
              type: "string",
              title: "Icono (lucide name)",
              description: "Ej: Zap, Snowflake, Hammer, Wrench, Plug",
            },
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
    }),
    defineField({
      name: "gallery",
      title: "Galería de fotos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", type: "string", title: "Texto alternativo" },
            { name: "caption", type: "string", title: "Pie de foto" },
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "Preguntas frecuentes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "q", type: "string", title: "Pregunta" },
            { name: "a", type: "text", title: "Respuesta", rows: 4 },
          ],
          preview: {
            select: { title: "q" },
          },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Orden",
      type: "number",
    }),
  ],
});
