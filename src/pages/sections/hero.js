import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Hero = ({ navHeight }) => {
  return (
    <section
      className="w-100 bg-darker d-flex align-items-center"
      id="hero"
      style={{ minHeight: `calc(100vh - ${navHeight})` }}
    >
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="my-3 text-primary">brian siklinski</h1>
            <h2 className="my-3 text-warning">freelance web developer</h2>
            <p className="text-light">based in beautiful Buffalo, NY, USA</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
