import React from "react";
import { sectionNames } from "./data";
import { motion, AnimatePresence } from "framer-motion";
interface Props {
  active: number;
  activeHandler: (index: number) => void;
}
// use motion varients to animate the border
const SectionNavigator = ({ active, activeHandler }: Props) => {
  return (
    <nav className="w-full">
      <ul className="flex   w-full gap-4    ">
        {sectionNames.map((section, index) => (
          <motion.li
            key={index}
            className={`text-textLight/75 relative flex-grow p-2 hover:text-textLight cursor-pointer transition-all duration-300 
            `}
            onClick={() => activeHandler(index)}
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
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNavigator;
