"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import pdfs from "@/utils/downloads";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = () => {
  const [currentIndex] = useState(1);

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

  const currentPdf = pdfs[currentIndex];

  useEffect(() => {
    audioRef.current.volume = 0.4; // This sets the volume to 50%
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-950 justify-center items-center bg-cover">
      {/* Inner Circle */}
      <div className="absolute w-full h-full">
        <Image
          src="/photos/download-page-foreground.webp"
          alt="Scene"
          fill={true}
          sizes="100vh"
          quality={100}
          className="object-cover relative opacity-40"
        />
      </div>

      {/* Cover Image */}
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
          <Image
            src={currentPdf.imageSrc}
            alt={currentPdf.title}
            width={500}
            height={500}
            priority={true}
            className="object-fill w-auto h-auto"
          />
        </motion.div>
      </AnimatePresence>

      {/* Blend effect */}
      <div className="absolute w-full h-full">
        <Image
          src="/photos/download-page-foreground.webp"
          alt="Scene"
          fill={true}
          quality={100}
          sizes="100vh"
          className="object-cover relative mix-blend-overlay"
        />
      </div>

      {/* Background */}
      <div className="absolute w-full min-h-screen">
        <Image
          src="/photos/download-page-11.webp"
          alt="Scene"
          fill={true}
          quality={100}
          sizes="100vh"
          className="object-cover"
        />
      </div>

      {/* Text/Button */}
      <div className="relative z-10">
        <a href={currentPdf.downloadLink} className="text-main text-lg ">
          {currentPdf.title}
        </a>
      </div>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/click2.wav" preload="auto"></audio>
    </div>
  );
};

export default ImageCarousel;
