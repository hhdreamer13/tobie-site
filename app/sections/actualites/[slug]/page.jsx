import { sanityFetch } from "@/sanity/sanityFetch";
import { postPathsQuery, postBySlug } from "@/sanity/sanityQueries";
import { client } from "@/sanity/clientConfig";
import NewsFullPage from "@/components/news/NewsFullPage";
import SectionHeader from "@/components/common/SectionHeader";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);

  return posts;
}

export default async function NewsPage({ params }) {
  const post = await sanityFetch({ query: postBySlug, params });

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="actualites" />
      </div>
      <div className="mt-40 mb-10 w-4/5"></div>
      <div className="flex justify-center items-start w-full h-full ">
        <NewsFullPage post={post} />
      </div>
    </div>
  );
}
