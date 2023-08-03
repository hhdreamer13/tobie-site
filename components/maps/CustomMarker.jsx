import { useEffect, useRef, useContext, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapContext from "./MapContext";
import { useTheme } from "next-themes";

const CustomMarker = ({
  location,
  children,
  isMapLoaded,
  isLocationSelected,
  onSelectLocation,
}) => {
  const markerRef = useRef();
  const map = useContext(MapContext);
  const { theme } = useTheme();
  const [popupOpen, setPopupOpen] = useState(false);

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
      setPopupOpen(!popupOpen);
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
        // If this marker is selected, open its popup
        markerRef.current.togglePopup();
      } else if (popupOpen) {
        // If this marker is not selected, but its popup is open, close it
        markerRef.current.togglePopup();
        setPopupOpen(false);
      }
    }
  }, [isLocationSelected, popupOpen]);

  return null;
};

export default CustomMarker;
