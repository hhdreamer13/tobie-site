"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const Expand = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-slate-400 w-full min-h-screen flex flex-col justify-center items-center gap-20">
      <div className="w-[400px] h-[400px] border flex justify-center items-center">
        <motion.div
          layout
          initial={false}
          animate={
            expanded
              ? { width: "44px", height: "300px" }
              : { width: "400px", height: "400px" }
          }
          transition={{ duration: 1, ease: "backInOut" }}
          className={`rounded-xl bg-rose-500 overflow-hidden relative ${
            expanded ? "w-11 h-96" : "w-full h-full"
          }`}
          data-expanded={expanded}
          style={{
            borderRadius: "20px",
            objectFit: "cover",
          }}
        >
          <Image
            src="/photos/05.webp"
            alt="test"
            fill="true"
            priority={true}
            sizes="100vh"
            className="object-cover"
          />
        </motion.div>
      </div>
      <div>
        <button
          className="px-2 py-1 w-20 bg-teal-300 border rounded-md border-slate-900"
          onClick={() => setExpanded(!expanded)}
        >
          expand
        </button>
      </div>
    </div>
  );
};

export default Expand;
