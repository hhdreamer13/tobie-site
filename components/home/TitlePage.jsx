"use client";
import Image from "next/image";
import LBranch from "../../public/l-branch10.webp";
import EBranch from "../../public/e-branch3.webp";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";

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
      opacity: { duration: 1, ease: "easeOut" },
    },
  },
};

const TitlePage = () => {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    gsap.fromTo(
      "#mask",
      {
        clipPath: "circle(0% at 0% 0%)",
      },
      {
        clipPath: "circle(100% at 50% 0%)",
        duration: 6,
        ease: "power2.inOut",
        // ease: "slow(0.1, 0.4, false)",
        // delay: 0.5,
      },
    );
  }, []);

  useLayoutEffect(() => {
    gsap.fromTo(
      "#mask2",
      {
        clipPath: "circle(0% at 0% 50%)",
      },
      {
        clipPath: "circle(100% at 50% 50%)",
        duration: 6,
        ease: "power2.inOut",
        // ease: "slow(0.1, 0.4, false)",
        // delay: 1,
      },
    );
  }, []);

  return (
    <motion.div
      className="relative w-full h-full overflow-hidden"
      variants={exitVariants}
      exit="exit"
    >
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-label="Les Amis de Tobie"
            className="font-mottona text-7xl sm:text-9xl dark:text-slate-50 text-center brush-text w-[15rem] sm:w-[25rem]"
          >
            <span className="relative">
              <span className="absolute w-20 top-[4.7rem] left-[2.3rem]">
                <Image
                  id="mask"
                  src={LBranch}
                  alt="Tobie branch"
                  className="object-contain"
                  style={{ clipPath: "circle(0% at 50% 50%)" }}
                  width={200}
                  height={200}
                  quality={100}
                />
              </span>
              L
            </span>
            es Amis de{" "}
            <span className="block relative">
              Tobie
              <span className="absolute w-20 top-[2.2rem] right-[2.97rem]">
                <Image
                  id="mask2"
                  src={EBranch}
                  alt="Tobie branch"
                  className="object-contain"
                  style={{ clipPath: "circle(0% at 50% 50%)" }} // Initial position at the bottom
                  width={200}
                  height={200}
                  quality={100}
                />
              </span>
            </span>
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default TitlePage;
