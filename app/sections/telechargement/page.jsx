/* eslint-disable react/no-unescaped-entities */
import SectionHeader from "@/components/common/SectionHeader";

export default function SectionPage() {
  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="telechargement" />
      </div>
      <div className="mt-40 mb-10 w-4/5">
        <h2 className="font-nunito font-semibold text-xl">
          Bienvenue à la fichiertèque !
        </h2>
        <p className="mt-2 font-nunito">C'est la page de téléchargement</p>
      </div>
      <div className="flex justify-center items-start w-full h-full ">
        {/* <NewsDisplay news={news} /> */}
      </div>
    </div>
  );
}
