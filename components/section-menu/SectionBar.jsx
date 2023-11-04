import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import useDeviceType from "@/hooks/useDeviceType";
import CloseButton from "./CloseButton";
import CircleIconButton from "./CircleIconButton";
import SectionTitle from "./SectionTitle";
import { memo, useCallback, useMemo } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

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
  /**
   * Calculations
   */
  const isDesktop = useDeviceType();
  const { theme } = useTheme();

  const builder = imageUrlBuilder(client);

  // Compute the left position value
  const computedTextLeft = useMemo(
    () => `calc(${position}% - 50px)`,
    [position],
  );
  const computedCircleLeft = useMemo(
    () => `calc(${position}% - 10px)`,
    [position],
  );

  const zIndexClass =
    section._id === expandedSection || section._id === collapsingSection
      ? "z-10"
      : "z-0";

  /**
   * Card animations and functions
   */
  const cardInitialProps = {
    width: 40,
    height: isDesktop ? 380 : 350,
    top: isSelected ? (isDesktop ? "43%" : "50%") : isDesktop ? "50%" : "55%",
    left: `${position}%`,
    borderColor: "rgba(255, 255, 255, 0)",
  };

  const cardExpandedProps = {
    width: isDesktop ? 600 : 300,
    height: isDesktop ? 500 : 400,
    top: "50%",
    left: "50%",
    borderColor: theme === "light" ? "#fff" : "#020617",
  };

  const cardTransitionProps = {
    width: { duration: 1, ease: "backInOut" },
    height: { duration: 1, ease: "backInOut" },
    top: {
      duration:
        expandedSection === section._id || collapsingSection === section._id
          ? 1
          : 0.8,
      ease: "backInOut",
    },
    left: { duration: 1, ease: "backInOut" },
  };

  const handleAnimationComplete = useCallback(() => {
    if (expandedSection === -1) {
      setCollapsingSection(-1);
    }
  }, [expandedSection, setCollapsingSection]);

  const handleCardClick = useCallback(() => {
    handleClick(section._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section._id]);

  /**
   * Inner card animations
   */
  const innerInitialProps = {
    opacity: 0,
    y: "10%",
  };

  const innerExpandedProps = {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 1,
      delay: 0.7,
      ease: "easeInOut",
    },
  };

  const innerCollapsedProps = {
    opacity: 0,
    y: "10%",
    transition: {
      duration: 0.7,
      delay: 0,
      ease: "easeInOut",
    },
  };

  /**
   * Circle button animations
   */
  const circleButtonInitialAnimation = { opacity: 0 };

  const circleButtonExpandedAnimation = {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.2,
      ease: "backInOut",
    },
  };

  const circleButtonCollapsedAnimation = {
    opacity: 0,
    transition: {
      duration: 0.8,
      delay: 0,
      ease: "backInOut",
    },
  };

  const circleButtonAnimationProps =
    expandedSection === section._id
      ? circleButtonExpandedAnimation
      : circleButtonCollapsedAnimation;

  return (
    <>
      {/* Section Title */}
      <SectionTitle
        isSelected={isSelected}
        section={section}
        expandedSection={expandedSection}
        computedTextLeft={computedTextLeft}
        isDesktop={isDesktop}
      />

      {/* Section Card */}
      <motion.div
        className={`absolute rounded-xl overflow-hidden -translate-x-1/2 -translate-y-1/2 border-2 ${zIndexClass} object-cover ${
          expandedSection === section._id ? "" : "cursor-pointer"
        }`}
        key={section._id}
        initial={cardInitialProps}
        animate={
          expandedSection === section._id ? cardExpandedProps : cardInitialProps
        }
        transition={cardTransitionProps}
        onAnimationComplete={handleAnimationComplete}
        onClick={handleCardClick}
        onMouseEnter={() => handleMouseEnter(index)}
      >
        {/* Section Image */}
        <Image
          src={
            theme === "dark"
              ? builder.image(section.imageSrcNuit).width(800).height(600).url()
              : builder.image(section.imageSrcJour).width(800).height(600).url()
          }
          alt={section.title}
          className="object-cover"
          fill={true}
          priority
          sizes="60vw"
        />
        {/* Inner Section to render if expanded */}
        {expandedSection === section._id && (
          <motion.div
            className="w-full h-full flex flex-col justify-end items-center gap-6"
            initial={innerInitialProps}
            animate={
              expandedSection === section._id
                ? innerExpandedProps
                : innerCollapsedProps
            }
          >
            {/* Close Button */}
            <CloseButton
              isExpanded={expandedSection === section._id}
              onClick={handleClose}
            />

            {/* Circle Button */}
            <Link
              href={section.slug.current}
              className={
                expandedSection === section._id
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }
            >
              <motion.button
                className="group flex flex-col gap-1 py-1 justify-center items-center w-12 h-16 z-20 rounded-full bg-slate-950 bg-opacity-50 animate-bounce"
                initial={circleButtonInitialAnimation}
                animate={circleButtonAnimationProps}
              >
                <Image
                  className="relative w-6 h-6 transition-transform group-hover:-rotate-90"
                  src="/assets/circle.svg"
                  width={100}
                  height={100}
                  alt="circle"
                />
                <p className="font-caveat text-xs text-slate-50">Explorez</p>
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
        )}
      </motion.div>
      {/* Outer Bottom Circle */}
      <CircleIconButton
        isSelected={isSelected}
        section={section}
        expandedSection={expandedSection}
        computedCircleLeft={computedCircleLeft}
        isDesktop={isDesktop}
      />
    </>
  );
});

export default SectionBar;
