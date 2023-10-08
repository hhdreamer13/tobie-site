"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import LBranch from "./LBranch";
import EBranch from "./EBranch";

const TitlePage = () => {
  const titleRef = useRef(null);
  const { theme } = useTheme();
  const branchColorL = theme === "light" ? "#7a4619" : "#f8fafc";
  const branchColorE = theme === "light" ? "#b06700" : "#f8fafc";

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
      ).to(titleRef.current, { opacity: 0, duration: 1, delay: 4 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center">
          <h1
            ref={titleRef}
            aria-label="Les Amis de Tobie"
            className="relative font-mottona text-7xl sm:text-9xl text-main text-center brush-text dark:text-white w-[15rem] sm:w-[25rem] z-10"
          >
            L
            <span className="absolute w-16 top-[2.8rem] left-[1.6rem] sm:w-24 sm:top-[5rem] sm:left-[2.45rem] z-0">
              <LBranch stopColor={branchColorL} animate />
            </span>
            es Amis de Tobie
            <span className="absolute w-14 bottom-[1.9rem] right-[1.68rem] sm:w-24 sm:bottom-[3.4rem] sm:right-[2.39rem] z-0">
              <EBranch stopColor={branchColorE} animate />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
