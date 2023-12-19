"use client";
import NewsFullPage from "@/components/news/NewsFullPage";
import SectionHeader from "@/components/common/SectionHeader";
import { sanityFetch } from "@/sanity/sanityFetch";
import { newsPostByIdQuery, sectionBySlugQuery } from "@/sanity/sanityQueries";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function NewsPage({ params }) {
  // Query for the news post
  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["newsPost", params.id],
    queryFn: () =>
      sanityFetch({
        query: newsPostByIdQuery,
        params,
      }),
  });

  // Query for section details
  const { data: section, isLoading: isLoadingSection } = useQuery({
    queryKey: ["section", "/sections/actualites"],
    queryFn: () =>
      sanityFetch({
        query: sectionBySlugQuery,
        params: { sectionUrl: "/sections/actualites" },
      }),
  });

  // Handle loading state for any of the queries
  if (isLoadingPost || isLoadingSection) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader section={section} />
      </div>
      <div className="mt-40 mb-10 w-4/5"></div>
      <div className="flex justify-center items-start w-full h-full ">
        <NewsFullPage post={post} />
      </div>
    </div>
  );
}
