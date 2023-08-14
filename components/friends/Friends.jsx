"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import "./gridStyles.css";

gsap.registerPlugin(ScrollTrigger);

const Friends = () => {
  const gridRef = useRef(null);

  const singleSetOfImagePaths = Array.from(
    { length: 19 },
    (_, i) => `/images/logos/logo${i + 1}.webp`,
  );

  const imagePaths = Array.from(
    { length: 38 },
    (_, i) => singleSetOfImagePaths[i % 19],
  );

  const generateGridStyles = (rowCount, colCount, size) => {
    const gridStyles = [];

    for (let i = 0; i < size; i++) {
      gridStyles.push({
        "--r": Math.floor(Math.random() * rowCount) + 1,
        "--c": Math.floor(Math.random() * colCount) + 1,
      });
    }

    return gridStyles;
  };

  const gridStyles = generateGridStyles(38, 5, 38);

  useEffect(() => {
    // Lenis initialization
    const lenis = new Lenis();
    const gridItems = [...gridRef.current.children];

    gridItems.forEach((item) => {
      const image = item.querySelector(".grid__item-img");
      const xPercentRandomVal = gsap.utils.random(-100, 100);

      gsap
        .timeline()
        .addLabel("start", 0)
        .set(
          image,
          {
            transformOrigin: `${xPercentRandomVal < 0 ? 0 : 100}% 100%`,
          },
          "start",
        )
        .to(
          image,
          {
            ease: "none",
            scale: 0,
            scrollTrigger: {
              trigger: item,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start",
        )
        .to(
          item,
          {
            ease: "none",
            xPercent: xPercentRandomVal,
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          },
          "start",
        );
    });

    // GSAP ScrollTrigger integration with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup the ScrollTrigger animations on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grid-container w-full">
      <div
        className="grid relative w-full grid-col-5 grid-row-[38, minmax(0, 1fr)]"
        ref={gridRef}
      >
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className="grid__item"
            style={gridStyles[index % 19]}
          >
            <div
              className="grid__item-img"
              style={{ backgroundImage: `url(${path})` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="fixed w-full h-screen top-0 left-0 flex flex-col items-center justify-center pointer-events-none">
        <h2 className="font-mottona text-9xl m-0 drop-shadow-xl">
          Les Amis de Tobie
        </h2>
        {/* <h3 className="text-[1.5rem] font-medium m-0">Scroll Down</h3> */}
      </div>

      <div className="h-screen text-[5vh] leading-5 relative not-italic flex items-center justify-center">
        <p className="max-w-[40ch]">Nous sommes les amis de tobie</p>
      </div>
    </div>
  );
};

export default Friends;
