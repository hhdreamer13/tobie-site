"use client";
import { sanityFetch } from "@/sanity/sanityFetch";
import AboutUs from "../../../components/contact/AboutUs";
import { allPartnersQuery, pageTextsQuery } from "@/sanity/sanityQueries";
import Loader from "@/components/common/Loader";
import { useQuery } from "@tanstack/react-query";

export default function SectionPage() {
  // Query for page texts
  const { data: pageText, isLoading: isLoadingPageText } = useQuery({
    queryKey: ["pageTexts", "/sections/contact"],
    queryFn: () =>
      sanityFetch({
        query: pageTextsQuery,
        params: { sectionUrl: "/sections/contact" },
      }),
  });

  // Query for partners
  const { data: partners, isLoading: isLoadingPartners } = useQuery({
    queryKey: ["partner"],
    queryFn: () => sanityFetch({ query: allPartnersQuery }),
  });

  // Handle loading state for any of the queries
  if (isLoadingPageText || isLoadingPartners) {
    return <Loader />;
  }

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
        <div className="flex justify-center items-start w-full h-full ">
          <AboutUs content={pageText} partnersLogos={partners} />
        </div>
      </div>
    </>
  );
}
