import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import backgroundImage from "../../public/photos/download-page-background.webp";
import circleImage from "../../public/photos/circle-crop.webp";
import windowImage from "../../public/photos/window-frame.webp";
import handleImage from "../../public/photos/handle-circle.webp";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";

const BackgroundStack = ({
  downloadItems,
  currentIndex,
  setCurrentIndex,
  currentItem,
}) => {
  const [rotation, setRotation] = useState(30);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = 0.4; // This sets the volume to 50%
  }, []);

  const slideTransition = {
    hidden: {
      scaleX: 0,
      scaleY: 0,
      translateX: -80, // Adjust these values for finer control over the starting position
      translateY: 80, // Adjust this value for finer control over the starting position
      opacity: 0,
    },
    visible: {
      scaleX: 1,
      scaleY: 1,
      translateX: 0,
      translateY: 0,
      opacity: 1,
      transition: {
        scaleX: { type: "spring", stiffness: 200, damping: 30 },
        scaleY: { type: "spring", stiffness: 200, damping: 30 },
        translateX: { type: "spring", stiffness: 200, damping: 30 },
        translateY: { type: "spring", stiffness: 200, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: {
      scaleX: 0,
      scaleY: 1,
      translateX: 0, // Adjust these values for finer control over the exit position
      translateY: 0, // Adjust this value for finer control over the exit position
      opacity: 0,
      transition: {
        opacity: { duration: 0.3 },
      },
    },
  };

  const toggleRotation = () => {
    setRotation(-35);

    if (currentIndex < downloadItems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // loop back to the first image
    }

    if (audioRef.current) {
      audioRef.current.play();
    }

    // After a short delay, begin the slower return rotation
    setTimeout(() => {
      setRotation(30);
    }, 350);
  };
  return (
    <>
      {/* Background */}
      <div className="absolute w-full min-h-screen">
        <Image
          src={backgroundImage}
          alt="Scene"
          fill={true}
          quality={100}
          sizes="100vh"
          className="object-cover"
        />
      </div>

      {/* Inner Circle */}
      <div className="absolute">
        <Image
          src={circleImage}
          alt="Scene"
          width={300}
          height={300}
          className="object-cover w-[230px] h-[230px] sm:w-[300px] sm:h-[300px]"
        />
      </div>

      {/* Cover Image with clipping */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideTransition}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute"
          style={{ clipPath: "circle(27% at 50% 50%)" }}
        >
          {currentItem && (
            <Image
              src={currentItem.imageSrc}
              alt={currentItem.title}
              width={450}
              height={450}
              priority={true}
              placeholder="blur"
              blurDataURL={getShimmerPlaceholder(300, 300)}
              className="object-cover w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Blend effect */}
      <div className="absolute">
        <Image
          src={circleImage}
          alt="Scene"
          width={300}
          height={300}
          className="object-cover mix-blend-overlay will-change-transform w-[230px] h-[230px] sm:w-[300px] sm:h-[300px]"
        />
      </div>

      {/* Window */}
      <div className="absolute">
        <Image
          src={windowImage}
          alt="Scene"
          width={300}
          height={300}
          quality={100}
          priority={true}
          className="object-cover w-[230px] h-[230px] sm:w-[300px] sm:h-[300px]"
        />
      </div>

      {/* Handle with rotation */}
      <motion.div
        className="absolute"
        animate={{ rotate: rotation }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        style={{
          clipPath: "polygon(44% 70%, 56% 70%, 64% 100%, 36% 100%)",
        }}
        onClick={toggleRotation}
      >
        <Image
          src={handleImage}
          alt=""
          priority={true}
          width={400}
          height={400}
          className="object-cover w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
        />
      </motion.div>
      {/* Sound */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/click2.wav" preload="auto"></audio>
    </>
  );
};

export default BackgroundStack;
