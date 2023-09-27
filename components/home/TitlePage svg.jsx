"use client";
import Image from "next/image";
import tobieLight from "../../public/photos/tobieText-themeLight.webp";
import tobieDark from "../../public/photos/tobieText-themeDark.webp";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import LBranch from "./LBranch";
import EBranch from "./EBranch";

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
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
};

const TitlePage = () => {
  const { theme } = useTheme();

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
            className="relative font-mottona text-7xl sm:text-9xl text-main text-center"
          >
            L
            <span className="absolute w-20 top-[5.2rem] left-[1.3rem] ">
              <LBranch />
            </span>
            es Amis de{" "}
            <span className="relative block">
              Tobie
              <span className="absolute w-20 top-7 right-[2.65rem]">
                <EBranch />
              </span>
            </span>
          </motion.h1>
          {/* <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Image
              src={theme === "dark" ? tobieDark : tobieLight}
              alt="Tobie text"
              className="object-contain w-44 sm:w-52"
              width={200}
              height={200}
              quality={100}
            />
          </motion.div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default TitlePage;
