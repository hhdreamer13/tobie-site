import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { memo, useMemo } from "react";

const SectionBackground = memo(function SectionBackground({
  currentSection,
  sections,
  expandedSection,
  theme,
}) {
  const imageUrl = useMemo(() => {
    if (currentSection !== -1 && theme) {
      return theme === "dark"
        ? sections[currentSection].imageSrcNuit
        : sections[currentSection].imageSrcJour;
    }
    return null;
  }, [currentSection, theme, sections]);

  return (
    <AnimatePresence>
      {currentSection !== -1 && (
        <motion.div
          key={sections[currentSection].id}
          initial={{ opacity: 0, filter: "blur(0px)" }}
          animate={{
            opacity: 1,
            filter: expandedSection !== -1 ? "blur(10px)" : "blur(0px)",
          }}
          exit={{ opacity: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="absolute w-full min-h-screen"
        >
          <Image
            src={imageUrl}
            alt="Section Background"
            className="object-cover"
            fill={true}
            priority
            loading="eager"
            sizes="100vw"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default SectionBackground;
