import SectionMenu from "@/components/section-menu/SectionMenu";

export default function Home() {
  return (
    <div className="w-full min-h-screen justify-center items-center">
      <SectionMenu />

      {/* <div className="absolute flex-col mx-auto top-0 left-0 h-32 w-full">
        <div className="p-5 w-full text-center flex items-center justify-center text-slate-50 h-32">
          <h1 className="text-2xl sm:text-4xl">Les Amis de Tobie</h1>
        </div>
      </div> */}
    </div>
  );
}
