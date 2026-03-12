import React from "react";
import { sectionNames } from "./data";
import { motion, AnimatePresence } from "framer-motion";
interface Props {
  active: number;
  activeHandler: (index: number) => void;
}
// use motion varients to animate the border
const SectionNavigator = ({ active, activeHandler }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      activeHandler((index + 1) % sectionNames.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      activeHandler((index - 1 + sectionNames.length) % sectionNames.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activeHandler(index);
    }
  };

  return (
    <nav className="w-full" aria-label="Experience sections">
      <ul className="flex   w-full gap-4    " role="tablist">
        {sectionNames.map((section, index) => (
          <li
            key={index}
            role="tab"
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            className={`text-textLight/75 relative flex-grow p-2 hover:text-textLight cursor-pointer transition-all duration-300
            focus:outline-2 focus:outline-main focus:outline-offset-2
            `}
            onClick={() => activeHandler(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            <span
              className={`text-center w-full inline-block ${
                active === index ? "text-main font-semibold" : ""
              }`}
            >
              {section}
              <AnimatePresence>
                {
                  // the border that animate
                  active === index &&
                    ((
                      <motion.div
                        layout
                        key={section}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        transition={{
                          duration: 0.5,

                          type: "tween",
                        }}
                        className="absolute m-auto bottom-0 left-1/2 -translate-x-1/2 border-b-2 border-main"
                      ></motion.div>
                    ) ||
                      null)
                }
              </AnimatePresence>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNavigator;
