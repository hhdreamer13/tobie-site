import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import slugify from "@/utils/slugify";

const SectionBar = ({
  index,
  section,
  isDesktop,
  isSelected,
  position,
  handleClick,
  handleClose,
  expandedSection,
  handleMouseEnter,
  setCollapsingZIndex,
  expandedZIndex,
  collapsingZIndex,
}) => {
  return (
    <>
      {/* Section Title */}
      <motion.p
        className="absolute text-center text-slate-100"
        animate={{
          opacity: isSelected && section.id !== expandedSection ? 1 : 0,
          y: isSelected ? "-30%" : "70%",
        }}
        transition={{ duration: 1.1, ease: "backInOut" }}
        style={{
          width: "100px",
          left: `calc(${position}% - 50px)`,
          opacity: "0",
        }}
      >
        {section.title}
      </motion.p>

      {/* Section Card */}
      <motion.div
        className="absolute rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 border-2"
        key={section.id}
        layout
        initial={false}
        animate={
          expandedSection === section.id
            ? {
                width: isDesktop ? 600 : 300,
                height: isDesktop ? 500 : 400,
                top: "50%",
                left: "50%",
                borderColor: "#020617",
              }
            : {
                width: 40,
                height: 380,
                top: isSelected ? "43%" : "50%",
                left: `${position}%`,
                borderColor: "rgba(255, 255, 255, 0)",
              }
        }
        transition={{
          duration: 1,
          ease: "backInOut",
          borderColor: { duration: 1, ease: "anticipate" },
        }}
        onAnimationComplete={() => {
          if (expandedSection === -1) {
            setCollapsingZIndex(-1);
          }
        }}
        style={{
          objectFit: "cover",
          zIndex:
            section.id === expandedZIndex || section.id === collapsingZIndex
              ? 1
              : 0,
        }}
        onClick={() => handleClick(section.id)}
        onMouseEnter={() => handleMouseEnter(index)}
      >
        {/* Section Image */}
        <Image
          src={section.imageSrc}
          alt={section.title}
          fill="true"
          priority={true}
          sizes="100vh"
          className="object-cover"
        />

        {/* Inner Section */}
        <motion.div
          className="w-full h-auto sm:h-full flex flex-col-reverse sm:flex-col justify-start sm:justify-end items-center gap-6"
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
          <motion.button
            className={`absolute flex justify-center items-center top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 m-2 z-20 ${
              expandedSection === section.id
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
            initial={{ opacity: 0 }}
            animate={
              expandedSection === section.id
                ? {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1.3,
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
            onClick={handleClose}
          >
            <Image
              className="relative w-6 h-6 sm:w-8 sm:h-8 transition-transform drop-shadow-md hover:-rotate-90 focus:scale-110"
              src="/assets/close8.svg"
              width={100}
              height={100}
              alt="circle"
            />
          </motion.button>

          {/* Circle Button */}
          <motion.button
            className={`group flex justify-center items-center w-12 h-12 z-20 rounded-full bg-slate-950 bg-opacity-50 animate-bounce ${
              expandedSection === section.id
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
            initial={{ opacity: 0 }}
            animate={
              expandedSection === section.id
                ? {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1.3,
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
            <Link href={`sections/${slugify(section.title)}`}>
              <Image
                className="relative w-6 h-6 transition-transform drop-shadow-md group-hover:scale-125 group-hover:-rotate-90 group-focus:scale-110"
                src="/assets/circle.svg"
                width={100}
                height={100}
                alt="circle"
              />
            </Link>
          </motion.button>
          {/* Inner Text */}
          <div className="p-5 w-full text-center text-slate-100 drop-shadow-md bg-opacity-50 pointer-events-none bg-gradient-to-b sm:bg-gradient-to-t from-slate-950">
            <h2 className="text-xl sm:text-2xl uppercase">{section.title}</h2>
            <p className="mt-5 mb-2 w-full sm:w-3/5 mx-auto text-sm font-nunito">
              {section.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* Outer Bottom Circle */}
      <motion.div
        className="absolute bottom-9"
        animate={{
          opacity: isSelected && section.id !== expandedSection ? 1 : 0,
          y: isSelected ? "-130%" : "0%",
        }}
        transition={{ duration: 1.3, ease: "backInOut" }}
        style={{
          width: "20px",
          left: `calc(${position}% - 10px)`,
          opacity: "0",
        }}
      >
        <Image src="/assets/circle.svg" width={100} height={100} alt="circle" />
      </motion.div>
    </>
  );
};

export default SectionBar;
