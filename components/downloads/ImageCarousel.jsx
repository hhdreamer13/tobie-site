"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import pdfs from "@/utils/downloads";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const direction = useRef();

  //   const slideTransition = {
  //     hidden: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  //     visible: {
  //       x: 0,
  //       opacity: 1,
  //       transition: {
  //         x: { type: "spring", stiffness: 300, damping: 30 },
  //         opacity: { duration: 0.5 },
  //       },
  //     },
  //     exit: (direction) => ({ x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  //   };

  const slideTransition = {
    hidden: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
    }),
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        rotateY: { duration: 0.5 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  //   const slideTransition = {
  //     hidden: (direction) => ({ y: direction > 0 ? 1000 : -1000, opacity: 0 }),
  //     visible: {
  //       y: 0,
  //       opacity: 1,
  //       transition: {
  //         y: { type: "spring", stiffness: 300, damping: 30 },
  //         opacity: { duration: 0.5 },
  //       },
  //     },
  //     exit: (direction) => ({ y: direction < 0 ? 1000 : -1000, opacity: 0 }),
  //   };

  //   const slideTransition = {
  //     hidden: (direction) => ({
  //       rotateX: direction > 0 ? -90 : 90, // rotation along the X-axis
  //       scaleY: 0.8, // initial scaled-down state
  //       opacity: 0,
  //     }),
  //     visible: {
  //       rotateX: 0,
  //       scaleY: 1,
  //       opacity: 1,
  //       transition: {
  //         rotateX: { type: "spring", stiffness: 300, damping: 30 },
  //         scaleY: { duration: 0.5 },
  //         opacity: { duration: 0.5 },
  //       },
  //     },
  //     exit: (direction) => ({
  //       rotateX: direction < 0 ? -90 : 90,
  //       scaleY: 0.8,
  //       opacity: 0,
  //     }),
  //   };

  //   const slideTransition = {
  //     hidden: (direction) => ({
  //       rotateY: direction > 0 ? -90 : 90, // rotation along the Y-axis to bring images from side
  //       translateY: direction > 0 ? -200 : 200, // moving along the Y-axis to simulate the arcing
  //       scale: 0.5, // initial scaled-down state
  //       opacity: 0,
  //     }),
  //     visible: {
  //       rotateY: 0,
  //       translateY: 0,
  //       scale: 1,
  //       opacity: 1,
  //       transition: {
  //         rotateY: { type: "spring", stiffness: 300, damping: 30 },
  //         translateY: { type: "spring", stiffness: 300, damping: 30 },
  //         scale: { duration: 0.5 },
  //         opacity: { duration: 0.5 },
  //       },
  //     },
  //     exit: (direction) => ({
  //       rotateY: direction < 0 ? -90 : 90,
  //       translateY: direction < 0 ? 200 : -200,
  //       scale: 0.5,
  //       opacity: 0,
  //     }),
  //   };

  // const slideTransition = {
  //   hidden: (direction) => ({
  //     rotateY: direction > 0 ? -90 : 90,
  //     translateX: 1000,
  //     translateY: -1000,
  //     scale: 0.8,
  //     opacity: 0,
  //   }),
  //   visible: {
  //     rotateY: 0,
  //     translateX: 0,
  //     translateY: 0,
  //     scale: 1,
  //     opacity: 1,
  //     transition: {
  //       rotateY: { type: "spring", stiffness: 300, damping: 30 },
  //       translateX: { type: "spring", stiffness: 300, damping: 30 },
  //       translateY: { type: "spring", stiffness: 300, damping: 30 },
  //       scale: { duration: 0.5 },
  //       opacity: { duration: 0.5 },
  //     },
  //   },
  //   exit: (direction) => ({
  //     rotateY: direction > 0 ? 90 : -90,
  //     translateX: 1000,
  //     translateY: 1000,
  //     scale: 0.8,
  //     opacity: 0,
  //   }),
  // };

  const handleNext = () => {
    if (currentIndex < pdfs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // loop back to the first image
    }
    direction.current = 1; // right to left
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(pdfs.length - 1); // loop to the last image
    }
    direction.current = -1; // left to right
  };

  const currentPdf = pdfs[currentIndex];

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
            <Image
              src={currentPdf.imageSrc}
              alt={currentPdf.title}
              width={800}
              height={800}
              className="object-fill"
            />
          </motion.div>
        </AnimatePresence>
        <Image
          src="/photos/download-page-6.webp"
          alt="Scene"
          fill={true}
          quality={100}
          sizes="100vh"
          //   hidden
          className="object-cover"
        />
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white bg-opacity-60 rounded-full focus:outline-none transition-transform hover:-translate-y-1/2 hover:scale-105"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-4 bg-white bg-opacity-60 rounded-full focus:outline-none transition-transform hover:-translate-y-1/2 hover:scale-105"
      >
        →
      </button>
      <a
        href={currentPdf.downloadLink}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 p-4 bg-main text-main rounded-lg focus:outline-none"
      >
        Télécharger {currentPdf.title}
      </a>
    </div>
  );
};

export default ImageCarousel;
