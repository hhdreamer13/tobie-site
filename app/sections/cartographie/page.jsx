import SectionHeader from "@/components/common/SectionHeader";
// import MapComponent from "@/components/maps/MapComponent";

export default function SectionPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader />
      </div>
      <div className="w-96 h-96">{/* <MapComponent /> */}</div>
    </div>
  );
}
