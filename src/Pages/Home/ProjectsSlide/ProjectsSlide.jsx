import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProjectsSlide.css";

const ProjectsSlide = () => {
  return (
    <section className="py-4 bg-light-blue">
      <Container>
        <div className="text-center"  data-aos='fade-up' >
          <h1 className="text-gradient">My Projects</h1>
          <p className="text-secondary">Top recent most projects develop by me</p>
        </div>
        <Row xs={1} md={3} lg={3} className="g-4 mt-3">
          <Col>
            <Card className="border-0 shadow h-100" data-aos='flip-left' >
              <div className="project-img-container">
                <div className="project-img project1"></div>
              </div>
              <Card.Body className="px-1 py-">
                <div className="d-flex project-technology flex-wrap">
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ReactJS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    React-Bootstrap
                  </span>
                  
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    MongoDB
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Firebase
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ExpressJS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
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
                 
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between ">
              <a
                    className=" text-decoration-none "
                    href="https://smartfury-0.web.app/home"
                    target="_blank"
                  >
                   <button className='bg-1 rounded-pill outline-none border-0 text-white px-2'> Live Preview</button>
                  </a>
              <Link
                    className=" mx-1 text-decoration-none "
                    to="/project/smartFury"
                  >
                   <button className='bg-blue rounded-pill outline-none border-0 text-white px-2'> See Details</button>
                  </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow  h-100" data-aos='flip-left' >
              <div className="project-img-container">
                <div className="project-img project-2"></div>
              </div>
              <Card.Body className="px-1 py-">
                <div className="d-flex project-technology flex-wrap">
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ReactJS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    React-Router
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Firebase
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    Node
                  </span> 
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    MongoDB
                  </span>
                  
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ExpressJS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
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
                  
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between ">
              <a
                    className=" text-decoration-none "
                    href="https://holiday-planners.web.app/"
                    target="_blank"
                  >
                   <button className='bg-1 rounded-pill outline-none border-0 text-white px-2'> Live Preview</button>
                  </a>
              <Link
                    className=" mx-1 text-decoration-none "
                    to="/project/smartFury"
                  >
                   <button className='bg-blue rounded-pill outline-none border-0 text-white px-2'> See Details</button>
                  </Link>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 shadow h-100" data-aos='flip-left'>
              <div className="project-img-container">
                <div className="project-img project3"></div>
              </div>
              <Card.Body className="px-1 py-">
                <div className="d-flex project-technology flex-wrap">
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ReactJS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    Node
                  </span> 
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    MongoDB
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Firebase
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    ExpressJS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
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
                  
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between ">
              <a
                    className=" text-decoration-none "
                    href="https://medicare-f4600.web.app/"
                    target="_blank"
                  >
                   <button className='bg-1 rounded-pill outline-none border-0 text-white px-2'> Live Preview</button>
                  </a>
              <Link
                    className=" mx-1 text-decoration-none "
                    to="/project/smartFury"
                  >
                   <button className='bg-blue rounded-pill outline-none border-0 text-white px-2'> See Details</button>
                  </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectsSlide;
