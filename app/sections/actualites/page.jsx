/* eslint-disable react/no-unescaped-entities */
import SectionHeader from "@/components/common/SectionHeader";
import NewsDisplay from "@/components/news/NewsDisplay";
import { getAllPosts, getPageTexts } from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";

export default async function ActualitesPage() {
  const pageText = await sanityFetch({
    query: getPageTexts,
    params: {
      sectionUrl: "/sections/actualites",
    },
    tags: ["actualites"],
  });

  const news = await sanityFetch({ query: getAllPosts });

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="actualites" />
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
