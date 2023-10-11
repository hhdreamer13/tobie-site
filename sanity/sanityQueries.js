import { groq } from "next-sanity";

export const getSections = groq`*[_type == "section"] | order(position asc) {
      _id,
        position,
        title,
        description,
        "imageSrcJour": imageSrcJour.asset->url,
        "imageSrcNuit": imageSrcNuit.asset->url,
        slug
      }`;

export const getPageTexts = groq`*[_type == "pageTexts" && section->slug.current == $sectionUrl][0] {
  section -> {
    _id,
    title,
    slug
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

export const getAllAteliers = groq`
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

export const atelierBySlug = groq`*[_type == "atelierPost" && slug.current == $slug][0]{
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
