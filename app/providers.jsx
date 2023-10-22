"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import Loader from "@/components/common/Loader";

const Providers = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Loader />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
