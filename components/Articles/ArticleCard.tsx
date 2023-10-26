import Image from "next/image";
import React from "react";
import EyeIcon from "./Eye";
import Tag from "../Tag";
import { motion } from "framer-motion";
interface Props {
  title: string;
  teaser: string;
  date: string;
  image: string;
  link: string;
  views: number;
  tags: string[];
}
const ArticleCard = (article: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: {
          duration: 0.5,
        },
      }}
      className="
  group
      border border-textLight/25 rounded-md 
      bg-textLight/5 backdrop-filter backdrop-blur-sm
      hover:border-textLight/50
      "
    >
      <Image
        src={"/images/" + article.image + ".webp"}
        width={400}
        height={400}
        className="w-full object-cover aspect-video  rounded-md filter brightness-75 group-hover:brightness-100 transition-all duration-500 ease-in-out        "
        alt={article.title}
      />
      <div className="p-4 flex flex-col">
        <h3
          className="
         text-main
         font-semibold
         text-lg
         "
        >
          {article.title}
        </h3>
        <div
          className="flex justify-between items-center
        text-xs text-textLight-75
        "
        >
          <span className="">{article.date}</span>
          <span className="flex items-center gap-1 flex-row-reverse hover:text-main ">
            <EyeIcon size={14} /> {article.views}
          </span>
        </div>
        <p
          className=" my-2   text-textLight/75
          text-sm
        "
        >
          {article.teaser}
        </p>

        <div className="flex flex-wrap gap-2 ">
          {article.tags.map((tag, index) => (
            <Tag key={index} name={tag} size="small" />
          ))}
        </div>
        <button className="bg-textLight/20 hover:bg-main hover:scale-105 duration-500 ease-in-out py-1 px-4 w-1/2 m-auto mt-4 rounded-md ">
          Read More
        </button>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
