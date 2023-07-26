import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const fadeInOut = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const scaleRotate = {
  hidden: { scale: 0.1, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: "backOut" },
  },
  exit: {
    scale: 0.1,
    rotate: -180,
    transition: { duration: 0.5, ease: "backIn" },
  },
};

const SectionModal = ({ children, isOpen, setIsOpen }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    setIsOpen(false);

    setTimeout(() => {
      router.back();
    }, 500);
  }, [router, setIsOpen]);

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

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <AnimatePresence exitBeforeEnter>
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
            className="w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
            variants={scaleRotate}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionModal;
