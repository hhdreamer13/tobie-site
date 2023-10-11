
import { pageTextsQuery } from "@/sanity/sanityQueries";
import { sanityFetch } from "@/sanity/sanityFetch";
import DownloadCarousel from "@/components/downloads/DownloadCarousel";

export default async function SouvenirsPage() {
  const pageText = await sanityFetch({
    query: pageTextsQuery,
    params: {
      sectionUrl: "/sections/souvenirs",
    },
  });

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
      <DownloadCarousel text={pageText?.heading} />
    </div>
  );
}
