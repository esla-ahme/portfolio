import React from "react";
import { motion } from "framer-motion";
import TypingWriter from "../TypingWriter";
import { sociallinks } from "../Navbar/static";
import Image from "next/image";
import SectionContainer from "../Layout/Containers/SectionContainer";
import Icons from "../Icons/Icons";

const Roles = ["Software Engineer", "Frontend Engineer", "React Developer"];
const HeroSection = () => {
  return (
    <SectionContainer id="home" background="None">
      <div className="flex min-h-[calc(100vh-5rem)] items-center">
        <div className="lg:w-2/3 flex flex-col justify-center mt-8">
          <p className="text-xl my-4">Hello there, I&apos;m</p>
          <h1 className="text-5xl mdl:text-6xl font-bold font-inter text-main">
            Eslam Ahmed
          </h1>
          <TypingWriter
            sentences={Roles}
            classes="text-2xl mdl:text-4xl"
            as="h2"
          />
          <p className="mdl:text-lg mt-4 mb-6 text-textLight/75 whitespace-break-spaces">
            Results-driven Frontend Engineer with 3+ years of experience
            building responsive, scalable web applications using React, Vue,
            and modern JavaScript frameworks. Proven track record of delivering
            high-performance user interfaces, complex state management
            solutions, and seamless API integrations. Currently working as a
            Solutions Developer at Zoho Corp.
          </p>
          <div className="flex  items-center my-4">
            {sociallinks.map((link, index) => {
              return (
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  href={link.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  className="inline-block mr-8 opacity-75 hover:opacity-100 hover:text-main transition-all duration-300"
                >
                  <Icons name={link.name} />
                </motion.a>
              );
            })}
          </div>
          <div className="relative  flex gap-2.5 items-center  w-full">
            <a
              href="mailto:eslamahmed9861@gmail.com"
              className="border-main z-20 border-2 bg-main hover:brightness-110 text-white px-8 py-2 rounded-md text-base font-semibold inline-block"
            >
              Contact Me
            </a>

            {/* a ball that come from behind the button */}

            <motion.div
              initial={{
                x: -100,
                boxShadow: "0px 0px 0px 0px rgba(124,58,205,0.5)",
              }}
              animate={{
                x: 0,
                transition: {
                  duration: 1,
                  delay: 2,
                },
              }}
              whileInView={{
                boxShadow: "0px 0px 5px 2px rgba(124,58,205,1)",
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className=" w-2.5 h-2.5  bg-bgAccent rounded-full"
            ></motion.div>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              type="pdf"
              download={true}
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{
                duration: 1,
                delay: 3,
                type: "spring",
                stiffness: 100,
              }}
              className=""
            >
              <TypingWriter
                sentences={["Open to hiring"]}
                classes="font-light"
                as="span"
              />
            </motion.a>
          </div>
        </div>
        <motion.div
          whileInView={{
            y: 10,
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              type: "tween",
            },
          }}
          data-scroll
          data-scroll-speed="0.4"
          className="py-20 mr-8 m-auto hidden lg:block"
        >
          <Image
            src="/images/hero.svg"
            alt="Software engineer working at a desk illustration"
            className="flex-grow "
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
