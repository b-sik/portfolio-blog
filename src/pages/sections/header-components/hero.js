import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Hero = ({ navHeight }) => {
  const {
    file: { publicURL },
  } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "duotone" }) {
          id
          publicURL
        }
      }
    `
  )

  return (
    <ParallaxProvider>
      <ParallaxBanner layers={[{ image: publicURL, speed: -15 }]}>
        <section
          className="w-100 bg-darker d-flex align-items-center"
          id="hero"
          style={{
            minHeight: `calc(100vh - ${navHeight})`,
          }}
        >
          <Container style={{ zIndex: 1 }}>
            <Row>
              <Col xs={12}>
                <h1 className="my-3 text-primary">brian siklinski</h1>
                <h2 className="my-3 text-warning">freelance web developer</h2>
                <p className="text-light mb-1 small">
                  <span className="d-none d-sm-inline-block">&rarr;&nbsp;</span>
                  React, JavaScript, PHP, WordPress, and more
                </p>
                <p className="text-light small">
                  <span className="d-none d-sm-inline-block">&rarr;&nbsp;</span>
                  based in Buffalo, NY and Toronto, ON
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </ParallaxBanner>
    </ParallaxProvider>
  )
}

export default Hero
