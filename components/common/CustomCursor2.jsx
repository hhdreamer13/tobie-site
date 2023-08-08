/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef } from "react";

/**
 * CSS Codes
 * 
 * #custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; 
  will-change: transform, width, height;
  z-index: 9999;
  transition:
    width 0.3s ease,
    height 0.3s ease; 
}
* #custom-cursor-shadow {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%); 
  pointer-events: none; 
  will-change: transform, width, height; 
  z-index: 9999;
  transition:
    width 0.3s ease,
    height 0.3s ease; 
}
 */

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorShadowRef = useRef(null);

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let currentXShadow = 0;
  let currentYShadow = 0;
  const damping = 0.25;
  const dampingShadow = 0.1;

  const updateCursor = () => {
    // Linear interpolation (lerp)
    currentX += (mouseX - currentX) * damping;
    currentY += (mouseY - currentY) * damping;
    currentXShadow += (mouseX - currentXShadow) * dampingShadow;
    currentYShadow += (mouseY - currentYShadow) * dampingShadow;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
    if (cursorShadowRef.current) {
      cursorShadowRef.current.style.transform = `translate(${currentXShadow}px, ${currentYShadow}px)`;
    }

    setTimeout(() => {
      requestAnimationFrame(updateCursor);
    }, 1000 / 120); // approx 60fps
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX - 10; // Adjust for circle's size
      mouseY = e.clientY - 10;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Start the animation loop
    updateCursor();

    return () => {
      // Clean up the event listener when the component is unmounted
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="bg-rose-200 mix-blend-exclusion w-5 h-5 transition-transform duration-100"
        ref={cursorShadowRef}
        id="custom-cursor-shadow"
      ></div>
      <div
        className="bg-rose-500 mix-blend-exclusion w-5 h-5 transition-transform duration-100"
        ref={cursorRef}
        id="custom-cursor"
      ></div>
    </>
  );
};

export default CustomCursor;
