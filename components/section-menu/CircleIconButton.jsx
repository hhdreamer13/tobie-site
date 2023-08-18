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
  return (
    <motion.div
      className={`absolute w-5 bottom-9 ${
        isSelected ? " pointer-events-auto" : " pointer-events-none"
      }`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isSelected && section.id !== expandedSection ? 1 : 0,
        y: isSelected
          ? isDesktop
            ? "-130%"
            : "-70%"
          : isDesktop
          ? "0%"
          : "70%",
      }}
      transition={{ duration: 1.1, ease: "backInOut" }}
      style={{
        // width: "20px",
        left: computedCircleLeft,
        // opacity: "0",
      }}
    >
      <Link href={section.url}>
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
