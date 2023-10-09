import { createClient, groq } from "next-sanity";
import clientConfig from "./clientConfig";

// export async function getSections() {
//   return createClient(clientConfig).fetch(
//     groq`*[_type == "section"] | order(position asc) {
//       _id,
//         position,
//         title,
//         description,
//         "imageSrcJour": imageSrcJour.asset->url,
//         "imageSrcNuit": imageSrcNuit.asset->url,
//         url
//       }`,
//   );
// }

export const getSections = groq`*[_type == "section"] | order(position asc) {
      _id,
        position,
        title,
        description,
        "imageSrcJour": imageSrcJour.asset->url,
        "imageSrcNuit": imageSrcNuit.asset->url,
        slug
      }`;

export const getPageTexts = groq`*[_type == "pageTexts" && section->url == $sectionUrl][0] {
  section -> {
    _id,
    title,
    url
  },
    heading,
    subheading
        }`;

export const getAllPosts = groq`
*[_type == "newsPost"]{
  _id,
  title,
  slug,
  body,
  imageSrc,
  date,
  tags,
  "imageAlt": imageSrc.alt
}
`;

export const postById = groq`*[_type == "newsPost" && _id == $_id][0]{
  _id,
  title,
  slug,
  body,
  imageSrc,
  date,
  tags,
  "imageAlt": imageSrc.alt
}
`;

export const postBySlug = groq`*[_type == "newsPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  body,
  imageSrc,
  date,
  tags,
  "imageAlt": imageSrc.alt
}
`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "newsPost" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;
