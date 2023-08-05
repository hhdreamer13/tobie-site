"use client";

/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import NextImage from "next/image";
import { ScrollTrigger } from "gsap/all";
import useLeafExitAnimation from "./useLeafExitAnimation";
import useTobieRunAnimation from "./useTobieRunAnimation";
import useTitleAnimation from "./useTitleAnimation";
import useBackgroundChangeAnimation from "./useBackgroundChangeAnimation";
import useTextAnimation from "./useTextAnimation";
import useFormAnimation from "./useFormAnimation";
import useScrollIconAnimation from "./useScrollIconAnimation";

gsap.registerPlugin(ScrollTrigger);

// Mobile browser screen size unchange with scrolling
// ScrollTrigger.normalizeScroll(true);
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
const AboutUs = () => {
  const scrollPages = 11;

  // Refs

  const tobieRef = useRef();
  const bgRef = useRef();
  const bgSecRef = useRef();

  const titleRef = useRef();
  const textRef = useRef();
  const formRef = useRef();

  const scrollRef = useRef();

  // Scroll to the top of the page whenever the component is mounted
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const { group1Refs, group2Refs, group3Refs, group4Refs, group5Refs } =
    useLeafExitAnimation();

  useTobieRunAnimation(tobieRef, bgRef, frameCount, images);
  useTitleAnimation(titleRef);
  useBackgroundChangeAnimation(bgSecRef);
  useTextAnimation(textRef);
  useFormAnimation(formRef);
  useScrollIconAnimation(scrollRef);

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
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group5Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group5-bushes-bottom.webp"
            alt="Decor Tobie"
            data-group="5"
            data-position="bottom"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group5Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group5-rock-right.webp"
            alt="Decor Tobie"
            data-group="5"
            data-position="right-bottom"
          />
          {/* Group 4 */}
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group4Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group4-bushes-left.webp"
            alt="Decor Tobie"
            data-group="4"
            data-position="left-bottom"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group4Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group4-bushes-right.webp"
            alt="Decor Tobie"
            data-group="4"
            data-position="right-bottom"
          />
          {/* Group 3 */}
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group3Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group3-branch-left.webp"
            alt="Decor Tobie"
            data-group="3"
            data-position="left"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group3Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group3-branch-right.webp"
            alt="Decor Tobie"
            data-group="3"
            data-position="right-top"
          />
          {/* Group 2 */}
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group2Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group2-leaf-bottom.webp"
            alt="Decor Tobie"
            data-group="2"
            data-position="bottom"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group2Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group2-leaf-left-bottom.webp"
            alt="Decor Tobie"
            data-group="2"
            data-position="left-bottom"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group2Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group2-leaf-left-top.webp"
            alt="Decor Tobie"
            data-group="2"
            data-position="left-top"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group2Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group2-leaf-right-top.webp"
            alt="Decor Tobie"
            data-group="2"
            data-position="right-top"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group2Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group2-leaf-right.webp"
            alt="Decor Tobie"
            data-group="2"
            data-position="right"
          />
          {/* Group 1 */}
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group1Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group1-leaf-left-bottom.webp"
            alt="Decor Tobie"
            data-group="1"
            data-position="left-bottom"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group1Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group1-leaf-left-top.webp"
            alt="Decor Tobie"
            data-group="1"
            data-position="left-top"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group1Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group1-leaf-right-bottom.webp"
            alt="Decor Tobie"
            data-group="1"
            data-position="right-bottom"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={(el) => group1Refs.current.push(el)}
            className="fullscreenImage absolute"
            src="/leaf/group1-leaf-right-top.webp"
            alt="Decor Tobie"
            data-group="1"
            data-position="right-top"
          />
          <NextImage
            fill="true"
            priority={true}
            sizes="100vh"
            ref={bgSecRef}
            style={{ opacity: 0 }}
            className="fullscreenImage absolute"
            src="/leaf/bg-secondary.webp"
            alt="background Tobie 2"
          />
          {/* Scroll icon */}
          <div
            ref={scrollRef}
            className="fullscreenImage absolute flex h-full w-full rotate-180 items-center justify-center sm:rotate-0"
          >
            <div className="relative h-[60px] w-[30px] rounded-[15px] border-[3px] border-solid border-amber-200">
              <div className="absolute bottom-[34px] left-1 top-1 w-4 animate-[scroller_2000ms_ease-out_infinite] rounded-lg bg-lime-300"></div>
            </div>
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
              <h1 className="text-center font-mottona">
                <span className="">Les Amis de</span> <br />
                <span className="text-[12rem]">Tobie</span>
              </h1>
            </div>
          </header>
          {/* Text */}
          <section className="fullscreenImage absolute">
            <div
              ref={textRef}
              className="mx-2 flex h-full flex-col items-center justify-center gap-10 px-2 text-center"
            >
              <h2 className="font-caveat text-2xl leading-normal text-slate-900 md:text-3xl">
                Tobie et ses amis sont sur le point d'arriver ! <br />
                Une aventure incroyable nous attend. <br />
                Sois parmi les premiers à le savoir.
              </h2>
            </div>
          </section>
          {/* Form */}
          <section
            ref={formRef}
            className="fullscreenImage absolute"
            style={{ opacity: 0 }}
          >
            <div className="mx-2 mt-24 flex h-full flex-col items-center justify-center gap-10 px-2 text-center">
              {/* <InputForm showModal={showModal} setShowModal={setShowModal} /> */}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutUs;
