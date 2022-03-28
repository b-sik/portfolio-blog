import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
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
          <Col xs={5}>
            <h2 className="my-5">contact</h2>
          </Col>

          <Col xs={{ span: 5, offset: 1 }} className="d-flex">
            <Container className="flex-grow-1 d-flex flex-column justify-content-center">
              <Row>
                <Col xs={6} className="border-bottom border-end p-0">
                  <div className="contact-grid-item text-center text-danger d-flex">
                    <a
                      href="/"
                      className="p-4 flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="6x" />
                      <p>info@bsik.com</p>
                    </a>
                  </div>
                </Col>
                <Col
                  xs={6}
                  className="border-bottom border-start text-secondary p-0"
                >
                  <div className="contact-grid-item text-center d-flex">
                    <a
                      href="/"
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
                      href="/"
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
                      href="/"
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
