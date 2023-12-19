"use client";
import {
  allAteliersPostsQuery,
  pageTextsQuery,
  sectionBySlugQuery,
} from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import SectionHeader from "@/components/common/SectionHeader";
import MapDisplay from "@/components/ateliers/MapDisplay";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function AteliersPage() {
  // Query for page texts
  const { data: pageText, isLoading: isLoadingPageText } = useQuery({
    queryKey: ["pageTexts", "/sections/ateliers"],
    queryFn: () =>
      sanityFetch({
        query: pageTextsQuery,
        params: { sectionUrl: "/sections/ateliers" },
      }),
  });

  // Query for section details
  const { data: section, isLoading: isLoadingSection } = useQuery({
    queryKey: ["section", "/sections/ateliers"],
    queryFn: () =>
      sanityFetch({
        query: sectionBySlugQuery,
        params: { sectionUrl: "/sections/ateliers" },
      }),
  });

  // Query for ateliers posts
  const { data: ateliers, isLoading: isLoadingAteliers } = useQuery({
    queryKey: ["atelierPost"],
    queryFn: () => sanityFetch({ query: allAteliersPostsQuery }),
  });

  // Handle loading state for any of the queries
  if (isLoadingPageText || isLoadingSection || isLoadingAteliers) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader section={section} />
      </div>
      <div className="mt-40 mb-10 w-3/4">
        <h2 className="font-literata font-semibold text-xl">
          {pageText?.heading}
        </h2>
        <p className="mt-6 text-justify">{pageText?.subheading}</p>
      </div>
      <div className="flex justify-center items-start w-full h-full ">
        <MapDisplay locations={ateliers} />
      </div>
    </div>
  );
}
