import { motion } from "framer-motion";
import Image from "next/image";

const SectionBarControl = ({
  sections,
  expandedSection,
  changeSection,
  currentSection,
}) => {
  return (
    <>
      <motion.div
        className={`relative flex justify-center items-center gap-6 text-slate-50 ${
          expandedSection !== -1 ? "pointer-events-none" : "pointer-events-auto"
        }`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: expandedSection !== -1 ? 0 : 1,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <button
          className="px-6 py-1 border border-white rounded-full duration-300 hover:scale-105 opacity-90"
          onClick={() => changeSection(-1)}
        >
          <Image
            src="/assets/left.svg"
            width={100}
            height={100}
            alt="circle"
            className="w-5 h-5"
          />
        </button>
        <div className="flex flex-col justify-center items-center w-32 h-14 opacity-90">
          <p className="text-lg">
            {currentSection !== -1
              ? sections[currentSection].title
              : "Sélectionnez"}
          </p>
          <p className="text-sm text-center w-full truncate">
            {currentSection !== -1 ? sections[currentSection].description : ""}
          </p>
        </div>
        <button
          className="px-6 py-1 border border-white rounded-full duration-300 backdrop-blur-md hover:scale-105 opacity-90"
          onClick={() => changeSection(1)}
        >
          <Image
            className="w-5 h-5"
            src="/assets/right.svg"
            width={100}
            height={100}
            alt="circle"
          />
        </button>
      </motion.div>
    </>
  );
};

export default SectionBarControl;
