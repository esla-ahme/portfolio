import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "../Icons/Icons";
import ThemeSwitcher from "../ThemeSwitcher.tsx/ThemeSwitcher";

const ThemeContainer = () => {
  const [showThemeSwitcher, setShowThemeSwitcher] = React.useState(false);

  return (
    <div className=" flex-1 mdl:flex-initial ">
      <i
        className=" cursor-pointer mx-4 hover:text-main list-none flex justify-end items-center "
        onClick={() => setShowThemeSwitcher(!showThemeSwitcher)}
      >
        <Icons name="Magic" className="w-6 h-6" />
      </i>
      <AnimatePresence>
        {showThemeSwitcher && (
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: showThemeSwitcher ? 1 : 0,
              x: showThemeSwitcher ? 0 : 100,
            }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 right-0 w-40 h-24 bg-textLight grid place-items-center rounded-s-lg
                  shadow-lg
                "
          >
            <ThemeSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeContainer;
