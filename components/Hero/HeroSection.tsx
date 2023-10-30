import React from "react";
import { motion } from "framer-motion";
import TypingWriter from "../TypingWriter";
import { sociallinks } from "../Navbar/static";
import Image from "next/image";
import SectionContainer from "../Layout/Containers/SectionContainer";

const Roles = ["Software Engineer", "Frontend Engineer", "React Developer"];
const HeroSection = () => {
  return (
    <SectionContainer id="home" background="None">
      <div className="flex ">
        <div className="lg:w-2/3 px-4 mdl:px-16 flex flex-col justify-center mdl:max-w-containerSmall mt-8">
          <h3 className="text-xl my-4">Hello there, I&apos;m</h3>
          <h1 className="text-5xl mdl:text-6xl font-bold font-inter text-main">
            Eslam Ahmed
          </h1>
          <TypingWriter
            sentences={Roles}
            loop={true}
            classes="text-2xl mdl:text-4xl"
          />
          <p className="mdl:text-lg mt-4 mb-6 text-textLight/75 whitespace-break-spaces">
            I&apos;m an experienced web developer with a solid foundation in
            both front-end and back-end development. With over a years of
            expertise in React, Vue and their ecosystem, I focus on creating
            accessible and inclusive web applications that prioritize user
            satisfaction and engagement.
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
                  className="inline-block mr-8 opacity-75 hover:opacity-100 hover:text-main transition-all duration-300"
                >
                  <Image
                    src={link.icon}
                    alt={link.link}
                    width={30}
                    height={30}
                  />
                </motion.a>
              );
            })}
          </div>
          <div className="relative  flex gap-2.5 items-center  w-full">
            <button className="border-main z-20 border-2 bg-main hover:brightness-110  text-textLight px-8 py-2 rounded-md text-base font-semibold">
              <a href="mailto: eslamahmed9861@gmail.com">Contact Me</a>
            </button>

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
              className=" w-2.5 h-2.5  bg-textLight rounded-full"
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
                sentences={["Open to hiring", "Check my resume"]}
                loop={false}
                classes="font-light"
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
          className="py-20 mr-8 m-auto hidden  lg:block "
        >
          <Image
            src="/images/hero.svg"
            alt="hero"
            className="flex-grow "
            width={400}
            height={400}
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default HeroSection;
