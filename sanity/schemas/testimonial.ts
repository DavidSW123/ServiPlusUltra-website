import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonios / Reseñas",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre del cliente",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Tipo de cliente",
      type: "string",
      description: "Ej: Particular, Comunidad de vecinos, Comercio",
    }),
    defineField({
      name: "city",
      title: "Ciudad",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Estrellas (1-5)",
      type: "number",
      validation: (r) => r.min(1).max(5).integer(),
    }),
    defineField({
      name: "quote",
      title: "Testimonio",
      type: "text",
      rows: 4,
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
          { title: "Otros", value: "otros" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Destacar en home",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
