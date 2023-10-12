"use client";

/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import NextImage from "next/image";
import { ScrollTrigger } from "gsap/all";
import Lenis from "@studio-freight/lenis";
import useDeviceType from "@/hooks/useDeviceType";

import useLeafExitAnimation from "./useLeafExitAnimation";
import useTobieRunAnimation from "./useTobieRunAnimation";
import useTitleAnimation from "./useTitleAnimation";
import useScrollIconAnimation from "./useScrollIconAnimation";

import VersesText from "./VersesText";

// Leaf images
import group2Top from "public/leaf/2-top.webp";
import group3Right from "public/leaf/3-right.webp";
import group4Left from "public/leaf/4-left.webp";
import group5Bottom from "public/leaf/5-bottom.webp";

import group1LeafLeftBottom from "public/leaf/group1-leaf-left-bottom.webp";
import group1LeafLeftTop from "public/leaf/group1-leaf-left-top.webp";
import group1LeafRightBottom from "public/leaf/group1-leaf-right-bottom.webp";
import group1LeafRightTop from "public/leaf/group1-leaf-right-top.webp";

import LBranch from "../home/LBranch";
import EBranch from "../home/EBranch";

gsap.registerPlugin(ScrollTrigger);

// Mobile browser screen size unchange with scrolling
ScrollTrigger.normalizeScroll(true);
ScrollTrigger.config({ ignoreMobileResize: true });

gsap.config({
  autoSleep: 30,
  force3D: true,
});

const frameCount = 49; // Number of frames in your animation
const images = []; // Array to store your image frames

// Load each image frame into the array
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = `/tobie/tobie${i + 1}.webp`;
  images.push(img);
}

/**
 * Component
 */
const TobieConte = ({ verseImages }) => {
  const scrollPages = 35;

  const verses = verseImages.verseAndImage.map(
    (verseImage) => verseImage.verse,
  );

  const backgrounds = verseImages.verseAndImage.map(
    (verseImage) => verseImage.imageSrc,
  );

  // Refs

  const tobieRef = useRef();
  const bgRef = useRef();

  const titleRef = useRef();

  const scrollRef = useRef();

  const { group1Refs, group2Refs, group3Refs, group4Refs, group5Refs } =
    useLeafExitAnimation();

  useTobieRunAnimation(tobieRef, bgRef, frameCount, images);
  useTitleAnimation(titleRef);
  useScrollIconAnimation(scrollRef);

  // Back to top button
  const [showButton, setShowButton] = useState(false);

  const isDesktop = useDeviceType();

  useEffect(() => {
    // Handle scroll event
    const handleScroll = () => {
      const windowHeight = window.innerHeight; // The height of the browser window
      const fullDocumentHeight = document.documentElement.scrollHeight; // The height of the whole document
      const scrolled = window.scrollY; // Amount of pixels scrolled

      // If the user is within, say, 200 pixels from the bottom, show the button
      if (windowHeight + scrolled + 200 >= fullDocumentHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({});

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup all GSAP animations and triggers
      gsap.globalTimeline.clear();
      ScrollTrigger.getAll().forEach((st) => st.kill());

      // Cleanup Lenis
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div style={{ height: `${scrollPages * 100}vh` }}>
        <main className="fixed h-screen w-full overflow-hidden">
          {/* Background Image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={bgRef}
            className="fullscreenImage absolute"
            src="/leaf/bg-1080.webp"
            alt="background 1 Tobie"
          />

          {/* Tobie animation */}
          <canvas
            ref={tobieRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2"
            id="sprite"
          />

          {/* Group 5 */}
          <NextImage
            width={960}
            height={540}
            ref={(el) => group5Refs.current.push(el)}
            className="fullscreenImage absolute"
            src={group5Bottom}
            alt="Decor Tobie"
            data-group="5"
            data-position="bottom"
          />
          {/* Group 4 */}
          <NextImage
            width={960}
            height={540}
            ref={(el) => group4Refs.current.push(el)}
            className="fullscreenImage absolute"
            src={group4Left}
            alt="Decor Tobie"
            data-group="4"
            data-position="left-bottom"
          />
          {/* Group 3 */}
          <NextImage
            width={960}
            height={540}
            ref={(el) => group3Refs.current.push(el)}
            className="fullscreenImage absolute"
            src={group3Right}
            alt="Decor Tobie"
            data-group="3"
            data-position="right"
          />
          {/* Group 2 */}
          <NextImage
            width={960}
            height={540}
            ref={(el) => group2Refs.current.push(el)}
            className="fullscreenImage absolute"
            src={group2Top}
            alt="Decor Tobie"
            data-group="2"
            data-position="top"
          />

          {/* Group 1 */}
          {(isDesktop === null || isDesktop) && (
            <>
              <NextImage
                width={960}
                height={540}
                ref={(el) => group1Refs.current.push(el)}
                className="fullscreenImage absolute"
                src={group1LeafLeftBottom}
                alt="Decor Tobie"
                data-group="1"
                data-position="left-bottom"
              />
              <NextImage
                width={960}
                height={540}
                ref={(el) => group1Refs.current.push(el)}
                className="fullscreenImage absolute"
                src={group1LeafLeftTop}
                alt="Decor Tobie"
                data-group="1"
                data-position="left-top"
              />
              <NextImage
                width={960}
                height={540}
                ref={(el) => group1Refs.current.push(el)}
                className="fullscreenImage absolute"
                src={group1LeafRightBottom}
                alt="Decor Tobie"
                data-group="1"
                data-position="right-bottom"
              />
              <NextImage
                width={960}
                height={540}
                ref={(el) => group1Refs.current.push(el)}
                className="fullscreenImage absolute"
                src={group1LeafRightTop}
                alt="Decor Tobie"
                data-group="1"
                data-position="right-top"
              />
            </>
          )}

          {/* Scroll icon */}
          <div
            ref={scrollRef}
            className="fullscreenImage absolute flex flex-col gap-5 h-full w-full items-center justify-center "
          >
            <div className="relative flex justify-center items-center h-16 w-8 rounded-full border-2 border-solid border-amber-400">
              <div className="w-5 rounded-full bg-lime-500 scroll-down">
                <NextImage
                  className="relative"
                  src="/assets/down.svg"
                  alt="scroll down"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <p className="text-amber-500 text-xl font-caveat">Descendez !</p>
          </div>
          {/* Text Tobie */}
          <header
            ref={titleRef}
            className="fullscreenImage absolute"
            style={{
              opacity: 0,
              fontSize: "10rem",
              color: "rgb(15 23 42)",
              lineHeight: "0.9em",
            }}
          >
            <div className="flex h-full flex-col items-center justify-center">
              <div className="flex flex-col justify-center items-center">
                <h2 className="relative font-mottona text-7xl sm:text-9xl text-main text-center brush-text w-[15rem] sm:w-[25rem]">
                  L
                  <span className="absolute w-16 top-[2.8rem] left-[1.6rem] sm:w-24 sm:top-[5rem] sm:left-[2.4rem] ">
                    <LBranch stopColor="#7a4619" />
                  </span>
                  es Amis de Tobie
                  <span className="absolute w-14 bottom-[1.9rem] right-[1.68rem] sm:w-24 sm:bottom-[3.4rem] sm:right-[2.38rem]">
                    <EBranch stopColor="#b06700" />
                  </span>
                </h2>
              </div>
            </div>
          </header>
          {/* Text */}
          {verses.map((verse, index) => (
            <VersesText
              key={index}
              verse={verse}
              index={index}
              totalVerses={verses.length}
              bgImage={backgrounds[index]}
            />
          ))}

          {/* Back to top button */}
          {showButton && (
            <div className="fullscreenImage absolute flex flex-col gap-5 h-full w-full items-center justify-center">
              <button
                className="relative p-3 w-14 h-14 z-20 rounded-full bg-slate-950 bg-opacity-50 animate-bounce"
                onClick={scrollToTop}
              >
                <NextImage
                  className="rotate-180 transition-transform"
                  src="/assets/down.svg"
                  width={100}
                  height={100}
                  alt="circle"
                />
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default TobieConte;
