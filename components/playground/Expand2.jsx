"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import sections from "@/utils/sections";

const Expand = () => {
  const images = sections.map((s) => s.imageSrc);
  const [expanded, setExpanded] = useState({});
  const [zIndices, setZIndices] = useState({});

  useEffect(() => {
    const initialState = images.reduce((obj, img, index) => {
      const key = `img${index}`;
      obj[key] = false;
      return obj;
    }, {});
    setExpanded(initialState);
    setZIndices(initialState);
  }, [images]);

  const handleClick = (imgKey) => {
    const isExpanding = !expanded[imgKey];

    setExpanded({
      ...expanded,
      [imgKey]: isExpanding,
    });

    if (isExpanding) {
      setZIndices({
        ...zIndices,
        [imgKey]: 1,
      });
    } else {
      setTimeout(() => {
        setZIndices({
          ...zIndices,
          [imgKey]: 0,
        });
      }, 1000); // Delay should match your animation duration
    }
  };

  const centerPosition = 50 - (images.length - 1) * 5; // Subtracting (number of images - 1) * 5 to calculate the center

  return (
    <div className="bg-slate-400 w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-[500px] h-[500px] border relative">
        {images.map((imgSrc, index) => {
          const imgKey = `img${index}`;
          const position = centerPosition + index * 10; // Add index * 10 to calculate the position of each image

          return (
            <motion.div
              key={imgKey}
              layout
              initial={false}
              animate={
                expanded[imgKey]
                  ? { width: 500, height: 500, top: "50%", left: "50%" }
                  : { width: 44, height: 300, top: "50%", left: `${position}%` }
              }
              transition={{ duration: 1, ease: "backInOut" }}
              className={`rounded-xl bg-rose-500 absolute overflow-hidden transform -translate-x-1/2 -translate-y-1/2 ${
                expanded[imgKey] ? "w-96 h-96" : "w-24 h-24"
              }`}
              style={{
                borderRadius: "20px",
                objectFit: "cover",
                zIndex: zIndices[imgKey],
              }}
              onClick={() => handleClick(imgKey)}
            >
              <Image
                src={imgSrc}
                alt="test"
                layout="fill"
                objectFit="cover"
                className="absolute w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Expand;
