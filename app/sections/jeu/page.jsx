// import SectionHeader from "@/components/common/SectionHeader";
import Friends from "../../../components/friends/Friends";

export default function SectionPage() {
  return (
    <>
      <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
        {/* <div className="z-10">
          <SectionHeader sectionName="actualite" />
        </div>
        <div className="mt-40 mb-10 w-4/5">
          <h2 className="font-nunito font-semibold text-xl">
            Bienvenue sur la page d'actualité !
          </h2>
          <p className="mt-2 font-nunito">C'est la page d'actualité</p>
        </div> */}
        <div className="flex justify-center items-start w-full h-full ">
          <Friends />
        </div>
      </div>
    </>
  );
}
