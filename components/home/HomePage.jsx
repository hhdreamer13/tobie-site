"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SectionMenu from "@/components/section-menu/SectionMenu";
import TitlePage from "@/components/home/TitlePage svg";

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState("title");

  useEffect(() => {
    if (currentSection === "title") {
      const timer = setTimeout(() => {
        setCurrentSection("menu");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  console.log(currentSection);

  return (
    <div className="w-full bg-main flex flex-col justify-center items-center overflow-hidden">
      <AnimatePresence mode="wait">
        {currentSection === "title" && <TitlePage key="title" />}
        {currentSection === "menu" && <SectionMenu key="menu" />}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
