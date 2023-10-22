"use client";

import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
import AudioButton from "./AudioButton";

const UtilityButton = () => {
  const pathname = usePathname();

  // Don't display the navbar on admin routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  if (pathname.startsWith("/sections/conte")) {
    return <AudioButton />;
  }

  return <ThemeButton />;
};

export default UtilityButton;
