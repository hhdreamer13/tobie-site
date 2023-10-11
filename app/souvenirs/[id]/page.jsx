import DownloadFrame from "@/components/frames/DownloadFrame";
import { sanityFetch } from "@/sanity/sanityFetch";
import { downloadPostByIdQuery } from "@/sanity/sanityQueries";

export default async function NewsPage({ params }) {
  const post = await sanityFetch({
    query: downloadPostByIdQuery,
    params,
    tags: ["downloadPost"],
  });


  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <DownloadFrame post={post} />
      </div>
    </div>
  );
}
