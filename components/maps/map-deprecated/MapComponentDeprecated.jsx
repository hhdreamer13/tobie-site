"use client";

import { useState } from "react";
import Map, {
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import CustomMarker from "./CustomMarker";
import CustomPopup from "./CustomPopup";

const locations = [
  // Hardcoded data
  { name: "Location 1", latitude: 46.603354, longitude: 1.888334 },
  { name: "Location 2", latitude: 47.603354, longitude: 2.888334 },
  // more locations
];

export default function MapComponent() {
  console.log("rendering MapComponent");

  const [selectedMarker, setSelectedMarker] = useState(null);

  console.log(selectedMarker);

  const [viewState, setViewState] = useState({
    longitude: 2.401472330093384,
    latitude: 48.8682746887207,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  const openPopup = (index) => {
    setSelectedMarker(index);
  };

  const closePopup = () => {
    setSelectedMarker(null);
  };

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      // mapStyle="mapbox://styles/hhdreamer/clkqtn5es006m01o27su6b0wq"
      // style={{ width: "100%", height: "100%" }}
    >
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-right" />
      <ScaleControl />

      {locations.map((location, index) => (
        <CustomMarker
          key={`marker-${index}`}
          index={index}
          location={location}
          openPopup={openPopup}
        />
      ))}
      {selectedMarker !== null && (
        <CustomPopup
          selectedIndex={selectedMarker}
          location={locations[selectedMarker]}
          closePopup={closePopup}
        />
      )}
    </Map>
  );
}
