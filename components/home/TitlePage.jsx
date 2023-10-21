"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import LBranch from "./LBranch";
import EBranch from "./EBranch";

const TitlePage = () => {
  const titleRef = useRef(null);
  const { theme } = useTheme();
  const branchColorL = theme === "light" ? "#501d00" : "#f8fafc";
  const branchColorE = theme === "light" ? "#501d00" : "#f8fafc";

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline();

  //     tl.fromTo(
  //       titleRef.current,
  //       { opacity: 0 },
  //       { opacity: 1, duration: 1 },
  //     ).to(titleRef.current, { opacity: 0, duration: 1, delay: 4 });
  //   });
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center text-blur-out will-change-transform">
          <h1
            ref={titleRef}
            aria-label="Les Amis de Tobie"
            className="relative text-focus-in font-mottona text-7xl sm:text-9xl text-main text-center brush-text dark:text-white w-[15rem] sm:w-[25rem] z-10"
          >
            L
            <span className="absolute w-16 top-[3rem] left-[1.9rem] sm:w-24 sm:top-[5.3rem] sm:left-[3rem] z-0">
              <LBranch stopColor={branchColorL} animate />
            </span>
            es Amis de Tobie
            <span className="absolute w-14 bottom-[1.67rem] right-[1.47rem] sm:w-24 sm:bottom-[3rem] sm:right-[2rem] z-0">
              <EBranch stopColor={branchColorE} animate />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
