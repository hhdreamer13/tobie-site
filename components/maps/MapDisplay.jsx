"use client";

import { useState } from "react";
import MapComponent from "./MapComponent";
import LocationCard from "./LocationCard";
import useDeviceType from "@/hooks/useDeviceType";
import mapFrameMobile from "../../public/photos/map-frame-mobile2.webp";
import mapFrameDesktop from "../../public/photos/map-frame-desktop.webp";

const MapDisplay = ({ locations }) => {
  const isDesktop = useDeviceType();

  const mapFrame = isDesktop ? mapFrameDesktop : mapFrameMobile;

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative flex flex-col justify-center items-start w-full h-full mb-20">
      <div className="relative w-full h-full mb-20 drop-shadow-[-1px_0px_0.25px_#333] dark:drop-shadow-[-3px_0px_3px_#042f2e]">
        <div
          className="relative w-11/12 sm:w-10/12 h-[500px] md:h-[550px] lg:h-[600px] xl:h-[700px] mx-auto"
          style={{
            backgroundImage: `url(${mapFrame.src})`,
            maskImage: `url(${mapFrame.src})`,
            WebkitMaskImage: `url(${mapFrame.src})`,
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        >
          <MapComponent
            locations={locations}
            selectedLocation={selectedLocation}
            onSelectLocation={handleSelectLocation}
          />
        </div>
      </div>
      <div className="w-4/5 h-fit mx-auto shadow-lg p-4 sm:p-10 overflow-y-scroll">
        <ul className="flex flex-col gap-5">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              isLocationSelected={location === selectedLocation}
              selectedLocation={selectedLocation}
              onSelectLocation={handleSelectLocation}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapDisplay;
