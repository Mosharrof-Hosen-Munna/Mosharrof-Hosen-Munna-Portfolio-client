import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutMe from "../Home/AboutMe/AboutMe";
import MySkills from "../Shared/MySkills/MySkills";
import AboutBanner from "./AboutBanner/AboutBanner";

const About = () => {

  return (
    <>
      <AboutBanner/>
      <AboutMe/>
      <MySkills/>
    </>
  );
};

export default About;
