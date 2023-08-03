"use client";
// MapComponent.js
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapContext from "./MapContext";
import CustomMarker from "./CustomMarker";
import { useTheme } from "next-themes";

import "mapbox-gl/dist/mapbox-gl.css";

const mapStyles = {
  day: "mapbox://styles/hhdreamer/clktutpw600v301phdu4n75uo",
  night: "mapbox://styles/hhdreamer/clkst1qrj00de01o89qihel0x",
  dayOld: "mapbox://styles/hhdreamer/clksqezx100ir01pe0obtccfg",
  default: "mapbox://styles/mapbox/streets-v12",
};

const MapComponent = ({ locations, selectedLocation, onSelectLocation }) => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [isMapLoaded, setMapLoaded] = useState(false);
  const [shouldRenderMarkers, setShouldRenderMarkers] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    if (!mapContainer.current) return; // if mapContainer is not defined, return
    const mapStyle = theme === "light" ? mapStyles.day : mapStyles.night;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    const initialMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [2.320041, 48.8588897],
      zoom: 10,
    });

    // set map right away
    setMap(initialMap);

    initialMap.on("load", () => {
      setMapLoaded(true); // the map is loaded

      // Add navigation control (the +/- zoom buttons)
      initialMap.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Add fullscreen control
      initialMap.addControl(new mapboxgl.FullscreenControl(), "top-left");

      setShouldRenderMarkers(true);
    });

    return () => {
      initialMap.remove();
      setShouldRenderMarkers(false);
    };
  }, [theme]);

  useEffect(() => {
    if (map && selectedLocation) {
      // Center the map on the selected location
      map.flyTo({
        center: [selectedLocation.longitude, selectedLocation.latitude],
        zoom: 12,
      });
    }
  }, [map, selectedLocation]);

  return (
    <MapContext.Provider value={map}>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }}>
        {isMapLoaded &&
          shouldRenderMarkers &&
          locations.map((location) => (
            <CustomMarker
              key={location.name}
              location={location}
              isMapLoaded={isMapLoaded}
              isLocationSelected={location === selectedLocation} // Pass whether this location is selected
              onSelectLocation={() => onSelectLocation(location)} // Pass the function to select this location
            >
              {`
        <style>
    
        .mapboxgl-popup-content {
          background-color: var(--bg-main);
          color: var(--color-main);
        }
        </style>
    <h3>${location.name}</h3>
    <p>${location.description}</p>
    <a href="${location.linkUrl}">En savoir plus</a>
  `}
            </CustomMarker>
          ))}
      </div>
    </MapContext.Provider>
  );
};

export default MapComponent;
