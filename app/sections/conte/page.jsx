import TobieConte from "@/components/conte/TobieConte";
import { sanityFetch } from "@/sanity/sanityFetch";
import { allStoriesQuery } from "@/sanity/sanityQueries";

export default async function SectionPage() {
  const verseImages = await sanityFetch({
    query: allStoriesQuery,
    tags: ["storyVerse"],
  });

  return (
    <>
      <div className=" flex-auto">
        <TobieConte verseImages={verseImages} />
      </div>
    </>
  );
}
