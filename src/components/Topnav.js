import React from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Topnav = ({ changeTheme }) => {
  return (

    <Navbar collapseOnSelect expand="md" className="top-nav">
      <Container >
        <Link
          className="nav-link"
          style={{ fontFamily: "Playfair Display", marginRight: "200px" }}
          to="/"
        >
          Tsering
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0 ">
            <Link className="nav-link ab" to="/skills">
              Skills
            </Link>
            <Link className="nav-link ab" to="/projects">
              Projects
            </Link>
            <Link className="nav-link ab" to="/about-me">
              About-me
            </Link>
            <Link className="nav-link ab" to="/contact">
              Contact
            </Link>
            <Form className="nav-link ab" >
              <Form.Check
                type="switch"
                id="custom-switch"
                onChange={changeTheme}
              />
            </Form>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};
