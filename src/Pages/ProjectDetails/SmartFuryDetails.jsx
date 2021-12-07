import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faAngleDoubleRight,
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
import WebpageCard from "./WebpageCard";
import "./ProjectDetails.css";
import smartFuryHome from "../../Assets/Images/projects/smart-fury-home.png";
import smartFuryExplore from "../../Assets/Images/projects/smartFury/smartFury-explore.png";
import ProductDetailsPage from "../../Assets/Images/projects/smartFury/smartFury-productDetails.png";
import PlaceOrderPage from "../../Assets/Images/projects/smartFury/smartFury-placeOrder.png";
import adminDashboardPage from "../../Assets/Images/projects/smartFury/smartFury-admin-dashboard.png";
import manageOrdersPage from "../../Assets/Images/projects/smartFury/smartFury-manageOrders.png";
import addProductPage from "../../Assets/Images/projects/smartFury/smartFury-addProduct.png";
import manageProductPage from "../../Assets/Images/projects/smartFury/smartFury-manageProduct.png";
import myOrdersPage from "../../Assets/Images/projects/smartFury/smartFury-myOrders.png";

const SmartFuryDetails = () => {
  return (
    <section className="py-4 bg-light-blue" style={{ minHeight: "700px" }}>
      <Container>
        <div className="text-center">
          <h1 className="text-gradient">SmartFury Project Details</h1>
        </div>
        <Row className="g-4 mt-3">
          <Col xs={12} md={8}>
            <div>
              <h3 className="text-blue">Features: </h3>
              <ul style={{listStyle:'square'}}>
                <li className="my-3">
                  SmartFury is a niche e-commerce site. where we sell best
                  category watch. User friendly with dashboard and high security
                  system with login and register feature using firebase and
                  nodejs, mongodb.
                </li>
                <li className="my-3">
                  A customers can buy a product with his full independence of
                  order quantity. Customers can add delivery address where
                  customers want to recive ordered product with many payment
                  option. When an customers buy a product they can give a review
                  on dashboard, manage their order product status.
                </li>
                <li className="my-3">
                  An admin can be access full controls of this application.
                  Admin can manage customers order (by doing order cancel and
                  when delivered product then update status 'delivered'). Admin
                  can add a new product, make new admin user, also manage all
                  products.
                </li>
                <li className="my-3">
                  We now optimize this website performance for giving a smoth
                  user experience. Customize React component structure and file
                  system, state management system best way. If you want to test this product as a admin login by this information: Email: <strong>(admin@admin.com)</strong> , Password: <strong>123456</strong> .
                </li>
              </ul>
            </div>
            <div>
              <div className="d-flex flex-wrap align-items-center">
                <a href="https://smartfury-0.web.app/" className="text-decoration-none d-inline-block my-1">
                  <span className="m-1 px-3 py-1 fw-bold text-white rounded-pill bg-1">
                    <FontAwesomeIcon
                      icon={faEye}
                      size="lg"
                      className="text-white me-1 fa-1x"
                    />{" "}
                    Preview
                  </span>
                </a>
                <a href="https://github.com/Mosharrof-Hosen-Munna/SmartFury" className="text-decoration-none d-inline-block my-2">
                  <span className="m-1 px-3 py-1 fw-bold text-white rounded-pill bg-2">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      className="text-white me-1 fa-1x"
                    />
                    Client-site-repo
                  </span>
                </a>
                <a href="https://github.com/Mosharrof-Hosen-Munna/SmartFury-server" className="text-decoration-none d-inline-block my-1">
                  <span className=" m-1 px-3 py-1 fw-bold text-white rounded-pill bg-3">
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="lg"
                      className="text-white me-1 fa-1x"
                    />
                    Server-site-repo
                  </span>
                </a>
              </div>
            </div>
            <div className="my-3">
              <h3 className="text-blue mt-4">Web Pages</h3>
              <Row xs={2} md={3} className="g-3 g-lg-4 mt-2">
                <WebpageCard webpage={smartFuryHome} name="Home" />
                <WebpageCard webpage={smartFuryExplore} name="Explore" />
                <WebpageCard
                  webpage={ProductDetailsPage}
                  name="Product Details"
                />
                <WebpageCard webpage={PlaceOrderPage} name="Place Order" />
                <WebpageCard
                  webpage={adminDashboardPage}
                  name="Admin Dashboard="
                />
                <WebpageCard webpage={manageOrdersPage} name="Manage Orders" />
                <WebpageCard webpage={addProductPage} name="Add Product" />
                <WebpageCard
                  webpage={manageProductPage}
                  name="Manage Product"
                />
                <WebpageCard webpage={myOrdersPage} name="My Orders" />
              </Row>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              <h4 className="text-blue">Language and Technologies used:</h4>
              <div>
                <h5 className=" mt-3">
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    size="lg"
                    className="text-blue fa-1x"
                  />{" "}
                  Language
                </h5>
                <div className="d-flex flex-wrap">
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    JavaScript
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    Node JS
                  </span>
                </div>
              </div>
              <div>
                <h5 className=" mt-3">
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    size="lg"
                    className="text-blue fa-1x"
                  />{" "}
                  Frameworks
                </h5>
                <div className="d-flex flex-wrap">
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    React JS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    React Router
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    Express JS
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Dotenv
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    React-Bootstrap
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    React Fontawesome
                  </span>
                </div>
              </div>
              <div>
                <h5 className=" mt-3">
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    size="lg"
                    className="text-blue fa-1x"
                  />{" "}
                  Database
                </h5>
                <div className="d-flex flex-wrap">
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    MongoDB
                  </span>
                </div>
              </div>
              <div>
                <h5 className=" mt-3">
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    size="lg"
                    className="text-blue fa-1x"
                  />{" "}
                  Other tools
                </h5>
                <div className="d-flex flex-wrap">
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-1">
                    Firebase
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-2">
                    Heroku
                  </span>
                  <span className=" m-1 px-3 fw-bold text-white rounded-pill bg-3">
                    Git and Github
                  </span>
                </div>
              </div>
            </div>
            <div className='my-5'>
              <h4 className="text-gradient">Want to contact with me?</h4>
              <div className="d-flex">
                <div>
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="lg"
                    className=" fa-1x me-3"
                  />
                </div>
                <div className="text-dark">
                  Pakundia, Kishoreganj, Dhaka, Bangladesh
                </div>
              </div>
              <div className="d-flex mt-3">
                <div>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    size="lg"
                    className=" fa-1x me-3"
                  />
                </div>
                <div className="">+88 01986-116253</div>
              </div>
              <div className="d-flex mt-3">
                <div>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    className=" fa-1x me-3"
                  />
                </div>
                <div className="">mosharrofmunna0@gmail.com</div>
              </div>
            </div>
            <div>
                <h4 className='text-gradient'>Connect With Me!</h4>
                <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100028489011065"
                  className=" me-3"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="lg"
                    className=" fa-2x"
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
                    className="text-dark  fa-2x"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mosharrofhosen/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="lg"
                    className="fa-2x"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SmartFuryDetails;
