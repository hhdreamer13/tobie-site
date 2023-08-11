"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pdfs from "@/utils/downloads";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(35);
  const [translateValues, setTranslateValues] = useState({
    x: "0px",
    y: "0px",
  });

  const direction = useRef();
  const audioRef = useRef(null);
  const handleRef = useRef(null);

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
      setRotation(35);
    }, 400);
  };

  const currentPdf = pdfs[currentIndex];

  useEffect(() => {
    audioRef.current.volume = 0.4; // This sets the volume to 50%
  }, []);

  useEffect(() => {
    if (handleRef.current) {
      // Sample logic: calculate the translation based on the element's dimensions.
      // You'd replace this with your actual calculations.
      const rect = handleRef.current.getBoundingClientRect();
      setTranslateValues({
        x: `calc(50% - ${rect.width / 10}px)`,
        y: `calc(50% + ${rect.height / 0.65}px)`,
      });
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-center items-center w-full min-h-screen">
        {/* Inner Circle */}
        <Image
          src="/photos/download-page-foreground.webp"
          alt="Scene"
          fill={true}
          quality={100}
          sizes="100vh"
          className="object-cover opacity-40"
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

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          ref={handleRef}
          className="relative"
          animate={{ rotate: rotation }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62.26 255.08"
            width="40"
            height="60"
            style={{
              transform: `translate(${translateValues.x}, ${translateValues.y})`,
            }}
            onClick={toggleRotation}
          >
            <path
              fill="#e7e6da"
              d="M44.34,236.88c7.24-36.6-21.44-102.72-22.01-130.94-.99-48.73,21.97-57.62,29.4-73.03,.02-.05,.04-.09,.06-.13,2.03-3.28,3.22-7.13,3.22-11.27C55.01,9.63,45.38,0,33.51,0,24.47,0,16.75,5.58,13.57,13.47c0,.02-.02,.03-.03,.05C1.06,36.38-3.62,72.06,3.01,96.88c8.5,31.86,23.84,57.48,17.23,127.72-3.29,34.93,18.43,40.95,24.1,12.28Z"
            />
            <path
              fill="#fff0dc"
              d="M51.59,236.88c7.24-36.6-21.44-102.72-22.01-130.94-.99-48.73,21.97-57.62,29.4-73.03,.02-.05,.04-.09,.06-.13,2.03-3.28,3.22-7.13,3.22-11.27C62.26,9.63,52.63,0,40.76,0c-9.03,0-16.75,5.58-19.93,13.47,0,.02-.02,.03-.03,.05C8.31,36.38,3.63,72.06,10.26,96.88c8.5,31.86,23.84,57.48,17.23,127.72-3.29,34.93,18.43,40.95,24.1,12.28Z"
            />
            <path
              stroke="#ab6a28"
              strokeWidth="1"
              fill="none"
              d="M20.82,13.47s-.02,.03-.03,.05C8.31,36.38,3.63,72.06,10.26,96.88c8.5,31.86,23.84,57.48,17.23,127.72"
            />
          </svg>
        </motion.div>
      </div>

      {/* <a
        href={currentPdf.downloadLink}
        className="absolute bottom-60 left-1/2 transform -translate-x-1/2 z-50 p-4 text-main rounded-lg"
      >
        {currentPdf.title}
      </a> */}
    </div>
  );
};

export default ImageCarousel;
