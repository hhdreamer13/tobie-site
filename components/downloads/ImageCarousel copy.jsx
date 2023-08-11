"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pdfs from "@/utils/downloads";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(30);

  const direction = useRef();
  const audioRef = useRef(null);

  const slideTransition = {
    hidden: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      translateX: direction > 0 ? -200 : 200,
      translateY: 200,
      scale: 0.8,
      opacity: 0,
    }),
    visible: {
      rotateY: 0,
      translateX: 0,
      translateY: 0,
      scale: 1,
      opacity: 1,
      transition: {
        rotateY: { type: "spring", stiffness: 300, damping: 30 },
        translateX: { type: "spring", stiffness: 300, damping: 30 },
        translateY: { type: "spring", stiffness: 300, damping: 30 },
        scale: { duration: 0.5 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      translateX: direction > 0 ? 200 : -200,
      translateY: 200,
      scale: 0.8,
      opacity: 0,
    }),
  };

  const toggleRotation = () => {
    setRotation(-35);

    if (currentIndex < pdfs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // loop back to the first image
    }
    direction.current = 1; // right to left
    if (audioRef.current) {
      audioRef.current.play();
    }

    // After a short delay, begin the slower return rotation
    setTimeout(() => {
      setRotation(30);
    }, 400);
  };

  const handleNext = () => {
    if (currentIndex < pdfs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // loop back to the first image
    }
    direction.current = 1; // right to left
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(pdfs.length - 1); // loop to the last image
    }
    direction.current = -1; // left to right
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const currentPdf = pdfs[currentIndex];

  useEffect(() => {
    audioRef.current.volume = 0.4; // This sets the volume to 50%
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center items-center w-full min-h-screen">
        <Image
          src="/photos/download-page-foreground.webp"
          alt="Scene"
          fill={true}
          quality={100}
          sizes="100vh"
          className="object-cover"
        />
        <AnimatePresence mode="wait" custom={direction.current}>
          <motion.div
            key={currentIndex}
            custom={direction.current}
            variants={slideTransition}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute"
            style={{ clipPath: "circle(50% at 50% 50%)" }} // Circular clip for View-Master effect
          >
            {/* Cover Image */}
            <Image
              src={currentPdf.imageSrc}
              alt={currentPdf.title}
              width={500}
              height={500}
              priority={true}
              className="object-fill"
            />
          </motion.div>
        </AnimatePresence>
        {/* Blend effect */}
        <div className="">
          <Image
            src="/photos/download-page-foreground.webp"
            alt="Scene"
            fill={true}
            quality={100}
            sizes="100vh"
            className="object-cover mix-blend-overlay"
          />
        </div>

        {/* Background */}
        <Image
          src="/photos/download-page-9.webp"
          alt="Scene"
          fill={true}
          quality={100}
          sizes="100vh"
          className="object-cover"
        />
      </div>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/click2.wav" preload="auto"></audio>

      {/* Handle */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        style={{ transformOrigin: "50% 50%" }}
        animate={{ rotate: rotation }}
        transition={{
          type: "spring",
          stiffness: 100, // adjust these values for different spring effects
          damping: 20,
        }}
      >
        <circle
          cx="50%"
          cy="50%"
          r="90"
          stroke="transparent"
          strokeWidth="4"
          fill="none" // Gray circle for visibility
        />

        <foreignObject
          x="calc(50% - 20px)" // Half of the new width to center it
          y="calc(50% + 75px)" // Adjusted to keep the image at the bottom of the circle
          width="40"
          height="70"
          onClick={toggleRotation} // Add the onClick directly here
          className="cursor-move"
        >
          <svg width="40" height="70" xmlns="http://www.w3.org/2000/svg">
            <image
              href="/photos/handle.webp"
              width="40"
              height="70"
              x="0"
              y="0"
            />
          </svg>
        </foreignObject>
      </motion.svg>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-slate-100/40 rounded-full"
      >
        Précedent
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-slate-100/40 rounded-full"
      >
        Suivant
      </button>

      <a
        href={currentPdf.downloadLink}
        className="absolute bottom-48 left-1/2 transform -translate-x-1/2 z-10 p-4 text-main rounded-lg"
      >
        {currentPdf.title}
      </a>
    </div>
  );
};

export default ImageCarousel;
