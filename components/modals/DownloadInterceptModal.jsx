"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import DownloadFrame from "../frames/DownloadFrame";

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "backInOut" } },
  exit: { opacity: 0, transition: { duration: 0.7, ease: "backInOut" } },
};

const scaleRotate = {
  hidden: { scale: 0.1, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 1, ease: "backInOut" },
  },
  exit: {
    scale: 0.1,
    rotate: -180,
    transition: { duration: 0.7, ease: "backInOut" },
  },
};

const DownloadInterceptModal = ({ post }) => {
  const [isOpen, setIsOpen] = useState(true); // Assuming the modal should be open initially

  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  const handleExitComplete = useCallback(() => {
    if (!isOpen) {
      router.back();
    }
  }, [router, isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isOpen && (
        <motion.div
          key="modal"
          ref={overlay}
          className="fixed z-10 inset-0 flex items-center justify-center bg-black/60"
          onClick={onClick}
          variants={fadeInOut}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            ref={wrapper}
            className="w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6 h-4/5"
            variants={scaleRotate}
          >
            <DownloadFrame post={post} setIsOpen={setIsOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadInterceptModal;
