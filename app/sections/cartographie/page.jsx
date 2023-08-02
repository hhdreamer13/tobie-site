import SectionHeader from "@/components/common/SectionHeader";
// import MapComponent from "@/components/maps/MapComponent";
import MapComponent from "@/components/maps/MapComponentGL";

export default function SectionPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader />
      </div>
      <div className="flex justify-center items-center w-full h-full gap-8">
        <div></div>
        <div className="w-4/5 sm:w-3/5 h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
