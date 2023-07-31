"use client";

import Map from "react-map-gl";

export default function MapComponent() {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: 1.888334,
        latitude: 46.603354,
        zoom: 5,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{ width: "100%", height: "100%" }}
    ></Map>
  );
}
