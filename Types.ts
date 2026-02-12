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

export type FontSize = "small" | "medium" | "large";

export type ThemeContextType = {
  theme: { mainColor: ThemeName; mode: "light" | "dark"; fontSize: FontSize };
  setMode: (mode: "light" | "dark") => void;
  setColor: (color: ThemeName) => void;
  setFontSize: (size: FontSize) => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};

export interface IArticle {
  title: string;
  brief: string;
  date: string;
  coverImage: string;
  url: string;
  views: number;
  tags: string[];
}

export interface IArticles {
  articles: IArticle[];
}