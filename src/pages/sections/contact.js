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
                <Col xs={6} className="border-bottom border-end">
                  <div className="p-4 text-center text-danger d-flex">
                    <a
                      href="/"
                      className="flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} size="6x" />
                      <p>
                        <span>bszyk.codes</span> <span>@gmail.com</span>
                      </p>
                    </a>
                  </div>
                </Col>
                <Col
                  xs={6}
                  className="border-bottom border-start text-secondary"
                >
                  <div className="p-4 text-center d-flex">
                    <a
                      href="/"
                      className="flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faGithubAlt} size="6x" />
                      <p>github</p>
                    </a>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="border-top border-end text-info">
                  <div className="p-4 text-center d-flex">
                    <a
                      href="/"
                      className="flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <FontAwesomeIcon icon={faTwitter} size="6x" />
                      <p>twitter</p>
                    </a>
                  </div>
                </Col>
                <Col className="border-top border-start text-primary">
                  <div className="p-4 text-center d-flex">
                    <a
                      href="/"
                      className="flex-grow-1"
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
