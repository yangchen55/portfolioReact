import React from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import heroImg from "../assets/1.png";
import { Layout } from "./Layout";
export const Hero = ({ changeTheme }) => {
  return (
    <div className="hero" id="hero">
      <Layout changeTheme={changeTheme}>
        <Container>
          <Row className="row mt-5">
            <Col md="6" className="text-center order-2">
              <img src={heroImg} width="60%" height="80%" />
            </Col>
            <Col md="6" className="text-center mt-5">
              <div className="fs-3 mt-5">
                Hi! I am Tsering Yangchen lama 🙏
                <h1> Full stack developer || software engineer</h1>
              </div>
              <p>
                I spent most of my time coding, so I identify myself a coder 🙂.
              </p>
              <Button className="btn btn-danger"> Download Resume</Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
