"use client";
import TobieConte from "@/components/conte/TobieConte";
import { sanityFetch } from "@/sanity/sanityFetch";
import { allStoriesQuery } from "@/sanity/sanityQueries";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function SectionPage() {
  // Query for verse images
  const { data: verseImages, isLoading } = useQuery({
    queryKey: ["storyVerse"],
    queryFn: () => sanityFetch({ query: allStoriesQuery }),
  });

  // Handle loading state
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className=" flex-auto">
        <TobieConte verseImages={verseImages} />
      </div>
    </>
  );
}
