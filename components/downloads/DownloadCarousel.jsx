"use client";

import { useState, useEffect, useCallback } from "react";
import BackgroundStack from "./BackgroundStack";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import PopupText from "./PopupText";
import MaximizeIcon from "../common/icons/MaximizeIcon";

const getUniqueCategories = (downloads) => {
  const categories = downloads.map((item) => item.category);
  return [...new Set(categories)];
};

const DownloadCarousel = ({ downloads, text }) => {
  const uniqueCategories = getUniqueCategories(downloads);

  // Initialize state with the first category's items
  const [downloadItems, setDownloadItems] = useState(() => {
    if (uniqueCategories.length > 0) {
      return downloads.filter((item) => item.category === uniqueCategories[0]);
    }
    return [];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHandleText, setShowHandleText] = useState(false);

  console.log("unique categories", uniqueCategories[0]);
  const currentItem = downloadItems[currentIndex];

  const handleCategoryChange = useCallback((category) => {
    const itemsFromCategory = downloads.filter(
      (item) => item.category === category,
    );
    setDownloadItems(itemsFromCategory);
    setCurrentIndex(0);
    setShowHandleText(true);
  }, []);

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
              {text}
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
                    onChange={() => handleCategoryChange(category)}
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
                  href={`/souvenirs/${currentItem?._id}`}
                  className="text-lg flex justify-center items-center font-caveat px-4 py-2"
                >
                  {currentItem?.title}
                  <span className="ml-3">
                    <MaximizeIcon className="w-5 h-5" />
                  </span>
                </Link>
              )}
            </button>

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

export default DownloadCarousel;
