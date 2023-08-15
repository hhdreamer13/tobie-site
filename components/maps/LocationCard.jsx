import Image from "next/image";
import Link from "next/link";
import MaximizeIcon from "../common/MaximizeIcon";

const LocationCard = ({ location, isLocationSelected, onSelectLocation }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      className={`relative flex flex-col sm:flex-row h-64 sm:h-52 mb-8 pb-4 transform transition-transform duration-300 ease-in-out ${
        isLocationSelected ? "border border-teal-950 rounded-lg" : ""
      }`}
      onClick={(e) => {
        e.preventDefault();
        onSelectLocation(location);
      }}
    >
      <div className="relative flex-none sm:w-1/3 z-0 sm:z-10">
        <Image
          className="absolute rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg shadow-lg w-full h-52 object-cover hover:saturate-150 transition-opacity duration-200 ease-in-out"
          src={location.imageSrc}
          alt={location.title}
          width={300}
          height={400}
        />
      </div>
      <div className="group relative dark:bg-opacity-75 p-4 rounded-lg rounded-tl-lg sm:rounded-tl-none shadow-lg flex-auto sm:w-2/3 h-52 mt-16 sm:mt-8">
        <div className="absolute -inset-1 bg-gradient-to-br from-slate-50 dark:from-slate-950 to-teal-100 dark:to-teal-800 rounded-lg blur opacity-25 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
        <div className="absolute top-0 left-0 flex-auto w-full h-full bg-white dark:bg-slate-950 bg-opacity-75 dark:bg-opacity-80 p-4 rounded-lg rounded-tl-lg sm:rounded-tl-none">
          <Link href={location.linkUrl} className="absolute top-0 right-0 m-2">
            <MaximizeIcon />
          </Link>
          <h3 className="text-2xl font-bold font-nunito mb-1">
            {location.title}
          </h3>
          <div className="mb-2 flex flex-col gap-1 sm:block">
            <span className="text-slate-500">{location.date}</span>
            <div className="block sm:inline-block">
              {location.tags.map((tag, index) => (
                <span
                  key={index}
                  className="ml-2 text-xs text-white bg-green-500 rounded-full px-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-main text-sm text-justify line-clamp-1 sm:line-clamp-3 font-nunito">
              {location.description}
            </p>
          </div>
          <a
            href={location.linkUrl}
            className="text-sky-500 hover:underline hover:text-sky-600 transition-colors duration-200 ease-in-out"
          >
            Lire la suite
          </a>
        </div>
      </div>
    </li>
  );
};

export default LocationCard;
