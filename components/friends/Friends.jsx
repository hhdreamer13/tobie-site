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
      <div className="fixed w-full h-screen top-0 left-0 flex flex-col items-center justify-center pointer-events-none">
        <h2 className="font-mottona text-9xl m-0 drop-shadow-xl">
          Les Amis de Tobie
        </h2>
        {/* <h3 className="text-[1.5rem] font-medium m-0">Scroll Down</h3> */}
      </div>

      <div className="min-h-screen bg-slate-950 text-slate-100 text-[5vh] leading-5 relative not-italic flex items-center justify-center">
        <p className="max-w-[40ch]">Nous sommes les amis de tobie</p>
      </div>
    </div>
  );
};

export default Friends;
