"use client";

import { useState } from "react";
import MapComponent from "./MapComponent";
import MapMenu from "./MapMenu";

const MapDisplay = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    const element = document.getElementById(location.name);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-start w-full h-full">
      <div className="w-4/5 sm:w-1/5 mb-20 sm:mb-0 h-[500px] mx-auto sm:mx-0 sm:rounded-s-2xl rounded-b-2xl border border-slate-600 shadow-lg p-4 overflow-y-scroll">
        {locations.map((location, index) => (
          <MapMenu
            key={index}
            location={location}
            isLocationSelected={location === selectedLocation} // Pass whether this location is selected
            selectedLocation={selectedLocation}
            onSelectLocation={handleSelectLocation}
          />
        ))}
      </div>
      <div className="w-4/5 sm:w-3/5 h-[500px] mx-auto sm:mx-0 sm:rounded-r-2xl rounded-t-2xl overflow-hidden border border-slate-600 shadow-xl">
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
