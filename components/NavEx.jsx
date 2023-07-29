"use client";

import { motion, AnimatePresence } from "framer-motion";
import sections from "@/utils/sections";
import SectionBar from "./SectionBar";
import SectionBarControl from "./SectionBarControl";
import useSection from "@/hooks/useSection";
import useDeviceType from "@/hooks/useDeviceType";
import { useEffect, useState } from "react";

const NavEx = () => {
  const isDesktop = useDeviceType();
  const [positionValues, setPositionValues] = useState({
    INITIAL_CENTER_POSITION: null,
    SECTION_OFFSET: null,
    SECTION_SPACING: null,
    centerPosition: null,
  });

  useEffect(() => {
    const INITIAL_CENTER_POSITION = isDesktop ? 50 : 62;
    const SECTION_OFFSET = isDesktop ? 5 : 8;
    const SECTION_SPACING = isDesktop ? 10 : 12;
    const centerPosition =
      INITIAL_CENTER_POSITION - (sections.length - 1) * SECTION_OFFSET;

    setPositionValues({
      INITIAL_CENTER_POSITION,
      SECTION_OFFSET,
      SECTION_SPACING,
      centerPosition,
    });
  }, [isDesktop]);

  const {
    currentSection,
    expandedSection,
    expandedZIndex,
    collapsingZIndex,
    setCollapsingZIndex,
    changeSection,
    handleMouseEnter,
    handleClick,
    handleClose,
  } = useSection(sections);

  if (!positionValues.centerPosition)
    return (
      <div className="bg-slate-950 w-full h-screen text-slate-50 text-4xl flex justify-center items-center">
        <h2>Loading...</h2>{" "}
      </div>
    ); // or return a loading spinner

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
        <div className="relative w-[350px] h-[500px] sm:w-[500px]">
          {sections.map((section, index) => {
            const position =
              positionValues.centerPosition +
              index * positionValues.SECTION_SPACING; // Distribute the bars
            const isSelected = currentSection === index;

            return (
              <SectionBar
                key={index}
                index={index}
                section={section}
                isDesktop={isDesktop}
                isSelected={isSelected}
                position={position}
                handleClick={handleClick}
                handleClose={handleClose}
                expandedSection={expandedSection}
                handleMouseEnter={handleMouseEnter}
                setCollapsingZIndex={setCollapsingZIndex}
                expandedZIndex={expandedZIndex}
                collapsingZIndex={collapsingZIndex}
              />
            );
          })}
        </div>
        <SectionBarControl
          sections={sections}
          expandedSection={expandedSection}
          changeSection={changeSection}
          currentSection={currentSection}
        />
      </div>
    </div>
  );
};

export default NavEx;
