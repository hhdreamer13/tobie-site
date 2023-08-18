"use client";

import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import Link from "next/link";
import InscriptionForm from "./InscriptionForm";
import BackIcon from "../common/BackIcon";

const AtelierFullPage = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="relative flex flex-col justify-start w-full h-full min-h-screen bg-main items-center px-8 pb-12">
      {/* Close */}
      {/* Close */}
      <Link
        href={"/sections/ateliers"}
        className="absolute top-0 left-0 -mt-16 ml-10 "
      >
        <span>
          <BackIcon className="w-10 h-10 -rotate-90" />
        </span>
      </Link>

      {/* Title */}
      <h3 className="text-2xl md:text-4xl font-semibold mb-5 sm:mb-10 text-center">
        {item.name}
      </h3>

      {/* Principal Image */}
      <div className="max-h-full w-full md:max-w-3xl mb-8 rounded-lg shadow-xl overflow-hidden">
        <Image
          alt={item.title}
          src={item.imageSrc}
          height={400}
          width={600}
          className="object-cover w-full"
          placeholder="blur"
          blurDataURL={getShimmerPlaceholder(600, 400)}
        />
      </div>

      {/* Content */}

      <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
        <span className="text-slate-500 font-caveat">{item.date}</span>
        <div>
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="ml-2 text-sm text-white font-caveat bg-green-500 rounded-full px-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="prose dark:prose-invert">
        <p>{item.description}</p>
      </div>

      <div className="mt-20">
        <InscriptionForm />
      </div>
    </div>
  );
};

export default AtelierFullPage;
