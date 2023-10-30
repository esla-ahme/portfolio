import React from "react";
import SectionTitle from "../SectionTitle";
import { projectsData } from "./data";
import Card from "./Card";
import SectionContainer from "../Layout/Containers/SectionContainer";

const Projects = () => {
  return (
    <SectionContainer id="projects" title="Projects" background="None">
      <div className=" flex items-center flex-wrap lg:flex-col">
        {projectsData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
