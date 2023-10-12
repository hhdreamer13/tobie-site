import { createClient, groq } from "next-sanity";
import { client } from "./clientConfig";

/* 
  Main Section
*/
export const sectionsQuery = groq`*[_type == "section"] | order(position asc) {
      _id,
        position,
        title,
        description,
        "imageSrcJour": imageSrcJour.asset->url,
        "imageSrcNuit": imageSrcNuit.asset->url,
        slug
      }`;

/* 
  Pages Texts
*/
export const pageTextsQuery = groq`*[_type == "pageTexts" && section->slug.current == $sectionUrl][0] {
  section -> {
    _id,
    title,
    slug
  },
    heading,
    subheading
        }`;

/* 
  News Section
*/
export const allNewsPostsQuery = groq`
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

export const newsPostBySlugQuery = groq`*[_type == "newsPost" && slug.current == $slug][0]{
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

export const newsPostByIdQuery = groq`*[_type == "newsPost" && _id == $id][0]{
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

/* 
  Atelier Section
*/

export const allAteliersPostsQuery = groq`
*[_type == "atelierPost"]{
  _id,
  title,
  slug,
  latitude,
  longitude,
  imageSrc,
  body,
  date,
  tags,
  "imageAlt": imageSrc.alt
}
`;

export const atelierPostBySlugQuery = groq`*[_type == "atelierPost" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  latitude,
  longitude,
  imageSrc,
  body,
  date,
  tags,
  "imageAlt": imageSrc.alt
}
`;

/* 
  Download Section
*/

export const allDownloadPostsQuery = groq`
*[_type == "downloadPost"]{
  _id,
  title,
  imageSrc,
  description,
  category,
  downloadLink,
  "imageAlt": imageSrc.alt
}
`;

export const downloadPostByIdQuery = groq`
*[_type == "downloadPost" && _id == $id][0]{
  _id,
  title,
  imageSrc,
  description,
  category,
  downloadLink,
  "fileUrl": downloadLink.asset->url,
  "imageAlt": imageSrc.alt
}
`;

/* 
  Game Section
*/
export const allGamesQuery = groq`
*[_type == "memoryGameSet"]{
  _id,
  gameSetName,
  "cards": cards[]{
    type,
    imageSrc,
    imageDetailSrc,
    description
  }
}
`;
