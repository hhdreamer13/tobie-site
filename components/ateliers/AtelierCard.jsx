import Image from "next/image";
import Link from "next/link";
import MarkerIcon from "../common/icons/MarkerIcon";
import { client } from "@/sanity/clientConfig";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

// format date to more friendly format
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Status color based on the value
const getStatusColor = (status) => {
  switch (status) {
    case "À venir":
      return "bg-green-300";
    case "Complet":
      return "bg-yellow-300";
    case "Annulé":
      return "bg-red-300";
    case "Reporté":
      return "bg-orange-300";
    case "Aujourd'hui":
      return "bg-cyan-300";
    case "Terminé":
      return "bg-gray-300";
    default:
      return "bg-indigo-300";
  }
};

// Status text if the date is passed and and Date text if is not defined
const getStatusText = (workshopDate, status) => {
  if (!workshopDate) {
    return { date: "Date à annoncer", status: "À confirmer" };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const workshopDateObj = new Date(workshopDate);
  workshopDateObj.setHours(0, 0, 0, 0);

  if (workshopDateObj.getTime() === today.getTime() && status === "À venir") {
    return { date: formatDate(workshopDate), status: "Aujourd'hui" };
  }

  if (workshopDateObj < today) {
    return { date: formatDate(workshopDate), status: "Terminé" };
  }

  return { date: formatDate(workshopDate), status };
};

const emptyComponent = () => null;

const cardComponents = {
  types: {
    image: emptyComponent,
  },
};

const AtelierCard = ({ location, isLocationSelected, onSelectLocation }) => {
  const builder = imageUrlBuilder(client);

  const { date, status } = getStatusText(
    location.workshopDate,
    location.status,
  );

  return (
    <li
      className={`relative flex flex-col sm:flex-row h-auto mb-8 pb-8 transform transition-transform duration-300 ease-in-out ${
        status === "Terminé" ? "grayscale" : "grayscale-0"
      }`}
    >
      {location?.imageSrc ? (
        <div className="relative flex-none sm:w-1/3 z-0 sm:z-10">
          <Image
            className="absolute rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg shadow-lg w-full h-52 object-cover"
            src={builder.image(location.imageSrc).width(600).height(400).url()}
            alt={location?.imageSrc?.alt || location?.title}
            width={600}
            height={400}
          />
        </div>
      ) : null}
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
                isLocationSelected ? "text-emerald-500" : "text-main"
              }`}
            />
          </button>
          <Link
            href={`/sections/ateliers/${location?.slug?.current}`}
            className="hover:opacity-70 duration-300"
          >
            <h3 className="text-xl font-semibold w-11/12">{location?.title}</h3>
          </Link>
          <div className="mb-2 flex flex-col gap-1 sm:block">
            <span className="text-slate-500 font-caveat">
              {formatDate(location?.date)}
            </span>
            {location?.tags && (
              <div className="flex flex-wrap gap-2">
                {location.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-main font-caveat bg-gray-100 dark:bg-gray-900 border border-gray-400 dark:border-gray-400 rounded-full px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="mb-1 text-main text-sm">
            <p className="mb-1">
              <span className="font-bold">Lieu :</span>{" "}
              {location.place || "Lieu à confirmer"}
            </p>
            <p>
              <span className="font-bold">Date :</span> {date}
              <span
                className={`ml-4 text-black font-caveat rounded-sm -rotate-6 px-1.5 py-0.5 w-fit mb-4 inline-block ${getStatusColor(
                  status,
                )}`}
              >
                {status}
              </span>
            </p>
            <div className="text-justify line-clamp-2">
              {location?.body ? (
                <PortableText
                  value={location.body}
                  components={cardComponents}
                />
              ) : null}
            </div>
          </div>
          <Link
            href={`/sections/ateliers/${location?.slug?.current}`}
            className="text-sky-500 font-caveat hover:text-sky-600 transition-colors duration-200 ease-in-out text-lg"
          >
            <span className="relative no-underline before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded before:bg-sky-500 before:origin-right before:transition-transform before:duration-[0.3s] before:ease-[ease-in-out] before:scale-x-0 before:left-0 before:bottom-0 hover:before:origin-left hover:before:scale-x-100">
              Inscription
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default AtelierCard;
