import { client } from "@/sanity/clientConfig";

const fetchSections = async ({ queryKey }) => {
  const id = queryKey[0];

  const query = `
*[_type == "section" && slug.current == $sectionUrl][0] {
      _id,
        position,
        title,
        description,
        "imageSrcJour": imageSrcJour.asset->url,
        "imageSrcNuit": imageSrcNuit.asset->url,
        slug
      
      `;
  const result = await client.fetch(query);
  return result;
};

export default fetchSections;
