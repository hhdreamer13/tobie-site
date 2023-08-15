"use client";

import "./gridStyles.css";
import { useRef } from "react";
import { generateImagePaths, generateGridStyles } from "./imageCalculations";
import useGridAnimations from "./useGridAnimations";

const Friends = () => {
  const gridRef = useRef(null);

  const imagePaths = generateImagePaths();
  const gridStyles = generateGridStyles();

  useGridAnimations(gridRef);

  return (
    <div className="grid-wrapper w-full">
      <div className="w-full h-screen pt-20 flex flex-col items-center justify-center">
        <h2 className="font-mottona text-5xl sm:text-9xl m-0 drop-shadow-xl">
          Les Amis de Tobie
        </h2>
      </div>
      <div
        className="grid-container relative w-full grid-col-5 grid-row-[38, minmax(0, 1fr)]"
        ref={gridRef}
      >
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className="grid__item"
            style={gridStyles[index % 19]}
          >
            <div
              className="grid__item-img"
              style={{ backgroundImage: `url(${path})` }}
            ></div>
          </div>
        ))}
      </div>
      {/* <div className="fixed w-full h-screen pt-20 top-0 left-0 flex flex-col items-center justify-center pointer-events-none will-change-transform">
        <h2 className="font-mottona text-5xl sm:text-9xl m-0 drop-shadow-xl">
          Les Amis de Tobie
        </h2>
      </div> */}

      <div className="min-h-screen bg-slate-950 text-slate-100 text-2xl leading-5 relative not-italic flex items-center justify-center">
        <p className="">Nous sommes les amis de tobie</p>
      </div>
    </div>
  );
};

export default Friends;
