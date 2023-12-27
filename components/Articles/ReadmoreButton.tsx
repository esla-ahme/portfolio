import React from "react";
import Image from "next/image";

export function ReadmoreButton() {
  return (
    <button className="w-full p-2 flex items-center justify-center gap-2 bg-black/20 mt-4 border-b-2 border-textLight hover:border-main">
      Read More on My
      <Image
        src="/icons/hashnode.svg"
        alt="arrow right"
        width={20}
        height={20}
        className="inline-block "
      />{" "}
      <span className="text-main">hashnode</span> blog
    </button>
  );
}
