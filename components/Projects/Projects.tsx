import React from "react";
import SectionTitle from "../SectionTitle";
import { projectsData } from "./data";
import Card from "./Card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="p-4 lg:p-8 w-full"
      style={{
        minHeight: "calc(100vh - 4rem)",
      }}
    >
      <SectionTitle title="Projects" />
      <div className=" flex items-center flex-wrap lg:flex-col">
        {projectsData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
