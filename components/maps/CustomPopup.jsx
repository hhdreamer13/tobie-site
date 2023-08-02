import { useState } from "react";
import { Popup } from "react-map-gl";

const CustomPopup = ({ location, closePopup }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Popup
      latitude={location.latitude}
      longitude={location.longitude}
      onClose={closePopup}
      className="custom-popup"
      anchor="top"
    >
      <div className="p-2">
        <h2 className="text-xl font-semibold mb-2">{location.name}</h2>
        <div className="flex justify-around border-b-2 mb-2">
          <button
            onClick={() => setActiveTab("tab1")}
            className={`py-1 px-3 ${
              activeTab === "tab1"
                ? "font-semibold text-blue-600"
                : "text-gray-600"
            }`}
          >
            Details
          </button>
          <button
            onClick={() => setActiveTab("tab2")}
            className={`py-1 px-3 ${
              activeTab === "tab2"
                ? "font-semibold text-blue-600"
                : "text-gray-600"
            }`}
          >
            Directions
          </button>
        </div>

        {activeTab === "tab1" && (
          <div className="text-gray-800">
            <h3 className="text-lg mb-1">Location Details</h3>
            <p>Latitude: {location.latitude.toFixed(2)}</p>
            <p>Longitude: {location.longitude.toFixed(2)}</p>
          </div>
        )}

        {activeTab === "tab2" && (
          <div className="text-gray-800">
            <h3 className="text-lg mb-1">Driving Directions</h3>
            <p>
              Turn right at the first intersection, then continue straight for 2
              kilometers.
            </p>
          </div>
        )}
      </div>
    </Popup>
  );
};

export default CustomPopup;
