"use client";
import sections from "@/utils/sections";
import slugify from "@/utils/slugify";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionPage({ params }) {
  const { name } = params;

  const section = sections.find((s) => slugify(s.title) === name);

  return (
    <>
      <motion.div className="flex flex-col mx-auto min-h-screen w-full bg-slate-950">
        <motion.div
          className="fixed top-0 left-0 h-32 w-full"
          // layoutId="expandableComponent"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={section.imageSrc}
            alt={section.title}
            fill="true"
            priority={true}
            sizes="100vh"
            className="object-cover"
          />
          <div className="p-5 w-full text-center flex items-center justify-center text-slate-100 drop-shadow-md bg-opacity-50 h-32 bg-gradient-to-t from-slate-950">
            <h2 className="text-xl sm:text-2xl uppercase">{section.title}</h2>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
