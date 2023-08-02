import { useEffect, useRef, useContext } from "react";
import mapboxgl from "mapbox-gl";
import MapContext from "./MapContext";
import { useTheme } from "next-themes";

const CustomMarker = ({ location, children, isMapLoaded }) => {
  const markerRef = useRef();
  const map = useContext(MapContext);
  const { theme } = useTheme();

  useEffect(() => {
    if (!isMapLoaded) return; // <-- Check isMapLoaded before adding the marker

    const markerIcon =
      theme === "light" ? "/day-marker.webp" : "/night-marker.webp";

    const popup = new mapboxgl.Popup({
      offset: 25,
      closeOnClick: true,
    }).setHTML(children);

    const el = document.createElement("div");
    el.style.backgroundImage = `url(${markerIcon})`;
    el.style.backgroundSize = "contain";
    el.style.width = "50px";
    el.style.height = "50px";
    el.style.backgroundRepeat = "no-repeat";
    el.style.opacity = "1";

    const marker = new mapboxgl.Marker(el)
      .setLngLat([location.longitude, location.latitude])
      .setPopup(popup)
      .addTo(map);

    markerRef.current = marker;

    return () => {
      marker.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, location, children, isMapLoaded]);

  return null;
};

export default CustomMarker;
