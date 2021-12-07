import React from "react";
import Languages from "../Home/Languages/Languages";
import ProjectsSlide from "../Home/ProjectsSlide/ProjectsSlide";
import MySkills from "../Shared/MySkills/MySkills";
import SkillsBanner from "./SkillsBanner/SkillsBanner";

const Skills = () => {
  return (
    <>
      <MySkills />
      <ProjectsSlide />
      <Languages />
    </>
  );
};

export default Skills;
