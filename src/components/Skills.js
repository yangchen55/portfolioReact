import React from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col} from "react-bootstrap"
import { Layout } from './Layout'
export const Skills = ({changeTheme}) => {
  return (
    <Layout changeTheme={changeTheme}> 
    <Container  id="skills" className="container py-3 mb-5">
  
      <Row>
        <Col>
          <div className="title text-center fs-1 fw-bolder mt-5 mb-5">
            <span>skills</span>
          </div>
          {/* <!-- icons --> */}
          <div className="icons">
            <div><i className="fa-brands fa-html5 text-danger"></i>html</div>
            <div><i className="fa-brands fa-css3-alt text-primary"></i>CSS</div>
            <div><i className="fa-brands fa-square-js text-danger"></i>javascript</div>
            <div><i className="fa-brands fa-figma text-"></i>figma</div>
            <div><i className="fa-brands fa-react text-primary App-logo"></i>react</div>
          </div>
        </Col>
      </Row>
    
  </Container>
  </Layout>
  )
}
