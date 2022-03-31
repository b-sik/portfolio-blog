import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const ThemeShowcase = () => {
  return (
    <Container className="d-flex flex-column h-100 flex-grow-1">
      <Row className="flex-grow-1 justify-content-center align-items-start">
        <Col xs={8}>
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col xs={4} className="d-flex flex-column align-items-center text-info">
          happy clients:
          <Button
            href="http://breathtobody.com"
            target="_blank"
            rel="noopenner noreferrer"
            variant="outline-warning"
            className="my-3"
          >
            beathtobody.com
          </Button>
          <Button
            href="https://www.westferrymusic.com"
            target="_blank"
            rel="noopenner noreferrer"
            variant="outline-warning"
          >
            westferrymusic.com
          </Button>
        </Col>
      </Row>
      <hr />

      <Row className="flex-grow-1 justify-content-around align-items-center">
        <Card
          style={{ width: "16rem" }}
          text="dark"
          border="lighter"
          className="p-0"
        >
          <StaticImage
            className="card-img-top"
            src="../../../images/theme-frontend.png"
            alt="example website frontend"
            width={300}
            height={200}
          />
          <Card.Body className="bg-light d-flex">
            <Card.Text className="h6" style={{ cursor: "default" }}>
              &rarr;&nbsp;
            </Card.Text>
            <Card.Text className="h6" style={{ cursor: "default" }}>
              Fully responsive custom themes for your small business or project.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "16rem" }}
          text="dark"
          border="lighter"
          className="p-0"
        >
          <StaticImage
            className="card-img-top"
            src="../../../images/theme-backend.png"
            alt="example website backend"
            width={300}
            height={200}
          />
          <Card.Body className="bg-light d-flex">
            <Card.Text className="h6" style={{ cursor: "default" }}>
              &rarr;&nbsp;
            </Card.Text>
            <Card.Text className="h6" style={{ cursor: "default" }}>
              Content Management System customized and tailored to your needs.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default ThemeShowcase
