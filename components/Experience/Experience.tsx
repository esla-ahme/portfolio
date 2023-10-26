import React from "react";
import SectionTitle from "../SectionTitle";
import SectionNavigator from "./SectionNavigator";
import { sectionData } from "./data";
import Card from "./Card";

const sections: string[] = ["Work", "Education", "Extracurriculars"];
const Experience = () => {
  const [active, setActive] = React.useState(0);
  const activeHandler = (index: number) => {
    setActive(index);
  };
  return (
    <div
      id="experience"
      className="      
     p-4 lg:p-8 w-full"
      style={{
        minHeight: "calc(100vh - 4rem)",
        background:
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, #0A1625ee 15%,#0A1625 85%, rgba(0,0,0,0) 100%)",
      }}
    >
      <SectionTitle title="Experience" />
      <div className="max-w-containerSmall m-auto">
        {" "}
        <SectionNavigator active={active} activeHandler={activeHandler} />
        <div className=" mt-8">
          {sectionData[sections[active]].map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
