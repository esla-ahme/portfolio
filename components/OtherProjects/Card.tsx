import React from "react";
import Link from "next/link";
import Tag from "../Tag";
import { motion } from "framer-motion";
import { Edit, ArrowUpRight } from "./Icon";
import Icons from "../Icons/Icons";
interface Props {
  title: string;
  description: string;
  techStack: string[];
  link?: string | null; //github link
  live?: string | null; //live link
  key: number;
}
const Card = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100" }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        skew: -0.5,
        shadow: "0 0 11px rgba(33,33,33,1)",
      }}
      transition={{
        duration: 0.25,
      }}
      viewport={{ once: true }}
      className="
 
  p-4
  bg-textLight/5
  backdrop-blur-sm
  group
   shadow-md
  "
    >
      <div className="group-hover:text-main flex justify-between">
        <Edit />
        <div className="flex space-x-2">
          {props.link && (
            <Link href={props.link} target="_blank">
              <Icons width="20" name="Github" />
            </Link>
          )}
          {props.live && (
            <Link href={props.live} target="_blank" className="text-xl">
              <ArrowUpRight />
            </Link>
          )}
        </div>
      </div>
      <h1
        className="
      text-xl
      font-semibold
      text-main
      mt-2
      "
      >
        {props.title}
      </h1>
      <p className="text-sm px-4 my-2 italic">{props.description}</p>
      <div className="flex flex-wrap gap-2">
        {props.techStack.map((tech, index) => (
          <Tag key={index} name={tech} size="small" />
        ))}
      </div>
    </motion.div>
  );
};

export default Card;
