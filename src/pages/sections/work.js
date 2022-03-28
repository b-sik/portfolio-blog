import React, { useState } from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Work = () => {
  const [workItem, setWorkItem] = useState("work-item-1")

  return (
    <section
      id="work"
      className="d-flex flex-column w-100 min-vh-100 pb-5 bg-dark text-danger"
    >
      <Container>
        <Row>
          <Col xs={12}>
            <h3 className="my-5 text-end">work</h3>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex flex-column flex-grow-1 mb-5">
        <Row className="flex-grow-1">
          <Col xs={5} className="d-flex border-end border-secondary">
            <ul className="d-flex flex-column flex-grow-1 justify-content-around text-primary">
              <li
                id="work-item-1"
                className={`h4 ${
                  workItem === "work-item-1" ? "selected-work-item" : ""
                }`}
                onClick={e => setWorkItem(e.target.id)}
              >
                custom WordPress themes
              </li>
              <li
                id="work-item-2"
                className={`h4 ${
                  workItem === "work-item-2" ? "selected-work-item" : ""
                }`}
                onClick={e => setWorkItem(e.target.id)}
              >
                custom WordPress plugins
              </li>
              <li
                id="work-item-3"
                className={`h4 ${
                  workItem === "work-item-3" ? "selected-work-item" : ""
                }`}
                onClick={e => setWorkItem(e.target.id)}
              >
                other work
              </li>
            </ul>
          </Col>
          <Col xs={7}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work
