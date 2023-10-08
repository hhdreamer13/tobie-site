import { motion } from "framer-motion";
import ArrowIcon from "../common/arrowIcon";

const SectionBarControl = ({
  sections,
  expandedSection,
  changeSection,
  currentSection,
  theme,
}) => {
  const isSpecialCase = currentSection === -1 && theme === "light";
  const borderColorClass = isSpecialCase
    ? "border-slate-950"
    : "border-slate-50";
  const textColorClass = isSpecialCase ? "text-slate-950" : "text-slate-50";

  return (
    <>
      <motion.div
        className={`relative flex justify-center items-center gap-6 ${
          expandedSection !== -1 ? "pointer-events-none" : "pointer-events-auto"
        }`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: expandedSection !== -1 ? 0 : 1,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <button
          className={`px-6 py-1 border ${borderColorClass} ${textColorClass} rounded-full duration-300 hover:scale-105`}
          onClick={() => changeSection(-1)}
        >
          <div className="w-5 h-5">
            <ArrowIcon className="w-5 h-5 rotate-180" />
          </div>
        </button>
        <div
          className={`flex flex-col justify-center items-center w-32 h-14 opacity-90 ${textColorClass}`}
        >
          <p className="text-lg font-caveat">
            {currentSection !== -1
              ? sections[currentSection].title
              : "Sélectionnez"}
          </p>
          <p className="text-sm text-center w-full truncate font-caveat">
            {currentSection !== -1 ? sections[currentSection].description : ""}
          </p>
        </div>
        <button
          className={`px-6 py-1 border ${borderColorClass} ${textColorClass} rounded-full duration-300 hover:scale-105`}
          onClick={() => changeSection(1)}
        >
          <div className="w-5 h-5">
            <ArrowIcon className="w-5 h-5" />
          </div>
        </button>
      </motion.div>
    </>
  );
};

export default SectionBarControl;
