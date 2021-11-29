import React from 'react'
import { Col, Row ,Container} from 'react-bootstrap'
import aboutMeImg from '../../../Assets/Images/aboutme.png'

const AboutMe = () => {
    return (
        <section className='py-5'>
            <Container>
                <Row xs={1} md={2} className='g-4'>
                    <Col>
                        <div>
                            <img style={{background: '#D4DADF'}} className='w-100 rounded' src={aboutMeImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe
