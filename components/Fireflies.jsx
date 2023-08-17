"use client";

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const FIREFLIES = 10;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const Firefly = ({ color = "yellow" }) => {
  const firefliesRef = useRef([]);

  useEffect(() => {
    const maxHeight = window.innerHeight;
    const maxWidth = window.innerWidth;

    firefliesRef.current = firefliesRef.current.slice(0, FIREFLIES);

    firefliesRef.current.forEach((firefly, i) => {
      let ix = random(0, maxWidth);
      let fx = random(0, maxWidth);

      let iy = random(-10, maxHeight + 10);
      let fy = random(-10, maxHeight + 10);

      gsap.fromTo(
        firefly,
        {
          x: ix,
          y: iy,
        },
        {
          x: fx,
          y: fy,
          duration: random(5, 15),
          ease: "rough({template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp:false})",
          repeat: -1,
          yoyo: true,
        },
      );
      gsap.fromTo(
        firefly,
        {
          boxShadow: "0 0 0 0px rgba(154, 205, 50, 0)",
        },
        {
          boxShadow: "0 0 0 3px rgba(154, 205, 50, 0.4)",
          duration: random(2, 4),
          ease: "slow (0.7, 0.7, false)",
          repeat: -1,
          yoyo: true,
        },
      );
      gsap.fromTo(
        firefly,
        {
          opacity: 0,
        },
        {
          duration: random(1, 5),
          opacity: 0.9,
          repeat: -1,
          yoyo: true,
        },
      );
    });
  }, []);

  const fireflies = [];
  for (let i = 0; i < FIREFLIES; i++) {
    fireflies.push(
      <div
        key={i}
        className="firefly"
        style={{ background: color }}
        ref={(el) => (firefliesRef.current[i] = el)}
      />,
    );
  }

  return <div>{fireflies}</div>;
};

export default Firefly;
