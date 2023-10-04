"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SVG_WIDTH = 800;
const SVG_HEIGHT = 600;

const Confetti = () => {
  const mainSVG = useRef(null);
  const confetti = useRef(null);
  const container = useRef(null);

  //   const colorArray = ["#42c2f1", "#fbda4f", "#ab63df", "#5fc581"];
  const colorArray = ["#FFB6C1", "#FFDAB9", "#B0E0E6", "#F5DEB3"];
  //   const colorArray = ["#FF4500", "#32CD32", "#4169E1", "#FFD700"];
  // const colorArray = ["#FFFFFF", "#CCCCCC", "#999999", "#666666"];
  //   const colorArray = ["#34495E", "#16A085", "#C0392B", "#2980B9"];
  //   const colorArray = ["#2ECC71", "#E74C3C", "#3498DB", "#F39C12"];
  //   const colorArray = ["#D32F2F", "#1976D2", "#388E3C", "#8E44AD"];

  useEffect(() => {
    const confettiTl = gsap.timeline({ paused: true });

    const playConfetti = () => confettiTl.play(0);

    function createConfetti() {
      let i = 160,
        clone,
        tl,
        rot,
        duration,
        paperDuration;
      while (--i > -1) {
        tl = gsap.timeline();
        clone = confetti.current.cloneNode(true);
        container.current.appendChild(clone);
        rot = gsap.utils.random(0, 360);
        duration = gsap.utils.random(3, 9);
        paperDuration = duration / 20;
        gsap.set(clone, {
          fill: gsap.utils.random(colorArray),
          rotation: rot,
          transformOrigin: "50% 50%",
        });

        tl.fromTo(
          clone,
          {
            x: gsap.utils.random(0, 800),
            y: gsap.utils.random(-250, -50),
            rotation: rot,
          },
          {
            duration: duration,
            x: "+=" + gsap.utils.random(-200, 200),
            y: 650,
            rotation: "+=180",
            ease: "linear",
          },
        ).to(
          clone.querySelector(".paper"),
          {
            duration: duration / 23,
            scaleY: 0.1,
            repeat: 23,
            yoyo: true,
          },
          0,
        );
        //console.log(paperDuration)
        confettiTl.add(tl, i / 200).timeScale(2.3);
      }

      gsap.set("svg", {
        visibility: "visible",
      });

      gsap.set(".paper", {
        transformOrigin: "50% 50%",
      });
    }

    createConfetti();

    let tl = gsap.timeline();
    tl.add(playConfetti, "+=1");

    // Start anim - plays once
    gsap.from("#one, #numberGroup path", {
      stagger: { each: 0.05 },
      scaleY: 0,
      delay: 0.6,
      duration: 0.8,
      transformOrigin: "50% 100%",
      ease: "elastic(0.73, 0.6)",
    });

    // Loop the gradient bar
    gsap.to("#gradPattern", {
      attr: { x: 556 },
      duration: 2,
      repeat: -1,
      ease: "linear",
    });

    // Cleanup function if the component unmounts
    return () => {
      tl.kill();
      confettiTl.kill();
    };
  }, []);

  return (
    <svg
      ref={mainSVG}
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="codepenGrad"
          x1="0"
          y1="383.12"
          x2="556"
          y2="383.12"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#42c2f1" />
          <stop offset="0.2" stopColor="#fbda4f" />
          <stop offset="0.6" stopColor="#ab63df" />
          <stop offset="0.8" stopColor="#5fc581" />
          <stop offset="1" stopColor="#42c2f1" />
        </linearGradient>
        <pattern
          id="gradPattern"
          width="556"
          height="62.4"
          x="0"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            fill="url(#codepenGrad)"
            width="556"
            height="62.4"
          />
        </pattern>
        <clipPath id="numberMask">
          <rect
            className="numberMask"
            x="122.36"
            y="204.62"
            width="547.24"
            height="176.58"
            fill="red"
          />
        </clipPath>
        <clipPath id="thankYouMask">
          <rect
            className="thankYouMask"
            x="-500"
            y="204.62"
            width="615"
            height="176.58"
            fill="#29abe2"
          />
        </clipPath>
        <path
          id="one_mid"
          d="M219.16,266.34h0v-62.6l15.24-.12V389.93H219.16Z"
        />
        <path
          id="one_end"
          d="M219.16,266.34h0v-12.9l15.24-.12-1.14,62.58h-13Z"
        />
        <g ref={confetti} className="confetti">
          <rect className="paper" width="13" height="8" />
        </g>
      </defs>
      <g ref={container} className="container" />
    </svg>
  );
};

export default Confetti;
