"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import sections from "@/utils/sections";

const NavEx = () => {
  const [currentSection, setCurrentSection] = useState(-1);

  const [expandedSection, setExpandedSection] = useState(-1);
  const [expandedZIndex, setExpandedZIndex] = useState(-1);
  const [collapsingZIndex, setCollapsingZIndex] = useState(-1);

  const changeSection = (delta) => {
    const newSection =
      (currentSection + delta + sections.length) % sections.length;
    setCurrentSection(newSection);
  };

  const handleMouseEnter = (index) => {
    setCurrentSection(index);
  };

  const handleClick = (sectionId) => {
    if (sectionId !== expandedSection) {
      setExpandedSection(sectionId);
      setExpandedZIndex(sectionId);
    } else {
      setExpandedSection(-1);
      setCollapsingZIndex(sectionId);
    }
  };

  const centerPosition = 50 - (sections.length - 1) * 5; // Subtracting (number of images - 1) * 5 to calculate the center

  return (
    <div className="w-full bg-slate-950 flex flex-col justify-center items-center bg-cover">
      {/* Background Placeholder */}
      <AnimatePresence>
        {currentSection !== -1 && (
          <motion.div
            key={sections[currentSection].imageSrc}
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{
              opacity: 1,
              filter: expandedSection !== -1 ? "blur(10px)" : "blur(0px)",
            }}
            exit={{ opacity: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className={`absolute w-full min-h-screen bg-cover`}
            style={{
              backgroundImage: `url(${sections[currentSection].imageSrc})`,
            }}
          >
            <div className="absolute w-full min-h-screen bg-black bg-opacity-60"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col h-screen justify-center items-center">
        <div className="relative w-[500px] h-[500px]">
          {sections.map((section, index) => {
            const position = centerPosition + index * 10; // Add index * 10 to calculate the position of each image
            const isSelected = currentSection === index;

            return (
              <div key={index}>
                <motion.p
                  className="absolute text-center text-slate-100"
                  animate={{
                    opacity:
                      isSelected && section.id !== expandedSection ? 1 : 0,
                    y: isSelected ? "-30%" : "70%",
                  }}
                  transition={{ duration: 1.1, ease: "backInOut" }}
                  style={{
                    width: "100px",
                    left: `calc(${position}% - 50px)`,
                    opacity: "0",
                  }}
                >
                  {section.title}
                </motion.p>
                <motion.div
                  className="absolute rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 border-2"
                  key={section.id}
                  layout
                  initial={false}
                  animate={
                    expandedSection === section.id
                      ? {
                          width: 600,
                          height: 500,
                          top: "50%",
                          left: "50%",
                          borderColor: "#020617",
                        }
                      : {
                          width: 40,
                          height: 380,
                          top: isSelected ? "43%" : "50%",
                          left: `${position}%`,
                          borderColor: "rgba(255, 255, 255, 0)",
                        }
                  }
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                    borderColor: { duration: 1, ease: "anticipate" },
                  }}
                  onAnimationComplete={() => {
                    if (expandedSection === -1) {
                      setCollapsingZIndex(-1);
                    }
                  }}
                  style={{
                    // borderRadius: "10px",
                    objectFit: "cover",
                    zIndex:
                      section.id === expandedZIndex ||
                      section.id === collapsingZIndex
                        ? 1
                        : 0,
                  }}
                  onClick={() => handleClick(section.id)}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  <Image
                    src={section.imageSrc}
                    alt={section.title}
                    fill="true"
                    priority={true}
                    sizes="100vh"
                    className="object-cover"
                  />
                  <motion.div
                    className="w-full h-full flex flex-col justify-end items-center gap-6"
                    initial={{ opacity: 0, y: "10%" }}
                    animate={
                      expandedSection === section.id
                        ? {
                            opacity: 1,
                            y: "0%",
                            transition: {
                              duration: 1,
                              delay: 0.6,
                              ease: "backInOut",
                            },
                          }
                        : {
                            opacity: 0,
                            y: "10%",
                            transition: {
                              duration: 0.8,
                              delay: 0,
                              ease: "backInOut",
                            },
                          }
                    }
                  >
                    <motion.button
                      className={`group flex justify-center items-center w-12 h-12 z-20 rounded-full bg-slate-950 bg-opacity-50 animate-bounce ${
                        expandedSection === section.id
                          ? "pointer-events-auto"
                          : "pointer-events-none"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={
                        expandedSection === section.id
                          ? {
                              opacity: 1,
                              transition: {
                                duration: 1,
                                delay: 1.3,
                                ease: "backInOut",
                              },
                            }
                          : {
                              opacity: 0,
                              transition: {
                                duration: 0.8,
                                delay: 0,
                                ease: "backInOut",
                              },
                            }
                      }
                    >
                      <Image
                        className="relative w-6 h-6 transition-transform drop-shadow-md group-hover:scale-125 group-hover:-rotate-90 group-focus:scale-110"
                        src="/assets/circle.svg"
                        width={100}
                        height={100}
                        alt="circle"
                      />
                    </motion.button>
                    <div className="p-5 w-80 text-center text-slate-100 drop-shadow-md bg-opacity-50 pointer-events-none bg-gradient-to-t from-slate-950">
                      <h2 className="text-2xl uppercase">{section.title}</h2>
                      <p className="mt-5 mb-2 text-sm font-nunito">
                        {section.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute bottom-9"
                  animate={{
                    opacity:
                      isSelected && section.id !== expandedSection ? 1 : 0,
                    y: isSelected ? "-130%" : "0%",
                  }}
                  transition={{ duration: 1.3, ease: "backInOut" }}
                  style={{
                    width: "20px",
                    left: `calc(${position}% - 10px)`,
                    opacity: "0",
                  }}
                >
                  <Image
                    src="/assets/circle.svg"
                    width={100}
                    height={100}
                    alt="circle"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
        {/* Control Buttons */}
        <motion.div
          className="relative flex justify-center items-center gap-6 text-slate-300"
          initial={{ opacity: 0 }}
          animate={{
            opacity: expandedSection !== -1 ? 0 : 1,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <button
            className="px-6 py-1 border border-white rounded-full duration-300 hover:scale-105 opacity-50"
            onClick={() => changeSection(-1)}
          >
            <Image
              src="/assets/left.svg"
              width={100}
              height={100}
              alt="circle"
              className="w-5 h-5"
            />
          </button>
          <div className="flex flex-col justify-center items-center w-32 h-14 opacity-80">
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
            className="px-6 py-1 border border-white rounded-full duration-300 backdrop-blur-md hover:scale-105 opacity-50"
            onClick={() => changeSection(1)}
          >
            <Image
              className="w-5 h-5"
              src="/assets/right.svg"
              width={100}
              height={100}
              alt="circle"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NavEx;
