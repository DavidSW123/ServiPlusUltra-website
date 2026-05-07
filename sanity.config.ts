import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "serviplusultra-studio",
  title: "ServiPlusUltra · Admin",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("Ajustes globales")
              .child(S.document().schemaType("settings").documentId("settings")),
            S.divider(),
            S.documentTypeListItem("service").title("Servicios"),
            S.documentTypeListItem("city").title("Ciudades"),
            S.documentTypeListItem("testimonial").title("Testimonios"),
            S.documentTypeListItem("galleryItem").title("Galería de trabajos"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: { types: schemaTypes },
});
