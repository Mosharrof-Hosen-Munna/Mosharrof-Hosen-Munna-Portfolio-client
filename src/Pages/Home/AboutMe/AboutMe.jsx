import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import aboutMeImg from "../../../Assets/Images/aboutme.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faChartPie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="py-5">
      <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <div data-aos="flip-left">
              <img
                style={{ background: "#D4DADF" }}
                className="w-100 rounded"
                src={aboutMeImg}
                alt=""
              />
            </div>
          </Col>
          <Col className="d-flex align-items-center">
            <div>
              <div data-aos="fade-down">
                <h5>Welcome!</h5>
                <h1 className="text-gradient">About Me</h1>
                <p className="text-secondary">
                  Highly motivated professional software engineer, familiar with
                  a variety of programming languages, including JavaScript,
                  ReactJS, NodeJS. I’m always adding new skills to my
                  repertoire. Passionate learner, especially about coding.
                  Self-learned in programming area.
                </p>
              </div>
              <Row xs={1} md={2}>
                <Col>
                  <div
                    className="shadow h-100 rounded mt-4 p-2 ps-3"
                    data-aos="flip-left"
                  >
                    <FontAwesomeIcon
                      icon={faChartPie}
                      size="lg"
                      className="text-blue fa-5x"
                    />

                    <h4 className="text-gradient mt-3">Web Design</h4>
                    <p className="fs-14 text-secondary">
                      Design professional web interface, responsive webpage,
                      etc..
                    </p>
                  </div>
                </Col>
                <Col>
                  <div
                    className="shadow h-100 rounded mt-4 p-2 ps-3"
                    data-aos="flip-right"
                  >
                    <FontAwesomeIcon
                      icon={faCode}
                      size="lg"
                      className="text-blue fa-5x"
                    />

                    <h4 className="text-gradient mt-3">Web Development</h4>
                    <p className="fs-14 text-secondary">
                      Develop web functionalities, with JavaScript, ReactJs and
                      NodeJs etc..
                    </p>
                  </div>
                </Col>
              </Row>
              <Link to="/about">
                <button className="button-blue mt-4 mt-md-5 w-50">
                  Learn More...
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMe;
