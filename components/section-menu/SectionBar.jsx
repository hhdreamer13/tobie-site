import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import useDeviceType from "@/hooks/useDeviceType";
import CloseButton from "./CloseButton";
import CircleIconButton from "./CircleIconButton";
import SectionTitle from "./SectionTitle";
import { memo } from "react";

const SectionBar = memo(function SectionBar({
  index,
  section,
  isSelected,
  position,
  handleClick,
  handleClose,
  expandedSection,
  handleMouseEnter,
  collapsingSection,
  setCollapsingSection,
}) {
  const isDesktop = useDeviceType();
  const { theme } = useTheme();

  console.log("rendered");

  // Compute the left position value
  const computedTextLeft = `calc(${position}% - 50px)`;
  const computedCircleLeft = `calc(${position}% - 10px)`;

  const zIndexClass =
    section.id === expandedSection || section.id === collapsingSection
      ? "z-10"
      : "z-0";

  return (
    <>
      {/* Section Title */}
      <SectionTitle
        isSelected={isSelected}
        section={section}
        expandedSection={expandedSection}
        computedTextLeft={computedTextLeft}
      />

      {/* Section Card */}
      <motion.div
        className={`absolute rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 border-2 ${zIndexClass} object-cover`}
        key={section.id}
        initial={false}
        animate={
          expandedSection === section.id
            ? {
                width: isDesktop ? 600 : 300,
                height: isDesktop ? 500 : 400,
                top: "50%",
                left: "50%",
                borderColor: theme === "light" ? "#fff" : "#020617",
              }
            : {
                width: 40,
                height: 380,
                top: isSelected ? "43%" : "50%",
                left: `${position}%`,
                borderColor: "rgba(255, 255, 255, 0)",
              }
        }
        exit={{ y: -100, opacity: 0 }}
        transition={{
          width: { duration: 1, ease: "backInOut" },
          height: { duration: 1, ease: "backInOut" },
          top: {
            duration:
              expandedSection === section.id || collapsingSection === section.id
                ? 1
                : 0.8,
            ease:
              expandedSection === section.id || collapsingSection === section.id
                ? "backInOut"
                : "backInOut",
          },
          left: { duration: 1, ease: "backInOut" },
          // borderColor: { duration: 1, ease: "anticipate" },
          // default: { duration: 1, ease: "backInOut" },
        }}
        onAnimationComplete={() => {
          if (expandedSection === -1) {
            setCollapsingSection(-1);
          }
        }}
        onClick={() => handleClick(section.id)}
        onMouseEnter={() => handleMouseEnter(index)}
      >
        {/* Section Image */}
        <Image
          src={theme === "dark" ? section.imageSrcNuit : section.imageSrcJour}
          alt={section.title}
          className="object-cover"
          fill={true}
        />
        {/* Vertical Text */}
        {/* <div className="absolute top-0 left-0 text-slate-950 flex justify-center items-center h-full w-full">
          <span
            className="py-4 bg-slate-50/30 font-newspaper text-sm rounded-lg"
            style={{
              writingMode: "vertical-rl",
              letterSpacing: "10px", // Adjust this value as needed
              textOrientation: "upright",
            }}
          >
            {section.title}
          </span>
        </div> */}

        {/* Inner Section */}
        <motion.div
          className="w-full h-full flex flex-col justify-end items-center gap-6"
          initial={{ opacity: 0, y: "10%" }}
          animate={
            expandedSection === section.id
              ? {
                  opacity: 1,
                  y: "0%",
                  transition: {
                    duration: 1,
                    delay: 0.7,
                    ease: "easeInOut",
                  },
                }
              : {
                  opacity: 0,
                  y: "10%",
                  transition: {
                    duration: 0.7,
                    delay: 0,
                    ease: "easeInOut",
                  },
                }
          }
        >
          {/* Close Button */}
          <CloseButton
            isExpanded={expandedSection === section.id}
            onClick={handleClose}
          />

          {/* Circle Button */}
          <Link
            href={section.url}
            className={
              expandedSection === section.id
                ? "pointer-events-auto"
                : "pointer-events-none"
            }
          >
            <motion.button
              className="group flex justify-center items-center w-12 h-12 z-20 rounded-full bg-slate-950 bg-opacity-50 animate-bounce"
              initial={{ opacity: 0 }}
              animate={
                expandedSection === section.id
                  ? {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1.2,
                        ease: "backInOut",
                      },
                    }
                  : {
                      opacity: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0,
                        ease: "backInOut",
                      },
                    }
              }
            >
              <Image
                className="relative w-6 h-6 transition-transform group-hover:scale-110 group-hover:-rotate-90 group-focus:scale-105"
                src="/assets/circle.svg"
                width={100}
                height={100}
                alt="circle"
              />
            </motion.button>
          </Link>

          {/* Inner Text */}
          <div className="p-5 w-full text-center text-slate-950 dark:text-slate-100 bg-opacity-50 pointer-events-none bg-gradient-to-t from-slate-50 dark:from-slate-950">
            <h2 className="text-xl sm:text-2xl uppercase">{section.title}</h2>
            <p className="mt-5 mb-2 w-full sm:w-3/5 mx-auto text-sm font-nunito">
              {section.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* Outer Bottom Circle */}
      <CircleIconButton
        isSelected={isSelected}
        section={section}
        expandedSection={expandedSection}
        computedCircleLeft={computedCircleLeft}
      />
    </>
  );
});

export default SectionBar;
