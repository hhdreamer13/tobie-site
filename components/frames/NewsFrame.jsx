"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NewsFrame = ({ item }) => {
  const router = useRouter();

  console.log(item);

  if (!item) {
    return null;
  }

  return (
    <div className="flex flex-col justify-start w-full h-full bg-main items-center m-8 rounded-lg p-4">
      <Image
        alt={item.title}
        src={item.imageSrc}
        height={600}
        width={800}
        className="rounded-lg shadow-lg object-cover mb-8"
      />

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
        onClick={() => router.back()}
        className="mt-8 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-700 transition-colors duration-200"
      >
        Retour aux actualités
      </button>
    </div>
  );
};

export default NewsFrame;
