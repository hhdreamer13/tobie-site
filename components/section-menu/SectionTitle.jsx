import { motion } from "framer-motion";
import { getIconForSection } from "@/utils/getIconForSection";
import Image from "next/image";

const SectionTitle = ({
  isSelected,
  section,
  expandedSection,
  computedTextLeft,
  isDesktop,
}) => {
  const sectionIcon = getIconForSection(section.slug.current);

  const DESKTOP_Y_POSITION = isSelected ? "-30%" : "70%";
  const MOBILE_Y_POSITION = isSelected ? "150%" : "240%";

  const animationProps = {
    opacity: isSelected && section.id !== expandedSection ? 1 : 0,
    // y: isSelected ? (isDesktop ? "-30%" : "150%") : isDesktop ? "70%" : "240%",
    y: isDesktop ? DESKTOP_Y_POSITION : MOBILE_Y_POSITION,
  };

  const iconAnimationProps = {
    opacity: isSelected ? 0 : 1,
  };

  return (
    <div className="relative">
      {/* Placeholder for icon, animated with a simple fade-in and fade-out */}
      <motion.div
        className={`absolute flex justify-center w-24 h-24 pointer-events-none ${
          isDesktop ? "top-6" : "top-16"
        }`}
        initial={{ opacity: 0 }}
        animate={iconAnimationProps}
        transition={{ duration: 1, ease: "backInOut" }}
        style={{
          left: computedTextLeft,
        }}
      >
        {/* Replace the following div with your SVG icon later */}
        <div className="w-6 h-6 text-gray-400 dark:text-gray-500">
          {sectionIcon}
        </div>
      </motion.div>
      <motion.p
        className="absolute text-center text-slate-100 w-24 font-caveat"
        initial={{ opacity: 0 }}
        animate={animationProps}
        transition={{ duration: 1, ease: "backInOut" }}
        style={{
          left: computedTextLeft,
        }}
      >
        {section.title}
      </motion.p>
    </div>
  );
};

export default SectionTitle;
