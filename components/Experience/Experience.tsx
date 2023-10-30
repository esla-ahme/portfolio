import React from "react";
import SectionTitle from "../SectionTitle";
import SectionNavigator from "./SectionNavigator";
import { sectionData } from "./data";
import Card from "./Card";
import SectionContainer from "../Layout/Containers/SectionContainer";

const sections: string[] = ["Work", "Education", "Extracurriculars"];
const Experience = () => {
  const [active, setActive] = React.useState(0);
  const activeHandler = (index: number) => {
    setActive(index);
  };
  return (
    <SectionContainer id="experience" title="Experience" background="Middle">
      <div className="max-w-containerSmall m-auto">
        <SectionNavigator active={active} activeHandler={activeHandler} />
        {/*Cards*/}
        <div className=" mt-8">
          {sectionData[sections[active]].map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Experience;
