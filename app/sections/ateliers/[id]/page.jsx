import SectionHeader from "@/components/common/SectionHeader";
import AtelierFullPage from "@/components/ateliers/AtelierFullPage";
import ateliers from "@/utils/ateliers";

export default function SectionPage({ params }) {
  const { id } = params;

  const item = ateliers.find((atelier) => atelier.id === parseInt(id));

  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="ateliers" />
      </div>
      <div className="mt-40 mb-10 w-4/5"></div>
      <div className="flex justify-center items-start w-full h-full ">
        <AtelierFullPage item={item} />
      </div>
    </div>
  );
}
