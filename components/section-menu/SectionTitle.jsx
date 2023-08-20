import { motion } from "framer-motion";

const SectionTitle = ({
  isSelected,
  section,
  expandedSection,
  computedTextLeft,
  isDesktop,
}) => {
  const DESKTOP_Y_POSITION = isSelected ? "-30%" : "70%";
  const MOBILE_Y_POSITION = isSelected ? "150%" : "240%";

  const animationProps = {
    opacity: isSelected && section.id !== expandedSection ? 1 : 0,
    // y: isSelected ? (isDesktop ? "-30%" : "150%") : isDesktop ? "70%" : "240%",
    y: isDesktop ? DESKTOP_Y_POSITION : MOBILE_Y_POSITION,
  };

  return (
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
  );
};

export default SectionTitle;
