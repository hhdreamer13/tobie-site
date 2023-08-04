import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useTheme } from "next-themes";

const CustomMarker = ({
  children,
  location,
  map,
  isMapLoaded,
  isLocationSelected,
  onSelectLocation,
}) => {
  const markerRef = useRef();
  const { theme } = useTheme();

  useEffect(() => {
    if (!isMapLoaded) return; // <-- Check isMapLoaded before adding the marker

    const markerIcon =
      theme === "dark" ? "/elisha-marker.webp" : "/tobie-marker.webp";

    const popup = new mapboxgl.Popup({
      offset: 25,
      closeOnClick: true,
    }).setHTML(children);

    const el = document.createElement("div");
    el.style.backgroundImage = `url(${markerIcon})`;
    el.style.backgroundSize = "contain";
    el.style.width = "70px";
    el.style.height = "70px";
    el.style.backgroundRepeat = "no-repeat";
    el.style.opacity = "1";

    const marker = new mapboxgl.Marker(el)
      .setLngLat([location.longitude, location.latitude])
      .setPopup(popup)
      .addTo(map);

    if (isLocationSelected) {
      // If this marker is selected, open its popup
      marker.togglePopup();
    }

    el.addEventListener("click", function () {
      if (onSelectLocation) onSelectLocation();
    });

    markerRef.current = marker;

    return () => {
      marker.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, children, isMapLoaded, isLocationSelected]);

  useEffect(() => {
    if (markerRef.current) {
      if (isLocationSelected) {
        markerRef.current.getPopup().addTo(map);
      } else {
        markerRef.current.getPopup().remove();
      }
    }
  }, [isLocationSelected, map]);

  return null;
};

export default CustomMarker;
