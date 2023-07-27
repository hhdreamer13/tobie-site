"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Expand = () => {
  const [expanded, setExpanded] = useState({});
  const [zIndices, setZIndices] = useState({});

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

  return (
    // <AnimatePresence>
    <div className="bg-slate-400 w-full min-h-screen flex flex-col justify-center items-center gap-20">
      <div className="w-[400px] h-[400px] border flex justify-center items-center relative">
        <motion.div
          layout
          initial={false}
          animate={
            expanded.img1
              ? { width: 400, height: 400 }
              : { width: 100, height: 100 }
          }
          transition={{ duration: 1, ease: "backInOut" }}
          className={`rounded-xl bg-rose-500 absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 ${
            expanded.img1 ? "w-96 h-96" : "w-24 h-24"
          }`}
          style={{
            borderRadius: "20px",
            objectFit: "cover",
            zIndex: zIndices.img1,
          }}
          onClick={() => handleClick("img1")}
        >
          <Image
            src="/photos/05.webp"
            alt="test"
            layout="fill"
            objectFit="cover"
            className="absolute w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          layout
          initial={false}
          animate={
            expanded.img2
              ? { width: 400, height: 400 }
              : { width: 100, height: 100 }
          }
          transition={{ duration: 1, ease: "backInOut" }}
          className={`rounded-xl bg-rose-500 absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 ${
            expanded.img2 ? "w-96 h-96" : "w-24 h-24"
          }`}
          style={{
            borderRadius: "20px",
            objectFit: "cover",
            zIndex: zIndices.img2,
          }}
          onClick={() => handleClick("img2")}
        >
          <Image
            src="/photos/06.webp"
            alt="test"
            layout="fill"
            objectFit="cover"
            className="absolute w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
    // </AnimatePresence>
  );
};

export default Expand;
