import React from "react";
import { motion } from "framer-motion";
import Tag from "../Tag";
interface Props {
  title: string;
  description: string;
  role: string[];
  techStack: string[];
  link: string;
}
const Card = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ y: 4, x: -4, skewX: 0.5, skewY: 0.5 }}
      viewport={{ once: true }}
      onClick={() => window.open(props.link, "_blank")}
      className="
      w-full
        max-w-containerSmall
        mdl:px-16 mdl:py-8 
        mx-2
      m-auto
      cursor-pointer
    bg-textLight/5 backdrop-blur-sm text-textLight p-4  my-4
    shadow-xl
    border-t-bgAccent border-l-bgAccent
    border-r-transparent border-b-transparent
    border-4 mdl:border-8  hover:border-r-bgAccent hover:border-b-bgAccent hover:border-t-transparent hover:border-l-transparent 
    "
    >
      <h1
        className="
        text-xl font-bold text-main
      "
      >
        {props.title}
      </h1>
      <p
        className="
        text-sm  my-2 italic
      "
      >
        {props.description}
      </p>
      <ul className="box-border border-l-2 border-main">
        {props.role.map((role, index) => (
          <li
            className="
            text-sm font-light my-2 px-8 
          "
            key={index}
          >
            <span className="mr-2 font-semibold text-main">&#9997;</span>
            {role}
          </li>
        ))}
      </ul>
      <ul className="flex px-8 py-2 gap-2 flex-wrap">
        {props.techStack.map((tech, index) => (
          <li key={tech}>
            <Tag name={tech} size="normal" />
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Card;
