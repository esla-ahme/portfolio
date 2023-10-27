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
      id="about"
      className=" p-4 mdl:p-8 w-full
 text-textLight     
    "
      style={{
        minHeight: "100vh-4rem",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, #0A1625 15%,#0A1625 85%, rgba(0,0,0,0) 100%)",
      }}
    >
      <SectionTitle title="About Me" />

      <div className="flex flex-col-reverse  mdl:flex-row  items-center justify-center">
        <div className="w-full mdl:w-3/4  p-4">
          <p className="font-light text-bgLight/75">
            Hi, I&apos;m Eslam Ahmed, a{" "}
            <span className="font-semibold text-textLight mdl:text-mdl">
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
            first &apos;Hello World&apos; in good old&apos;C.&apos;Since then,
            I&apos;ve dived into various technologies and languages, always
            striving to learn, achieve perfection, and pay attention to the
            finer details.
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
