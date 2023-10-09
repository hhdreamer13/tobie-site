import "server-only";

import { client } from "./clientConfig";

export async function sanityFetch({ query, params, tags }) {
  return client.fetch(query, params, {
    cache: "force-cache",
    next: {
      tags,
    },
  });
}
