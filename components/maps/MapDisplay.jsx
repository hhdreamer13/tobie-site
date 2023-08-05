"use client";

import { useState } from "react";
import MapComponent from "./MapComponent";
import MapMenu from "./MapMenu";

const MapDisplay = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative flex flex-col-reverse sm:flex-row justify-center items-start w-full h-full mb-20">
      <div className="absolute w-4/5 h-full mx-auto -inset-1 bg-gradient-to-t sm:bg-gradient-to-r from-slate-50 dark:from-slate-950 to-teal-700 dark:to-cyan-400 rounded-lg blur opacity-30"></div>
      <div className="w-4/5 sm:w-1/5 h-fit sm:h-[500px] mx-auto sm:mx-0 rounded-br-2xl sm:rounded-br-none rounded-bl-2xl rounded-tl-none sm:rounded-tl-2xl border-2 border-slate-300 dark:border-cyan-950 shadow-lg p-4 overflow-y-scroll">
        <ul className="flex flex-row sm:flex-col gap-5">
          {locations.map((location) => (
            <MapMenu
              key={location.id}
              location={location}
              isLocationSelected={location === selectedLocation} // Pass whether this location is selected
              selectedLocation={selectedLocation}
              onSelectLocation={handleSelectLocation}
            />
          ))}
        </ul>
      </div>
      <div className="w-4/5 sm:w-3/5 h-[400px] sm:h-[500px] mx-auto sm:mx-0 rounded-br-none sm:rounded-br-2xl rounded-tr-2xl rounded-tl-2xl sm:rounded-tl-none overflow-hidden shadow-none sm:shadow-xl">
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
