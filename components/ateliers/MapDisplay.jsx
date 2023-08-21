"use client";

import { useState } from "react";
import MapComponent from "./MapComponent";
import AtelierCard from "./AtelierCard";

const MapDisplay = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative flex flex-col justify-center items-start w-full h-full mb-20">
      <div className="relative w-full h-full mb-20 ">
        <div className="relative w-10/12 sm:w-3/4 h-[500px] md:h-[550px] xl:h-[600px] mx-auto rounded-xl overflow-hidden shadow-xl shadow-cyan-500/10">
          <MapComponent
            locations={locations}
            selectedLocation={selectedLocation}
            onSelectLocation={handleSelectLocation}
          />
        </div>
      </div>
      <div className="w-4/5 h-fit mx-auto p-4 sm:p-10">
        <ul className="flex flex-col gap-5">
          {locations.map((location) => (
            <AtelierCard
              key={location.id}
              location={location}
              isLocationSelected={location === selectedLocation}
              onSelectLocation={handleSelectLocation}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapDisplay;
