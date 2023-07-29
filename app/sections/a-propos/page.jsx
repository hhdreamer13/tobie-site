"use client";
import sections from "@/utils/sections";
import slugify from "@/utils/slugify";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SectionPage() {
  const pathname = usePathname();

  const section = sections.find((s) => slugify(s.url) === pathname);

  return (
    <>
      <motion.div className="flex flex-col mx-auto min-h-screen w-full bg-slate-50 dark:bg-slate-950">
        <motion.div
          className="fixed top-0 left-0 h-32 w-full"
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
          <div className="p-5 w-full text-center flex items-center justify-center drop-shadow-none text-main h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950">
            <h2 className="text-xl sm:text-2xl uppercase drop-shadow-md">
              {section.title}
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
