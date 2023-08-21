import Image from "next/image";
import Link from "next/link";
import MarkerIcon from "../common/MarkerIcon";

const AtelierCard = ({ location, isLocationSelected, onSelectLocation }) => {
  return (
    <li
      className={`relative flex flex-col sm:flex-row h-auto mb-8 pb-8 transform transition-transform duration-300 ease-in-out`}
    >
      <div className={`relative flex-none sm:w-1/3 z-0 sm:z-10`}>
        <Image
          className="absolute rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg shadow-lg w-full h-52 object-cover"
          src={location.imageSrc}
          alt={location.title}
          width={300}
          height={400}
        />
      </div>
      <div className="group relative dark:bg-opacity-75 rounded-lg rounded-tl-lg sm:rounded-tl-none shadow-lg flex-auto sm:w-2/3 mt-16 sm:mt-8">
        <div
          className={`absolute -inset-1 bg-gradient-to-br from-slate-50 dark:from-slate-950 to-teal-100 dark:to-teal-800 rounded-lg blur opacity-25 group-hover:opacity-80 transition duration-1000 group-hover:duration-200`}
        ></div>
        <div className="relative flex flex-col gap-3 w-full h-full p-4 bg-white/75 dark:bg-slate-950/80 rounded-lg rounded-tl-lg sm:rounded-tl-none">
          <button
            className="absolute top-0 right-0 m-2"
            onClick={(e) => {
              e.preventDefault();
              onSelectLocation(location);
            }}
          >
            <MarkerIcon
              className={`w-6 h-6 sm:w-7 sm:h-7 hover:scale-105 ${
                isLocationSelected ? "text-rose-400 dark:text-cyan-600" : ""
              }`}
            />
          </button>
          <h3 className="text-xl font-semibold w-11/12">{location.name}</h3>
          <div className="mb-2 flex flex-col gap-1 sm:block">
            <span className="text-slate-500 font-caveat">{location.date}</span>
            <div className="block sm:inline-block">
              {location.tags.map((tag, index) => (
                <span
                  key={index}
                  className="ml-2 text-xs text-white font-caveat bg-green-500 rounded-full px-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="text-main text-sm text-justify line-clamp-3">
              {location.description}
            </p>
          </div>
          <Link
            href={`/sections${location.linkUrl}`}
            className="text-sky-500 font-caveat hover:text-sky-600 transition-colors duration-200 ease-in-out"
          >
            <span className="relative no-underline before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded before:bg-sky-500 before:origin-right before:transition-transform before:duration-[0.3s] before:ease-[ease-in-out] before:scale-x-0 before:left-0 before:bottom-0 hover:before:origin-left hover:before:scale-x-100">
              En savoir plus
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default AtelierCard;
