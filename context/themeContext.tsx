import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";
type ThemeType = {
  [key: string]: string;
};
type Themes = {
  default: ThemeType;
  dark: ThemeType;
  light: ThemeType;
  purple: ThemeType;
  teal: ThemeType;
  orange: ThemeType;
  blue: ThemeType;
};

type ThemeName = keyof typeof themes;

type ThemeContextType = {
  theme: ThemeType;
  setTheme: (themeName: ThemeName) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};
const themes: Themes = {
  default: {
    "--main": "#7c3acd",
    "--bg": "#0A1625",
    "--bg-accent": "#a9a9a9",
    "--text": "#c9d9e9",
  },
  dark: {
    "--bg": "#0A1625",
    "--bg-accent": "#a9a9a9",
    "--text": "#c9d9e9",
  },
  light: {
    "--bg": "#e3f1f1",
    "--bg-accent": "#2A3645",
    "--text": "#0A1625",
  },
  purple: {
    "--main": "#7c3acd",
  },
  teal: {
    "--main": "#00b894",
  },
  orange: {
    "--main": "#e17055",
  },
  blue: {
    "--main": "#3a86ff",
  },
};

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.default,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.default);
  const setTheme = (themeName: ThemeName) => {
    const theme = themes[themeName];
    if (theme) {
      setCurrentTheme(theme);
    }
  };
  useEffect(() => {
    console.log(currentTheme);
    console.log(document.documentElement.style);
    for (const key in currentTheme) {
      document.documentElement.style.setProperty(
        key,
        currentTheme[key as keyof ThemeType]
      );
    }
  }, [currentTheme]);
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};
