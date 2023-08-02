"use client";
// MapComponent.js
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapContext from "./MapContext";
import CustomMarker from "./CustomMarkerGL";
import { useTheme } from "next-themes";

import "mapbox-gl/dist/mapbox-gl.css";

const mapStyles = {
  day: "mapbox://styles/hhdreamer/clksqezx100ir01pe0obtccfg",
  night: "mapbox://styles/hhdreamer/clkst1qrj00de01o89qihel0x",
  default: "mapbox://styles/mapbox/streets-v12",
};

// Hardcoded data
const locations = [
  {
    name: "Location 1",
    latitude: 48.8516666,
    longitude: 2.3132107,
    description: "This is a description of location 1.",
    imageUrl: "/photos/01.webp",
    linkUrl: "https://example.com/location1",
  },
  {
    name: "Location 2",
    latitude: 48.8628631,
    longitude: 2.4047319,
    description: "This is a description of location 2.",
    imageUrl: "/photos/02.webp",
    linkUrl: "https://example.com/location2",
  },
  // more locations...
];
export default function MapComponent() {
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
    <img src="${location.imageUrl}" alt="${location.name}" />
    <a href="${location.linkUrl}">Learn more</a>
  `}
            </CustomMarker>
          ))}
      </div>
    </MapContext.Provider>
  );
}
