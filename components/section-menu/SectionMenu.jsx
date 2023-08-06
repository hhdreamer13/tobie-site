"use client";

import sections from "@/utils/sections";
import SectionBar from "./SectionBar";
import SectionBarControl from "./SectionBarControl";
import useSection from "@/hooks/useSection";
import useDeviceType from "@/hooks/useDeviceType";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import SectionBackground from "./SectionBackground";

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
      {/* Background Placeholder */}
      <SectionBackground
        currentSection={currentSection}
        sections={sections}
        expandedSection={expandedSection}
        theme={theme}
      />

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
