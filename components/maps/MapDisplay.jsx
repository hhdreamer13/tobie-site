"use client";

import { useState } from "react";
import MapComponent from "./MapComponent";
import useDeviceType from "@/hooks/useDeviceType";
import mapFrameMobile from "../../public/photos/map-frame-mobile.webp";
import mapFrameDesktop from "../../public/photos/map-frame-desktop.webp";

const MapDisplay = ({ locations }) => {
  const isDesktop = useDeviceType();

  const mapFrame = isDesktop ? mapFrameDesktop : mapFrameMobile;

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative w-full h-full mb-20 drop-shadow-[-5px_0px_5px_#333] dark:drop-shadow-[-3px_0px_5px_#082f49]">
      <div
        className="relative w-11/12 sm:w-10/12 h-[500px] mx-auto"
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
  );
};

export default MapDisplay;
