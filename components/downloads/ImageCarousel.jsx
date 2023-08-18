/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import downloads from "@/utils/downloads";
import BackgroundStack from "./BackgroundStack";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import PopupText from "./PopupText";
import MaximizeIcon from "../common/MaximizeIcon";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [downloadItems, setDownloadItems] = useState("");
  const [showHandleText, setShowHandleText] = useState(false);

  const currentItem = downloadItems[currentIndex];

  const getUniqueCategories = (downloads) => {
    const categories = downloads.map((item) => item.category);
    return [...new Set(categories)];
  };

  const uniqueCategories = getUniqueCategories(downloads);

  useEffect(() => {
    if (downloadItems) {
      const timer = setTimeout(() => {
        setShowHandleText(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [downloadItems]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col w-full min-h-screen justify-center items-center">
        <BackgroundStack
          downloadItems={downloadItems}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          currentItem={currentItem}
        />

        {/* <div className="flex flex-col text-slate-100 justify-center items-center gap-80 sm:gap-96 z-10"> */}
        {/* Grid */}
        <div className="grid grid-rows-3 gap-5 w-full min-h-screen text-slate-100 items-center">
          {/* Category Selection */}
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="relative text-lg w-80 text-center font-literata mb-2">
              Faites votre choix de catégorie :
            </p>
            {/* Options */}
            <div className="flex gap-6">
              {uniqueCategories.map((category, index) => (
                <label
                  key={index}
                  className="relative inline-flex items-center"
                >
                  <input
                    type="radio"
                    className="accent-orange-300"
                    name="option"
                    value={category}
                    checked={
                      downloadItems &&
                      downloadItems.some((item) => item.category === category)
                    }
                    onChange={() => {
                      const itemsFromCategory = downloads.filter(
                        (item) => item.category === category,
                      );
                      setDownloadItems(itemsFromCategory);
                      setCurrentIndex(0);
                      setShowHandleText(true);
                    }}
                  />
                  <span className="ml-2 font-caveat text-xl">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Hollow div - Handle placeholder */}
          <div className="relative"></div>

          {/* Button and indicator */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              className="relative text-center bg-slate-950/20 rounded-lg backdrop-blur-sm duration-1000 shadow-[inset_0_0_20px_rgba(255,255,255,0)] outline-[rgba(255,255,255,0.5)] outline-offset-0 transition-all ease-[cubic-bezier(0.19,1,0.22,1)] border-solid border-transparent hover:shadow-[inset_0_0_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2)] hover:border-solid;
"
            >
              {currentItem && (
                <Link
                  href={currentItem.linkUrl}
                  className="text-lg flex justify-center items-center font-caveat px-4 py-2"
                >
                  {currentItem.title}
                  <span className="ml-3">
                    <MaximizeIcon className="w-5 h-5" />
                  </span>
                </Link>
              )}
            </button>

            {/* Button variant 2 */}
            {/* <button className="relative group text-center backdrop-blur-sm transition-transform duration-300 ">
              {currentItem && (
                <Link
                  href={currentItem.linkUrl}
                  className="text-lg flex justify-center items-center font-caveat"
                >
                  <span className="relative z-10 block px-5 py-3 bg-main text-main overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out border-2 border-slate-950 dark:border-slate-100 rounded-lg">
                    <span className="relative">
                      {" "}
                      {currentItem.title}{" "}
                      <span className="ml-3">
                        <Image
                          src="/assets/open.svg"
                          alt="button"
                          width={15}
                          height={15}
                          className="inline"
                        />
                      </span>
                    </span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-slate-950/40 dark:bg-slate-100/40 rounded-lg group-hover:mb-0 group-hover:mr-0"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              )}
            </button> */}

            <div className="flex justify-center items-center gap-2 w-10/12 flex-wrap">
              {Array.from({ length: downloadItems.length }).map((_, index) => {
                let scale = 1 - Math.abs(currentIndex - index) * 0.1; // Adjust this formula as needed
                scale = Math.max(0.5, scale); // Ensure it doesn't get too small

                const isCurrent = index === currentIndex;
                return (
                  <div
                    key={index}
                    className={`bg-main rounded-full flex justify-center items-center transition-transform duration-300 ${
                      isCurrent ? "font-bold w-5 h-5" : "w-3 h-3"
                    }`}
                    style={{
                      transform: `scale(${scale})`,
                    }}
                  >
                    {isCurrent && (
                      <span className="text-xs text-main">{index + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PopUp text */}
        <AnimatePresence mode="wait">
          {showHandleText && <PopupText text="Touchez la poignée !" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageCarousel;
