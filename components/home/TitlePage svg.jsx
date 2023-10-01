"use client";

import { motion } from "framer-motion";
import LBranch from "./LBranch";
import EBranch from "./EBranch";
import { useTheme } from "next-themes";

const exitVariants = {
  exit: {
    backgroundColor: "#020617", // bg-slate-950
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 1.5, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 1.5, ease: "easeOut" },
    },
  },
};

const TitlePage = () => {
  const { theme } = useTheme();
  const lBranchColor = theme === "light" ? "#7a4009" : "#f8fafc";
  const eBranchColor = theme === "light" ? "#7a4009" : "#f8fafc";

  return (
    <motion.div
      className="relative w-full h-full overflow-hidden"
      variants={exitVariants}
      exit="exit"
    >
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-label="Les Amis de Tobie"
            className="relative font-mottona text-7xl sm:text-9xl text-main text-center brush-text dark:text-white w-[15rem] sm:w-[25rem]"
          >
            L
            <span className="absolute w-16 top-[2.8rem] left-[1.6rem] sm:w-24 sm:top-[5rem] sm:left-[2.48rem] ">
              <LBranch stopColor={lBranchColor} />
            </span>
            es Amis de Tobie
            <span className="absolute w-14 bottom-[1.9rem] right-[1.68rem] sm:w-24 sm:bottom-[3.4rem] sm:right-[2.38rem]">
              <EBranch stopColor={eBranchColor} />
            </span>
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default TitlePage;
