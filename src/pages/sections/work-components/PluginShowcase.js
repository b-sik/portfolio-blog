import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const PluginShowcase = () => {
  return (
    <Container className="d-flex flex-column h-100 flex-grow-1">
      <Row className="flex-grow-1 justify-content-around align-items-center">
        <Col xs={6} className="d-flex flex-column">
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <hr />
          <Container className="d-flex flex-column text-info text-center">
            plugins on github:
            <Button
              href="https://github.com/bszyk/adv-acc-ld-wc"
              variant="outline-warning"
              className="my-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced Access for LearnDash
            </Button>
            <Button
              href="https://github.com/bszyk/bszyk-sso"
              variant="outline-warning"
              target="_blank"
              rel="noopener noreferrer"
            >
              Custom SSO for WordPress
            </Button>
          </Container>
        </Col>
        <Col xs={{ span: 5, offset: 1 }}>
          <Card text="dark" border="light" className="p-0">
            <StaticImage
              className="card-img-top"
              src="../../../images/plugin.jpg"
              alt="example website frontend"
              width={700}
              height={450}
            />
            <Card.Body className="bg-light">
              <Card.Title>Dynamic Block Content</Card.Title>
              <div className="d-flex">
                <Card.Text className="h6" style={{ cursor: "default" }}>
                  &rarr;&nbsp;
                </Card.Text>
                <Card.Text className="h6" style={{ cursor: "default" }}>
                  A custom WordPress plugin to display dynamic data on the
                  frontend of your site.
                </Card.Text>
              </div>
              <div className="d-flex mt-3">
                <Button
                  className="w-50 me-1"
                  href="https://wordpress.org/plugins/dynamic-block-content/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wordpress
                </Button>
                <Button
                  className="w-50 ms-1"
                  href="https://github.com/bszyk/dynamic-block-content"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PluginShowcase
