import React ,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'

import { Link } from 'react-router-dom';

export const Topnav = ({changeTheme}) => {
 

 
 
  


  return (
    
<Navbar collapseOnSelect  expand="md" className='top-nav'>
      <Container>
        <Link className='nav-link' style={{ fontFamily:"Trattatello, fantasy", marginRight:"200px"}} to="/">Tsering</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0 text-white" >
            <Link className='nav-link' to="/skills">Skills</Link>
            <Link className='nav-link' to="/projects">Projects</Link>
            <Link className='nav-link' to="/about-me">About-me</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
            <Link className='nav-link' onClick={changeTheme} >🌓</Link>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




  )
}
