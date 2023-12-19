"use client";
import DownloadFrame from "@/components/frames/DownloadFrame";
import { sanityFetch } from "@/sanity/sanityFetch";
import { downloadPostByIdQuery } from "@/sanity/sanityQueries";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function NewsPage({ params }) {
  // Query for the download post
  const { data: post, isLoading } = useQuery({
    queryKey: ["downloadPost", params.id],
    queryFn: () =>
      sanityFetch({
        query: downloadPostByIdQuery,
        params,
      }),
  });

  // Handle loading state
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <DownloadFrame post={post} />
      </div>
    </div>
  );
}
