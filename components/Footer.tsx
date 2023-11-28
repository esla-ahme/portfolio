import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icons from "./Icons/Icons";

const Footer = () => {
  return (
    <div
      className="
      px-4
      sm:px-8 
      py-8
                  w-full
        flex flex-col justify-center items-center gap-2
        sm:flex-row sm:justify-between sm:items-center
        "
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, #0A1625 15%, rgba(0,0,0,0) 100%)",
      }}
    >
      <div
        className="social__icons flex justify-center items-center mb-2 gap-4
      opacity-75
      "
      >
        <Link href="https://github.com/esla-ahme" target="_blank">
          <Icons name="Github" width="20" />
        </Link>
        <Link href="https://www.linkedin.com/in/eslam0ahmed/" target="_blank">
          <Icons name="Linkedin" width="20" />
        </Link>
        <Link href="https://twitter.com/esla_ahme" target="_blank">
          <Image
            src="/icons/twitter.svg"
            alt="twitter"
            width={20}
            height={20}
          />
        </Link>
        <Link href="https://eslam-7ot.hashnode.dev/" target="_blank">
          <Icons name="Hashnode" width="20" />
        </Link>
      </div>
      <p className=" mb-2 text-sm font-light text-textLight/75 text-center">
        Designed & Built by{" "}
        <Link
          className="font-normal hover:text-main"
          href="https://github.com/esla-ahme"
        >
          Eslam Ahmed
        </Link>
      </p>
    </div>
  );
};

export default Footer;
