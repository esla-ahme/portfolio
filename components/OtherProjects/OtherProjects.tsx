import React from "react";
import SectionTitle from "../SectionTitle";
import { otherProjectsData } from "../Projects/data";
import Card from "./Card";
import SectionContainer from "../Layout/Containers/SectionContainer";

const OtherProjects = () => {
  return (
    <SectionContainer
      id="otherProjects"
      title="Other Projects"
      background="None"
    >
      <div className="grid gap-4 grid-cols-1 sml:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherProjectsData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default OtherProjects;
