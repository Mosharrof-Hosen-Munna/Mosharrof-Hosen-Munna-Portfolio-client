import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavigationClass from './Navigation.module.css'
console.log(NavigationClass)
const Navigation = () => {
  return (
    <Navbar className='bg-blue fw-bold text-white' sticky='top' expand="lg">
      <Container>
        <NavLink className='text-white text-decoration-none fs-3' to='/'>MUN<span style={{color:'#00ff7e'}}>NA .</span></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link text-white' to="/">Home</NavLink>
            <NavLink className='nav-link text-white' to="/about">About</NavLink>
            <NavLink className='nav-link text-white' to="/services">Services</NavLink>

            <NavLink className='nav-link text-white' to="/skills">Skills</NavLink>
            <NavLink className='nav-link text-white' to="/blogs">Blogs</NavLink>
            <NavLink className='nav-link text-white' to="/contact">Contact</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
