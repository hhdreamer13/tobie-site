"use client";
import { pageTextsQuery, allDownloadPostsQuery } from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import DownloadCarousel from "@/components/downloads/DownloadCarousel";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function SouvenirsPage() {
  // Query for page texts
  const { data: pageText, isLoading: isLoadingPageText } = useQuery({
    queryKey: ["pageTexts", "/sections/souvenirs"],
    queryFn: () =>
      sanityFetch({
        query: pageTextsQuery,
        params: { sectionUrl: "/sections/souvenirs" },
      }),
  });

  // Query for download posts
  const { data: downloads, isLoading: isLoadingDownloads } = useQuery({
    queryKey: ["downloadPost"],
    queryFn: () => sanityFetch({ query: allDownloadPostsQuery }),
  });

  // Handle loading state for any of the queries
  if (isLoadingPageText || isLoadingDownloads) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
      <DownloadCarousel downloads={downloads} text={pageText?.heading} />
    </div>
  );
}
