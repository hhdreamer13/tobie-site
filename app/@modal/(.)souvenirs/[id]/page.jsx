import DownloadInterceptModal from "@/components/modals/DownloadInterceptModal";
import { sanityFetch } from "@/sanity/sanityFetch";
import { downloadPostByIdQuery } from "@/sanity/sanityQueries";

export default async function DownloadModalPage({ params }) {
  const post = await sanityFetch({
    query: downloadPostByIdQuery,
    params,
  });

  return <DownloadInterceptModal post={post} />;
}
