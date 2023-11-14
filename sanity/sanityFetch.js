import "server-only";

import { client } from "./clientConfig";

export async function sanityFetch({ query, params, tags, shouldCache = true }) {
  const cacheStrategy = shouldCache ? "force-cache" : "no-store";

  return client.fetch(query, params, {
    cache: cacheStrategy,
    next: {
      tags,
    },
  });
}
