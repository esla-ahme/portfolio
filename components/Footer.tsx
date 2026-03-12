import Link from "next/link";
import React from "react";
import Icons from "./Icons/Icons";

const Footer = () => {
  return (
    <footer
      data-scroll
      className="
      scroll-fade
      px-4
      sm:px-8
      py-8
                  w-full
        flex flex-col justify-center items-center gap-2
        sm:flex-row sm:justify-between sm:items-center
        bg-black/10
        "
    >
      <div
        className="social__icons flex justify-center items-center mb-2 gap-4
      opacity-75
      "
      >
        <Link href="https://github.com/esla-ahme" target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <Icons name="Github" width="20" />
        </Link>
        <Link href="https://www.linkedin.com/in/eslam0ahmed/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
          <Icons name="Linkedin" width="20" />
        </Link>
        <Link href="https://twitter.com/eslamcodes" target="_blank" rel="noreferrer" aria-label="Twitter profile">
          <Icons name="Twitter" width="20" />
        </Link>
        <Link href="https://eslam-7ot.hashnode.dev/" target="_blank" rel="noreferrer" aria-label="Hashnode blog">
          <Icons name="Hashnode" width="20" />
        </Link>
      </div>
      <p className=" mb-2 text-sm font-light text-textLight/75 text-center">
        Designed & Built by{" "}
        <Link
          className="font-normal hover:text-main"
          href="https://github.com/esla-ahme"
          rel="noreferrer"
        >
          Eslam Ahmed
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
