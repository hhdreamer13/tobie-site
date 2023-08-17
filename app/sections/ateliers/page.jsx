/* eslint-disable react/no-unescaped-entities */
import SectionHeader from "@/components/common/SectionHeader";
import MapDisplay from "@/components/ateliers/MapDisplay";
import ateliers from "@/utils/ateliers";

export default function SectionPage() {
  return (
    <div className="w-full min-h-screen pb-20 pt-10 flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader sectionName="ateliers" />
      </div>
      <div className="mt-40 mb-10 w-4/5">
        <h2 className="font-literata font-semibold text-xl">
          Partez à la Rencontre des Ateliers de Tobie !
        </h2>
        <p className="mt-6 font- text-justify">
          Avec notre carte interactive, les ateliers enchantés de Tobie sont à
          portée de clic. Explorez, choisissez et inscrivez-vous ! Chaque
          atelier est une expérience unique, une chance pour les enfants de
          s'émerveiller et d'apprendre. Cliquez sur un marqueur pour obtenir
          tous les détails et vous inscrire à l'aventure.
        </p>
      </div>
      <div className="flex justify-center items-start w-full h-full ">
        <MapDisplay locations={ateliers} />
      </div>
    </div>
  );
}
