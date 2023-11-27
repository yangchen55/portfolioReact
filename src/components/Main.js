import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SocialIcon } from 'react-social-icons'
import project1 from "../assets/nottodo.png";

const Main = () => {
    return (
        <>
            <Row className='mt-3 d-flex justify-content-evenly'>
                <Col></Col>
                <Col className='col-12 col-md-8  p-4 mainContent'>
                    <h3>
                        Hello 👋,  I am <strong className='occupation'>Full-Stack Developer</strong>, specializing in building dynamic, user-friendly web applications. My expertise spans front-end frameworks like React and JavaScript to back-end technologies like Node.js and Python. I'm passionate about turning complex challenges into smart, scalable solutions.
                    </h3>
                    <h6 className="mt-3"> Check out my projects to see how I blend technical skill with creative problem-solving. Excited to connect and discuss how we can collaborate on your next project! </h6>
                    <em>Master's degree in Computer Science at <a href='https://www.uow.edu.au/'>University of Wollongong</a></em>
                    <div className='mt-2 '>
                        <SocialIcon network='github' href="https://github.com/yangchen55" target="_blank" rel="noopener noreferrer" />
                        <SocialIcon network='linkedin' href="https://www.linkedin.com/in/yangchen55/" target="_blank" rel="noopener noreferrer" className='m-2' />
                        <SocialIcon network='email' href="mailto:tseyang986@gmail.com" target="_blank" rel="noopener noreferrer" />
                    </div>
                </Col>
                <Col></Col> {/* Empty div for spacing */}
            </Row>
            <div className='projects'>
                <Row className="justify-content-md-5  mt-3">
                    <Col md="6" className="projectImage">
                        <img src={project1} width="70%" loading="lazy" alt="Project Description" />
                    </Col>
                    <Col>
                        <Container>
                            <h2>Not to do application</h2>
                            Tech used: html5, css3, bootstrap, node, react, javascript
                            <div className='m-2 '>
                                <SocialIcon network='github' href="https://github.com/yangchen55/NotToDoListReact" target="_blank" rel="noopener noreferrer" />
                                <SocialIcon network='twitch' href="https://clear-pear-pantsuit.cyclic.app/" target="_blank" rel="noopener noreferrer" className='m-2' />
                            </div>
                        </Container>

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Main