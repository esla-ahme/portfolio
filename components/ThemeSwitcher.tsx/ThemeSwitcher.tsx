// components/ThemeSwitcher.tsx
import React, { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.css";
import { useTheme } from "@/context/themeContext";
import { ThemeName } from "@/Types";
import { themes } from "@/styles/colors";
import { motion } from "framer-motion";
import Icons from "@/components/Icons/Icons";
type ThemeSwitcherProps = {};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { setMode, setColor, theme } = useTheme();

  const handleChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    color: ThemeName
  ) => {
    setColor(color);
  };

  useEffect(() => {
    // This is where you can handle any side effects based on the theme changes
    console.log("Theme changed:", theme);
    console.log(themes["blue"]["--main"]);
  }, [theme]);

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
        <button className={styles.toggleButton} onClick={handleModeToggle}>
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
            onClick={(e) => handleChange(e, color as ThemeName)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
