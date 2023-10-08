import { getPageTexts } from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import SectionHeader from "@/components/common/SectionHeader";
import MemoryGame from "@/components/jeu/MemoryGame";

export default async function SectionPage() {
  const pageText = await sanityFetch({
    query: getPageTexts,
    params: {
      sectionUrl: "/sections/jeu",
    },
  });

  return (
    <div className="w-full min-h-screen pb-20 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="jeu" />
      </div>
      <div className="mt-40 mb-5 w-4/5 text-center">
        <h2 className="font-literata font-semibold text-xl">
          {pageText?.heading}
        </h2>
        <p className="mt-6">{pageText?.subheading}</p>
      </div>
      <div className="flex justify-center items-start w-full h-full ">
        <MemoryGame />
      </div>
    </div>
  );
}
