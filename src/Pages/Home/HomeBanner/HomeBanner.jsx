import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeBannerClasses from "./HomeBanner.module.css";
import headerImage from '../../../Images/header-image.png'
import resume from '../../../Assets/Mosharrof Hosen Munna Resume.pdf'

const HomeBanner = () => {
  return (
    <section className={HomeBannerClasses.banner + 'pb-5'}>
      <Container>
        <Row xs={1} md={2} className='g-0 g-md-4'>
          <Col
            className={"d-flex align-items-center "}
          >
            <div className='py-5'>
              <div>
                <span
                  className={`p-2  bg-blue ${HomeBannerClasses.banner_toltip} rounded text-white position-relative fw-bold`}
                >
                  Hi There!
                </span>
                <h1 className="mt-4">
                  I am{" "}
                  <span className="text-gradient">Mosharrof Hosen Munna</span>
                </h1>
                <h1>A Web Developer</h1>
                <p className='text-secondary '>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti est, blanditiis sed expedita fuga, quod officia quasi
                  ut, quisquam laborum beatae hic soluta! Voluptates commodi
                </p>
              </div>
              <div className="mt-4">
               <a href="https://www.linkedin.com/in/mosharrofhosen/" target='_blank'>
               <button className="button-blue fw-bold me-3">Hire Me</button>
               </a>
                <a href={resume} download='Mosharrof Hosen Munna Resume'>
                <button className="button-white fw-bold ">
                  Download Resume
                </button>
                </a>
              </div>
            </div>
          </Col>
          <Col  className={"d-flex align-items-center d-none d-lg-block"}>
                <div className={' w-100 position-relative ' + HomeBannerClasses.banner_image}>
                    <img className={`w-100 `} src={headerImage} alt="" />
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBanner;
