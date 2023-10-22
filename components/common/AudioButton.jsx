"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const audioOn = {
  on: { x: 0, opacity: 1, scale: 1, rotate: 0 },
  off: { x: -40, opacity: 0, scale: 0.8, rotate: 90 },
};

const audioOff = {
  on: { x: 40, opacity: 0, scale: 0.8, rotate: -90 },
  off: { x: 0, opacity: 1, scale: 1, rotate: 0 },
};

const wiggle = {
  scale: [1, 1.05, 1, 1.05, 1],
  rotate: [0, 5, -5, 5, 0],
  transition: { duration: 0.5 },
};

const tooltipVariants = {
  hidden: { opacity: 0, x: 20, y: -10, scale: 0.5 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: { opacity: 0, x: 20, y: -10, scale: 0.5 },
};

const AudioButton = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    setShowTooltip(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 4000); // Hide after 4 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!audioEnabled) {
      // This would mute all audio elements on the page
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => {
        audio.muted = true;
      });
    } else if (audioEnabled) {
      const audios = document.querySelectorAll("audio");
      audios.forEach((audio) => {
        audio.muted = false;
      });
    }
  }, [audioEnabled]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {showTooltip && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tooltipVariants}
            transition={{ duration: 1, ease: "backInOut", delay: 1 }}
            className="absolute top-7 -left-20 bg-black/30 backdrop-blur-md p-2 rounded-lg rounded-tr-none"
          >
            <p className="drop-shadow-sm text-slate-50 font-caveat text-sm">
              Activer le Son
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        aria-label="Toggle Audio"
        type="button"
        className="flex items-center justify-center relative overflow-hidden m-0 sm:m-1 bg-black/20 backdrop-blur-md p-5 rounded-full transition-transform duration-500"
        onClick={toggleAudio}
      >
        <motion.div
          variants={audioOn}
          initial="light"
          animate={audioEnabled ? "on" : "off"}
          whileHover={wiggle}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute p-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M12 19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C7 18.1193 8.11929 17 9.5 17C10.8807 17 12 18.1193 12 19.5Z"
                stroke="#ffffff"
                strokeWidth="1.5"
              ></path>{" "}
              <path
                d="M22 17.5C22 18.8807 20.8807 20 19.5 20C18.1193 20 17 18.8807 17 17.5C17 16.1193 18.1193 15 19.5 15C20.8807 15 22 16.1193 22 17.5Z"
                stroke="#ffffff"
                strokeWidth="1.5"
              ></path>{" "}
              <path
                d="M22 8L12 12"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M14.4556 5.15803L14.7452 5.84987L14.4556 5.15803ZM16.4556 4.32094L16.1661 3.62909L16.4556 4.32094ZM21.1081 3.34059L20.6925 3.96496L20.6925 3.96496L21.1081 3.34059ZM12.75 19.0004V8.84787H11.25V19.0004H12.75ZM22.75 17.1542V8.01078H21.25V17.1542H22.75ZM14.7452 5.84987L16.7452 5.01278L16.1661 3.62909L14.1661 4.46618L14.7452 5.84987ZM22.75 8.01078C22.75 6.67666 22.752 5.59091 22.6304 4.76937C22.5067 3.93328 22.2308 3.18689 21.5236 2.71622L20.6925 3.96496C20.8772 4.08787 21.0473 4.31771 21.1466 4.98889C21.248 5.67462 21.25 6.62717 21.25 8.01078H22.75ZM16.7452 5.01278C18.0215 4.47858 18.901 4.11263 19.5727 3.94145C20.2302 3.77391 20.5079 3.84204 20.6925 3.96496L21.5236 2.71622C20.8164 2.24554 20.0213 2.2792 19.2023 2.48791C18.3975 2.69298 17.3967 3.114 16.1661 3.62909L16.7452 5.01278ZM12.75 8.84787C12.75 8.18634 12.751 7.74991 12.7875 7.41416C12.822 7.09662 12.8823 6.94006 12.9594 6.8243L11.7106 5.99325C11.4527 6.38089 11.3455 6.79864 11.2963 7.25218C11.249 7.68752 11.25 8.21893 11.25 8.84787H12.75ZM14.1661 4.46618C13.5859 4.70901 13.0953 4.91324 12.712 5.12494C12.3126 5.34549 11.9686 5.60562 11.7106 5.99325L12.9594 6.8243C13.0364 6.70855 13.1575 6.59242 13.4371 6.438C13.7328 6.27473 14.135 6.10528 14.7452 5.84987L14.1661 4.46618Z"
                fill="#ffffff"
              ></path>{" "}
              <path
                opacity="0.5"
                d="M7 11V2C7 4.07107 8.75736 5 10 5M7 10.5C7 11.8807 5.88071 13 4.5 13C3.11929 13 2 11.8807 2 10.5C2 9.11929 3.11929 8 4.5 8C5.88071 8 7 9.11929 7 10.5Z"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </motion.div>

        <motion.div
          variants={audioOff}
          initial="light"
          animate={audioEnabled ? "on" : "off"}
          whileHover={wiggle}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute p-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.6589 6C16.5186 5.20217 16.2887 4.68467 15.8669 4.37163C15.7026 4.24973 15.5186 4.15089 15.3286 4.08241C14.3375 3.72527 13.1569 4.54728 10.7955 6.1913L10.5922 6.33284C10.1953 6.60922 9.99677 6.74741 9.78309 6.84699C9.57186 6.94543 9.34985 7.01576 9.12219 7.05635C8.89189 7.09742 8.65414 7.09742 8.17865 7.09742C6.90287 7.09742 6.26498 7.09742 5.70846 7.3693C5.19999 7.61771 4.69153 8.12289 4.42579 8.64369C4.13493 9.21371 4.10072 9.80635 4.0323 10.9916C4.01206 11.3423 4 11.6839 4 12C4 12.3161 4.01206 12.6577 4.0323 13.0084C4.10072 14.1936 4.13493 14.7863 4.42579 15.3563C4.69153 15.8771 5.19999 16.3823 5.70846 16.6307C6.26498 16.9026 6.90287 16.9026 8.17865 16.9026C8.65414 16.9026 8.89189 16.9026 9.12219 16.9436C9.34985 16.9842 9.57186 17.0546 9.78309 17.153C9.99677 17.2526 10.1953 17.3908 10.5922 17.6672L10.7955 17.8087C13.1569 19.4527 14.3375 20.2747 15.3286 19.9176C15.5186 19.8491 15.7026 19.7503 15.8669 19.6284C16.2887 19.3153 16.5186 18.7978 16.6589 18"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M20 9.00002L14 15M14 9L19.9999 15"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
        </motion.div>
      </button>
    </div>
  );
};

export default AudioButton;
