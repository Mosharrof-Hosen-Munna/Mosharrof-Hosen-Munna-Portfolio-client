import React from 'react'
import { Container } from 'react-bootstrap'
import comingSoonImg from '../../Assets/Images/coming-soon.svg'

const Services = () => {
    return (
        <div className="text-center text-gradient" style={{ minHeight: "600px" }}>
      <Container>
        <div className="py-4">
          <img className="w-50" src={comingSoonImg} alt="" />
          <h3 className="text-gradient">Services Coming Soon!</h3>
        </div>
      </Container>
    </div>
    )
}

export default Services
