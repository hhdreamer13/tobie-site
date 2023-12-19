import NewsInterceptModal from "@/components/modals/NewsInterceptModal";
import { sanityFetch } from "@/sanity/sanityFetch";
import { newsPostByIdQuery } from "@/sanity/sanityQueries";

export default async function NewsModalPage({ params }) {
  const post = await sanityFetch({
    query: newsPostByIdQuery,
    params,
  });

  return <NewsInterceptModal post={post} />;
}
