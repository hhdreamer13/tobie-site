import NewsInterceptModal from "@/components/modals/NewsInterceptModal";
import { sanityFetch } from "@/sanity/sanityFetch";
import { newsPostByIdQuery } from "@/sanity/sanityQueries";


export default async function SectionModalPage({ params }) {
  const { id } = params;

  const post = await sanityFetch({
    query: newsPostByIdQuery,
    params: {
      _id: id,
    },
    tags: ["newsPost"],
  });

  return <NewsInterceptModal post={post} />;
}
