// CustomPopup.js
import { useEffect, useRef, useContext } from "react";
import mapboxgl from "mapbox-gl";
import MapContext from "./MapContext";

const CustomPopup = ({ location, children }) => {
  const popupRef = useRef();
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return; // if map hasn't been initialized yet, wait for it

    const popup = new mapboxgl.Popup({ offset: 25, closeOnClick: true })
      .setLngLat([location.longitude, location.latitude])
      .setHTML(children)
      .addTo(map);

    // Save popup instance to ref
    popupRef.current = popup;

    // Cleanup on unmount
    return () => {
      popup.remove();
    };
  }, [map, location, children]);

  return null; // Popup component doesn't render anything itself
};

export default CustomPopup;
