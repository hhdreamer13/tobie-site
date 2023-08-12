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

  const currentPdf = pdfs[currentIndex];

  useEffect(() => {
    audioRef.current.volume = 0.4; // This sets the volume to 50%
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
          className="relative"
          animate={{ rotate: rotation }}
          transition={{
            type: "spring",
            stiffness: 100, // adjust these values for different spring effects
            damping: 20,
          }}
          onClick={toggleRotation}
          style={{
            clipPath: "polygon(44% 70%, 56% 70%, 64% 100%, 36% 100%)",
          }}
        >
          <Image
            className="object-cover relative w-[280] h-[280px] sm:w-[340px] sm:h-[340px]"
            src="/photos/handle-circle.webp"
            alt=""
            width={280}
            height={280}
          />
        </motion.div>
      </div>

      <a
        href={currentPdf.downloadLink}
        className="absolute bottom-20 sm:bottom-44 left-1/2 transform -translate-x-1/2 z-50 p-4 text-main text-lg"
      >
        {currentPdf.title}
      </a>
    </div>
  );
};

export default ImageCarousel;
