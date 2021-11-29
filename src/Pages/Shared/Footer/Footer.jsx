import React from "react";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import {
  faArrowRight,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue py-5">
      <Container>
        <Row xs={1} md={4}>
          <Col>
            <div>
              <h3 className="text-white">Lets talk about!</h3>
              <p className="text-light-blue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus expedita doloremque, obcaecati id sed dolorum!
              </p>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100028489011065"
                  className=" me-3"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    className="text-white fa-2x"
                  />
                </a>
                <a
                  href="https://github.com/Mosharrof-Hosen-Munna"
                  className="  me-3"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="text-white  fa-2x"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mosharrofhosen/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className="text-white fa-2x"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="text-white">Links</h3>

              <ul className="list-unstyled">
                <li>
                  <Link className="text-decoration-none text-light-blue" to="/">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-light-blue"
                    to="/about"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-light-blue"
                    to="/services"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-light-blue"
                    to="/skills"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-light-blue"
                    to="/contact"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="text-white">Services</h3>

              <ul className="list-unstyled">
                <li>
                  <Link className="text-decoration-none text-light-blue" to="/">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-light-blue"
                    to="/about"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none text-light-blue"
                    to="/services"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      size="lg"
                      className="text-white fa-1x me-3"
                    />
                    Graphic Design
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h3 className="text-white"> Have a Questions?</h3>
              <div className="d-flex">
                <div>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="lg"
                    className="text-white fa-1x me-3"
                  />
                </div>
                <div className="text-light-blue">
                  Pakundia, Kishoreganj, Dhaka, Bangladesh
                </div>
              </div>
              <div className="d-flex mt-3">
                <div>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size="lg"
                    className="text-white fa-1x me-3"
                  />
                </div>
                <div className="text-light-blue">
                 +88 01986-116253
                </div>
              </div>
              <div className="d-flex mt-3">
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    className="text-white fa-1x me-3"
                  />
                </div>
                <div className="text-light-blue">
                 mosharrofmunna0@gmail.com
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
