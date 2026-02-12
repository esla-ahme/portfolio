// components/ThemeSwitcher.tsx
import React from "react";
import styles from "./ThemeSwitcher.module.css";
import { useTheme } from "@/context/themeContext";
import { FontSize, ThemeName } from "@/Types";
import { themes } from "@/styles/colors";
import { motion } from "framer-motion";
import Icons from "@/components/Icons/Icons";
type ThemeSwitcherProps = {};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { setMode, setColor, setFontSize, theme } = useTheme();

  const fontSizes: { key: FontSize; label: string; size: number }[] = [
    { key: "small", label: "A", size: 13 },
    { key: "medium", label: "A", size: 17 },
    { key: "large", label: "A", size: 22 },
  ];

  const handleChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    color: ThemeName
  ) => {
    setColor(color);
  };

  const handleModeToggle = () => {
    setMode(theme.mode === "light" ? "dark" : "light");
  };
  const buttonVariants = {
    dark: { x: "0%", rotate: 0, backgroundColor: "#000" },
    light: {
      x: "100%",
      rotate: 360,
      backgroundColor: "#fff",
    },
  };

  return (
    <div className={styles.themeSwitcher}>
      <div className={styles.modeToggle}>
        <button className={styles.toggleButton} onClick={handleModeToggle} aria-label={theme.mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
          <motion.div
            initial={false}
            animate={theme.mode}
            transition={{ duration: 0.5 }}
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.toggleIcon}
          >
            {theme.mode === "dark" ? (
              <Icons name="Moon" />
            ) : (
              <Icons name="Sun" />
            )}
          </motion.div>
        </button>
      </div>
      <div className={styles.colorButtons}>
        {["purple", "orange", "blue", "teal"].map((color) => (
          <button
            key={color}
            className={`${styles.colorButton} ${
              color === theme.mainColor ? styles.active : ""
            }`}
            style={{
              backgroundColor: themes[color as ThemeName]["--main"],
            }}
            aria-label={`Set ${color} accent color`}
            onClick={(e) => handleChange(e, color as ThemeName)}
          />
        ))}
      </div>
      <div className={styles.fontSizeButtons}>
        {fontSizes.map(({ key, label, size }) => (
          <button
            key={key}
            className={`${styles.fontSizeButton} ${
              key === theme.fontSize ? styles.active : ""
            }`}
            style={{ fontSize: `${size}px` }}
            aria-label={`Set ${key} font size`}
            onClick={() => setFontSize(key)}
          >
           <span className="text-main"> {label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
