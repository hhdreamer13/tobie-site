"use client";

import sections from "@/utils/sections";
import SectionBar from "./SectionBar";
import SectionBarControl from "./SectionBarControl";
import useSection from "@/hooks/useSection";
import useDeviceType from "@/hooks/useDeviceType";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import SectionBackground from "./SectionBackground";
import Fireflies from "../Fireflies";

const SectionMenu = () => {
  const isDesktop = useDeviceType();
  const { theme } = useTheme();

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

  if (!positionValues.centerPosition)
    return (
      <div className="bg-main text-main w-full h-screen text-4xl flex justify-center items-center">
        <h2>Loading...</h2>{" "}
      </div>
    );

  return (
    <div className="w-full bg-slate-950 flex flex-col justify-center items-center bg-cover">
      {isOverlayVisible && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="absolute inset-0 bg-black opacity-0 z-10"
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
      <div className="absolute w-full min-h-screen bg-slate-950 bg-opacity-60" />

      <Fireflies />

      <div className="flex flex-col h-screen justify-center items-center">
        <div className="relative w-[350px] h-[500px] sm:w-[500px]">
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

export default SectionMenu;
