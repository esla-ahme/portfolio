import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionData } from "./data";

const Card = ({
  title,
  company,
  startDate,
  endDate,
  location,
  description,
}: SectionData) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: "-100",
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
        className="w-full group mt-4 p-4 rounded-2xl border border-bgAccent  divide-y mdl:divide-y-0 mdl:divide-x divide-bgAccent flex flex-col mdl:flex-row
         transition-all duration-200"
      >
        <div className="mdl:w-1/3 p-4 ">
          <h3 className="text-sm text-textLight">
            {startDate} - {endDate}
          </h3>
          <div className="flex flex-wrap items-center justify-between">
            {" "}
            <h2 className=" text-xl font-semibold text-main ">{company}</h2>
            <h3 className="text-sm text-textLight">{location}</h3>
          </div>
        </div>
        <div className="mdl:w-2/3 p-4">
          <h1 className="  text-2xl mb-4">{title}</h1>
          <ul className="list-disc list-inside px-4 font-light text-sm group-hover:text-textLight text-bgAccent ">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Card;
