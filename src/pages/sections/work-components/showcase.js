import React from "react"
import { shuffleArray } from "../../../helpers"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"

const Showcase = ({ description, items }) => {
  const variants = shuffleArray([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ])

  return (
    <Container className="d-flex flex-column h-100 flex-grow-1">
      <Row className="flex-grow-1">
        <Col
          xs={12}
          className="flex-grow-1 d-flex justify-content-center align-items-end mb-4 text-center"
        >
          <p className="text-light">{description}</p>
        </Col>
      </Row>
      <Row className="flex-grow-1 justify-content-around">
        <Col
          xs={12}
          className="flex-grow-1 d-flex justify-content-center align-items-start"
        >
          <ListGroup>
            {Object.values(items).map((item, i) => {
              return (
                <ListGroup.Item variant={variants[i]} className="text-dark">
                  <Container>
                    <Row className="align-items-center">
                      <Col xs={12} xl={9}>
                        &rarr;&nbsp;<strong>{item.name}</strong> |{" "}
                        {item.description}
                      </Col>
                      <Col
                        xs={12}
                        xl={3}
                        className="d-flex flex-column align-items-center justify-content-center"
                      >
                        {item.buttons.map((button, i) => (
                          <Button
                            href={button[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline-dark"
                            className={`w-100 my-2`}
                          >
                            {button[0]}
                          </Button>
                        ))}
                      </Col>
                    </Row>
                  </Container>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default Showcase
