import React from 'react'
import { Col, Container, Row , Button} from 'react-bootstrap'
import { Layout } from './Layout'
import movieReact from '../assets/1a.png'
import prankCalc from '../assets/prankCalc.png'
import nottodo from '../assets/nottodo.png'

export const Project = ({changeTheme}) => {
  return  (
    <Layout changeTheme={changeTheme}> 
    <div id ="projects" className="project section">
        <div className="projects py-5"> 
          
          <Container>
            <div className="title text-center fs-1 fw-bolder mt-5 mb-5">
                <span>Projects</span>
            </div>
           
       
      

            <Row className="md-5 g-2 mt-3">
            <Col md="6">
                <img src={movieReact}  className="projectImage" width="70%"/>
               
                </Col>
               
                <Col md="6">
                  <div className= "container">
                  <div>
                  <h2> Movie Collection </h2>
                  <div className='projectIcon'>
                    <a href="#! " target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href="#!" target="_blank"><i className="fa-brands fa-chrome"></i></a>
                  </div>
                  <p className="mt-2">
                    Tech used: html5, css3, bootstrap, react , rest api
                  </p>
                  <p>
                    In this project, with the assitance of movie api, user can easily search movie via names.The user can add the movies to their prefered list either <strong> Happy List </strong> or <strong> Sad List </strong>
                  </p>
                  
                  </div>
                  </div>

                </Col>
                 
              </Row>
              <hr></hr>

              <Row className="justify-content-md-5 g-2 mt-3">
                <Col md="6" className="order-md-2">
                <img src={prankCalc} className="projectImage" width="70%" />
                </Col>
                <Col md="6">
                  <div className= "container">
                  <h2>Prank Calculater</h2>
                  <div className='projectIcon'>
                    <a href=" " target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href=" " target="_blank"><i className="fa-brands fa-chrome"></i></a>
                  </div>
                  <p className="mt-2">
                    Tech used: html5, css3, react, javascript, bootstrap
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit odit illum deleniti facilis iusto consequatur quasi! Tempore, ut? Error necessitatibus, reprehenderit nemo rerum provident reiciendis fugiat suscipit aliquam! Maiores.
                  </p>
                  </div>
                </Col>
              </Row>
              <hr></hr>

              <Row className="justify-content-md-5 g-2 mt-3">
                <Col md="6" >
                <img src={nottodo} className="projectImage" width="70%" />
                </Col>
                <Col className="col-md">
                <div className= "container">
                  <h2>Not to do aplication</h2>
                  <div className='projectIcon'>
                    <a href="https://github.com/yangchen55/NotToDoListReact" target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href=" " target="_blank"><i className="fa-brands fa-chrome"></i></a>
                  </div>
                  <p className="mt-2">
                    tech used: html5, css3, bootstrap, node, react, javascript
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
     </Layout>
        


       )
        }
