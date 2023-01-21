import React from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col} from "react-bootstrap"
import { Layout } from './Layout'
export const Skills = ({changeTheme}) => {
  return (
    <Layout changeTheme={changeTheme}> 
    <Container  id="skills" className="container py-3 mb-5">
  
     
        
          <div className="title text-center fs-1 fw-bolder mt-5 mb-5">
            <span>skills</span>
          </div>
          {/* <!-- icons --> */}
          <Row className="icons g-5 mt-3">
            <Col><i className="fa-brands fa-html5 text-danger"></i>html</Col>
            <Col><i className="fa-brands fa-css3-alt text-primary"></i>CSS</Col>
            <Col><i className="fa-brands fa-square-js text-danger"></i>javascript</Col>
            <Col><i className="fa-brands fa-figma text-"></i>figma</Col>
            <Col><i className="fa-brands fa-react text-primary App-logo"></i>react</Col>
            <Col><i className="fa-brands fa-node"></i>Node</Col>
            <Col><i className="fa-brands fa-sql App-logo"></i>react</Col>
          </Row>
        
    
  </Container>
  </Layout>
  )
}
