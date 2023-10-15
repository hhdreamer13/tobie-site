import { sanityFetch } from "@/sanity/sanityFetch";
import {
  newsPostBySlugQuery,
  sectionBySlugQuery,
} from "@/sanity/sanityQueries";
import NewsFullPage from "@/components/news/NewsFullPage";
import SectionHeader from "@/components/common/SectionHeader";

export default async function NewsPage({ params }) {
  const post = await sanityFetch({
    query: newsPostBySlugQuery,
    params,
    tags: ["newsPost"],
  });

  const section = await sanityFetch({
    query: sectionBySlugQuery,
    params: {
      sectionUrl: "/sections/actualites", // we're using a query for all pages with a dynamic param
    },
    tags: ["section"],
  });

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader section={section} />
      </div>
      <div className="mt-40 mb-10 w-4/5"></div>
      <div className="flex justify-center items-start w-full h-full ">
        <NewsFullPage post={post} />
      </div>
    </div>
  );
}
