import React from "react";
import "./Languages.css";
import HTMLLogo from "../../../Assets/logo/HTML.svg";
import CSS from "../../../Assets/logo/CSS.svg";
import Javascript from "../../../Assets/logo/javascript.svg";
import ReactLogo from "../../../Assets/logo/React.svg";
import BootstrapLogo from "../../../Assets/logo/Bootstrap.svg";
import NodeJS from "../../../Assets/logo/nodejs.svg";
import ReactRouter from "../../../Assets/logo/React-Router.svg";
import Mongodb from "../../../Assets/logo/Mongodb.svg";
import Firebase from "../../../Assets/logo/Firebase.svg";
import Git from "../../../Assets/logo/Git.svg";
import Github from "../../../Assets/logo/Github.svg";
import Nextjs from "../../../Assets/logo/Nextjs.svg";
import Typescript from "../../../Assets/logo/Typescript.svg";
import { Col, Container, Row } from "react-bootstrap";

const Languages = () => {
  return (
    <section className="py-5">
      <Container>
        <Row xs={4} md={5} lg={6} className="g-4">
          <Language img={HTMLLogo} />
          <Language img={CSS} />
          <Language img={BootstrapLogo} />
          <Language img={Javascript} />
          <Language img={Typescript} />
          <Language img={ReactLogo} />
          <Language img={ReactRouter} />
          <Language img={Firebase} />
          <Language img={NodeJS} />
          <Language img={Mongodb} />
          <Language img={Git} />
          <Language img={Nextjs} />
        </Row>
      </Container>
    </section>
  );
};

const Language = ({ img }) => {
  return (
    <>
      <Col>
        <div className="d-flex align-items-center h-100">
          <img className="grey_scale w-50 mx-auto" src={img} alt="" />
        </div>
      </Col>
    </>
  );
};

export default Languages;
