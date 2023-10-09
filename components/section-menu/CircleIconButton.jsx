import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CircleIconButton = ({
  isSelected,
  section,
  expandedSection,
  computedCircleLeft,
  isDesktop,
}) => {
  const initialAnimation = { opacity: 0 };

  const DESKTOP_Y_POSITION = isSelected ? "-130%" : "0%";
  const MOBILE_Y_POSITION = isSelected ? "-70%" : "70%";

  const animateProps = {
    opacity: isSelected && section.id !== expandedSection ? 1 : 0,
    y: isDesktop ? DESKTOP_Y_POSITION : MOBILE_Y_POSITION,
  };

  const transitionProps = { duration: 1.1, ease: "backInOut" };

  return (
    <motion.div
      className={`absolute w-5 bottom-9 ${
        isSelected ? "pointer-events-auto" : "pointer-events-none"
      }`}
      initial={initialAnimation}
      animate={animateProps}
      transition={transitionProps}
      style={{
        left: computedCircleLeft,
      }}
    >
      <Link href={section.slug.current}>
        <Image
          className="hover:-rotate-90 transition"
          src="/assets/circle.svg"
          width={100}
          height={100}
          alt="circle"
        />
      </Link>
    </motion.div>
  );
};

export default CircleIconButton;
