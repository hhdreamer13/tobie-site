"use client";

// import sections from "@/utils/sections";
import SectionBar from "./SectionBar";
import SectionBarControl from "./SectionBarControl";
import useSection from "@/hooks/useSection";
import useDeviceType from "@/hooks/useDeviceType";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import SectionBackground from "./SectionBackground";
import Fireflies from "../fireflies/Fireflies";
import Loader from "../common/Loader";
import { motion } from "framer-motion";

const sectionBarAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const sectionBarControlAnimation = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const SectionMenu = ({ sections }) => {
  const isDesktop = useDeviceType();
  const { theme } = useTheme();

  const [positionValues, setPositionValues] = useState({
    INITIAL_CENTER_POSITION: null,
    SECTION_OFFSET: null,
    SECTION_SPACING: null,
    centerPosition: null,
  });

  useEffect(() => {
    const INITIAL_CENTER_POSITION = isDesktop ? 50 : 60;
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
    collapsingSection,
    setCollapsingSection,
    changeSection,
    handleMouseEnter,
    handleClick,
    handleClose,
    isOverlayVisible,
  } = useSection(sections);

  const positions = useMemo(
    () =>
      sections.map(
        (_, index) =>
          positionValues.centerPosition +
          index * positionValues.SECTION_SPACING,
      ),
    [positionValues],
  );

  if (!positionValues.centerPosition) return <Loader />;

  return (
    <div className="w-full bg-main flex flex-col justify-center items-center bg-cover">
      {isOverlayVisible && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="absolute inset-0 bg-slate-950 opacity-0 z-10"
          onClick={handleClose}
        ></div>
      )}
      {/* Background Placeholder */}
      <SectionBackground
        currentSection={currentSection}
        sections={sections}
        expandedSection={expandedSection}
        theme={theme}
      />

      {/* Overlay */}
      {currentSection !== -1 && (
        <div className="absolute w-full min-h-screen bg-slate-950 bg-opacity-60" />
      )}

      {theme === "dark" && <Fireflies />}

      <div className="flex flex-col h-screen justify-center items-center">
        <motion.div
          className="relative w-[350px] h-[500px] sm:w-[500px]"
          initial="hidden"
          animate="visible"
          variants={sectionBarAnimation}
        >
          {sections.map((section, index) => {
            const position = positions[index];

            return (
              <SectionBar
                key={index}
                index={index}
                section={section}
                isSelected={currentSection === index}
                position={position}
                handleClick={handleClick}
                handleClose={handleClose}
                expandedSection={expandedSection}
                handleMouseEnter={handleMouseEnter}
                collapsingSection={collapsingSection}
                setCollapsingSection={setCollapsingSection}
              />
            );
          })}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionBarControlAnimation}
        >
          <SectionBarControl
            sections={sections}
            expandedSection={expandedSection}
            changeSection={changeSection}
            currentSection={currentSection}
            theme={theme}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionMenu;
