import Link from "next/link";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import navlinks, { sociallinks } from "./static";
import Logo from "./Logo/Logo";
import Icon from "./icon";
import Image from "next/image";
const Navbar = () => {
  const [isSticky, setIsSticky] = React.useState(true);
  const [showSideBar, setShowSideBar] = React.useState(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    setShowSideBar(false);
    const id = e.currentTarget.getAttribute("href").slice(1);

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <nav
      className={`w-full shadow-3xl h-20 px-2 lg:px-8 bg-bgDark/75 flex justify-between items-center ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Logo />
      <div className="hidden mdl:inline-flex items-center">
        <ul className="navbar__links flex justify-end mr-4">
          {navlinks.map((link, index) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: -10, x: -10 }}
                animate={{ opacity: 100, y: 0, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="mx-4"
                key={link.link + index}
              >
                <Link
                  href={"#" + link.name.toLocaleLowerCase()}
                  className=" hover:text-main  duration-300 cursor-pointer"
                  onClick={handleClick}
                >
                  {link.name}{" "}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div className="mdl:hidden">
        {showSideBar && (
          <div
            className="
        menu_backdrop fixed top-20 left-0 bg-bgDark/50 backdrop-blur-md cursor-pointer 
        w-screen h-screen
        "
            onClick={
              showSideBar
                ? () => {
                    setShowSideBar(false);
                  }
                : () => {}
            }
          ></div>
        )}
        <Icon onClick={toggleSideBar} opened={showSideBar} />
        <AnimatePresence>
          {showSideBar && (
            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.2,
                delayChildren: 0.2,
                staggerChildren: 0.1,
              }}
              className={`absolute top-20 w-2/3 md:full h-screen shadow-2xl  right-0 bg-bgDark  p-4 `}
            >
              {navlinks.map((link, index) => {
                return (
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 100, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2, delay: 0 },
                    }}
                    className="p-4"
                    key={link.link + index}
                  >
                    <Link
                      href={"#" + link.name.toLocaleLowerCase()}
                      className=" hover:text-main  duration-300 cursor-pointer text-xl my-4"
                      onClick={handleClick}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-4"
              >
                <div className="social__links flex justify-center items-center">
                  {sociallinks.map(({ link, icon }, index) => (
                    <motion.a
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      href={link}
                      target="_blank"
                      className="px-6 py-2"
                      key={link + index}
                    >
                      <Image src={icon} alt={link} width={30} height={30} />
                    </motion.a>
                  ))}
                </div>
              </motion.li>
              <motion.li
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2, delay: 0 },
                }}
                className="mt-2"
              >
                <a
                  href="mailto: eslamahmed9861@gmail.com "
                  className="w-full hover:text-main inline-block text-center text-sm tracking-widest "
                >
                  EslamAhmed9861@gmail.com
                </a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
