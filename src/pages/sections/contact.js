import React from "react"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faGithubAlt,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Row>
              <Row className="flex-grow-1 my-5 align-content-center">
                <Form netlify>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="email" placeholder="your email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="your message"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    send
                  </Button>
                </Form>
              </Row>
            </Container>
          </Col>

          {/* icon grid */}
          <Col xs={12} lg={{ span: 5, offset: 1 }} className="d-flex mb-5 mb-lg-0">
            <Container className="flex-grow-1 d-flex flex-column justify-content-center">
              <Row>
                <Col xs={6} className="border-bottom border-end p-0">
                  <div className="contact-grid-item text-center text-danger d-flex">
                    <a
                      href="mailto:bszyk.codes@gmail.com"
                      target="_blank"
                      rel="noopenner noreferrer"
                      className="p-4 flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="6x" />
                      <p>email</p>
                    </a>
                  </div>
                </Col>
                <Col
                  xs={6}
                  className="border-bottom border-start text-secondary p-0"
                >
                  <div className="contact-grid-item text-center d-flex">
                    <a
                      href="https://github.com/bszyk"
                      target="_blank"
                      rel="noopenner noreferrer"
                      className="p-4 flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faGithubAlt} size="6x" />
                      <p>github</p>
                    </a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="border-top border-end text-info p-0">
                  <div className="text-center d-flex">
                    <a
                      href="https://twitter.com/b_szyk"
                      target="_blank"
                      rel="noopenner noreferrer"
                      className="contact-grid-item p-4 flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faTwitter} size="6x" />
                      <p>twitter</p>
                    </a>
                  </div>
                </Col>
                <Col className="border-top border-start text-primary p-0">
                  <div className="text-center d-flex">
                    <a
                      href="https://www.linkedin.com/in/brian-siklinski/"
                      target="_blank"
                      rel="noopenner noreferrer"
                      className="contact-grid-item p-4 flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="6x" />
                      <p>linkedin</p>
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Contact
