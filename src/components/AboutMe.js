import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import heroImg2 from '../assets/anime.jpg'
import { Layout } from './Layout'
export const AboutMe = ({changeTheme}) => {
  return (
    <Layout changeTheme={changeTheme}> 
    <Container id="about-me" className="aboutme">
    <section className="container mt-3 py-5">
      <div className="title">
        <span> About me</span>
      </div>
      
      <Row className='md-5 '>
      <Col >
          <p>
            <h1> Who am I ?</h1>

            Hello, I am <strong> Tsering, a software Developer </strong> based in Sydney, Australia, who is experience in taking <strong>full stack applications</strong>  from scracth to production.
      
            </p> 
            <p>
            I am currently pursuing Master in computer  science with machine learning Specialization in  <strong>University of wollongong </strong>.
          </p>
         
        </Col>
        <Col >
        <div className='aboutmeImgCover'>
          <img  className='aboutmeImg' src={heroImg2} width="400px" />
          </div>
        </Col>
       
      </Row>
    </section>
  </Container>
  </Layout>
  )
}
