import Image from "next/image";
import Link from "next/link";

const MapMenu = ({ location, isLocationSelected, onSelectLocation }) => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li
        className={`mb-4 ${isLocationSelected ? "grayscale-0" : "grayscale"}`}
        onClick={(e) => {
          e.preventDefault();
          onSelectLocation(location);
        }}
      >
        <div className="flex flex-col w-full sm:w-60 2xl:w-10/12">
          <h3 className="text-main">{location.name}</h3>
          <Image
            src={location.imageSrc}
            alt={location.name}
            width={100}
            height={100}
            className={`w-full h-32 object-cover rounded-lg`}
          />
          <p className="text-sm mt-2">{location.description}</p>

          {/* Date */}
          <p className="text-xs text-slate-500 mt-2">{location.date}</p>

          {/* Tags */}
          <div className="flex flex-wrap mt-2">
            {location.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-slate-500 bg-rose-200 p-1 rounded mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={location.linkUrl}
            className="block mt-2 hover:underline border border-cyan-600 text-main font-bold py-2 px-4 rounded-t w-fit"
          >
            Inscription
          </Link>
          <hr />
        </div>
      </li>
    </>
  );
};

export default MapMenu;
