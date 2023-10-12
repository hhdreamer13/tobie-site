import { pageTextsQuery, allDownloadPostsQuery } from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import DownloadCarousel from "@/components/downloads/DownloadCarousel";

export default async function SouvenirsPage() {
  const pageText = await sanityFetch({
    query: pageTextsQuery,
    params: {
      sectionUrl: "/sections/souvenirs",
    },
    tags: ["pageTexts"],
  });

  const downloads = await sanityFetch({ query: allDownloadPostsQuery });

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
      <DownloadCarousel downloads={downloads} text={pageText?.heading} />
    </div>
  );
}
