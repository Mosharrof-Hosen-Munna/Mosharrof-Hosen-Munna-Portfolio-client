import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavigationClass from './Navigation.module.css'
console.log(NavigationClass)
const Navigation = () => {
  return (
    <Navbar className='bg-blue fw-bold text-white' sticky='top' expand="lg">
      <Container>
        <Navbar.Brand className='text-white' href="#home">MUNNA .</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link text-white' to="/">Home</NavLink>
            <NavLink className='nav-link text-white' to="/about">About</NavLink>
            <NavLink className='nav-link text-white' to="/services">Services</NavLink>

            <NavLink className='nav-link text-white' to="/contact">Skills</NavLink>
            <NavLink className='nav-link text-white' to="/contact">Contact</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
