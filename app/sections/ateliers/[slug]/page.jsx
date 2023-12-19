"use client";
import SectionHeader from "@/components/common/SectionHeader";
import AtelierFullPage from "@/components/ateliers/AtelierFullPage";
import {
  atelierPostBySlugQuery,
  sectionBySlugQuery,
} from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function AtelierPage({ params }) {
  // Query for the atelier post
  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["atelierPost", params.slug],
    queryFn: () =>
      sanityFetch({
        query: atelierPostBySlugQuery,
        params,
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
        <AtelierFullPage post={post} />
      </div>
    </div>
  );
}
