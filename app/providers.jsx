"use client";

import Loader from "@/components/common/Loader";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

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
