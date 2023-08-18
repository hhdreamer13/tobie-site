import news from "@/utils/news";
import NewsFullPage from "@/components/news/NewsFullPage";
import SectionHeader from "@/components/common/SectionHeader";

export default function NewsPage({ params }) {
  const { id } = params;

  const item = news.find((n) => n.id === parseInt(id));

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="actualites" />
      </div>
      <div className="mt-40 mb-10 w-4/5"></div>
      <div className="flex justify-center items-start w-full h-full ">
        <NewsFullPage item={item} />
      </div>
    </div>
  );
}
