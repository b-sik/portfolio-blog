import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import IconGrid from "../../components/iconGrid"
import ContactForm from "../../components/contactForm"

const Contact = () => {
  return (
    <footer
      id="contact"
      className="d-flex w-100 min-vh-100 bg-darker text-warning"
    >
      <Container className="d-flex flex-grow-1">
        <Row className="flex-grow-1">
          <Col xs={12} lg={5} className="d-flex flex-column flex-grow-1">
            <h2 className="my-5">contact</h2>
            <Container className="d-flex flex-column flex-grow-1">
              <Row className="flex-grow-1 align-content-center">
                <p className="text-light">
                  Please reach out to me if you are looking for a professional
                  web developer to create a modern website or application for
                  you.
                </p>
              </Row>
              <Row className="flex-grow-1 my-5 align-content-center">
                <ContactForm />
              </Row>
            </Container>
          </Col>
          <IconGrid />
        </Row>
      </Container>
    </footer>
  )
}

export default Contact
