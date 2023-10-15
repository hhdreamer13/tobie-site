import SectionHeader from "@/components/common/SectionHeader";
import AtelierFullPage from "@/components/ateliers/AtelierFullPage";
import {
  atelierPostBySlugQuery,
  sectionBySlugQuery,
} from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";

export default async function SectionPage({ params }) {
  const post = await sanityFetch({
    query: atelierPostBySlugQuery,
    params,
    tags: ["atelierPost"],
  });

  const section = await sanityFetch({
    query: sectionBySlugQuery,
    params: {
      sectionUrl: "/sections/ateliers", // we're using a query for all pages with a dynamic param
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
        <AtelierFullPage post={post} />
      </div>
    </div>
  );
}
