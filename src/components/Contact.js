import React from 'react'
import { Layout } from './Layout'

export const Contact = () => {
  return (
    <Layout>
    <div id ="contact" className=" container contact rounded-5 px-5">
        <div className="title text-center fs-1 fw-bolder mt-5 mb-5">
            <span style={{border:"none ;"}}>contact me</span>
              </div>

              <div className="icons py-3">
                <a href="mailto:tse@gmail.com"><i className="fa-solid fa-envelope text-light"></i></a>
                <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook text-white"></i></a>
                <a href=""><i className="fa-brands fa-instagram text-white"></i></a>
                <a href=""><i className="fa-brands fa-linkedin text-primary"></i></a>
              </div>
              
       
            </div>
            </Layout>
  )
}
