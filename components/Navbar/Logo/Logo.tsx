import React from "react";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.6, delay: i * 0.15, ease: "easeInOut" },
      opacity: { duration: 0.2, delay: i * 0.15 },
    },
  }),
};

const slashVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.7,
    transition: {
      pathLength: { duration: 0.4, delay: 1.2, ease: "easeInOut" },
      opacity: { duration: 0.2, delay: 1.2 },
    },
  },
};

const Logo = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.3 },
      }}
      className="navbar__logo cursor-pointer ml-4 text-main"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        fill="none"
        width={100}
        height={50}
        aria-label="Eslam Ahmed logo"
        role="img"
        initial="hidden"
        animate="visible"
      >
        {/* < opening bracket */}
        <motion.path d="M8 50 L28 30 M8 50 L28 70" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} custom={0}/>

        {/* E letter */}
        <motion.path d="M44 30 L44 70 M44 30 L68 30 M44 50 L64 50 M44 70 L68 70" stroke="currentColor" strokeWidth="7" strokeLinecap="round" variants={pathVariants} custom={1}/>

        {/* A letter */}
        <motion.path d="M82 70 L97 30 L112 70 M87 54 L107 54" stroke="currentColor" strokeWidth="7" strokeLinecap="round" variants={pathVariants} custom={2}/>

        {/* / slash */}
        <motion.path d="M130 70 L142 30" stroke="currentColor" strokeWidth="7" strokeLinecap="round" variants={slashVariants}/>

        {/* > closing bracket */}
        <motion.path d="M156 30 L176 50 M176 50 L156 70" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} custom={3}/>
      </motion.svg>
    </motion.div>
  );
};

export default Logo;
