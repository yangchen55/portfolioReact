import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import heroImg2 from '../assets/anime.jpg'
export const AboutMe = () => {
  return (
    <Container id="about-me" className="aboutme section">
    <section className="container mt-3 py-5">
      <div className="title">
        <span> about me</span>
      </div>
      
      <Row>
        <Col className="col-md-5 mb-5">
          <img src={heroImg2}width="70%" /></Col>
        <Col className="col-md-7">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident suscipit quas aperiam optio est laudantium voluptate maxime doloribus, iusto id. Quia vitae quos rerum officia similique aliquam exercitationem molestiae iusto.
          </p> 
          </Col>
      </Row>
    </section>
  </Container>
  )
}
