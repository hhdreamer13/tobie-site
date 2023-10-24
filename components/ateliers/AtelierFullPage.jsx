"use client";

import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import Link from "next/link";
import InscriptionForm from "./InscriptionForm";
import BackIcon from "../common/icons/BackIcon";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";
import PortableTextRenderer from "../common/PortableTextRenderer";

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

const AtelierFullPage = ({ post }) => {
  const builder = imageUrlBuilder(client);

  const { date, status } = getStatusText(post.workshopDate, post.status);

  return (
    <div className="relative flex flex-col justify-start w-full h-full min-h-screen bg-main items-center px-8 pb-12">
      {/* Back */}
      <Link
        href={"/sections/ateliers"}
        className="absolute lg:sticky lg:top-32 top-0 self-start left-0 sm:left-6 md:left-12 lg:left-16 xl:left-24 2xl:left-48 -mt-16 ml-2 "
      >
        <span>
          <BackIcon className="w-14 h-14 p-2 border border-gray-300 dark:border-gray-500 rounded-full -rotate-90 transition-all duration-300 hover:scale-105 hover:border-slate-950 dark:hover:border-slate-50 drop-shadow-md" />
        </span>
      </Link>

      {/* Title */}
      <h3 className="text-2xl md:text-4xl font-semibold mb-5 sm:mb-10 text-center">
        {post.title}
      </h3>

      {/* Principal Image */}
      {post?.imageSrc ? (
        <div className="max-h-full w-full md:max-w-3xl mb-8 rounded-lg shadow-xl overflow-hidden">
          <Image
            src={builder.image(post?.imageSrc).url()}
            alt={post?.imageSrc?.alt || post?.title}
            height={400}
            width={600}
            className="object-cover w-full"
            placeholder="blur"
            blurDataURL={getShimmerPlaceholder(600, 400)}
          />
        </div>
      ) : null}

      {/* Content */}

      <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
        <span className="text-slate-500 font-caveat">
          {formatDate(post.date)}
        </span>
        {post?.tags && (
          <div>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="ml-2 text-sm text-main font-caveat bg-slate-100 dark:bg-slate-900 border border-slate-400 dark:border-slate-400 rounded-full px-1.5 py-0.5"
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
          {post.place || "Lieu à confirmer"}
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
      </div>

      <div className="prose dark:prose-invert">
        {post?.body ? <PortableTextRenderer content={post.body} /> : null}
      </div>

      <div className="mt-20 w-full flex justify-center items-center">
        <InscriptionForm post={post} />
      </div>
    </div>
  );
};

export default AtelierFullPage;
