import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="section__title w-full hover:text-main group mb-8 flex items-center gap-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="w-1/2 md:w-1/5 h-1 bg-textLight group-hover:bg-main "></div>
    </div>
  );
};

export default SectionTitle;
