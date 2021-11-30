import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleSkills from "./SingleSkills";

const MySkills = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="text-center">
          <h1 className="text-gradient">My Skills</h1>
          <p className='text-secondary'>My programming, technologies and tools skills and experiences</p>
        </div>
        <Row xs={1} lg={2} className='g-0 g-lg-5 mt-3' >
          <Col>
            
            <SingleSkills technology='HTML5' percentage='80' className='html' />
            <SingleSkills technology='CSS3' percentage='75' className='css' />
            <SingleSkills technology='JavaScript' percentage='85' className='javascript' />
            <SingleSkills technology='ReactJS' percentage='90' className='react' />
          </Col>
          <Col>
            
            <SingleSkills technology='NodeJS' percentage='55' className='nodejs' />
            <SingleSkills technology='ExpresJs' percentage='65' className='expressjs' />
            <SingleSkills technology='React-Bootstrap' percentage='95' className='react-bootstrap' />
            <SingleSkills technology='MongoDB' percentage='60' className='mongodb' />
          </Col>
       
        </Row>
      </Container>
    </section>
  );
};

export default MySkills;