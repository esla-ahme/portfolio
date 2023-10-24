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

  //   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //     e.preventDefault();
  //     const target = e.currentTarget.getAttribute("href");
  //     const element = document.querySelector(target);
  //     if (element) {
  //       const offset = element.getBoundingClientRect().top + window.pageYOffset;
  //       window.scrollTo({
  //         top: offset,
  //         behavior: "smooth",
  //       });
  //     }
  //   };

  return (
    <nav
      className={`w-full shadow-3xl h-20 px-4 bg-bgDark/75 flex justify-between items-center ${
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
                  href={link.link}
                  // onClick={handleClick}
                  className=" hover:text-main  duration-300 cursor-pointer"
                >
                  {link.name}{" "}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div className="mdl:hidden">
        <Icon onClick={toggleSideBar} />
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
                      href={link.link}
                      // onClick={handleClick}
                      className=" hover:text-main  duration-300 cursor-pointer text-xl my-4"
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
              <p className="w-full text-center text-sm tracking-widest font-extralight">
                EslamAhmed9861@gmail.com
              </p>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
