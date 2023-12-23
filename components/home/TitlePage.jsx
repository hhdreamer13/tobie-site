"use client";

import { useLayoutEffect, useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "next-themes";
import LBranch from "./LBranch";
import EBranch from "./EBranch";

const TitlePage = () => {
  const titleRef = useRef(null);
  const { theme } = useTheme();

  const [branchColor, setBranchColor] = useState({
    L: "#000",
    E: "#000",
  });

  useEffect(() => {
    if (theme) {
      const newBranchColorL = theme === "light" ? "#501d00" : "#f8fafc";
      const newBranchColorE = theme === "light" ? "#501d00" : "#f8fafc";
      setBranchColor({ L: newBranchColorL, E: newBranchColorE });
    }
  }, [theme]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.3, ease: "power2.in" },
      ).to(titleRef.current, {
        opacity: 0,
        duration: 1.3,
        ease: "power2.out",
        delay: 3.4,
      });
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
            <span className="absolute w-16 top-[3rem] left-[1.9rem] sm:w-24 sm:top-[5.3rem] sm:left-[3rem] z-0">
              <LBranch stopColor={branchColor.L} animate />
            </span>
            es Amis de Tobie
            <span className="absolute w-14 bottom-[1.67rem] right-[1.47rem] sm:w-24 sm:bottom-[3rem] sm:right-[2rem] z-0">
              <EBranch stopColor={branchColor.E} animate />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
