"use client";
import SectionHeader from "@/components/common/SectionHeader";
import NewsDisplay from "@/components/news/NewsDisplay";
import Loader from "@/components/common/Loader";
import { sanityFetch } from "@/sanity/sanityFetch";
import {
  allNewsPostsQuery,
  pageTextsQuery,
  sectionBySlugQuery,
} from "@/sanity/sanityQueries";
import { useQuery } from "@tanstack/react-query";

export default function ActualitesPage() {
  // Query for page texts
  const { data: pageText, isLoading: isLoadingPageText } = useQuery({
    queryKey: ["pageTexts", "/sections/actualites"],
    queryFn: () =>
      sanityFetch({
        query: pageTextsQuery,
        params: { sectionUrl: "/sections/actualites" },
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

  // Query for news posts
  const { data: news, isLoading: isLoadingNews } = useQuery({
    queryKey: ["newsPost"],
    queryFn: () => sanityFetch({ query: allNewsPostsQuery }),
  });

  // Handle loading state for any of the queries
  if (isLoadingPageText || isLoadingSection || isLoadingNews) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader section={section} />
      </div>
      <div className="mt-40 mb-10 w-4/5">
        <h2 className="font-literata font-semibold text-xl">
          {pageText?.heading}
        </h2>
        <p className="mt-6 font- text-justify">{pageText?.subheading}</p>
      </div>
      <div className="flex justify-center items-start w-full h-full ">
        <NewsDisplay news={news} />
      </div>
    </div>
  );
}
