import React from "react"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"

const ThemeShowcase = () => {
  return (
    <Container className="d-flex flex-column h-100 flex-grow-1">
      <Row className="flex-grow-1">
        <Col
          xs={{ span: 10, offset: 1 }}
          className="flex-grow-1 d-flex justify-content-center align-items-end mb-4 text-center"
        >
          <p className="text-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>
      <Row className="flex-grow-1 justify-content-around">
        <Col
          xs={{ span: 10, offset: 1 }}
          className="flex-grow-1 d-flex justify-content-center align-items-start"
        >
          <ListGroup>
            <ListGroup.Item variant="secondary">
              <Container>
                <Row>
                  <Col xs={9}>
                    &rarr;&nbsp;<strong>Breath To Body</strong> | Rehabbed a
                    bloated WordPress site with a custom theme and
                    easy-to-update Content Management System.
                  </Col>
                  <Col
                    xs={3}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <Button
                      href="http://breathtobody.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-dark"
                      className="w-100"
                    >
                      visit site
                    </Button>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
            <ListGroup.Item variant="warning">
              <Container>
                <Row>
                  <Col xs={9}>
                    &rarr;&nbsp;<strong>West Ferry</strong> | Created a central hub for this band to show-off their work, run a blog, and archive their shows and albums.
                  </Col>
                  <Col
                    xs={3}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <Button
                      href="https://packagist.org/packages/bszyk/zip-wp"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline-dark"
                      className="mb-2 w-100"
                    >
                      visit site
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

export default ThemeShowcase
