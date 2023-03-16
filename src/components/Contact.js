import React from "react";
import { Col, Container, Row, Button, ButtonGroup, Form } from "react-bootstrap";
import { Layout } from "./Layout";
import contact from "../assets/contact.PNG";

export const Contact = ({ changeTheme }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(e)

  }
  return (
    <Layout changeTheme={changeTheme}>
      {/* <div id="contact" className="container contact rounded-5 px-5">
      </div> */}

      <Container className="mt-5">
        <h2> Contact Me</h2>
        <hr className="horizontal"></hr>
        <div className="section m-3">
          <p className="text-muted"> <a href="https://www.google.com/maps/place/Wollongong/@-34.4324505,150.8864058,15.65z/data=!4m6!3m5!1s0x6b1319a315e2b78d:0x897d30f1f83af43e!8m2!3d-34.4270074!4d150.8883019!16zL20vMDk3MGNk
" target="_blank">
            <i className="fa fa-map-marker text-danger m-2"></i>
          </a> Sydney, Australia</p>
          <p className="text-muted"> <a href="https://www.linkedin.com/in/tseyang22/" target="_blank">
            <i className="fa-brands fa-linkedin text-primary m-2"></i>
          </a> lets connect!</p>
          <p className="text-muted"> <a href="mailto:tseyang986@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-success m-2"></i>
          </a> tseyang986@gmail.com</p>


        </div>

        <br></br>
        <p className="text-muted text-center">Let's get in touch. Send me a message:</p>

        <div className="contact m-3 p-5">

          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control className="contact-input-form" type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Email" className="contact-input-form" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control className="contact-input-form" type="text" placeholder="subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control className="contact-input-form" type="text" as="textarea" placeholder="message" />
            </Form.Group>
            <Button className="contact-input-form" variant="dark" type="submit"> <i class="fa fa-paper-plane"></i> SEND MESSAGE</Button>
          </Form>
        </div>
      </Container>





    </Layout >
  );
};
