import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Galería de trabajos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título del trabajo",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción breve",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "before",
      title: "Foto ANTES",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "after",
      title: "Foto DESPUÉS",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "service",
      title: "Servicio",
      type: "string",
      options: {
        list: [
          { title: "Electricidad", value: "electricidad" },
          { title: "Climatización", value: "climatizacion" },
          { title: "Manitas", value: "manitas" },
        ],
      },
    }),
    defineField({
      name: "city",
      title: "Ciudad",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Destacar",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
