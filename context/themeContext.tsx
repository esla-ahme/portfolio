import {
  FontSize,
  ThemeContextType,
  ThemeName,
  ThemeProviderProps,
} from "@/Types";
import { themes } from "@/styles/colors";
import React, { useEffect, useState, createContext, useContext } from "react";

const FONT_SIZE_MAP: Record<FontSize, string> = {
  small: "14px",
  medium: "16px",
  large: "18px",
};

const VALID_COLORS: ThemeName[] = ["purple", "teal", "orange", "blue"];
const VALID_MODES = ["light", "dark"] as const;
const VALID_FONT_SIZES: FontSize[] = ["small", "medium", "large"];

const ThemeContext = createContext<ThemeContextType>({
  theme: { mainColor: "purple", mode: "dark", fontSize: "medium" },
  setMode: () => {},
  setColor: () => {},
  setFontSize: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState({
    mainColor: "purple" as ThemeName,
    mode: "dark" as "light" | "dark",
    fontSize: "medium" as FontSize,
  });

  // Load saved preferences from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode") as "light" | "dark" | null;
    const savedColor = localStorage.getItem("theme-color") as ThemeName | null;
    const savedFontSize = localStorage.getItem("theme-font-size") as FontSize | null;

    setCurrentTheme({
      mainColor: savedColor && VALID_COLORS.includes(savedColor) ? savedColor : "purple",
      mode: savedMode && (VALID_MODES as readonly string[]).includes(savedMode) ? savedMode : "dark",
      fontSize: savedFontSize && VALID_FONT_SIZES.includes(savedFontSize) ? savedFontSize : "medium",
    });
  }, []);

  const setMode = (mode: "light" | "dark") => {
    setCurrentTheme((prev) => ({ ...prev, mode }));
    localStorage.setItem("theme-mode", mode);
  };

  const setColor = (mainColor: ThemeName) => {
    setCurrentTheme((prev) => ({ ...prev, mainColor }));
    localStorage.setItem("theme-color", mainColor);
  };

  const setFontSize = (fontSize: FontSize) => {
    setCurrentTheme((prev) => ({ ...prev, fontSize }));
    localStorage.setItem("theme-font-size", fontSize);
  };

  // Apply color CSS variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(themes[currentTheme.mainColor]).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    );
  }, [currentTheme.mainColor]);

  // Apply mode CSS variables
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(themes[currentTheme.mode]).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    );
  }, [currentTheme.mode]);

  // Apply font size CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--font-size",
      FONT_SIZE_MAP[currentTheme.fontSize]
    );
  }, [currentTheme.fontSize]);

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setColor, setMode, setFontSize }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
