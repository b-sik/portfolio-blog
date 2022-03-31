import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"

const PluginShowcase = () => {
  return (
    <Container className="d-flex flex-column h-100 flex-grow-1">
      <Col
        xs={{ span: 10, offset: 1 }}
        className="flex-grow-1 d-flex justify-content-center align-items-center"
      >
        <ListGroup>
          <ListGroup.Item action variant="light">
            &rarr;&nbsp;<strong>Take Your Meds Bot</strong> | ADHD-inspired
            Twitter bot powered by AWS Lambda functions and written with Python.
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            &rarr;&nbsp;<strong>WP Zip</strong> | Bash script delivered via
            Composer package to prepare a zip archive for a WordPress plugin.
          </ListGroup.Item>
          <ListGroup.Item action variant="light">
            &rarr;&nbsp;<strong>This Website</strong> | Fully static site made
            with Gatsby, React, and Bootstrap.
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Container>
  )
}

export default PluginShowcase
