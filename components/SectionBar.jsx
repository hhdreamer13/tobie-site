import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SectionBar = ({
  index,
  section,
  theme,
  isDesktop,
  isSelected,
  position,
  handleClick,
  handleClose,
  expandedSection,
  handleMouseEnter,
  collapsingSection,
  setCollapsingSection,
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
        transition={{ duration: 0.8, ease: "backInOut" }}
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
        initial={false}
        animate={
          expandedSection === section.id
            ? {
                width: isDesktop ? 600 : 300,
                height: isDesktop ? 500 : 400,
                top: "50%",
                left: "50%",
                borderColor: theme === "light" ? "#020617" : "#ffffff",
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
                : 0.7,
            ease:
              expandedSection === section.id || collapsingSection === section.id
                ? "backInOut"
                : "anticipate",
          },
          left: { duration: 1, ease: "backInOut" },
          borderColor: { duration: 1, ease: "anticipate" },
          default: { duration: 1, ease: "backInOut" },
        }}
        onAnimationComplete={() => {
          if (expandedSection === -1) {
            setCollapsingSection(-1);
          }
        }}
        style={{
          objectFit: "cover",
          zIndex:
            section.id === expandedSection || section.id === collapsingSection
              ? 1
              : 0,
        }}
        onClick={() => handleClick(section.id)}
        onMouseEnter={() => handleMouseEnter(index)}
      >
        {/* Section Image */}
        <Image
          src={theme === "dark" ? section.imageSrcNuit : section.imageSrcJour}
          alt={section.title}
          fill="true"
          priority={true}
          sizes="100vh"
          className="object-cover"
        />

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
          <motion.button
            className={`absolute flex justify-center rounded-none sm:rounded-full items-center top-0 right-0 w-8 h-8 sm:w-9 sm:h-9 m-2 z-20 ${
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
                      duration: 1.5,
                      delay: 1.5,
                      ease: "backInOut",
                    },
                  }
                : {
                    opacity: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0,
                      ease: "backInOut",
                    },
                  }
            }
            onClick={handleClose}
          >
            <Image
              className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-transform drop-shadow-md hover:-rotate-90 hover:scale-110 focus:scale-105"
              src="/assets/close.svg"
              width={100}
              height={100}
              alt="circle"
            />
          </motion.button>

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
                className="relative w-6 h-6 transition-transform drop-shadow-md group-hover:scale-110 group-hover:-rotate-90 group-focus:scale-105"
                src="/assets/circle.svg"
                width={100}
                height={100}
                alt="circle"
              />
            </motion.button>
          </Link>

          {/* Inner Text */}
          <div className="p-5 w-full text-center text-slate-950 dark:text-slate-100 drop-shadow-md bg-opacity-50 pointer-events-none bg-gradient-to-t from-slate-50 dark:from-slate-950">
            <h2 className="text-xl sm:text-2xl uppercase">{section.title}</h2>
            <p className="mt-5 mb-2 w-full sm:w-3/5 mx-auto text-sm font-nunito">
              {section.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
      {/* Outer Bottom Circle */}
      <motion.div
        className={`absolute bottom-9 ${
          isSelected ? " pointer-events-auto" : " pointer-events-none"
        }`}
        animate={{
          opacity: isSelected && section.id !== expandedSection ? 1 : 0,
          y: isSelected ? "-130%" : "0%",
        }}
        transition={{ duration: 1, ease: "backInOut" }}
        style={{
          width: "20px",
          left: `calc(${position}% - 10px)`,
          opacity: "0",
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
    </>
  );
};

export default SectionBar;
