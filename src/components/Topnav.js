import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export const Topnav = () => {
  return (
    
<Navbar collapseOnSelect bg="none" expand="md" className='top-nav'>
      <Container>
        <Link className='nav-link' to="/">Tsering Yangchen lama</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/skills">skills</Link>
            <Link className='nav-link' to="/projects">projects</Link>
            <Link className='nav-link' to="/about-me">about-me</Link>
            <Link className='nav-link' to="/contact">contact</Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  )
}
