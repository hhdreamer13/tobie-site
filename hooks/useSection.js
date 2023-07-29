import { useState } from "react";

const useSection = (sections) => {
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
    }
  };

  const handleClose = () => {
    if (expandedSection !== -1) {
      setExpandedSection(-1);
      setCollapsingZIndex(expandedSection);
    }
  };

  return {
    currentSection,
    expandedSection,
    expandedZIndex,
    collapsingZIndex,
    setCollapsingZIndex,
    changeSection,
    handleMouseEnter,
    handleClick,
    handleClose,
  };
};

export default useSection;
