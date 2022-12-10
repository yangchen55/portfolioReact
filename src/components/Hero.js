import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'

import heroImg from '../assets/1.png'
import heroImg1 from '../assets/logo.png'
import { Layout } from './Layout'


export const Hero = ({changeTheme}) => {
  return (
    <div className="hero" id="hero">
       
       
    <Layout changeTheme={changeTheme}> 
    <Container>
        <Row className="row mt-5">
            <Col md="6" className="col-md-5 text-center order-2">
                <img src={heroImg} width="80%" height="80%"/>
            </Col>
             <Col md="6">
                Hi! I am Tsering Yangchen lama 🙏
                <div className="fs-1 fw-bolder mb-5">Full stack developer | software engineer</div>
                <p>
                I love coding and debugging the code.   I like my time spending on coding.

                </p>
                <Button className="btn btn-danger"> Download Resume</Button>
             </Col>
           
        </Row>
        
    </Container>
    </Layout>   




  </div>
  )
}
