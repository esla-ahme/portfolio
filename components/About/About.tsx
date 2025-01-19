import React from "react";
import SectionContainer from "../Layout/Containers/SectionContainer";
import SideImage from "./SideImage";
import MainSection from "./MainSection";

const About: React.FC = () => {
  return (
    <SectionContainer id="about" title="About Me" background="Middle">
      <div className="flex flex-col-reverse  mdl:flex-row  items-center justify-center">
        <MainSection />
        <SideImage />
      </div>
    </SectionContainer>
  );
};

export default About;
