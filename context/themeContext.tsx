import {
  ThemeContextType,
  ThemeName,
  ThemeProviderProps,
} from "@/Types";
import { themes } from "@/styles/colors";
import React, { useEffect, useState, createContext, useContext } from "react";

const ThemeContext = createContext<ThemeContextType>({
  theme: { mainColor: "purple", mode: "dark" },
  setMode: () => {},
  setColor: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState({
    mainColor: "purple" as ThemeName,
    mode: "dark" as "light" | "dark",
  });

  const setTheme = ({
    mainColor,
    mode,
  }: {
    mainColor: ThemeName;
    mode: "light" | "dark";
  }) => {
    setCurrentTheme({ mainColor, mode });
  };

  const setMode = (mode: "light" | "dark") =>
    setTheme({ mainColor: currentTheme.mainColor, mode });

  const setColor = (mainColor: ThemeName) =>
    setTheme({ mainColor, mode: currentTheme.mode });

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(themes[currentTheme.mainColor]).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    );
  }, [currentTheme.mainColor]);

  useEffect(() => {
    console.log("mode changed: " + currentTheme.mode);
    const root = document.documentElement;
    Object.entries(themes[currentTheme.mode]).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    );
  }, [currentTheme.mode]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setColor, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
