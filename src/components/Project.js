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
    <div className="container mt-3 py-5">
          
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
                  <h2> Movies' Desk </h2>
                  <div className='projectIcon'>
                    <a href="#! " target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href="#!" target="_blank"><i className="fa-brands fa-chrome"></i></a>
                  </div>
                  <p className="mt-2">
                    <h3> Tech used:</h3> HTML5, CSS3, Bootstrap, React and  Rest API
                  </p>
                  <p>
                    In this project, with the assitance of movie api, user can easily search movie via movie's title.The user can add the movies to their prefered list either <strong> Happy List </strong> or <strong> Sad List. </strong> If going  with design, it is obviously responsive.
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
                    Tech used: Html5, CSS3, React, Javascript, Bootstrap
                  </p>
                  <p>
                    In this project,  designing calculater's functionalities  is main motive
                     with with sense of humour by pranking the user with some of the results.
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
                    Tech used: html5, css3, bootstrap, node, react, javascript
                  </p>
                  <p>
                    Not to do Application is such application that track a week of things that user has been done with accurate hours. Consequently, the user can comprehend how many hours are being quality and rest are being rest fruitful in a week.
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
