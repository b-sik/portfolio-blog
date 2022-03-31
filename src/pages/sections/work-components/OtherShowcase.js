import React from "react"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"

const PluginShowcase = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center h-100 flex-grow-1">
      <Row className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Col
          xs={{ span: 10, offset: 1 }}
          className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
          <ListGroup>
            <ListGroup.Item variant="secondary">
              <Container>
                <Row>
                  <Col xs={8}>
                    &rarr;&nbsp;<strong>Take Your Meds Bot</strong> |
                    ADHD-inspired Twitter bot powered by AWS Lambda functions
                    and written with Python.
                  </Col>
                  <Col
                    xs={4}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <Button
                      href="https://twitter.com/takeyourmedsbot"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-dark"
                      className="mb-2 w-100"
                    >
                      Twitter
                    </Button>
                    <Button
                      href="https://github.com/bszyk/twitter-bots"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-dark"
                      className="w-100"
                    >
                      GitHub
                    </Button>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              <Container>
                <Row>
                  <Col xs={8}>
                    &rarr;&nbsp;<strong>Zip WP</strong> | Bash script delivered
                    via Composer package to prepare a zip archive for a
                    WordPress plugin.
                  </Col>
                  <Col
                    xs={4}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <Button
                      href="https://packagist.org/packages/bszyk/zip-wp"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-dark"
                      className="mb-2 w-100"
                    >
                      Packagist
                    </Button>
                    <Button
                      href="https://github.com/bszyk/zip-wp"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-dark"
                      className="w-100"
                    >
                      GitHub
                    </Button>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item variant="info">
              <Container>
                <Row>
                  <Col xs={8}>
                    &rarr;&nbsp;<strong>This Website</strong> | Fully static
                    site made with Gatsby, React, and Bootstrap.
                  </Col>
                  <Col
                    xs={4}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <Button
                      href="https://github.com/bszyk/portfolio-blog"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-dark"
                      className="w-100"
                    >
                      GitHub
                    </Button>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default PluginShowcase
