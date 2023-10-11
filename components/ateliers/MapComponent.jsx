"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import CustomMarker from "./CustomMarker";
import { useTheme } from "next-themes";

import "mapbox-gl/dist/mapbox-gl.css";
import "@/styles/map.css";

const mapStyles = {
  day: "mapbox://styles/hhdreamer/clktutpw600v301phdu4n75uo",
  night: "mapbox://styles/hhdreamer/clku183t7000001p8dfio6hq7",
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
        zoom: 14,
      });
    }
  }, [map, selectedLocation]);

  const handleSelectLocation = useCallback(
    (location) => {
      onSelectLocation(location);
    },
    [onSelectLocation],
  );

  const extractText = (blocks) => {
    return blocks
      .map((block) => block.children.map((child) => child.text).join(""))
      .join("\n");
  };

  return (
    <div ref={mapContainer} className="w-full h-full">
      {isMapLoaded &&
        shouldRenderMarkers &&
        locations.map((location) => (
          <CustomMarker
            key={location._id}
            map={map}
            location={location}
            isMapLoaded={isMapLoaded}
            isLocationSelected={location === selectedLocation}
            onSelectLocation={() => handleSelectLocation(location)}
          >
            {`
    <h3>${location?.title}</h3>
    <p>${location?.body ? extractText(location.body) : null}</p>
    <a href="${location?.slug?.current}">En savoir plus</a>
  `}
          </CustomMarker>
        ))}
    </div>
  );
};

export default MapComponent;
