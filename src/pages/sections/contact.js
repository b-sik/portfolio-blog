import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Contact = () => {
  return (
    <footer id="contact" className="w-100 min-vh-100 bg-darker text-info">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="my-3">Contact Section</h2>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Contact
