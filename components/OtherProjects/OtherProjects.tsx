import React from "react";
import SectionTitle from "../SectionTitle";
import { otherProjectsData } from "../Projects/data";
import Card from "./Card";

const OtherProjects = () => {
  return (
    <div
      className="
    p-4 lg:p-8 w-full
    "
      style={{
        minHeight: "calc(100vh - 4rem)",
      }}
    >
      <SectionTitle title="Noteworthy Projects" />
      <div className="grid gap-4 grid-cols-1 sml:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {otherProjectsData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
