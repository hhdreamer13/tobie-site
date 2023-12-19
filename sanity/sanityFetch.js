import { client } from "./clientConfig";

export async function sanityFetch({ query, params }) {
  const result = await client.fetch(query, params);
  return result;
}
