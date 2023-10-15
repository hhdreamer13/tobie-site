"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

const SectionHeader = ({ section }) => {
  const { theme } = useTheme();
  const builder = imageUrlBuilder(client);

  if (!section) {
    return;
  }

  const imageUrl =
    theme === "dark"
      ? builder.image(section?.imageSrcNuit).url()
      : builder.image(section?.imageSrcJour).url();

  return (
    <motion.div
      className="absolute flex-col mx-auto top-0 left-0 h-32 w-full"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={section?.title}
          className="object-cover"
          fill={true}
          sizes="100vw"
          priority
        />
      )}

      <div className="p-5 w-full text-center flex items-center justify-center drop-shadow-none text-main h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950">
        <h2 className="text-xl sm:text-2xl uppercase drop-shadow-md">
          {section?.title}
        </h2>
      </div>
    </motion.div>
    // </motion.div>
  );
};

export default SectionHeader;
