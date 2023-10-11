import SectionMenu from "@/components/section-menu/SectionMenu";
import { sanityFetch } from "@/sanity/sanityFetch";
import { sectionsQuery } from "@/sanity/sanityQueries";

export default async function Home() {
  const sections = await sanityFetch({
    query: sectionsQuery,
    tags: ["section"],
  });

  return (
    <div className="w-full min-h-screen justify-center items-center">
      <SectionMenu sections={sections} />
    </div>
  );
}
