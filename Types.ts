import { ReactNode } from "react";

export type ThemeType = {
  [key: string]: string;
};

export type Themes = {
  dark: ThemeType;
  light: ThemeType;
  purple: ThemeType;
  teal: ThemeType;
  orange: ThemeType;
  blue: ThemeType;
};

export type ThemeName = keyof Themes;

export type ThemeContextType = {
  theme: { mainColor: ThemeName; mode: "light" | "dark" };
  setMode: (mode: "light" | "dark") => void;
  setColor: (color: ThemeName) => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};
