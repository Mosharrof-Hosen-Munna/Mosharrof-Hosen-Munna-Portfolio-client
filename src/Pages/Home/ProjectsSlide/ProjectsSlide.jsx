import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProjectsSlide.css";

const ProjectsSlide = () => {
  return (
    <section className="py-4 bg-light-blue">
      <Container>
        <div className="text-center">
          <h1 className="text-gradient">My Projects</h1>
          <p className="text-secondary">Top most projects develop by me</p>
        </div>
        <Row xs={1} md={3} lg={3} className="g-4 mt-3">
          <Col>
            <Card className="border-0 shadow h-100">
              <div className="project-img-container">
                <div className="project-img project1"></div>
              </div>
              <Card.Body className="px-1 py-">
                <div className="d-flex project-technology flex-wrap">
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ReactJS
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    React-Bootstrap
                  </span>
                  
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    MongoDB
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Firebase
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ExpressJS
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    Node
                  </span>
                </div>
                <div className="m-1 ">
                  <h4 className="text-gradient fw-bold">SmartFury</h4>
                  <p className="project-desc m-0">
                    SmartFury is an online product selling application,
                    providing one type of niche product. Main features of this
                    application admin panel for managing this application. Users
                    can buy a product and manage it. And admin can manage
                    product, make admin, manage orders, add product. (With
                    Front-end and back-end development)
                  </p>
                  <Link
                    className="d-flex justify-content-end mx-2"
                    to="/product/35"
                  >
                    More Details
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow  h-100">
              <div className="project-img-container">
                <div className="project-img project-2"></div>
              </div>
              <Card.Body className="px-1 py-">
                <div className="d-flex project-technology flex-wrap">
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ReactJS
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    React-Router
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Firebase
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    Node
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    MongoDB
                  </span>
                  
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ExpressJS
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    React-Bootstrap
                  </span>
                  
                </div>
                <div className="m-1">
                  <h4 className="text-gradient fw-bold">Holiday Planners</h4>
                  <p className="project-desc m-0">
                    Holiday Planners is a travel agency application, providing
                    different kinds of tours and plans for holidaymakers. (With
                    Front-end and back-end development).
                  </p>
                  <Link
                    className="d-flex justify-content-end mx-2"
                    to="/product/35"
                  >
                    More Details
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow h-100">
              <div className="project-img-container">
                <div className="project-img project3"></div>
              </div>
              <Card.Body className="px-1 py-">
                <div className="d-flex project-technology flex-wrap">
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ReactJS
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    Node
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    MongoDB
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Firebase
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ExpressJS
                  </span>
                  <span className="py-1 m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    React-Bootstrap
                  </span>
                </div>
                <div className="m-1">
                  <h4 className="text-gradient fw-bold">
                    Medicare Health Center
                  </h4>
                  <p className="project-desc m-0">
                    Medicare is the core Case Management and Workflow Management
                    Application for medical services (Front-end Design
                    development).
                  </p>
                  <Link
                    className="d-flex justify-content-end mx-2"
                    to="/product/35"
                  >
                    More Details
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSlide;
