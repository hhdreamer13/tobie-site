import SectionHeader from "@/components/common/SectionHeader";
import NewsDisplay from "@/components/news/NewsDisplay";

import { sanityFetch } from "@/sanity/sanityFetch";
import {
  allNewsPostsQuery,
  pageTextsQuery,
  sectionBySlugQuery,
} from "@/sanity/sanityQueries";

export default async function ActualitesPage() {
  const pageText = await sanityFetch({
    query: pageTextsQuery,
    params: {
      sectionUrl: "/sections/actualites", // we're using a query for all pages with a dynamic param
    },
    tags: ["pageTexts"],
  });

  const section = await sanityFetch({
    query: sectionBySlugQuery,
    params: {
      sectionUrl: "/sections/actualites",
    },
    tags: ["section"],
  });

  const news = await sanityFetch({
    query: allNewsPostsQuery,
    tags: ["newsPost"],
    shouldCache: false,
  });

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
