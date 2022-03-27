import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Work = () => {
  return (
    <section id="work" className="w-100 min-vh-100 bg-dark text-danger">
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="my-3">Work Section</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work
