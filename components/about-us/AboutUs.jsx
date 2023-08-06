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

// import the necessary images for caching
import group5BushesBottom from "public/leaf/group5-bushes-bottom.webp";
import group5RockRight from "public/leaf/group5-rock-right.webp";
import group4BushesLeft from "public/leaf/group4-bushes-left.webp";
import group4BushesRight from "public/leaf/group4-bushes-right.webp";
import group3BranchLeft from "public/leaf/group3-branch-left.webp";
import group3BranchRight from "public/leaf/group3-branch-right.webp";
import group2LeafBottom from "public/leaf/group2-leaf-bottom.webp";
import group2LeafLeftBottom from "public/leaf/group2-leaf-left-bottom.webp";
import group2LeafLeftTop from "public/leaf/group2-leaf-left-top.webp";
import group2LeafRightTop from "public/leaf/group2-leaf-right-top.webp";
import group2LeafRight from "public/leaf/group2-leaf-right.webp";
import group1LeafLeftBottom from "public/leaf/group1-leaf-left-bottom.webp";
import group1LeafLeftTop from "public/leaf/group1-leaf-left-top.webp";
import group1LeafRightBottom from "public/leaf/group1-leaf-right-bottom.webp";
import group1LeafRightTop from "public/leaf/group1-leaf-right-top.webp";
import bgSecondary from "public/leaf/bg-secondary.webp";

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
            src={group5BushesBottom}
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
            src={group5RockRight}
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
            src={group4BushesLeft}
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
            src={group4BushesRight}
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
            src={group3BranchLeft}
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
            src={group3BranchRight}
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
            src={group2LeafBottom}
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
            src={group2LeafLeftBottom}
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
            src={group2LeafLeftTop}
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
            src={group2LeafRightTop}
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
            src={group2LeafRight}
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
            src={group1LeafLeftBottom}
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
            src={group1LeafLeftTop}
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
            src={group1LeafRightBottom}
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
            src={group1LeafRightTop}
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
            src={bgSecondary}
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
              className="mx-auto flex h-full w-3/5 flex-col items-center justify-center gap-10 px-2 text-center"
            >
              <h3 className="text-2xl leading-normal text-slate-900 md:text-3xl">
                L’arbre comme alternative au merchandising de la série
                d’animation
              </h3>
              <p className="text-xl leading-normal text-slate-900 md:text-2xl">
                Nous le savons, les barrières psychologiques à l'action contre
                le changement climatique sont puissantes. Nous sommes de plus en
                plus lucides, documentés, et pourtant toujours aussi
                impuissants. L'information ne suffit pas, il faut être touchés
                dans nos émotions pour se sentir concerné. Nous sommes
                convaincus que les récits inspirants et vraisemblables peuvent
                transformer l'eco-anxiété en éco-empathie et permettre aux gens
                de passer à l'action Nous pouvons contribuer, à notre échelle, à
                limiter la surconsommation et à sensibiliser les générations
                futures aux merveilles qui garantiront leur survie. C'est le
                cœur du projet Les amis de Tobie.
              </p>
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
