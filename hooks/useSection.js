import { useState } from "react";
import useDeviceType from "@/hooks/useDeviceType";

const useSection = (sections) => {
  const [currentSection, setCurrentSection] = useState(-1);
  const [expandedSection, setExpandedSection] = useState(-1);
  const [collapsingSection, setCollapsingSection] = useState(-1);

  const isDektop = useDeviceType();

  const changeSection = (delta) => {
    const newSection =
      (currentSection + delta + sections.length) % sections.length;
    setCurrentSection(newSection);
  };

  const handleMouseEnter = (index) => {
    if (isDektop) {
      setCurrentSection(index);
    }
  };

  const handleClick = (sectionId) => {
    if (sectionId !== expandedSection) {
      setExpandedSection(sectionId);
      setCurrentSection(
        sections.findIndex((section) => section.id === sectionId),
      );
    }
  };

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
