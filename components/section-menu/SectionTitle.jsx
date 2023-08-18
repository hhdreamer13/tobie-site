import { motion } from "framer-motion";

const SectionTitle = ({
  isSelected,
  section,
  expandedSection,
  computedTextLeft,
  isDesktop,
}) => {
  return (
    <motion.p
      className="absolute text-center text-slate-100 w-24 font-caveat"
      initial={{ opacity: 0 }}
      animate={{
        opacity: isSelected && section.id !== expandedSection ? 1 : 0,
        y: isSelected
          ? isDesktop
            ? "-30%"
            : "150%"
          : isDesktop
          ? "70%"
          : "240%",
      }}
      transition={{ duration: 1, ease: "backInOut" }}
      style={{
        // width: "100px",
        // left: `calc(${position}% - 50px)`,
        left: computedTextLeft,
        // opacity: "0",
      }}
    >
      {section.title}
    </motion.p>
  );
};

export default SectionTitle;
