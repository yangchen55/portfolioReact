import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Project = () => {
  return  (
    <div id ="projects" className="project section">
        <div className="projects py-5"> 
          
          <Container>
            <div className="title text-center fs-1 fw-bolder mt-5 mb-5">
                <span>projects</span>
            </div>

            <Row className="row mb-5">
                <Col className="col-md mb-3">
                 
                  <img src="/personal-blog/assets/figma.png" alt="project" width="100%"/>
                </Col>
               
                <Col className="col-md mb-3">
                  <div>
                  <h2>Portfolio website</h2>
                  <div>
                    <a href="#! " target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href="#!" target="_blank"><i className="fa-brands fa-chrome"></i></a>
                  </div>
                  <p className="mt-2">
                    tech used: html5, css3, bootstrap
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit odit illum deleniti facilis iusto consequatur quasi! Tempore, ut? Error necessitatibus, reprehenderit nemo rerum provident reiciendis fugiat suscipit aliquam! Maiores.
                  </p>
                  </div>

                </Col>
              </Row>

              <Row className="row mb-5">
                <Col className="col-md mb-3 order-md-2">
                  <img src="/personal-blog/assets/figma.png" alt="project" width="100%"/>
                </Col>
                <Col className="col-md mb-3">
                  <div>
                  <h2>Portfolio website</h2>
                  <div>
                    <a href=" " target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href=" " target="_blank"><i className="fa-brands fa-chrome"></i></a>
                  </div>
                  <p className="mt-2">
                    tech used: html5, css3, bootstrap
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit odit illum deleniti facilis iusto consequatur quasi! Tempore, ut? Error necessitatibus, reprehenderit nemo rerum provident reiciendis fugiat suscipit aliquam! Maiores.
                  </p>
                  </div>

                </Col>
              </Row>

              <Row className="row mb-5">
                <Col className="col-md mb-3">
                  <img src="/personal-blog/assets/figma.png" alt="project" width="100%"/>
                </Col>
                <Col className="col-md mb-3">
                  <div>
                  <h2>Portfolio website</h2>
                  <div>
                    <a href=" " target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href=" " target="_blank"><i className="fa-brands fa-chrome"></i></a>
                  </div>
                  <p className="mt-2">
                    tech used: html5, css3, bootstrap
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit odit illum deleniti facilis iusto consequatur quasi! Tempore, ut? Error necessitatibus, reprehenderit nemo rerum provident reiciendis fugiat suscipit aliquam! Maiores.
                  </p>
                  </div>

                </Col>
              </Row>
            
          </Container>

          </div>
          </div>
        


       )
        }
