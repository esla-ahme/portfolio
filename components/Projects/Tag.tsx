import React from "react";

const Tag = ({ name }: { name: string }) => {
  return (
    <div className="bg-textLight/20 hover:bg-main hover:text-white duration-200 border text-textLight px-2 py-1 rounded-full  text-xs hover:font-regular">
      {name}
    </div>
  );
};

export default Tag;
