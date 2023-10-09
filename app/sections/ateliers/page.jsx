/* eslint-disable react/no-unescaped-entities */

import { getPageTexts } from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import SectionHeader from "@/components/common/SectionHeader";
import MapDisplay from "@/components/ateliers/MapDisplay";
import ateliers from "@/utils/ateliers";

export default async function AteliersPage() {
  const pageText = await sanityFetch({
    query: getPageTexts,
    params: {
      sectionUrl: "/sections/ateliers",
    },
    tags: ["ateliers"],
  });

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="ateliers" />
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
