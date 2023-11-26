"use client";

import { useState } from "react";
import MapComponent from "./MapComponent";
import AtelierCard from "./AtelierCard";

const MapDisplay = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = locations.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative flex flex-col justify-center items-start w-full h-full mb-20">
      <div className="relative w-full h-full mb-20 ">
        <div className="relative w-10/12 sm:w-3/4 xl:w-2/3 h-[500px] md:h-[550px] xl:h-[600px] mx-auto rounded-xl overflow-hidden shadow-xl shadow-cyan-500/10">
          <MapComponent
            locations={currentItems}
            selectedLocation={selectedLocation}
            onSelectLocation={handleSelectLocation}
          />
        </div>
      </div>
      <div className="w-4/5 sm:w-3/4 xl:w-2/3 h-fit mx-auto p-4 sm:p-10">
        <ul className="flex flex-col gap-5">
          {currentItems.map((location) => (
            <AtelierCard
              key={location._id}
              location={location}
              isLocationSelected={location === selectedLocation}
              onSelectLocation={handleSelectLocation}
            />
          ))}
        </ul>
      </div>
      <div className="flex gap-3 justify-center items-center flex-wrap w-2/3 mx-auto">
        {[...Array(Math.ceil(locations.length / itemsPerPage)).keys()].map(
          (num) => (
            <button
              key={num}
              className={`w-10 py-2 rounded-lg transition-all duration-75 border ${
                currentPage === num + 1
                  ? "font-bold border-emerald-400 border-2"
                  : "font-light"
              }`}
              onClick={() => paginate(num + 1)}
            >
              {num + 1}
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default MapDisplay;
