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
        <Col xs={5}>
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
                  A custom WordPress plugin to display dynamic data on the frontend of your site.
                </Card.Text>
              </div>
              <div className="d-flex mt-3">
                <Button className="w-50 me-1">Wordpress</Button>
                <Button className="w-50 ms-1">GitHub</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={7}></Col>
      </Row>
    </Container>
  )
}

export default PluginShowcase
