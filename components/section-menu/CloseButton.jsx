import { motion } from "framer-motion";
import MinimizeIcon from "../common/MinimizeIcon";

const CloseButton = ({ isExpanded, onClick }) => {
  const initialAnimation = { opacity: 0 };
  const expandedAnimation = {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 1.5,
      ease: "backInOut",
    },
  };
  const collapsedAnimation = {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0,
      ease: "backInOut",
    },
  };

  const handleClick = (event) => {
    event.stopPropagation();
    onClick(event);
  };

  return (
    <motion.button
      className={`absolute flex justify-center rounded-none sm:rounded-full items-center top-0 right-0 w-8 h-8 sm:w-9 sm:h-9 z-20 ${
        isExpanded ? "pointer-events-auto" : "pointer-events-none"
      }`}
      initial={initialAnimation}
      animate={isExpanded ? expandedAnimation : collapsedAnimation}
      onClick={handleClick}
    >
      <div className="w-7 h-7 rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center">
        <MinimizeIcon className="w-6 h-6 hover:scale-105" />
      </div>
    </motion.button>
  );
};

export default CloseButton;
