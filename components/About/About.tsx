import Image from "next/image";
import React from "react";
import SideImage from "./SideImage";
import SectionTitle from "../SectionTitle";

const tech = [
  "React",
  "Vue",
  "Redux",
  "Tailwind",
  "Node.js",
  "Express.js",
  "C++",
  "Java",
];
const About: React.FC = () => {
  return (
    <section
      className=" p-4 lg:p-8 w-full
      from-bgDark to-transparent text-textLight 
      min-h-screen    
    "
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, #0A1625 15%,#0A1625 85%, rgba(0,0,0,0) 100%)",
      }}
    >
      <SectionTitle title="About Me" />

      <div className="flex flex-col-reverse  lg:flex-row  items-center justify-center">
        <div className="w-full lg:w-1/2  p-4">
          <p className="font-light text-bgLight/75">
            Hi, I'm Eslam Ahmed, a{" "}
            <span className="font-semibold text-textLight lg:text-lg">
              web developer
            </span>{" "}
            with over a year of experience. I specialize in building web
            platforms, optimizing websites for better UI/UX, and ensuring
            top-notch SEO. I hold a web developer{" "}
            <span className="font-semibold text-textLight">
              {" "}
              B.Sc in Computer Engineering
            </span>
            , graduating in July 2021. My journey began in 2017 when I wrote my
            first 'Hello World' in good old'C.'Since then, I've dived into
            various technologies and languages, always striving to learn,
            achieve perfection, and pay attention to the finer details.
            <br />
            <br />
            <strong>Some technologies I enjoy working with:</strong>
          </p>

          <ul className="tech flex flex-wrap mt-4">
            {tech.map((tech, index) => (
              <li
                key={index + tech}
                className="text-textLight/75 hover:text-textLight w-1/2 flex items-center gap-2"
              >
                <Image
                  src="/icons/code.svg"
                  alt={tech}
                  width={16}
                  height={16}
                  className="inline-block "
                />{" "}
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <SideImage />
      </div>
    </section>
  );
};

export default About;
