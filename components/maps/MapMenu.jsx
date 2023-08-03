import Image from "next/image";

const MapMenu = ({ location, isLocationSelected, onSelectLocation }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div
        id={location.name}
        className={`mb-4 bg-main ${
          isLocationSelected ? "grayscale-0" : "grayscale"
        }`}
        onClick={() => onSelectLocation(location)}
      >
        <h3 className="text-main">{location.name}</h3>
        <Image
          src={location.imageUrl}
          alt={location.name}
          width={100}
          height={100}
          className={`w-full h-32 object-cover rounded-lg`}
        />
        <p className="text-sm mt-2">{location.description}</p>
        <button className="block mt-2 hover:underline border text-main font-bold py-2 px-4 rounded">
          Inscription
        </button>
        <hr />
      </div>
    </>
  );
};

export default MapMenu;
