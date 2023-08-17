/* eslint-disable react/no-unescaped-entities */
import SectionHeader from "@/components/common/SectionHeader";
import NewsDisplay from "@/components/news/NewsDisplay";
import news from "@/utils/news";

export default function SectionPage() {
  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="actualites" />
      </div>
      <div className="mt-40 mb-10 w-4/5">
        <h2 className="font-literata font-semibold text-xl">
          Les Aventures Récentes de Tobie et ses Amis
        </h2>
        <p className="mt-6 font- text-justify">
          {" "}
          Les dernières nouvelles et découvrez les événements à venir de Tobie
          et ses amis ! De nouveaux épisodes aux ateliers créatifs, restez à
          jour avec tout ce qui concerne Tobie et ses amis.
        </p>
      </div>
      <div className="flex justify-center items-start w-full h-full ">
        <NewsDisplay news={news} />
      </div>
    </div>
  );
}
