import React, { useState } from "react"
import { handleKeyDown } from "../../helpers"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Work = () => {
  const [workListItem, setWorkListItems] = useState("work-item-0")

  const workList = [
    "custom WordPress themes",
    "custom WordPress plugins",
    "other work",
  ]

  const workListComponents = workList => {
    return workList.map((item, i) => {
      return (
        <li
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          id={`work-item-${i}`}
          tabIndex={0}
          className={`h4 ${
            workListItem === `work-item-${i}` ? "selected-work-item" : ""
          }`}
          onClick={e => setWorkListItems(e.target.id)}
          onKeyDown={e => handleKeyDown(e, setWorkListItems, e.target.id)}
        >
          {item}
        </li>
      )
    })
  }

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
              {workListComponents(workList)}
            </ul>
          </Col>
          <Col xs={7}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work
