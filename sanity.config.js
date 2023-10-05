import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "crjq1wg1",
  dataset: "production",
  title: "Les Amis de Tobie",
  apiVersion: "2023-10-05",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
