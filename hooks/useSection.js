import { useCallback, useState } from "react";
import useDeviceType from "@/hooks/useDeviceType";

const useSection = (sections) => {
  const [currentSection, setCurrentSection] = useState(-1);
  const [expandedSection, setExpandedSection] = useState(-1);
  const [collapsingSection, setCollapsingSection] = useState(-1);

  const isDesktop = useDeviceType();

  const changeSection = (delta) =>
    setCurrentSection(
      (currentSection + delta + sections.length) % sections.length,
    );

  const handleMouseEnter = useCallback(
    (index) => {
      if (isDesktop && currentSection !== index && collapsingSection === -1) {
        setCurrentSection(index);
      }
    },
    [isDesktop, currentSection, collapsingSection],
  );

  const handleClick = useCallback(
    (sectionId) => {
      if (sectionId !== expandedSection && collapsingSection === -1) {
        setExpandedSection(sectionId);
        setCurrentSection(
          sections.findIndex((section) => section.id === sectionId),
        );
      }
    },
    [expandedSection, sections, collapsingSection],
  );

  const handleClose = () => {
    if (expandedSection !== -1) {
      setExpandedSection(-1);
      setCollapsingSection(expandedSection);
    }
  };

  return {
    currentSection,
    expandedSection,
    collapsingSection,
    setCollapsingSection,
    changeSection,
    handleMouseEnter,
    handleClick,
    handleClose,
  };
};

export default useSection;
