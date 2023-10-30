import React from "react";

const sharedClasses =
  "bg-textLight/10 hover:bg-main py-0.5 hover:text-white duration-200  text-textLight  hover:font-regular";
const normalClasses = " px-2  text-xs rounded-full border";
const smallClasses =
  " px-1.5  text-[0.6rem] rounded-sm border-0 hover:scale-110";
const Tag = ({ name, size = "normal" }: { name: string; size?: string }) => {
  if (size == "small")
    return <div className={sharedClasses + smallClasses}>{name}</div>;
  else return <div className={sharedClasses + normalClasses}>{name}</div>;
};

export default Tag;
