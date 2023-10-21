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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getStatusColor = (status) => {
  switch (status) {
    case "À venir":
      return "background-color: #86efac"; // bg-green-300
    case "Complet":
      return "background-color: #fde047"; // bg-yellow-300
    case "Annulé":
      return "background-color: #fda4af"; // bg-red-300
    case "Reporté":
      return "background-color: #fdba74"; // bg-orange-300
    case "Aujourd'hui":
      return "background-color: #67e8f9"; // bg-cyan-300
    case "Terminé":
      return "background-color: #d1d5db"; // bg-gray-300
    default:
      return "background-color: #a5b4fc"; // bg-indigo-300
  }
};

// Status text if the date is passed and and Date text if is not defined
const getStatusText = (workshopDate, status) => {
  if (!workshopDate) {
    return { date: "Date à annoncer", status: "À confirmer" };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const workshopDateObj = new Date(workshopDate);
  workshopDateObj.setHours(0, 0, 0, 0);

  if (workshopDateObj.getTime() === today.getTime()) {
    return { date: formatDate(workshopDate), status: "Aujourd'hui" };
  }

  if (workshopDateObj < today) {
    return { date: formatDate(workshopDate), status: "Terminé" };
  }

  return { date: formatDate(workshopDate), status };
};

const buildCustomMarkerContent = (location) => {
  const { date, status } = getStatusText(
    location.workshopDate,
    location.status,
  );
  const statusColor = getStatusColor(status);

  return `
    <div>
      <h3>${location?.title}</h3>
      <p class='marker-tag' style="${statusColor}">${status}</p>
      <p><strong>Lieu :</strong> ${location.place || "Lieu à confirmer"}</p>
      <p><strong>Date :</strong> ${date}</p>
      <a href='/sections/ateliers/${location?.slug?.current}'>Inscription</a>
    </div>
  `;
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
            {buildCustomMarkerContent(location)}
          </CustomMarker>
        ))}
    </div>
  );
};

export default MapComponent;
