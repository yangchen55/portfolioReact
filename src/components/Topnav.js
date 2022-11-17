import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Topnav = () => {
  return (
    
<Navbar collapseOnSelect bg="none" expand="md">
      <Container>
        <Navbar.Brand href="#home">Tsering Yangchen lama</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#skills">skills</Nav.Link>
            <Nav.Link href="#project">project</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
            <Nav.Link href="#aboutme">about me</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  )
}
