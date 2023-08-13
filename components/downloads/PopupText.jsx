import { motion } from "framer-motion";

const PopupText = ({ text }) => {
  const textVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 2.5,
      opacity: 1,
      transition: {
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
          delay: 0.12,
        },
        opacity: {
          duration: 0.7,
          ease: [0.43, 0.13, 0.23, 0.96],
          delay: 0.12,
        },
      },
    },
    exit: {
      scale: 5,
      opacity: 0,
      transition: {
        scale: {
          duration: 0.7,
          ease: "backInOut",
        },
        opacity: {
          duration: 0.7,
          ease: "anticipate",
        },
      },
    },
  };

  return (
    <motion.p
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={textVariants}
      className="text-lg absolute top-1/2 bg-slate-950/40 text-slate-100 px-2 py-1 rounded-lg "
    >
      {text}
    </motion.p>
  );
};

export default PopupText;
