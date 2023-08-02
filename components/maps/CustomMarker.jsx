import Image from "next/image";
import { Marker } from "react-map-gl";

const CustomMarker = ({ index, location, openPopup }) => (
  <Marker latitude={location.latitude} longitude={location.longitude}>
    <button
      className=""
      onClick={(e) => {
        e.stopPropagation();
        openPopup(index);
      }}
    >
      <Image
        className="w-10 h-10"
        src="/assets/marker2.svg"
        alt="marker"
        width={50}
        height={50}
      />
    </button>
  </Marker>
);

export default CustomMarker;
