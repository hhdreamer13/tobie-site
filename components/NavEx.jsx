"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Actualité",
    description: "Section 01 Description",
    src: "/photos/01.webp",
  },
  {
    title: "Ateliers",
    description: "Section 02 Description",
    src: "/photos/02.webp",
  },
  {
    title: "Cartographie",
    description: "Section 03 Description",
    src: "/photos/03.webp",
  },
  {
    title: "Histoires",
    description: "Section 04 Description",
    src: "/photos/04.webp",
  },
  {
    title: "Téléchargement",
    description: "Section 05 Description",
    src: "/photos/05.webp",
  },
  {
    title: "Jeu",
    description: "Section 06 Description",
    src: "/photos/06.webp",
  },
  {
    title: "À propos",
    description: "Section 07 Description",
    src: "/photos/07.webp",
  },
];

const NavEx = () => {
  const [bgImage, setBgImage] = useState("");
  const [currentItem, setCurrentItem] = useState(-1);

  const handleNext = () => {
    let newCurrentItem = (currentItem + 1) % items.length;
    setCurrentItem(newCurrentItem);
    setBgImage(items[newCurrentItem].src);
  };

  const handlePrev = () => {
    let newCurrentItem = (currentItem - 1 + items.length) % items.length;
    setCurrentItem(newCurrentItem);
    setBgImage(items[newCurrentItem].src);
  };

  const handleMouseEnter = (index) => {
    setCurrentItem(index);
    setBgImage(items[index].src);
  };

  return (
    <div className="w-full h-screen bg-slate-950 flex flex-col justify-center items-center bg-cover">
      {/* Background Placeholder */}
      <AnimatePresence>
        {bgImage && (
          <motion.div
            key={bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-screen bg-cover"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute w-full h-screen bg-black bg-opacity-60"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title Text */}
      <h1 className="relative font-mottona mb-20 drop-shadow-lg text-slate-100 text-6xl">
        Les Amis de Tobie
      </h1>
      <div className="flex flex-col gap-6">
        {/* Creating Image Bars */}
        <div className="w-96 h-[450px] flex justify-between">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative transition-all flex flex-col items-center justify-center gap-2"
              onMouseEnter={() => handleMouseEnter(index)}
              // onMouseLeave={() => setBgImage("")}
            >
              <p
                className={`absolute -top-8 opacity-0 duration-500 text-center w-20 text-slate-100 ${
                  currentItem === index ? "-translate-y-8 opacity-100" : ""
                }`}
              >
                {item.title}
              </p>
              <div
                className={`relative w-11 h-full rounded-xl overflow-hidden duration-500 drop-shadow-md ${
                  currentItem === index ? "-translate-y-8" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill="true"
                  className="object-cover"
                />
              </div>
              <div
                className={`w-4 h-4 opacity-0 duration-700 ${
                  currentItem === index ? "-translate-y-8 opacity-100" : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Control Buttons */}
        <div className="relative flex justify-center items-center gap-6 text-slate-300 transition-all">
          <button
            onClick={handlePrev}
            className="px-6 py-1 border border-slate-300 rounded-full duration-300 backdrop-blur-md hover:scale-105"
          >
            &lt;-
          </button>
          <div className="flex flex-col justify-center items-center w-32">
            <p className="text-lg">
              {currentItem !== -1 ? items[currentItem].title : "section name"}
            </p>
            <p className="text-sm w-32 truncate">
              {currentItem !== -1
                ? items[currentItem].description
                : "section description"}
            </p>
          </div>
          <button
            onClick={handleNext}
            className="px-6 py-1 border border-slate-300 rounded-full duration-300 backdrop-blur-md hover:scale-105"
          >
            -&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavEx;
