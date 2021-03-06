import React from "react";
import MySkills from "../Shared/MySkills/MySkills";
import AboutMe from "./AboutMe/AboutMe";
import ContactMe from "./ContactMe/ContactMe";
import HomeBanner from "./HomeBanner/HomeBanner";
import Languages from "./Languages/Languages";
import ProjectsSlide from "./ProjectsSlide/ProjectsSlide";

const Home = () => {
  function fullname() {
    console.log("My full name is mosharrof hosen munna");
  }

  return (
    <div>
      <HomeBanner />
      <AboutMe />
      <MySkills />
      <ProjectsSlide />
      <ContactMe />
      <Languages />
    </div>
  );
};

export default Home;
