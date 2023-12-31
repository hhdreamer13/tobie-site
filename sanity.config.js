import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
import { frFRLocale } from "@sanity/locale-fr-fr";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: "Les Amis de Tobie",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  basePath: "/admin",
  plugins: [deskTool(), visionTool(), frFRLocale()],
  schema: { types: schemas },
});

export default config;
