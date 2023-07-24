"use client";

import { createContext, useState } from "react";

export const BackgroundImageContext = createContext();

export const BackgroundImageProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  return (
    <BackgroundImageContext.Provider
      value={{ backgroundImage, setBackgroundImage }}
    >
      {children}
    </BackgroundImageContext.Provider>
  );
};
