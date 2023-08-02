import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorSize, setCursorSize] = useState(20); // Initialize cursor size

  useEffect(() => {
    if (cursorRef.current == null) return;

    const handleMouseMove = (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " +
          (e.pageY - cursorSize / 2) +
          "px; left: " +
          (e.pageX - cursorSize / 2) +
          "px;",
      );
    };

    const handleMouseClick = () => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add("expand");
      cursorRef.current.addEventListener("animationend", () => {
        cursorRef.current.classList.remove("expand");
      });
    };

    const handleMouseOver = ({ target }) => {
      if (target.classList.contains("clickable")) {
        cursorRef.current.classList.add("large");
        setCursorSize(40); // Set cursor size to large
      }
    };

    const handleMouseOut = ({ target }) => {
      if (target.classList.contains("clickable")) {
        cursorRef.current.classList.remove("large");
        setCursorSize(20); // Set cursor size to small
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleMouseClick);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleMouseClick);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorSize]); // cursorSize as a dependency

  return (
    <motion.div
      className="cursor bg-slate-700 mix-blend-difference"
      ref={cursorRef}
      animate={{ width: cursorSize, height: cursorSize }}
      transition={{ duration: 0.3 }}
    ></motion.div>
  );
}
