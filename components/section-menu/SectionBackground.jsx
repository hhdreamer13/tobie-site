import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { memo, useEffect, useMemo, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

const SectionBackground = memo(function SectionBackground({
  currentSection,
  sections,
  expandedSection,
  theme,
}) {
  const [highQualityImageLoaded, setHighQualityImageLoaded] = useState(false);
  const builder = imageUrlBuilder(client);

  const imageUrl = useMemo(() => {
    if (currentSection !== -1 && theme) {
      return theme === "dark"
        ? sections[currentSection].imageSrcNuit
        : sections[currentSection].imageSrcJour;
    }
    return null;
  }, [currentSection, theme, sections]);

  useEffect(() => {
    // Reset the state when the current section changes
    setHighQualityImageLoaded(false);
  }, [currentSection]);

  return (
    <AnimatePresence>
      {currentSection !== -1 && (
        <motion.div
          key={sections[currentSection]._id}
          initial={{ opacity: 0, filter: "blur(0px)" }}
          animate={{
            opacity: 1,
            filter: expandedSection !== -1 ? "blur(10px)" : "blur(0px)",
          }}
          exit={{ opacity: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="absolute w-full min-h-screen"
        >
          {!highQualityImageLoaded && (
            <Image
              src={builder.image(imageUrl).width(480).height(270).url()}
              alt="Section Background Low Quality"
              className="object-cover"
              fill={true}
              sizes="100vw"
            />
          )}
          <Image
            src={builder.image(imageUrl).url()}
            alt="Section Background"
            className="object-cover"
            fill={true}
            priority
            sizes="100vw"
            onLoadingComplete={() => setHighQualityImageLoaded(true)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default SectionBackground;
