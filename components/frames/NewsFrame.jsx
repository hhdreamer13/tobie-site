"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import MaximizeIcon from "../common/MaximizeIcon";
import BackIcon from "../common/BackIcon";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";

const NewsFrame = ({ item, isOpen, setIsOpen }) => {
  const router = useRouter();

  if (!item) {
    return null;
  }

  return (
    <div className="relative flex flex-col justify-start w-full h-full bg-main items-center rounded-xl p-4">
      {/* Maximize and Back buttons */}
      <button
        className="absolute top-0 right-0 m-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MaximizeIcon />
      </button>
      <button
        className="absolute top-0 left-0 m-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BackIcon />
      </button>

      {/* Principal Image */}
      <Image
        alt={item.title}
        src={item.imageSrc}
        height={400}
        width={600}
        className="rounded-lg shadow-xl object-cover mb-8"
        placeholder="blur"
        blurDataURL={getShimmerPlaceholder(600, 400)}
      />

      {/* Content */}
      <h2 className="text-3xl font-bold mb-2">{item.title}</h2>

      <div className="mb-4">
        <span className="text-slate-500">{item.date}</span>
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="ml-2 text-sm text-white bg-green-500 rounded-full px-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="text-justify text-slate-500 font-nunito">
        <p>{item.description}</p>
      </div>

      <button
        onClick={() => router.push("/news/2")}
        className="mt-8 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-700 transition-colors duration-200"
      >
        Retour aux actualités
      </button>
    </div>
  );
};

export default NewsFrame;
