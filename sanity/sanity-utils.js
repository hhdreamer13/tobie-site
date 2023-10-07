import { createClient, groq } from "next-sanity";
import clientConfig from "./client-config";

export async function getSections() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "section"] | order(position asc) {
        position,
        title,
        description,
        "imageSrcJour": imageSrcJour.asset->url,
        "imageSrcNuit": imageSrcNuit.asset->url,
        url
      }`,
  );
}
