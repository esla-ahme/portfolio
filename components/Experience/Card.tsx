// Job title in main color then company name then date and location in same line, then details in bullet points
//   initial={{
//           x: "-100%",
//           opacity: 0,
//         }}
//         whileInView={{
//           x: 0,
//           opacity: 1,
//           transition: {
//             duration: 0.5,
//             delay: key * 0.5,
//           },
//         }}
//         viewport={{ once: true }}

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { once } from "events";
interface Props {
  title: string;
  company?: string;
  startDate?: string;
  location?: string;
  endDate?: string;
  description: string[];
  key: number;
}
const Card = ({
  title,
  company,
  startDate,
  endDate,
  location,
  description,
  key,
}: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          x: "-100%",
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
        key={key}
        className="w-full group mt-4 p-4 rounded-2xl border border-textLight/20  divide-y mdl:divide-y-0 mdl:divide-x divide-textLight/20 flex flex-col mdl:flex-row
        hover:divide-textLight/50 hover:border-textLight/50 transition-all duration-200
      "
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
          <ul className="list-disc list-inside px-4 font-light text-sm group-hover:text-textLight text-textLight/75 ">
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
