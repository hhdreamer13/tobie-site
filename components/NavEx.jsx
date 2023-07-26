"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageBar from "./ImageBar";
import sections from "@/utils/sections";

const NavEx = () => {
  const [currentSection, setCurrentSection] = useState(-1);

  const changeSection = (delta) => {
    const newSection =
      (currentSection + delta + sections.length) % sections.length;
    setCurrentSection(newSection);
  };

  const handleMouseEnter = (index) => {
    setCurrentSection(index);
  };

  return (
    <div className="w-full bg-slate-950 flex flex-col justify-center items-center bg-cover">
      {/* Background Placeholder */}
      <AnimatePresence>
        {currentSection !== -1 && (
          <motion.div
            key={sections[currentSection].imageSrc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute w-full min-h-screen bg-cover"
            style={{
              backgroundImage: `url(${sections[currentSection].imageSrc})`,
            }}
          >
            <div className="absolute w-full min-h-screen bg-black bg-opacity-50"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Title Text */}
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="w-80 md:w-96 h-2/4 flex justify-between">
          {sections.map((section, index) => (
            <ImageBar
              key={index}
              section={section}
              index={index}
              currentSection={currentSection}
              handleMouseEnter={handleMouseEnter}
            />
          ))}
        </div>
        {/* Control Buttons */}
        <div className="relative flex justify-center items-center gap-6 text-slate-300 transition-all">
          <button
            onClick={() => changeSection(-1)}
            className="px-6 py-1 border border-slate-300 rounded-full duration-300 backdrop-blur-md hover:scale-105"
          >
            <Image
              src="/assets/left.svg"
              width={100}
              height={100}
              alt="circle"
              className="w-5 h-5"
            />
          </button>
          <div className="flex flex-col justify-center items-center w-32 h-14">
            <p className="text-lg">
              {currentSection !== -1 ? sections[currentSection].title : ""}
            </p>
            <p className="text-sm text-center w-full truncate">
              {currentSection !== -1
                ? sections[currentSection].description
                : ""}
            </p>
          </div>
          <button
            onClick={() => changeSection(1)}
            className="px-6 py-1 border border-slate-300 rounded-full duration-300 backdrop-blur-md hover:scale-105"
          >
            <Image
              src="/assets/right.svg"
              width={100}
              height={100}
              alt="circle"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavEx;
