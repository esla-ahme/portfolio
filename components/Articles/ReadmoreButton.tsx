import React from "react";
import Image from "next/image";
import Icons from "../Icons/Icons";

export function ReadmoreButton() {
  return (
    <button className="group w-full p-2 flex items-center justify-center gap-2 bg-black/20 mt-4 border-b-2 border-textLight hover:border-main">
      Read More on My
      <span className="group-hover:text-main">
        <Icons name="Hashnode" />
      </span>
      <span className="text-main">hashnode</span> blog
    </button>
  );
}
