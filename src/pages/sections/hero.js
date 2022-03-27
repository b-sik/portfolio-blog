import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Hero = ({ navHeight }) => {
  return (
    <section
      className="w-100 bg-darker text-warning"
      id="hero"
      style={{ minHeight: `calc(100vh - ${navHeight})` }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="my-3">Hero Section</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
