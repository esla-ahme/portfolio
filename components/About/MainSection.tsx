import CodeIcon from "../Icons/CodeIcon";
import React from "react";

const tech = [
  "React",
  "Vue",
  "Redux",
  "Tailwind",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Firebase",
  "GraphQL",
  "MongoDB",
  "C++",
  "Java",
];

function MainSection() {
  return (
    <div className="w-full mdl:w-3/4 p-4">
      <IntroductionSection></IntroductionSection>
      <TechList></TechList>
    </div>
  );
}

function IntroductionSection() {
  return (
    <div className="space-y-4">
      <p className="font-light text-bgAccent/75">
        Hi, I&apos;m Eslam Ahmed, a{" "}
        <span className="font-semibold text-textLight mdl:text-mdl">
          Frontend Engineer
        </span>{" "}
        with over 2 years of experience. Currently, I work as a{" "}
        <span className="font-semibold text-textLight">Solution Developer</span>{" "}
        at{" "}
        <span className="font-semibold text-textLight">Zoho Corp</span>, where I
        design and implement client-focused solutions using{" "}
        <span className="font-semibold text-textLight">
          JavaScript, TypeScript, and Zoho Deluge
        </span>
        .
      </p>
      <p className="font-light text-bgAccent/75">
        I specialize in building scalable web platforms, optimizing UI/UX, and
        integrating modern technologies like{" "}
        <span className="font-semibold text-textLight">
          Firebase, GraphQL, and WebSocket
        </span>{" "}
        for real-time functionality. I hold a{" "}
        <span className="font-semibold text-textLight">
          B.Sc in Computer Engineering
        </span>{" "}
        from Ain Shams University, graduating in July 2021 with{" "}
        <span className="font-semibold text-textLight">
          Very Good with Honors
        </span>
        .
      </p>
      <p className="font-light text-bgAccent/75">
        My journey began in 2017 when I wrote my first &apos;Hello World&apos;
        in good old &apos;C.&apos; Since then, I&apos;ve worked with a variety
        of technologies, always striving to learn, achieve perfection, and pay
        attention to the finer details.
      </p>
      <p className="font-light text-bgAccent/75">
        <strong>Some technologies I enjoy working with:</strong>
      </p>
    </div>
  );
}

function TechList() {
  return (
    <ul className="tech flex flex-wrap mt-4">
      {tech.map((tech, index) => (
        <li
          key={index + tech}
          className="text-textLight/75 hover:text-textLight w-1/2 flex items-center gap-2"
        >
          <CodeIcon />
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default MainSection;