import CodeIcon from "../Icons/CodeIcon";
import React from "react";

const tech = [
  "React",
  "Vue",
  "Next.js",
  "TypeScript",
  "Redux",
  "React Query",
  "Tailwind",
  "Node.js",
  "Express.js",
  "GraphQL",
  "Firebase",
  "MongoDB",
  "Python",
  "SQL",
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
        with 3+ years of experience. Currently, I work as a{" "}
        <span className="font-semibold text-textLight">Solutions Developer</span>{" "}
        at{" "}
        <span className="font-semibold text-textLight">Zoho Corp</span>, where I
        build high-performance{" "}
        <span className="font-semibold text-textLight">
          custom React widgets
        </span>
        , design scalable frontend solutions with advanced permission logic and
        real-time data visualization, and develop robust{" "}
        <span className="font-semibold text-textLight">
          REST API and webhook integrations
        </span>
        . I also create{" "}
        <span className="font-semibold text-textLight">
          Python and Node.js scripts
        </span>{" "}
        for automating migration of millions of records.
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