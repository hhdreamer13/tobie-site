"use client";
import Loader from "@/components/common/Loader";
import SectionMenu from "@/components/section-menu/SectionMenu";
import { sanityFetch } from "@/sanity/sanityFetch";
import { sectionsQuery } from "@/sanity/sanityQueries";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["sections"],
    queryFn: () => sanityFetch({ query: sectionsQuery }),
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen justify-center items-center">
      <SectionMenu sections={data} />
    </div>
  );
}
