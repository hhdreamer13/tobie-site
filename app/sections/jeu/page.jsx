"use client";
import {
  allGamesQuery,
  pageTextsQuery,
  sectionBySlugQuery,
} from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import SectionHeader from "@/components/common/SectionHeader";
import MemoryGame from "@/components/jeu/MemoryGame";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function SectionPage() {
  // Query for page texts
  const { data: pageText, isLoading: isLoadingPageText } = useQuery({
    queryKey: ["pageTexts", "/sections/jeu"],
    queryFn: () =>
      sanityFetch({
        query: pageTextsQuery,
        params: { sectionUrl: "/sections/jeu" },
      }),
  });

  // Query for section details
  const { data: section, isLoading: isLoadingSection } = useQuery({
    queryKey: ["section", "/sections/jeu"],
    queryFn: () =>
      sanityFetch({
        query: sectionBySlugQuery,
        params: { sectionUrl: "/sections/jeu" },
      }),
  });

  // Query for game assets
  const { data: gameAssets, isLoading: isLoadingGameAssets } = useQuery({
    queryKey: ["memoryGameSet"],
    queryFn: () => sanityFetch({ query: allGamesQuery }),
  });

  // Handle loading state for any of the queries
  if (isLoadingPageText || isLoadingSection || isLoadingGameAssets) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen pb-20 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader section={section} />
      </div>
      <div className="mt-40 mb-5 w-4/5 text-center">
        <h2 className="font-literata font-semibold text-xl">
          {pageText?.heading}
        </h2>
        <p className="mt-6">{pageText?.subheading}</p>
      </div>
      <div className="flex justify-center items-start w-full h-full ">
        <MemoryGame gameAssets={gameAssets} text={pageText?.extraText} />
      </div>
    </div>
  );
}
