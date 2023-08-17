"use client";

import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import Link from "next/link";

const NewsFullPage = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="relative flex flex-col justify-start w-full h-full min-h-screen bg-main items-center px-8 pb-12">
      {/* Close */}
      <Link
        href={"/sections/actualites"}
        className="absolute top-0 left-0 -mt-10 ml-5"
      >
        {/* Replace with your own close icon */}
        <span className="ml-10">←</span>
      </Link>

      {/* Title */}
      <h3 className="text-2xl md:text-4xl font-semibold mb-5 sm:mb-10 text-center">
        {item.title}
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

      <div className="text-justify text-main w-full md:w-3/4 xl:w-2/3 font-nunito p-3 rounded-lg prose">
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default NewsFullPage;
