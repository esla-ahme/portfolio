import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const logo = ["E", "s", "l", "a", "m"];
  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.5 },
      }}
      className="navbar__logo text-main cursor-pointer text-2xl   font-bold  ml-4"
    >
      {logo.map((letter, index) => {
        return (
          <motion.span
            className="inline-block tracking-wider text-3xl"
            key={index}
            initial={{ opacity: 0, y: -10, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {letter}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default Logo;
