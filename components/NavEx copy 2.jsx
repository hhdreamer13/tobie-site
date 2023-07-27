"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import sections from "@/utils/sections";

const NavEx = () => {
  const [currentSection, setCurrentSection] = useState(-1);
  const [expanded, setExpanded] = useState({});
  const [zIndices, setZIndices] = useState({});

  const changeSection = (delta) => {
    const newSection =
      (currentSection + delta + sections.length) % sections.length;
    setCurrentSection(newSection);
  };

  const handleMouseEnter = (index) => {
    setCurrentSection(index);
  };

  useEffect(() => {
    const initialState = sections.reduce((obj, section, index) => {
      const key = `img${index}`;
      obj[key] = false;
      return obj;
    }, {});
    setExpanded(initialState);
    setZIndices(initialState);
  }, []);

  const handleClick = (sectionId) => {
    const isExpanding = !expanded[sectionId];

    setExpanded({
      ...expanded,
      [sectionId]: isExpanding,
    });

    if (isExpanding) {
      setZIndices({
        ...zIndices,
        [sectionId]: 1,
      });
    } else {
      setTimeout(() => {
        setZIndices({
          ...zIndices,
          [sectionId]: 0,
        });
      }, 1000);
    }
  };

  console.log("zIndices", zIndices);
  console.log("expanded", expanded);

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
              filter: Object.values(expanded).some(Boolean)
                ? "blur(10px)"
                : "blur(0px)",
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

      {/* Title Text */}
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="relative w-[500px] h-[500px]">
          {sections.map((section, index) => {
            const position = centerPosition + index * 10; // Add index * 10 to calculate the position of each image
            const isSelected = currentSection === index;

            return (
              <div key={index} className="">
                <motion.p
                  animate={{
                    opacity: isSelected && !expanded[section.id] ? 1 : 0,
                    y: isSelected ? "-30%" : "70%",
                  }}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className="absolute text-center text-slate-100"
                  style={{
                    width: "100px",
                    left: `calc(${position}% - 50px)`,
                    opacity: "0",
                  }}
                >
                  {section.title}
                </motion.p>
                <motion.div
                  key={section.id}
                  className={`absolute rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2`}
                  layout
                  initial={false}
                  animate={
                    expanded[section.id]
                      ? {
                          width: 700,
                          height: 500,
                          top: "50%",
                          left: "50%",
                          borderWidth: 2,
                        }
                      : {
                          width: 40,
                          height: 380,
                          top: isSelected ? "45%" : "50%",
                          left: `${position}%`,
                          borderWidth: isSelected ? 0.1 : 0,
                        }
                  }
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                    borderWidth: { duration: 0.2, ease: "anticipate" },
                  }}
                  style={{
                    // borderRadius: "10px",
                    objectFit: "cover",
                    zIndex: zIndices[section.id],
                    borderWidth: 0,
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
                </motion.div>
                <motion.div
                  animate={{
                    opacity: isSelected && !expanded[section.id] ? 1 : 0,
                    y: isSelected ? "-100%" : "0%",
                  }}
                  transition={{ duration: 1.3, ease: "backInOut" }}
                  className="absolute text-center bottom-8 text-slate-100"
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
            opacity: Object.values(expanded).some(Boolean) ? 0 : 1,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <button
            onClick={() => changeSection(-1)}
            className="px-6 py-1 border border-white rounded-full duration-300 hover:scale-105 opacity-50"
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
            onClick={() => changeSection(1)}
            className="px-6 py-1 border border-white rounded-full duration-300 backdrop-blur-md hover:scale-105 opacity-50"
          >
            <Image
              src="/assets/right.svg"
              width={100}
              height={100}
              alt="circle"
              className="w-5 h-5"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NavEx;
