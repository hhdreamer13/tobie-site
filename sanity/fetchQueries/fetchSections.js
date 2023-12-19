import { client } from "@/sanity/clientConfig";

const fetchSections = async ({ queryKey }) => {
  const query = `
  *[_type == "section"] | order(position asc) {
    _id,
      position,
      title,
      description,
      "imageSrcJour": imageSrcJour.asset->url,
      "imageSrcNuit": imageSrcNuit.asset->url,
      slug
    }
      `;
  const result = await client.fetch(query);
  return result;
};

export default fetchSections;
