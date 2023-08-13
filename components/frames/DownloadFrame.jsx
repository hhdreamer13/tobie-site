"use client";

import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import CloseIcon from "../common/CloseIcon";

const DownloadFrame = ({ item, setIsOpen }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="relative flex flex-col justify-start w-full h-fit bg-main items-center rounded-xl p-4">
      {/* Close */}
      <button
        className="absolute top-0 right-0 m-2"
        onClick={() => setIsOpen(false)}
      >
        <CloseIcon />
      </button>

      {/* Principal Image */}
      <div className="h-60 w-full mb-8 rounded-lg shadow-xl overflow-hidden">
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
      <h2 className="text-3xl font-bold mb-2 text-center">{item.title}</h2>

      <div className="mb-4">
        <span className="text-white bg-green-500 text-lg rounded-full px-2">
          {item.category}
        </span>
      </div>

      <div className="text-justify text-main w-full font-nunito p-3 h-40 overflow-y-scroll border rounded-lg">
        <p>{item.description}</p>
      </div>

      <button
        onClick={() => {
          setIsOpen(false);
          window.location.reload();
        }}
        className="mt-8 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-700 transition-colors duration-200"
      >
        Télécharger
      </button>
    </div>
  );
};

export default DownloadFrame;
