import React from 'react'
import { Col, Container, Row , Button} from 'react-bootstrap'
import { Layout } from './Layout'
import contact from '../assets/contact.PNG'

export const Contact = () => {
  return (
    <Layout>
    <div id ="contact" className="container contact rounded-5 px-5">
        <div className="title text-center fs-1 fw-bolder mt-5 mb-5">
            <span style={{border:"none ;"}}>contact me</span>
              </div>
              <div className="icons py-3">
                <a href="mailto:tseyang986@gmail.com" target="_blank"><i className="fa-solid fa-envelope text-success"></i></a>
                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook text-primary"></i></a>              
                <a href="https://www.linkedin.com/in/tseyang22/" target="_blank"><i className="fa-brands fa-linkedin text-primary"></i></a>
              </div>
             

              
       
            </div>
           
               
               
            </Layout>
  )
}
